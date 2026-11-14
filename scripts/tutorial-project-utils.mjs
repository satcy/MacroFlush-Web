import { readFile } from "node:fs/promises";
export const seed = JSON.parse(await readFile("projects/tutorials/p5-timeline/start.json", "utf8"));
const base = seed.assets.find(a => a.kind === "html-clip").htmlTemplate;
export const number = (key, value, min = 0, max = 1, step = 0.01) => ({ key, type: "number", default: value, value, min, max, step, interpolable: true, group: "custom", writable: false, version: 1 });
export const text = (key, value, type = "string") => ({ key, type, default: value, value, interpolable: type === "color", group: "custom", writable: false, version: 1 });
export const keys = (rows, easing = "linear") => rows.map(([frame, value]) => ({ frame, value, easing }));
export const composition = (name, frames = 240, width = 1280, height = 720) => ({ id: name, kind: "composition", name, detail: `${width} x ${height}, 60 fps`, composition: { width, height, fps: 60, bpm: 120, durationFrames: frames, cues: {}, cueScript: "", layers: [] } });
export function project(id, frames = 240) { return { clipFormatVersion: 2, rootCompositionId: id, assets: [composition(id, frames)], remoteAssetPolicy: structuredClone(seed.remoteAssetPolicy) }; }
export const root = p => p.assets.find(a => a.id === p.rootCompositionId).composition;
export function html(p, id, name, js, custom = {}, target = root(p)) {
  const c = structuredClone(base);
  for (const field of ["libraries", "capabilities", "p5Playback", "p5ReplayLimits", "feedback"]) delete c[field];
  Object.assign(c, { id, name, assetId: `${id}-asset`, inFrame: 0, outFrame: target.durationFrames, source: { html: '<canvas id="stage"></canvas>', css: "html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}canvas{width:100%;height:100%;display:block}", js }, keyframeTracks: {} });
  for (const [key, param] of Object.entries(c.params)) if (param.group === "custom") delete c.params[key];
  Object.assign(c.params, custom);
  for (const key of ["size", "anchorPoint"]) c.params[key].default = c.params[key].value = key === "size" ? [target.width, target.height] : [target.width / 2, target.height / 2];
  p.assets.push({ id: c.assetId, kind: "html-clip", name, detail: "Site-authored tutorial", clipId: id, htmlTemplate: structuredClone(c) });
  return c;
}
export function layer(p, c, { name = c.name, visible = true, target = root(p) } = {}) { const l = { id: `${c.id}-layer`, name, kind: "chromium", visible, clips: [c] }; target.layers.push(l); return l; }
export function templates(p) {
  for (const a of p.assets.filter(a => a.kind === "composition")) for (const c of a.composition.layers.flatMap(l => l.clips)) {
    const asset = p.assets.find(a => a.id === c.assetId);
    if (c.kind === "html") asset.htmlTemplate = structuredClone(c);
    if (c.kind === "shader") asset.shaderTemplate = structuredClone(c);
  }
}
export function shader(p, id, fragmentShader, params) {
  const c = { id, name: id, kind: "shader", assetId: `${id}-asset`, inFrame: 0, outFrame: root(p).durationFrames, authoredBy: "human", remoteAssets: [], params, source: { fragmentShader }, keyframeTracks: {} };
  p.assets.push({ id: c.assetId, name: id, kind: "shader-clip", detail: "Site-authored GLSL effect", shaderTemplate: structuredClone(c) });
  return c;
}
export function wav(sample, seconds = 8, sr = 22050) {
  const count = seconds * sr, b = Buffer.alloc(44 + count * 2);
  b.write("RIFF"); b.writeUInt32LE(b.length - 8, 4); b.write("WAVEfmt ", 8); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
  b.writeUInt32LE(sr, 24); b.writeUInt32LE(sr * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write("data", 36); b.writeUInt32LE(count * 2, 40);
  for (let i = 0; i < count; i++) b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, sample(i / sr, i))) * 32767), 44 + i * 2);
  return b;
}
export const embedded = (type, b) => `data:${type};base64,${b.toString("base64")}`;
