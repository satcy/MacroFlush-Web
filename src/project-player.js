import { translate as t } from "./locale.js";
import { createClipPlayer } from "../player/macroflush-player.js";
import { frameAtTime } from "./timeline-model.js";

const projects = new Map();
export function loadProject(projectUrl) {
  const url = new URL(projectUrl, location.href);
  if (!projects.has(url.href)) {
    const request = fetch(url).then(response => {
      if (!response.ok) throw new Error(t(`Projectを読み込めません (${response.status})`));
      return response.json();
    }).catch(error => { projects.delete(url.href); throw error; });
    projects.set(url.href, request);
  }
  return projects.get(url.href);
}

export function getComposition(project) {
  if (project.clipFormatVersion === 1) return project;
  const root = project.assets?.find(asset => asset.kind === "composition" && asset.id === project.rootCompositionId);
  if (!root) throw new Error(t("Root Compositionが見つかりません"));
  return root.composition;
}

export class ProjectPreview {
  constructor(canvas, example, { fps = 20, onStatus = () => {}, onInvalidate = () => {}, editable = false } = {}) {
    this.canvas = canvas;
    this.example = example;
    this.fps = fps;
    this.onStatus = onStatus;
    this.onInvalidate = onInvalidate;
    this.editable = editable;
    this.destroyed = false;
    this.hasFrame = false;
    this.muted = true;
    this.mediaPlaying = false;
    this.blobUrls = [];
    this.abort = new AbortController();
    this.lastTick = -Infinity;
    this.duration = 12;
    this.host = document.createElement("div");
    this.host.className = "macroflush-runtime";
    document.body.append(this.host);
    this.mediaObserver = new MutationObserver(() => {
      this.setMuted(this.muted);
      if (!this.mediaPlaying) this.pauseHostMedia();
    });
    this.mediaObserver.observe(this.host, { childList: true, subtree: true });
    this.setStatus("loading", t("Projectを読み込み中…"));
    this.loading = this.initialize();
  }

  setStatus(state, text = "") {
    this.canvas.dataset.playerState = state;
    this.onStatus(state, text);
  }

  async initialize() {
    try {
      const source = await loadProject(this.example.projectUrl);
      if (this.destroyed) return;
      const project = structuredClone(source);
      this.document = project;
      const url = new URL(this.example.projectUrl, location.href);
      const composition = getComposition(project);
      this.duration = composition.durationFrames / composition.fps;
      this.composition = composition;
      this.tickFps = Math.min(60, composition.fps);
      // V2's runtime accepts local Blob URLs; assetBaseUrl resolves linked V3 sources.
      if (project.clipFormatVersion !== 3) {
        await Promise.all(project.assets.map(async asset => {
          if (!asset.sourceUrl || /^(data:|blob:)/.test(asset.sourceUrl)) return;
          const assetUrl = new URL(asset.sourceUrl, url);
          if (assetUrl.origin !== location.origin) throw new Error(t("外部のリンクメディアは使用できません"));
          const response = await fetch(assetUrl, { signal: this.abort.signal });
          if (!response.ok) throw new Error(t(`メディアを読み込めません: ${asset.sourceUrl}`));
          const blobUrl = URL.createObjectURL(await response.blob());
          this.blobUrls.push(blobUrl); asset.sourceUrl = blobUrl;
        }));
      }
      if (this.destroyed) { this.releaseBlobs(); return; }
      // The Player accepts a flat V1 runtime view. Keep the root Composition
      // objects shared so live keyframe edits reach its own evaluator without
      // remounting Clip iframes or resetting their running state.
      const runtimeProject = this.editable && project.clipFormatVersion === 2
        ? { ...composition, clipFormatVersion: 1, assets: project.assets, remoteAssetPolicy: project.remoteAssetPolicy }
        : project;
      this.runtimeProject = runtimeProject;
      this.player = createClipPlayer({
        project: runtimeProject, canvas: this.canvas, iframeHost: this.host, mediaPlaying: false,
        assetBaseUrl: new URL(".", url).href, frameTransferFps: this.fps,
        onError: error => this.fail(error),
        onComposite: () => {
          if (!this.destroyed && !this.failed && !this.hasFrame && this.player?.getStats().framesReceived > 0) {
            this.hasFrame = true; clearTimeout(this.startupTimeout);
            this.setStatus("ready");
          }
        }
      });
      this.onRuntimeFrame = event => {
        const capture = this.pendingCapture;
        if (!capture || event.data?.type !== "macroflush:frame"
          || ![...this.host.querySelectorAll("iframe")].some(iframe => iframe.contentWindow === event.source)) return;
        if (capture.phase === "neighbor" && event.data.compFrame === capture.neighbor) capture.phase = "target";
        else if (capture.phase === "target" && event.data.compFrame === capture.target) {
          this.dirty = false; this.pendingCapture = null;
        }
      };
      window.addEventListener("message", this.onRuntimeFrame);
      await this.player.ready;
      if (this.destroyed) return;
      // Effects allocate their input buffers at Composition resolution. Resizing
      // only the output canvas makes their input and output coordinates disagree.
      // Keep those projects at authored resolution and let CSS scale the preview.
      const width = composition.layers.some(layer => layer.kind === "effect" && layer.visible !== false) ? composition.width : 720;
      this.player.resize(width, Math.round(width * composition.height / composition.width));
      this.initialized = true;
      this.setMuted(this.muted);
      this.startupActiveMs = 0;
      this.onInvalidate();
    } catch (error) { if (!this.destroyed) this.fail(error); }
  }

