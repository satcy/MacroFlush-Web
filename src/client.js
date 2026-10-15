import { translate as t } from "./locale.js";
import { examples } from "./examples.js";
import { HeroEditor, updateProgress, timecode } from "./hero-editor.js";

// Keep the current Reference anchor when switching language.
function updateLanguageLinks() {
  document.querySelectorAll(".language-switch a").forEach(link => {
    const url = new URL(link.href); url.hash = location.hash; link.href = url.href;
  });
}
updateLanguageLinks();
window.addEventListener("hashchange", updateLanguageLinks);

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
let last = performance.now();
let runtime;
let disposed = false;
let heroTime = 0;
let heroPlaying = !reduceMotion.matches;
let heroEditor;
const getRuntime = () => runtime ??= import("./project-player.js");
const canvases = [...document.querySelectorAll("canvas[data-project]")].map(canvas => ({ canvas, card: canvas.closest(".demo-card"), observationTarget: canvas.closest(".hero-preview") || canvas, example: examples.find(e => e.id === canvas.dataset.project), visible: false, time: 0, warmed: false, hovered: false, keyboardFocus: false, running: false }));

function pauseCard(item) {
  if (!item.card) return;
  item.running = false;
  item.card.dataset.previewState = "paused";
  item.preview?.pauseMedia();
}
for (const item of canvases.filter(item => item.card)) {
  item.card.addEventListener("pointerenter", event => {
    if (event.pointerType !== "touch") item.hovered = true;
  });
  item.card.addEventListener("pointerleave", () => {
    if (item.hovered) item.warmed = true;
    item.hovered = false;
    if (!item.keyboardFocus) pauseCard(item);
  });
  item.card.addEventListener("focusin", event => {
    item.keyboardFocus = event.target.matches(":focus-visible");
  });
  item.card.addEventListener("focusout", event => {
    if (item.card.contains(event.relatedTarget)) return;
    if (item.keyboardFocus) item.warmed = true;
    item.keyboardFocus = false;
    if (!item.hovered) pauseCard(item);
  });
}

function tickCard(item, delta, now) {
  const preview = item.preview;
  if (!preview?.initialized || preview.failed) return;
  const posterTime = Math.min(15, preview.composition.durationFrames - 1) / preview.composition.fps;
  const interactive = !reduceMotion.matches && (item.hovered || item.keyboardFocus);
  // Wait for an actual bitmap before advancing this card's independent clock.
  if (!preview.hasFrame) {
    if (reduceMotion.matches) { item.time = posterTime; item.warmed = true; }
    preview.tick(item.time, false, now);
    return;
  }
  if (interactive || (!item.warmed && !reduceMotion.matches)) {
    item.time = interactive ? item.time + delta : Math.min(posterTime, item.time + delta);
    item.running = true;
    item.card.dataset.previewState = interactive ? "playing" : "warming";
    preview.tick(item.time, true, now);
    if (item.time >= posterTime) item.warmed = true;
    if (!interactive && item.warmed) pauseCard(item);
  } else if (item.running) pauseCard(item);
  // Leave the last captured bitmap in place: idle cards receive no more ticks.
}

function statusFor(canvas) {
  const surface = canvas.closest("[data-player-surface]");
  const label = surface.querySelector(".player-status");
  return (state, text) => { surface.dataset.state = state; label.textContent = text; label.hidden = state === "ready"; };
}
async function mount(item) {
  if (item.preview || item.loading) return;
  item.loading = true;
  try {
    const { ProjectPreview } = await getRuntime();
    if (disposed) return;
    const isHero = Boolean(item.canvas.closest(".hero-preview"));
    item.preview = new ProjectPreview(item.canvas, item.example, { fps: isHero ? 30 : 15, editable: isHero, onStatus: statusFor(item.canvas) });
    if (isHero) {
      await item.preview.loading;
      if (!disposed && !item.preview.failed) heroEditor = new HeroEditor({ preview: item.preview, root: document.querySelector("#hero-editor"), getTime: () => heroTime, seek: value => { heroTime = value; item.preview.requestRender(); }, pause: pauseHero });
    }
  } catch (error) { statusFor(item.canvas)("error", error.message); }
}
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const item = canvases.find(c => c.observationTarget === entry.target);
    if (!item) continue;
    item.visible = entry.isIntersecting;
    if (item.visible) mount(item); else { pauseCard(item); item.preview?.pauseMedia(); }
  }
}, { rootMargin: "80px" });
for (const item of canvases) observer.observe(item.observationTarget);

