const image = (file, alt, caption) => ({ src: `/assets/tutorials/osc-sequencer/${file}.jpg`, alt, caption, width: 1711, height: 921 });

const paramsCode = `clip.use("centi");

clip.defineParams({
  val0: { type: "number", default: 0, interpolable: true },
  val1: { type: "number", default: 0, interpolable: false },
  color: { type: "color", default: "#ffffff", interpolable: true },
  pos: { type: "vec2", interpolable: true }
});`;

const sendCode = `setup(() => {
  size(1920, 1080);
  bg(33);
});

onFrame(() => {
  clear();
  bg(clip.color);
  col(255);
  let y = 0;
  for (const name of clip.paramNames) {
    if (clip.isNew[name]) sendOsc("/" + name, clip[name]);
    bmTxt(name + ": " + clip[name], 0, y);
    y += 40;
  }
});`;

const cueCode = `cue("Cue1", 0, { mode: "none" });
cue("Cue2", 180, { mode: "loop" });
cue("Cue3", 240, { mode: "stop" });`;

const controlCode = `/transport/play
/transport/pause
/transport/stop
/transport/frame 120
/transport/step 1
/transport/step -1
/composition/open Composition2
/cue/Cue2
/layers/Layer1/visible 0`;

export const oscSequencerLesson = {
  id: "osc-sequencer", number: "06", level: "OSC / Max", title: "OSCシーケンサーをつくる", summary: "Timelineのキーフレームで値を作り、OSCでMaxへ送る。Maxから再生やCueも操作する。", environments: ["app"], referenceUrl: "/reference/#app-osc-control", referenceLabel: "OSC Reference",
  downloads: [
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.json", label: "完成プロジェクトJSON" },
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.maxpat", label: "Maxパッチ（.maxpat）" }
  ],
  steps: [
    { title: "MacroFlushとMaxをつなぐ", text: "このチュートリアルはアプリ版（0.3.19以降）で行います。UDP OSCはブラウザ版EditorとPlayerでは使えません。MacroFlushのTimelineを「シーケンサー」にして、キーフレームで作った値をOSCでMaxへ送り、逆にMaxからMacroFlushの再生・Cue・Composition・レイヤー表示を操作します。コードエディタのOSCタブで、受信portを9000、送信先を127.0.0.1:9001（どちらも既定値）にして起動してください。Max側は「udpsend localhost 9000」でMacroFlushへ送り、「udpreceive 9001」でMacroFlushからの値を受けます。OSCを起動していない間、sendOsc()は何も送りません。上の完成プロジェクトJSONとMaxパッチをダウンロードすると、完成した状態を確認できます。" },
    { title: "送る値をパラメータにする", text: "HTML ClipのJavaScriptで、OSCへ送りたい値をclip.defineParams()で宣言します。val0は補間する数値、val1は補間しない数値（直前のキーの値を保つ階段状の動き）、colorは色、posは2次元のベクトルです。宣言するとInspectorのCustomにも並び、キーフレームで動かせます。", code: paramsCode },
    { title: "変化した値だけを送る", text: "onFrame()の中で、clip.paramNamesを使って宣言したパラメータを順に調べます。clip.paramNamesはカスタムパラメータのキーの配列で、position・scale・opacityなどの組み込みの値は含まれません。clip.isNew[name]は、その値が前回処理したtickから変わったときだけtrueになる読み取り専用の真偽値です。変化したときだけsendOsc(\"/val0\", 値)のように「/パラメータ名」へ送るので、値が止まっている間は通信しません。Clipの先頭（INフレーム）では全パラメータがtrueになるため、再生を始めると現在値がまとめて届きます。画面にはbmTxt()で名前と値を描いて、送っている内容を確認できます。数値は整数ならint、小数ならfloat、colorは「#rrggbb」の文字列、vec2は「x,y」の1つの文字列として送られます。", code: sendCode },
    { title: "キーフレームでシーケンスを書く", text: "Playheadを動かし、InspectorのCustomにあるKeyでval0・val1・color・posへキーフレームを付けます。完成例ではval0を0〜359で動かし（最初のキーはBezier）、val1はStepの細かいキーで階段状に、colorは31〜322フレームに6つ、posは0と359に付けています。画像は120フレームでの補間後の値で、ClipのプレビューとInspectorの値が一致しています。キーが付いたパラメータは、再生・シーク・ステップのどの場合でも値が変わるたびにOSCへ送られます。Cuesタブには次の3つのCueを書いておきます。Cue2はloop、Cue3はstopです。", code: cueCode, image: image("01-keyframes", "MainCompositionの120フレームで、Clipのプレビューにval0・val1・color・posの値、InspectorのCustomに補間後の値、Timelineにキーフレームが表示された画面", "120フレーム。val0 約3.60・val1 39.13・色 #cc7da8 が、プレビューとInspectorで同じ値になっています。") },
    { title: "もうひとつのシーケンスを用意する", text: "Composition2を作り、同じHTML Clipを配置して、別のキーフレームを付けます。完成例ではval0を30・142・359フレームで0・1・5、val1を113・167・215フレームのStepで0・1・3に、colorは5つのキーで動かしています。Composition名は「/composition/open」で指定するため、完全に一致して重複しない名前にしてください。MainCompositionとComposition2をMaxから切り替えると、曲のセクションのようにシーケンスを使い分けられます。" },
    { title: "Maxで値を受け取る", text: "Maxパッチでは「udpreceive 9001」の出力を「route /val0 /val1 /color /pos」に渡します。val0とval1は数値なのでflonumに表示してbuttonを光らせます。colorは「#rrggbb」の文字列で届くため、サブパッチp convertで「#」を「0x」に置き換え、fromsymbolで数値へ戻し、R・G・Bに分けてパネルのbgcolorへ渡します。posは「x,y」の1つのシンボルなので、fromsymbolで数値のリストへ戻して表示します。route側のアドレスは、Clipの「/パラメータ名」とそろえます。" },
    { title: "MaxからMacroFlushを操作する", text: "逆向きは、Maxのmessageボックスから「udpsend localhost 9000」へ送ります。画像のOSCタブに、受信できるアドレスと引数が並びます。「/transport/play」「/transport/pause」「/transport/stop」は再生・一時停止・停止（フレーム0へ）、「/transport/frame n」は0以上の整数でフレームへ移動、「/transport/step n」はnフレーム進み、省略時は+1で負の数で戻ります。「/composition/open 名前」でComposition、「/cue/Cue名」でCueへ移り、「/layers/Layer1/visible」は0/1または真偽値でレイヤーの表示を切り替えます。Compositionとレイヤーの名前は、アクティブなCompositionで完全に一致して重複しないものだけが対象です。不正な引数や存在しない名前はステータスに「OSC: …」のエラーとして出て、オフライン書き出し中は無視されます。別のCompositionへ切り替えるときは、未確定のFeedback takeや未適用のFeedback編集があると拒否されます。", code: controlCode, codeLabel: "OSC (Max messages)", image: image("02-osc-tab", "OSCタブを広げ、/transport、/composition/open、/layers/Layer1/visible、/cue、各Clipパラメータのアドレスと引数を一覧した画面", "OSCタブのアドレス一覧。レイヤー名とCue名はこのプロジェクトのもので、Clipの各パラメータは「/レイヤー/Clip/パラメータ」でも操作できます。") },
    { title: "動かして確かめる", text: "MacroFlushでOSCを起動し、Maxでパッチを開いてから、「/transport/play」を送ります。val0・val1・color・posの値が変化するたびにMaxの表示が動き、色のパネルが変わります。「/transport/pause」のあとに「/transport/step 1」や「/transport/step -1」で1フレームずつ進めると、そのフレームで変わった値だけが届きます。「/transport/frame 120」のようにシークしても、変化した値が送られます。「/cue/Cue2」「/composition/open Composition2」で区間やシーケンスを切り替えて、動きを確かめてください。届かないときは、OSCが起動しているか、ポート（受信9000・送信9001）とMaxの宛先が合っているか、Maxが「udpreceive 9001」を開いているかを確認します。" }
  ]
};

