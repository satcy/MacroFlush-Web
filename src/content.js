import { extraGroups, extraApi } from "./reference-extra.js";
import { featureGroups, featureApi } from "./reference-features.js";
import { threeDGroups, threeDApi, threeDLesson } from "./three-d-content.js";
export const groups = [
  { id: "lifecycle", name: "Lifecycle & time", description: "Clipの初期化と、タイムラインが管理する時間。" },
  { id: "parameters", name: "Parameters", description: "コードの値をInspectorとキーフレームにつなぐ。" },
  { id: "canvas", name: "Canvas / Centi", description: "clip.use(\"centi\")で使える描画ヘルパー。" },
  ...extraGroups,
  ...threeDGroups,
  ...featureGroups,
  { id: "events", name: "Cues & audio", description: "コンポジションの進行、イベント、音声解析。" },
  { id: "player", name: "Player", description: "Webサイトのホスト側から再生を制御する。" }
];
export const api = [
  { id: "setup", group: "lifecycle", name: "setup(callback)", text: "Clipの初期化処理を登録します。変数や背景色などの初期値の設定に使います。Canvasのサイズはsetup()では設定できません。直後にホストのパラメータが再適用されるため、Inspectorのsizeか、onFrame()内のsize()で指定します。", code: "clip.use(\"centi\");\nsetup(() => bg(20));\nonFrame(() => {\n  size(720, 405);\n  clear();\n});" },
  { id: "onframe", group: "lifecycle", name: "onFrame(callback)", text: "ホストからフレームが届くたびに呼ばれます。Clip内で独自のアニメーションループを作らず、渡された時間から描画します。", code: "onFrame(({ time, frame, progress }) => {\n  // time: ClipのInからの秒数\n  // frame: ClipのInからのフレーム番号\n  // progress: Clip内の進行度\n  bg(0);\n  col(255);\n  oval(360 + Math.sin(time) * 120, 202, 24);\n});" },
  { id: "composition-time", group: "lifecycle", name: "compTime / compFrame", text: "コンポジションのPlayhead基準の秒数とフレーム番号です。ClipのIn基準のtime / frameと区別して、複数Clipを同期させます。", code: "onFrame(({ time, compTime, compFrame }) => {\n  // time は Clip のローカル時間\n  // compTime は Composition の時間\n});" },
  { id: "defineparams", group: "parameters", name: "clip.defineParams(schema)", text: "公開パラメータの型・初期値・範囲を宣言します。number、string、boolean、color、vec2、vec3、selectに対応します。", code: "clip.defineParams({\n  speed: { type: \"number\", default: 1, min: 0,\n    max: 3, step: 0.1, interpolable: true },\n  tint: { type: \"color\", default: \"#5dd4ff\",\n    space: \"srgb\", interpolable: true }\n});" },
  { id: "clip-params", group: "parameters", name: "clip.<name>", text: "宣言したパラメータを直接読み書きできます。キーフレーム区間ではキーフレームの値が優先されます。writable: falseでスクリプトからのホスト更新を無効にできます。", code: "onFrame(({ time }) => {\n  const phase = time * clip.speed;\n  col(clip.tint);\n  oval(360 + Math.sin(phase) * 100, 202, 30);\n});" },
  { id: "comp", group: "parameters", name: "comp.<name>", text: "コンポジションのパラメータは、同じコンポジション内のClipで共有されます。Clipを選択していないInspectorから作成します。", code: "onFrame(() => {\n  // Compositionにspeedを作成してから使用\n  clip.speed = comp.speed;\n});" },
  { id: "getparam", group: "parameters", name: "clip.getParam(placementId, key)", text: "同じコンポジション内の別Clip配置の、フレーム開始時点で補間されたパラメータを読みます。アセット名ではなく、Timeline上の配置IDを指定します。", code: "onFrame(() => {\n  const speed = clip.getParam(\"placement-id\", \"speed\");\n});" },
  { id: "centi", group: "canvas", name: "clip.use(\"centi\")", text: "CentiのCanvas2Dヘルパーを有効にします。既定ではグローバル関数として使用できます。", code: "clip.use(\"centi\");\nonFrame(() => {\n  size(720, 405);\n  bg(0);\n  col(\"#5dd4ff\");\n  oval(360, 202, 60);\n});" },
  { id: "size", group: "canvas", name: "size(width, height)", text: "Canvasのピクセル寸法を設定します。固定サイズはInspectorのsizeで設定するか、onFrame()の描画前に呼び出します。sz(width, height)も同じです。setup()内の指定は、直後にホストのパラメータが再適用されるため無効です。onFrame()内の変更はEditorのClipのsizeパラメータへ反映され、プロジェクトに保存されます（値が変わると未保存状態になることがあります）。p5のcreateCanvas()とは別のAPIです。", code: "onFrame(() => {\n  size(720, 405);\n  clear();\n});" },
  { id: "color", group: "canvas", name: "bg(...) / col(...)", text: "bg()は背景色でCanvasをクリアし、col()は以降の描画色を設定します。CSS色文字列またはRGB(A)値を指定できます。", code: "bg(0);\ncol(\"#ff6c9a\");\n// col(255, 108, 154); も使用できます" },
  { id: "shapes", group: "canvas", name: "oval(...) / rect(...) / line(...)", text: "基本図形を描画します。ovalの第3引数は半径です。fill() / stroke()で塗りと線を切り替え、lineWidth()で線幅を指定します。", code: "fill();\noval(360, 202, 40);\nrect(100, 100, 80, 80);\nstroke();\nlineWidth(2);\nline(0, 0, 720, 405);" },
  { id: "getcontext", group: "canvas", name: "getContext()", text: "CentiのCanvasRenderingContext2Dを取得します。標準Canvas2D APIで描画する作例にも使えます。", code: "const ctx = getContext();\nctx.beginPath();\nctx.arc(360, 202, 80, 0, Math.PI * 2);\nctx.stroke();" },
  ...extraApi,
  ...threeDApi,
  ...featureApi,
  { id: "cue", group: "events", environments: ["browser-editor", "app"], name: "cue(name, frame, options)", text: "CuesタブでコンポジションのCueを定義します。modeはstop、loop、none。通常のHTML ClipのJavaScriptでは使用しません。保存したCueはPlayerでも実行されます。", code: "// Cuesタブに記述\ncue(\"Intro\", 0, { mode: \"stop\" });\ncue(\"Loop\", 180, { mode: \"loop\" });" },
  { id: "go", group: "events", name: "go(name) / onCue(callback)", text: "go()は名前付きCueへPlayheadを移動します。onCue()はClipが作成済みCueに入ったときの処理を登録します。", code: "onCue(({ cueName }) => {\n  console.log(cueName);\n});\n// 明示的なジャンプ: go(\"Intro\");" },
  { id: "audio", group: "events", name: "audioBand(name, band)", text: "Projectに読み込んだ音声アセットの帯域エネルギーを0〜1で取得します。low / mid / highを指定でき、コンポジションのPlayheadに従います。対応する音声Clipがアクティブでない場合は0です。", code: "onFrame(() => {\n  const bass = audioBand(\"Music\", \"low\");\n  clip.scale = [1 + bass * 0.3, 1 + bass * 0.3];\n});" },
  { id: "createplayer", group: "player", name: "createClipPlayer(options)", text: "ビルドで生成されるmacroflush-player.jsからインポートします。projectとcanvasを渡してPlayerを作成し、readyを待ってから再生します。", code: "import { createClipPlayer } from \"./macroflush-player.js\";\nconst player = createClipPlayer({ project, canvas });\nawait player.ready;\nplayer.tickTime(0);" },
  { id: "tick", group: "player", name: "player.tickTime(seconds) / tick(frame)", text: "ホスト側から描画する時刻またはフレームを渡します。Clip内のonFrame()とは別に、埋め込み先のWebページが時間を管理します。", code: "// ホスト側のWebページで実行\nconst start = performance.now();\nfunction render(now) {\n  player.tickTime((now - start) / 1000);\n  requestAnimationFrame(render);\n}\nrequestAnimationFrame(render);" },
  { id: "player-angle-unit", group: "player", name: "player.setClipParam() / getClipParam() / angleUnit", text: "管理された3D配置のXYZ rotationとLight angleは、Playerの数値制御（setClipParam / getClipParam / set / get）では既定でラジアンです。createClipPlayer()にangleUnit: \"degrees\"を渡すと、ネストしたCompositionのアドレスを含め、これらを度で読み書きできます。プロジェクトファイル、ScriptのThree.js、fov、2D transform、独自パラメータの単位は変わりません。", code: "const player = createClipPlayer({ project, canvas, angleUnit: \"degrees\" });\nawait player.ready;\nplayer.setClipParam(\"Layer 1\", \"Mesh1\", \"rotation\", 0, 90, 0);\nplayer.set(\"/Layer 1/Light1/angle\", 45);" },
  { id: "destroy", group: "player", name: "player.destroy()", text: "埋め込み先のビューを破棄するときにPlayerのリソースを解放します。ホスト側のアニメーションループも停止してください。", code: "player.destroy();" }
];
export const lessons = [
  { id: "first-clip", number: "01", title: "最初のClipをつくる", level: "Getting started", summary: "Canvasに円を描いて、タイムラインで動かす。", steps: [
    { title: "HTML Clipを用意する", text: "MacroFlushを開き、ProjectパネルでHTML Clipを作成します。コンポジションのTimelineへ配置して、そのClipを選択します。HTML / CSS / JavaScriptタブからソースを編集できます。今回の作例ではHTMLとCSSは空のままで構いません。" },
    { title: "JavaScriptを書く", text: "JavaScriptタブに以下のコードを入れて保存します。CentiがCanvasを用意し、onFrame()の先頭でsize()を呼んでサイズを設定します。", code: "clip.use(\"centi\");\n\nonFrame(({ time }) => {\n  size(720, 405);\n  bg(0);\n  col(\"#5dd4ff\");\n  oval(360 + Math.sin(time) * 120, 202, 30);\n});" },
    { title: "再生して、時間を動かす", text: "Timelineの再生ボタンで円が左右に動きます。Playheadをドラッグすると、指定した時刻の形を確認できます。描画はtimeから計算しているので、前のフレームの状態に依存しません。Clip内ではrequestAnimationFrame()ではなくonFrame()を使います。" },
    { title: "作例を変えてみる", text: "半径の30を60に、横移動の120を200に変えてみましょう。次のチュートリアルでは、こうした値をInspectorから操作できるパラメータにします。" }
  ] },
  { id: "parameters", number: "02", title: "パラメータを公開する", level: "Parameters", summary: "コードの値をInspectorから操作できるようにする。", steps: [
    { title: "速度と色を宣言する", text: "最初のClipのJavaScriptを以下のコードに置き換えます。clip.defineParams()で型・初期値・編集範囲をまとめて宣言します。", code: "clip.use(\"centi\");\nclip.defineParams({\n  speed: { type: \"number\", default: 1, min: 0,\n    max: 3, step: 0.1, interpolable: true },\n  tint: { type: \"color\", default: \"#5dd4ff\",\n    space: \"srgb\", interpolable: true }\n});\nonFrame(({ time }) => {\n  size(720, 405);\n  bg(0);\n  col(clip.tint);\n  oval(360 + Math.sin(time * clip.speed) * 120, 202, 30);\n});" },
    { title: "Inspectorで値を編集する", text: "コードを保存してClipを選択すると、Inspectorにspeedとtintが表示されます。speedを0にすると静止し、2にすると移動が速くなります。tintで円の色を変えてみましょう。" },
    { title: "キーフレームを付ける", text: "Playheadを最初のフレームへ移動し、InspectorのspeedのKey操作でキーフレームを追加します。別のフレームへ移動し、値を変えてキーを追加すると、タイムラインが値を補間します。Curve表示で補間の形を調整できます。" }
  ] },
  { id: "composition", number: "03", title: "Clipを重ねて合成する", level: "Composition", summary: "レイヤー、変形、Cueでひとつのシーンを組み立てる。", steps: [
    { title: "ふたつのClipを配置する", text: "Examplesから別のコードをコピーして、2つ目のHTML Clipを作成します。Timelineの別レイヤーへ配置し、再生区間を重ねます。各Clipは独立したWebドキュメントとして動作します。" },
    { title: "透明な背景にする", text: "上に重ねるClipではbg(0, 0)で背景色を透明に設定し、毎フレームclear()で描き直します。背景を不透明に塗るfillRect()も外すと、下のレイヤーが見えるようになります。Inspectorでposition、scale、rotation、opacityを調整して配置を整えます。", code: "// CentiのClipで透明にクリアする\nonFrame(({ time }) => {\n  clear();\n  col(\"#ff6c9a\");\n  oval(360, 202, 40 + Math.sin(time) * 20);\n});" },
    { title: "Cueで区間を決める", text: "コードエディタのCuesタブにCueを記述します。通常のClipのJavaScriptではなく、コンポジション全体に属する定義です。Timelineへ反映されたCueの区間とmodeを確認してください。", code: "cue(\"Intro\", 0, { mode: \"none\", endFrame: 180 });\ncue(\"Loop\", 180, { mode: \"loop\", endFrame: 360 });" }
  ] },
  { id: "export", number: "04", title: "映像を書き出す", level: "Export", summary: "デスクトップ版でPNG連番・MP4・ProResを出力する。", steps: [
    { title: "出力するコンポジションを確認する", text: "Electron版MacroFlushでプロジェクトを開き、出力するコンポジションを選択します。プレビューで先頭・中間・最後のフレームを確認します。このチュートリアルではCentiのCanvasを使ったHTML Clipを対象にします。" },
    { title: "Export Mediaを開く", text: "File > Export Mediaから形式を選びます。PNG Sequenceは連番画像、H.264 MP4は動画、Apple ProRes MOVは編集向けの動画形式です。フレーム範囲と出力解像度を設定して書き出します。" },
    { title: "用途に合わせて設定する", text: "MP4はCRFまたは目標ビットレートで品質を調整できます。透明背景が必要ならPNG、またはアルファを保持するProRes 4444 / 4444 XQを選びます。音声はTimelineに配置した音声Clipをミックスできます。" },
    { title: "ファイルを確認する", text: "出力したファイルの解像度、尺、音声、必要な場合はアルファを確認します。現行の書き出しには対象Clipの制約があります。ネストしたCompositionやWGSL、DOMのみのHTML Clipなどは対応状況をアプリのREADMEで確認してください。" }
  ] },
  threeDLesson
];
