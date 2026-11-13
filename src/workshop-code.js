export const curveCode = `clip.use("centi");
clip.defineParams({
  x: { type: "number", default: 230, min: 100, max: 1180, interpolable: true },
  row: { type: "number", default: 180 },
  label: { type: "string", default: "LINEAR" },
  tint: { type: "color", default: "#5dd4ff" }
});
setup(() => size(1280, 720));
onFrame(() => {
  const ctx = getContext();
  ctx.clearRect(0, 0, 1280, 720);
  ctx.strokeStyle = "#303a49";
  ctx.beginPath(); ctx.moveTo(230, clip.row); ctx.lineTo(1080, clip.row); ctx.stroke();
  ctx.font = "18px sans-serif"; ctx.fillStyle = "#a0afbf";
  ctx.fillText(clip.label, 70, clip.row - 50);
  ctx.fillStyle = clip.tint;
  ctx.beginPath(); ctx.arc(clip.x, clip.row, 26, 0, Math.PI * 2); ctx.fill();
});`;

export const feedbackCode = `clip.use("centi");
clip.defineParams({ takeName: { type: "string", default: "Hand Take" } });
setup(() => size(1280, 720));
onFrame(({ time }) => {
  const ctx = getContext();
  ctx.fillStyle = "#0c0f17"; ctx.fillRect(0, 0, 1280, 720);
  const take = feedback(clip.takeName, { offset: 0, rate: 1, loop: false });
  const pointer = take.sample("pointer", { space: "clip" });
  ctx.strokeStyle = "#5dd4ff"; ctx.lineWidth = 5; ctx.lineCap = "round";
  ctx.beginPath();
  let penDown = false;
  for (let i = 0; i <= 90; i++) {
    const p = take.at("pointer", Math.max(0, time - 1.5 + i / 60), { space: "clip" });
    if (p.buttons && p.inside) {
      if (penDown) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y);
      penDown = true;
    } else penDown = false;
  }
  ctx.stroke();
  if (pointer.inside) {
    ctx.fillStyle = pointer.buttons ? "#ffdc63" : "#ff6b9d";
    ctx.beginPath(); ctx.arc(pointer.x, pointer.y, 16, 0, Math.PI * 2); ctx.fill();
  }
  ctx.font = "20px sans-serif"; ctx.fillStyle = "#a0afbf";
  ctx.fillText("POINTER / " + clip.takeName, 50, 60);
});`;

export const shaderInputCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(({ time }) => {
  const ctx = getContext();
  ctx.fillStyle = "#11151e"; ctx.fillRect(0, 0, 1280, 720);
  ctx.strokeStyle = "#f4f7ff"; ctx.lineWidth = 7;
  for (let i = 0; i < 12; i++) {
    const x = 90 + i * 100 + Math.sin(time + i * 0.3) * 24;
    ctx.beginPath(); ctx.moveTo(x, 90); ctx.lineTo(x, 630); ctx.stroke();
  }
  ctx.font = "bold 120px sans-serif"; ctx.textAlign = "center";
  ctx.fillStyle = "#f4f7ff"; ctx.fillText("SPECTRUM", 640, 405);
});`;

export const chromaticShader = `precision mediump float;
varying vec2 vUv;
uniform sampler2D inputTexture;
uniform vec2 resolution;
uniform float amount;

