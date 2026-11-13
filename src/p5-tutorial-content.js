const image = (file, alt, caption) => ({ src: `/assets/tutorials/p5-timeline/${file}.jpg`, alt, caption, width: 3342, height: 2554 });

export const p5StarterCode = `clip.use("p5");

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(12, 15, 23);
  noStroke();
  fill("#5dd4ff");
  circle(width / 2, height / 2, 36);
}`;

const orbitCode = `clip.use("p5");

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(12, 15, 23);
  const angle = millis() / 8000 * TWO_PI;
  const rx = width * 0.3;
  const ry = height * 0.25;
  noStroke();
  fill("#5dd4ff");
  circle(width / 2 + cos(angle) * rx,
    height / 2 + sin(angle) * ry, 36);
}`;

export const p5OrbitCode = `clip.use("p5");

clip.defineParams({
  spread: { type: "number", default: 0.65, min: 0.4,
    max: 1, step: 0.01, interpolable: true },
  speed: { type: "number", default: 1, min: 0.25,
    max: 3, step: 0.05, interpolable: true }
});

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(12, 15, 23);
  const phase = millis() / 8000 * TWO_PI * clip.speed;
  const radius = min(width * 0.34, height * 0.48) * clip.spread;
  const palette = ["#5dd4ff", "#ff6b9d", "#ffdc63"];

  translate(width / 2, height / 2);
  blendMode(SCREEN);
  for (let orbit = 0; orbit < 7; orbit++) {
    push();
    rotate(orbit * PI / 7 + sin(phase) * 0.18);
    const rx = radius * (0.68 + orbit * 0.045);
    const ry = rx * 0.38;
    const ink = color(palette[orbit % palette.length]);
    ink.setAlpha(135);
    noFill();
    stroke(ink);
    strokeWeight(2.4);
    ellipse(0, 0, rx * 2, ry * 2);

    const angle = phase * (orbit % 3 + 1) + orbit * TWO_PI / 7;
    for (let tail = 10; tail >= 0; tail--) {
      const a = angle - tail * 0.045;
      const glow = color(palette[orbit % palette.length]);
      glow.setAlpha(220 * (1 - tail / 11));
      noStroke();
      fill(glow);
      circle(cos(a) * rx, sin(a) * ry, tail === 0 ? 16 : 6);
    }
    pop();
  }
  noStroke();
  fill(240, 247, 255);
  circle(0, 0, 9);
  blendMode(BLEND);
}`;

