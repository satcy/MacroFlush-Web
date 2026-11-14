# MacroFlush Web — エージェント向けガイド

## 目的と範囲

MacroFlushアプリの紹介・学習用の日本語・英語Webサイトです。メインコンテンツは Top / About / Reference / Examples / Tutorials / OnlineEditor。アプリのダークパネル、Playfair Displayのロゴ、シアン・ピンク・黄色の配色を継承してください。

このリポジトリはWebサイトを管理します。隣接する `../MacroFlush` はPlayer・サンプル・API仕様の参照元です。Webサイトの作業でアプリ本体を変更しないでください。

## 開発と検証

Node.js 20以上を使用します。外部パッケージのインストールは不要です。

```sh
npm run dev      # ビルドして http://127.0.0.1:4173 で配信
npm run build    # dist/ に静的サイトを生成
npm run check    # ビルド、ページ、リンク、作例、Timelineのデータ操作を検証
npm run preview  # 生成済み dist/ を配信
```

開発サーバーに自動リロードはありません。ソース変更後は再ビルドしてブラウザを再読み込みするか、開発サーバーを再起動してください。ポートは `PORT=4174 npm run dev` のように指定できます。

変更後は `npm run check` を実行してください。画面・再生・操作を変更した場合は、関連ページをブラウザでも確認してください。自動検証は実Playerの描画やレイアウトまでは確認しません。

## ファイルの役割

| ファイル | 役割 |
| --- | --- |
| `src/pages.js` | 共通レイアウト・ページ本文・ダイアログ |
| `src/content.js` | APIの共通項目・チュートリアル |
| `src/tutorial-categories.js` | Tutorialのカテゴリと学習順（記事は必ずいずれか1つに所属し、番号は順序から自動採番） |
| `src/reference-extra.js` | Centi / p5.jsの詳細リファレンス |
| `src/reference-guides.js` | 導入手順・単位・比較表 |
| `src/examples.js` | 実プロジェクトの掲載カタログ |
| `src/project-player.js` | Playerのロード・再生・編集反映・破棄 |
| `src/client.js` | プレビュー・検索・コピー・絞り込み・ダイアログ操作 |
| `src/hero-markup.js` / `src/hero-editor.js` | TopのTimeline / Curve UIとライブ編集 |
| `src/timeline-model.js` | フレーム・キー・RGB成分・Undoのデータ操作 |
| `src/styles.css` | デザイン・レスポンシブ表示 |
| `projects/` | 公開するMacroFlush V2プロジェクトJSON |
| `vendor/player/` | アプリから取り込んだ実Playerと依存リソース |
| `vendor/provenance.json` | 取り込み元とSHA-256 |
| `scripts/` | ビルド・サーバー・同期・検証 |

本文はビルド時にHTML化します。主要な説明・ナビゲーションはJavaScriptが無効でも読める構造を保ってください。`dist/` は生成物なので直接編集・コミットしません。

日本語は `/`、英語は `/en/` 配下に生成します。ReferenceとTutorialsの英訳は同じIDで `src/content-en.js` に記載し、画面文言・コードコメント・動的メッセージは `src/ui-en.js` と `src/locale.js` で管理します。追加・変更時は両言語を更新してください。英語HTMLへの日本語の混入、言語切り替え先、英語のコード例も `npm run check` で検証します。実作例のClipソースとプロジェクトJSONは翻訳せず共有します。

GitHub Pagesは `.github/workflows/pages.yml` で `dist/` を公開します。Jekyllや `docs/` は使用しません。URLに関わる変更は、通常の検証に加えて `BASE_PATH=/MacroFlush-Web/ npm run check` でも確認してください。ビルド時のHTMLリンクは `scripts/site-path.mjs` で補正し、ブラウザの作例URL・モジュール・CSSリソースはファイルの位置を基準に解決します。

## GitHubリンクの公開設定

`https://github.com/satcy/MacroFlush` は現在プライベートのため、サイト上のリンクを非表示にしています。復元するときは `src/pages.js` の `showRepositoryLinks` を `true` にしてください。元のURLと配置は `repositoryLink()` の呼び出しとして保持しています。配置は共通ヘッダーのGitHub、共通フッターのGitHub、About末尾のSource on GitHub、Referenceサイドバーの「完全なドキュメント」（`/blob/main/docs/README.md`）の4か所です。日英に共通で適用されます。

