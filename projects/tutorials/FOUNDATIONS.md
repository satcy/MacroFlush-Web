# Foundation tutorials 01–03

Site-authored, self-contained V2 projects at 720 × 405, 60 fps, 360 frames. Each pair opens through the existing Editor file importer and is downloadable from both language editions. They are tutorial materials, separate from the Examples catalogue.

| Lesson | Start | Complete |
| --- | --- | --- |
| `first-clip` | A stationary cyan circle, with Centi configured | The article's circle animated from Clip time |
| `parameters` | The moving circle from lesson 01, no custom parameters or keys | The article's `clip.defineParams()` source, speed and tint, Linear speed keys at 0:1 / 180:2 / 359:1 |
| `composition` | Opaque pink Overlay above the moving cyan Circle | Transparent Overlay, both Clips visible, Intro (0–180, none) and Loop (180–360, loop) |

Run `node scripts/generate-foundation-projects.mjs` to regenerate these six files only. Code snippets come from the corresponding articles in `src/content.js`; standard HTML placement defaults come from the p5 tutorial starter, with p5 library and capability removed. No application files or user-edited Examples are modified. Runtime-generated Centi canvases are used, so HTML and CSS sources are empty.

`src/foundation-projects.js` provides the article action URLs and Editor catalogue entries. `npm run check` verifies rendered links, catalogue registration, byte-identical deployment copies, project structure and Clip syntax. Real Editor import and Player rendering are checked separately in the browser.
