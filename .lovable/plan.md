
## Problem

Version strings in the UI are hardcoded — the home page still shows `Design system · v1.0` and `v1.0 live` even though `package.json` is at `1.2.0`. My last pass only fixed docs/changelog and one badge, not the showcase.

## Fix

Create a single source of truth and wire it into every UI reference so future bumps propagate automatically.

### 1. `src/lib/version.ts` (new)
```ts
import pkg from "../../package.json" with { type: "json" };
export const APP_VERSION = pkg.version;           // "1.2.0"
export const APP_VERSION_SHORT = `v${pkg.version.split(".").slice(0, 2).join(".")}`; // "v1.2"
export const APP_VERSION_FULL = `v${pkg.version}`; // "v1.2.0"
```
Uses Vite's built-in JSON import — no build config change.

### 2. Replace hardcoded strings
- `src/routes/_showcase.index.tsx:52` → `Design system · {APP_VERSION_SHORT}`
- `src/routes/_showcase.index.tsx:79` → `{APP_VERSION_SHORT} live`
- `src/routes/_showcase.badges.tsx:38` → `{APP_VERSION_FULL}` (replaces the just-hardcoded `v1.2.0`)

### 3. Sidebar / other places
Grep confirms only the three occurrences above; sidebar wordmark doesn't display a version. Nothing else to change.

## Result
Bumping `package.json` version is now the only edit needed — every visible version chip updates on the next build.

## Out of scope
CHANGELOG entries stay manual (they describe release-specific changes).
