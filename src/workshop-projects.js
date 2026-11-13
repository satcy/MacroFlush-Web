export const workshopCatalog = [
  ["curve-motion", "08", "Curve Motion", "同じキーの時刻と値で、補間だけを変えた3つの円。", "Three circles share key times and values, with different interpolation."],
  ["feedback-pointer", "09", "Pointer Study", "練習用Pointerをsample()で読み、光点と軌跡を描く。", "Read a practice Pointer with sample() to draw a dot and trail."],
  ["feedback-editor", "10", "Stroke Editing", "練習用ストロークの修正前・修正後を比べる教材。", "Compare rough and smoothed practice strokes."],
  ["shader-chromatic", "11", "Chromatic Study", "Effect layerで入力映像のRGBをずらすShader。", "A Shader on an Effect layer separates the input image's RGB channels."],
  ["audio-reactive", "12", "Audio Bands", "同梱のオリジナル音源をlow・mid・highで可視化。", "Visualize low, mid and high bands of an included original beat."],
  ["kinetic-type", "13", "Kinetic Type", "文字ごとの時間差と公開パラメータでつくるタイトル。", "A title driven by staggered letters and an exposed parameter."],
  ["shared-palette", "14", "One Hue", "Compositionのhueで3つのClipの配色をまとめて変更。", "A Composition hue parameter recolors three Clips together."],
  ["camera-work", "15", "Camera Study", "2台のCameraをTransformでつなぐドローンレース風の高速移動。", "A fast drone-style flight using Transform between two Cameras."],
  ["runtime-swarm", "16", "Runtime Swarm", "add()とinstanceOfで36個の光を配置する。", "Place 36 lights with add() and instanceOf."]
];

export const workshopProjects = workshopCatalog.flatMap(([slug, number, title, description]) => ["start", "complete"].map(stage => ({
  id: `workshop-${slug}-${stage}`, title, number, category: "Tutorial", description,
  projectUrl: new URL(`../projects/tutorials/${slug}/${stage}.json`, import.meta.url).href
})));
export const workshopUI = Object.fromEntries(workshopCatalog.map(([, , , ja, en]) => [ja, en]));
