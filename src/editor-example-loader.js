import { examples } from "./examples.js";
import { translate } from "./locale.js";

// The original Editor has a project-file importer, but no URL query API.
// Use that importer in a separate launch entry; do not change its distribution.
function launchRequest() {
  const own = new URLSearchParams(location.search);
  if (own.has("example")) return { id: own.get("example"), language: own.get("lang") || "ja" };
  try {
    if (parent !== window && parent.location.pathname.endsWith("/online-editor/")) {
      return { id: new URLSearchParams(parent.location.search).get("example"), language: parent.document.documentElement.lang };
    }
  } catch { /* A standalone launch does not need a parent document. */ }
  return {};
}

const request = launchRequest();
if (request.id !== undefined && request.id !== null) void openExample(request);

async function openExample({ id, language }) {
  const controller = new AbortController();
  window.addEventListener("pagehide", () => controller.abort(), { once: true });
  const status = document.createElement("div");
  status.setAttribute("role", "status");
  status.className = "macroflush-example-loading";
  status.style.cssText = "position:fixed;inset:0;z-index:2147483647;display:grid;place-content:center;gap:16px;padding:24px;background:#101114;color:#a9afb9;font:13px system-ui;text-align:center";
  const label = document.createElement("p"); status.append(label); document.body.append(status);
  const text = value => translate(value, language === "en" ? "en" : "ja");
  label.textContent = text("プロジェクトをEditorで開いています…");
  try {
    const example = examples.find(item => item.id === id);
    if (!example) throw new Error(text("このExampleは見つかりません。"));
    const response = await fetch(example.projectUrl, { signal: controller.signal });
    if (!response.ok) throw new Error(text("プロジェクトを読み込めませんでした。"));
    const fileName = `${example.id}.macroflush.json`;
    const file = new File([await response.blob()], fileName, { type: "application/json" });
    const input = await waitFor(() => document.querySelector('input[type="file"][accept="application/json,.json"]'), controller.signal);
    const transfer = new DataTransfer(); transfer.items.add(file); input.files = transfer.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
    const result = await waitFor(() => {
      const banner = document.querySelector(".project-status-banner");
      if (banner?.classList.contains("project-status-error")) return { error: banner.textContent };
      return banner?.textContent.includes(`Opened ${fileName}.`) ? { opened: true } : null;
    }, controller.signal);
    if (result.error) throw new Error(result.error);
    status.remove();
  } catch (error) {
    if (controller.signal.aborted) return;
    label.textContent = `${text("Editorでプロジェクトを開けませんでした。")} ${error.message}`;
    const retry = document.createElement("button"); retry.type = "button"; retry.textContent = text("再読み込み");
    retry.style.cssText = "justify-self:center;border:1px solid #345562;border-radius:2px;padding:9px 18px;background:#172830;color:#5dd4ff;cursor:pointer";
    retry.addEventListener("click", () => location.reload()); status.append(retry);
    console.error("Could not open Example in MacroFlush Editor", error);
  }
}

function waitFor(find, signal) {
  return new Promise((resolve, reject) => {
    const cleanup = () => { observer.disconnect(); clearTimeout(timer); signal.removeEventListener("abort", abort); };
    const abort = () => { cleanup(); reject(new DOMException("Editor launch aborted", "AbortError")); };
    const check = () => { const value = find(); if (value) { cleanup(); resolve(value); } };
    const observer = new MutationObserver(check);
    const timer = setTimeout(() => { cleanup(); reject(new Error("Editor startup timed out")); }, 20000);
    signal.addEventListener("abort", abort, { once: true });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
    if (signal.aborted) abort(); else check();
  });
}