## 実Playerと作例

OnlineEditorは `vendor/editor/` の実ブラウザ版エディタを配信し、日英の `/online-editor/` ページからiframeで表示します。このページはサイトヘッダーや追加の操作バーを置かず、実エディタだけで画面全体を使います。ビルド時に元のindex.htmlから `/editor/launcher.html` を追加生成し、`src/editor-example-loader.js` で `?example=<id>` の作例をエディタ本来のプロジェクトファイル読み込み処理へ渡します。カタログに登録された作例だけを取得してください。読み込みは実エディタのファイル入力・ステータスDOMに依存するため、同期後は作例の直接読み込みもブラウザで確認してください。配布ファイルを直接編集せず、更新は `npm run sync:editor` で行います。`vendor/editor-provenance.json` に全ファイルのSHA-256を記録し、コピー後の同一性を検証します。相対パスで読むJS・CSS・メディア・フォント・Playerをまとめて保持してください。エディタUIの言語は参照元ビルドに従います。

- TopとExamplesは `vendor/player/` の実MacroFlush Playerで実プロジェクトを再生します。サイト独自の代用描画に置き換えないでください。
- 可視のEffect layerがあるプロジェクトはCompositionの原寸で合成し、CSSでプレビューを縮小してください。Playerの出力Canvasだけを縮小すると、Effectの原寸入力バッファと座標がずれて描画が欠けます。
- Playerの配布ファイルは直接編集せず、サイト側のラッパーで対応してください。更新が必要な場合は `npm run sync:macroflush` を使い、続けて `npm run check` を実行します。
- 同期はPlayerスナップショット、掲載作例のJSON、provenanceを上書きします。作例を独自編集した後に同期する場合は差分を確認してください。
- 同期元の既定値は `../MacroFlush`。変更する場合は `MACROFLUSH_ROOT=/path/to/MacroFlush npm run sync:macroflush` を使用します。通常のビルドはこのアプリの存在に依存しません。
- 個別作例は原則Showcaseと同じオリジナルClipソースを保ちます。TriadとAutecはユーザーが意図的に編集したサイト版で、`src/examples.js` の `sourcePolicy: "site-edited"` により元ソースとの一致検証から除外し、編集後JSの構文とプロジェクト構造を検証します。元ソースへ戻さないでください。`sync:macroflush` は `sourcePolicy` を持つ作例のJSONを上書きしません。p5 Orbitsはサイト独自作例（`sourcePolicy: "site-authored"`）で、p5.js 1.11.1をGlobal scriptとして埋め込み、placementとtemplateのLibraries・p5 capabilityを設定済みです。ライセンスと出典は `projects/p5-orbits/` に保持します。同期時も独自作例を保持してください。新規作例は `projects/<name>/project.json` と `src/examples.js` の登録を追加し、実Playerで確認してください。現在の検証は埋め込みメディアを前提としているため、公開JSONはExport Embedded V2などで自己完結させます。
- Topの作例カードとExamplesのカードは、初回にCompositionの約15フレームまで進めて静止し、ホバーまたはキーボードフォーカスの間だけ再生します。カードごとに時刻を保持し、待機中はPlayerへtickを送りません。reduced-motion時は初期静止画だけを描き、TopのライブEditorと開いたプレビューは独立した操作を保ってください。
- 音声は初期状態でミュート。画面外の不要な再生を止め、ダイアログを閉じる・ページを離れる際はPlayer、イベント、メディア、Blob URLを解放してください。

## Topのライブ編集

Timeline / Curveは読み込んだCompositionのレイヤー・配置・パラメータ・キーフレームを表示します。アプリのデータに存在しないトラックや意味を追加しないでください。

キー選択とシークは別操作です。キー選択だけでは再生位置を変えず、再生バーとルーラーでシークします。再生位置・progress・表示フレームを一致させ、キー編集は整数フレームと有効範囲を守ってください。RGB編集では選択していない成分を保持します。

ライブ編集はブラウザ内の複製したプロジェクトに反映し、Save JSONでV2形式を保存します。Playerに渡した配置・レイヤーの参照を維持し、編集のたびにClip iframeを作り直さないでください。停止中の同一フレーム更新にはPlayerの転送制限への対応があります。変更する場合は実描画の更新とUndo / Resetも確認してください。

## Referenceと画面確認