export const oscSequencerLessonEnglish = {
  title: "Build an OSC sequencer", summary: "Create values with Timeline keyframes and send them to Max over OSC, then control playback and Cues from Max.",
  referenceLabel: "OSC Reference",
  downloads: [
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.json", label: "Completed project JSON" },
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.maxpat", label: "Max patch (.maxpat)" }
  ],
  steps: [
    { title: "Connect MacroFlush and Max", text: "Use the app (0.3.19 or later) for this tutorial. UDP OSC is unavailable in the browser Editor and the Player. The MacroFlush Timeline becomes your sequencer: keyframes create values that are sent to Max over OSC, and Max in turn controls MacroFlush playback, Cues, Compositions and layer visibility. In the code editor's OSC tab, keep the receive port at 9000 and the destination at 127.0.0.1:9001 (both defaults), then start OSC. In Max, \"udpsend localhost 9000\" sends to MacroFlush and \"udpreceive 9001\" receives values from MacroFlush. While OSC is stopped, sendOsc() sends nothing. Download the completed project JSON and the Max patch above to check the finished state." },
    { title: "Make the values to send parameters", text: "In the HTML Clip's JavaScript, declare the values to send with clip.defineParams(). val0 is an interpolated number, val1 is a number that is not interpolated (it holds the previous key's value, a stepped motion), color is a color and pos is a 2D vector. Declared parameters also appear under Custom in the Inspector, where keyframes can drive them.", code: paramsCode },
    { title: "Send only values that changed", text: "In onFrame(), loop over the declared parameters with clip.paramNames. clip.paramNames is an array of custom parameter keys and excludes built-in values such as position, scale and opacity. clip.isNew[name] is a read-only boolean that is true only when the value differs from the previous processed tick. The Clip sends a changed value to \"/parameter-name\", for example sendOsc(\"/val0\", value), so nothing is sent while a value is still. At the Clip's start (the IN frame) every parameter is true, so starting playback sends all current values together. bmTxt() draws each name and value so you can see what is being sent. Numbers go out as int when whole and float otherwise, color as a \"#rrggbb\" string, and vec2 as one \"x,y\" string.", code: sendCode },
    { title: "Write the sequence with keyframes", text: "Move the playhead and use Key under Custom in the Inspector to add keyframes to val0, val1, color and pos. The completed example animates val0 over 0–359 (the first key uses Bezier), val1 with fine Step keys for a stepped motion, color with six keys at frames 31–322, and pos with keys at 0 and 359. The image shows the interpolated values at frame 120, identical in the Clip preview and the Inspector. Any keyed parameter is sent over OSC whenever its value changes, whether you play, seek or step. In the Cues tab, write these three Cues. Cue2 is loop and Cue3 is stop.", code: cueCode, image: image("01-keyframes", "MainComposition at frame 120, with val0, val1, color and pos values in the Clip preview, interpolated values under Custom in the Inspector and keyframes on the Timeline", "Frame 120. val0 ≈ 3.60, val1 39.13 and color #cc7da8 are the same in the preview and the Inspector.") },
    { title: "Prepare a second sequence", text: "Create Composition2, place the same HTML Clip and add different keyframes. The completed example sets val0 to 0, 1 and 5 at frames 30, 142 and 359, val1 to 0, 1 and 3 with Step keys at 113, 167 and 215, and drives color with five keys. \"/composition/open\" takes the Composition name, so use an exact name that is not duplicated. Switching between MainComposition and Composition2 from Max lets you use sequences like song sections." },
    { title: "Receive the values in Max", text: "In the Max patch, send the output of \"udpreceive 9001\" to \"route /val0 /val1 /color /pos\". val0 and val1 are numbers, so show them in a flonum and flash a button. color arrives as a \"#rrggbb\" string, so the p convert subpatch replaces \"#\" with \"0x\", turns it back into a number with fromsymbol, splits R, G and B and sends them to the panel's bgcolor. pos is a single \"x,y\" symbol, so fromsymbol turns it back into a list of numbers for display. Match the route addresses to the Clip's \"/parameter-name\" addresses." },
    { title: "Control MacroFlush from Max", text: "In the other direction, send message boxes from Max to \"udpsend localhost 9000\". The OSC tab in the image lists the addresses and arguments MacroFlush accepts. \"/transport/play\", \"/transport/pause\" and \"/transport/stop\" play, pause and stop (back to frame 0). \"/transport/frame n\" jumps to a non-negative integer frame, and \"/transport/step n\" moves n frames (default +1, negative goes back). \"/composition/open name\" opens a Composition, \"/cue/CueName\" jumps to a Cue, and \"/layers/Layer1/visible\" shows or hides a layer with 0/1 or a boolean. Composition and layer names must match exactly one item in the active Composition. Malformed arguments and unknown names appear in the status as \"OSC: ...\" errors, and all of these are ignored during offline export. Switching to another Composition is refused while there is an unresolved Feedback take or unapplied Feedback edits.", code: controlCode, codeLabel: "OSC (Max messages)", image: image("02-osc-tab", "The expanded OSC tab listing /transport, /composition/open, /layers/Layer1/visible, /cue and each Clip parameter address with its arguments", "The OSC tab's address list. The layer and Cue names belong to this project, and each Clip parameter can also be controlled at \"/layer/clip/parameter\".") },
    { title: "Run it and check", text: "Start OSC in MacroFlush, open the patch in Max, then send \"/transport/play\". Max's displays move and the color panel changes whenever val0, val1, color or pos changes. After \"/transport/pause\", step frame by frame with \"/transport/step 1\" or \"/transport/step -1\" and only the values that changed on that frame arrive. Seeking with something like \"/transport/frame 120\" also sends the changed values. Switch sections and sequences with \"/cue/Cue2\" and \"/composition/open Composition2\" to see the motion. If nothing arrives, check that OSC is started, that the ports (receive 9000, send 9001) match Max's destination and that Max has \"udpreceive 9001\" open." }
  ]
};