reduceMotion.addEventListener("change", e => {
  if (e.matches) { canvases.forEach(pauseCard); demoPlaying = false; pauseHero(); updateDemoPlay(); }
});
function updateHeroPlay() {
  const button = document.querySelector("#hero-play");
  if (button) { button.textContent = heroPlaying ? "Ⅱ" : "▷"; button.setAttribute("aria-label", heroPlaying ? t("デモを停止") : t("デモを再生")); }
}
function pauseHero() { heroPlaying = false; updateHeroPlay(); }
updateHeroPlay();
document.querySelector("#hero-play")?.addEventListener("click", () => { heroPlaying = !heroPlaying; updateHeroPlay(); });
document.querySelector("#hero-rewind")?.addEventListener("click", () => { pauseHero(); heroTime = 0; heroEditor?.preview.requestRender(); });
document.querySelector("#hero-seek")?.addEventListener("input", event => {
  pauseHero(); heroTime = Number(event.target.value) / (heroEditor?.composition.fps || 60); heroEditor?.preview.requestRender();
});

const dialog = document.querySelector("#demo-dialog");
const dialogCanvas = document.querySelector("#dialog-canvas");
const demoPlay = document.querySelector("#demo-play");
const speed = document.querySelector("#demo-speed");
const sourceClip = document.querySelector("#source-clip");
const sourceTab = document.querySelector("#source-tab");
const audioButton = document.querySelector("#demo-audio");
const demoSeek = document.querySelector("#demo-seek");
let selected = null;
let dialogPreview;
let generation = 0;
let demoTime = 0;
let demoPlaying = false;
let sources = [];

function updateDemoPlay() {
  demoPlay.textContent = demoPlaying ? "Ⅱ Pause" : "▷ Play";
  demoPlay.setAttribute("aria-label", demoPlaying ? t("作例を停止") : t("作例を再生"));
}
function showSource() {
  const asset = sources.find(a => a.id === sourceClip.value);
  document.querySelector("#demo-code").textContent = asset?.htmlTemplate?.source?.[sourceTab.value] || "";
}
sourceClip.addEventListener("change", showSource);
sourceTab.addEventListener("change", showSource);

async function mountDialog(token, example) {
  try {
    const { ProjectPreview, loadProject, getComposition } = await getRuntime();
    if (token !== generation || !dialog.open) return;
    const preview = new ProjectPreview(dialogCanvas, example, { fps: 30, onStatus: statusFor(dialogCanvas) });
    dialogPreview = preview;
    preview.setMuted(audioButton.getAttribute("aria-pressed") !== "true");
    const project = await loadProject(example.projectUrl);
    if (token !== generation || !dialog.open) return;
    const composition = getComposition(project);
    demoSeek.max = composition.durationFrames - 1; demoSeek.disabled = false;
    document.querySelector("#project-info").textContent = `${composition.width} × ${composition.height} · ${composition.fps} fps · ${(composition.durationFrames / composition.fps).toFixed(1)} sec`;
    sources = project.assets.filter(a => a.kind === "html-clip");
    sourceClip.replaceChildren(...sources.map(asset => {
      const option = document.createElement("option"); option.value = asset.id; option.textContent = asset.name; return option;
    }));
    showSource();
  } catch (error) { if (token === generation) statusFor(dialogCanvas)("error", error.message); }
}
function openDemo(id) {
  const example = examples.find(e => e.id === id);
  if (!example) return;
  dialogPreview?.destroy(); dialogPreview = null;
  selected = example; demoTime = 0; demoPlaying = !reduceMotion.matches; speed.value = "1";
  sources = []; sourceClip.replaceChildren(); sourceTab.value = "js";
  audioButton.setAttribute("aria-pressed", "false"); audioButton.textContent = "Sound off";
  document.querySelector("#demo-code").textContent = "";
  document.querySelector("#speed-output").textContent = "1.0×";
  document.querySelector("#demo-title").textContent = selected.title;
  document.querySelector("#demo-description").textContent = t(selected.description);
  document.querySelector("#project-info").textContent = "";
  demoSeek.value = "0"; demoSeek.disabled = true; demoSeek.style.setProperty("--progress", "0%");
  document.querySelector("#demo-download").href = selected.projectUrl;
  const editorUrl = new URL(document.documentElement.lang === "en" ? "../en/online-editor/" : "../online-editor/", import.meta.url);
  editorUrl.searchParams.set("example", selected.id);
  document.querySelector("#demo-editor").href = editorUrl.href;
  dialogCanvas.width = 720;
  statusFor(dialogCanvas)("loading", t("Projectを読み込み中…"));
  updateDemoPlay(); dialog.showModal();
  canvases.forEach(item => { pauseCard(item); item.preview?.pauseMedia(); });
  void mountDialog(++generation, example);
}
document.querySelectorAll("[data-demo]").forEach(button => button.addEventListener("click", () => openDemo(button.dataset.demo)));
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => {
  if (e.target === dialog) { const rect = dialog.getBoundingClientRect(); if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close(); }
});
dialog.addEventListener("close", () => { generation++; dialogPreview?.destroy(); dialogPreview = null; selected = null; demoPlaying = false; });
demoPlay.addEventListener("click", () => { demoPlaying = !demoPlaying; updateDemoPlay(); if (!demoPlaying) dialogPreview?.pauseMedia(); });
document.querySelector("#demo-reset").addEventListener("click", () => {
  demoTime = 0; dialogPreview?.destroy(); dialogPreview = null;
  statusFor(dialogCanvas)("loading", t("Projectを読み込み中…"));
  if (selected) void mountDialog(++generation, selected);
});
speed.addEventListener("input", () => { document.querySelector("#speed-output").textContent = `${Number(speed.value).toFixed(1)}×`; });
demoSeek.addEventListener("input", () => {
  demoPlaying = false; demoTime = Number(demoSeek.value) / (dialogPreview?.composition?.fps || 60);
  updateDemoPlay(); dialogPreview?.requestRender(); dialogPreview?.pauseMedia();
});
audioButton.addEventListener("click", () => {
  const enabled = audioButton.getAttribute("aria-pressed") !== "true";
  audioButton.setAttribute("aria-pressed", String(enabled)); audioButton.textContent = enabled ? "Sound on" : "Sound off";
  dialogPreview?.setMuted(!enabled);
});

