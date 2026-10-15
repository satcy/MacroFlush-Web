import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { build } from "./build.mjs";
import { getBasePath } from "./site-path.mjs";
if (!process.argv.includes("--production")) await build();
const root = resolve("dist");
const port = Number(process.env.PORT || 4173);
const basePath = getBasePath();
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".ttf": "font/ttf", ".mp3": "audio/mpeg", ".mp4": "video/mp4", ".obj": "text/plain; charset=utf-8", ".txt": "text/plain; charset=utf-8" };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (basePath !== "/" && pathname === basePath.slice(0, -1)) {
      res.writeHead(301, { Location: basePath }); res.end(); return;
    }
    if (!pathname.startsWith(basePath)) throw new Error("Outside site base path");
    let path = resolve(root, pathname.slice(basePath.length));
    if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    const info = await stat(path);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) { res.writeHead(301, { Location: pathname + "/" }); res.end(); return; }
      path = resolve(path, "index.html");
    }
    res.writeHead(200, { "Content-Type": types[extname(path)] || "application/octet-stream", "Cache-Control": "no-cache", "X-Content-Type-Options": "nosniff" });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(resolve(root, "404.html")));
  }
}).listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}${basePath}`));
