# Tutorial workshops

Lesson numbers and order come from `src/tutorial-categories.js` (Foundations, Motion, Visuals, 3D, Input & connection). The numbers in `src/workshop-projects.js` are catalog placeholders; the article overrides them when it shows the live preview.

These projects are authored for this site, separate from application samples and user-edited Examples. Each folder contains a portable V2 `start.json` and `complete.json`, linked through `src/workshop-projects.js`. They open in both Editors; saved content plays in the Player. Recording and editing Feedback require an Editor.

| Folder | Start → complete |
| --- | --- |
| `curve-motion` | Three identical Linear x tracks → Linear / Sine In Out / Back Out. Keys at 0:230, 119:1080, 239:230. |
| `feedback-pointer` | Generated practice recording plus data-reading Clip, ready to replace with a real take. Both project variants intentionally have the same practice data. |
| `feedback-editor` | Generated jittered strokes → corresponding smooth practice strokes. This is comparison data, not a claim that a human take or a Feedback Editor session produced the files. |
| `shader-chromatic` | Pass-through Effect → RGB displacement with animated pixel amount. |
| `audio-reactive` | Static circles with embedded audio → three-band visualization. |
| `kinetic-type` | Visible still title → keyed reveal with per-letter staggering. |
| `shared-palette` | Shared fixed hue → Composition hue keys driving three Clips. |
| `camera-work` | Two Camera assets reused in eight static poses over a drone course: Cut → incoming Transform transitions of 60 frames, with banks and FOV 80–100. No camera keyframes. |
| `runtime-swarm` | One runtime Dot → 36 Display Objects sharing one HTML drawing. |

All are 1280 × 720 at 60 fps. Feedback, audio and Camera are 480 frames; the rest are 240. Out is excluded. 3D angle values in JSON are radians; the article's Inspector instructions use degrees.

## Regeneration and checks

Run `node scripts/generate-tutorial-workshops.mjs` (or add a slug such as `camera-work` to regenerate only that pair) from the repo root to regenerate only these 18 authored JSONs and the supporting practice files. It reads the p5 tutorial's starter for standard HTML placement defaults and the 3D tutorial's completed project for 3D assets; it does not modify those files or the neighboring application. Canvas and GLSL source lives in `src/workshop-code.js`. Article instructions and English translations live in `src/tutorial-workshops.js`.

`npm run check` includes `scripts/check-tutorial-workshops.mjs`, covering deployment copies, asset and placement references, frame/key bounds, Feedback times/sequences, embedded WAV headers, JavaScript syntax and translated tables/checklists. Shader compilation, actual rendering, audio analysis and Editor UI need browser verification too.

## Original supporting assets

- `feedback-pointer/practice-feedback.json` and `feedback-editor/practice-feedback.json` contain generated two-stroke Pointer data, formatVersion 1 / microseconds / 1280 × 720. They are explicitly labeled practice data in both languages.
- `audio-reactive/workshop-beat.wav` is an original deterministic eight-second mono 16-bit PCM synthetic beat at 22050 Hz. It combines synthesized bass, pitched notes and generated noise; it uses no third-party recording. The WAV is also embedded in both audio project JSONs.
- The recording Clip uses `feedback(clip.takeName)` by asset name. Its Inspector binding is data-only, provided for Edit source convenience. Changing the Inspector Source alone does not redirect the explicit code reference. Adding an edited asset requires changing `takeName`; replacing the same asset keeps existing references.

Keep the explicit distinction between Feedback Editor local Undo and project Undo. Unapplied drafts are memory-only and are excluded from project Save / Save As; Add / Replace must precede project saving.
