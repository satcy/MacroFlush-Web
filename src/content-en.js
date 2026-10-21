import { featureGroupDescriptions, featureDescriptions } from "./reference-features.js";
import { threeDGroupDescriptions, threeDDescriptions, threeDLessonEnglish } from "./three-d-content.js";
// English descriptions share the Japanese catalog's IDs, signatures and examples.
export const groupDescriptions = {
  ...threeDGroupDescriptions,
  ...featureGroupDescriptions,
  lifecycle: "Clip initialization and time controlled by the timeline.",
  parameters: "Connect values in your code to the Inspector and keyframes.",
  canvas: 'Drawing helpers available through clip.use("centi").',
  "centi-shapes": "Shapes, paths and curves. Coordinates use canvas pixels; angles use radians.",
  "centi-color": "Fills, strokes, transparent backgrounds and gradients.",
  "centi-transform": "Save drawing state and combine translation, rotation and scaling.",
  "centi-math": "Random values, continuous noise, range mapping and calculations based on time.",
  "centi-text": "Text, bitmap fonts, vectors, grids and nearest-neighbor queries.",
  p5: "Set up p5.js and synchronize your sketches with the MacroFlush timeline.",
  events: "Composition playback, events and audio analysis.",
  player: "Control playback from the web page hosting the Player."
};

