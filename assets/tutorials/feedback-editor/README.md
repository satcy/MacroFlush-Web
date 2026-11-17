# Feedback Editor screenshots

Recaptured from the repository's actual browser Editor in Chrome on 2026-11-17. JPEGs are 3342 × 2554 and contain only the Editor viewport, without the browser tab bar, address bar or sidebar. The viewport was 1671 × 1277 CSS pixels at device scale factor 2.

- `01-workspace.jpg`: opened `workshop-feedback-editor-start`, used Inspector Edit source…, maximized Editor, selected Stroke 01 and changed its first point X from 160 to 190. Local Undo restored 160; Redo restored 190. The screenshot shows the unapplied state.
- `02-save-menu.jpg`: the same draft with Save open, displaying Add as new, Replace original, Export Feedback JSON and Discard.

The current starter uses the Inspector-assigned Pointer source with `onMouseDown()`, `onMouseMove()` and `onMouseUp()`. Both captures show the same unapplied draft; no Save menu action was applied. The local browser project was a disposable copy; the authored JSONs on disk were not changed by these UI checks.

This records browser UI checks performed for the website. It does not retroactively change the neighboring application's published native-app validation history.
