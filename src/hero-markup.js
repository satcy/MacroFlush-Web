export function heroWorkspace() {
  return `<div class="preview-transport live-transport">
    <button type="button" id="hero-play" class="icon-button" aria-label="デモを停止">Ⅱ</button>
    <button type="button" id="hero-rewind" class="icon-button" aria-label="先頭フレームへ移動">↤</button>
    <output id="hero-timecode" class="timecode">00:00:00</output>
    <input id="hero-seek" class="playback-progress" type="range" min="0" max="719" step="1" value="0" aria-label="デモの再生位置" disabled>
    <span id="hero-frame" class="frame-count">0 / 719 f</span>
  </div>
  <section id="hero-editor" class="live-editor" aria-label="AutecのTimelineとCurve">
    <div class="editor-toolbar">
      <div class="editor-tabs" role="tablist" aria-label="タイムラインの表示">
        <button id="hero-tab-timeline" type="button" role="tab" aria-selected="true" aria-controls="hero-timeline-panel">Timeline</button>
        <button id="hero-tab-curve" type="button" role="tab" aria-selected="false" aria-controls="hero-curve-panel" tabindex="-1">Curve</button>
      </div>
      <select id="hero-param" aria-label="編集するパラメータ" disabled><option>color</option></select>
      <select id="hero-channel" aria-label="Curveの成分" disabled><option value="0">R</option><option value="1">G</option><option value="2">B</option></select>
      <button id="hero-reset" type="button" class="editor-button" disabled>Reset</button>
    </div>
    <div class="editor-axis"><span>60 fps</span><div id="hero-ruler" class="live-ruler" aria-label="時間ルーラー。クリックでシーク"></div></div>
    <div id="hero-timeline-panel" role="tabpanel" aria-labelledby="hero-tab-timeline">
      <div class="live-row clip-row"><span id="hero-layer-label">Autec</span><div class="clip-lane"><div id="hero-clip-bar" class="authored-clip">Autec</div><i class="live-playhead" aria-hidden="true"></i></div></div>
      <div class="live-row key-row"><span id="hero-param-label">↳ color</span><div id="hero-key-lane" class="key-lane" aria-label="パラメータのキーフレーム"><i class="live-playhead" aria-hidden="true"></i></div></div>
    </div>
    <div id="hero-curve-panel" role="tabpanel" aria-labelledby="hero-tab-curve" hidden>
      <div class="live-row curve-row"><div class="curve-axis"><span id="hero-value-max">255</span><span id="hero-value-min">0</span></div><div class="curve-lane"><svg id="hero-curve" viewBox="0 0 1000 180" role="group" aria-label="パラメータのカーブとキーフレーム"></svg><i class="live-playhead" aria-hidden="true"></i></div></div>
    </div>
    <div class="key-inspector">
      <select id="hero-key-select" aria-label="Keyframeを選択" disabled><option value="">Key…</option></select>
      <button id="hero-add-key" type="button" class="editor-button" disabled title="現在のフレームにKeyframeを追加">＋ Key</button>
      <button id="hero-delete-key" type="button" class="editor-button" disabled title="選択したKeyframeを削除">− Key</button>
      <label>Frame <input id="hero-key-frame" type="number" min="0" max="719" step="1" aria-label="選択キーのフレーム" disabled></label>
      <label>Value <input id="hero-key-value" type="number" step="1" aria-label="パラメータまたは選択キーの値" disabled><input id="hero-key-color" type="color" aria-label="パラメータまたは選択キーの色" hidden></label>
      <button id="hero-undo" type="button" class="editor-button" disabled>Undo</button>
    </div>
    <div class="editor-footnote"><span id="hero-edit-status" role="status">Projectを準備中…</span><button id="hero-export" type="button" disabled>Save JSON ↓</button></div>
  </section>`;
}
