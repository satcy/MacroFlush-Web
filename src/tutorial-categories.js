// Tutorial categories. The order of `lessons` here defines the learning path:
// lessons are numbered 01, 02, ... in this order (URLs use lesson ids, not numbers).
export const tutorialCategories = [
  {
    id: "foundations", name: "基礎", english: "Foundations",
    description: "Clipを書き、値を公開し、重ねて、書き出す。はじめに通る4本。",
    englishDescription: "Write a Clip, expose values, layer Clips and export. The four lessons to start with.",
    lessons: ["first-clip", "parameters", "composition", "export"]
  },
  {
    id: "motion", name: "動きをつくる", english: "Motion",
    description: "Curve・文字・色で、Timelineの動きの質を上げる。",
    englishDescription: "Improve the quality of Timeline motion with curves, type and color.",
    lessons: ["curve-motion", "kinetic-type", "shared-palette", "seamless-loop"]
  },
  {
    id: "composition", name: "構成と演出", english: "Composition & staging",
    description: "Compositionの再利用・マスク・Cueで、作品の構造をつくる。",
    englishDescription: "Structure a piece with reusable Compositions, masks and Cues.",
    lessons: ["composition-reuse", "timeline-mask", "cue-performance"]
  },
  {
    id: "visuals", name: "描画を広げる", english: "Visuals",
    description: "p5.js・add()・Shaderで、Canvas以外の描き方を試す。",
    englishDescription: "Try ways of drawing beyond the basic Canvas with p5.js, add() and shaders.",
    lessons: ["p5-timeline", "runtime-swarm", "seeded-motion", "shader-chromatic", "shader-stack"]
  },
  {
    id: "three-d", name: "3D", english: "3D",
    description: "Timeline上の3Dシーンと、Cameraだけで魅せる演出。",
    englishDescription: "3D scenes on the Timeline, and staging with the Camera alone.",
    lessons: ["timeline-3d", "camera-work", "model-product"]
  },
  {
    id: "input", name: "入力と連携", english: "Input & connection",
    description: "音・手の動き・外部ツールから、映像を動かす。",
    englishDescription: "Drive visuals from sound, hand movement and external tools.",
    lessons: ["audio-reactive", "stem-reactive", "feedback-pointer", "feedback-editor", "osc-sequencer"]
  },
  {
    id: "delivery", name: "書き出しと公開", english: "Export & publishing",
    description: "透明な素材と、操作できるWebページとして作品を届ける。",
    englishDescription: "Deliver transparent assets and an interactive web player.",
    lessons: ["alpha-logo", "embed-player"]
  }
];

// Beginner lessons: Foundations and Motion. Everything else is Intermediate.
export const beginnerCategories = new Set(["foundations", "motion"]);
