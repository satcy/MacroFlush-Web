# p5 Orbits

サイト向けに作成した、`clip.use("p5")` のMacroFlush V2作例です。1280 × 720 / 60 fps / 480 frames。

- `setup()`でCanvasを作成し、`draw()`で7本の軌道と光点を描きます。
- `millis()`はMacroFlushのClipローカル時間に同期します。軌道・残像とも時間から直接計算し、各フレームで背景を塗り直すので、シーク先でも同じ状態を描けます。
- Inspectorの`spread`は軌道の広がりで、0 / 30 / 240 / 468 / 479フレームにキーがあります。`speed`は全体の回転速度、`local_speed`は光点の周回速度、`phase`は軌道ごとの光点の位相差です。`local_speed`と`phase`にもキーがあります。
- placementとHTMLアセットに`capabilities: ["p5"]`、`libraries: ["p5-library"]`を設定済みです。Editorで開いた後の追加設定は不要です。
- p5.js本体はGlobal scriptアセットとしてJSONへ埋め込んでいます。実行時のCDNアクセスはありません。

Created for this site using `clip.use("p5")`, native `setup()` / `draw()`, and Timeline-driven `millis()`. Keyframes animate `spread` (orbit size), `local_speed` (light-point speed), and `phase` (phase offset between orbits); `speed` controls the overall rotation speed. The embedded library and p5 capability are configured for both the placement and template. Open the JSON in the Editor to inspect code and keyframes; no additional library setup or CDN request is needed.

## Embedded library

p5.js 1.11.1 by the p5.js contributors, distributed unmodified under LGPL 2.1. The license is included in [p5-LICENSE.txt](p5-LICENSE.txt).

- Distribution: https://cdn.jsdelivr.net/npm/p5@1.11.1/lib/p5.min.js
- Readable source: https://cdn.jsdelivr.net/npm/p5@1.11.1/lib/p5.js
- Source repository/tag: https://github.com/processing/p5.js/tree/v1.11.1
- Embedded source SHA-256: `2dbe3fbaf46e43ec61d65fd614cb4300e38b1bc2dc4c0885b4c627d77503c1df`

This version and hash match the MacroFlush application's pinned p5 global-mode fixture. The sketch is original to this site; syncing application examples must preserve this project.