  fail(error) {
    if (this.destroyed || this.failed) return;
    this.failed = true; clearTimeout(this.startupTimeout);
    this.setStatus("error", error.message || t("Playerの読み込みに失敗しました"));
    this.player?.destroy();
    this.pauseMedia();
    this.abort.abort(); this.releaseBlobs();
  }

  tick(time, playing, now) {
    if (!this.initialized || this.destroyed || this.failed) return;
    if (now - this.lastTick < 1000 / this.tickFps) return;
    if (!playing && this.hasFrame && this.lastTime !== time && !this.dirty) this.requestRender();
    if (!this.hasFrame) {
      this.startupActiveMs += Math.min(now - this.lastTick, 1000 / this.tickFps);
      if (this.startupActiveMs > 15000) { this.fail(new Error(t("Playerの描画が完了しませんでした"))); return; }
    }
    this.setPlaying(playing);
    if (!playing && this.hasFrame && this.lastTime === time && !this.dirty) return;
    this.lastTick = now;
    this.lastTime = time;
    try {
      if (!playing && this.hasFrame && this.dirty) {
        // The bundled runtime throttles transfers by timeline time, so repeated
        // ticks at a paused frame cannot replace its bitmap. Seek two frames
        // aside using the public Player API, then wait for a capture of the
        // requested frame. The iframe and running Clip state stay mounted.
        if (!this.pendingCapture) {
          const target = Math.min(this.composition.durationFrames - 1, Math.round(time % this.duration * this.composition.fps));
          this.pendingCapture = { target, neighbor: target >= 2 ? target - 2 : Math.min(target + 2, this.composition.durationFrames - 1), phase: "neighbor" };
        }
        this.player.tick(this.pendingCapture.phase === "neighbor" ? this.pendingCapture.neighbor : this.pendingCapture.target);
      } else {
        if (playing) { this.dirty = false; this.pendingCapture = null; }
        this.player.tick(frameAtTime(time, this.composition.fps, this.composition.durationFrames));
      }
    }
    catch (error) { this.fail(error); }
  }

  requestRender() {
    // The host caches evaluated parameters by layer-array identity and frame.
    // A new array invalidates same-frame values while retaining every mounted
    // layer, placement and iframe, so edits do not restart the Clip.
    if (this.editable && this.runtimeProject?.layers) this.runtimeProject.layers = [...this.runtimeProject.layers];
    this.dirty = true;
    this.pendingCapture = null;
    if (!this.destroyed) this.onInvalidate();
  }

  setPlaying(playing) {
    if (this.mediaPlaying === playing) return;
    this.mediaPlaying = playing;
    this.player?.setMediaPlaying(playing);
    if (!playing) this.pauseHostMedia();
  }
  pauseHostMedia() { this.host.querySelectorAll("audio,video").forEach(media => { if (!media.paused) media.pause(); }); }
  pauseMedia() { this.setPlaying(false); }
  setMuted(muted) { this.muted = muted; this.host.querySelectorAll("audio,video").forEach(media => { media.muted = muted; }); }
  releaseBlobs() { this.blobUrls.forEach(url => URL.revokeObjectURL(url)); this.blobUrls = []; }
  destroy() {
    if (this.destroyed) return;
    this.destroyed = true; clearTimeout(this.startupTimeout);
    this.abort.abort();
    this.player?.destroy(); this.mediaObserver.disconnect();
    if (this.onRuntimeFrame) window.removeEventListener("message", this.onRuntimeFrame);
    this.host.remove(); this.releaseBlobs();
  }
}
