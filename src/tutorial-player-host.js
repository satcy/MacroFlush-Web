import { createClipPlayer } from "./player/macroflush-player.js";

const canvas = document.querySelector("canvas");
const play = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const seek = document.querySelector("#seek");
const output = document.querySelector("#time");
const status = document.querySelector("#status");
const starter = document.body.dataset.stage === "start";
let player, playing = false, time = 0, previous = 0, raf = 0, disposed = false;

try {
  const url = new URL(starter ? "./start.json" : "./complete.json", import.meta.url);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Project download failed: ${response.status}`);
  const project = await response.json();
  const composition = project.assets.find(asset => asset.id === project.rootCompositionId)?.composition;
  if (!composition) throw new Error("Missing root Composition");
  const { fps, durationFrames, width, height } = composition;
  canvas.width = width; canvas.height = height;
  const duration = durationFrames / fps;
  seek.max = String(durationFrames - 1);
  player = createClipPlayer({ project, canvas, assetBaseUrl: new URL(".", url).href,
    onError: error => { stop(); status.textContent = error.message; } });
  await player.ready;
  if (disposed) { player.destroy(); }
  else {
    const draw = () => {
      const frame = Math.min(durationFrames - 1, Math.max(0, Math.floor(time * fps + 1e-7)));
      // Quantize once so the Player, slider and displayed frame agree.
      player.tickTime(frame / fps);
      seek.value = String(frame);
      output.textContent = `${frame} / ${durationFrames - 1} frames · ${(frame / fps).toFixed(2)} s`;
    };
    const animate = now => {
      raf = 0;
      if (!playing || disposed) return;
      time = (time + Math.max(0, now - previous) / 1000) % duration;
      previous = now; draw(); raf = requestAnimationFrame(animate);
    };
    play.addEventListener("click", () => {
      if (playing || disposed) return;
      playing = true; previous = performance.now(); status.textContent = "Playing"; updateButtons(); raf = requestAnimationFrame(animate);
    });
    pauseButton.addEventListener("click", stop);
    reset.addEventListener("click", () => { stop(); time = 0; draw(); });
    seek.addEventListener("input", () => {
      stop(); const frame = Math.min(durationFrames - 1, Math.max(0, Math.trunc(Number(seek.value))));
      time = frame / fps; draw();
    });
    document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); });
    document.querySelector("#controls").hidden = starter;
    status.textContent = starter ? "Starter: frame 0 drawn once. Open complete.html for controls." : "Ready · paused";
    seek.disabled = false; reset.disabled = false; updateButtons(); draw();
  }
} catch (error) { status.textContent = `Unable to open artwork: ${error.message}`; }

function updateButtons() { play.disabled = !player || playing; pauseButton.disabled = !player || !playing; }
function stop() {
  playing = false; cancelAnimationFrame(raf); raf = 0;
  player?.setMediaPlaying(false); updateButtons();
  if (player && !starter) status.textContent = "Paused";
}
window.addEventListener("pagehide", () => { disposed = true; stop(); player?.destroy(); }, { once: true });
