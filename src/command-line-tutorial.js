const macOpen = 'open -a MacroFlush "$HOME/Downloads/osc-sequencer.json"';
const macProject = String.raw`open -n -a MacroFlush --args \
  --project "$HOME/Downloads/osc-sequencer.json"`;
const macOsc = String.raw`open -n -a MacroFlush --args \
  --project "$HOME/Downloads/osc-sequencer.json" \
  --osc`;
const macPorts = String.raw`open -n -a MacroFlush --args \
  --project "$HOME/Downloads/osc-sequencer.json" \
  --osc \
  --osc-in 9100 \
  --osc-out localhost:9101`;
const macSettings = String.raw`open -n -a MacroFlush --args \
  --project "$HOME/Downloads/osc-sequencer.json" \
  --osc-in 9100 \
  --osc-out localhost:9101`;
const windowsLaunch = String.raw`"C:\path\to\MacroFlush.exe" --project "C:\Projects\show.json" --osc --osc-in 9100 --osc-out localhost:9101`;
const shell = (code, codeLabel = "Shell / macOS Terminal") => ({ code, codeLabel, language: "shell" });
const table = (headers, rows) => ({ headers, rows });

export const commandLineLesson = {
  id: "command-line-launch",
  title: "TerminalからプロジェクトとOSCを起動する",
  summary: "ファイルと接続先をコマンドにまとめ、同じ設定でMacroFlushを開く。",
  level: "Terminal / App launch",
  environments: ["app"],
  referenceUrl: "/reference/#app-launch",
  referenceLabel: "Launch options Reference",
  downloads: [
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.json", label: "練習用プロジェクトJSON" },
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.maxpat", label: "Maxパッチ（.maxpat）" }
  ],
  steps: [
    {
      title: "アプリと練習ファイルを用意する",
      text: '起動オプションに対応するアプリ版v0.3.20以降を使います。目安15分。macOSではMacroFlushをインストールし、上の練習用JSONをDownloadsへ保存してください。以降はosc-sequencer.jsonという名前を使います。別の保存先ならコマンドのパスも変えます。OSCの動作まで試す場合はMaxパッチも保存し、先に<a href="/tutorials/osc-sequencer/">OSCシーケンサーの記事 ↗</a>を確認します。Terminalのコマンドはアプリを開くためのもので、ClipのJavaScript欄へは入力しません。',
      checks: ["作業中のプロジェクトを保存して、MacroFlushを終了してから始めます。", "コマンドの実行後は通常のEditorが開きます。OSCの起動とTimelineのPlayは別の操作です。", "この起動方法はアプリ版専用です。ブラウザEditorとPlayerには起動オプションがありません。"]
    },
    {
      title: "macOSでファイルを指定して開く",
      text: "Terminalで次の1行を実行します。open -a MacroFlushはアプリを指定し、続くパスはmacOSのファイルを開く要求として渡されます。$HOMEは自分のホームフォルダです。読み込みが終わったら、プロジェクト名とMainComposition・Composition2が表示されることを確認してください。自分の作品を開く場合も、既存のプロジェクトJSONへパスを変えるだけです。",
      ...shell(macOpen)
    },
    {
      title: "--projectでファイルを明示する",
      text: "OSCなどの引数を組み合わせるときは、--argsのあとにMacroFlushの起動オプションを書きます。--projectには存在するローカルの.jsonファイルを1つ指定します。空白を含むパスも引用符で囲んでください。掲載例はバックスラッシュで1つのコマンドを複数行に分けています。相対パスは呼び出し元の作業ディレクトリ基準なので、まずは例のように絶対パスへ展開される指定で試します。URLやfile://は指定できません。",
      ...shell(macProject),
      table: table(["引数", "役割", "省略時"], [["--project <path>", "プロジェクトJSONを開く", "起動引数からのファイル指定なし"], ["--osc", "起動後にOSCを開始する（値は付けない）", "OSCを開始しない"], ["--osc-in <port>", "OSCの受信ポート", "9000"], ["--osc-out <host:port>", "OSCの送信先", "127.0.0.1:9001"]])
    },
    {
      title: "プロジェクトとOSCを一緒に起動する",
      text: "前の手順で開いたMacroFlushを保存して終了してから、次を実行します。--projectでJSONを開き、--oscでOSCタブのStartと同じ経路からOSCを開始します。練習用Maxパッチのudpsend localhost 9000・udpreceive 9001は、既定の接続先と一致しています。OSCタブの起動状態とポートを確認し、Maxでパッチを開いて/transport/playを送るか、MacroFlushのPlayを押してください。--osc自体はTimelineの再生を始める引数ではありません。",
      ...shell(macOsc)
    },
    {
      title: "受信ポートと送信先を変える",
      text: "設定を変えて起動し直すときも、保存してアプリを終了してから実行します。次の例は受信を9100、送信先を同じコンピュータのlocalhost:9101にします。ポートは1〜65535の整数で指定します。Max側も表のように変更してください。別のコンピュータへ送るならlocalhostを相手のホスト名かIPv4アドレスへ変えます。IPv6の送信先は\"[::1]:9101\"のようにアドレスを角括弧で囲み、引数全体を引用符で囲みます。受信側の待ち受けはIPv4です。",
      ...shell(macPorts),
      table: table(["MacroFlushの設定", "対応するMaxの設定"], [["--osc-in 9100（Max → MacroFlush）", "udpsend localhost 9100"], ["--osc-out localhost:9101（MacroFlush → Max）", "udpreceive 9101"]])
    },
    {
      title: "OSCを開始せず、設定だけ用意する",
      text: "--oscを外すと、--osc-inと--osc-outはOSCタブの初期値だけに反映されます。この場合はOSCを開始せず、送信先の名前解決やソケットの開始も行いません。こちらもアプリを終了してから起動し、受信9100・送信localhost:9101になっていることを確認します。送信先を確認してから手動でStartしたいときに使えます。引数なしで次回も同じ設定になると想定せず、毎回同じ設定が必要ならこのコマンドを再利用してください。",
      ...shell(macSettings)
    },
    {
      title: "起動済みのアプリへ渡した場合を理解する",
      text: "MacroFlushがすでに起動中なら、--projectの要求は既存のウィンドウへ転送され、新しいプロセスは終了します。open -nを付けても、このアプリはsingle-instance lockで既存ウィンドウへ集約します。OSCの起動引数を読むのは最初のインスタンスだけなので、2回目の起動で--oscやポートを変えても、起動中のOSC設定は変わりません。ポート変更はOSCタブで行うか、保存して終了後にコマンドで起動し直します。未保存の変更があるとDiscard and Openの確認が出ます。未解決のFeedback作業、無効なコード下書き、書き出し中は読み込み要求が拒否されるため、先にその作業を終えてください。"
    },
    {
      title: "読み込みと接続を別々に確認する",
      text: "プロジェクトが開いても、OSCの開始が成功したとは限りません。OSCタブにエラーがあれば、引数の重複・値の不足、ポートの範囲、送信先の綴り、他のアプリによる受信ポートの使用を確認します。OSC引数が不正、ホスト名の解決に失敗、またはポートが使用中の場合はOSCを停止したままエラーを表示し、アプリの起動と--projectの処理は続けます。修正後はOSCタブのStartで再試行できます。ファイルを開けない場合は、.jsonのファイル名・保存場所・引用符を確認してください。",
      checks: ["指定したプロジェクト名とCompositionが開いている。", "--oscなしではOSCが停止、--osc付きではエラーがなく起動している。", "Maxの送受信ポートが対応している。Play後の値の変化はOSCシーケンサーの記事で確認する。", "同じ起動条件を再現できたら、実際のファイルの場所に合わせたコマンドをメモしておく。"]
    },
    {
      title: "Windowsでは実行ファイルへ引数を渡す",
      text: "Windowsのコマンドプロンプト向けの書式は次のようになります。MacroFlush.exeとプロジェクトJSONのパスは実際の場所へ変えてください。macOSのopen・--argsは使いません。",
      ...shell(windowsLaunch, "Command Prompt / Windows")
    }
  ]
};

