import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { crc32 } from "./tutorial-archive.mjs";
function storedZip(buffer) {
  const files = new Map(); let cursor = 0;
  while (buffer.readUInt32LE(cursor) === 0x04034b50) {
    assert.equal(buffer.readUInt16LE(cursor + 8), 0, "Expected portable stored ZIP entries");
    const size = buffer.readUInt32LE(cursor + 18), pathSize = buffer.readUInt16LE(cursor + 26), extra = buffer.readUInt16LE(cursor + 28);
    const name = buffer.subarray(cursor + 30, cursor + 30 + pathSize).toString();
    assert(!name.startsWith("/") && !name.split("/").includes(".."));
    const start = cursor + 30 + pathSize + extra, data = buffer.subarray(start, start + size);
    assert.equal(data.length, size); assert.equal(crc32(data), buffer.readUInt32LE(cursor + 14));
    assert(!files.has(name)); files.set(name, data); cursor = start + size;
  }
  assert.equal(buffer.readUInt32LE(cursor), 0x02014b50, "Missing ZIP central directory");
  assert.equal(buffer.readUInt32LE(buffer.length - 22), 0x06054b50);
  assert.equal(buffer.readUInt16LE(buffer.length - 12), files.size);
  return files;
}
const folder = "dist/projects/tutorials/embed-player";
const kit = storedZip(await readFile(`${folder}/web-kit.zip`));
for (const file of ["start.html", "complete.html", "start.json", "complete.json", "player-host.js", "WEB-KIT.txt"]) {
  assert(kit.has(file), `Missing kit component ${file}`);
  assert(kit.get(file).equals(await readFile(`${folder}/${file}`)));
}
async function verifyPlayer(dir, prefix = "") {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const relative = prefix + item.name;
    if (item.isDirectory()) await verifyPlayer(`${dir}/${item.name}`, relative + "/");
    else assert(kit.get("player/" + relative)?.equals(await readFile(`${dir}/${item.name}`)), `Changed or missing kit Player resource ${relative}`);
  }
}
await verifyPlayer("vendor/player");
for (const stage of ["start", "complete"]) {
  const html = kit.get(stage + ".html").toString();
  assert(html.includes('src="./player-host.js"')); assert(html.includes(`data-stage="${stage}"`));
  assert(!/(?:href|src)="\//.test(html), "Kit must work under any subdirectory");
}
const host = kit.get("player-host.js").toString();
assert.equal(host, await readFile("src/tutorial-player-host.js", "utf8"));
const stems = storedZip(await readFile("projects/tutorials/stem-reactive/practice-stems.zip"));
assert.deepEqual([...stems.keys()].sort(), ["bass.wav", "drums.wav", "mix.wav", "other.wav", "vocals.wav"]);
for (const [name, bytes] of stems) assert(bytes.equals(await readFile(`projects/tutorials/stem-reactive/${name}`)));
console.log("Verified standalone web kit, unchanged Player dependencies and portable practice-stem ZIP.");
