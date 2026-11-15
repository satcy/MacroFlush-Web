const image = (file, alt, caption) => ({ src: `/assets/tutorials/osc-sequencer/${file}.jpg`, alt, caption, width: file === "01-keyframes" ? 3342 : 1711, height: file === "01-keyframes" ? 2554 : 921 });

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
  const compositionName = getCompositionName();
  let y = 0;
  for (const name of clip.paramNames) {
    if (clip.isNew[name]) {
      sendOsc("/" + compositionName + "/" + name, clip[name]);
    }
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
    { title: "MacroFlushとMaxをつなぐ", text: "このチュートリアルはgetCompositionName()に対応したアプリ版（0.3.19の対応ビルド以降）で行います。UDP OSCはブラウザ版EditorとPlayerでは使えません。MacroFlushのTimelineを「シーケンサー」にして、キーフレームで作った値をOSCでMaxへ送り、逆にMaxからMacroFlushの再生・Cue・Composition・レイヤー表示を操作します。コードエディタのOSCタブで、受信portを9000、送信先を127.0.0.1:9001（どちらも既定値）にして起動してください。Max側は「udpsend localhost 9000」でMacroFlushへ送り、「udpreceive 9001」でMacroFlushからの値を受けます。OSCを起動していない間、sendOsc()は何も送りません。上の更新版JSONとMaxパッチは組み合わせて使ってください。送信先は「/Composition名/パラメータ名」で、MaxはCompositionごとに受信先を分けます。" },
    { title: "送る値をパラメータにする", text: "HTML ClipのJavaScriptで、OSCへ送りたい値をclip.defineParams()で宣言します。val0は補間する数値、val1は補間しない数値（直前のキーの値を保つ階段状の動き）、colorは色、posは2次元のベクトルです。宣言するとInspectorのCustomにも並び、キーフレームで動かせます。", code: paramsCode },
    {title: "Clipの配置先をgetCompositionName()で読む",text: "getCompositionName()は、実行中のClipを直接含むCompositionの現在の名前を文字列で返します。この教材ではMainCompositionまたはComposition2です。OSC専用でもCenti専用でもなく、ブラウザEditor・アプリ版・PlayerのClipで使えるAPIです。リネームは次のtickから反映されるため、更新版ではonFrame()の中で呼びます。参照された子Composition内のClipなら外側ではなく子の名前、add()の実行時の子なら親ClipのCompositionの名前です。情報がない場合は空文字になります。同名のCompositionを区別したい場合は安定したIDを返すgetCompositionId()を使えますが、このMaxパッチは名前で振り分ける設計です。APIの詳細は<a href=\"/reference/#composition-identity\">Composition identity Reference ↗</a>を参照してください。",table: {headers: ["配置先","val0の送信アドレス","Maxの出口"],rows: [["MainComposition","/MainComposition/val0","第1出口"],["Composition2","/Composition2/val0","第2出口"]]}},
    { title: "Composition名を付け、変化した値だけを送る", text: "onFrame()の中でgetCompositionName()を読み、clip.paramNamesでカスタムパラメータを列挙します。送信先を「/」+ Composition名 +「/」+ パラメータ名として組み立てるので、MainCompositionのval0は「/MainComposition/val0」、Composition2のval0は「/Composition2/val0」になります。更新JSONはsendOsc()の中で直接getCompositionName()を呼び、下の掲載例は読みやすく変数へ分けています。clip.paramNamesにはposition・scale・opacityなどの組み込み値は含まれません。clip.isNew[name]がtrueの値だけを送り、最初のtickとClipのINフレームでは全パラメータがtrueになります。同じ値の再tickは送らず、再生・シーク・ステップでも変化した値を送ります。bmTxt()は名前と値の描画用です。数値は整数ならint、小数ならfloat、colorは「#rrggbb」、vec2は「x,y」の1つの文字列として送られます。", code: sendCode },
    { title: "キーフレームでシーケンスを書く", text: "Playheadを動かし、InspectorのCustomにあるKeyでval0・val1・color・posへキーフレームを付けます。更新版のMainCompositionはval0を0〜359で動かし（最初のキーはBezier）、val1には38・89・90・138・187・359フレームの6つのStepキーがあります。colorは31〜322フレームに6つ、posは0と359の2つです。画像は更新版を120フレームで開いたものです。キーが付いたパラメータは、再生・シーク・ステップで値が変わるたびにOSCへ送られます。Cuesタブには次の3つのCueを書きます。Cue2はloop、Cue3はstopです。", code: cueCode, image: image("01-keyframes", "MainCompositionの120フレームで、Clipのプレビューにval0・val1・color・posの値、InspectorのCustomに補間後の値、Timelineにキーフレームが表示された画面", "更新版の120フレーム。val1は90フレームのキーを保持し、8.1328125になります。") },
    { title: "もうひとつのシーケンスを用意する", text: "Composition2へ同じHTML Clipを配置し、別のキーを付けます。更新版はval0を30・142・359フレームで0・1・5、val1を113・167・215フレームで0・1・3のStepにし、colorは5つ、posは多数のキーで動かしています。同じClipコードでもgetCompositionName()が配置先の名前を返すため、送信先は自動的に「/Composition2/…」へ変わります。これは名前をコードで組み立てる教材の設計で、sendOsc()が自動で接頭辞を付ける機能ではありません。「/composition/open」は名前の完全一致で切り替えます。リネームした場合はMaxの「route MainComposition Composition2」と切り替え用messageも合わせて変更してください。このパッチは「/」で分割するので、Composition名とパラメータ名には「/」を入れないでください。" },
    { title: "MaxでCompositionごとに振り分ける", text: "更新パッチは「udpreceive 9001」から「p osc_split_MainComposition_Composition2」へ渡します。サブパッチは「zl.slice 1」でアドレスと値を分け、「string.toarray」でアドレスを「/」ごとに分割します。「array.at 1」がComposition名、「array.at 2」がパラメータ名で、「route MainComposition Composition2」が「gate 2 1」の出力先を選びます。MainCompositionは第1出口、Composition2は第2出口で、未登録の名前はgateを0にして通しません。パラメータ名は「sprintf /%s」で「/val0」などへ戻し、「zl.join」で元の値と結びます。その後、各出口の「route /val0 /val1 /color /pos」でパラメータごとに処理します。val0・val1はflonumへ、colorはp convertで「#」→「0x」→数値→R/G/Bへ変換してbgcolorへ渡し、posはfromsymbolで「x,y」を数値リストへ戻します。Compositionが切り替わっても、送られていない側の表示は直前の受信値を保持します。" },
    { title: "MaxからMacroFlushを操作する", text: "逆向きは、Maxのmessageボックスから「udpsend localhost 9000」へ送ります。画像のOSCタブに、受信できるアドレスと引数が並びます。「/transport/play」「/transport/pause」「/transport/stop」は再生・一時停止・停止（フレーム0へ）、「/transport/frame n」は0以上の整数でフレームへ移動、「/transport/step n」はnフレーム進み、省略時は+1で負の数で戻ります。「/composition/open 名前」でComposition、「/cue/Cue名」でCueへ移り、「/layers/Layer1/visible」は0/1または真偽値でレイヤーの表示を切り替えます。Compositionとレイヤーの名前は、アクティブなCompositionで完全に一致して重複しないものだけが対象です。不正な引数や存在しない名前はステータスに「OSC: …」のエラーとして出て、オフライン書き出し中は無視されます。別のCompositionへ切り替えるときは、未確定のFeedback takeや未適用のFeedback編集があると拒否されます。", code: controlCode, codeLabel: "OSC (Max messages)", image: image("02-osc-tab", "OSCタブを広げ、/transport、/composition/open、/layers/Layer1/visible、/cue、各Clipパラメータのアドレスと引数を一覧した画面", "OSCタブのアドレス一覧。レイヤー名とCue名はこのプロジェクトのもので、Clipの各パラメータは「/レイヤー/Clip/パラメータ」でも操作できます。") },
    { title: "動かして確かめる", text: "MacroFlushでOSCを起動し、Maxで更新パッチを開いて「/transport/play」を送ります。MainCompositionでは第1出口につながる表示が動きます。「/transport/pause」のあと「/transport/step 1」「/transport/step -1」や「/transport/frame 120」で、変化したパラメータが届くことを確認します。「/composition/open Composition2」を送ると送信先が「/Composition2/…」へ変わり、第2出口の表示が更新されます。「/composition/open MainComposition」で戻り、「/cue/Cue2」で区間も切り替えます。受信できない場合はOSCの起動、受信9000・送信9001、Maxの宛先を確認し、次にサブパッチ内のComposition名の大文字・小文字と綴りを確認します。旧パッチのrouteへ直接つなぐと、接頭辞付きのアドレスは一致しません。getCompositionName is not definedなら、対応するアプリ版へ更新してください。" }
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
    { title: "Connect MacroFlush and Max", text: "Use an app build supporting getCompositionName() (a supporting 0.3.19 build or later) for this tutorial. UDP OSC is unavailable in the browser Editor and the Player. The MacroFlush Timeline becomes your sequencer: keyframes create values that are sent to Max over OSC, and Max in turn controls MacroFlush playback, Cues, Compositions and layer visibility. In the code editor's OSC tab, keep the receive port at 9000 and the destination at 127.0.0.1:9001 (both defaults), then start OSC. In Max, \"udpsend localhost 9000\" sends to MacroFlush and \"udpreceive 9001\" receives values from MacroFlush. While OSC is stopped, sendOsc() sends nothing. Use the updated JSON and Max patch together. Outgoing addresses are now /CompositionName/parameterName, and Max separates the received values by Composition." },
    { title: "Make the values to send parameters", text: "In the HTML Clip's JavaScript, declare the values to send with clip.defineParams(). val0 is an interpolated number, val1 is a number that is not interpolated (it holds the previous key's value, a stepped motion), color is a color and pos is a 2D vector. Declared parameters also appear under Custom in the Inspector, where keyframes can drive them.", code: paramsCode },
    {title: "Read the containing Composition with getCompositionName()",text: "getCompositionName() returns the current name of the Composition directly containing the executing Clip as a string: MainComposition or Composition2 here. It is a Clip API available in the browser Editor, app and Player, independent of OSC or Centi. Renames appear from the next tick, which is why this study calls it inside onFrame(). In a referenced child Composition, it returns the inner name rather than the outer one; a runtime add() child gets its parent Clip's Composition identity. Missing context returns an empty string. getCompositionId() returns a stable ID to distinguish same-named Compositions, but this Max patch routes by name. See the <a href=\"/reference/#composition-identity\">Composition identity Reference ↗</a>.",table: {headers: ["Containing Composition","Outgoing val0 address","Max outlet"],rows: [["MainComposition","/MainComposition/val0","First"],["Composition2","/Composition2/val0","Second"]]}},
    { title: "Prefix changed values with the Composition name", text: "Read getCompositionName() inside onFrame() and enumerate custom parameters with clip.paramNames. Build each outgoing address as \"/\" + Composition name + \"/\" + parameter name: val0 becomes /MainComposition/val0 or /Composition2/val0. The updated JSON calls getCompositionName() directly inside sendOsc(); this equivalent listing uses a variable for readability. Built-in values such as position, scale and opacity are excluded from clip.paramNames. Send only when clip.isNew[name] is true. All custom parameters are true on the first tick and at the Clip IN frame; an unchanged repeated tick sends nothing. Playback, seeking and stepping send changed values. bmTxt() only draws names and values. Whole numbers are sent as int, other numbers as float, color as a \"#rrggbb\" string and vec2 as one \"x,y\" string.", code: sendCode },
    { title: "Write the sequence with keyframes", text: "Move the playhead and use Key under Custom in the Inspector to key val0, val1, color and pos. The updated MainComposition animates val0 over frames 0–359 (its first key uses Bezier). val1 now has six Step keys at 38, 89, 90, 138, 187 and 359; color has six keys at 31–322, and pos has two at 0 and 359. The image shows the updated project at frame 120. Playback, seeking and stepping send keyed parameters when their values change. Write these three Cues in the Cues tab: Cue2 uses loop and Cue3 uses stop.", code: cueCode, image: image("01-keyframes", "MainComposition at frame 120, with val0, val1, color and pos values in the Clip preview, interpolated values under Custom in the Inspector and keyframes on the Timeline", "Updated project at frame 120. val1 holds its frame-90 key value, 8.1328125.") },
    { title: "Prepare a second sequence", text: "Place the same HTML Clip in Composition2 and add different keys. The updated example sets val0 to 0, 1 and 5 at frames 30, 142 and 359, val1 to 0, 1 and 3 with Step keys at 113, 167 and 215, color with five keys, and pos with many keys. With the same Clip code, getCompositionName() returns its containing Composition name, so outgoing addresses become /Composition2/…. This is an address convention built by the tutorial code; sendOsc() does not add a prefix automatically. /composition/open requires an exact Composition name. After a rename, also update Max's \"route MainComposition Composition2\" and switching message boxes. This patch splits on \"/\", so do not use \"/\" in Composition or parameter names." },
    { title: "Route each Composition separately in Max", text: "The updated patch connects udpreceive 9001 to \"p osc_split_MainComposition_Composition2\". Inside, zl.slice 1 separates the address from its values and string.toarray splits the address on \"/\". array.at 1 reads the Composition name and array.at 2 the parameter name. \"route MainComposition Composition2\" selects gate 2 1: MainComposition uses the first outlet, Composition2 the second, and unrecognized names select 0 to block output. sprintf /%s restores an address such as /val0; zl.join appends the original values. Each outlet then goes through \"route /val0 /val1 /color /pos\". val0 and val1 feed number displays; p convert changes color from \"#\" to \"0x\", then a number, then RGB for bgcolor; fromsymbol turns the \"x,y\" pos symbol into a numeric list. The inactive Composition's displays retain their last received values." },
    { title: "Control MacroFlush from Max", text: "In the other direction, send message boxes from Max to \"udpsend localhost 9000\". The OSC tab in the image lists the addresses and arguments MacroFlush accepts. \"/transport/play\", \"/transport/pause\" and \"/transport/stop\" play, pause and stop (back to frame 0). \"/transport/frame n\" jumps to a non-negative integer frame, and \"/transport/step n\" moves n frames (default +1, negative goes back). \"/composition/open name\" opens a Composition, \"/cue/CueName\" jumps to a Cue, and \"/layers/Layer1/visible\" shows or hides a layer with 0/1 or a boolean. Composition and layer names must match exactly one item in the active Composition. Malformed arguments and unknown names appear in the status as \"OSC: ...\" errors, and all of these are ignored during offline export. Switching to another Composition is refused while there is an unresolved Feedback take or unapplied Feedback edits.", code: controlCode, codeLabel: "OSC (Max messages)", image: image("02-osc-tab", "The expanded OSC tab listing /transport, /composition/open, /layers/Layer1/visible, /cue and each Clip parameter address with its arguments", "The OSC tab's address list. The layer and Cue names belong to this project, and each Clip parameter can also be controlled at \"/layer/clip/parameter\".") },
    { title: "Run it and check", text: "Start OSC in MacroFlush, open the updated Max patch and send /transport/play. MainComposition updates the displays connected to the first outlet. After /transport/pause, try /transport/step 1, /transport/step -1 and /transport/frame 120 to receive changed values. Send /composition/open Composition2: addresses change to /Composition2/… and the second outlet's displays update. Return with /composition/open MainComposition, and try /cue/Cue2 to switch sections. If nothing arrives, check OSC is started, receive 9000 / send 9001 and Max's destination, then verify the spelling and case of Composition names in the routing subpatch. The old patch's direct parameter route does not match prefixed addresses. If you see \"getCompositionName is not defined\", update to a supporting app build." }
  ]
};
