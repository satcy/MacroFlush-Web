export const cardCode = `clip.use("centi");
setup(() => { size(560, 300); bg(0, 0); });
onFrame(({ time }) => {
  clear(); const ctx = getContext();
  ctx.fillStyle = "#172632"; ctx.fillRect(0, 0, 560, 300);
  ctx.strokeStyle = clip.tint; ctx.lineWidth = 3; ctx.strokeRect(2, 2, 556, 296);
  ctx.fillStyle = clip.tint; ctx.font = "bold 48px sans-serif";
  ctx.fillText(clip.title, 36, 90);
  ctx.font = "18px monospace"; ctx.fillText("ONE SHARED COMPOSITION", 36, 132);
  ctx.beginPath(); ctx.arc(90 + Math.sin(time * 2) * 35, 220, 24, 0, Math.PI * 2); ctx.fill();
});`;

export const backdropCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(() => { bg("#0c1019"); });`;

export const prismCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(({ time }) => {
  const ctx = getContext();
  const g = ctx.createLinearGradient(0, 0, 1280, 720);
  g.addColorStop(0, "#5dd4ff"); g.addColorStop(0.5, "#793c93"); g.addColorStop(1, "#ff6c9a");
  ctx.fillStyle = g; ctx.fillRect(0, 0, 1280, 720);
  ctx.strokeStyle = "#ffdc63"; ctx.lineWidth = 14;
  for (let i = -6; i < 18; i++) {
    const x = i * 100 + Math.sin(time) * 80;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 300, 720); ctx.stroke();
  }
});`;

export const matteCode = `clip.use("centi");
setup(() => { size(1280, 720); bg(0, 0); });
onFrame(() => {
  clear(); const ctx = getContext();
  ctx.fillStyle = "white";
  ctx.font = "bold 220px sans-serif"; ctx.textAlign = "center";
  ctx.fillText("FLOW", 640, 380);
  ctx.beginPath(); ctx.arc(640, 530, clip.radius, 0, Math.PI * 2); ctx.fill();
});`;

export const cueCode = `clip.use("centi");
setup(() => size(1280, 720));
onCue(({ cueName }) => { console.log("Cue:", cueName); });
onFrame(({ compFrame }) => {
  bg("#0c1019"); const ctx = getContext();
  const section = compFrame < 120 ? 0 : compFrame < 360 ? 1 : 2;
  const local = compFrame - [0, 120, 360][section];
  const u = local / [120, 240, 120][section];
  const colors = ["#5dd4ff", "#ff6c9a", "#ffdc63"];
  const fade = section === 0 ? Math.min(1, u * 3) : section === 2 ? Math.max(0, 1 - u) : 1;
  ctx.fillStyle = colors[section]; ctx.globalAlpha = fade;
  ctx.font = "bold 110px sans-serif"; ctx.textAlign = "center";
  ctx.fillText(["INTRO", "LOOP", "OUTRO"][section], 640, 350);
  for (let i = 0; i < 16; i++) {
    const phase = u * Math.PI * 2 + i / 16 * Math.PI * 2;
    ctx.beginPath(); ctx.arc(640 + Math.cos(phase) * 330, 360 + Math.sin(phase) * 210, 6, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
});`;
export const performanceCues = `cue("Intro", 0, { mode: "none", endFrame: 120 });
cue("Loop", 120, { mode: "loop", endFrame: 360 });
cue("Outro", 360, { mode: "stop", endFrame: 480 });`;

