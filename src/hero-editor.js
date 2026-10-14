import { clamp, frameAtTime, componentValue, withComponent, valueAtFrame, moveKeyframe, snapshotClip, restoreClip } from "./timeline-model.js";

const svgNode = (tag, attrs = {}) => {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  return node;
};
export function updateProgress(input, time, fps, durationFrames) {
  const frame = frameAtTime(time, fps, durationFrames);
  if (document.activeElement !== input) input.value = String(frame);
  input.style.setProperty("--progress", `${frame / Math.max(1, durationFrames - 1) * 100}%`);
  input.setAttribute("aria-valuetext", `${frame} frame / ${(frame / fps).toFixed(2)} sec`);
  return frame;
}
export function timecode(frame, fps) {
  const seconds = Math.floor(frame / fps);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}:${String(frame % fps).padStart(2, "0")}`;
}

export class HeroEditor {
  constructor({ preview, root, getTime, seek, pause }) {
    this.preview = preview; this.root = root; this.getTime = getTime; this.seek = seek; this.pause = pause;
    this.composition = preview.composition;
    this.layer = this.composition.layers.find(layer => layer.clips.some(clip => clip.kind === "html"));
    this.clip = this.layer.clips.find(clip => clip.kind === "html");
    this.original = snapshotClip(this.clip);
    this.view = "timeline"; this.channel = 0; this.selected = null;
    this.history = []; this.ids = new WeakMap(); this.nextId = 0; this.revision = 0;
    this.el = Object.fromEntries(["param", "channel", "ruler", "key-lane", "curve", "key-select", "key-frame", "key-value", "key-color", "add-key", "delete-key", "undo", "reset", "export", "edit-status"].map(name => [name, document.querySelector(`#hero-${name}`)]));
    const params = Object.entries(this.clip.params).filter(([, param]) => ["number", "vec2", "vec3", "color"].includes(param.type) && (param.interpolable || param.type === "color"));
    this.el.param.replaceChildren(...params.map(([name]) => { const option = document.createElement("option"); option.value = name; option.textContent = name; return option; }));
    this.param = this.clip.keyframeTracks?.color ? "color" : params[0][0]; this.el.param.value = this.param;
    for (const name of ["param", "channel", "add-key", "reset", "export"]) this.el[name].disabled = false;
    document.querySelector("#hero-layer-label").textContent = this.layer.name;
    const bar = document.querySelector("#hero-clip-bar"); bar.textContent = this.clip.name;
    bar.style.left = `${this.clip.inFrame / this.composition.durationFrames * 100}%`;
    bar.style.width = `${(this.clip.outFrame - this.clip.inFrame) / this.composition.durationFrames * 100}%`;
    const ruler = this.el.ruler;
    for (let i = 0; i <= 6; i++) {
      const tick = document.createElement("span"); tick.style.left = `${i / 6 * 100}%`;
      tick.textContent = `${(i / 6 * this.preview.duration).toFixed(0)}s`; ruler.append(tick);
    }
    ruler.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      this.pause(); ruler.setPointerCapture(event.pointerId); this.rulerSeek(event);
    });
    ruler.addEventListener("pointermove", event => { if (ruler.hasPointerCapture(event.pointerId)) this.rulerSeek(event); });
    for (const view of ["timeline", "curve"]) {
      const tab = document.querySelector(`#hero-tab-${view}`);
      tab.addEventListener("click", () => this.setView(view));
      tab.addEventListener("keydown", event => {
        if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
          event.preventDefault(); const target = event.key === "Home" || event.key === "ArrowLeft" ? "timeline" : "curve";
          this.setView(target); document.querySelector(`#hero-tab-${target}`).focus();
        }
      });
    }
    this.el.param.addEventListener("change", () => { this.param = this.el.param.value; this.channel = 0; this.selected = null; this.render(); });
    this.el.channel.addEventListener("change", () => { this.channel = Number(this.el.channel.value); this.render(); });
    this.el["key-select"].addEventListener("change", () => { this.selected = this.track.find(key => this.id(key) === this.el["key-select"].value) || null; this.render(); });
    for (const lane of [this.el["key-lane"], this.el.curve]) {
      lane.addEventListener("pointerdown", event => this.startDrag(event, lane));
      lane.addEventListener("pointermove", event => this.dragKey(event, lane));
      lane.addEventListener("pointerup", () => this.finishDrag());
      lane.addEventListener("pointercancel", () => { if (this.drag?.changed) { this.history.pop(); restoreClip(this.clip, this.drag.before); this.preview.requestRender(); } this.drag = null; this.selected = null; this.render(); });
      lane.addEventListener("keydown", event => this.keyAction(event));
      lane.addEventListener("click", event => {
        const target = event.target.closest("[data-key]");
        if (target) { this.selected = this.track.find(key => this.id(key) === target.dataset.key); this.updateInspector(); }
      });
    }
    this.el["add-key"].addEventListener("click", () => this.addKey());
    this.el["delete-key"].addEventListener("click", () => this.deleteKey());
    this.el.undo.addEventListener("click", () => this.undo());
    this.el.reset.addEventListener("click", () => { this.remember(); restoreClip(this.clip, this.original); this.selected = null; this.changed(); });
    this.el.export.addEventListener("click", () => this.download());
    for (const name of ["key-frame", "key-value", "key-color"]) {
      this.el[name].addEventListener("focus", () => { this.pause(); this.formSnapshot = snapshotClip(this.clip); this.formEdited = false; });
      this.el[name].addEventListener("input", () => this.editValue(name));
      this.el[name].addEventListener("change", () => this.editValue(name));
      this.el[name].addEventListener("blur", () => { this.formSnapshot = null; this.updateInspector(); });
    }
    this.render();
  }
  get schema() { return this.clip.params[this.param]; }
  get track() { return this.clip.keyframeTracks?.[this.param] || []; }
  id(key) { if (!this.ids.has(key)) this.ids.set(key, `key-${++this.nextId}`); return this.ids.get(key); }
  remember(snapshot = snapshotClip(this.clip)) { this.history.push(snapshot); if (this.history.length > 40) this.history.shift(); }
  changed() { this.revision++; this.root.dataset.revision = this.revision; this.preview.requestRender(); this.render(); }
  rulerSeek(event) { const rect = this.el.ruler.getBoundingClientRect(); this.seek(clamp(Math.round((event.clientX - rect.left) / rect.width * (this.composition.durationFrames - 1)), 0, this.composition.durationFrames - 1) / this.composition.fps); }
  setView(view) {
    this.view = view;
    for (const name of ["timeline", "curve"]) {
      const active = name === view; const tab = document.querySelector(`#hero-tab-${name}`);
      tab.setAttribute("aria-selected", String(active)); tab.tabIndex = active ? 0 : -1;
      document.querySelector(`#hero-${name}-panel`).hidden = !active;
    }
    this.render();
  }
  valueRange() {
    if (this.schema.type === "color") return [0, 255];
    const defaults = this.param === "rotation" ? [-180, 180] : this.param === "scale" ? [0, 2] : this.param === "position" || this.param === "anchorPoint" ? [-960, 960] : [0, 1];
    const values = [componentValue(this.schema.value, this.channel), ...this.track.map(key => componentValue(key.value, this.channel))];
    const min = Math.min(this.schema.min ?? defaults[0], ...values); const max = Math.max(this.schema.max ?? defaults[1], ...values);
    return [min, max === min ? min + 1 : max];
  }
  startDrag(event, lane) {
    if (event.button !== 0) return;
    const target = event.target.closest("[data-key]"); if (!target) return;
    const key = this.track.find(key => this.id(key) === target.dataset.key); if (!key) return;
    event.preventDefault(); this.selected = key;
    this.drag = { key, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, range: this.valueRange(), before: snapshotClip(this.clip), changed: false, curve: lane === this.el.curve };
    lane.setPointerCapture(event.pointerId); this.render();
  }
  dragKey(event, lane) {
    const drag = this.drag;
    if (!drag || drag.pointerId !== event.pointerId || !lane.hasPointerCapture(event.pointerId)) return;
    if (!drag.changed && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 3) return;
    if (!drag.changed) { this.remember(drag.before); drag.changed = true; }
    const rect = lane.getBoundingClientRect();
    const frame = Math.round(clamp((event.clientX - rect.left) / rect.width, 0, 1) * (this.composition.durationFrames - 1)) - this.clip.inFrame;
    let value = drag.key.value;
    if (drag.curve) {
      const [min, max] = drag.range; const y = (event.clientY - rect.top) / rect.height * 180;
      const number = max - clamp((y - 12) / 156, 0, 1) * (max - min);
      value = withComponent(value, this.schema.type === "color" ? Math.round(number) : Number(number.toFixed(3)), this.channel);
    }
    moveKeyframe(this.track, drag.key, frame, this.clip.outFrame - this.clip.inFrame - 1, value); this.changed();
  }
  finishDrag() { this.drag = null; }
  keyAction(event) {
    const target = event.target.closest("[data-key]"); if (!target) return;
    const key = this.track.find(key => this.id(key) === target.dataset.key); if (!key) return;
    this.selected = key;
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); this.render(); return; }
    if (["Delete", "Backspace"].includes(event.key)) { event.preventDefault(); this.deleteKey(); return; }
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    if (this.view !== "curve" && ["ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault(); this.remember(); const step = event.shiftKey ? 10 : 1;
    let frame = key.frame; let value = key.value;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") frame += event.key === "ArrowLeft" ? -step : step;
    else if (this.view === "curve") {
      const delta = (event.key === "ArrowUp" ? 1 : -1) * step * (this.schema.type === "color" ? 1 : this.schema.step || 0.01);
      const [min, max] = this.valueRange(); value = withComponent(value, clamp(componentValue(value, this.channel) + delta, min, max), this.channel);
    }
    moveKeyframe(this.track, key, frame, this.clip.outFrame - this.clip.inFrame - 1, value); this.changed();
    const selector = `[data-key="${this.id(key)}"]`; (this.view === "curve" ? this.el.curve : this.el["key-lane"]).querySelector(selector)?.focus();
  }
  addKey() {
    const frame = clamp(frameAtTime(this.getTime(), this.composition.fps, this.composition.durationFrames) - this.clip.inFrame, 0, this.clip.outFrame - this.clip.inFrame - 1);
    const existing = this.track.find(key => key.frame === frame);
    if (existing) { this.selected = existing; this.render(); return; }
    this.remember(); const value = valueAtFrame(this.schema, this.track, frame);
    this.clip.keyframeTracks ||= {}; this.clip.keyframeTracks[this.param] ||= [];
    this.selected = { frame, value, easing: "linear" }; this.clip.keyframeTracks[this.param].push(this.selected);
    this.track.sort((a, b) => a.frame - b.frame); this.changed();
  }
  deleteKey() { if (!this.selected) return; this.remember(); this.clip.keyframeTracks[this.param] = this.track.filter(key => key !== this.selected); this.selected = null; this.changed(); }
  editValue(name) {
    const input = this.el[name];
    if (name !== "key-color" && (!input.value || !Number.isFinite(Number(input.value)))) { this.updateInspector(); return; }
    const source = this.selected || this.schema;
    if (name === "key-frame" && this.selected?.frame === Number(input.value)
      || name === "key-color" && source.value === input.value
      || name === "key-value" && componentValue(source.value, this.channel) === Number(input.value)) return;
    if (!this.formSnapshot || !this.formEdited) { this.remember(this.formSnapshot || snapshotClip(this.clip)); this.formEdited = true; }
    if (name === "key-frame" && this.selected) moveKeyframe(this.track, this.selected, Number(input.value), this.clip.outFrame - this.clip.inFrame - 1);
    else {
      let value = name === "key-color" ? input.value : withComponent(source.value, Number(input.value), this.channel);
      if (this.schema.type === "number") value = clamp(value, this.schema.min ?? -Infinity, this.schema.max ?? Infinity);
      source.value = value;
    }
    this.changed();
  }
  undo() { const snapshot = this.history.pop(); if (!snapshot) return; restoreClip(this.clip, snapshot); this.selected = null; this.changed(); }
  download() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(this.preview.document, null, 2)], { type: "application/json" }));
    const link = document.createElement("a"); link.href = url; link.download = "autec-edited.macroflush.json"; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  render() {
    const type = this.schema.type;
    const channels = type === "color" ? ["R", "G", "B"] : type === "vec2" ? ["X", "Y"] : type === "vec3" ? ["X", "Y", "Z"] : ["Value"];
    this.el.channel.replaceChildren(...channels.map((name, index) => { const option = document.createElement("option"); option.value = index; option.textContent = name; return option; }));
    this.el.channel.value = String(this.channel); this.el.channel.disabled = channels.length === 1 || this.view !== "curve";
    document.querySelector("#hero-param-label").textContent = `↳ ${this.param}`;
    const lane = this.el["key-lane"]; lane.querySelectorAll(".key-point,.empty-track").forEach(node => node.remove());
    for (const [index, key] of this.track.entries()) {
      const button = document.createElement("button"); button.type = "button"; button.className = "key-point"; button.dataset.key = this.id(key);
      button.style.left = `${(key.frame + this.clip.inFrame) / (this.composition.durationFrames - 1) * 100}%`;
      const gap = Math.min(index ? key.frame - this.track[index - 1].frame : Infinity, index < this.track.length - 1 ? this.track[index + 1].frame - key.frame : Infinity);
      button.style.width = `min(22px, ${Math.min(100, gap / (this.composition.durationFrames - 1) * 95)}%)`;
      button.setAttribute("aria-pressed", String(key === this.selected)); button.setAttribute("aria-label", `${this.param} key ${key.frame} frame`); button.title = `${key.frame} f / ${Array.isArray(key.value) ? key.value.join(", ") : key.value}`;
      button.append(document.createElement("span")); lane.append(button);
    }
    if (!this.track.length) { const hint = document.createElement("span"); hint.className = "empty-track"; hint.textContent = "＋ Keyで追加"; lane.append(hint); }
    this.renderCurve(channels); this.updateInspector(); this.tick(this.getTime());
  }
  renderCurve(channels) {
    const svg = this.el.curve; svg.replaceChildren();
    const [min, max] = this.valueRange();
    document.querySelector("#hero-value-max").textContent = Number(max.toFixed(2)); document.querySelector("#hero-value-min").textContent = Number(min.toFixed(2));
    const x = frame => (frame + this.clip.inFrame) / (this.composition.durationFrames - 1) * 1000;
    const y = value => 168 - (value - min) / (max - min) * 156;
    for (let i = 0; i < 5; i++) svg.append(svgNode("line", { x1: 0, x2: 1000, y1: 12 + i * 39, y2: 12 + i * 39, class: "curve-grid" }));
    const colors = this.schema.type === "color" ? ["#ff6c9a", "#72e4c4", "#5dd4ff"] : ["#5dd4ff", "#ff6c9a", "#ffdc63"];
    for (let channel = 0; channel < channels.length; channel++) {
      const track = this.track;
      const points = track.length ? [[0, componentValue(track[0].value, channel)], ...track.map(key => [x(key.frame), componentValue(key.value, channel)]), [1000, componentValue(track.at(-1).value, channel)]] : [[0, componentValue(this.schema.value, channel)], [1000, componentValue(this.schema.value, channel)]];
      const d = points.map(([px, value], index) => `${index ? "L" : "M"}${px.toFixed(2)},${y(value).toFixed(2)}`).join(" ");
      svg.append(svgNode("path", { d, class: "curve-path", stroke: colors[channel], opacity: channel === this.channel ? 1 : 0.32 }));
    }
    for (const [index, key] of this.track.entries()) {
      const px = x(key.frame); const py = y(componentValue(key.value, this.channel));
      const group = svgNode("g", { class: "curve-key", "data-key": this.id(key), role: "button", tabindex: 0, "aria-label": `${this.param} ${channels[this.channel]} key ${key.frame} frame`, "aria-pressed": key === this.selected });
      const gap = Math.min(index ? x(key.frame) - x(this.track[index - 1].frame) : Infinity, index < this.track.length - 1 ? x(this.track[index + 1].frame) - x(key.frame) : Infinity);
      const hitWidth = Math.min(44, gap * 0.95);
      group.append(svgNode("rect", { x: px - hitWidth / 2, y: py - 16, width: hitWidth, height: 32, class: "key-hit" }));
      group.append(svgNode("rect", { x: px - 5, y: py - 5, width: 10, height: 10, transform: `rotate(45 ${px} ${py})`, class: "key-dot" })); svg.append(group);
    }
  }
  updateInspector() {
    const selected = this.selected; const value = selected?.value ?? this.schema.value;
    const placeholder = document.createElement("option"); placeholder.value = ""; placeholder.textContent = "Key…";
    this.el["key-select"].replaceChildren(placeholder, ...this.track.map(key => { const option = document.createElement("option"); option.value = this.id(key); option.textContent = `${key.frame} f`; return option; }));
    this.el["key-select"].value = selected ? this.id(selected) : ""; this.el["key-select"].disabled = !this.track.length;
    this.el["key-frame"].disabled = !selected; this.el["key-frame"].max = this.clip.outFrame - this.clip.inFrame - 1;
    if (document.activeElement !== this.el["key-frame"]) this.el["key-frame"].value = selected?.frame ?? "";
    this.el["key-value"].hidden = this.schema.type === "color"; this.el["key-color"].hidden = this.schema.type !== "color";
    this.el["key-value"].disabled = this.el["key-color"].disabled = !selected && this.track.length > 0;
    this.el["key-value"].step = this.schema.step || 0.01;
    if (this.schema.type === "color") this.el["key-color"].value = value;
    else if (document.activeElement !== this.el["key-value"]) this.el["key-value"].value = componentValue(value, this.channel);
    this.el["delete-key"].disabled = !selected; this.el.undo.disabled = !this.history.length;
    this.el["edit-status"].textContent = selected ? `${this.param} / Key ${selected.frame} f · ドラッグで編集` : `${this.track.length} keys · ◆を選択 / ドラッグで移動`;
  }
  tick(time) {
    const frame = frameAtTime(time, this.composition.fps, this.composition.durationFrames);
    this.root.style.setProperty("--playhead", `${frame / (this.composition.durationFrames - 1) * 100}%`);
    const progress = document.querySelector("#hero-seek"); progress.disabled = false;
    updateProgress(progress, time, this.composition.fps, this.composition.durationFrames);
    document.querySelector("#hero-timecode").textContent = timecode(frame, this.composition.fps);
    document.querySelector("#hero-frame").textContent = `${frame} / ${this.composition.durationFrames - 1} f`;
  }
}
