import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { relative } from "node:path";
import { fileURLToPath } from "node:url";
import { workshopProjects } from "../src/workshop-projects.js";
import { foundationProjects } from "../src/foundation-projects.js";
import { advancedProjects } from "../src/advanced-projects.js";
import { advancedLessons, advancedTranslations } from "../src/advanced-tutorials.js";
import { workshopLessons, workshopTranslations } from "../src/tutorial-workshops.js";

const materials = [...workshopProjects, ...foundationProjects, ...advancedProjects];
assert.equal(new Set(materials.map(p => p.id)).size, materials.length);
for (const entry of materials) {
  const path = fileURLToPath(entry.projectUrl);
  const bytes = await readFile(path);
  const deployed = new URL(`../dist/${relative(process.cwd(), path)}`, import.meta.url);
  assert.equal((await readFile(deployed)).equals(bytes), true, `Changed built tutorial: ${entry.id}`);
  const project = JSON.parse(bytes);
  const assets = new Map(project.assets.map(asset => [asset.id, asset]));
  assert.equal(assets.size, project.assets.length);
  assert.equal(project.clipFormatVersion, 2);
  const composition = assets.get(project.rootCompositionId)?.composition;
  assert(composition && composition.fps > 0 && composition.durationFrames > 0);
  const clips = composition.layers.flatMap(layer => layer.clips);
  const placements = new Set(clips.map(clip => clip.id));
  assert.equal(placements.size, clips.length);
  if (entry.id.startsWith("workshop-camera-work-")) {
    const cameras = clips.filter(clip => assets.get(clip.assetId)?.kind === "camera-3d");
    assert.equal(new Set(cameras.map(clip => clip.assetId)).size, 2, "Use two Camera assets");
    for (let frame = 0; frame < composition.durationFrames; frame++) {
      assert.equal(cameras.filter(c => c.inFrame <= frame && frame < c.outFrame).length, 1,
        `Camera study must never fall back to the default Camera at ${frame}`);
    }
    assert(clips.every(c => !Object.keys(c.keyframeTracks || {}).length), "Only Camera transitions create motion");
    assert(cameras.every(c => c.params.aimMode.value === "rotation"), "Preserve banked Camera poses");
    const incoming = cameras.filter(c => c.inFrame > 0);
    assert(incoming.every(c => c.cameraTransition.type === (entry.id.endsWith("-complete") ? "transform" : "cut")));
    assert(incoming.every(c => c.cameraTransition.durationFrames === (entry.id.endsWith("-complete") ? 60 : 0)));
  }
  for (const scene of [...assets.values()].filter(asset => asset.kind === "composition").map(asset => asset.composition)) {
    const sceneClips = scene.layers.flatMap(layer => layer.clips);
    const sceneIds = new Set(sceneClips.map(clip => clip.id));
    assert.equal(sceneIds.size, sceneClips.length);
    for (const clip of sceneClips) {
      assert(assets.has(clip.assetId), `${entry.id}: missing asset ${clip.assetId}`);
      assert(clip.inFrame >= 0 && clip.outFrame <= scene.durationFrames && clip.inFrame < clip.outFrame);
      if (clip.parentPlacementId) assert(sceneIds.has(clip.parentPlacementId));
      if (clip.targetClipId) assert(sceneIds.has(clip.targetClipId));
      if (clip.maskClipId) assert(sceneIds.has(clip.maskClipId) && clip.maskClipId !== clip.id);
      if (clip.kind === "composition-ref") assert.equal(assets.get(clip.assetId).kind, "composition");
      for (const [key, track] of Object.entries(clip.keyframeTracks || {})) {
        assert(clip.params[key], `${entry.id}: unknown keyed parameter ${key}`);
        assert.equal(new Set(track.map(key => key.frame)).size, track.length);
        for (const keyframe of track) assert(Number.isInteger(keyframe.frame) && keyframe.frame >= 0 && keyframe.frame < clip.outFrame - clip.inFrame);
      }
    }
  }
  for (const asset of assets.values()) {
    if (asset.kind === "html-clip") assert.doesNotThrow(() => new Function(asset.htmlTemplate.source.js), entry.id);
    if (asset.kind === "audio") {
      assert(asset.sourceUrl.startsWith("data:audio/wav;base64,"));
      const wav = Buffer.from(asset.sourceUrl.split(",")[1], "base64");
      assert.equal(wav.subarray(0, 4).toString(), "RIFF");
      assert.equal(wav.readUInt32LE(40) + 44, wav.length);
      for (const source of Object.values(asset.stemSources || {})) {
        assert(source.startsWith("data:audio/wav;base64,"));
        const stem = Buffer.from(source.split(",")[1], "base64");
        assert.equal(stem.subarray(0, 4).toString(), "RIFF");
        assert.equal(stem.readUInt32LE(40) + 44, stem.length);
        assert.equal(stem.length, wav.length, "Practice stems must align with the source mix");
      }
    }
    if (asset.kind === "model-3d" && asset.format === "glb") {
      assert(asset.sourceUrl.startsWith("data:model/gltf-binary;base64,"));
      const glb = Buffer.from(asset.sourceUrl.split(",")[1], "base64");
      assert.equal(glb.readUInt32LE(0), 0x46546c67);
      assert.equal(glb.readUInt32LE(4), 2); assert.equal(glb.readUInt32LE(8), glb.length);
      const document = JSON.parse(glb.subarray(20, 20 + glb.readUInt32LE(12)).toString());
      assert.equal(document.asset.version, "2.0"); assert(!document.animations && !document.skins);
      assert(document.buffers.every(buffer => !buffer.uri), "GLB must have no external buffer");
    }
    if (asset.kind === "feedback") {
      const recording = asset.recording;
      assert.equal(recording.formatVersion, 1); assert.equal(recording.timeUnit, "us");
      const seq = new Set();
      for (const channel of recording.channels) {
        let previous = -1;
        for (const row of channel.records) {
          assert(row.t >= previous && row.t <= recording.durationUs); previous = row.t;
          assert(!seq.has(row.seq)); seq.add(row.seq);
        }
      }
    }
  }
}
for (const lesson of [...workshopLessons, ...advancedLessons]) {
  const english = { ...workshopTranslations, ...advancedTranslations }[lesson.id];
  assert.equal(english.steps.length, lesson.steps.length);
  assert(materials.some(entry => entry.id === lesson.previewProject));
  for (const step of lesson.steps) if (step.code && !step.language && !step.codeLabel?.includes("Host page")) new Function(step.code);
  for (const [i, step] of lesson.steps.entries()) {
    if (step.checks) assert.equal(english.steps[i].checks?.length, step.checks.length);
    if (step.table) assert.equal(english.steps[i].table?.rows.length, step.table.rows.length);
  }
}
console.log(`Verified ${workshopLessons.length + advancedLessons.length} bilingual workshops and ${materials.length} portable tutorial projects, nested placements, masks, stems, GLB, keys and snippets.`);
