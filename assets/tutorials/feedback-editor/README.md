# Feedback Editor screenshots

Captured from the repository's actual browser Editor in Chrome on 2026-11-14. JPEGs are 3342 × 2554 and include browser context.

- `01-workspace.jpg`: opened `workshop-feedback-editor-start`, used Inspector Edit source…, maximized Editor, selected Stroke 01 and changed its first point X from 160 to 190. Local Undo restored 160; Redo restored 190. The screenshot shows the unapplied state.
- `02-save-menu.jpg`: the same draft with Save open, displaying Add as new, Replace original, Export Feedback JSON and Discard.

After capture, Add as new was exercised through its confirmation dialog: Project gained `Hand Take_copy` while the original `Hand Take` and the Clip's `takeName` reference remained unchanged. The local browser project was a disposable copy; the authored JSONs on disk were not changed by these UI checks.

This records browser UI checks performed for the website. It does not retroactively change the neighboring application's published native-app validation history.
