## Repository snapshot

- This repository currently contains a minimal extension-like project rooted at the workspace root. Files of interest:
  - `manifest.json` — extension metadata file (currently empty in this workspace snapshot).
  - `icon.png`, `icon_128.png` — packaged icon assets at repo root.
  - `Image/Salahaddin Logo.png` — additional image asset.

## Purpose for AI coding agents

Make small, low-risk edits to implement or complete a browser extension manifest and related assets. Prefer conservative changes and call out assumptions when the manifest is incomplete.

## Key patterns & conventions (discoverable in repo)

- Single manifest-driven extension: the repository appears to be organized around a top-level `manifest.json`. Treat this file as the single source of truth for extension metadata (name, version, permissions, background/service workers, content scripts, icons).
- Icons live at repository root (`icon.png`, `icon_128.png`) and additional images are in `Image/`. When referencing images from `manifest.json`, use relative paths matching these locations.
- No build tooling present: there is no `package.json`, build scripts, or test harness in the workspace. Expect manual testing (load unpacked extension in browser) unless the repo is expanded.

## What to do first (agent checklist)

1. Open `manifest.json`. If it's empty, add only the minimal fields required for a valid manifest (use manifest v2 or v3 depending on user preference — ask if unsure). Example minimal manifest v3 snippet:

```json
{
  "manifest_version": 3,
  "name": "<extension name>",
  "version": "0.1.0",
  "icons": { "128": "icon_128.png", "48": "icon.png" }
}
```

2. When adding fields, reference existing asset filenames exactly: e.g., use `"icon_128.png"` and `"icon.png"` paths. If you add new image files, place them under `Image/` or root and update `manifest.json` accordingly.

3. Avoid creating heavy toolchains. If a build step is necessary later, add a `README.md` and `package.json` only after confirming user intent.

## Developer workflows (what's provable from repo)

- Local testing: load the folder containing `manifest.json` as an unpacked extension in Chrome/Edge (Extensions > Developer mode > Load unpacked → select this project folder). No other automated commands are present.
- Debugging: use browser extension debugging tools (inspect background/service worker, content script console). There are no run configurations in the repo.

## Integration points & risks for the agent

- External APIs / services: none present or referenced in repository files — do not invent external credentials or endpoints. Ask the user if integration is required.
- Dangerous broad changes: do not add permissions (e.g., `<all_urls>`) unless the user explicitly requests and documents why. Prefer minimal permission surfaces.

## Examples of acceptable edits

- Populate `manifest.json` with minimal, valid manifest entries and correctly referenced icons.
- Add lightweight README.md documenting how to load the extension manually (one-paragraph, steps to load unpacked extension).

## What to ask the user when uncertain

- Which manifest version do you want (v2 vs v3)?
- Do you want any specific permissions or content scripts added? If yes, provide the intended URLs and behavior.

---

If you want, I can: (A) populate a minimal `manifest.json` using manifest v3 and add a short `README.md` showing how to load the extension, or (B) wait for your guidance about manifest version and permissions. Which would you prefer? 
