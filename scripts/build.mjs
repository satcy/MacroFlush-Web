import { mkdir, writeFile, cp, rm } from "node:fs/promises";
import { render, render404 } from "../src/pages.js";
import { lessons } from "../src/content.js";
import { getBasePath, prefixSiteLinks } from "./site-path.mjs";

export async function build() {
  const basePath = getBasePath();
  await rm("dist", { recursive: true, force: true });
  await mkdir("dist/assets", { recursive: true });
  await cp("assets", "dist/assets", { recursive: true });
  for (const file of ["styles.css", "client.js", "examples.js", "project-player.js", "hero-editor.js", "timeline-model.js", "locale.js", "ui-en.js"]) await cp(`src/${file}`, `dist/assets/${file}`);
  await cp("vendor/player", "dist/player", { recursive: true });
  await cp("projects", "dist/projects", { recursive: true });
  for (const language of ["ja", "en"]) {
    const root = language === "en" ? "dist/en" : "dist";
    for (const page of ["top", "about", "reference", "examples", "tutorials"]) {
      const dir = page === "top" ? root : `${root}/${page}`;
      await mkdir(dir, { recursive: true });
      await writeFile(`${dir}/index.html`, prefixSiteLinks(render(page, undefined, language), basePath));
    }
    for (const lesson of lessons) {
      await mkdir(`${root}/tutorials/${lesson.id}`, { recursive: true });
      await writeFile(`${root}/tutorials/${lesson.id}/index.html`, prefixSiteLinks(render("tutorials", lesson.id, language), basePath));
    }
  }
  await writeFile("dist/404.html", prefixSiteLinks(render404(), basePath));
  await writeFile("dist/.nojekyll", "");
  console.log(`Built 18 pages (JA / EN) and 6 examples → dist/ (base: ${basePath})`);
}
if (process.argv[1] === new URL(import.meta.url).pathname) await build();
