import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { createHash } from "node:crypto";
import { build } from "./build.mjs";
import { examples } from "../src/examples.js";
import { api, groups } from "../src/content.js";

await build();
const root = resolve("dist");
async function files(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) found.push(...await files(path)); else found.push(path);
  }
  return found;
}
const htmlFiles = (await files(root)).filter(file => file.endsWith(".html"));
assert.equal(new Set(api.map(entry => entry.id)).size, api.length);
for (const entry of api) {
  assert(groups.some(group => group.id === entry.group));
  if (entry.group !== "player" && !entry.label?.startsWith("set_clip")) {
    assert.doesNotThrow(() => new Function(entry.code), `Invalid Reference snippet: ${entry.id}`);
  }
}
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate ID in ${file}`);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^https?:/.test(url)) continue;
    if (url.startsWith("#")) { assert(ids.includes(url.slice(1)), `Missing anchor ${url} in ${file}`); continue; }
    const path = url.startsWith("/") ? resolve(root, `.${url}`) : resolve(dirname(file), url);
    assert(path.startsWith(root), `Path escapes output: ${url}`);
    assert(await stat(path), `Missing local target ${url} in ${file}`);
  }
  if (!file.endsWith("404.html")) {
    assert.equal((html.match(/aria-current="page"/g) || []).length, file.includes("/tutorials/") && !file.endsWith("/tutorials/index.html") ? 2 : 1);
    assert(html.includes('<html lang="ja">'));
  }
}
const provenance = JSON.parse(await readFile("vendor/provenance.json", "utf8"));
assert.equal(createHash("sha256").update(await readFile("vendor/player/macroflush-player.js")).digest("hex"), provenance.playerSha256);
assert.equal(await readFile("dist/player/macroflush-player.js", "utf8"), await readFile("vendor/player/macroflush-player.js", "utf8"));
for (const example of examples) {
  const project = JSON.parse(await readFile(resolve(root, `.${example.projectUrl}`), "utf8"));
  assert.equal(project.clipFormatVersion, 2);
  const ids = project.assets.map(asset => asset.id);
  assert.equal(new Set(ids).size, ids.length);
  const composition = project.assets.find(asset => asset.id === project.rootCompositionId)?.composition;
  assert(composition && composition.width > 0 && composition.height > 0 && composition.fps > 0 && composition.durationFrames > 0);
  for (const layer of composition.layers) for (const clip of layer.clips) {
    assert(ids.includes(clip.assetId), `Missing asset for ${example.id}/${clip.id}`);
    assert(clip.inFrame >= 0 && clip.outFrame > clip.inFrame);
  }
  for (const asset of project.assets) if (asset.sourceUrl) assert(asset.sourceUrl.startsWith("data:"), `Non-portable asset: ${asset.name}`);
  const source = await readFile("dist/assets/client.js", "utf8");
  assert(!source.includes(".draw("), "Site is drawing a substitute instead of using the Player");
}
const showcase = JSON.parse(await readFile("projects/showcase/project.json", "utf8"));
for (const example of examples.filter(e => e.id !== "showcase")) {
  const project = JSON.parse(await readFile(`projects/${example.id}/project.json`, "utf8"));
  const asset = project.assets.find(asset => asset.kind === "html-clip");
  const original = showcase.assets.find(original => original.id === asset.id);
  assert.deepEqual(asset.htmlTemplate.source, original.htmlTemplate.source, `Modified application Clip source: ${example.id}`);
}
console.log(`Verified ${htmlFiles.length} pages, links, original Player bytes, and 6 portable MacroFlush projects with unchanged Clip sources.`);
await import("./check-timeline.mjs");
