import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { SourceTextModule, SyntheticModule, createContext } from "node:vm";

// Run the actual client with a controlled browser clock and Player boundary.
// This verifies that sleeping also wakes correctly after real UI/lifecycle events.
class Element {
  constructor() {
    this.listeners = new Map(); this.dataset = {}; this.attributes = new Map();
    this.style = { setProperty() {} }; this.value = "0"; this.textContent = "";
    this.hidden = false; this.open = false; this.classList = { add() {}, remove() {} };
  }
  addEventListener(type, listener) {
    const listeners = this.listeners.get(type) || [];
    listeners.push(listener); this.listeners.set(type, listeners);
  }
  removeEventListener(type, listener) { this.listeners.set(type, (this.listeners.get(type) || []).filter(item => item !== listener)); }
  fire(type, props = {}) { for (const listener of this.listeners.get(type) || []) listener({ target: this, ...props }); }
  setAttribute(key, value) { this.attributes.set(key, value); }
  getAttribute(key) { return this.attributes.get(key); }
  replaceChildren() {}
  contains(node) { return node === this; }
  matches() { return true; }
  closest(selector) { return this.parents?.[selector] || null; }
  querySelector() { return this.label; }
  querySelectorAll() { return []; }
  showModal() { this.open = true; }
  close() { this.open = false; this.fire("close"); }
  remove() { this.removed = true; }
}
const flush = () => new Promise(resolve => setImmediate(resolve));
const composition = { width: 1280, height: 720, fps: 60, durationFrames: 480 };

async function setup({ reduced = false, sourcePath = "src/client.js" } = {}) {
  let now = 0, nextId = 0, observer, deferred;
  const frames = new Map(), previews = [], imported = [];
  const document = new Element(), window = new Element(), motion = new Element();
  motion.matches = reduced;
  const ids = new Map();
  const node = id => { if (!ids.has(id)) ids.set(id, new Element()); return ids.get(id); };
  const dialog = node("#demo-dialog");
  node("#demo-speed").value = "1";
  const cards = ["a", "b"].map(id => {
    const card = new Element(), canvas = new Element(), button = new Element(), surface = new Element();
    card.dataset.category = id;
    canvas.dataset.project = id;
    canvas.parents = { ".demo-card": card, "[data-player-surface]": surface };
    surface.label = new Element(); button.dataset.demo = id;
    return { card, canvas, button };
  });
  const dialogSurface = new Element(); dialogSurface.label = new Element();
  node("#dialog-canvas").parents = { "[data-player-surface]": dialogSurface };
  const filters = ["All", "a", "b"].map(value => { const element = new Element(); element.dataset.filter = value; return element; });
  document.documentElement = { lang: "ja" };
  document.querySelector = selector => ["#reference-search", "#hero-play", "#hero-rewind", "#hero-seek"].includes(selector) ? null : node(selector);
  document.querySelectorAll = selector => ({
    "canvas[data-project]": cards.map(card => card.canvas),
    "[data-demo]": cards.map(card => card.button),
    "[data-filter]": filters,
    ".examples-grid .demo-card": cards.map(card => card.card)
  })[selector] || [];
  document.createElement = () => new Element();
  class Preview {
    constructor(canvas, example, options) {
      Object.assign(this, { canvas, example, options, composition, duration: 8, ticks: [] });
      this.loading = Promise.resolve().then(() => { if (!this.destroyed) { this.initialized = true; options.onInvalidate?.(); } });
      previews.push(this);
    }
    tick(time, playing) {
      this.ticks.push({ time, playing });
      if (!this.hasFrame) { this.hasFrame = true; this.options.onStatus("ready", ""); }
      if (this.dirty && --this.remainingCaptures === 0) this.dirty = false;
    }
    requestRender() { this.dirty = true; this.remainingCaptures = 3; this.options.onInvalidate?.(); }
    pauseMedia() {}
    setMuted() {}
    destroy() { this.destroyed = true; }
  }
  const context = createContext({
    document, window, URL, location: new URL("https://example.test/examples/"),
    performance: { now: () => now }, matchMedia: () => motion,
    requestAnimationFrame: callback => { const id = ++nextId; frames.set(id, callback); return id; },
    cancelAnimationFrame: id => frames.delete(id),
    IntersectionObserver: class {
      constructor(callback) { observer = callback; }
      observe() {} disconnect() { observer = null; }
    },
    setTimeout, clearTimeout
  });
  const modules = new Map();
  function synthetic(path, exports) {
    const module = new SyntheticModule(Object.keys(exports), function () {
      for (const [key, value] of Object.entries(exports)) this.setExport(key, value);
    }, { context });
    modules.set(path, module); return module;
  }
  synthetic("locale.js", { translate: text => text });
  synthetic("examples.js", { examples: cards.map(({ canvas }) => ({ id: canvas.dataset.project, title: canvas.dataset.project, projectUrl: `https://example.test/projects/${canvas.dataset.project}/project.json` })) });
  synthetic("project-player.js", { ProjectPreview: Preview, loadProject: async () => ({ assets: [] }), getComposition: () => composition });
  const timeline = new SourceTextModule(await readFile("src/timeline-model.js", "utf8"), { context });
  modules.set("timeline-model.js", timeline);
  const playback = new SourceTextModule(await readFile("src/playback-ui.js", "utf8"), { context });
  modules.set("playback-ui.js", playback);
  synthetic("hero-editor.js", {
    HeroEditor: class {},
    // Legacy exports allow the same harness to measure the previous client.
    updateProgress: (input, time) => Math.floor(time * composition.fps) % composition.durationFrames,
    timecode: frame => String(frame)
  });
  const link = specifier => { imported.push(specifier); return modules.get(specifier.replace("./", "")); };
  const module = new SourceTextModule(await readFile(sourcePath, "utf8"), {
    context,
    initializeImportMeta: meta => { meta.url = "https://example.test/assets/client.js"; },
    importModuleDynamically: async specifier => {
      imported.push(specifier);
      if (deferred) await deferred.promise;
      const dependency = link(specifier);
      if (dependency.status === "unlinked") await dependency.link(link);
      if (dependency.status !== "evaluated") await dependency.evaluate();
      return dependency;
    }
  });
  await module.link(link); await module.evaluate();
  return {
    cards, node, dialog, filters, motion, previews, document, window, frames, imported,
    intersect(index, visible) { observer([{ target: cards[index].canvas, isIntersecting: visible }]); },
    step(count = 1) {
      let executed = 0;
      for (let i = 0; i < count; i++) {
        now += 1000 / 60;
        const queued = [...frames.values()]; frames.clear();
        for (const callback of queued) { callback(now); executed++; }
      }
      return executed;
    },
    deferImports() {
      let resolve; const promise = new Promise(done => { resolve = done; });
      deferred = { promise }; return () => { deferred = null; resolve(); };
    }
  };
}

