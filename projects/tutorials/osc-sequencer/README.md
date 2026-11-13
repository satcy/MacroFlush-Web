# OSC sequencer tutorial files

- `osc-sequencer.json`: MainComposition and Composition2 (1280 × 720, 60 fps, 360 frames). Each has one HTML Clip, `SendOscParamsTest`, with keyframes on `val0`, `val1`, `color` and `pos`. MainComposition also has Cue1 / Cue2 / Cue3. The Clip sends a changed custom parameter with `sendOsc("/" + name, value)` using `clip.paramNames` and `clip.isNew` (MacroFlush 0.3.19).
- `osc-sequencer.maxpat`: Max 8 patch. `udpsend localhost 9000` controls MacroFlush (`/transport/*`, `/composition/open`, `/cue/*`, `/layers/Layer1/visible`), and `udpreceive 9001` shows `/val0`, `/val1`, `/color` and `/pos`.

Both files were supplied by the site owner and are published unchanged; no external media or libraries are required. UDP OSC runs only in the MacroFlush app. The tutorial captures were taken in the website's unchanged browser Editor (frame 120 and the OSC tab); live OSC with Max was not exercised from this repository.
