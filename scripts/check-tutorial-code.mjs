import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { createContext, runInContext } from "node:vm";
import { feedbackCode, feedbackSampleCode, typographyCode } from "../src/workshop-code.js";
import { productSceneCode, productSceneStarterCode } from "../src/advanced-code.js";

function fixture(source) {
  let draw, time = 0, revision = 0, reads = 0, opened = 0, measured = 0;
  let trace = [];
  const optionsSeen = new Set();
  const point = seconds => ({ x: seconds * 10 + revision, y: seconds * 20, buttons: 1, inside: true });
  const clip = { takeName: "Hand Take", title: "MOTION", tint: "#5dd4ff", reveal: 1, use() {}, defineParams() {} };
  const context = createContext({
    clip, setup: fn => fn(), onFrame: fn => { draw = fn; }, size() {},
    bg() {}, col() {}, fill() {}, rect() {}, lineWidth() {}, lineCap() {}, stroke() {}, beginShape() {}, endShape() {}, font() {}, hcol() {},
    moveTo: (x, y) => trace.push(["move", x, y]), lineTo: (x, y) => trace.push(["line", x, y]),
    oval: (x, y) => trace.push(["dot", x, y]), text: (value, x, y) => trace.push([value, x, y]),
    min: Math.min, max: Math.max, ceil: Math.ceil, pow: Math.pow, hexToInt: value => parseInt(value.slice(1), 16),
    getContext: () => ({ measureText: letter => { measured++; return { width: letter.codePointAt(0) % 20 + 10 }; } }),
    feedback(name) {
      opened++;
      assert.equal(name, clip.takeName);
      return {
        sample(id, options) { assert.equal(id, "pointer"); optionsSeen.add(options); return point(time); },
        at(id, seconds, options) { assert.equal(id, "pointer"); optionsSeen.add(options); reads++; return point(seconds); }
      };
    }
  });
  runInContext(source, context);
  return {
    clip,
    draw(nextTime) { time = nextTime; trace = []; reads = 0; draw({ time }); return trace; },
    replace() { revision++; },
    counts: () => ({ opened, reads, measured, options: optionsSeen.size })
  };
}

for (const source of [feedbackSampleCode, feedbackCode]) {
  const study = fixture(source);
  study.draw(0);
  assert.equal(study.counts().reads, 0, "Reuse the sampled endpoint; do not reread zero 91 times");
  for (let frame = 1; frame <= 120; frame++) study.draw(frame / 60);
  assert.equal(study.counts().opened, 1, "Unchanged asset names must reuse their reader");
  assert.equal(study.counts().options, 1, "Coordinate options should be shared across all reads");
  const before = study.draw(2);
  study.draw(5);
  assert.deepEqual(study.draw(2), before, "Seeking back must redraw the same result");
  study.replace();
  assert.notDeepEqual(study.draw(2), before, "A reused reader must continue reading current data");
  assert.equal(study.counts().opened, 1);
  study.clip.takeName = "New Take";
  study.draw(2);
  assert.equal(study.counts().opened, 2, "Changing takeName must create a new reader");
  study.draw(2);
  assert.equal(study.counts().opened, 2);
}
const trail = fixture(feedbackCode);
trail.draw(1 / 60);
assert.equal(trail.counts().reads, 1, "Only read the one historical point available near the beginning");
trail.draw(2);
assert.equal(trail.counts().reads, 90, "Keep the full trail while sharing its current endpoint");

const type = fixture(typographyCode);
const before = type.draw(0);
for (let frame = 1; frame <= 120; frame++) type.draw(frame / 60);
assert.equal(type.counts().measured, 6, "Measure each letter once until the title changes");
type.clip.title = "NEW";
const changed = type.draw(2);
assert.notDeepEqual(changed, before);
assert.equal(type.counts().measured, 9, "Changing the title must refresh its layout");
type.clip.reveal = 0;
assert.notDeepEqual(type.draw(2), changed, "Cached text widths must not freeze animated reveal");
assert.equal(type.counts().measured, 9);
console.log("Verified tutorial reader reuse, name changes, bounded trail reads, seek redraws and cached text layout.");

// Exercise the actual bundled Three.js scene graph without a WebGL renderer.
const threeFile = (await readdir("vendor/player")).find(name => /^three\.global-.*\.js$/.test(name));
assert(threeFile);
const { default: threeSource } = await import(new URL(`../vendor/player/${threeFile}`, import.meta.url));
function productFixture(source) {
  let draw;
  const context = createContext({ console, PI: Math.PI, sin: Math.sin, cos: Math.cos, size() {}, setup: fn => fn(), onFrame: fn => { draw = fn; } });
  runInContext(threeSource, context);
  const T = runInContext("THREE", context);
  const scene = new T.Scene();
  context.clip = { use: () => ({ scene, T }) };
  runInContext(source, context);
  const ring = scene.getObjectByName("Orbit Ring");
  assert(ring && ring.parent === scene, "Sphere rotation must be independent of the bottle Null");
  assert.equal(ring.children.length, 12);
  assert.equal(new Set(ring.children.map(sphere => sphere.geometry)).size, 1);
  assert.equal(new Set(ring.children.map(sphere => sphere.material)).size, 3);
  for (const [i, sphere] of ring.children.entries()) {
    assert.equal(sphere.material.color.getHexString(), ["070ed8", "ca186e", "86d624"][i % 3]);
  }
  const snapshot = frame => {
    draw({ frame });
    scene.updateMatrixWorld(true);
    return ring.children.map(sphere => ({ position: sphere.position.toArray(), world: sphere.getWorldPosition(new T.Vector3()).toArray() }));
  };
  return { ring, snapshot };
}
const product = productFixture(productSceneCode);
for (const frame of [0, 60, 90, 180, 270, 359]) {
  const states = product.snapshot(frame);
  assert(Math.abs(product.ring.rotation.y - frame / 359 * Math.PI * 4) < 1e-10);
  for (const [i, state] of states.entries()) {
    const [x, y, z] = state.position;
    assert(Math.abs(Math.hypot(x, z) - 165) < 1e-10);
    assert(Math.abs(y - (30 + Math.sin(i / 12 * Math.PI * 2 * 4 + product.ring.rotation.y) * 45)) < 1e-10);
    assert(state.world.every(Number.isFinite));
  }
}
const reference = product.snapshot(90);
product.snapshot(270);
assert.deepEqual(product.snapshot(90), reference, "Ring motion must be deterministic on seek");
const starter = productFixture(productSceneStarterCode);
assert.deepEqual(starter.snapshot(0), starter.snapshot(270), "Starter spheres must remain static");
console.log("Verified bundled Three.js product orbit: 12 spheres, shared resources, 2× Y rotation, sine heights and seek repeatability.");