if (process.env.PREVIEW_BASELINE) {
  const app = await setup({ sourcePath: process.env.PREVIEW_BASELINE });
  app.intersect(0, true); await flush(); app.step(60);
  console.log(`Idle animation callbacks over 10 simulated seconds: ${app.step(600)}`);
} else {
  const app = await setup();
  app.intersect(0, true); await flush(); app.step(60);
  assert.equal(app.previews.length, 1, "Only visible cards should create Players");
  const card = app.previews[0], posterTicks = card.ticks.length;
  assert.equal(app.step(600), 0, "Idle cards must not keep requesting animation frames");
  assert.equal(card.ticks.length, posterTicks, "Idle cards must not tick Players");
  assert.equal(app.frames.size, 0);
  assert(!app.imported.includes("./hero-editor.js"), "Examples must not load the Top editor");

  app.cards[0].card.fire("pointerenter", { pointerType: "mouse" }); app.step(12);
  assert(card.ticks.at(-1).time > card.ticks[posterTicks - 1].time, "Hover must wake playback");
  app.cards[0].card.fire("pointerleave"); app.step(2);
  const pausedTime = card.ticks.at(-1).time;
  assert.equal(app.step(120), 0);
  app.cards[0].card.fire("focusin", { target: app.cards[0].button }); app.step(3);
  assert(card.ticks.at(-1).time > pausedTime, "Keyboard focus must resume the saved time");
  app.intersect(0, false); app.step(2);
  assert.equal(app.step(120), 0, "Offscreen cards must sleep even while focused");
  app.intersect(0, true); app.step(2);
  app.filters[2].fire("click"); app.step(2);
  assert.equal(app.step(120), 0, "Filtered cards must sleep");
  app.cards[0].card.fire("focusout");
  app.filters[0].fire("click"); app.step(2);
  assert.equal(app.previews.length, 1, "Filtering must reuse the existing Player");

  app.cards[0].button.fire("click"); await flush(); app.step(6);
  const preview = app.previews.at(-1);
  app.node("#demo-play").fire("click"); app.step(2);
  assert.equal(app.step(120), 0, "Paused dialogs must sleep");
  app.node("#demo-seek").value = "240"; app.node("#demo-seek").fire("input"); app.step(6);
  assert.equal(preview.ticks.at(-1).time, 4, "Seeking must wake and render the requested frame");
  assert.equal(preview.dirty, false, "Paused captures must finish before sleeping");
  assert.equal(app.step(120), 0);
  app.node("#demo-play").fire("click"); app.step(6);
  app.node("#demo-speed").value = "0"; app.node("#demo-speed").fire("input"); app.step(2);
  assert.equal(preview.ticks.at(-1).playing, false, "Zero speed must pause media as well as the clock");
  assert.equal(app.step(120), 0, "Zero speed must sleep");
  app.node("#demo-speed").value = "1"; app.node("#demo-speed").fire("input"); app.step(6);
  assert(preview.ticks.at(-1).playing, "Increasing speed must wake playback");
  app.document.hidden = true; app.document.fire("visibilitychange");
  assert.equal(app.step(120), 0, "A background tab must cancel its scheduled frame");
  app.document.hidden = false; app.document.fire("visibilitychange"); app.step(6);
  assert(app.frames.size > 0, "Playback must resume when the tab becomes visible");
  app.dialog.close(); app.step(2);
  assert(preview.destroyed, "Close must release the dialog Player");
  assert.equal(app.step(120), 0);
  app.window.fire("pagehide");
  assert(app.previews.every(item => item.destroyed));
  assert.equal(app.frames.size, 0);

  const reduced = await setup({ reduced: true });
  reduced.intersect(0, true); await flush(); reduced.step(60);
  const reducedTicks = reduced.previews[0].ticks.length;
  reduced.cards[0].card.fire("pointerenter", { pointerType: "mouse" }); reduced.step(60);
  assert.equal(reduced.previews[0].ticks.length, reducedTicks, "Reduced motion must keep the poster still");
  assert.equal(reduced.frames.size, 0);
  reduced.cards[0].button.fire("click"); await flush(); reduced.step(60);
  assert.equal(reduced.frames.size, 0, "Reduced-motion dialogs must start paused");
  reduced.node("#demo-play").fire("click"); reduced.step(6);
  assert(reduced.frames.size > 0, "Explicit Play must work with reduced motion");
  reduced.window.fire("pagehide");

  const delayed = await setup();
  const release = delayed.deferImports(); delayed.intersect(0, true);
  delayed.filters[2].fire("click"); release(); await flush(); delayed.step(2);
  assert.equal(delayed.previews.length, 0, "Hidden cards must not mount after a delayed import");
  delayed.filters[0].fire("click"); await flush(); delayed.step(60);
  assert.equal(delayed.previews.length, 1, "A skipped mount must retry when shown");
  delayed.window.fire("pagehide");
  console.log("Verified preview sleep/wake, retained card time, filtering, paused seeking, reduced motion, background tabs, delayed mounting, and disposal; idle animation callbacks: 0.");

  // Exercise the real wrapper's media transitions and async disposal as well.
  let queryCount = 0, options, created = 0, invalidations = 0, cloneCount = 0, resolveFetch;
  const mediaStates = [];
  const media = { paused: false, pause() { this.paused = true; } };
  const document = { body: { append() {} }, createElement() {
    const host = new Element();
    host.querySelectorAll = () => { queryCount++; return [media]; };
    return host;
  } };
  const player = { ready: Promise.resolve(), resize() {}, tick() {}, setMediaPlaying(state) { mediaStates.push(state); }, destroy() {}, getStats: () => ({ framesReceived: 1 }) };
  const context = createContext({
    document, window: new Element(), URL, location: new URL("https://example.test/examples/"),
    AbortController, setTimeout, clearTimeout,
    structuredClone: value => { cloneCount++; return structuredClone(value); },
    fetch: async () => {
      if (resolveFetch !== undefined) await new Promise(resolve => { resolveFetch = resolve; });
      return { ok: true, json: async () => ({ clipFormatVersion: 2, rootCompositionId: "root", assets: [{ id: "root", kind: "composition", composition: { ...composition, layers: [] } }] }) };
    },
    MutationObserver: class { observe() {} disconnect() {} }
  });
  const boundary = new SyntheticModule(["createClipPlayer", "translate", "frameAtTime"], function () {
    this.setExport("createClipPlayer", value => { options = value; created++; return player; });
    this.setExport("translate", value => value);
    this.setExport("frameAtTime", (time, fps, duration) => Math.floor(time * fps) % duration);
  }, { context });
  const wrapper = new SourceTextModule(await readFile("src/project-player.js", "utf8"), { context });
  await wrapper.link(() => boundary); await wrapper.evaluate();
  const previewWrapper = new wrapper.namespace.ProjectPreview(new Element(), { projectUrl: "/project.json" }, { onInvalidate: () => invalidations++ });
  await previewWrapper.loading;
  assert.equal(invalidations, 1, "Initialization must wake the client");
  assert.equal(options.mediaPlaying, false, "New Players must start with media paused");
  options.onComposite();
  previewWrapper.tick(0, true, 0); previewWrapper.tick(1 / 60, true, 20);
  previewWrapper.pauseMedia();
  assert.deepEqual(mediaStates, [true, false], "Media state should change only on play/pause transitions");
  assert(media.paused);
  const queriesAfterPause = queryCount;
  for (let i = 1; i <= 120; i++) previewWrapper.tick(1 / 60, false, 20 + i * 20);
  assert.equal(queryCount, queriesAfterPause, "Paused same-frame ticks must not rescan media");
  previewWrapper.destroy();

  resolveFetch = null;
  const canceled = new wrapper.namespace.ProjectPreview(new Element(), { projectUrl: "/delayed.json" });
  canceled.destroy(); const clonesBefore = cloneCount;
  resolveFetch(); await canceled.loading;
  assert.equal(created, 1, "A closed preview must not create a delayed Player");
  assert.equal(cloneCount, clonesBefore, "A closed preview must not clone its delayed project");
  console.log("Verified Player media transitions, initialization wakeup, paused media scans, and canceled-load disposal.");
}