export const apiDescriptions = {
  ...threeDDescriptions,
  ...featureDescriptions,
  setup: "Register a Clip initialization callback. Use it to set a fixed canvas size and initial values. A numeric-literal size(720, 405) written directly inside setup() is synchronized to the Inspector size when you edit the source in the Editor. Specify dynamic sizes in onFrame().",
  onframe: "Called whenever the host delivers a frame. Draw from the supplied time instead of starting a separate animation loop inside the Clip.",
  "composition-time": "Seconds and frames measured from the Composition playhead. These differ from time / frame, which are relative to the Clip's In point. Use composition time to synchronize multiple Clips.",
  defineparams: "Declare the types, defaults and ranges of exposed parameters. Supported types are number, string, boolean, color, vec2, vec3 and select.",
  "clip-params": "Read and write declared parameters directly. Keyframe values take priority during keyed intervals. Set writable: false to disable script-driven updates to the host.",
  comp: "Composition parameters are shared by Clips in the same Composition. Create them in the Inspector with no Clip selected.",
  getparam: "Read an interpolated parameter from another Clip placement in the same Composition, as evaluated at the start of the frame. Supply the placement ID from the Timeline, rather than an asset name.",
  centi: "Enable the Centi Canvas2D helpers. By default, they are available as global functions.",
  size: "Set the canvas dimensions in pixels. Set a fixed size in the Inspector, or write it directly inside setup() as two positive numeric literals, such as size(720, 405) (sz is the same). When you edit the source in the Editor and the literals change, the edited placement's Inspector size and its asset template's initial value are updated in one Undo step. Other existing placements are unchanged, and merely opening an existing project does not synchronize. A valid intermediate value can briefly appear in the Preview 300 ms after you type. Not covered: p5, instances, member calls such as c.size(), branches, nested functions and dynamic arguments. At runtime the host reapplies its parameters after setup(), so call dynamic sizes in onFrame() before drawing; those changes update the Clip's size parameter, are saved, and can mark the project unsaved. This is separate from p5's createCanvas().",
  color: "bg() clears the canvas with the background color; col() sets the color for subsequent drawing. Both accept CSS colors or RGB(A) values.",
  shapes: "Draw basic shapes. The third argument of oval() is a radius. Switch between fill and stroke modes with fill() / stroke(), and set stroke width with lineWidth().",
  getcontext: "Get Centi's CanvasRenderingContext2D to draw with the standard Canvas2D API.",
  "centi-dimensions": "Centi canvas dimensions and center coordinates. After size(), width / height are the drawing canvas dimensions in pixels, and cx / cy are half those values. These may differ from the Composition dimensions.",
  "centi-namespace": "Access helpers through the returned namespace without adding global functions. Useful when your own function names would conflict. This does not allow Centi and p5 global mode to run together in the same Clip. A member call such as c.size() is not synchronized to the Inspector as a setup() declaration and is overridden after setup() at runtime, so call it in onFrame() before drawing.",
  "centi-rect": "Draw a rectangle using its top-left position, width and height. To center it around an origin, translate first, then use negative half-width and half-height for the position.",
  "centi-oval": "Draw a circle using its center and radius. The third argument is not a diameter. Supply resolution to draw a polygon with that many vertices. Combine with scale(x, y) to draw an ellipse.",
  "centi-line": "Draw a line segment between two endpoints, using the current color and stroke width. ln() is an alias for line().",
  "centi-tri": "Draw a triangle from three vertices. You can also pass three {x, y} points as tri(a, b, c). Use fill() / stroke() to select the drawing mode.",
  "centi-arc": "Draw an arc using a center, radius, start angle and end angle. Angles are in radians. For an outline, set stroke() and lineWidth().",
  "centi-path": "Build a custom path. Start with beginShape(), set the first point with moveTo(), add vertices with lineTo(), then draw with endShape() using the current fill or stroke mode.",
  "centi-lines": "Append an array of points to the current path. Call beginShape() before lines(), and endShape() afterward to draw it. Accepts {x, y} points or a flat numeric array [x0, y0, x1, y1, ...]. Use closed to close the shape.",
  "centi-pixel": "Draw a pixel at the specified position. Useful for collections of tiny points and low-resolution visuals.",
  "centi-clear": "clear() and clr() without arguments erase the canvas and repaint the current background color. The initial background is transparent, but after bg(20), clear() uses that color. Set bg(0, 0) to restore transparency. bg() accepts grayscale, RGB(A) or CSS colors; clr(number) with one argument treats it as 0xRRGGBB. Whether you repaint every frame also determines whether trails remain.",
  "centi-col": "Set the drawing color using a CSS color, grayscale or RGB(A) channels. RGB(A) channels use 0–255. hcol() accepts an integer in 0xRRGGBB format. The color applies to both fills and strokes.",
  "centi-fill-stroke": "Switch to filled shapes with fill(), or outlines with stroke(). strk() aliases stroke(); lw() aliases lineWidth(). These switch Centi's drawing mode and differ from p5's fill(color) / stroke(color).",
  "centi-grad": "Create a linear gradient with grad(x0, y0, x1, y1), then add color stops at positions from 0 to 1 with gradColor(). Draw your shapes afterward. gradHex() accepts integer hex colors.",
  "centi-gradr": "Create a radial gradient using two centers and radii. Set color stops with gradColor() / gradHex().",
  "centi-hex": "Convert between #rrggbb strings and integers in 0xRRGGBB format. hexToInt() only accepts six-digit #rrggbb strings; intToHex() accepts integers from 0 to 0xffffff. Invalid formats or out-of-range values throw an error.",
  "centi-push-pop": "Save and restore the canvas drawing state. Pair push() with pop() when changing translation, rotation or scale locally. This prevents transforms in a loop from accumulating onto the next shape.",
  "centi-translate": "Move the drawing coordinate origin. This affects drawing inside the canvas, rather than the entire Clip's Inspector position.",
  "centi-rotate": "Rotate coordinates around the current origin. Centi rotate() uses radians; Inspector rotation uses degrees. Convert with d2r() / r2d().",
  "centi-scale": "Scale the drawing coordinates. With x alone, both axes use the same factor. transform() applies a six-component Canvas2D matrix for transformations such as shear.",
  "centi-random": "Get a random value. rnd(max) uses 0 to max; rnd(min, max) uses the specified range. Stateful random sequences and accumulated frame updates depend on playback history and do not necessarily reproduce like drawing calculated directly from time.",
  "centi-noise": "Get smoothly changing noise for continuous inputs. Combine spatial coordinates and time to create smoother motion and contours than independent random values.",
  "centi-map": "map(value, inMin, inMax, outMin, outMax) maps ranges without clamping. zmap() clamps the result to the output range; specify outMin ≤ outMax. minMax(value, min, max) clamps a value, while wrap(value, min, max) wraps it within the range.",
  "centi-math-globals": "Math-derived functions are available globally. PI2 is 2π; sin() / cos() also take radians. Convert time to a phase to create periodic motion independent of previous frames.",
  "centi-font": "Set the font and size with font(), then draw text with text(value, x, y, size?). Fonts embedded through File > Load Font can be selected by filename without the extension. textFit() draws text with a maximum width.",
  "centi-bitmap": "Draw text with the bundled bitmap font. bitmapFont() and bitmapText() are also available. bm5x8() and getBitmapFontCode() let you work with a single character's bit pattern.",
  "centi-vec2": "Create a 2D vector with x and y. Pass it to shapes and geometry helpers that accept points, or use vector operations such as rotate(). This rotates the point itself, separately from the canvas coordinate transform.",
  "centi-grid": "Return an array of cells with indices ix / iy, positions x / y and dimensions w / h. Build repeating patterns without writing a nested loop yourself.",
  "centi-nears": "Register points for nearest-neighbor queries with tree(), then retrieve nearby points with nears(). Returns arrays of [point, squared distance]. The third argument's distance limit also uses squared-distance units. Both stored points and the query point have {x, y} coordinates.",
  "centi-curve": "curve(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2) draws a cubic Bézier curve. curveTo(cp1x, cp1y, cp2x, cp2y, x2, y2) appends to the current path using six values for the two control points and endpoint.",
  "centi-line-style": "lineJoin uses 0: bevel, 1: round, 2: miter. lineCap uses 0: butt, 1: round, 2: square. Aliases lj() / lc() are also available. Pass Centi's numeric values instead of Canvas string names.",
  "centi-blend": "Set canvas compositing by number: 0: source-over, 1: multiply, 2: screen, 3: overlay, 4: darken, 5: lighten, 6: color-dodge, 7: color-burn, 8: hard-light, 9: soft-light, 10: difference, 11: exclusion, 12: hue, 13: saturation, 14: color, 15: luminosity. This is separate from a Clip's blendMode on the Timeline.",
  "centi-interp": "interp() uses a + (b - a) × rate, the same as a typical lerp(a, b, rate): rate 0 returns a and rate 1 returns b. The original Centi used b + (a - b) × rate, so swap the first two arguments in code moved over from Centi. dist() returns the distance between two points, accepting either two {x, y} objects or four values x1, y1, x2, y2.",
  "centi-collections": "loop(start, end, callback) iterates inclusively in either direction. leave(array, count) returns the last count items; remove(array, predicate) returns items that do not match the predicate. sortNum() and reverse() modify the array in place. avg() returns the average; fold() sums numbers.",
  "centi-tween": "Interpolate an object's numeric properties in sync with the Timeline. Durations in to(), delay() and times in start() use milliseconds. Chain repeat(), yoyo(), easing(), onUpdate() and onComplete(). Centi's runtime updates the tween, so no separate timer is needed.",
  "centi-easing": "Functions passed to a tween's easing(). Use namespaces such as ease.Linear.None and ease.Quadratic.In / Out / InOut, or global names such as QuadInOut. Back, Elastic, Bounce and SmoothStep are also available. This differs from the string format used for keyframe easing.",
  "p5-install": "MacroFlush does not bundle or automatically fetch p5.js. In the browser Editor, you can open a saved project with the p5 library embedded. In the Electron app, use Project > Load Script > Add Library from URL... to import a version-pinned URL as a Global script. Select it under the Clip's Inspector > Libraries, add clip.use(\"p5\") to JavaScript and save, then enable p5.js global mode in the Inspector. The declaration alone does not enable the capability. Versions verified in the app are 1.11.1 / 1.11.11.",
  "p5-global": "Write sketches using standard p5 global-mode functions. Select the library and enable p5.js global mode in the Inspector. setup runs once at initialization; draw runs on each Master Timeline tick. The syntax differs from Centi's setup(callback) / onFrame(callback). HTML and CSS can usually remain empty.",
  "p5-time": "millis() is Clip-local time in seconds × 1000; frameCount is the local frame + 1. deltaTime is 0 at frame 0, otherwise 1000 / Composition FPS. Reading frameRate() returns Composition FPS. Calculate drawing state from these values instead of advancing time through a separate loop or draw count.",
  "p5-sizing": "windowWidth / windowHeight are the Composition dimensions, independent of preview zoom. The default pixel density is 1. Use createCanvas(windowWidth, windowHeight) to match the Composition. WEBGL is supported in ordinary timeline mode.",
  "p5-params": "clip.defineParams() and direct parameter access also work with the p5 capability. Read Inspector and keyframe-controlled values in draw(). In this mode, clip() can also be called as p5's clipping function, so typeof clip is function.",
  "p5-loop": "The Timeline controls rendering in the p5 global capability. loop() / redraw() cannot add draws, frameRate() cannot change the playback rate, and noLoop() does not stop the Timeline. Play, pause and seek through MacroFlush's Transport.",
  "p5-input": "Ordinary live mouse, keyboard and touch callbacks are unsupported. Without a Feedback Pointer assignment, input values stay fixed and mouse callbacks do not run. Assign a recorded Pointer in the Inspector and Apply to replay supported p5 mouse input. Seeking samples the current state; forward playback delivers recorded events.",
  "p5-seeking": "Ordinary timeline mode does not reset or rerun sketch state when seeking. Accumulated variables, canvas trails and random sequences depend on execution history. Initial random / noise seeds are fixed per Clip, and explicit seeds are respected, but this alone does not guarantee reproducible arbitrary seeking. Calculating directly from time and redrawing each frame is easier to manage.",
  "p5-isolated": "For stateful synchronous 2D sketches, the Inspector offers experimental Isolated replay. On a non-contiguous seek, a separate execution environment reruns draw from frame 0 to the target frame, flooring fractional frames. Saved parameters and keyframes are evaluated for each historical frame. WEBGL, framebuffers, additional execution libraries, MacroFlush lifecycle, add(), access to other Clips or the Composition, runtime parameter writes and Feedback history replay are unsupported.",
  "p5-replay-limits": "Defaults are 1200 prefix draws / 5000 ms of synchronous draw time; host maximums are 6000 draws / 30000 ms. Set Prefix draws and Draw time under Inspector > Replay limits, then explicitly Apply. Use defaults restores the defaults. The prefix limit is not a total frame limit for a long continuous export. Limits do not increase automatically, and unsupported sketches have no implicit fallback. The MCP example below is app-only; Inspector settings also work in the browser Editor.",
  "p5-limitations": "setup / draw must be synchronous. preload, p5 external loaders, p5.sound / Tone, live input / keyboard / touch callbacks, and combining Centi / Centi3D in the same Clip are unsupported. Select the p5 library as a Global script under Libraries. If p5 functions are undefined because the library is missing, adding a separate loop will not solve it.",
  "p5-instance": "The legacy approach without the p5 capability. Select p5 1.11.11 as a Global script and place the switch to disable automatic global startup at the beginning of the HTML tab. Combine noLoop() and redraw() in instance mode, drawing from onFrame time. The instance's own millis / frameCount do not synchronize with the Timeline. This startup workaround is not guaranteed for every p5 version.",
  cue: "Define Composition Cues in the Cues tab. Supported modes are stop, loop and none. Do not use this definition in an ordinary HTML Clip's JavaScript.",
  go: "go() moves the playhead to a named Cue. onCue() registers a callback for when the Clip enters an existing Cue.",
  audio: "Get the band energy of an audio asset loaded into the Project, from 0 to 1. Specify low / mid / high; sampling follows the Composition playhead. Returns 0 when the corresponding audio Clip is inactive.",
  createplayer: "Import from macroflush-player.js generated by the app build. Create a Player with project and canvas, then wait for ready before playback.",
  tick: "Supply a drawing time or frame from the host. The embedding web page controls time, separately from onFrame() inside the Clip.",
  "player-angle-unit": "In the Player's numeric controls (setClipParam / getClipParam / set / get), managed 3D XYZ rotation and Light angle use radians by default. Pass angleUnit: \"degrees\" to createClipPlayer() to read and write them in degrees, including nested Composition addresses. Project files, Three.js in Scripts, fov, 2D transforms and custom parameters keep their units.",
  destroy: "Release Player resources when the embedding view is removed. Stop the host's animation loop as well."
};

