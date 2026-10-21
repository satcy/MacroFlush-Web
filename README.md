# MacroFlush Web

MacroFlushアプリのための日本語・英語Webサイト。アプリのダークパネル、Playfair Displayのロゴ、シアン・ピンク・黄色の配色を継承しています。

## 起動

Node.js 20以上を使用します。外部パッケージのインストールは不要です。

```sh
npm run dev
```

http://127.0.0.1:4173 を開きます。ソースを変更した後はコマンドを再起動してください。

```sh
npm run build    # dist/へ静的サイトを出力
npm run check    # ページ・リンク・作例コードを検証
npm run preview  # ビルド済みdist/を確認
```

`PORT=4174 npm run dev` のようにポートを変更できます。

## ページ

| URL | 内容 |
| --- | --- |
| `/` | Top / ライブプレビュー・アプリ画面・制作の流れ |
| `/about/` | About / 概念とワークスペース |
| `/reference/` | Reference / Centiの41項目・p5.jsの12項目を含む検索可能なAPIリファレンス |
| `/examples/` | Examples / 7実プロジェクト・カテゴリ絞り込み・ソース閲覧・JSONダウンロード |
| `/tutorials/` | Tutorials / 5本の制作手順（3Dの実Editor画像付き） |
| `/online-editor/` | OnlineEditor / ブラウザで動作する実MacroFlushエディタ |

各チュートリアルにも固有のURLがあります。ページ本文はビルド時にHTML化され、JavaScriptが無効でも読むことができます。作例カードは最初の約15フレームで静止し、ホバーまたはキーボードフォーカス中だけ再生します。クリックすると操作できるプレビューが開きます。reduced-motion設定にも対応しています。

日本語は上記のURL、英語は `/en/` 配下です（例: `/en/reference/`）。ヘッダーのJA / ENで同じページの言語を切り替えます。JavaScriptが有効な場合はReferenceの現在のアンカーも保持します。両言語のHTMLを静的に生成するため、英語ページもJavaScriptなしで読めます。Playerと作例JSONは両言語で共有します。

OnlineEditorは `MacroFlush/dist/index.html` を含むビルド一式を `vendor/editor/` に保持し、同じエディタの起動ページ `/editor/launcher.html` をiframeで表示します。日英ページは同じ実エディタを使用し、サイトヘッダーや追加の操作バーを表示せず、エディタだけを画面いっぱいに表示します。狭い画面では編集パネルを横にスクロールできます。エディタ自体のUIは参照元ビルドの内容をそのまま使用します。

Topの「はじめる」はOnlineEditorを開きます。各作例の「Editorで開く」は `/online-editor/?example=triad` などのURLで、その作例の実プロジェクトJSONを読み込みます。起動用の追加スクリプトは、カタログに登録された作例だけを取得し、エディタ本来のプロジェクトファイル読み込み処理へ渡します。成功後は読み込み表示を消してエディタだけを表示します。参照元の配布ファイルは変更しません。

エディタだけをアプリの最新ビルドから取り込むには `npm run sync:editor`、続けて `npm run check` を実行します。既定の参照先は `../MacroFlush/dist` です。`MACROFLUSH_ROOT` でアプリの場所を指定できます。取り込んだ各ファイルのSHA-256は `vendor/editor-provenance.json` に記録します。ビルド・GitHub Pagesの公開時にアプリ本体は不要です。

Topに対応環境の案内、Aboutに機能比較表、Referenceに項目ごとの対応環境ラベルを表示します。動画・PNG連番書き出し、MCP、UDP OSC、LLMアシスタント、ステム分離はアプリ版の機能です。Shader Clipと記録済みFeedbackはブラウザでも再生できます。FeedbackのPointer記録はEditor、OSC記録はアプリ版で使用します。

画像付きの `/tutorials/timeline-3d/` ではScene・Mesh・Camera・Light・NullをTimelineで配置し、rotationキーで動かす手順を紹介します。`assets/tutorials/timeline-3d/` の5枚は同梱の実Editorを操作した画面です。開始用・完成版JSONは `projects/tutorials/timeline-3d/`、Editor起動用カタログは `src/examples.js` の `editorProjects` に保持します。

## ソース

