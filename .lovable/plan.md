# Ship `@alex-oden/ui` as a GitHub-installable package

Restructure the repo so it serves double duty: the existing Lovable showcase site keeps working exactly as-is, and the same source tree also builds a distributable npm package (`@alex-oden/ui`) that downstream Vite + Tailwind v4 + React 19 apps can install straight from a GitHub tag.

No component moves, no token renames, no visual changes. Additive only.

---

## 1. Package manifest (`package.json`)

Rewrite metadata and dependency layout:

- `name`: `@alex-oden/ui`, `version`: `1.0.0`, `type`: `module`, `sideEffects`: `["**/*.css"]`, `files`: `["dist"]`.
- `main` / `module` → `./dist/index.js`, `types` → `./dist/index.d.ts`.
- `exports` map:
  - `.` → `{ types: ./dist/index.d.ts, import: ./dist/index.js }`
  - `./styles.css` → `./dist/styles.css`
  - `./tokens.css` → `./dist/tokens.css`
  - `./components/*` → mirrored `.d.ts` + `.js` per component
- `peerDependencies`: `react ^19`, `react-dom ^19`, `tailwindcss ^4`.
- Move into `dependencies` (must ship with the package):
  every `@radix-ui/*`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `sonner`, `embla-carousel-react`, `cmdk`, `vaul`, `input-otp`, `react-hook-form`, `zod`, `@hookform/resolvers`, `react-day-picker`, `react-resizable-panels`, `recharts`, `tw-animate-css`, `input-otp`.
- Keep Vite, TanStack Start, ESLint, tsgo, etc. in `devDependencies`.
- Scripts:
  - `build` — unchanged app build
  - `build:lib` — `vite build --config vite.lib.config.ts`
  - `typecheck` — `tsgo -p tsconfig.lib.json`
  - `prepack` — `bun run build:lib`

## 2. Library entry point (`src/lib-entry.ts`)

New file re-exporting every reusable primitive:

- `export * from "./lib/utils"` (for `cn`)
- One line per file in `src/components/ui/*` (all 40+ components: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, banner, border-glow, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, field, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, segmented, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip).
- No showcase files, no routes, no `src/components/showcase-*`.

## 3. Library build config

**`vite.lib.config.ts`** — separate from app config, plain `vite` (not the Lovable TanStack wrapper):

- `build.lib`: entry `src/lib-entry.ts`, formats `["es"]`, `fileName: "index"`.
- `build.outDir: "dist"`, `emptyOutDir: true`.
- `build.rollupOptions.output.preserveModules: true`, `preserveModulesRoot: "src"` → mirrors `components/ui/*` into `dist/components/ui/*`.
- `external`: regex matching `^react`, `^react-dom`, `^react/jsx-runtime`, plus every peer + runtime dep (`^@radix-ui/`, `^lucide-react`, `^class-variance-authority`, `^clsx`, `^tailwind-merge`, `^sonner`, `^embla-carousel-react`, `^cmdk`, `^vaul`, `^input-otp`, `^react-hook-form`, `^zod`, `^@hookform/`, `^react-day-picker`, `^react-resizable-panels`, `^recharts`, `^tw-animate-css`) so nested imports stay external.
- Plugins:
  - `vite-plugin-dts` (added as devDependency) — emits `.d.ts` next to `.js`, respects `preserveModules`.
  - Small inline plugin (`closeBundle` hook) that:
    - Copies `src/styles.css` verbatim to `dist/styles.css`.
    - Writes `dist/tokens.css` = `src/styles.css` with the `@import "tailwindcss"`, `@source`, and `@import "tw-animate-css"` lines stripped. Keeps `@theme`, `@theme inline`, `:root`, `.light`, `@utility`, `@keyframes`, `@layer base`, `@custom-variant`.
    - Copies `src/components/ui/border-glow.css` into the mirrored `dist/components/ui/`.
- Path alias `@` → `src` so component imports resolve during library build.

**`tsconfig.lib.json`** — extends base:

- `compilerOptions`: `declaration: true`, `emitDeclarationOnly: false`, `noEmit: false`, `outDir: "dist"`, `rootDir: "src"`, keeps `paths` alias.
- `include`: `["src/lib-entry.ts", "src/components/ui/**/*", "src/lib/utils.ts"]`.
- `exclude`: routes, server files, showcase components.

## 4. `README.md` (overwrite)

Consumer-facing install + wire-up + component table. Structure:

```text
# @alex-oden/ui

## Install
bun add github:<org>/neospower-ui#v1.0.0

## Tailwind v4 wire-up
# src/styles.css
@import "tailwindcss";
@import "@alex-oden/ui/tokens.css";
@source "../node_modules/@alex-oden/ui/dist";

## Usage
import { Button, Card, Field } from "@alex-oden/ui";
import "@alex-oden/ui/styles.css"; // optional full stylesheet

## Fonts
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans/index.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist-mono/index.css" />

## Components
| Name | Import | Description |
| ---- | ------ | ----------- |
| Button | `import { Button } from "@alex-oden/ui"` | Brand-gradient CTA with variants |
| ... (auto-generated for all 40+ components)
```

Table rows derived by reading each file's top JSDoc / export list.

## 5. Versioning & release

- **`CHANGELOG.md`** seeded with `## 1.0.0 — Initial package release` and a bullet list of shipped primitives.
- **`.github/workflows/release.yml`** — on `push: tags: ['v*']`:
  1. `actions/checkout@v4`
  2. `oven-sh/setup-bun@v2`
  3. `bun install --frozen-lockfile`
  4. `bun run typecheck`
  5. `bun run build:lib`
  6. `softprops/action-gh-release@v2` uploading `dist/**`.
  - No `npm publish` step.

## 6. Guardrails / verification

- Showcase routes, tokens, prop APIs, and file locations unchanged.
- Radix stays external — verified via `rollupOptions.external` regex.
- After `bun run build:lib`, confirm `dist/` contains `index.js`, `index.d.ts`, `styles.css`, `tokens.css`, and a mirrored `components/ui/*.js` + `*.d.ts` tree.
- Report the final `dist/` tree (`find dist -type f | sort`) in the response.
- If Rollup warns about unresolved externals, extend the regex until clean.

## Out of scope

No npm publish, no monorepo split, no showcase content changes, no token renames.

---

## Technical notes

- Vite library mode with `preserveModules` gives per-component chunks → satisfies the `./components/*` subpath export.
- `vite-plugin-dts` (rollup=`preserveModules`-aware) produces the parallel `.d.ts` tree in one pass.
- `tokens.css` must omit `@import "tailwindcss"` because the consumer app owns that import (avoids Tailwind being registered twice / Lightning-CSS conflicts).
- `@source "../node_modules/@alex-oden/ui/dist"` in the consumer's `styles.css` is required so Tailwind v4's Lightning-CSS scanner sees the utility classes used inside compiled component JS.
- `sideEffects: ["**/*.css"]` lets bundlers tree-shake JS but keep CSS side effects.
- `prepack` ensures `bun pack` / GitHub tarball installs get a built `dist/`.
- `peerDependencies` on Tailwind v4 (not a `dependency`) prevents version drift with the host app.