export const lessonTranslations = {
  "timeline-3d": threeDLessonEnglish,
  "first-clip": {
    title: "Create your first Clip", summary: "Draw a circle on a canvas and animate it with the timeline.",
    steps: [
      { title: "Prepare an HTML Clip", text: "Open MacroFlush and create an HTML Clip in the Project panel. Place it on the Composition Timeline and select it. Edit its source in the HTML / CSS / JavaScript tabs. For this example, leave HTML and CSS empty." },
      { title: "Write the JavaScript", text: "Paste the following code into the JavaScript tab and save. Centi prepares the canvas, and setup() sets its dimensions." },
      { title: "Play and explore time", text: "Press Play on the Timeline to move the circle left and right. Drag the playhead to inspect any time. Because drawing is calculated from time, it does not depend on the previous frame. Use onFrame() rather than requestAnimationFrame() inside the Clip." },
      { title: "Change the example", text: "Try changing the radius from 30 to 60 and the horizontal movement from 120 to 200. In the next tutorial, you will expose these kinds of values as parameters controlled from the Inspector." }
    ]
  },
  parameters: {
    title: "Expose parameters", summary: "Make values in your code editable in the Inspector.",
    steps: [
      { title: "Declare speed and color", text: "Replace your first Clip's JavaScript with this code. clip.defineParams() declares parameter types, defaults and editable ranges together." },
      { title: "Edit values in the Inspector", text: "Save the code and select the Clip. speed and tint appear in the Inspector. Set speed to 0 to stop movement, or to 2 to move faster. Change tint to recolor the circle." },
      { title: "Add keyframes", text: "Move the playhead to the first frame, then add a keyframe using the Inspector's Key control for speed. Move to another frame, change the value and add another key. The timeline interpolates between them. Adjust the interpolation in Curve view." }
    ]
  },
  composition: {
    title: "Compose layered Clips", summary: "Build a scene with layers, transforms and Cues.",
    steps: [
      { title: "Place two Clips", text: "Copy another example's code and create a second HTML Clip. Place it on a different Timeline layer and overlap the playback ranges. Each Clip runs as an independent web document." },
      { title: "Use a transparent background", text: "In the upper Clip, set a transparent background with bg(0, 0) and redraw each frame with clear(). Also remove any fillRect() that paints an opaque background so the lower layer shows through. Adjust position, scale, rotation and opacity in the Inspector." },
      { title: "Define sections with Cues", text: "Write Cue definitions in the code editor's Cues tab. These belong to the entire Composition, rather than an ordinary Clip's JavaScript. Check the Cue ranges and modes shown on the Timeline." }
    ]
  },
  export: {
    title: "Export your motion", summary: "Export PNG sequences, MP4 and ProRes from the desktop app.",
    steps: [
      { title: "Check the Composition", text: "Open your project in the Electron version of MacroFlush and select the Composition to export. Preview the first, middle and last frames. This tutorial covers HTML Clips drawing with Centi's canvas." },
      { title: "Open Export Media", text: "Choose a format under File > Export Media. PNG Sequence exports image sequences, H.264 MP4 exports video, and Apple ProRes MOV exports video for editing. Set the frame range and output resolution, then export." },
      { title: "Choose output settings", text: "For MP4, adjust quality with CRF or a target bitrate. For transparency, choose PNG or ProRes 4444 / 4444 XQ, which retain alpha. Audio Clips placed on the Timeline can be mixed into the output." },
      { title: "Review the files", text: "Check the exported resolution, duration, audio and alpha when needed. Current export support has Clip-specific limits. Check the app's README for support for nested Compositions, WGSL, DOM-only HTML Clips and other formats." }
    ]
  }
};
