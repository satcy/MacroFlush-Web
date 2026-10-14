import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { frameAtTime, withComponent, componentValue, valueAtFrame, moveKeyframe, snapshotClip, restoreClip } from "../src/timeline-model.js";

const original = JSON.parse(await readFile("projects/autec/project.json", "utf8"));
const project = structuredClone(original);
const composition = project.assets.find(asset => asset.id === project.rootCompositionId).composition;
const clip = composition.layers[0].clips[0];
const track = clip.keyframeTracks.color;
const snapshot = snapshotClip(clip);
assert.equal(frameAtTime(0, 60, 720), 0);
assert.equal(frameAtTime(12, 60, 720), 0);
assert.equal(frameAtTime(719 / 60, 60, 720), 719);
assert.equal(valueAtFrame(clip.params.color, track, 59), "#000000");
assert.equal(valueAtFrame(clip.params.color, track, 361), "#0094f0");

const key = track.find(key => key.frame === 361);
moveKeyframe(track, key, 373, 719, withComponent(key.value, 200, 0));
assert.notEqual(key.frame, 373, "Moving onto another key must avoid duplicate frames");
assert.equal(key.value, "#c894f0", "Curve edit should preserve unedited color channels");
assert.equal(componentValue(key.value, 1), 148);
moveKeyframe(track, key, 9999, 719);
assert.equal(key.frame, 719);
moveKeyframe(track, key, -90, 719);
assert(key.frame >= 0 && key.frame <= 719);
assert.equal(new Set(track.map(key => key.frame)).size, track.length);
assert.deepEqual(track.map(key => key.frame), [...track].sort((a, b) => a.frame - b.frame).map(key => key.frame));

const placement = clip;
const colorSchema = clip.params.color;
restoreClip(clip, snapshot);
assert.equal(clip, placement, "Restoring keys must preserve the live placement identity");
assert.equal(clip.params.color, colorSchema, "Restoring keys must preserve the live schema identity");
assert.deepEqual(snapshotClip(clip), snapshot);
assert.deepEqual(project, original, "Editing and undo must restore the actual project document");
console.log("Verified frame wrapping, final-frame seeking, key collisions, RGB edits, bounds, and identity-preserving undo.");