let animation;
function frame(now) {
  const delta = Math.min((now - last) / 1000, 0.1); last = now;
  if (!document.hidden) {
    if (dialog.open && selected) {
      if (demoPlaying) demoTime += delta * Number(speed.value);
      dialogPreview?.tick(demoTime, demoPlaying, now);
      if (dialogPreview?.composition) {
        const composition = dialogPreview.composition;
        const frame = updateProgress(demoSeek, demoTime, composition.fps, composition.durationFrames);
        document.querySelector("#demo-timecode").textContent = timecode(frame, composition.fps);
      }
    } else {
      for (const item of canvases) {
        if (item.visible && !item.canvas.closest("[hidden]")) {
          if (item.canvas.closest(".hero-preview")) {
            if (heroPlaying && item.preview?.hasFrame) heroTime += delta;
            item.preview?.tick(heroTime, heroPlaying, now); heroEditor?.tick(heroTime);
          } else tickCard(item, delta, now);
        }
        else if (item.card) { if (item.running) pauseCard(item); }
        else item.preview?.pauseMedia();
      }
    }
  }
  animation = requestAnimationFrame(frame);
}
if (canvases.length) animation = requestAnimationFrame(frame);
document.addEventListener("visibilitychange", () => {
  last = performance.now();
  if (document.hidden) { canvases.forEach(item => { pauseCard(item); item.preview?.pauseMedia(); }); dialogPreview?.pauseMedia(); }
});
window.addEventListener("pagehide", () => {
  disposed = true; cancelAnimationFrame(animation); observer.disconnect(); generation++;
  canvases.forEach(item => item.preview?.destroy()); dialogPreview?.destroy();
});
window.addEventListener("pageshow", event => { if (event.persisted) location.reload(); });
let toastTimer;
function toast(message) { const el = document.querySelector(".toast"); el.textContent = message; el.classList.add("visible"); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("visible"), 2500); }
document.querySelectorAll(".copy-button").forEach(button => button.addEventListener("click", async () => {
  const code = button.closest(".code-block").querySelector("code").textContent;
  try { await navigator.clipboard.writeText(code); button.textContent = "Copied ✓"; toast(t("コードをコピーしました")); }
  catch { const selection = getSelection(); const range = document.createRange(); range.selectNodeContents(button.closest(".code-block").querySelector("code")); selection.removeAllRanges(); selection.addRange(range); button.textContent = "⌘ / Ctrl + C"; toast(t("コードを選択しました。⌘ / Ctrl + Cでコピーしてください")); }
  setTimeout(() => { button.textContent = "Copy"; }, 2500);
}));
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach(b => b.setAttribute("aria-pressed", String(b === button)));
  let count = 0;
  document.querySelectorAll(".examples-grid .demo-card").forEach(card => { card.hidden = button.dataset.filter !== "All" && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  document.querySelector("#example-count").textContent = `${count} EXAMPLES`;
}));
const search = document.querySelector("#reference-search");
if (search) {
  document.querySelectorAll('.docs-sidebar nav a').forEach(link => link.addEventListener('click', () => {
    if (search.value) { search.value = ""; search.dispatchEvent(new Event("input")); }
  }));
  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    document.querySelectorAll(".api-entry").forEach(entry => { entry.hidden = !entry.dataset.search.includes(query); if (!entry.hidden) count++; });
    document.querySelectorAll(".api-group").forEach(group => { group.hidden = ![...group.querySelectorAll(".api-entry")].some(entry => !entry.hidden); });
    document.querySelector("#search-result").textContent = query ? (count ? t("{count}件のAPIが見つかりました", undefined, { count }) : t("該当するAPIが見つかりません。別のキーワードをお試しください。")) : "";
  });
  document.addEventListener("keydown", e => { if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { e.preventDefault(); search.focus(); } });
}
