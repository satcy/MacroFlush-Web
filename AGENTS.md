# MacroFlush Web — エージェント向けガイド

## 目的と範囲

MacroFlushアプリの紹介・学習用の日本語Webサイトです。メインコンテンツは Top / About / Reference / Examples / Tutorials。アプリのダークパネル、Playfair Displayのロゴ、シアン・ピンク・黄色の配色を継承してください。

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

## 実Playerと作例

- TopとExamplesは `vendor/player/` の実MacroFlush Playerで実プロジェクトを再生します。サイト独自の代用描画に置き換えないでください。
- Playerの配布ファイルは直接編集せず、サイト側のラッパーで対応してください。更新が必要な場合は `npm run sync:macroflush` を使い、続けて `npm run check` を実行します。
- 同期はPlayerスナップショット、掲載作例のJSON、provenanceを上書きします。作例を独自編集した後に同期する場合は差分を確認してください。
- 同期元の既定値は `../MacroFlush`。変更する場合は `MACROFLUSH_ROOT=/path/to/MacroFlush npm run sync:macroflush` を使用します。通常のビルドはこのアプリの存在に依存しません。
- 既存の個別作例はShowcaseと同じオリジナルClipソースを保ちます。新規作例は `projects/<name>/project.json` と `src/examples.js` の登録を追加し、実Playerで確認してください。現在の検証は埋め込みメディアを前提としているため、公開JSONはExport Embedded V2などで自己完結させます。
- 音声は初期状態でミュート。画面外の不要な再生を止め、ダイアログを閉じる・ページを離れる際はPlayer、イベント、メディア、Blob URLを解放してください。

## Topのライブ編集

Timeline / Curveは読み込んだCompositionのレイヤー・配置・パラメータ・キーフレームを表示します。アプリのデータに存在しないトラックや意味を追加しないでください。

キー選択とシークは別操作です。キー選択だけでは再生位置を変えず、再生バーとルーラーでシークします。再生位置・progress・表示フレームを一致させ、キー編集は整数フレームと有効範囲を守ってください。RGB編集では選択していない成分を保持します。

ライブ編集はブラウザ内の複製したプロジェクトに反映し、Save JSONでV2形式を保存します。Playerに渡した配置・レイヤーの参照を維持し、編集のたびにClip iframeを作り直さないでください。停止中の同一フレーム更新にはPlayerの転送制限への対応があります。変更する場合は実描画の更新とUndo / Resetも確認してください。

## Referenceと画面確認

APIの説明・コード例・制約は参照元アプリの実装・型定義・ドキュメントで確認してください。一般的なライブラリの挙動をMacroFlush固有の挙動として記載しないでください。特にCentiの色・単位・補間、p5.jsのライブラリ読み込み、global mode、時間、入力、Isolated replayの条件に注意してください。

UI変更の確認では、デスクトップと狭い画面、キーボード操作、フォーカス、reduced-motion、ダイアログのCloseボタンを対象にします。Player関連では実プロジェクトの初期描画、再生・停止・シーク、progress、Timeline / Curve切替、キー編集、JSON保存、閉じた後の破棄を変更箇所に応じて確認してください。
