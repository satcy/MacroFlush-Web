export const cardCode = `clip.use("centi");
setup(() => { size(560, 300); bg(0, 0); });
onFrame(({ time }) => {
  clear();
  col("#172632"); fill(); rect(0, 0, 560, 300);
  col(clip.tint); lineWidth(3); stroke(); rect(2, 2, 556, 296);
  col(clip.tint); font("sans-serif", 48, true);
  fill(); text(clip.title, 36, 90);
  font("monospace", 18); fill(); text("ONE SHARED COMPOSITION", 36, 132);
  fill(); oval(90 + sin(time * 2) * 35, 220, 24);
});`;

export const backdropCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(() => { bg("#0c1019"); });`;

export const prismCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(({ time }) => {
  grad(0, 0, 1280, 720);
  gradColor(0, "#5dd4ff"); gradColor(0.5, "#793c93"); gradColor(1, "#ff6c9a");
  rect(0, 0, 1280, 720);
  col("#ffdc63"); lineWidth(14);
  for (let i = -6; i < 18; i++) {
    const x = i * 100 + sin(time) * 80;
    line(x, 0, x + 300, 720);
  }
});`;

export const matteCode = `clip.use("centi");
setup(() => { size(1280, 720); bg(0, 0); });
onFrame(() => {
  clear();
  col("white");
  font("sans-serif", 220, true); getContext().textAlign = "center";
  fill(); text("FLOW", 640, 380);
  fill(); oval(640, 530, clip.radius);
});`;

export const cueCode = `clip.use("centi");
setup(() => size(1280, 720));
onCue(({ cueName }) => { console.log("Cue:", cueName); });
onFrame(({ compFrame }) => {
  bg("#0c1019");
  const section = compFrame < 120 ? 0 : compFrame < 360 ? 1 : 2;
  const local = compFrame - [0, 120, 360][section];
  const u = local / [120, 240, 120][section];
  const colors = ["#5dd4ff", "#ff6c9a", "#ffdc63"];
  const fade = section === 0 ? min(1, u * 3) : section === 2 ? max(0, 1 - u) : 1;
  hcol(hexToInt(colors[section]), fade * 255);
  font("sans-serif", 110, true); getContext().textAlign = "center";
  fill(); text(["INTRO", "LOOP", "OUTRO"][section], 640, 350);
  for (let i = 0; i < 16; i++) {
    const phase = u * PI * 2 + i / 16 * PI * 2;
    fill(); oval(640 + cos(phase) * 330, 360 + sin(phase) * 210, 6);
  }
});`;
export const performanceCues = `cue("Intro", 0, { mode: "none", endFrame: 120 });
cue("Loop", 120, { mode: "loop", endFrame: 360 });
cue("Outro", 360, { mode: "stop", endFrame: 480 });`;

export const stemsCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(() => {
  bg("#0c1019");
  const stems = ["drums", "bass", "other", "vocals"];
  const colors = ["#5dd4ff", "#ff6c9a", "#ffdc63", "#b39cff"];
  stems.forEach((stem, i) => {
    const energy = min(1, audioStem("Ensemble", stem) * clip.gain);
    const x = 190 + i * 300;
    col(colors[i]);
    fill(); oval(x, 350, 28 + energy * 80);
    fill(); rect(x - 75, 540 - energy * 100, 150, energy * 100 + 2);
    font("monospace", 22); getContext().textAlign = "center"; fill(); text(stem.toUpperCase(), x, 610);
  });
});`;

export const loopCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(({ time }) => {
  bg("#0c1019");
  const phase = time / 4 * PI * 2;
  for (let i = 0; i < 24; i++) {
    const offset = i / 24 * PI * 2;
    const angle = phase + offset;
    const radius = 170 + 50 * sin(phase * 2 + offset);
    col(["#5dd4ff", "#ff6c9a", "#ffdc63"][i % 3]);
    fill(); oval(640 + cos(angle) * radius, 360 + sin(angle) * radius, 9);
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
  clear(); col("#eaf4ff");
  font("sans-serif", 32, true); fill(); text("FORM / 01", 65, 80);
  font("monospace", 14); col("#5dd4ff");
  fill(); text("ORIGINAL GLB · PRODUCT STUDY", 65, 110);
  col("#a5b2c6"); fill(); text("SHAPE / LIGHT / MOTION", 65, 665);
});`;

export const seededCode = `clip.use("centi");
clip.defineParams({ seed: { type: "number", default: 42, min: 0, max: 9999, step: 1 } });
function randomAt(seed, index) {
  let n = (floor(seed) ^ imul(index + 1, 374761393)) >>> 0;
  n = imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}
setup(() => size(1280, 720));
onFrame(({ time }) => {
  bg("#0c1019");
  for (let i = 0; i < 100; i++) {
    const x = randomAt(clip.seed, i * 4) * 1280;
    const y = randomAt(clip.seed, i * 4 + 1) * 720;
    const phase = randomAt(clip.seed, i * 4 + 2) * PI * 2;
    const radius = 3 + randomAt(clip.seed, i * 4 + 3) * 9;
    col(["#5dd4ff", "#ff6c9a", "#ffdc63"][i % 3]);
    fill(); oval(x + cos(time + phase) * 24, y + sin(time + phase) * 24, radius);
  }
});`;

export const logoCode = `clip.use("centi");
setup(() => { size(1280, 720); bg(0, 0); });
onFrame(() => {
  clear(); const u = clip.reveal;
  push(); translate(640, 360); scale(0.65 + u * 0.35, 0.65 + u * 0.35);
  lineWidth(28); lineCap(1);
  ["#5dd4ff", "#ff6c9a", "#ffdc63"].forEach((color, i) => {
    hcol(hexToInt(color), u * 255); stroke(); arc(0, 0, 75 + i * 40, -PI / 2, -PI / 2 + u * PI * 1.65);
  });
  pop();
});`;
export const webArtworkCode = `clip.use("centi");
setup(() => size(1280, 720));
onFrame(({ time }) => {
  bg("#0c1019");
  for (let i = 0; i < 18; i++) {
    const a = time + i / 18 * PI * 2;
    col("hsl(" + (clip.hue + i * 8) + ",80%,65%)"); lineWidth(5);
    stroke(); oval(640 + cos(a) * 145, 360 + sin(a) * 145, 45);
  }
});`;
