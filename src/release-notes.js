// End-user release notes. Source: ../MacroFlush/CHANGELOG.md (developer history),
// rewritten for people who use the app, the browser Editor and the Player.
// Keep entries short and in terms of what changes for the user. Omit QA records,
// packaging internals and test coverage notes. Scope: "app" = desktop app only,
// "editor" = browser Editor, "editors" = browser Editor and desktop app,
// "player" = Player host API, "" = shared playback or Clip API behavior.

export const kindLabels = {
  new: { ja: "新機能", en: "New" },
  improved: { ja: "改善", en: "Improved" },
  changed: { ja: "変更", en: "Changed" },
  fixed: { ja: "修正", en: "Fixed" }
};

export const scopeLabels = {
  player: { ja: "Player", en: "Player" },
  app: { ja: "アプリ版", en: "Desktop app" },
  editor: { ja: "ブラウザEditor", en: "Browser Editor" },
  editors: { ja: "ブラウザEditor・アプリ版", en: "Browser Editor / Desktop app" }
};

const item = (kind, scope, ja, en) => ({ kind, scope, ja, en });

export const releases = [
  {
    version: "0.4.0",
    headline: {
      ja: "3DのScriptが、書いた変更を保ったまま動かせるようになりました。",
      en: "3D Scripts can now keep their changes between frames."
    },
    items: [
      item("new", "",
        "3DアセットのScriptに Manual restore を追加。Camera・Light・Null・Mesh（Modelは対象外）で、InspectorのScript stateから選びます。選ぶと `onFrame` が `state` と `jumped` を受け取り、Scriptが書いた値は、戻すまで残ります。従来の動作（restore-each-frame）は既定のままです。",
        "Manual restore for 3D asset Scripts. For a Camera, Light, Null or Mesh (not a Model), choose it under Script state in the Inspector. `onFrame` then receives `state` and `jumped`, and what the Script writes stays until it restores it. The existing behavior (restore-each-frame) is still the default."),
      item("new", "",
        "`state.restore()`・`state.set()`・`state.mix()`・`state.snapshot()` で値を戻す・書く・補間する・保存できます。Meshでは `state.positions` で頂点を直接動かせます。キーフレームのあるキーと、Aim中のCameraの回転はTimelineが管理するため、書き換えられません。",
        "`state.restore()`, `state.set()`, `state.mix()` and `state.snapshot()` put values back, write them, interpolate them and save them. On a Mesh, `state.positions` moves vertices directly. Keys with keyframes, and a Camera's rotation under Aim, stay with the Timeline and cannot be overwritten."),
      item("new", "",
        "Jump の設定で、シーク・コマ送り・Cueジャンプ・ループの折り返し・逆再生・書き出しの開始のときに状態を戻すか（Reset、既定）、持ち越すか（Keep state）を選べます。通常の再生、一時停止、速度の変更では戻りません。",
        "The Jump setting chooses whether the state is restored (Reset, the default) or carried over (Keep state) on a seek, frame step, Cue jump, loop wrap, reversal or export start. Normal playback, pausing and speed changes never reset it."),
      item("new", "app",
        "MCPに `set_3d_script_state` を追加。AIクライアントから、3DアセットのScript stateとJumpを設定できます。",
        "MCP gains `set_3d_script_state`, which lets an AI client set a 3D asset's Script state and Jump."),
      item("improved", "",
        "Inspectorに、Script stateとJumpの行を追加しました。Scriptが操作するキーと、Timelineなどが管理するキーの数を示す Key ownership の表示もあります。設定は、そのアセットを使うすべての配置で共通で、Undo 1回分です。",
        "The Inspector gains Script state and Jump rows, plus a Key ownership summary showing which keys the Script controls and which belong to the Timeline. The settings are shared by every placement of the asset and are one Undo step."),
      item("changed", "",
        "Manual restore を使うプロジェクトだけ、新しいV4形式で保存されます。それ以外のプロジェクトは、これまでと同じ形式で保存されます。V4のファイルは、以前の0.3.x系のEditorと公開Playerでは開けません（エラーを表示します）。また、Export Embedded V2 はできません。",
        "Only projects that use Manual restore are saved in the new V4 format; every other project is saved exactly as before. A V4 file cannot be opened by earlier 0.3.x Editors or the public Player (they show an error), and Export Embedded V2 is refused."),
      item("changed", "player",
        "単独のPlayerでManual restoreのプロジェクトを再生するときは、ホスト側のシークやクロックの折り返しで `player.tick(frame, { transport: { seek: true } })` と伝えます。Player自身のCueの折り返しは自動で扱われます。",
        "To play a Manual restore project in a standalone Player, pass `player.tick(frame, { transport: { seek: true } })` on the host's own seeks and clock wraps. The Player's own Cue wraps are handled automatically."),
      item("fixed", "",
        "3DアセットのInspectorで、Asset・Target・Parent・Aim target・Transition・Durationなどの行の右端がそろっていなかったのを修正しました。",
        "Fixed the right edges of rows such as Asset, Target, Parent, Aim target, Transition and Duration not lining up in the 3D asset Inspector."),
      item("fixed", "",
        "Safariで、Feedback Editorの背景が元のフレームの外に描かれる問題を修正しました。",
        "Fixed the Feedback Editor background being drawn outside the source frame in Safari.")
    ]
  },
  {
    version: "0.3.20",
    headline: {
      ja: "ターミナルからOSCを有効にして起動できるようになりました。",
      en: "Launch the app with OSC already running from the terminal."
    },
    items: [
      item("new", "app",
        "起動オプション `--osc` / `--osc-in <port>` / `--osc-out <host:port>` を追加。ターミナルからOSCを開始し、受信ポート（既定9000）と送信先（既定127.0.0.1:9001）を指定できます。`--osc` なしのポート・送信先指定は、OSCタブの初期値だけを変更します。起動済みのアプリのOSC設定は、再度起動しても変わりません。",
        "New launch options `--osc`, `--osc-in <port>` and `--osc-out <host:port>` start OSC from the terminal and set the receive port (default 9000) and destination (default 127.0.0.1:9001). Without `--osc`, port and destination options only prefill the OSC tab. Launching a second instance does not change the running app's OSC settings."),
      item("improved", "app",
        "OSCの送信先にホスト名とIPv6（例 `[::1]:9001`）を指定できます。OSCタブの送信先でも使えます。オプションが不正な場合やポートが使用中の場合は、OSCを停止したままエラーを表示し、アプリは通常どおり起動します。",
        "OSC destinations now accept hostnames and IPv6 addresses such as `[::1]:9001`, in the OSC tab too. If an option is invalid or the port is in use, the app still starts, leaves OSC off and shows an error."),
      item("fixed", "app",
        "再生中に `/transport/play` を受信すると、Timelineが止まってしまう問題を修正しました。再生中の `play`、停止中の `pause` は何も変えません。",
        "Fixed the Timeline freezing when `/transport/play` arrived while it was already playing. Sending `play` while playing, or `pause` while paused, now does nothing."),
      item("changed", "app",
        "OSCの `/composition/open` で別のCompositionへ切り替えると、フレーム0で停止した状態で開きます。",
        "Switching compositions with OSC `/composition/open` now opens the new composition paused at frame 0.")
    ],
    notes: {
      ja: "受信側がIPv4のみの場合、`localhost` が `::1` に解決されると届かないことがあります。その場合は `127.0.0.1` を指定してください。",
      en: "If the receiving program listens on IPv4 only, `localhost` may resolve to `::1` and nothing arrives. Use `127.0.0.1` instead."
    }
  },
  {
    version: "0.3.19",
    headline: {
      ja: "OSCでTimelineやレイヤーを操作でき、ターミナルからプロジェクトを開けます。",
      en: "Control the Timeline and layers over OSC, and open projects from the terminal."
    },
    items: [
      item("new", "app",
        "OSCで再生を操作できます。`/transport/play`・`/transport/pause`・`/transport/stop`・`/transport/frame <n>`・`/transport/step [n]`、そして `/composition/open <name>` でCompositionを切り替えます。",
        "OSC can now drive playback: `/transport/play`, `/transport/pause`, `/transport/stop`, `/transport/frame <n>`, `/transport/step [n]`, plus `/composition/open <name>` to switch compositions."),
      item("new", "app",
        "OSCでレイヤーの表示を切り替えられます。`/layers/<name>/visible` に真偽値または 0 / 1 を送ります（Effect layerも対象）。",
        "OSC can show or hide a layer: send a boolean or 0 / 1 to `/layers/<name>/visible` (Effect layers included)."),
      item("new", "app",
        "ターミナルからプロジェクトを開けます。`--project <path>` を付けて起動するか、macOSの `open -a` でMacroFlushを指定してJSONファイルを開きます。起動中のアプリがあれば、そのウィンドウで開きます。",
        "Open a project from the terminal with `--project <path>`, or use macOS `open -a` to open a JSON file with MacroFlush. If the app is already running, the project opens in its existing window."),
      item("new", "",
        "HTML Clipから、直接の配置先Compositionの名前とIDを `getCompositionName()` / `getCompositionId()` で取得できます。名前の変更は次のtickで反映され、IDは変わりません。",
        "HTML Clips can read their directly containing composition's name and ID with `getCompositionName()` and `getCompositionId()`. A rename is reflected on the next tick; the ID stays the same."),
      item("new", "",
        "Clipからカスタムパラメータを一覧できます。`clip.paramNames` と `clip.listParams()` を追加しました。",
        "A Clip can now list its custom parameters with `clip.paramNames` and `clip.listParams()`."),
      item("new", "",
        "`clip.isNew.<name>` で、カスタムパラメータが前回処理したtickから変わったかを判定できます。初回とClipのINフレームではtrueになり、シークやステップでも履歴を更新します。Inspector・OSC・キーフレームなどから届く変化が対象で、Clip自身による書き込みは対象外です。",
        "`clip.isNew.<name>` reports whether a custom parameter changed since the previous processed tick. It is true on the first tick and at the Clip's IN frame; seeks and steps also update its history. It detects incoming changes from sources such as the Inspector, OSC and keyframes, excluding the Clip's own writes."),
      item("fixed", "app",
        "Compositionパネルを最小化すると、`sendOsc()` が送信を止めてしまう問題を修正しました。OSCが有効な間は、パネルを隠してもClipが動き続けます。",
        "Fixed `sendOsc()` stopping when the Composition panel was minimized. While OSC is on, Clips keep running with the panel hidden."),
      item("fixed", "editor",
        "Safariで、ループの2周目以降に音声の位置補正を繰り返して途切れる問題を軽減しました。ループ先頭の短い無音や再生の遅れは残ります。",
        "Reduced repeated audio stalls after the first loop in Safari by avoiding repeated position corrections. A short gap at the loop head and playback latency remain."),
      item("changed", "app",
        "未保存のFeedback記録や未適用のFeedback編集がある間は、MCPの `open_composition` で別のCompositionへ切り替えられません。OSCの `/composition/open` も同じです。",
        "While Feedback work is unresolved (a fresh take or unapplied edits), MCP `open_composition` and OSC `/composition/open` refuse to switch to another composition.")
    ]
  },
  {
    version: "0.3.18",
    headline: {
      ja: "マルチタッチのFeedbackと、Feedbackをその場で直せるエディタが加わりました。",
      en: "Multi-touch Feedback, and an editor for fixing Feedback in place."
    },
    items: [
      item("new", "editors",
        "マルチタッチのFeedbackに対応しました。Record FeedbackでPointer modeにMulti-touchを選び、同時に記録する接点数の上限を指定します。保存したマルチタッチ割り当ての再生には、対応版のEditor・Playerが必要です。",
        "Multi-touch Feedback is now supported. Choose Multi-touch as the Pointer mode in Record Feedback and set the maximum number of simultaneous contacts to record. Saved touch bindings require a compatible Editor or Player for playback."),
      item("new", "editors",
        "Feedback Editorを追加。ProjectのEdit…、またはInspectorのEdit source…から開き、ストロークの移動・伸縮、点の編集、リサンプル、描き足しができます。**Add as new Feedback…** か確認付きの **Replace original…** で反映すると、プロジェクトのUndo 1回分になります。下書きはメモリ上だけに保持され、プロジェクトのSaveでは未適用の編集を保存できません。",
        "A new Feedback Editor opens from Project Edit… or Inspector Edit source…. Move or stretch strokes, edit points, resample or draw new strokes. **Add as new Feedback…** or the confirmed **Replace original…** applies the result as a single project Undo step. Drafts exist only in memory; saving the project does not save unapplied edits."),
      item("new", "",
        "Clipのコードで、記録したポインタを `onMouseDown` / `onMouseMove` / `onMouseUp` で受け取れます。Inspectorで割り当てず、Feedbackアセット名を指定して読むこともできます。コールバックは前進再生と連続フレームの書き出し時に届き、シークや一時停止では実行されません。",
        "Clip code can receive a recorded pointer through `onMouseDown`, `onMouseMove` and `onMouseUp`. A named Feedback asset can also be read without an Inspector assignment. Callbacks run during forward playback and sequential export, not during seeks or pauses."),
      item("new", "editors",
        "Project内のComposition・HTML Clip・Feedbackを右クリックで複製できます（`名前_copy`）。FeedbackはJSONとして書き出せます。",
        "Right-click a Composition, HTML Clip or Feedback in Project to duplicate it (`name_copy`). Feedback can also be exported as JSON."),
      item("new", "",
        "Centiの `rect()` が、5番目の引数で角丸の四角形を描けます。`strk2fill(points, wid?, sub?)` で、線の輪郭をポリゴンとして取得できます。",
        "Centi `rect()` draws rounded rectangles with a fifth argument, and `strk2fill(points, wid?, sub?)` returns the outline polygon of a polyline."),
      item("fixed", "editors",
        "ボタンを押したまま記録が終わったFeedbackが、編集画面でストロークなしに見える問題を修正しました。修正前に保存された、ボタンを離すイベントのない記録は、引き続き読み取り専用です。",
        "Fixed Feedback recordings ending with the button held appearing to have no strokes in the editor. Earlier recordings missing a button-release event remain read-only."),
      item("fixed", "editors",
        "Inspectorでキーフレームの値を変えると、イージングがリセットされる問題を修正しました。",
        "Fixed editing a keyframe value in the Inspector resetting its easing."),
      item("fixed", "editors",
        "非表示のマスターのインスタンスを含む入れ子のCompositionを書き出すと失敗する問題を修正しました。",
        "Fixed export failing for a composition that nests an instance of a hidden master."),
      item("fixed", "app",
        "ProRes書き出しで、音声の最後が少し早く終わる問題を修正しました。",
        "Fixed ProRes exports whose audio ended slightly before the video.")
    ]
  },
  {
    version: "0.3.17",
    headline: {
      ja: "ブラウザEditorでもH.264とPNG連番を書き出せるようになりました。",
      en: "H.264 and PNG sequence export in the browser Editor."
    },
    items: [
      item("new", "editor",
        "PNG連番をブラウザEditorから書き出せます。ブラウザが許可すればフォルダへ直接、そうでなければ1つのZIPとして保存します。透明は保持されます。",
        "Export PNG sequences from the browser Editor, straight into a folder when the browser allows it or as a single ZIP otherwise. Transparency is kept."),
      item("changed", "editors",
        "H.264の書き出しは、ブラウザ・システムのエンコーダー（WebCodecs）を使い、品質はビットレート（Mbps、既定8）で指定します。サイズは2px以上の偶数が必要で、透明部分は黒になります。",
        "H.264 export now uses the browser or system encoder (WebCodecs) and is set by bitrate in Mbps (default 8). Dimensions must be even and at least 2 px, and transparency is flattened onto black."),
      item("improved", "editors",
        "Export Mediaの設定を専用ダイアログで編集できます。範囲・サイズ・縦横比・音声・ビットレートを、ブラウザEditorとアプリ版で同じ手順で設定できます。ProResプロファイルの選択はアプリ版専用です。",
        "Export Media has a dedicated settings dialog. Set the range, size, aspect lock, audio and bitrate through the same workflow in the browser Editor and desktop app. ProRes profiles are available only in the desktop app."),
      item("improved", "editors",
        "H.264に音声を含めて書き出したとき、映像と音声の開始位置がずれないよう調整しました。",
        "H.264 exports with audio now keep sound and picture aligned from the first frame."),
      item("improved", "app",
        "ProRes書き出しは、完了するまで既存のファイルを置き換えません。失敗やキャンセルでも、以前のファイルが残ります。",
        "ProRes export no longer replaces an existing file until it finishes, so a failed or cancelled export keeps the earlier file.")
    ]
  },
  {
    version: "0.3.16",
    headline: {
      ja: "サイズのキーフレーム補間と、色の変化カーブの編集に対応しました。",
      en: "Size keyframe interpolation and color easing in Curve."
    },
    items: [
      item("new", "editors",
        "配置ごとにサイズのキーフレームを補間できます（InspectorのInterpolate size）。p5以外のHTML Clip・画像・動画・Composition参照が対象で、既定はこれまでどおり値を保持します。CurveではWidth / Heightをpxで表示します。",
        "Interpolate size keyframes per placement through Inspector > Interpolate size, for non-p5 HTML Clips, images, videos and composition references. The default still holds values as before; Curve shows Width and Height in px."),
      item("improved", "editors",
        "Curveで色の変化カーブを編集できます。キーにスウォッチと色の帯を表示し、イージングとBezierを調整できます。",
        "Curve can now edit color transitions. Keys show swatches and a color band, with Easing and Bezier controls.")
    ]
  },
  {
    version: "0.3.15",
    headline: {
      ja: "コードのサイズ指定とInspectorが連動するようになりました。",
      en: "Code size settings and the Inspector now stay in sync."
    },
    items: [
      item("improved", "editors",
        "トップレベルのインラインsetupコールバックに直接書いた `size(720, 360)` / `sz(720, 360)` の数値を書き換えると、編集中のHTML Clip配置のInspectorのサイズも更新されます（Undo 1回分）。動的な値や名前空間経由の呼び出しは対象外です。",
        "Editing numeric literals in a direct `size(720, 360)` or `sz(720, 360)` call inside a top-level inline setup callback also updates the edited HTML Clip placement's Inspector size, as one Undo step. Dynamic values and namespaced calls are excluded."),
      item("fixed", "app",
        "Windowsで、深いフォルダのメディアやフォントを読み込むと、アセット名が短縮名（`LONG-I~1.PNG` など）になる問題を修正しました。",
        "Fixed Windows showing shortened 8.3 names such as `LONG-I~1.PNG` for media and fonts loaded from very deep folders.")
    ]
  },
  {
    version: "0.3.14",
    headline: {
      ja: "ファイル選択が前回のフォルダから始まり、Outputで既存の描画を再利用します。",
      en: "File pickers remember their folders, and Output reuses existing rendered content."
    },
    items: [
      item("improved", "app",
        "プロジェクト・メディア・書き出しなどのファイル選択ダイアログが、用途ごとに前回のフォルダから開きます。",
        "File dialogs for projects, media and exports now open in the folder you last used for that purpose."),
      item("improved", "app",
        "Load Media / Load Font がOS標準のファイル選択になり、複数のファイルをまとめて読み込めます（16ファイル、合計256 MiBまで）。",
        "Load Media and Load Font use the native file picker and can import several files at once (up to 16 files and 256 MiB)."),
      item("improved", "app",
        "条件を満たすHTML ClipやCompositionでは、Outputのために別のPlayerを起動せず、既存の描画結果を再利用します。メディア・マスク・Effect layerなどを使う場合は従来の経路を使います。",
        "For eligible HTML Clips and compositions, Output reuses existing rendered content instead of starting a separate capture Player. Projects with media, masks or Effect layers retain the previous capture path."),
      item("improved", "",
        "setup内で呼んだ `size()` / `sz()` はホストの設定で上書きされることを、ドキュメントとエディタのヒントに明記しました。描画前に `onFrame()` で呼ぶか、Inspectorで指定してください。",
        "Documentation and editor hints now say that `size()` / `sz()` called in `setup()` are overwritten by the host. Call them in `onFrame()` before drawing, or set the size in the Inspector.")
    ]
  },
  {
    version: "0.3.13",
    headline: {
      ja: "ウィンドウが小さいときのPreviewと、Outputの安定性を改善しました。",
      en: "A steadier Preview in small windows and a more reliable Output."
    },
    items: [
      item("improved", "editors",
        "初期レイアウトとView > Reset Layoutで、Previewが広くなりました。以前に保存したレイアウトは変わりません。",
        "The default layout and View > Reset Layout give the Preview more room. Layouts you saved earlier are unchanged."),
      item("fixed", "editors",
        "小さなウィンドウでPreviewが消えたり、極端に小さくなったりする問題を修正しました。",
        "Fixed the Preview shrinking to nothing, or to a tiny area, in small windows."),
      item("fixed", "app",
        "Windowsで、Editorを最小化するとOutput Windowの更新が毎秒1回ほどに落ちる問題を修正しました。",
        "Fixed the Output Window dropping to about one update per second on Windows when the Editor was minimized."),
      item("fixed", "app",
        "Output Windowで、実行時に `add()` したHTML / Compositionの子の位置がずれる問題を修正しました。",
        "Fixed children added at runtime with `add()` appearing in the wrong place in the Output Window.")
    ]
  },
  {
    version: "0.3.12",
    headline: {
      ja: "3Dの角度が度表示になり、Output WindowでEffect layerが使えます。",
      en: "3D angles in degrees, and Effect layers in the Output Window."
    },
    items: [
      item("changed", "editors",
        "Camera / Light / Null / Mesh / ModelのXYZ回転とSpot Lightのangleが、InspectorとCurveで度表示になりました。Spotのangleは 0 より大きく 90 以下です。保存されるファイルはこれまでどおりラジアンで、以前のファイルもそのまま開けます。",
        "XYZ rotation for Camera, Light, Null, Mesh and Model, and the Spot Light angle, now show in degrees in the Inspector and Curve. Spot angles must be above 0 and at most 90. Files still store radians, so earlier files open unchanged."),
      item("new", "app",
        "Effect layer・マスク・Layers Belowを使ったCompositionを、Output Windowに原寸で表示できます。",
        "Compositions that use Effect layers, masks or Layers Below can now be shown in the Output Window at native resolution."),
      item("improved", "app",
        "Effect layerのないCompositionでは、一時停止中にEditorからOutput Windowへ送るデータを大きく減らし、CPU使用率を下げました。",
        "For compositions without Effect layers, the Editor sends far less data to the Output Window while paused, reducing CPU use."),
      item("fixed", "app",
        "一時停止したOutput Windowを開き直すと、フレームを送るまで透明や黒になる問題を修正しました。また、まだ再生していない区間でOutputを開くと黒いままになる問題も修正しました。",
        "Fixed a reopened, paused Output Window showing a transparent or black frame until you stepped, and Output staying black when opened on a section that had never played."),
      item("fixed", "app",
        "Output Windowを開くたびに、実行時に追加したCompositionの `setup` が繰り返し実行される問題を修正しました。",
        "Fixed runtime-added compositions re-running `setup` again and again when the Output Window was open."),
      item("fixed", "",
        "マスクされたComposition内の動画や音声が、一時停止中も再生され続ける問題を修正しました。",
        "Fixed video and audio inside masked compositions continuing to play while paused.")
    ]
  },
  {
    version: "0.3.11",
    headline: {
      ja: "`add()` の子の再生がPreviewと書き出しで一致し、`interp()` の引数順が標準になりました。",
      en: "`add()` children match export in Preview, and `interp()` uses the standard order."
    },
    items: [
      item("changed", "",
        "`interp(a, b, rate)` が標準の補間になりました。`rate` が0で `a`、1で `b` を返します。以前の動作（0で `b`）に頼ったコードは、最初の2つの引数を入れ替えてください。CentiScriptからの変換では自動で入れ替えます。",
        "`interp(a, b, rate)` is now a standard lerp: it returns `a` at rate 0 and `b` at 1. Code that relied on the old order must swap the first two arguments. The CentiScript converter does this for you."),
      item("improved", "",
        "実行時に `add()` した子の時計と座標変換を、Preview・Player・書き出しで統一しました。親Clipがフレーム0より後から始まる場合の時間や位置のずれを修正しています。親の不透明度や一部のマスク合成の差は、この修正の対象外です。",
        "Unified clocks and coordinate transforms for runtime `add()` children in Preview, the Player and export, fixing time and position offsets when the parent Clip starts after frame 0. Differences in parent opacity and some mask compositing remain outside this fix."),
      item("fixed", "editors",
        "レイヤーを動かしてUndoすると、一部のClipがPreviewに描かれなくなる問題を修正しました。",
        "Fixed some Clips disappearing from the Preview after moving a layer and undoing it.")
    ]
  },
  {
    version: "0.3.10",
    headline: {
      ja: "Feedback：入力を記録して、プロジェクトのデータとして再生できます。",
      en: "Feedback: record input and replay it as project data."
    },
    items: [
      item("new", "editors",
        "Feedbackアセットを追加。CompositionツールバーのRecordでプレビュー上のポインタを記録し、プロジェクトに保存できます。File > Load Feedback JSON...からの読み込みにも対応します。OSCアドレスの記録はアプリ版専用で、保存済みデータの参照・再生はPlayerでも使えます。",
        "New Feedback assets store pointer input captured with Record in the Composition toolbar. Save a take in the project or import one through File > Load Feedback JSON.... Recording OSC addresses is desktop-only; stored data can also be read and played back in the Player."),
      item("new", "",
        "記録したポインタを、HTML Clip（およびp5.js）への標準入力として再生できます。InspectorのFeedbackでPointerチャンネルを選ぶと、mouseやpointerのイベント、p5の `mouseX` / `mouseIsPressed` などとして届きます。",
        "A recorded pointer can drive HTML Clips and p5.js as normal input. Pick a Pointer channel in the Inspector's Feedback section and it arrives as mouse and pointer events, or as p5's `mouseX`, `mouseIsPressed` and friends."),
      item("improved", "editors",
        "Recordボタンは前回の設定ですぐ記録を始め、設定ボタンからダイアログを開き直せます。0〜30秒のカウントダウンも設定できます。",
        "Record now starts straight away with your last settings, and the settings button reopens the dialog. A 0 to 30 second countdown is available."),
      item("fixed", "editors",
        "記録中にモードが `none` のCue（マーカー）を通過しても、記録が止まらなくなりました。",
        "Crossing a Cue whose mode is `none` (a marker) no longer stops an ongoing recording.")
    ]
  },
  {
    version: "0.3.9",
    headline: {
      ja: "p5.jsを、OpenProcessingと同じグローバルモードで書けるようになりました。",
      en: "Write p5.js sketches in global mode, the way OpenProcessing does."
    },
    items: [
      item("new", "",
        "p5.jsのグローバルモードに対応。`p.` を付けずに書けます。ClipのJavaScriptに `clip.use(\"p5\")` を加え、Inspectorでp5のLibraryを選び、p5.js global modeを有効にします。`setup()` は初期化時に1回、`draw()` はTimelineのtickごとに実行されます。p5.jsは1.11.1と1.11.11に対応します。",
        "p5.js global mode: write sketches without the `p.` prefix. Add `clip.use(\"p5\")`, select the p5 Library in the Inspector and enable p5.js global mode. `setup()` runs once on initialization; `draw()` runs on each Timeline tick. p5.js 1.11.1 and 1.11.11 are supported."),
      item("new", "",
        "実験的機能としてIsolated replay (2D only)を追加。非連続シーク時にp5 Clipを先頭から再実行し、状態を積み重ねるスケッチを描き直します。同期2Dスケッチが対象で、描画回数・時間の上限があり、WEBGLやFeedbackの履歴再生には対応しません。",
        "Experimental Isolated replay (2D only) replays a p5 Clip from the start after a non-adjacent seek to redraw stateful sketches. It supports synchronous 2D sketches within draw-count and time limits; WEBGL and Feedback history replay are unsupported."),
      item("fixed", "editors",
        "静止画や動画の書き出しで、HTML Clipと動画Clipが重なるフレームがタイムアウトすることがある問題を修正しました。",
        "Fixed still and video export timing out on frames where an HTML Clip overlaps a video clip."),
      item("fixed", "editors",
        "レイヤーを並べ替えたとき、Effectのプレビューが黒くなったり止まったりする問題を修正しました。",
        "Fixed Effect previews going black or stalling after layers were rearranged.")
    ]
  },
  {
    version: "0.3.8",
    headline: {
      ja: "URLからp5.jsなどの外部ライブラリを追加できます。",
      en: "Add libraries such as p5.js from a URL."
    },
    items: [
      item("new", "app",
        "Add Library from URL... でJavaScriptライブラリを1回ダウンロードし、Scriptアセットとしてプロジェクトに保存できます。",
        "Add Library from URL... downloads a JavaScript library once and stores it in the project as a Script asset."),
      item("new", "app",
        "InspectorのExternal resources > Add resource...で、HTTPSのスクリプトやスタイルシートを登録できます。承認時に取得してハッシュを固定し、実行時にはブラウザが同じURLから読み込みます。埋め込みとは異なり、再生時にもネットワーク接続と配信元のCORS対応が必要です。登録済みリソースを使うプロジェクトは、ブラウザEditor・Playerでも再生できます。",
        "Register HTTPS scripts or stylesheets through Inspector > External resources > Add resource.... Approval fetches the file and pins its hash; at runtime, the browser loads it from the URL. Unlike embedded libraries, playback requires network access and CORS support from the server. Projects with approved resources can also play in the browser Editor and Player."),
      item("improved", "app",
        "他のサイトのページから、ローカルのMCPサーバーを呼び出せないようにしました。",
        "Web pages from other sites can no longer call the local MCP server."),
      item("fixed", "app",
        "MCPでHTML Clipを作るとき、Effect layerを避けて適切なレイヤーに作るようにしました。",
        "MCP now creates HTML Clips on a compatible layer instead of an Effect layer.")
    ]
  },
  {
    version: "0.3.7",
    headline: {
      ja: "大きなScriptを読み込めます。",
      en: "Large shared Scripts."
    },
    items: [
      item("improved", "editors",
        "Scriptアセット固有の1 MiBの読み込み上限をなくしました。大きなライブラリも取り込めますが、通常の読み込み上限は引き続き適用されます。アプリ版のMCPも大きなリクエストを受け付けます。",
        "Removed the Script-specific 1 MiB import limit so larger libraries can be imported, while general import limits still apply. The desktop app's MCP server also accepts larger requests.")
    ]
  },
  {
    version: "0.3.6",
    headline: {
      ja: "macOSの終了処理を修正しました。",
      en: "A fix for quitting on macOS."
    },
    items: [
      item("fixed", "app",
        "macOSで、Cmd+Qやメニューから終了したとき、ウィンドウが閉じてもDockに残ることがある問題を修正しました。",
        "Fixed the app sometimes staying in the Dock without a window after Cmd+Q or Quit on macOS."),
      item("improved", "app",
        "MCP経由で接続したエージェントが、HTML ClipのAPIを調べられるようになりました。",
        "An agent connected through MCP can now look up the HTML Clip API.")
    ]
  },
  {
    version: "0.3.5",
    headline: {
      ja: "Curveのツールバーを修正しました。",
      en: "A Curve toolbar fix."
    },
    items: [
      item("fixed", "editors",
        "ウィンドウ幅が最小のとき、Curveのツールバーが横にはみ出してボタンが欠ける問題を修正しました。",
        "Fixed the Curve toolbar overflowing sideways at the minimum window width and cutting off its buttons.")
    ]
  },
  {
    version: "0.3.4",
    headline: {
      ja: "イージングが大きく増えました。",
      en: "Many more easing curves."
    },
    items: [
      item("new", "",
        "Quart・Quint・Circ・Back・Elastic・Bounceに、それぞれIn / Out / InOutを追加しました。Smoothstep・Smootherstepも加わり、新しいカーブは合計20です。",
        "Added In, Out and InOut versions of Quart, Quint, Circ, Back, Elastic and Bounce, plus Smoothstep and Smootherstep: 20 new curves in all."),
      item("fixed", "app",
        "Windowsで表示倍率が125%や150%のとき、起動のたびにメインウィンドウが少しずつ大きくなる問題を修正しました。",
        "Fixed the main window growing slightly at every launch on Windows at 125% and 150% display scaling.")
    ]
  },
  {
    version: "0.3.3",
    headline: {
      ja: "一時停止中のUndoを修正しました。",
      en: "An Undo fix while paused."
    },
    items: [
      item("fixed", "editors",
        "一時停止中にUndoすると（または最後のEffect layerを削除すると）、ステージが空白のままになる問題を修正しました。",
        "Fixed the stage staying blank after an Undo, or after deleting the last Effect layer, while paused.")
    ]
  },
  {
    version: "0.3.2",
    headline: {
      ja: "コードから名前で使うアセットを、誤って削除しにくくなりました。",
      en: "Assets used by name in code are protected from removal."
    },
    items: [
      item("improved", "editors",
        "`assetImage(\"Logo\")` のようにコード中の文字列リテラルで参照されているアセットは、削除できなくなりました。名前の変更時は、古い名前を使うClipを通知します。実行時に組み立てる名前は検出対象外です。",
        "Assets referenced by a literal name in code, such as `assetImage(\"Logo\")`, can no longer be removed. Renaming warns about Clips that still use the old name. Names constructed at runtime cannot be detected."),
      item("fixed", "app",
        "Windowsで、コードエディタの選択範囲が空として扱われる問題を修正しました。ダウンロードしたAIモデルのファイルをウイルス対策ソフトなどが使用中の場合も、エラーの内容が分かりやすくなりました。",
        "Fixed code editor selections being treated as empty on Windows. Errors are also clearer when another program, such as an antivirus scanner, holds a downloaded AI model file.")
    ]
  },
  {
    version: "0.3.1",
    headline: {
      ja: "アプリ内でローカルAIモデルを実行できます。",
      en: "Run a local AI model inside the app."
    },
    items: [
      item("new", "app",
        "OllamaやLM Studioがなくても、MacroFlush内の実行エンジンでモデルを動かせます。2種類のモデルから選んでダウンロードし、アシスタントに使えます。モデル自体はアプリに同梱されません。このバージョンではmacOS（Apple Silicon）に対応します。",
        "The assistant no longer needs Ollama or LM Studio. Choose and download one of two models to run with MacroFlush's built-in engine. Model files are not bundled with the app. This version supports macOS on Apple Silicon."),
      item("improved", "app",
        "ウィンドウのサイズ・位置・最大化、パネルの大きさと配置が、次回の起動でも保たれます。",
        "Window size, position and maximized state, plus panel sizes and arrangement, are remembered between launches."),
      item("improved", "editors",
        "コードエディタの補完が、`assetImage`・`assetTexture`・`clip.getParam` / `clip.setParam`・`clip.use(\"centi3d\")` などに対応しました。",
        "Editor completion now covers `assetImage`, `assetTexture`, `clip.getParam` / `clip.setParam`, `clip.use(\"centi3d\")` and more.")
    ]
  },
  {
    version: "0.3.0",
    headline: {
      ja: "ローカルAIアシスタント（実験的）が加わりました。",
      en: "A local AI assistant (experimental)."
    },
    items: [
      item("new", "app",
        "コードエディタにAssistantペインを追加。HTML Clip APIの書き方などを質問できます。",
        "The code editor gains an Assistant pane for quick questions such as how to write something with the HTML Clip API.")
    ]
  },
  {
    version: "0.2.x",
    headline: {
      ja: "3D・Effect layer・Shaderが加わった時期のまとめです。",
      en: "A summary of the releases that brought 3D, Effect layers and Shaders."
    },
    items: [
      item("new", "editors",
        "Camera・Light・Null・Mesh・ModelをTimelineに配置し、Centi3D対応のHTML ClipをTargetに指定して3Dシーンを構成できます。Geometry・MaterialはMeshが参照する共有アセットです。CameraはOrthographic投影と別オブジェクトへのAimにも対応しました。",
        "Build 3D scenes by placing Cameras, Lights, Nulls, Meshes and Models on the Timeline and targeting a Centi3D-enabled HTML Clip. Geometry and Material are shared assets referenced by Meshes. Cameras also gained Orthographic projection and Aim at another object."),
      item("new", "editors",
        "Materialを、Basic・Lambert・Phong・Standard・Physical・Toon・Normal・Matcapの8種類から選んで編集できます。",
        "Materials can be edited as one of eight types: Basic, Lambert, Phong, Standard, Physical, Toon, Normal and Matcap."),
      item("new", "",
        "Effect layerを追加。ほかのレイヤーにGLSLのShaderをかけます。Blur、Glow / Bloom、Twist、Mirror / Kaleidoscope、Chroma Keyなど28種類のプリセットがあり、Layers Belowで下のレイヤー全体にもかけられます。",
        "Effect layers apply a GLSL Shader to other layers. There are 28 presets, including Blur, Glow / Bloom, Twist, Mirror / Kaleidoscope and Chroma Key, and Layers Below applies an effect to everything underneath."),
      item("new", "",
        "画像・動画・音声・フォントを、プロジェクトに埋め込まず、ファイルを参照して扱えます（アプリ版ではEmbedded / Copy / Link、Relink...）。Export Embedded V2... で、埋め込み済みの1ファイルに書き出せます。",
        "Image, video, audio and font assets can reference files instead of being embedded (Embedded, Copy or Link and Relink... in the app). Export Embedded V2... saves a self-contained single file."),
      item("new", "",
        "HTML Clipから、Projectの画像を `assetImage(name)` で画像として、`assetTexture(name)` でThree.jsのテクスチャとして読み込めます。",
        "HTML Clips can read a Project image with `assetImage(name)` or as a Three.js texture with `assetTexture(name)`.")
    ]
  },
  {
    version: "0.1.9",
    headline: {
      ja: "Playerで、ファイルを読み込み直さずにCompositionを切り替えられます。",
      en: "Switch compositions in the Player without reloading the file."
    },
    items: [
      item("new", "player",
        "Playerに `player.openComposition(compositionId)` を追加。V2プロジェクト内の別のCompositionへ、ファイルを読み込み直さずに切り替えられます。存在しないIDを渡すと、何も変えずにエラーになります。",
        "The Player gains `player.openComposition(compositionId)`, which switches to another composition in a V2 project without reloading the file. An unknown ID raises an error and changes nothing."),
      item("improved", "editors",
        "編集時のプロジェクト比較処理を効率化し、コード入力を含む編集操作の負荷を減らしました。",
        "Made project comparisons more efficient, reducing work during editing, including code entry.")
    ]
  },
  {
    version: "0.1.8",
    headline: {
      ja: "再利用できる共有Scriptと、補完・名前の整理。",
      en: "Reusable shared Scripts, plus better completion and naming."
    },
    items: [
      item("new", "",
        "共有Scriptアセットを追加。再利用するJavaScriptをProjectに置き、`useScript(nameOrId)` で名前またはIDから読み込めます。循環した依存も検出します。",
        "Shared Script assets keep reusable JavaScript in the Project. `useScript(nameOrId)` loads one by name or ID, and circular dependencies are detected."),
      item("new", "app",
        "MCPに `create_script`・`get_script_source`・`update_script_source` を追加しました。",
        "MCP gains `create_script`, `get_script_source` and `update_script_source`."),
      item("improved", "editors",
        "コードエディタの補完が、`audioBand` / `audioSpectrum` / `audioPeaks` / `audioSpectrogram` / `audioStem` / `audioStemPeaks` / `audioStemSpectrogram` に対応しました。",
        "Editor completion now covers `audioBand`, `audioSpectrum`, `audioPeaks`, `audioSpectrogram`, `audioStem`, `audioStemPeaks` and `audioStemSpectrogram`."),
      item("fixed", "editors",
        "`Composition N`・`HTML Clip N`・`Cue N`・`Script N.js` などの初期名で、スペースの有無がそろっていなかったのを統一しました。",
        "Made default names such as `Composition N`, `HTML Clip N`, `Cue N` and `Script N.js` consistent in spacing, in the UI and in MCP.")
    ]
  },
  {
    version: "0.1.7",
    headline: {
      ja: "ステム分離が加わり、AIクライアントから音声を扱えるようになりました。",
      en: "Stem separation arrives, and AI clients can work with audio."
    },
    items: [
      item("new", "app",
        "ステム分離（HT-Demucs）を追加。音声を vocals / drums / bass / other に分けます。Projectパネルの **Separate & Attach Stems...** と **Select Stem Model...** から使います。モデルは同梱せず、別途選びます。",
        "Stem separation (HT-Demucs) splits audio into vocals, drums, bass and other. Use **Separate & Attach Stems...** and **Select Stem Model...** in the Project panel. The model is not bundled; you choose it yourself."),
      item("new", "",
        "分離済みWAVは、ブラウザEditor・アプリ版の **Attach Stems...** で追加できます。結果はClipから `audioStem()` / `audioStemPeaks()` / `audioStemSpectrogram()` で読め、Playerでも解析できます。",
        "Attach separated WAVs with **Attach Stems...** in the browser Editor or desktop app. Clips read the results with `audioStem()`, `audioStemPeaks()` and `audioStemSpectrogram()`; analysis also works in the Player."),
      item("new", "app",
        "音声用のMCPツールを7つ追加。AIクライアントが、任意のフレームの帯域・スペクトルの値を調べ、ステム分離の実行・管理とモデルパスの設定を、ファイル選択なしで行えます。",
        "Seven audio MCP tools let an AI client read band and spectrum values at any frame, run and manage stem separation, and set the model path without a file picker."),
      item("fixed", "",
        "Clipが自分の変形（`clip.scale = ...` など）をコードから設定していると、コードエディタのカーソルが先頭に戻ったり、入力が消えたりすることがある問題を修正しました。",
        "Fixed the code editor cursor jumping back, or typing being lost, when a Clip set its own transform from code (for example `clip.scale = ...`).")
    ]
  },
  {
    version: "0.1.6",
    headline: {
      ja: "音声解析とOSCが加わりました。",
      en: "Audio analysis and OSC."
    },
    items: [
      item("new", "app",
        "UDPのOSCコントローラを追加（既定はオフ）。受信したアドレスでClipやCompositionのパラメータを変え、Cueへジャンプできます。送信は、Clipが `sendOsc(address, ...values)` を呼んで行います。",
        "A UDP OSC controller (off by default). Incoming addresses change Clip and Composition parameters and jump to Cues. Sending is explicit: a Clip calls `sendOsc(address, ...values)`."),
      item("new", "",
        "HTML Clipの音声解析を追加。`audioBand()`（低・中・高域のエネルギー）、`audioSpectrum()`（32バンドのFFT）、`audioPeaks()` / `audioSpectrogram()`（生データ）が使えます。Editor・Player・入れ子のCompositionで同じように動きます。",
        "Audio analysis for HTML Clips: `audioBand()` (low, mid and high energy), `audioSpectrum()` (32-bin FFT), and `audioPeaks()` / `audioSpectrogram()` for raw data. It works the same in the Editor, the Player and nested compositions."),
      item("new", "editors",
        "Timelineの音声Clipに、切り替え可能な波形表示を追加しました。",
        "Audio Clips on the Timeline can show a toggleable waveform."),
      item("fixed", "editors",
        "アプリを再起動した後、Fitズームのプレビューが領域からはみ出す問題を修正しました。",
        "Fixed the Fit-zoom preview overflowing its area after a full restart.")
    ]
  },
  {
    version: "0.1.5",
    headline: {
      ja: "Export Mediaが加わり、動画や連番を書き出せるようになりました。",
      en: "Export Media arrives: write out video and image sequences."
    },
    items: [
      item("new", "app",
        "Export Mediaを追加。PNG連番、H.264のMP4（CRFまたはビットレート）、Apple ProResのMOV（4444 / 4444 XQは透明を保持）に対応します。",
        "Export Media: PNG sequence, H.264 MP4 (CRF or bitrate) and Apple ProRes MOV (4444 and 4444 XQ keep transparency)."),
      item("new", "app",
        "範囲・解像度・縦横比を指定でき、表示中のTimelineの音声Clipをミックスして書き出せます。HTML・画像・動画を、1フレームずつ原寸で描画し、最後に出力サイズへ縮小します。",
        "Set the frame range, resolution and aspect ratio, and mix the visible Timeline audio Clips. HTML, image and video are rendered one frame at a time at native resolution and resized only at the end."),
      item("new", "app",
        "入れ子のCompositionも書き出せます。フレームごとに乱数のシードを固定し、書き出し結果の再現性を改善しました。",
        "Nested compositions can also be exported. Per-frame randomness is seeded to improve export reproducibility.")
    ]
  },
  {
    version: "0.1.4",
    headline: {
      ja: "3D（centi3d）で使うThree.jsを新しくしました。",
      en: "The Three.js behind 3D (centi3d) was updated."
    },
    items: [
      item("improved", "",
        "`clip.use(\"centi3d\")` が使うThree.jsをr186に更新しました。既存のスクリプトが以前と同じ見た目になるよう、互換の設定を入れています。",
        "The Three.js used by `clip.use(\"centi3d\")` is now r186, with compatibility settings so existing scripts look the same as before.")
    ]
  },
  {
    version: "0.1.3",
    headline: {
      ja: "実験的なGPU出力の修正です。",
      en: "A fix for the experimental GPU output."
    },
    items: [
      item("fixed", "app",
        "実験的なネイティブのProgram Output（GPU）で、画像・動画のClipが合成されない問題を修正しました。",
        "Fixed image and video Clips not being composited in the experimental native Program Output (GPU).")
    ]
  },
  {
    version: "0.1.2",
    headline: {
      ja: "MCPの状態表示が見やすくなりました。",
      en: "The MCP status is easier to read."
    },
    items: [
      item("improved", "app",
        "MCPサーバーが動いているとき、トップバーのステータスにエンドポイントのURLを表示するようにしました。",
        "The topbar status pill now shows the MCP endpoint URL once the server is running.")
    ]
  },
  {
    version: "0.1.1",
    headline: {
      ja: "MCPサーバーとGPUのAdjustment Clipが加わりました。",
      en: "The MCP server and a GPU adjustment Clip."
    },
    items: [
      item("new", "app",
        "MCPサーバー（任意で有効化）を追加。AIクライアントからClipの作成やTimelineの操作ができます。のちのMCPツール群の出発点です。",
        "An opt-in MCP server lets an AI client create Clips and control the Timeline. It is the seed of the later MCP tools."),
      item("new", "app",
        "WGSL Clipを追加。独自のパラメータを持つ、GPUで動くAdjustment Layerです。実験的なProgram Outputで合成します。",
        "The WGSL Clip: a native GPU adjustment layer with its own parameters, composited through the experimental Program Output.")
    ]
  },
  {
    version: "0.1.0",
    headline: {
      ja: "実験的なGPU出力（Program Output）が加わりました。",
      en: "An experimental GPU Program Output."
    },
    items: [
      item("new", "app",
        "実験的なwgpuベースのProgram Outputを追加。既定のCPUによる表示に代わるもので、macOS（Metal）で動き、Windows（D3D11 / D3D12）では明示的に有効にしたときだけ使えます。既定の経路にはなっていません。",
        "An experimental wgpu-based Program Output as an alternative to the default CPU display. It runs on macOS (Metal) and, only when explicitly enabled, on Windows (D3D11 / D3D12). It is not the default path.")
    ]
  },
  {
    version: "0.0.x",
    headline: {
      ja: "HTML ClipとTimelineという、MacroFlushの出発点です。",
      en: "Where MacroFlush started: HTML Clips on a Timeline."
    },
    items: [
      item("new", "",
        "最初のバージョン（0.0.1）。マスターTimelineの上でHTML Clipをつくる環境と、再生用のPlayerを備えていました。",
        "The first version (0.0.1): authoring HTML Clips on a master Timeline, with a standalone Player for playback."),
      item("new", "",
        "`add()` で、Clipのコードから表示オブジェクトを実行時に追加できます（2Dのランタイムシーングラフ）。描画順・親子関係・アルファマスク・描画のキャッシュに対応します。",
        "`add()` lets a Clip's code create display objects at runtime (the 2D runtime scene graph), with draw order, parent and child hierarchy, alpha masks and render caching."),
      item("new", "",
        "CompositionにCueを追加。`cue(name, frame, options)` で、停止・ループ・通過のTimelineの区間をつくります。",
        "Compositions gain Cues: `cue(name, frame, options)` defines stop, loop and pass-through ranges on the Timeline."),
      item("new", "player",
        "Playerの公開APIに `player.go()`・`player.set()`・`player.emit()` を追加。ホストのページから、Cueへのジャンプ、アドレス指定によるパラメータの設定、独自イベントの送信ができます。",
        "The Player's public API gains `player.go()`, `player.set()` and `player.emit()`, so a host page can jump to a Cue, set a parameter by address and emit a custom event."),
      item("new", "",
        "`clip.use(\"centi3d\")` でThree.jsの `scene` / `camera` / `renderer` をClipで使えます。",
        "`clip.use(\"centi3d\")` hands a Clip a Three.js `scene`, `camera` and `renderer`."),
      item("new", "",
        "JSONのDataアセットを追加。Clipのコードから `data(name)` で読み込めます。",
        "JSON Data assets let a Clip read structured data with `data(name)`."),
      item("new", "",
        "Clipのコードから書き換えられるパラメータ、Timelineとカーブのズーム、Cueへの移動を追加しました。",
        "Parameters that Clip code can write, Timeline and Curve zoom, and Cue navigation."),
      item("new", "",
        "Clipのインスタンスを追加。1つのClipの描画結果を、描き直さずに複数の配置で再利用できます。",
        "Clip instancing reuses one Clip's rendered output across many placements without rendering it again."),
      item("new", "app",
        "枠のないOutput Windowを追加。原寸で表示でき、フルスクリーンに切り替えられます。Editorのプレビューのズームやパネルの状態とは独立しています。",
        "A frameless Output Window shows the composition at native resolution and toggles fullscreen, independent of the Editor's preview zoom and panels.")
    ]
  }
];

export const intro = {
  ja: "MacroFlushの各バージョンでの主な変更をまとめています。バッヂは、その変更の対象環境（アプリ版・ブラウザEditor・Player）を示します。",
  en: "Highlights from each MacroFlush version. Badges identify the environment affected by a change: the desktop app, browser Editor or Player."
};

export const outro = {
  ja: "0.0.1が最初のバージョンです。",
  en: "0.0.1 was the first version."
};