export const p5TimelineLesson = {
  id: "p5-timeline", number: "07", level: "p5.js / Timeline",
  title: "p5.jsのスケッチをTimelineで動かす",
  summary: "ひとつの円から光の軌道へ。p5.jsの読み込み、時間の同期、Inspectorとキーフレームを体験する。",
  environments: ["browser-editor", "app"],
  startProject: "/online-editor/?example=tutorial-p5-start",
  completedProject: "/online-editor/?example=tutorial-p5-complete",
  startDownload: "/projects/tutorials/p5-timeline/start.json",
  download: "/projects/tutorials/p5-timeline/complete.json",
  referenceUrl: "/reference/#p5", referenceLabel: "p5.js Reference",
  previewProject: "tutorial-p5-complete",
  steps: [
    { title: "完成形を見て、開始用プロジェクトを開く", text: "p5 Orbitsの考え方を使って、7本の光の軌道が広がって戻る8秒の映像をつくります。上のプレビューを押すと再生・停止・シークと完成コードを確認できます。「開始用プロジェクト」はOnlineEditorで開き、中央の円から始まります。アプリ版で進める場合は「開始プロジェクトJSON」をダウンロードしてFile > Openから開いてください。教材は1280 × 720、60 fps、480フレーム。p5.js 1.11.1はJSONに埋め込み済みなので、CDNへの接続やライブラリの追加操作は不要です。", checks: ["前提：JavaScriptの変数とfor文が読めること。目安は20〜30分。", "完成版は教材用の簡略版です。Examplesのp5 Orbitsとは別のJSONなので、自由に編集できます。"], image: image("01-start", "開始用プロジェクトを開いたEditor。中央にシアンの円、Projectにp5.js、Timelineにp5 Orbit Studyを表示", "まずは動かない円。p5.jsを使う準備が整った状態から始められます。") },
    { title: "Librariesとp5 global modeを確認する", text: "Timelineのp5 Orbit Studyを選び、Inspectorの「p5.js global mode」がONであることを確認します。Librariesを開くと、Global scriptのp5.js 1.11.1が選択されています。ProjectにライブラリがあるだけではClipは使えず、Librariesでの選択とp5 global modeの有効化、コードのclip.use(\"p5\")の3つが必要です。新しいプロジェクトでアプリからライブラリを追加する場合はProject > Load Script > Add Library from URL...を使い、Referenceにある固定版URLをGlobal scriptとして取り込みます。教材ではこの準備を済ませてあります。", image: image("02-libraries", "InspectorにONのp5.js global modeと、Librariesで選択されたp5.js 1.11.1を表示したEditor", "p5 global modeとLibrariesは別の設定。clip.useの記述だけでは準備は完了しません。") },
    { title: "いつものsetup()とdraw()で円を描く", text: "JavaScriptタブの開始コードを確認します。setup()は初期化時に一度だけ実行し、createCanvas()で描画先を用意します。windowWidth / windowHeightはCompositionの寸法で、プレビューの表示倍率には左右されません。draw()はMacroFlushが渡すTimelineのtickで実行されます。ここでは毎回背景を塗り直して中央に円を描くので、Playを押しても形は変わりません。circle()の最後の値36は直径です。HTMLとCSSは空のままでかまいません。", code: p5StarterCode, checks: ["このClipにはCentiのsetup(callback)やonFrame()を足さず、p5の関数形式で書きます。", "描画を止めるときはTimelineのPauseを使います。p5のnoLoop()ではTimelineを停止できません。"] },
    { title: "millis()を使い、Timelineで円を動かす", text: "JavaScript全体を次のコードに置き換え、入力を止めると約300ms後にプレビューへ自動反映されます。millis()はClipのInからの時間をミリ秒で返します。8000で割ってTWO_PIを掛けると、8秒で1周する角度です。cos()とsin()を円のX・Yへ割り当てると、楕円の軌道を動きます。Playで進み、Pauseで止まり、Playheadを動かすとその時刻の位置に移ります。x += 1のように描画回数で位置を進めず、毎回時間から位置を計算することがポイントです。", code: orbitCode, checks: ["フレーム0は右端、120は下端、240は左端、360は上端。60 fpsなので120フレームは2秒です。", "ここでの時間はClipローカルです。Clipを後ろへ移動しても、そのClipの先頭でmillis()は0になります。"] },
    { title: "7本の軌道に広げ、操作する値を公開する", text: "次の完成コードでJavaScript全体を置き換え、自動反映を待ちます。for文で7本を描き、push() / pop()でそれぞれの回転を分離しています。spreadは軌道全体の広がり、speedは時間に掛ける倍率です。clip.defineParams()で宣言したら、InspectorのCreate Parametersを押してCustomへ追加します。まだキーのない状態でspreadを0.65から1へ変え、広がることを確認してください。speedは0.5で遅く、2で速く動きます。speedの値をアニメーションすると位相そのものが変わるため、この教材では1の固定値へ戻します。", code: p5OrbitCode, checks: ["残像に見える点も、過去のCanvasを残さず現在の時間から描き直しています。", "色はpaletteの3色、軌道の本数はfor文の7を変更して試せます。"], image: image("03-parameters", "教材の完成コードと、InspectorのCustomにspreadとspeedを表示したEditor", "完成コードの設定箇所を確認。spreadとspeedがInspectorへつながります。画像は開始用から完成コードを入力し、パラメータを追加した状態です。") },
    { title: "spreadに3つのキーフレームを打つ", text: "Time display unitをFramesに切り替えると、Timeline positionへフレーム番号を直接入力できます。フレーム0でspreadを0.65にしてKeyを押し、240で1にしてKey、479で0.65にしてKeyを追加します。Keyは現在フレームのキーを追加または更新します。値を変えた時点でキーが更新される場合もあるため、Timelineの菱形とInspectorのキー一覧で3つの時刻を確認してください。speedは1で、キーは付けません。これで最初は小さく、4秒で広がり、終わりに小さく戻ります。Timelineのキーを選んでCurveで補間を調整できます。完成JSONは最初に確認しやすいLinearです。慣れたらCurveで補間を変えて、広がり方を比べてみましょう。", checks: ["ClipはIn 0 / Out 480。Outは含まれないため、最後に描くフレームは479です。", "キーを選ぶこととPlayheadを動かすことは別操作です。値を確認するときはTimeline positionやルーラーでシークします。"], image: image("04-keyframes", "フレーム240で大きく広がる軌道と、spreadの0・240・479フレームのキーを表示したEditor", "240フレームではspreadが1。0・479では0.65になります。") },
    { title: "再生・停止・シークで確かめる", text: "Playして軌道が広がって戻ることを確認し、Pauseします。フレーム0→240→120→0の順にシークしてください。最初と最後の0で同じ絵になるのは、位置も残像も時間と現在のパラメータから計算しているためです。p5のframeCountはローカルフレーム+1なので、0フレームでは1です。通常のp5 global modeはシーク時にスケッチを最初から実行し直しません。変数への累積加算やCanvasへ描き足す作品を持ち込むときは、この違いを確認してからReferenceのIsolated replayを検討してください。" },
    { title: "描けないときは、この順に確認する", text: "コードを書き足す前に、設定とTimelineを確認します。開始用JSONまたは完成JSONを開き直すと、比較できる状態に戻れます。", checks: ["createCanvas is not defined：Librariesにp5.jsが選択されているか、p5.js global modeがONか、clip.use(\"p5\")があるか確認。", "円が見えない：レイヤー表示がONか、PlayheadがClipのIn / Out内か、JavaScriptが自動反映されたか確認。", "Customに値がない：完成コードが自動反映されたあとCreate Parametersを押す。HTMLアセットではなくTimelineのClip配置を選ぶ。", "spreadが手入力に戻らない：そのフレームではキーが優先されます。キーの値を編集するか、検証用にキーを外す。", "移植したスケッチだけ動かない：preload()やp5の外部ローダー、p5.sound、同じClipでのCenti併用はこの教材の方式の対象外です。"] },
    { title: "プロジェクトを保存し、自分のスケッチへ広げる", text: "File > Save Asでプロジェクトを保存します。JSONにはClipコード・配置・キーフレーム・埋め込んだp5.jsが一緒に入るので、保存したファイルを別のEditorでも開けます。ブラウザでは保存ダイアログまたはダウンロードからファイルを受け取ってください。次はpaletteを自分の配色に変えたり、ellipse()を別の図形へ置き換えてみましょう。自分のp5スケッチを移すときも、ライブラリとglobal modeを準備し、時間から状態を計算し、操作したい値を公開する、という順番で進められます。" }
  ]
};

