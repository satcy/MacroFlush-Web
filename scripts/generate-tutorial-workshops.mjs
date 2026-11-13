// Rebuild only the site's authored workshop materials; never sync application examples.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { curveCode, feedbackCode, shaderInputCode, chromaticShader, passthroughShader, audioCode, typographyCode, paletteCode, swarmDotCode, swarmCode, cameraFlightShots, cameraCourseCode } from "../src/workshop-code.js";

const seed = JSON.parse(await readFile("projects/tutorials/p5-timeline/start.json", "utf8"));
const seedClip = seed.assets.find(asset => asset.kind === "html-clip").htmlTemplate;
const number = (key, value, min = 0, max = 1) => ({ key, type: "number", default: value, value, min, max, step: 0.01, interpolable: true, group: "custom", writable: false, version: 1 });
const string = (key, value, type = "string") => ({ key, type, default: value, value, interpolable: type === "color", group: "custom", writable: false, version: 1 });
const keys = (values, easing = "linear") => values.map(([frame, value]) => ({ frame, value, easing }));
function project(slug, title, durationFrames = 240) {
  return { clipFormatVersion: 2, rootCompositionId: `tutorial-${slug}`, assets: [{ id: `tutorial-${slug}`, kind: "composition", name: title, detail: "1280 x 720, 60 fps", composition: {
    width: 1280, height: 720, fps: 60, bpm: 120, durationFrames, cues: {}, cueScript: "", layers: []
  } }], remoteAssetPolicy: structuredClone(seed.remoteAssetPolicy) };
}
const comp = p => p.assets[0].composition;
function html(p, id, name, js, custom = {}, size = [1280, 720]) {
  const c = structuredClone(seedClip);
  for (const field of ["libraries", "capabilities", "p5Playback", "p5ReplayLimits", "feedback"]) delete c[field];
  Object.assign(c, { id, name, assetId: `${id}-asset`, inFrame: 0, outFrame: comp(p).durationFrames, source: {
    html: '<canvas id="stage"></canvas>', css: "html,body{margin:0;overflow:hidden;background:transparent}canvas{display:block;width:100%;height:100%}", js
  }, keyframeTracks: {} });
  for (const [key, param] of Object.entries(c.params)) if (param.group === "custom") delete c.params[key];
  Object.assign(c.params, structuredClone(custom));
  c.params.size.default = c.params.size.value = size;
  c.params.anchorPoint.default = c.params.anchorPoint.value = size.map(v => v / 2);
  p.assets.push({ id: c.assetId, kind: "html-clip", name, detail: "Workshop HTML Clip", clipId: id, htmlTemplate: structuredClone(c) });
  return c;
}
function layer(p, c, name = c.name) { comp(p).layers.push({ id: `${c.id}-layer`, name, kind: "chromium", visible: true, clips: [c] }); }
function templates(p) {
  for (const c of comp(p).layers.flatMap(l => l.clips)) {
    const asset = p.assets.find(a => a.id === c.assetId);
    if (c.kind === "html") asset.htmlTemplate = structuredClone(c);
    if (c.kind === "shader") asset.shaderTemplate = structuredClone(c);
  }
}
function recording(smooth) {
  const records = []; let seq = 0;
  for (let stroke = 0; stroke < 2; stroke++) {
    for (let i = 0; i <= 105; i++) {
      const u = i / 105, down = i < 105;
      records.push({ t: stroke * 4000000 + Math.round(u * 3500000), seq: ++seq,
        x: 160 + 960 * u,
        y: 360 + Math.sin(u * Math.PI * 2 + stroke * Math.PI) * 145 + (smooth ? 0 : Math.sin(i * 1.7) * 20),
        buttons: down ? 1 : 0, inside: true,
        event: i === 0 ? "down" : down ? "move" : "up", ...(i === 0 || !down ? { button: 0 } : {}) });
    }
  }
  return { formatVersion: 1, timeUnit: "us", durationUs: 8000000, source: { width: 1280, height: 720 }, channels: [
    { id: "pointer", kind: "pointer", initial: { x: 160, y: 360, buttons: 0, inside: false }, records }
  ] };
}
function beat() {
  const sr = 22050, samples = sr * 8, bytes = Buffer.alloc(44 + samples * 2);
  bytes.write("RIFF"); bytes.writeUInt32LE(bytes.length - 8, 4); bytes.write("WAVEfmt ", 8); bytes.writeUInt32LE(16, 16);
  bytes.writeUInt16LE(1, 20); bytes.writeUInt16LE(1, 22); bytes.writeUInt32LE(sr, 24); bytes.writeUInt32LE(sr * 2, 28);
  bytes.writeUInt16LE(2, 32); bytes.writeUInt16LE(16, 34); bytes.write("data", 36); bytes.writeUInt32LE(samples * 2, 40);
  let random = 371;
  for (let i = 0; i < samples; i++) {
    const t = i / sr, kick = t % 0.5, hat = t % 0.25, note = Math.floor(t / 0.5) % 4;
    random = (Math.imul(random, 1664525) + 1013904223) >>> 0;
    const signal = 0.48 * Math.sin(2 * Math.PI * (58 * kick + 35 * (1 - Math.exp(-kick * 24)) / 24)) * Math.exp(-kick * 18)
      + 0.18 * Math.sin(2 * Math.PI * [220, 277.18, 329.63, 440][note] * t) * Math.exp(-kick * 5)
      + 0.15 * (random / 2147483648 - 1) * Math.exp(-hat * 65);
    bytes.writeInt16LE(Math.round(Math.max(-1, Math.min(1, signal)) * 32767), 44 + i * 2);
  }
  return bytes;
}

