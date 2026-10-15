// Projects are real V2 documents synced from the MacroFlush application.
export const examples = [
  { id: "showcase", title: "MacroFlush Showcase", category: "Composition", number: "01", projectUrl: new URL("../projects/showcase/project.json", import.meta.url).href, description: "アプリ同梱のコンポジション。レイヤー、キーフレーム、Shaderを含むプロジェクトをそのまま再生します。" },
  { id: "autec", title: "Autec", appClip: "Autec", category: "Geometry", number: "02", projectUrl: new URL("../projects/autec/project.json", import.meta.url).href, description: "同梱プロジェクトのAutec Clip。4つの図形が回転し、かたちを変えます。" },
  { id: "triad", title: "Triad", appClip: "Triad", category: "Geometry", number: "03", projectUrl: new URL("../projects/triad/project.json", import.meta.url).href, description: "同梱プロジェクトのTriad Clip。三角形の反復と変形を組み合わせた表現。" },
  { id: "sin", title: "Sin", appClip: "Sin", category: "Lines", number: "04", projectUrl: new URL("../projects/sin/project.json", import.meta.url).href, description: "同梱プロジェクトのSin Clip。位相の異なる正弦波で線を描きます。" },
  { id: "gradient", title: "Gradient", appClip: "Gradient", category: "Color", number: "05", projectUrl: new URL("../projects/gradient/project.json", import.meta.url).href, description: "同梱プロジェクトのGradient Clip。回転するグラデーションをlightenで合成。" },
  { id: "boxes", title: "Boxes", appClip: "Boxes", category: "3D", number: "06", projectUrl: new URL("../projects/boxes/project.json", import.meta.url).href, description: "同梱プロジェクトのBoxes Clip。Centi3DとThree.jsで3Dボックスを動かします。" }
];

// Additional editor-only projects used by the illustrated tutorial.
export const editorProjects = [
  ...examples,
  { id: "tutorial-3d-start", projectUrl: new URL("../projects/tutorials/timeline-3d/start.json", import.meta.url).href },
  { id: "tutorial-3d-complete", projectUrl: new URL("../projects/tutorials/timeline-3d/complete.json", import.meta.url).href }
];