APIの説明・コード例・制約は参照元アプリの実装・型定義・ドキュメントで確認してください。一般的なライブラリの挙動をMacroFlush固有の挙動として記載しないでください。特にCentiの色・単位・補間、p5.jsのライブラリ読み込み、global mode、時間、入力、Isolated replayの条件に注意してください。

対応環境の案内・比較表は `src/edition-markup.js`、Shader / Feedback / アプリ専用機能は `src/reference-features.js` にあります。Referenceの `environments` は `browser-editor` / `app` / `player` で、指定なしのClip APIは3環境、PlayerグループはホストAPIとしてPlayerに対応します。作成・設定の操作はEditorの2環境、MCP・UDP OSC・LLMアシスタント・ステム分離・ProRes書き出しはアプリ版だけにしてください（分離済みWAVのAttach Stemsと `audioStem()` の解析はEditor・Playerでも使えます。H.264動画とPNG連番の書き出しはブラウザ版Editorとアプリ版で、Playerに書き出しはありません）。Feedbackは入力データの記録・再生で、Pointer記録とFeedback Editorは両Editor（ブラウザ版の編集はアプリ側で未検証）、OSC記録はアプリ版、記録済みデータの再生はPlayerにも対応します。Shader ClipはWebGL2を必要とし、Pipelineは同一フレーム内の処理です。OSCの受信アドレスは `/<layer>/<clip>/<param>`・`/comp/<param>`・`/cue/<name>` に加えて `/transport/*`・`/composition/open <name>`・`/layers/<name>/visible`（0.3.19）があり、いずれもアプリ版専用で、アプリ側ではNodeテストでの確認です。`clip.paramNames` / `clip.listParams()` / `clip.isNew.<name>` は3環境のClip APIです。参照元は `../MacroFlush/README.md` のEffect layers / Recorded data: Feedback / OSC reference / Local AI assistantと `src/core/feedbackContracts.ts` です。機能差を変更するときはアプリの実装とサイトに同梱した配布版の両方を確認してください。

add()・3Dアセットと画像付きTutorialは `src/three-d-content.js` で日英を管理します。Tutorialの画像は `assets/tutorials/timeline-3d/` にある実Editorのキャプチャです。架空のUI画像へ置き換えないでください。手順と `projects/tutorials/timeline-3d/` の開始用・完成JSONを一致させ、更新時は実Editorで描画・Target・Parent・キー・シークを確認してください。Editorで直接開く教材は `src/examples.js` の `editorProjects` に登録し、通常のExamples作例と区別します。管理された3D配置のrotationとSpot Lightのangle・Camera FOV・2Dのrotationは、Editor表示・本文ともに度です。プロジェクトファイル（V1/V2/V3）の3D角度とScriptのThree.js `object.rotation` はラジアンのままで、MCPとPlayerの数値制御は既定がラジアン（`angleUnit: "degrees"` で度）です。チュートリアルJSONはファイル形式のラジアンで保存します。Geometry / Materialの共有編集と配置ごとの上書き、アセットIDと配置IDを区別してください。

OSCシーケンサーTutorial（`src/osc-sequencer-content.js`）はアプリ版専用です。`projects/tutorials/osc-sequencer/` の完成JSONとMaxパッチはユーザー提供のファイルで、改変せずそのまま配布します（ダウンロードリンクは `downloads` で指定）。画像は実Editor（ブラウザ版）のキャプチャで、Max・アプリでの実OSC送受信はこのリポジトリでは確認していません。Max側の説明はパッチの構造（`udpsend localhost 9000` / `udpreceive 9001` / `route /val0 /val1 /color /pos`）に基づきます。送信値の型は `electron/osc/controller.cjs` の `toOscArgument`（整数はint・小数はfloat・配列は `String()` で「x,y」の文字列）で確認しています。

p5 Timeline Tutorial（`src/p5-tutorial-content.js`）は日英の9ステップで、`projects/tutorials/p5-timeline/` の開始用・完成JSONを使います。Examplesのユーザー編集済みp5 Orbitsとは別の教材です。記事の`p5StarterCode` / `p5OrbitCode`をJSONのplacement・templateのJSと一致させてください。開始用は静止円・キーなし、完成版はspreadのLinearキー0 / 240 / 479（0.65 / 1 / 0.65）、speed 1です。画像は開始用を実Editorで編集したキャプチャで、来歴は画像フォルダのREADMEにあります。記事内の完成プレビューは`editorProjects`の教材を実Playerで再生します。コードは約300msの入力停止で自動反映され、専用のApplyボタンはありません。

