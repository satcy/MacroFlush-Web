export const perlinMeshCode = `const radius = 130;
const amount = 60;
const frequency = 2.3;
const period = 4;

let sourceGeometry;
let scratch;

return {
  onFrame({ object, time, state }) {
    const original = state.original.positions;
    const positions = state.positions;
    const angle = (time % period) / period * PI * 2;
    const offsetX = cos(angle) * 0.85;
    const offsetZ = sin(angle) * 0.85;
    for (let i = 0; i < positions.length; i += 3) {
      const x = original[i];
      const y = original[i + 1];
      const z = original[i + 2];
      const n = noise(
        x / radius * frequency + offsetX + 5.3,
        y / radius * frequency + 7.1,
        z / radius * frequency + offsetZ + 9.7
      );
      const scale = 1 + n * amount / radius;
      positions[i] = x * scale;
      positions[i + 1] = y * scale;
      positions[i + 2] = z * scale;
    }

    const geometry = object.geometry;
    if (sourceGeometry !== geometry) {
      scratch?.dispose();
      sourceGeometry = geometry;
      scratch = geometry.clone();
    }
    scratch.getAttribute("position").array.set(positions);
    scratch.computeVertexNormals();

    const output = geometry.getAttribute("normal");
    output.array.set(scratch.getAttribute("normal").array);
    output.needsUpdate = true;
  },
  onDispose() {
    scratch?.dispose();
  }
};`;

const id = "perlin-mesh";
const projectPath = `/projects/tutorials/${id}`;
const inspectorImage = (alt, caption) => ({
  src: "/assets/tutorials/perlin-mesh/01-manual-restore.jpg",
  width: 3072,
  height: 2140,
  alt,
  caption
});
export const perlinMeshLesson = {
  id,
  title: "Perlinノイズで3Dメッシュを変形する",
  summary: "MacroFlush v0.4.0の3Dアセット用Scriptで、球体の頂点を動かし、4秒で繰り返す立体をつくります。",
  level: "3D / Script",
  environments: ["browser-editor", "app"],
  startProject: "/online-editor/?example=perlin-mesh-start",
  completedProject: "/online-editor/?example=perlin-mesh-complete",
  startDownload: `${projectPath}/start.json`,
  download: `${projectPath}/complete.json`,
  previewProject: "perlin-mesh-complete",
  referenceUrl: "/reference/#3d-script-state",
  referenceLabel: "API Reference",
  steps: [
    { title: "球体とSceneを開く", text: "MacroFlush v0.4.0以降で開始用プロジェクトを開きます。4秒・60 fpsのTimelineに、半径130のSphereを参照するMesh、Camera、Light、Centi3DのScene1が配置済みです。再生しても、まだ球体は変形しません。" },
    { title: "ProjectのScriptに変形を書く", text: "Projectの「Perlin Surface.js」を開き、下のコードで置き換えます。自分で作る場合はProjectのNew Scriptで追加します。コードはonFrameを持つcontrollerを返します。書く場所はProject Scriptで、Scene1のHTML Clipではありません。Centi3DのSceneでも、組み込みのnoise()（nz()と同じ）やsin()、cos()、PIを使えます。clip.use(\"centi\")の追加は不要です。", code: perlinMeshCode },
    { title: "MeshにScriptを割り当てる", text: "TimelineのPerlin Sphereを選び、InspectorのScriptにPerlin Surface.jsを指定します。Script stateをManual restoreにし、JumpはResetのままにします。Scriptの割り当てと設定はMeshアセットで共有され、controllerと頂点の状態は配置ごとに独立します。", image: inspectorImage("変形した球体と、ScriptをManual restoreに設定したInspector", "Perlin Sphereを選ぶと、InspectorにScript、Manual restore、Jumpの設定が表示されます。") },
    { title: "元の頂点から毎回計算する", text: "state.original.positionsは元の頂点座標で、state.positionsは書き込み用です。XYZを3要素ずつ読み、格子の勾配を滑らかに補間した3D Perlinノイズで半径を伸び縮みさせます。毎回元の座標から計算するため、変形が積み重なりません。MaterialのFlat Shadingはオフにします。state.positionsはコールバック終了後に反映されるため、計算用のGeometryに新しい座標をコピーしてcomputeVertexNormals()を呼びます。計算した法線を描画用のGeometryへ戻します。球体のUVの継ぎ目では頂点が分かれているため、光の当たり方によって境界が見えることがあります。" },
    { title: "再生・シークして違いを確認する", text: "Playで再生し、フレーム0・60・120を見比べてください。フレーム60へ戻ると同じ形になります。ノイズのサンプル位置をtimeに応じて円周上で動かすため、4秒で先頭の形につながります。amount（完成版では60）は歪みの振幅、frequencyは表面の凹凸の細かさです。amountを0にすると元の球体になります。" },
    { title: "完成プロジェクトを保存する", text: "File > Save Asで保存します。Manual restoreを使う完成版はV4形式で、v0.4.0以降のEditorや対応Playerで開きます。Embedded V2では書き出せません。球体が動かない場合は、Scriptの割り当て、Manual restore、MeshのTargetがScene1になっているか確認してください。" }
  ]
};

