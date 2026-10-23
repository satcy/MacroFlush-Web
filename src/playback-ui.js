import { frameAtTime } from "./timeline-model.js";

const progressStates = new WeakMap();
export function updateProgress(input, time, fps, durationFrames) {
  const frame = frameAtTime(time, fps, durationFrames);
  const value = String(frame);
  if (document.activeElement !== input && input.value !== value) input.value = value;
  const previous = progressStates.get(input);
  if (!previous || previous.frame !== frame || previous.fps !== fps || previous.durationFrames !== durationFrames) {
    input.style.setProperty("--progress", `${frame / Math.max(1, durationFrames - 1) * 100}%`);
    input.setAttribute("aria-valuetext", `${frame} frame / ${(frame / fps).toFixed(2)} sec`);
    progressStates.set(input, { frame, fps, durationFrames });
  }
  return frame;
}

export function timecode(frame, fps) {
  const seconds = Math.floor(frame / fps);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}:${String(frame % fps).padStart(2, "0")}`;
}
