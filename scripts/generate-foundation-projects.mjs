// Authored starter/completed pairs for tutorials 01–03. Application files are read-only.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { lessons } from "../src/content.js";

const seed = JSON.parse(await readFile("projects/tutorials/p5-timeline/start.json", "utf8"));
const template = seed.assets.find(a => a.kind === "html-clip").htmlTemplate;
const firstCode = lessons.find(l => l.id === "first-clip").steps[1].code;
const parameterCode = lessons.find(l => l.id === "parameters").steps[0].code;
const overlayCode = `clip.use("centi");
setup(() => {
  size(720, 405);
  bg(0, 0);
});
${lessons.find(l => l.id === "composition").steps[1].code}`;

for (const [id, name] of [["first-clip", "First Clip"], ["parameters", "Parameters"], ["composition", "Composition"]]) {
  const folder = `projects/tutorials/${id}`; await mkdir(folder, { recursive: true });
  for (const stage of ["start", "complete"]) {
    const done = stage === "complete";
    const composition = { width: 720, height: 405, fps: 60, bpm: 120, durationFrames: 360, cues: {}, cueScript: "", layers: [] };
    const project = { clipFormatVersion: 2, rootCompositionId: `tutorial-${id}`, assets: [
      { id: `tutorial-${id}`, kind: "composition", name, detail: "720 x 405, 60 fps", composition }
    ], remoteAssetPolicy: structuredClone(seed.remoteAssetPolicy) };
    function clip(clipId, clipName, js) {
      const c = structuredClone(template);
      for (const field of ["libraries", "capabilities", "p5Playback", "p5ReplayLimits", "feedback"]) delete c[field];
      Object.assign(c, { id: clipId, name: clipName, assetId: `${clipId}-asset`, inFrame: 0, outFrame: 360,
        source: { html: "", css: "", js }, keyframeTracks: {} });
      c.params.size.default = c.params.size.value = [720, 405];
      c.params.anchorPoint.default = c.params.anchorPoint.value = [360, 202.5];
      return c;
    }
    const circle = clip("circle", "Circle", id === "first-clip" && !done ? firstCode.replace("360 + Math.sin(time) * 120", "360") : firstCode);
    if (id === "parameters" && done) {
      circle.source.js = parameterCode;
      circle.params.speed = { key: "speed", type: "number", default: 1, value: 1, min: 0, max: 3, step: 0.01, interpolable: true, group: "custom", writable: false, version: 1 };
      circle.params.tint = { key: "tint", type: "color", default: "#5dd4ff", value: "#5dd4ff", space: "srgb", interpolable: true, group: "custom", writable: false, version: 1 };
      circle.keyframeTracks.speed = [[0, 1], [180, 2], [359, 1]].map(([frame, value]) => ({ frame, value, easing: "linear" }));
    }
    if (id === "composition") {
      const overlay = clip("overlay", "Overlay", done ? overlayCode : overlayCode.replace("bg(0, 0)", "bg(0)"));
      composition.layers.push({ id: "overlay-layer", name: "Overlay", kind: "chromium", visible: true, clips: [overlay] });
      if (done) {
        composition.cues = { Intro: { frame: 0, mode: "none", endFrame: 180 }, Loop: { frame: 180, mode: "loop", endFrame: 360 } };
        composition.cueScript = lessons.find(l => l.id === id).steps[2].code;
      }
    }
    composition.layers.push({ id: "circle-layer", name: "Circle", kind: "chromium", visible: true, clips: [circle] });
    for (const c of composition.layers.flatMap(l => l.clips)) project.assets.push({ id: c.assetId, kind: "html-clip", name: c.name, detail: "Foundation tutorial HTML Clip", clipId: c.id, htmlTemplate: structuredClone(c) });
    await writeFile(`${folder}/${stage}.json`, JSON.stringify(project, null, 2) + "\n");
  }
}
console.log("Generated six portable projects for tutorials 01–03.");
