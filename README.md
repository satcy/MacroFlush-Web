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
| `/examples/` | Examples / 6実プロジェクト・カテゴリ絞り込み・ソース閲覧・JSONダウンロード |
| `/tutorials/` | Tutorials / 4本の制作手順 |

各チュートリアルにも固有のURLがあります。ページ本文はビルド時にHTML化され、JavaScriptが無効でも読むことができます。プレビューの停止、reduced-motion設定、キーボード操作に対応しています。

日本語は上記のURL、英語は `/en/` 配下です（例: `/en/reference/`）。ヘッダーのJA / ENで同じページの言語を切り替えます。JavaScriptが有効な場合はReferenceの現在のアンカーも保持します。両言語のHTMLを静的に生成するため、英語ページもJavaScriptなしで読めます。Playerと作例JSONは両言語で共有します。

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
- `src/styles.css`: アプリから引き継いだデザインとレスポンシブ表示
- `assets/`: アプリのロゴ、画面キャプチャ、Playfair Display (OFL)
- `scripts/`: ビルド、ローカルHTTPサーバー、検証

本文はローカルMacroFlush 0.3.10のREADMEとランタイム型定義を参照して作成。アプリの更新時はAPIと出力制約を再確認してください。TopとExamplesは `MacroFlush/dist/player` の実Playerを使い、`projects/` のMacroFlush V2プロジェクトJSONを読み込んで再生します。サイト側に代用の描画実装はありません。

Showcaseはアプリ同梱の `src/sample/sampleProject.json` を元に、リンクメディアを埋め込んだポータブルなプロジェクトです。他の5作例は、そのファイルのオリジナルClipソースを個別コンポジションに配置したプロジェクトです。独立した作例の配置を中央へ調整し、Autecは元のcolorキーフレームを保持します。

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
