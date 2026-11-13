# p5.js / Timeline tutorial

Tutorial: `/tutorials/p5-timeline/` and `/en/tutorials/p5-timeline/`.

- `start.json`: a static cyan circle, embedded p5.js and enabled p5 global mode. No custom parameters or keys.
- `complete.json`: seven orbits, `spread` and `speed`, and Linear spread keys at frames 0 / 240 / 479 with values 0.65 / 1 / 0.65. `speed` remains 1.
- Both are portable V2 documents at 1280 × 720 / 60 fps / 480 frames. The Clip range is `[0, 480)`.
- OnlineEditor IDs: `tutorial-p5-start` and `tutorial-p5-complete`, registered in `src/examples.js`. The completed project also drives the article's actual Player preview.
- The JavaScript shown in `src/p5-tutorial-content.js` (`p5StarterCode` / `p5OrbitCode`) must match the corresponding placement and HTML template sources in the JSONs.

The study is a simplified adaptation of the site's p5 Orbits example. Keep it separate from user edits to `projects/p5-orbits/project.json`. Positions and the apparent trails are drawn from current Clip time; neither project needs Isolated replay.

## Embedded p5.js

p5.js 1.11.1 is included as an unmodified Global script asset, selected under Libraries on both the template and placement. Runtime playback makes no CDN request.

- License: LGPL 2.1, included as [p5-LICENSE.txt](p5-LICENSE.txt).
- Distribution: https://cdn.jsdelivr.net/npm/p5@1.11.1/lib/p5.min.js
- Readable source: https://cdn.jsdelivr.net/npm/p5@1.11.1/lib/p5.js
- Upstream: https://github.com/processing/p5.js/tree/v1.11.1
- Embedded source SHA-256: `2dbe3fbaf46e43ec61d65fd614cb4300e38b1bc2dc4c0885b4c627d77503c1df`
