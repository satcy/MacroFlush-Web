export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const frameAtTime = (time, fps, durationFrames) => clamp(Math.floor((time * fps + 1e-6) % durationFrames), 0, durationFrames - 1);
export function colorChannels(value) { return [1, 3, 5].map(index => parseInt(value.slice(index, index + 2), 16)); }
export function componentValue(value, channel = 0) {
  return typeof value === "string" && /^#[\da-f]{6}$/i.test(value) ? colorChannels(value)[channel]
    : Array.isArray(value) ? value[channel] : Number(value);
}
export function withComponent(value, component, channel = 0) {
  if (typeof value === "string" && /^#[\da-f]{6}$/i.test(value)) {
    const channels = colorChannels(value); channels[channel] = Math.round(clamp(component, 0, 255));
    return "#" + channels.map(v => v.toString(16).padStart(2, "0")).join("");
  }
  if (Array.isArray(value)) { const next = [...value]; next[channel] = component; return next; }
  return component;
}
// The editable Autec tracks are linear. Rendering always uses the real Player's
// evaluator; this helper only locates values for graph labels and new keys.
export function valueAtFrame(param, track, frame) {
  const sorted = [...(track || [])].sort((a, b) => a.frame - b.frame);
  if (!sorted.length) return structuredClone(param.value);
  if (frame <= sorted[0].frame) return structuredClone(sorted[0].value);
  const a = [...sorted].reverse().find(key => key.frame <= frame);
  const b = sorted.find(key => key.frame > frame);
  if (!b || a.easing === "step" && param.type !== "color") return structuredClone(a.value);
  const t = (frame - a.frame) / (b.frame - a.frame);
  const lerp = (x, y) => x + (y - x) * t;
  if (param.type === "color") return "#" + colorChannels(a.value).map((v, i) => Math.round(clamp(lerp(v, colorChannels(b.value)[i]), 0, 255)).toString(16).padStart(2, "0")).join("");
  if (Array.isArray(a.value)) return a.value.map((v, i) => lerp(v, b.value[i]));
  return lerp(Number(a.value), Number(b.value));
}
export function availableFrame(track, key, requested, lastFrame) {
  const frame = clamp(Math.round(requested), 0, lastFrame);
  const occupied = new Set(track.filter(item => item !== key).map(item => item.frame));
  if (!occupied.has(frame)) return frame;
  for (let offset = 1; offset <= lastFrame; offset++) {
    if (frame + offset <= lastFrame && !occupied.has(frame + offset)) return frame + offset;
    if (frame - offset >= 0 && !occupied.has(frame - offset)) return frame - offset;
  }
  return key?.frame ?? frame;
}
export function moveKeyframe(track, key, requested, lastFrame, value = key.value) {
  key.frame = availableFrame(track, key, requested, lastFrame);
  key.value = value;
  track.sort((a, b) => a.frame - b.frame);
  return key;
}
export function snapshotClip(clip) { return structuredClone({ params: clip.params, keyframeTracks: clip.keyframeTracks || {} }); }
export function restoreClip(clip, snapshot) {
  // Retain the placement and schema identities that the Player mounted.
  for (const [key, param] of Object.entries(snapshot.params)) clip.params[key].value = structuredClone(param.value);
  clip.keyframeTracks = structuredClone(snapshot.keyframeTracks);
}
