# Timeline 3D tutorial projects

- `start.json`: 1280 × 720, 60 fps, 240 frames; Scene1 only.
- `complete.json`: Scene1, two Mesh placements, Camera, Light and a parent Null.
- Mesh1 uses a 140-unit Box; Mesh2 uses a radius-85 Sphere.
- Both Mesh placements target `scene1` and parent to `rig-placement`.
- Null rotation keys: local frame 0 → [0, 0, 0], frame 239 → [0, 6.283185, 0]. Rotation is in radians.
- Camera position: [0, 160, 650], fixed Aim [0, 0, 0]; Directional Light: [-200, 300, 400], intensity 1.5.

Created using the reference application's `threeDCommands`, `threeDDescriptors` and V2 validation, then opened and rendered in the website's unchanged Editor distribution. No external media or libraries are required. Tutorial captures show frames 0 and 30. Stable placement ID `cube-placement` is also used in the Reference's getObject() example.