export const p5TimelineLessonEnglish = {
  title: "Animate a p5.js sketch on the Timeline",
  summary: "Turn one circle into luminous orbits. Set up p5.js, follow Timeline time, and animate parameters with keyframes.",
  steps: [
    { title: "Preview the result and open the starter", text: "Use the idea behind p5 Orbits to make an eight-second animation of seven expanding and contracting orbits. Click the preview above to play, pause, seek and inspect the finished code. Open the starter in OnlineEditor to begin with a circle. For the app, download the starter JSON and use File > Open. The project is 1280 × 720 at 60 fps with 480 frames. p5.js 1.11.1 is already embedded: no CDN connection or library installation is needed.", checks: ["Prerequisites: JavaScript variables and for loops. Allow about 20–30 minutes.", "The completed project is a simplified study, separate from the p5 Orbits JSON in Examples. Edit it freely."], image: image("01-start", "Starter in the Editor with a cyan circle, p5.js in Project and p5 Orbit Study on the Timeline", "Begin with a stationary circle and a configured p5.js environment.") },
    { title: "Check Libraries and p5 global mode", text: "Select p5 Orbit Study on the Timeline and check that p5.js global mode is ON in the Inspector. Expand Libraries: the Global script p5.js 1.11.1 is selected. An asset in Project alone is not enough: the Clip needs the selected library, the enabled capability and clip.use(\"p5\") in its code. To prepare a new project in the app, use Project > Load Script > Add Library from URL... to import a pinned version from the Reference as a Global script. The starter already has these settings.", image: image("02-libraries", "Editor with p5.js global mode enabled and p5.js 1.11.1 selected under Libraries", "The capability and Libraries selection are separate settings. The clip.use declaration alone does not complete setup.") },
    { title: "Draw a circle with familiar setup() and draw()", text: "Inspect the starter in the JavaScript tab. setup() runs once at initialization and createCanvas() prepares the canvas. windowWidth / windowHeight are Composition dimensions, unaffected by preview zoom. MacroFlush Timeline ticks drive draw(). This code repaints the background and draws a centered circle on every tick, so pressing Play does not change its shape. The final circle() argument, 36, is the diameter. HTML and CSS can stay empty.", checks: ["Use p5 function declarations here, without adding Centi's setup(callback) or onFrame().", "Pause with the Timeline transport. p5's noLoop() does not pause the Timeline."] },
    { title: "Drive the circle from Timeline time with millis()", text: "Replace the entire JavaScript with the code below and stop typing; the preview updates automatically after about 300 ms. millis() returns milliseconds since the Clip's In. Dividing by 8000 and multiplying by TWO_PI makes an angle that turns once in eight seconds. cos() and sin() give an elliptical path. Play advances, Pause stops, and seeking places the circle at that time. Calculate position directly from time instead of incrementing x with each draw.", checks: ["At frames 0 / 120 / 240 / 360 the circle is right / bottom / left / top. At 60 fps, 120 frames is two seconds.", "This is Clip-local time. Moving the Clip later on the Timeline still starts its millis() at zero."] },
    { title: "Expand to seven orbits and expose controls", text: "Replace all JavaScript with the completed code below and wait for the automatic update. A for loop draws seven orbits; push() / pop() keep their transforms separate. spread controls their extent and speed multiplies time. After declaring them with clip.defineParams(), click Create Parameters in the Inspector to add them under Custom. Before adding keys, change spread from 0.65 to 1 and check the expansion. speed 0.5 is slower and 2 is faster. Animating this multiplier changes phase directly, so return speed to a constant 1 for this exercise.", checks: ["The apparent trails are also redrawn from current time; they do not depend on an accumulated canvas.", "Try changing the three palette colors or the for loop's orbit count of 7."], image: image("03-parameters", "Editor with the completed study code and spread and speed under Inspector Custom", "Locate the completed code and its Inspector controls. This image shows the starter after entering the completed code and adding parameters.") },
    { title: "Add three spread keyframes", text: "Switch Time display unit to Frames so you can enter exact frame numbers in Timeline position. At frame 0 set spread to 0.65 and press Key; at 240 set 1 and add Key; at 479 set 0.65 and add Key. Key adds or updates the key at the current frame. Changing a value may already update it; check the Timeline diamonds and Inspector key list for all three frame numbers. Leave speed at 1 without keys. The orbits now start small, expand at four seconds and shrink toward the end. Select keys and adjust interpolation in Curve. The completed JSON uses Linear for an easy first comparison. Try another easing in Curve to change how it expands.", checks: ["The Clip has In 0 / Out 480. Out is excluded, so the final rendered frame is 479.", "Selecting a key and moving the playhead are different actions. Seek with Timeline position or the ruler when checking values."], image: image("04-keyframes", "Expanded orbits at frame 240 with spread keys at frames 0, 240 and 479", "spread is 1 at frame 240, and 0.65 at frames 0 and 479.") },
    { title: "Check playback, pause and seeking", text: "Play the expansion and contraction, then Pause. Seek in the order 0 → 240 → 120 → 0. Both visits to frame 0 should show the same image because positions and trails come from time and current parameters. p5's frameCount is the local frame plus one, so it is 1 at frame 0. Ordinary p5 global mode does not rerun the sketch from the start on seek. If you bring in accumulated variables or canvas trails, examine that difference before considering Isolated replay in the Reference." },
    { title: "Troubleshoot in this order", text: "Check configuration and the Timeline before adding more code. Reopen the starter or completed JSON for a known comparison.", checks: ["createCanvas is not defined: check the p5.js Libraries selection, enabled p5.js global mode and clip.use(\"p5\").", "No circle: check layer visibility, the Clip's In / Out range and whether JavaScript has updated.", "No Custom controls: Wait for the completed code to update, then click Create Parameters. Select the Timeline placement rather than the HTML asset.", "spread ignores a manual value: keys take precedence at that frame. Edit the key value or remove keys for a temporary experiment.", "A ported sketch fails: preload(), p5 external loaders, p5.sound and combining Centi in the same Clip are outside this tutorial's workflow."] },
    { title: "Save and adapt your own sketch", text: "Use File > Save As. The JSON contains Clip code, placements, keyframes and embedded p5.js, so another Editor can open it. In the browser, receive the file through its save dialog or download. Next, choose your own palette or replace ellipse() with a different shape. The same sequence works for your own sketches: prepare the library and global mode, calculate state from time, then expose the values you want to control." }
  ]
};