export const commandLineLessonEnglish = {
  title: "Launch a project and OSC from the Terminal",
  summary: "Put a project file and connection settings into a command to open MacroFlush consistently.",
  referenceLabel: "Launch options Reference",
  downloads: [
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.json", label: "Practice project JSON" },
    { href: "/projects/tutorials/osc-sequencer/osc-sequencer.maxpat", label: "Max patch (.maxpat)" }
  ],
  steps: [
    {
      title: "Prepare the app and practice file",
      text: 'Use app v0.3.20 or later with launch-option support. Allow 15 minutes. On macOS, install MacroFlush and save the practice JSON above in Downloads as osc-sequencer.json. Change the command paths if you save it elsewhere. To try OSC too, save the Max patch and read the <a href="/tutorials/osc-sequencer/">OSC sequencer tutorial ↗</a>. Enter these commands in your Terminal, rather than the Clip JavaScript editor.',
      checks: ["Save your current project and quit MacroFlush before starting.", "The command opens the normal Editor. Starting OSC and playing the Timeline are separate operations.", "These launch options are app-only; the browser Editor and Player do not have them."]
    },
    {
      title: "Open a file on macOS",
      text: "Run this line in Terminal. open -a MacroFlush selects the app, and macOS passes the following path as a file-open request. $HOME is your home directory. After loading, check the project name and the MainComposition and Composition2 assets. To open your own work, change the path to an existing project JSON.",
      ...shell(macOpen)
    },
    {
      title: "Specify the file with --project",
      text: "To combine options such as OSC, put MacroFlush arguments after --args. --project accepts one existing local .json file. Quote paths that contain spaces. Backslashes split this example's single command across lines. Relative paths resolve against the invoking working directory; start with a path that expands to an absolute one as shown. URLs and file:// paths are not accepted.",
      ...shell(macProject),
      table: table(["Option", "Purpose", "When omitted"], [["--project <path>", "Open a project JSON", "No project selected by arguments"], ["--osc", "Start OSC after launch; takes no value", "Do not start OSC"], ["--osc-in <port>", "OSC receive port", "9000"], ["--osc-out <host:port>", "OSC destination", "127.0.0.1:9001"]])
    },
    {
      title: "Launch the project with OSC",
      text: "Save and quit the MacroFlush instance opened in the previous steps, then run this command. --project opens the JSON and --osc starts OSC through the same path as Start in the OSC tab. The practice Max patch's udpsend localhost 9000 and udpreceive 9001 match the defaults. Check OSC status and ports, open the patch in Max and send /transport/play, or press Play in MacroFlush. --osc does not itself start Timeline playback.",
      ...shell(macOsc)
    },
    {
      title: "Change the receive port and destination",
      text: "Save and quit the app before relaunching with different settings. This example receives on 9100 and sends to localhost:9101 on the same computer. Ports must be integers from 1 to 65535. Change the Max objects to match the table. To send to another computer, replace localhost with its hostname or IPv4 address. For an IPv6 destination, bracket the address and quote the whole argument, such as \"[::1]:9101\". Receiving remains on IPv4.",
      ...shell(macPorts),
      table: table(["MacroFlush setting", "Matching Max object"], [["--osc-in 9100 (Max → MacroFlush)", "udpsend localhost 9100"], ["--osc-out localhost:9101 (MacroFlush → Max)", "udpreceive 9101"]])
    },
    {
      title: "Prepare settings without starting OSC",
      text: "Omit --osc to fill the OSC tab's initial values with --osc-in and --osc-out only. OSC stays off; hostname resolution and socket startup do not begin. Again, quit the app first, launch with this command and check receive 9100 and destination localhost:9101. Use this when you want to review the destination before pressing Start manually. Do not assume another launch without arguments retains these settings; reuse the command when you need the same setup.",
      ...shell(macSettings)
    },
    {
      title: "Understand requests to an already-running app",
      text: "If MacroFlush is running, --project is forwarded to its existing window and the new process exits. Even with open -n, the app's single-instance lock routes requests to the existing window. Only the first instance reads OSC launch options, so a second launch with --osc or different ports does not change the running OSC settings. Change them in the OSC tab, or save, quit and relaunch. Unsaved project changes prompt Discard and Open. Unresolved Feedback work, an invalid code draft or an export in progress rejects the open request; finish that work first."
    },
    {
      title: "Check project loading and OSC separately",
      text: "A successfully opened project does not prove OSC started. If the OSC tab shows an error, check duplicated options, missing values, port ranges, destination spelling and whether another app uses the receive port. Invalid OSC arguments, hostname lookup failure or an occupied port leave OSC off and show an error, while app startup and --project processing continue. Correct settings and retry with Start in the OSC tab. For file-open errors, check the .json filename, location and quotes.",
      checks: ["The intended project name and Compositions are open.", "Without --osc, OSC is stopped; with it, OSC starts without an error.", "The Max receive/send ports match. Check changing values after Play using the OSC sequencer tutorial.", "Save a command using your actual file location once you can reproduce the launch settings."]
    },
    {
      title: "Pass arguments to the executable on Windows",
      text: "The following shows Command Prompt syntax on Windows. Replace the MacroFlush.exe and project JSON paths with their actual locations. macOS open and --args do not apply.",
      ...shell(windowsLaunch, "Command Prompt / Windows")
    }
  ]
};