export const stemsCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(() => {
  bg("#0c1019"); const ctx = getContext();
  const stems = ["drums", "bass", "other", "vocals"];
  const colors = ["#5dd4ff", "#ff6c9a", "#ffdc63", "#b39cff"];
  stems.forEach((stem, i) => {
    const energy = Math.min(1, audioStem("Ensemble", stem) * clip.gain);
    const x = 190 + i * 300;
    ctx.fillStyle = colors[i];
    ctx.beginPath(); ctx.arc(x, 350, 28 + energy * 80, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(x - 75, 540 - energy * 100, 150, energy * 100 + 2);
    ctx.font = "22px monospace"; ctx.textAlign = "center"; ctx.fillText(stem.toUpperCase(), x, 610);
  });
});`;

export const loopCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(({ time }) => {
  bg("#0c1019"); const ctx = getContext();
  const phase = time / 4 * Math.PI * 2;
  for (let i = 0; i < 24; i++) {
    const offset = i / 24 * Math.PI * 2;
    const angle = phase + offset;
    const radius = 170 + 50 * Math.sin(phase * 2 + offset);
    ctx.fillStyle = ["#5dd4ff", "#ff6c9a", "#ffdc63"][i % 3];
    ctx.beginPath(); ctx.arc(640 + Math.cos(angle) * radius, 360 + Math.sin(angle) * radius, 9, 0, Math.PI * 2); ctx.fill();
  }
});`;

export const blurShader = `precision mediump float;
varying vec2 vUv;
uniform sampler2D inputTexture;
uniform vec2 resolution;
uniform float radius;
void main() {
  vec2 d = vec2(radius) / resolution;
  vec4 c = texture2D(inputTexture, vUv) * 0.4;
  c += texture2D(inputTexture, clamp(vUv + vec2(d.x, 0.0), 0.0, 1.0)) * 0.15;
  c += texture2D(inputTexture, clamp(vUv - vec2(d.x, 0.0), 0.0, 1.0)) * 0.15;
  c += texture2D(inputTexture, clamp(vUv + vec2(0.0, d.y), 0.0, 1.0)) * 0.15;
  c += texture2D(inputTexture, clamp(vUv - vec2(0.0, d.y), 0.0, 1.0)) * 0.15;
  gl_FragColor = c;
}`;
export const gradeShader = `precision mediump float;
varying vec2 vUv;
uniform sampler2D inputTexture;
uniform float contrast;
void main() {
  vec4 c = texture2D(inputTexture, vUv);
  vec3 rgb = (c.rgb - 0.5) * contrast + 0.5;
  gl_FragColor = vec4(clamp(rgb * vec3(1.08, 0.96, 1.12), 0.0, 1.0), c.a);
}`;

export const productSceneCode = `const { scene, T } = clip.use("centi3d");
setup(() => {
  size(1280, 720); scene.background = new T.Color("#101622");
  scene.add(new T.HemisphereLight(0xb8ddff, 0x182034, 2));
  const ground = new T.Mesh(new T.CylinderGeometry(135, 150, 24, 64),
    new T.MeshStandardMaterial({ color: "#263447", roughness: 0.55 }));
  ground.position.y = -110; scene.add(ground);
});`;
export const productTitleCode = `clip.use("centi");
setup(() => { size(1280, 720); bg(0, 0); });
onFrame(() => {
  clear(); const ctx = getContext(); ctx.fillStyle = "#eaf4ff";
  ctx.font = "bold 32px sans-serif"; ctx.fillText("FORM / 01", 65, 80);
  ctx.font = "14px monospace"; ctx.fillStyle = "#5dd4ff";
  ctx.fillText("ORIGINAL GLB · PRODUCT STUDY", 65, 110);
  ctx.fillStyle = "#a5b2c6"; ctx.fillText("SHAPE / LIGHT / MOTION", 65, 665);
});`;

export const seededCode = `clip.use("centi");
clip.defineParams({ seed: { type: "number", default: 42, min: 0, max: 9999, step: 1 } });
function randomAt(seed, index) {
  let n = (Math.floor(seed) ^ Math.imul(index + 1, 374761393)) >>> 0;
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}
setup(() => size(1280, 720));
onFrame(({ time }) => {
  bg("#0c1019"); const ctx = getContext();
  for (let i = 0; i < 100; i++) {
    const x = randomAt(clip.seed, i * 4) * 1280;
    const y = randomAt(clip.seed, i * 4 + 1) * 720;
    const phase = randomAt(clip.seed, i * 4 + 2) * Math.PI * 2;
    const radius = 3 + randomAt(clip.seed, i * 4 + 3) * 9;
    ctx.fillStyle = ["#5dd4ff", "#ff6c9a", "#ffdc63"][i % 3];
    ctx.beginPath(); ctx.arc(x + Math.cos(time + phase) * 24, y + Math.sin(time + phase) * 24, radius, 0, Math.PI * 2); ctx.fill();
  }
});`;

export const logoCode = `clip.use("centi");
setup(() => { size(1280, 720); bg(0, 0); });
onFrame(() => {
  clear(); const ctx = getContext(); const u = clip.reveal;
  ctx.save(); ctx.translate(640, 360); ctx.scale(0.65 + u * 0.35, 0.65 + u * 0.35);
  ctx.globalAlpha = u; ctx.lineWidth = 28; ctx.lineCap = "round";
  ["#5dd4ff", "#ff6c9a", "#ffdc63"].forEach((color, i) => {
    ctx.strokeStyle = color; ctx.beginPath();
    ctx.arc(0, 0, 75 + i * 40, -Math.PI / 2, -Math.PI / 2 + u * Math.PI * 1.65); ctx.stroke();
  });
  ctx.restore();
});`;
export const webArtworkCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(({ time }) => {
  bg("#0c1019"); const ctx = getContext();
  for (let i = 0; i < 18; i++) {
    const a = time + i / 18 * Math.PI * 2;
    ctx.strokeStyle = "hsl(" + (clip.hue + i * 8) + ",80%,65%)"; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(640 + Math.cos(a) * 145, 360 + Math.sin(a) * 145, 45, 0, Math.PI * 2); ctx.stroke();
  }
});`;