const names = {
  "curve-motion": "Curve Motion", "feedback-pointer": "Pointer Study", "feedback-editor": "Stroke Editing",
  "shader-chromatic": "Chromatic Study", "audio-reactive": "Audio Bands", "kinetic-type": "Kinetic Type",
  "shared-palette": "One Hue", "camera-work": "Camera Study", "runtime-swarm": "Runtime Swarm"
};
const requested = process.argv.slice(2);
if (requested.some(slug => !Object.hasOwn(names, slug))) throw new Error("Unknown workshop slug");
for (const [slug, title] of Object.entries(names).filter(([slug]) => !requested.length || requested.includes(slug))) {
  const folder = `projects/tutorials/${slug}`; await mkdir(folder, { recursive: true });
  for (const stage of ["start", "complete"]) {
    const done = stage === "complete";
    let p = project(slug, title, ["feedback-pointer", "feedback-editor", "audio-reactive", "camera-work"].includes(slug) ? 480 : 240);
    if (slug === "curve-motion") {
      for (const [i, label, tint, easing] of [[0, "LINEAR", "#5dd4ff", "linear"], [1, "SINE IN OUT", "#ff6b9d", "sineInOut"], [2, "BACK OUT", "#ffdc63", "backOut"]]) {
        const c = html(p, `ball-${i}`, label, curveCode, { x: number("x", 230, 100, 1180), row: number("row", 180 + i * 180, 0, 720), label: string("label", label), tint: string("tint", tint, "color") });
        c.keyframeTracks.x = keys([[0, 230], [119, 1080], [239, 230]], done ? easing : "linear"); layer(p, c);
      }
    } else if (slug.startsWith("feedback-")) {
      const c = html(p, "pointer-clip", "Pointer Reader", feedbackCode, { takeName: string("takeName", "Hand Take") });
      c.feedback = { assetId: "hand-take", space: "clip", offset: 0, rate: 1, loop: false }; layer(p, c);
      const take = recording(done && slug === "feedback-editor");
      p.assets.push({ id: "hand-take", name: "Hand Take", kind: "feedback", detail: "Generated practice strokes / 8 sec", recording: take });
      if (!done) await writeFile(`${folder}/practice-feedback.json`, JSON.stringify(take, null, 2) + "\n");
    } else if (slug === "shader-chromatic") {
      const input = html(p, "input", "Source", shaderInputCode); layer(p, input, "Source");
      const shader = { id: "chromatic", name: "Chromatic", kind: "shader", assetId: "chromatic-asset", inFrame: 0, outFrame: 240, authoredBy: "human", remoteAssets: [], params: { amount: number("amount", done ? 14 : 0, 0, 24) }, source: { fragmentShader: done ? chromaticShader : passthroughShader }, keyframeTracks: done ? { amount: keys([[0, 0], [60, 14], [120, 0], [180, 20], [239, 0]], "sineInOut") } : {} };
      p.assets.push({ id: shader.assetId, name: shader.name, kind: "shader-clip", detail: "GLSL chromatic aberration", shaderTemplate: structuredClone(shader) });
      comp(p).layers.unshift({ id: "effect", name: "RGB Effect", kind: "effect", visible: true, effectInputMode: "selected", effectMembers: ["input-layer"], clips: [shader] });
    } else if (slug === "audio-reactive") {
      const c = html(p, "bands", "Bands", done ? audioCode : audioCode.replace('audioBand("Workshop Beat", bands[i])', "0.05"), { gain: number("gain", 2, 0, 6) }); layer(p, c);
      const wav = beat();
      p.assets.push({ id: "workshop-beat", name: "Workshop Beat", kind: "audio", detail: "Original synthetic beat / 8 sec / mono PCM", sourceUrl: `data:audio/wav;base64,${wav.toString("base64")}` });
      const audio = { id: "beat-clip", name: "Workshop Beat", kind: "audio", assetId: "workshop-beat", inFrame: 0, outFrame: 480, params: { volume: { ...number("volume", 0.6, 0, 1), group: "builtin" } } };
      comp(p).layers.push({ id: "audio-layer", name: "Music", kind: "chromium", visible: true, clips: [audio] });
      if (!done) await writeFile(`${folder}/workshop-beat.wav`, wav);
    } else if (slug === "kinetic-type") {
      const c = html(p, "title", "Title", typographyCode, { title: string("title", "MOTION"), reveal: number("reveal", done ? 0 : 1), tint: string("tint", "#5dd4ff", "color") });
      if (done) c.keyframeTracks.reveal = keys([[0, 0], [90, 1], [180, 1], [239, 0]]); layer(p, c);
    } else if (slug === "shared-palette") {
      comp(p).parameters = { hue: number("hue", 200, 0, 360) };
      if (done) comp(p).parameterKeyframeTracks = { hue: keys([[0, 200], [120, 320], [239, 200]], "sineInOut") };
      // First entry is uppermost in the Timeline; the opaque background goes last.
      for (const i of [2, 1, 0]) { const c = html(p, `panel-${i}`, ["Title + Background", "Rings", "Bars"][i], paletteCode, { panel: number("panel", i, 0, 2) }); layer(p, c); }
    } else if (slug === "camera-work") {
      p = JSON.parse(await readFile("projects/tutorials/timeline-3d/complete.json", "utf8"));
      p.assets[0].name = title; comp(p).durationFrames = 480;
      const clips = comp(p).layers.flatMap(l => l.clips);
      for (const c of clips) { c.outFrame = 480; delete c.keyframeTracks; }
      const meshRig = clips.find(c => c.id === "rig-placement");
      const camera = clips.find(c => c.id === "camera-placement");
      meshRig.params.rotation.value = [0, 0, 0];
      const cameraAsset = p.assets.find(a => a.id === camera.assetId);
      cameraAsset.name = "Camera A";
      p.assets.push({ ...structuredClone(cameraAsset), id: "camera-b", name: "Camera B" });
      const cameraLayer = comp(p).layers.find(l => l.clips.includes(camera));
      cameraLayer.name = "Camera A / B";
      cameraLayer.clips = cameraFlightShots.map((shot, i) => {
        const c = structuredClone(camera);
        Object.assign(c, { id: `camera-shot-${i + 1}`, name: `Camera ${i % 2 ? "B" : "A"} / ${String(i + 1).padStart(2, "0")}`,
          assetId: i % 2 ? "camera-b" : cameraAsset.id, inFrame: i * 60, outFrame: (i + 1) * 60,
          cameraTransition: { type: done && i > 0 ? "transform" : "cut", durationFrames: done && i > 0 ? 60 : 0 } });
        delete c.parentPlacementId;
        c.params.position.value = shot.position;
        c.params.rotation.value = shot.rotation.map(v => v * Math.PI / 180);
        c.params.fov.value = shot.fov;
        c.params.aimMode.value = "rotation";
        return c;
      });
      clips.find(c => c.id === "scene1").source.js = cameraCourseCode;
    } else if (slug === "runtime-swarm") {
      const controller = html(p, "controller", "Swarm Controller", done ? swarmCode : swarmCode.replace("i < 36", "i < 1"), { spread: number("spread", 1, 0.4, 1.4) }); layer(p, controller);
      const backdrop = html(p, "backdrop", "Background", 'clip.use("centi");\nsetup(() => size(1280, 720));\nonFrame(() => { bg("#0c0f17"); });'); layer(p, backdrop);
      html(p, "dot-template", "Dot", swarmDotCode, {}, [80, 80]);
      if (done) controller.keyframeTracks.spread = keys([[0, 0.55], [120, 1.15], [239, 0.55]], "sineInOut");
    }
    templates(p);
    await writeFile(`${folder}/${stage}.json`, JSON.stringify(p, null, 2) + "\n");
  }
}
console.log(`Generated ${2 * (requested.length || Object.keys(names).length)} self-contained workshop projects.`);
