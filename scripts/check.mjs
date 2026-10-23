import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { build } from "./build.mjs";
import { examples } from "../src/examples.js";
import { api, groups, lessons } from "../src/content.js";
import { getBasePath } from "./site-path.mjs";
import { apiDescriptions, groupDescriptions, lessonTranslations } from "../src/content-en.js";
import { translate } from "../src/locale.js";

await build();
const root = resolve("dist");
const basePath = getBasePath();
const { examples: builtExamples } = await import("../dist/assets/examples.js");
async function files(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) found.push(...await files(path)); else found.push(path);
  }
  return found;
}
const htmlFiles = (await files(root)).filter(file => file.endsWith(".html") && !file.startsWith(resolve(root, "editor") + "/"));
assert.equal(htmlFiles.length, 2 * (6 + lessons.length) + 1, "Missing localized pages");
assert.equal(new Set(api.map(entry => entry.id)).size, api.length);
for (const group of groups) assert(groupDescriptions[group.id], `Missing English group: ${group.id}`);
for (const lesson of lessons) {
  const english = lessonTranslations[lesson.id];
  assert(english?.title && english.summary, `Missing English tutorial: ${lesson.id}`);
  assert.equal(english.steps.length, lesson.steps.length);
  for (const step of english.steps) assert(step.title && step.text);
}
for (const entry of api) {
  assert(groups.some(group => group.id === entry.group));
  assert(apiDescriptions[entry.id], `Missing English API: ${entry.id}`);
  if (entry.code && entry.language !== "glsl" && entry.group !== "player" && !entry.label?.startsWith("set_clip")) {
    assert.doesNotThrow(() => new Function(entry.code), `Invalid Reference snippet: ${entry.id}`);
    assert.doesNotThrow(() => new Function(translate(entry.code, "en")), `Invalid English Reference snippet: ${entry.id}`);
  }
}
for (const example of examples) {
  assert(!/[\u3040-\u30ff\u3400-\u9fff]/.test(translate(example.description, "en")), `Missing English example: ${example.id}`);
}
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate ID in ${file}`);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^https?:/.test(url)) continue;
    if (url.startsWith("#")) { assert(ids.includes(url.slice(1)), `Missing anchor ${url} in ${file}`); continue; }
    if (url.startsWith("/")) assert(url.startsWith(basePath), `URL outside site base path: ${url}`);
    const resourcePath = url.split(/[?#]/)[0];
    const path = url.startsWith("/") ? resolve(root, resourcePath.slice(basePath.length)) : resolve(dirname(file), resourcePath);
    assert(path.startsWith(root), `Path escapes output: ${url}`);
    assert(await stat(path), `Missing local target ${url} in ${file}`);
  }
  if (!file.endsWith("404.html")) {
    const english = file.startsWith(resolve(root, "en") + "/");
    assert(html.includes(`<html lang="${english ? "en" : "ja"}">`));
    if (english) assert(!/[\u3040-\u30ff\u3400-\u9fff]/.test(html), `Untranslated English page: ${file}`);
    if (file.endsWith("/online-editor/index.html")) {
      assert(!html.includes('class="site-header"') && !html.includes('online-editor-toolbar'), "OnlineEditor must show only the Editor");
      continue;
    }
    assert.equal((html.match(/aria-current="page"/g) || []).length, file.includes("/tutorials/") && !file.endsWith("/tutorials/index.html") ? 2 : 1);
    const pagePath = "/" + relative(english ? resolve(root, "en") : root, file).replace(/index\.html$/, "");
    const switches = html.match(/<nav class="language-switch"[^>]*>(.*?)<\/nav>/)?.[1];
    assert(switches, `Missing language switch: ${file}`);
    assert(switches.includes(`href="${basePath}${pagePath.slice(1)}" lang="ja"`));
    assert(switches.includes(`href="${basePath}en${pagePath}" lang="en"`));
    assert.equal((switches.match(/aria-current="true"/g) || []).length, 1);
    const navigation = html.match(/<nav class="main-nav"[^>]*>(.*?)<\/nav>/)?.[1];
    for (const [, url] of navigation.matchAll(/href="([^"]+)"/g)) {
      assert(url.startsWith(basePath + (english ? "en/" : "")));
      if (!english) assert(!url.startsWith(basePath + "en/"));
    }
  }
}
const provenance = JSON.parse(await readFile("vendor/provenance.json", "utf8"));
assert.equal(createHash("sha256").update(await readFile("vendor/player/macroflush-player.js")).digest("hex"), provenance.playerSha256);
assert.equal(await readFile("dist/player/macroflush-player.js", "utf8"), await readFile("vendor/player/macroflush-player.js", "utf8"));
const editorProvenance = JSON.parse(await readFile("vendor/editor-provenance.json", "utf8"));
assert(editorProvenance.files["index.html"], "Missing original Editor entry");
for (const [path, hash] of Object.entries(editorProvenance.files)) {
  const source = resolve("vendor/editor", path);
  const output = resolve(root, "editor", path);
  assert(output.startsWith(resolve(root, "editor") + "/"));
  for (const file of [source, output]) assert.equal(createHash("sha256").update(await readFile(file)).digest("hex"), hash, `Changed Editor distribution: ${file}`);
}
const editorHtml = await readFile(resolve(root, "editor/index.html"), "utf8");
for (const [, url] of editorHtml.matchAll(/(?:href|src)="([^"]+)"/g)) {
  const deployed = new URL(url, `https://satcy.github.io${basePath}editor/index.html`);
  assert(deployed.pathname.startsWith(basePath + "editor/"), `Editor resource escapes its directory: ${url}`);
  assert(await stat(resolve(root, deployed.pathname.slice(basePath.length))));
}
for (const language of ["", "en/"]) {
  const html = await readFile(resolve(root, language, "online-editor/index.html"), "utf8");
  assert(html.includes(`src="${basePath}editor/launcher.html"`), "Invalid embedded Editor URL");
  const top = await readFile(resolve(root, language, "index.html"), "utf8");
  assert(top.includes(`class="button primary" href="${basePath}${language}online-editor/"`), "Get started must open the Editor");
  const exampleHtml = await readFile(resolve(root, language, "examples/index.html"), "utf8");
  for (const example of examples) assert(exampleHtml.includes(`href="${basePath}${language}online-editor/?example=${example.id}"`), `Missing Editor link: ${example.id}`);
}
const launcher = await readFile(resolve(root, "editor/launcher.html"), "utf8");
assert.equal(launcher.replace('<script type="module" src="../assets/editor-example-loader.js"></script>', ""), editorHtml, "Launcher must preserve the original Editor entry");
// Resolve browser module imports and CSS resources under the deployed prefix.
for (const file of (await files(resolve(root, "assets"))).filter(file => /\.(js|css)$/.test(file))) {
  const source = await readFile(file, "utf8");
  const relative = file.slice(root.length + 1);
  const deployedUrl = new URL(basePath + relative, "https://satcy.github.io");
  const urls = file.endsWith(".js")
    ? [...source.matchAll(/(?:from\s+|import\s*\()(["'])(\.[^"']+)\1/g)].map(match => match[2])
    : [...source.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)].map(match => match[1]);
  for (const url of urls) {
    const target = new URL(url, deployedUrl);
    assert(target.pathname.startsWith(basePath), `Resource outside site base path: ${target}`);
    assert(await stat(resolve(root, target.pathname.slice(basePath.length))), `Missing resource: ${target}`);
  }
}
for (const example of builtExamples) {
  const projectPath = new URL(example.projectUrl);
  assert(fileURLToPath(projectPath).startsWith(root + "/projects/"));
  const projectRelativeUrl = relative(resolve(root, "assets"), fileURLToPath(projectPath));
  const browserUrl = new URL(projectRelativeUrl, `https://satcy.github.io${basePath}assets/examples.js`);
  assert.equal(browserUrl.pathname, `${basePath}projects/${example.id}/project.json`);
  const project = JSON.parse(await readFile(projectPath, "utf8"));
  assert.equal(project.clipFormatVersion, 2);
  const ids = project.assets.map(asset => asset.id);
  assert.equal(new Set(ids).size, ids.length);
  const composition = project.assets.find(asset => asset.id === project.rootCompositionId)?.composition;
  assert(composition && composition.width > 0 && composition.height > 0 && composition.fps > 0 && composition.durationFrames > 0);
  for (const layer of composition.layers) for (const clip of layer.clips) {
    assert(ids.includes(clip.assetId), `Missing asset for ${example.id}/${clip.id}`);
    assert(clip.inFrame >= 0 && clip.outFrame > clip.inFrame);
  }
  for (const asset of project.assets) if (asset.sourceUrl) assert(asset.sourceUrl.startsWith("data:"), `Non-portable asset: ${asset.name}`);
  for (const asset of project.assets) {
    if (asset.kind === "script") assert.doesNotThrow(() => new Function(asset.source), `Invalid embedded library: ${example.id}/${asset.id}`);
    if (asset.kind !== "html-clip") continue;
    for (const id of asset.htmlTemplate.libraries || []) {
      assert(project.assets.some(library => library.id === id && library.kind === "script" && library.source), `Missing embedded library: ${example.id}/${id}`);
    }
  }
  const source = await readFile("dist/assets/client.js", "utf8");
  assert(!source.includes(".draw("), "Site is drawing a substitute instead of using the Player");
}
const showcase = JSON.parse(await readFile("projects/showcase/project.json", "utf8"));
for (const example of examples.filter(e => e.id !== "showcase")) {
  const project = JSON.parse(await readFile(`projects/${example.id}/project.json`, "utf8"));
  const asset = project.assets.find(asset => asset.kind === "html-clip");
  if (["site-edited", "site-authored"].includes(example.sourcePolicy)) {
    assert.doesNotThrow(() => new Function(asset.htmlTemplate.source.js), `Invalid edited Clip source: ${example.id}`);
    continue;
  }
  const original = showcase.assets.find(original => original.id === asset.id);
  assert.deepEqual(asset.htmlTemplate.source, original.htmlTemplate.source, `Modified application Clip source: ${example.id}`);
}
console.log(`Verified ${htmlFiles.length} pages, links, original Player bytes, and ${examples.length} portable MacroFlush projects; original Clip sources match except declared site edits and new examples.`);
console.log(`Verified ${Object.keys(editorProvenance.files).length} original Editor files and both OnlineEditor pages.`);
await import("./check-timeline.mjs");
execFileSync(process.execPath, ["--experimental-vm-modules", "scripts/check-previews.mjs"], {
  stdio: "inherit", env: { ...process.env, NODE_NO_WARNINGS: "1" }
});
