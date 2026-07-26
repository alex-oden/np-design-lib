## Goal
Port the five distinctive layered background treatments from the NeosPower home into the design library as reusable, themable primitives, and document them in a new showcase route. Ship as `v1.5.0`.

## What I found in `styles.css`
Five distinct treatments (each is 1–3 stacked absolutely-positioned layers using the brand tokens `--brand-start` / `--brand-end`):

1. **Page aurora** (`.page-bg` + `::before` + `::after`) — fixed fullscreen base + top blue radial + bottom magenta radial + 3px/7px dual dot-noise overlay at `mix-blend-mode: overlay`.
2. **Hero aurora** (`.hero-aurora` + `.aurora-blob-1/2/3`) — 3 floating blurred (`blur(90px)`) blobs: blue 620px top-left, magenta 560px top-right, green 420px bottom-center; each animated with slow float keyframes, `mix-blend-mode: screen`.
3. **Grid glow** (`.bess-bg-grid` + `.bess-bg-glow`, also `.cta-bg`) — 64px linear-gradient grid lines with radial ellipse mask + dual radial brand glow (blue 25%/50%, magenta 80%/30%).
4. **Dot field** (`.bess-visual-grid` + `.bess-visual-glow`) — 22px radial-dot pattern with center ellipse mask + big blurred brand-radial glow behind it.
5. **Spotlight glow** (`.features`, `.contact-section::before`, `.footer`) — single or dual radial brand glows placed at the top or corners of a section, no grid/noise.

## New components (in `src/components/ui/`)

### `theme-background.tsx` — one component, variant prop
```tsx
<ThemeBackground variant="page-aurora" | "hero-aurora" | "grid-glow" | "dot-field" | "spotlight" />
```
- Renders a `position: absolute inset-0` layered div-stack (fixed for `page-aurora`); `pointer-events: none`, `z-index: 0`; consumer wraps content in `relative z-10`.
- Each variant composes 1–3 absolutely-positioned divs so we can keep everything in JSX (no `::before/::after` needed) and stay Tailwind-v4 friendly.
- Props:
  - `variant` (required)
  - `intensity?: "subtle" | "balanced" | "vivid"` — scales the glow opacity (matches the `TWEAK_DEFAULTS.aurora` values from the source: subtle/balanced/vivid map to 0.6× / 1× / 1.4× opacity).
  - `accent?: "brand" | "green"` — swaps the magenta stop for `--brand-cyan` / green, matching the `accent` tweak.
  - `animated?: boolean` (default true for hero-aurora, false otherwise) — turns off the float keyframes; auto-off under `prefers-reduced-motion`.
  - `className?`, `style?` for positioning tweaks.

### Utility classes in `src/styles.css`
Add lightweight `@utility` classes so the same effects are usable in plain className usage without the component:
- `bg-page-aurora` — the noise-dot + dual radial glow (no fixed positioning; consumer decides).
- `bg-grid-glow` — grid-line background + radial ellipse mask.
- `bg-dot-field` — dot-pattern background + radial ellipse mask.
- `bg-spotlight-top`, `bg-spotlight-corners` — single/dual radial brand glow.

The hero-aurora stays component-only (3 animated children can't live in one utility).

### Keyframes
Add `@keyframes np-float-1/2/3` (translate + scale, 22s/28s/32s, ease-in-out infinite) to `src/styles.css`, ported verbatim from source. Disable inside `@media (prefers-reduced-motion: reduce)`.

## Showcase route: `src/routes/_showcase.backgrounds.tsx`
New sidebar entry under **Foundations** (after Spacing & shadows). One `Section` per variant, each rendering a bordered stage (h ~360px) with the background and a small caption. Include:
- Live preview of each of the 5 variants.
- Intensity toggle (subtle / balanced / vivid) — reuse existing `Segmented` component.
- Accent toggle (brand / green) — Segmented.
- Copy-paste code snippet under each preview (both `<ThemeBackground>` and utility form where applicable).

Add to `showcase-sidebar.tsx` Foundations group.

## Exports
- Add `export * from "./components/ui/theme-background"` to `src/index.ts`.

## Tokens
No new color tokens — all effects already resolve from `--brand-start`, `--brand-end`, `--brand-cyan`, `--background`. Keep opacity values inline (matches the source's approach so brand token changes cascade naturally).

## Versioning + release
- Bump `package.json` `1.4.0` → `1.5.0` (new feature).
- Rebuild `dist/` via `bun run build:lib`.
- Update `README.md` component list with the new `ThemeBackground` entry.
- The version pill in the sidebar/brand page updates automatically via `src/lib/version.ts`.

## Out of scope
- Not porting the Spline 3D scene — that's an external asset, not a background style.
- Not touching existing card components or the DocPage shell.
- No git push/tag — user does that step manually as before.