- `src/pages.js`: 共通レイアウトとページ本文
- `src/content.js`: APIとチュートリアル
- `src/examples.js`: 実プロジェクトの掲載カタログ
- `src/hero-editor.js`: TopのライブTimeline / Curve・キー編集・JSON保存
- `src/timeline-model.js`: キーの移動・RGB成分・Undoのデータ操作
- `src/reference-extra.js`: Centiとp5.jsの詳細リファレンス
- `src/reference-guides.js`: 導入手順・単位・Centiとp5の比較
- `src/content-en.js`: 共通IDに対応するReference・Tutorialsの英語本文
- `src/ui-en.js` / `src/locale.js`: 画面文言・コードコメント・操作メッセージの英訳と切り替え
- `src/project-player.js`: MacroFlush Playerのロード・再生・破棄
- `src/client.js`: プレビュー、ダイアログ、検索、コピー、絞り込み
- `src/three-d-content.js`: add()・3DアセットのReferenceと画像付きTimeline 3D Tutorialの日英本文
- `src/reference-features.js`: Shader Clip、Feedback、アプリ版専用機能の日英Reference
- `src/edition-markup.js`: ブラウザEditor・Player・アプリ版の比較表と対応環境ラベル
- `src/styles.css`: アプリから引き継いだデザインとレスポンシブ表示
- `assets/`: アプリのロゴ、画面キャプチャ、Playfair Display (OFL)
- `scripts/`: ビルド、ローカルHTTPサーバー、検証
- `scripts/sync-editor.mjs`: MacroFlushのブラウザ版エディタの配布ファイルをそのまま取り込み

本文はローカルMacroFlush 0.3.15のREADMEとランタイム型定義を参照して作成。アプリの更新時はAPIと出力制約を再確認してください。TopとExamplesは `MacroFlush/dist/player` の実Playerを使い、`projects/` のMacroFlush V2プロジェクトJSONを読み込んで再生します。サイト側に代用の描画実装はありません。

Showcaseはアプリ同梱の `src/sample/sampleProject.json` を元に、リンクメディアを埋め込んだポータブルなプロジェクトです。個別作例は同梱Clipから構成しています。Triadはサイト向けの編集版（`sourcePolicy: "site-edited"`）で、ほかの4作例は元のClipソースを保持します。p5 Orbitsはサイト独自の作例（`sourcePolicy: "site-authored"`）で、`clip.use("p5")`とTimeline同期の`millis()`を使い、p5.js 1.11.1をライセンスとともに埋め込んでいます。Triadとp5 Orbitsの検証では元ソースとの一致ではなく、JavaScriptの構文を確認します。同期時はTriadの編集内容を保持してください。独立した作例の配置を中央へ調整し、Autecは元のcolorキーフレームを保持します。

Player・プロジェクトをアプリから更新するには次を実行します。アプリ本体は変更しません。

```sh
npm run sync:macroflush
npm run check
```

既定の参照先は隣接する `../MacroFlush` です。別の場所なら `MACROFLUSH_ROOT=/path/to/MacroFlush npm run sync:macroflush` を使います。Player本体・Three.jsの依存チャンク・同梱リソースを `vendor/player/` に保持し、ソースのSHA-256を `vendor/provenance.json` に記録します。通常のbuildはこのスナップショットを使うので、アプリのソースツリーがなくてもビルドできます。

作例を追加するときは `projects/<name>/project.json` を保存して `src/examples.js` にURLを登録します。リンクファイルはそのプロジェクトと一緒に配置してください。公開用はアプリのExport Embedded V2で自己完結したJSONにするのが簡単です。プレビューは画面内だけで再生し、ダイアログを閉じる・ページを離れるとPlayerを破棄します。音声は初期状態でミュートし、詳細画面のSoundで切り替えます。

## 配置

`dist/` の中身を静的ホスティングへ配置します。サブディレクトリの `index.html` と `404.html` を配信できる設定にしてください。このリポジトリからアプリ本体の起動・配布は行いません。

### GitHub Pages

GitHubのリポジトリ設定で **Settings → Pages → Build and deployment → Source → GitHub Actions** を選択します。`.github/workflows/pages.yml` は `main` へのpushまたはActions画面の手動実行で、Node.jsによるビルド・検証と `dist/` の公開を行います。Jekyllや `docs/` フォルダーは使用しません。

公開先は通常 `https://satcy.github.io/MacroFlush-Web/` です。ワークフローはGitHub Pagesの `base_path` を使用し、リンクを公開先に合わせます。Playerと作例は同じ配下に配置されます。独自ドメインなどでルート配信する場合にも対応します。

GitHub Pagesと同じパスをローカルで検証するには次を実行します。

```sh
BASE_PATH=/MacroFlush-Web/ npm run check
BASE_PATH=/MacroFlush-Web/ PORT=4174 npm run preview
```

`http://127.0.0.1:4174/MacroFlush-Web/` を開いて確認します。通常のルート配信に戻すには `npm run build` を実行します。既存の公開設定が `main` の `/docs` になっている場合は、SourceをGitHub Actionsへ切り替えてください。

TopのTimelineは読み込んだAutecの配置とパラメータのキーを表示します。キーを選択しても再生位置は変えず、シークは再生バーとルーラーから操作します。Timelineではキーの時刻、Curveでは時刻と成分値を編集できます。矢印キー、Shift+矢印、数値入力、追加・削除・Undo・Resetにも対応し、Save JSONで編集したV2プロジェクトを保存できます。変更はブラウザ内のデモに反映されます。
