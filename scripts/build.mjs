import { mkdir, writeFile, cp, rm } from "node:fs/promises";
import { render } from "../src/pages.js";
import { lessons } from "../src/content.js";

export async function build() {
  await rm("dist", { recursive: true, force: true });
  await mkdir("dist/assets", { recursive: true });
  await cp("assets", "dist/assets", { recursive: true });
  for (const file of ["styles.css", "client.js", "examples.js", "project-player.js", "hero-editor.js", "timeline-model.js"]) await cp(`src/${file}`, `dist/assets/${file}`);
  await cp("vendor/player", "dist/player", { recursive: true });
  await cp("projects", "dist/projects", { recursive: true });
  for (const page of ["top", "about", "reference", "examples", "tutorials"]) {
    const dir = page === "top" ? "dist" : `dist/${page}`;
    await mkdir(dir, { recursive: true });
    await writeFile(`${dir}/index.html`, render(page));
  }
  for (const lesson of lessons) {
    await mkdir(`dist/tutorials/${lesson.id}`, { recursive: true });
    await writeFile(`dist/tutorials/${lesson.id}/index.html`, render("tutorials", lesson.id));
  }
  await writeFile("dist/404.html", '<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found — MacroFlush</title><link rel="stylesheet" href="/assets/styles.css"><main class="container page-heading"><p class="eyebrow">404</p><h1>Page not found.</h1><p>ページが見つかりません。</p><a class="button" href="/">Topへ戻る</a></main></html>');
  console.log("Built 9 pages and 6 examples → dist/");
}
if (process.argv[1] === new URL(import.meta.url).pathname) await build();
