# Tutorial workshops

Lesson numbers and order come from `src/tutorial-categories.js` (Foundations, Motion, Visuals, 3D, Input & connection). The numbers in `src/workshop-projects.js` are catalog placeholders; the article overrides them when it shows the live preview.

These projects are authored for this site, separate from application samples and user-edited Examples. Each folder contains a portable V2 `start.json` and `complete.json`, linked through `src/workshop-projects.js`. They open in both Editors; saved content plays in the Player. Recording and editing Feedback require an Editor.

| Folder | Start → complete |
| --- | --- |
| `curve-motion` | Three identical Linear x tracks → Linear / Sine In Out / Back Out. Keys at 0:230, 119:1080, 239:230. |
| `feedback-pointer` | Inspector Source Hand Take / Pointer None → Pointer `pointer` applied. Both variants use the same `onMouseDown` / `onMouseMove` / `onMouseUp` code and retain the original two-stroke practice recording. |
| `feedback-sampling` | Current dot with `sample()` → original 1.5-second trail with `sample()` / `at()`. Both use the unchanged `feedback-pointer/practice-feedback.json`, Custom `takeName` and no Pointer channel assignment. |
| `feedback-editor` | Generated jittered strokes → corresponding smooth practice strokes. Both variants use the same Inspector-assigned onMouse callbacks as the Pointer lesson. This is comparison data, not a claim that a human take or a Feedback Editor session produced the files. |
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
- The Pointer lesson follows the saved-Pointer assignment approach in the owner's `../MacroFlush_Projects/onMouse-test.json` (A saved Pointer). Its supplied TakeStrokes / TakeHeld assets are not copied: `hand-take` / Hand Take and `practice-feedback.json` remain the original eight-second, 212-record practice data. `pointerMouseCode` uses Centi drawing helpers and callbacks without an asset-name argument. The starter has Source selected but Pointer None; the completed placement and template apply `pointerChannelId: "pointer"`. A move with a held button can begin a line from px/py when the initial down event was only sampled. Backward time resets state before processing new callbacks, including a frame-0 down, so the following onFrame does not erase a freshly delivered stroke. Forward seeks do not reconstruct history; replay from the beginning for comparisons.
- The Feedback Editor lesson uses `pointerMouseCode`, with Source Hand Take and Pointer `pointer` applied in both project variants. Add requires selecting the added asset as Source, selecting its Pointer channel and Apply. Replace keeps the same Source. Replay forward from zero to rebuild accumulated strokes after either operation; seeking does not reconstruct them. Its original rough and smooth recordings are unchanged.
- The Alternate sampling lesson uses `feedbackCode` in its completed project. The starter uses `feedbackSampleCode` for the dot alone. It shares the Pointer lesson's original recording and download rather than generating another take. `sample()` follows offset/rate/loop, while `at()` takes recording-local seconds; the supplied mapping is offset 0 / rate 1 / loop false. Readers are recreated only when takeName changes; each sample/at call still reads current data and dimensions. Coordinate options are shared, repeated zero-time history is skipped, and sample() supplies the current endpoint. Each frame redraws from time, so seeking does not depend on callback history.

`ProjectPreview` explicitly requests `inputDelivery: "playback"` during forward playback so saved Pointer callbacks work in the live preview. Paused captures and requested seek/edit baselines use `sample-only`; media playback state alone does not enable recorded-input delivery. The article does not promise random-seek pixel parity for accumulated callback state.

Keep the explicit distinction between Feedback Editor local Undo and project Undo. Unapplied drafts are memory-only and are excluded from project Save / Save As; Add / Replace must precede project saving.

Text layout in `typographyCode` is measured once per title change for its fixed sans-serif font; reveal and tint remain live. Font changes/loading would require additional cache invalidation. Audio band names and colors are constants outside onFrame. `scripts/check-tutorial-code.mjs` verifies reader/name changes, seek redraws, bounded history reads and text layout invalidation.
