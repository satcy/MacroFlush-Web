import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import { examples } from "../src/examples.js";

const appRoot = resolve(process.env.MACROFLUSH_ROOT || "../MacroFlush");
const playerDir = resolve(appRoot, "dist/player");
await mkdir("vendor/player", { recursive: true });
await cp(playerDir, "vendor/player", { recursive: true, filter: path => !path.endsWith(".DS_Store") });
const original = await readFile(resolve(appRoot, "src/sample/sampleProject.json"));
const source = JSON.parse(original);
const mimeTypes = { png: "image/png", mp4: "video/mp4", mp3: "audio/mpeg", ttf: "font/ttf", woff2: "font/woff2" };

// Keep project semantics and Clip sources; embed linked media for portable downloads.
for (const asset of source.assets) {
  if (!asset.sourceUrl || /^(data:|blob:|https?:)/.test(asset.sourceUrl)) continue;
  const file = resolve(playerDir, asset.sourceUrl);
  if (!file.startsWith(playerDir + "/")) throw new Error(`External project asset: ${asset.sourceUrl}`);
  const data = await readFile(file);
  const extension = file.split(".").pop();
  asset.sourceUrl = `data:${mimeTypes[extension] || "application/octet-stream"};base64,${data.toString("base64")}`;
}
const root = source.assets.find(a => a.id === source.rootCompositionId);
for (const example of examples.filter(e => e.id === "showcase" || e.appClip)) {
  let project = source;
  if (example.id !== "showcase") {
    const asset = structuredClone(source.assets.find(a => a.kind === "html-clip" && a.name === example.appClip));
    if (!asset) throw new Error(`Clip not found: ${example.title}`);
    const clip = structuredClone(asset.htmlTemplate);
    const size = clip.params.size.value;
    clip.params.anchorPoint.value = [size[0] / 2, size[1] / 2];
    clip.params.position.value = [0, 0];
    clip.inFrame = 0; clip.outFrame = root.composition.durationFrames;
    const placement = root.composition.layers.flatMap(layer => layer.clips).find(item => item.assetId === asset.id);
    if (placement?.keyframeTracks?.color) {
      clip.keyframeTracks = { color: structuredClone(placement.keyframeTracks.color) };
    }
    project = {
      clipFormatVersion: 2,
      rootCompositionId: `example-${example.id}`,
      assets: [{
        id: `example-${example.id}`, kind: "composition", name: example.title,
        detail: root.detail,
        composition: {
          width: root.composition.width, height: root.composition.height,
          fps: root.composition.fps, bpm: root.composition.bpm,
          durationFrames: root.composition.durationFrames,
          cues: {}, cueScript: "",
          layers: [{ id: `layer-${example.id}`, name: example.title, kind: "chromium", visible: true, clips: [clip] }]
        }
      }, asset],
      remoteAssetPolicy: structuredClone(source.remoteAssetPolicy)
    };
  }
  await mkdir(`projects/${example.id}`, { recursive: true });
  await writeFile(`projects/${example.id}/project.json`, JSON.stringify(project, null, 2) + "\n");
}
await writeFile("vendor/provenance.json", JSON.stringify({
  source: "MacroFlush/src/sample/sampleProject.json", sourceSha256: createHash("sha256").update(original).digest("hex"),
  player: "MacroFlush/dist/player", playerSha256: createHash("sha256").update(await readFile(resolve(playerDir, "macroflush-player.js"))).digest("hex"),
  adaptation: "Showcase: linked media embedded. Individual projects: original HTML Clip sources with centered standalone placement."
}, null, 2) + "\n");
console.log("Synced MacroFlush Player and 6 real project files.");
