export const advancedCatalog = [
  ["composition-reuse", "Reusable Card", "Compositionを部品として使い回す", "Reuse a Composition as a building block", "共有したCardを2回配置し、時間と変形を分ける。", "Place a shared Card twice with separate time and transforms."],
  ["timeline-mask", "Alpha Window", "マスクで映像を切り抜く", "Reveal visuals through a mask", "隠したMatteのアルファで動く映像を切り抜く。", "Use a hidden Matte's alpha to crop moving visuals."],
  ["cue-performance", "Cue Stage", "Cueで切り替えるライブ映像をつくる", "Build a live performance with Cues", "Intro・Loop・OutroをCueで切り替える。", "Switch Intro, Loop and Outro with Cues."],
  ["stem-reactive", "Stem Ensemble", "ドラム・ベース・ボーカルを別々に動かす", "Animate drums, bass and vocals separately", "オリジナルの練習用4ステムを別の形へ割り当てる。", "Map four original practice stems to different shapes."],
  ["seamless-loop", "Perfect Orbit", "継ぎ目のないループを設計する", "Design a seamless loop", "整数周期と位相で4秒のループをつなぐ。", "Join a four-second loop with integer cycles and phase."],
  ["shader-stack", "Layered Look", "Shaderを重ねてルックをつくる", "Build a look by stacking Shaders", "Blur・色収差・色調整をEffect layerで順につなぐ。", "Chain blur, chromatic separation and grading with Effect layers."],
  ["model-product", "Product Studio", "GLBモデルの商品紹介映像をつくる", "Make a product film from a GLB model", "オリジナルのボトルGLBを照明・回転・タイトルで見せる。", "Present an original bottle GLB with lighting, rotation and type."],
  ["seeded-motion", "Repeatable Field", "同じランダム模様をシークでも再現する", "Make random motion repeatable on seek", "seedと現在時刻から粒の配置を決め直す。", "Recalculate particles from a seed and current time."],
  ["alpha-logo", "Clear Mark", "透明背景のロゴアニメーションを書き出す", "Export a logo animation with transparency", "背景なしのオリジナルマークをPNGやProResへ出力する。", "Export an original transparent mark to PNG or ProRes."],
  ["embed-player", "Web Player", "作品を自分のWebページへ埋め込む", "Embed your work in a web page", "Playerとホストの時計で再生・停止・シークをつくる。", "Build playback, pause and seek with Player and a host clock."]
];
export const advancedProjects = advancedCatalog.flatMap(([slug, title, , , description]) => ["start", "complete"].map(stage => ({
  id: `advanced-${slug}-${stage}`, title, category: "Tutorial", description,
  projectUrl: new URL(`../projects/tutorials/${slug}/${stage}.json`, import.meta.url).href
})));
export const advancedUI = Object.fromEntries(advancedCatalog.map(([, , , , ja, en]) => [ja, en]));