export const perlinMeshLessonEnglish = {
  title: "Deform a 3D mesh with Perlin noise",
  summary: "Animate a sphere’s vertices with a 3D asset Script in MacroFlush v0.4.0 and build a four-second loop.",
  steps: [
    { title: "Open the sphere and Scene", text: "Open the starter project in MacroFlush v0.4.0 or later. The four-second, 60 fps Timeline contains a Mesh that uses a radius-130 Sphere, a Camera, a Light and the Centi3D Scene1. Play the project to see the undeformed sphere." },
    { title: "Write the deformation in a Project Script", text: "Open Perlin Surface.js in Project and replace its contents with the code below. To make your own Script, use New Script in Project. The code returns a controller with an onFrame callback. Paste it into the Project Script. The Centi3D scene already exposes noise() (also called nz()), sin(), cos() and PI to the Script.", code: perlinMeshCode },
    { title: "Attach the Script to the Mesh", text: "Select Perlin Sphere on the Timeline and choose Perlin Surface.js under Script in the Inspector. Set Script state to Manual restore and leave Jump on Reset. Placements of the same Mesh asset share these settings and each placement runs its own controller with independent vertex state.", image: inspectorImage("Deformed sphere beside the Script and Manual restore settings in the Inspector", "Select Perlin Sphere to see its Script, Manual restore and Jump settings in the Inspector.") },
    { title: "Start from the original vertices every frame", text: "Read the original vertex coordinates from state.original.positions and write to state.positions. Read XYZ in groups of three and use 3D Perlin noise, which smoothly interpolates lattice gradients, to stretch or compress the radius. Starting from the original coordinates prevents deformation from accumulating. Turn off Flat Shading in the Material. The host commits state.positions after the callback, so copy the new positions to a scratch geometry and call computeVertexNormals() there. Copy the resulting normals back to the rendered geometry. The UV seam uses separate vertices, so the lighting can reveal a boundary there." },
    { title: "Compare playback and seeking", text: "Play the composition and compare frames 0, 60 and 120. Seek back to frame 60 to see the same shape again. The noise sample position moves around a circle based on time, returning to its starting point after four seconds. Change amount (60 in the completed project) to adjust the strength or frequency to change the size of the surface features. At amount 0 the original sphere returns." },
    { title: "Save the completed project", text: "Choose File > Save As. The finished project uses Manual restore and saves as V4. Open it in the v0.4.0 or later Editor or a compatible Player. Embedded V2 export is unavailable for this project. If the sphere stays still, check the Script assignment, Manual restore and the Mesh Target (Scene1)." }
  ]
};
