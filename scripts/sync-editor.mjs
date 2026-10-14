import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve, relative } from "node:path";
import { createHash } from "node:crypto";

const source = resolve(process.env.MACROFLUSH_ROOT || "../MacroFlush", "dist");
const destination = resolve("vendor/editor");
// Validate the entry before replacing the existing snapshot.
await readFile(resolve(source, "index.html"));
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true, filter: path => !path.endsWith(".DS_Store") });

async function hashes(directory) {
  const result = {};
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) Object.assign(result, await hashes(path));
    else result[relative(destination, path)] = createHash("sha256").update(await readFile(path)).digest("hex");
  }
  return result;
}
await writeFile("vendor/editor-provenance.json", JSON.stringify({
  source: "MacroFlush/dist", adaptation: "Unmodified browser Editor distribution", files: await hashes(destination)
}, null, 2) + "\n");
console.log("Synced the complete MacroFlush browser Editor distribution.");
