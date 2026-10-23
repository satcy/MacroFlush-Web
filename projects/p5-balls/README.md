# p5 Balls

サイト向けの `clip.use("p5")` のMacroFlush V2作例です。1280 × 720 / 60 fps / 480 frames。

- 5つの円が壁や円同士で跳ね返り、色を変えながら軌跡を残します。
- `setup()`で背景を一度だけ描き、`draw()`で円の位置と描画を積み重ねます。再生履歴を持つスケッチです。
- placementとHTMLアセットにp5 capabilityと埋め込みGlobal scriptを設定済みです。Editorで開いた後の追加設定や実行時のCDNアクセスは不要です。
- `project.json` は提供されたスケッチを保持します。アプリ作例の同期でも保持してください。

A MacroFlush V2 example using `clip.use("p5")`. Five circles bounce off the walls and each other, leaving trails as their colors shift. The sketch accumulates simulation and drawing state during playback. The embedded library and p5 capability are configured for both the placement and template; no additional Editor setup or runtime CDN request is needed.

## Embedded library

p5.js 1.11.1 by the p5.js contributors, distributed unmodified under LGPL 2.1. The license is included in [p5-LICENSE.txt](p5-LICENSE.txt).

- Distribution: https://cdn.jsdelivr.net/npm/p5@1.11.1/lib/p5.min.js
- Readable source: https://cdn.jsdelivr.net/npm/p5@1.11.1/lib/p5.js
- Source repository/tag: https://github.com/processing/p5.js/tree/v1.11.1
- Embedded source SHA-256: `2dbe3fbaf46e43ec61d65fd614cb4300e38b1bc2dc4c0885b4c627d77503c1df`

The embedded library is identical to the one included in the site's p5 Orbits example.
