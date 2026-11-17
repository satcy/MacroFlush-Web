# p5 Timeline tutorial captures

Actual screenshots of the repository's browser Editor, recaptured in Google Chrome
through Playwright on 2026-11-17. The JPEGs are 3342 × 2554 pixels (1671 × 1277 CSS
viewport, device scale factor 2). Page-content capture includes only the Editor:
no browser tab bar, address bar, sidebar, or desktop chrome is included.

1. `01-start.jpg`: `tutorial-p5-start` opened through OnlineEditor, static circle.
2. `02-libraries.jpg`: the starter with Libraries expanded, p5.js 1.11.1 attached and p5 global mode enabled.
3. `03-parameters.jpg`: the starter after entering the article's complete code, clicking Create Parameters and collapsing Transform / Appearance. No keys yet.
4. `04-keyframes.jpg`: the same edited starter after adding the three spread keys through the Inspector and seeking to frame 240. Linear interpolation; spread 1.

The completed source is copied directly from `p5OrbitCode` into the real Monaco
editor through its public model API, preserving its exact formatting and using
the Editor's normal automatic source update. Parameters are added with the real
Create Parameters button, and all three keys are entered through the Inspector
and Timeline controls. The key list is verified as 0:0.65 / 240:1 / 479:0.65,
all Linear, with speed 1 and no speed keys. No project JSON, Editor distribution,
DOM styling, or image content is altered for capture.

No fabricated Editor UI or replacement drawing is used. Both languages share
these captures with localized captions in `src/p5-tutorial-content.js`.
