export function getBasePath() {
  const path = process.env.BASE_PATH || "/";
  if (!/^\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]*$/.test(path)) {
    throw new Error(`Invalid BASE_PATH: ${path}`);
  }
  return path.endsWith("/") ? path : `${path}/`;
}

export function prefixSiteLinks(html, basePath) {
  return html.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, path) => `${attr}="${basePath}${path}"`);
}