void main() {
  vec2 shift = vec2(amount / resolution.x, 0.0);
  vec4 center = texture2D(inputTexture, vUv);
  float r = texture2D(inputTexture, clamp(vUv + shift, 0.0, 1.0)).r;
  float b = texture2D(inputTexture, clamp(vUv - shift, 0.0, 1.0)).b;
  gl_FragColor = vec4(r, center.g, b, center.a);
}`;

export const passthroughShader = `precision mediump float;
varying vec2 vUv;
uniform sampler2D inputTexture;
void main() { gl_FragColor = texture2D(inputTexture, vUv); }`;

export const audioCode = `clip.use("centi");
clip.defineParams({ gain: { type: "number", default: 2, min: 0, max: 6, interpolable: true } });
setup(() => size(1280, 720));
onFrame(() => {
  const ctx = getContext();
  ctx.fillStyle = "#0c0f17"; ctx.fillRect(0, 0, 1280, 720);
  const bands = ["low", "mid", "high"];
  const colors = ["#5dd4ff", "#ff6b9d", "#ffdc63"];
  ctx.textAlign = "center";
  for (let i = 0; i < 3; i++) {
    const energy = Math.min(1, audioBand("Workshop Beat", bands[i]) * clip.gain);
    const x = 270 + i * 370;
    ctx.fillStyle = colors[i];
    ctx.beginPath(); ctx.arc(x, 350, 38 + energy * 115, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(x - 80, 600 - energy * 160, 160, energy * 160 + 2);
    ctx.font = "20px sans-serif"; ctx.fillStyle = "#dce9f6";
    ctx.fillText(bands[i].toUpperCase(), x, 660);
  }
});`;

export const typographyCode = `clip.use("centi");
clip.defineParams({
  title: { type: "string", default: "MOTION" },
  reveal: { type: "number", default: 0, min: 0, max: 1, interpolable: true },
  tint: { type: "color", default: "#5dd4ff", interpolable: true }
});
setup(() => size(1280, 720));
onFrame(() => {
  const ctx = getContext();
  ctx.fillStyle = "#0c0f17"; ctx.fillRect(0, 0, 1280, 720);
  ctx.font = "bold 112px sans-serif"; ctx.textBaseline = "middle";
  const letters = Array.from(clip.title);
  const tracking = 14;
  const total = letters.reduce((sum, c) => sum + ctx.measureText(c).width, 0)
    + Math.max(0, letters.length - 1) * tracking;
  let x = (1280 - total) / 2;
  letters.forEach((letter, i) => {
    const u = Math.max(0, Math.min(1, (clip.reveal - i * 0.07) / 0.55));
    const eased = 1 - Math.pow(1 - u, 3);
    ctx.globalAlpha = u; ctx.fillStyle = clip.tint;
    ctx.fillText(letter, x, 350 + (1 - eased) * 120);
    x += ctx.measureText(letter).width + tracking;
  });
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#ff6b9d"; ctx.fillRect(360, 490, 560 * clip.reveal, 5);
});`;

export const paletteCode = `clip.use("centi");
clip.defineParams({ panel: { type: "number", default: 0 } });
setup(() => size(1280, 720));
onFrame(({ time }) => {
  const ctx = getContext(); ctx.clearRect(0, 0, 1280, 720);
  const hue = Number(comp.hue ?? 200);
  const accent = "hsl(" + hue + ", 85%, 66%)";
  const second = "hsl(" + (hue + 60) + ", 85%, 68%)";
  if (clip.panel === 0) {
    ctx.fillStyle = "hsl(" + hue + ", 25%, 8%)"; ctx.fillRect(0, 0, 1280, 720);
    ctx.fillStyle = accent; ctx.font = "bold 78px sans-serif";
    ctx.fillText("ONE HUE", 70, 160);
  } else if (clip.panel === 1) {
    ctx.strokeStyle = accent; ctx.lineWidth = 14;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath(); ctx.arc(365, 430, 40 + i * 26 + Math.sin(time) * 10, 0, Math.PI * 2); ctx.stroke();
    }
  } else {
    ctx.fillStyle = second;
    for (let i = 0; i < 7; i++) ctx.fillRect(730 + i * 50, 280 + Math.sin(time + i * 0.5) * 80, 24, 240);
  }
});`;

export const swarmDotCode = `clip.use("centi");
setup(() => size(80, 80));
onFrame(({ time }) => {
  const ctx = getContext(); ctx.clearRect(0, 0, 80, 80);
  const glow = ctx.createRadialGradient(40, 40, 0, 40, 40, 35);
  glow.addColorStop(0, "#ffffff"); glow.addColorStop(0.24, "#5dd4ff");
  glow.addColorStop(1, "rgba(93,212,255,0)");
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.arc(40, 40, 27 + Math.sin(time * 2) * 7, 0, Math.PI * 2); ctx.fill();
});`;

export const swarmCode = `clip.use("centi");
clip.defineParams({ spread: { type: "number", default: 1, min: 0.4, max: 1.4, interpolable: true } });
const master = add("Dot", { x: 640, y: 360, anchorPoint: [40, 40], blendMode: "screen" });
const dots = [master];
for (let i = 1; i < 36; i++) {
  dots.push(add("Dot", { x: 640, y: 360, anchorPoint: [40, 40],
    instanceOf: master, blendMode: "screen" }));
}
setup(() => size(1280, 720));
onFrame(({ time }) => {
  const ctx = getContext(); ctx.clearRect(0, 0, 1280, 720);
  dots.forEach((dot, i) => {
    const phase = i / dots.length * Math.PI * 2;
    const ring = 140 + (i % 3) * 70;
    dot.x = 640 + Math.cos(time * 0.6 + phase) * ring * clip.spread;
    dot.y = 360 + Math.sin(time * 0.9 + phase * 2) * ring * 0.65 * clip.spread;
    dot.scale = 0.5 + (i % 4) * 0.16;
    dot.opacity = 0.8;
  });
});`;
// Inspector angles are degrees; the generator converts them to V2 radians.
export const cameraFlightShots = [
  { position: [-300, 180, 1100], rotation: [-12, -19, -16], fov: 80 },
  { position: [-160, 30, 520], rotation: [-3.3, -32.4, 26.2], fov: 95 },
  { position: [220, 70, 150], rotation: [-8.8, 39.1, -26.4], fov: 90 },
  { position: [-200, 10, -180], rotation: [4.9, -38.9, 33.1], fov: 100 },
  { position: [220, 180, -600], rotation: [-31, 32.2, -22.3], fov: 85 },
  { position: [0, 380, -1080], rotation: [-156.6, 0, -85], fov: 95 },
  { position: [280, 30, -300], rotation: [-177.1, 25, 150.8], fov: 100 },
  { position: [-300, 180, 1100], rotation: [-12, -19, -16], fov: 80 }
];

export const cameraCourseCode = `const { scene, T } = clip.use("centi3d");
setup(() => {
  size(1280, 720);
  scene.background = new T.Color("#080d19");
  scene.add(new T.AmbientLight(0xffffff, 0.7));
  const grid = new T.GridHelper(3600, 60, 0x31506c, 0x14283d);
  grid.position.set(0, -135, -200); scene.add(grid);
  const gates = [[-160, 620], [170, 250], [-170, -80], [170, -410], [0, -760]];
  gates.forEach(([x, z], i) => {
    const gate = new T.Mesh(new T.TorusGeometry(110, 9, 8, 48),
      new T.MeshBasicMaterial({ color: i % 2 ? "#ff6c9a" : "#5dd4ff" }));
    gate.position.set(x, 0, z); scene.add(gate);
    const foot = new T.Mesh(new T.BoxGeometry(12, 40, 12),
      new T.MeshBasicMaterial({ color: "#ffdc63" }));
    foot.position.set(x, -115, z); scene.add(foot);
  });
  for (let i = 0; i < 18; i++) {
    const post = new T.Mesh(new T.BoxGeometry(24, 220 + (i % 3) * 80, 24),
      new T.MeshBasicMaterial({ color: i % 2 ? "#214d65" : "#54304d" }));
    post.position.set(i % 2 ? 430 : -430, 0, 1000 - i * 130); scene.add(post);
  }
});`;

