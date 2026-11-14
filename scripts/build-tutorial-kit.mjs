import { readFile, writeFile, readdir, cp } from "node:fs/promises";
import { zip } from "./tutorial-archive.mjs";

export async function buildTutorialKit() {
  const folder = "dist/projects/tutorials/embed-player";
  await cp("vendor/player", `${folder}/player`, { recursive: true });
  await cp("src/tutorial-player-host.js", `${folder}/player-host.js`);
  const html = stage => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MacroFlush · ${stage === "start" ? "Starter" : "Web Player"}</title><style>
body{margin:0;background:#0c1019;color:#e6edf5;font:16px/1.6 system-ui}main{max-width:1050px;margin:32px auto;padding:0 20px}canvas{display:block;width:100%;height:auto;border:1px solid #30434f;background:#101622}button{background:#172830;color:#9fd5e9;border:1px solid #345562;padding:9px 18px;margin-right:8px;font:inherit;cursor:pointer}button:disabled{opacity:.4;cursor:default}button:focus-visible,input:focus-visible{outline:2px solid #ffdc63;outline-offset:4px}input{width:100%;accent-color:#5dd4ff}output{display:block;font:14px monospace;margin-top:12px}a{color:#5dd4ff}h1{font-size:25px}#controls{margin-top:20px}[hidden]{display:none!important}#status{color:#a5b2c6}
</style><script type="module" src="./player-host.js"></script></head><body data-stage="${stage}"><main><h1>MacroFlush / ${stage === "start" ? "Starter" : "Web Player"}</h1><canvas width="1280" height="720" aria-label="MacroFlush artwork"></canvas><div id="controls"><button id="play" disabled>Play</button><button id="pause" disabled>Pause</button><button id="reset" disabled>Reset</button><label for="seek">Seek frame</label><input id="seek" type="range" min="0" max="239" step="1" value="0" disabled></div><output id="time" aria-live="off">0 frames</output><p id="status" role="status">Loading artwork…</p><p><a href="./${stage === "start" ? "complete" : "start"}.html">Open ${stage === "start" ? "completed controls" : "starter page"}</a></p></main></body></html>`;
  for (const stage of ["start", "complete"]) await writeFile(`${folder}/${stage}.html`, html(stage));
  const readme = "MacroFlush Web Player tutorial kit\n\nServe this folder over HTTP, then open start.html or complete.html.\nIf Python is available: python3 -m http.server 8000\nPreserve the complete player/ folder, including licenses and dependencies.\nArtwork is original site-authored tutorial material. Player retains its own license notices.\nNo CDN, app checkout, build tools or external media are required.\n";
  await writeFile(`${folder}/WEB-KIT.txt`, readme);
  const entries = [];
  async function collect(dir, prefix = "") {
    for (const item of (await readdir(dir, { withFileTypes: true })).sort((a,b)=>a.name.localeCompare(b.name))) {
      if (item.name === "web-kit.zip") continue;
      const name = prefix + item.name;
      if (item.isDirectory()) await collect(`${dir}/${item.name}`, name + "/");
      else entries.push([name, await readFile(`${dir}/${item.name}`)]);
    }
  }
  await collect(folder); await writeFile(`${folder}/web-kit.zip`, zip(entries));
}
