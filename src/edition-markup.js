const environmentNames = { "browser-editor": "ブラウザEditor", app: "アプリ版", player: "Player" };

export function entryEnvironments(entry) {
  return entry.environments || (entry.group === "player" ? ["player"] : ["browser-editor", "app", "player"]);
}

export function availabilityBadges(entry) {
  return `<div class="availability" aria-label="対応環境">${entryEnvironments(entry).map(id => `<span class="availability-badge availability-${id}">${environmentNames[id]}</span>`).join("")}</div>`;
}

export function editionNote() {
  return '<aside class="edition-note"><p>ブラウザで制作・再生。アプリ版で、さらに広がる。</p><p>OnlineEditorはブラウザで編集、Playerはプロジェクトの再生に使えます。動画書き出し・MCP・OSC・LLMアシスタントはアプリ版で利用できます。</p><a class="text-link" href="/about/#editions">対応環境と機能の違いを見る ↗</a></aside>';
}

export function editionOverview({ compact = false } = {}) {
  const rows = [
    ["プロジェクトの再生", "対応", "対応", "対応"],
    ["Clip・Timeline・キーフレームの編集", "対応", "再生のみ", "対応"],
    ["Shader Clip / Effectの再生", "対応", "対応", "対応"],
    ["記録済みFeedbackの再生", "対応", "対応", "対応"],
    ["FeedbackのPointer記録", "対応", "非対応", "対応"],
    ["動画・PNG連番の書き出し", "非対応", "非対応", "対応"],
    ["MCPによる外部自動操作", "非対応", "非対応", "対応"],
    ["OSCの送受信・記録", "非対応", "非対応", "対応"],
    ["LLMアシスタント", "非対応", "非対応", "対応"]
  ];
  const table = `<div class="reference-table-wrap"><table class="edition-table"><caption>機能と対応環境</caption><thead><tr><th scope="col">機能</th><th scope="col">ブラウザEditor</th><th scope="col">Player</th><th scope="col">アプリ版</th></tr></thead><tbody>${rows.map(([name, ...cells]) => `<tr><th scope="row">${name}</th>${cells.map(value => `<td>${value}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  return `<section class="edition-overview reference-guide" id="${compact ? "reference-environments" : "editions"}"><p class="eyebrow">BROWSER / PLAYER / APPLICATION</p><h2>使う環境で、できることが変わります。</h2><p>OnlineEditorはブラウザで編集、Playerはプロジェクトの再生に使えます。動画書き出し・MCP・OSC・LLMアシスタントはアプリ版で利用できます。</p>${compact ? `<details><summary>機能ごとの対応表を開く</summary>${table}</details>` : table}<p class="edition-footnote">Referenceのラベルは、その操作・APIを利用できる環境を示します。Clip内のAPIはPlayerでの実行も含みます。作成・設定の項目はEditor、PlayerのホストAPIは埋め込み先のWebページで使用します。</p><p class="edition-footnote">Shader ClipにはWebGL2が必要です。Feedbackの記録と、保存したデータの再生は別の機能です。Webで共有するプロジェクトは、メディアや記録データを埋め込んで保存すると扱いやすくなります。</p></section>`;
}