08〜16のWorkshopは `src/tutorial-workshops.js`（日英本文）、`src/workshop-code.js`（描画・GLSL）、`src/workshop-projects.js`（教材カタログ）で管理します。Feedbackは記録とEditor編集の2記事です。18個の開始用・完成V2は `projects/tutorials/` の各記事フォルダにあり、`node scripts/generate-tutorial-workshops.mjs` でこの教材だけを再生成します。元作例や隣接アプリは変更しません。生成Pointerは実際に手で録ったデータと表記せず、WAVはオリジナルの合成音源です。来歴・教材差分は `projects/tutorials/WORKSHOPS.md` に記載。`npm run check` は `scripts/check-tutorial-workshops.mjs` も実行します。GLSLコンパイルや実描画はブラウザで別に確認してください。Camera Workshopは2つのCameraアセットを8つの静止した配置で交互に使い、開始用はCut、完成版は先頭以外Transform / Duration 60です。CameraのキーやRig回転へ置き換えず、低空・バンクを含むコースと補間を維持します。`cameraFlightShots`の度を生成時にラジアンへ変換し、Aim Mode Rotationで姿勢を保ちます。特定教材だけの再生成は`node scripts/generate-tutorial-workshops.mjs camera-work`です。Feedback EditorのAdd / Replace・局所UndoとプロジェクトUndo・メモリ上だけの未適用下書きの違いを維持します。

Tutorialを追加するときは、記事を `src/content.js` に定義したうえで `src/tutorial-categories.js` のいずれかのカテゴリへ `id` を追加してください（未登録だとビルドが失敗します）。日英のカテゴリ名・説明も同じファイルにあります。全記事に `environments` を明示してください。制作手順は原則 `["browser-editor", "app"]`、OSC教材は `["app"]` です。一覧と記事本文は共通の対応環境バッヂを表示し、`npm run check` は日英の両方で表示漏れ・余計な環境表示を検証します。入門ラベルは基礎・動きをつくるのカテゴリ、アプリ版専用バッヂは `environments` が `["app"]` の項目に付きます。

UI変更の確認では、デスクトップと狭い画面、キーボード操作、フォーカス、reduced-motion、ダイアログのCloseボタンを対象にします。Player関連では実プロジェクトの初期描画、再生・停止・シーク、progress、Timeline / Curve切替、キー編集、JSON保存、閉じた後の破棄を変更箇所に応じて確認してください。

基礎Tutorial 01〜03の教材は `projects/tutorials/first-clip/`・`parameters/`・`composition/` にある開始用・完成V2です。リンクとEditor登録は `src/foundation-projects.js`、再生成は `node scripts/generate-foundation-projects.mjs`（この6ファイルだけ）。本文のコードを生成元にし、01は静止円→時間で動く円、02はパラメータなし→speed / tintとspeedキー0:1・180:2・359:1、03は不透明Overlay→透明合成とIntro / LoopのCueです。来歴は `projects/tutorials/FOUNDATIONS.md`。

追加10教材は `src/advanced-tutorials.js`（日英本文・関連Reference）、`src/advanced-code.js`（共有コード）、`src/advanced-projects.js`（カタログ）で管理します。生成は `node scripts/generate-advanced-tutorials.mjs`、slug指定でそのペアだけ再生成できます。`projects/tutorials/ADVANCED.md` に来歴と開始／完成差分があります。ステムのvocalsは合成音、WAVはモデル分離結果ではありません。GLBもオリジナル生成物です。本文のステップに `environments` を指定すると、その操作専用のバッヂが出ます。ステム分離とProResのみの手順はアプリ版専用を保ってください。

Web埋め込み教材の実ホストは `src/tutorial-player-host.js`、ビルドは `scripts/build-tutorial-kit.mjs` です。`dist/projects/tutorials/embed-player/` に開始／完成HTMLとPlayer一式・ZIPを生成し、生成物はコミットしません。ZIPのPlayerを単独JSに減らさず、依存リソースとライセンスを保持します。時計・progress・Pause/Seek/Reset・非表示タブでの停止・破棄は実ブラウザで確認してください。`npm run check` は `scripts/check-tutorial-kit.mjs` も実行します。
