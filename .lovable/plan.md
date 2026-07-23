## Goal
Add a more square, minimalist card aesthetic to the library, plus one full-bleed (edge-to-edge) card style — inspired by the uploaded references (sharp corners, thin hairline dividers between cells, mono eyebrows, large display numerals, restrained brand accent).

## Reference read
- Screenshots show: sharp/near-zero radius, ultra-thin vertical dividers between adjacent cells, uppercase mono eyebrow, oversized display value with brand-violet color, muted description below.
- Second screenshot: same language applied as a single rounded outer container with 4 inner cells separated by hairlines.
- Third screenshot: same row rendered edge-to-edge across the viewport with no outer border, only a top+bottom hairline.

## New components (in `src/components/ui/`)

1. **`MinimalCard`** — `minimal-card.tsx`
   - Square corners (`rounded-none` or `rounded-sm`), 1px border, no shadow, no hover lift.
   - Slots: `eyebrow` (mono uppercase), `value` (large display, brand color via `text-brand-end`), `description` (muted).
   - Optional `trend` arrow prefix in the eyebrow (↑ / ↓).
   - Variant prop: `tone: "default" | "brand"` (brand = value in brand gradient/violet).

2. **`MinimalCardRow`** — `minimal-card-row.tsx`
   - Container that arranges N `MinimalCard`s in a single row with hairline vertical dividers between them (no gaps).
   - Prop `bleed: "contained" | "full"`:
     - `contained` → rounded outer border wrapping the row (matches screenshot #2).
     - `full` → no outer border/radius, only top + bottom hairlines, stretches edge-to-edge of its parent (matches screenshot #3, meant to be dropped into a full-width page section).
   - Responsive: collapses to 2-col on tablet, 1-col stacked on mobile with horizontal hairlines instead of vertical.

3. **`ProcessCard`** (bonus, matches first uploaded ref) — `process-card.tsx`
   - Numbered step card: `01 / 04` mono index in brand color, title, description, and a small brand gradient bar + meta label at the bottom (e.g. "~ 7 DAYS").
   - Used inside `MinimalCardRow` the same way for a "process/steps" pattern.

## Exports
- Add all three components to `src/index.ts` for library consumers.

## Showcase updates (`src/routes/_showcase.cards.tsx`)
Add three new `Section`s at the top of the page (before existing SurfaceCard):
1. **MinimalCard — contained row** — 4 KPI cells inside a rounded container with hairline dividers (recreates screenshot #2 exactly).
2. **MinimalCard — full-bleed row** — same 4 cells rendered edge-to-edge across the showcase content width, no outer radius, top/bottom hairlines only (recreates screenshot #3). Use a negative-margin wrapper so it visually breaks out of the `max-w-4xl` DocPage container.
3. **ProcessCard row** — 4-step process (Feasibility & quote → Install & commission → Optimize & trade → Share returns) recreating screenshot #1.

## Tokens / CSS
- No new tokens required; reuse `--brand-start`, `--brand-end`, `--border`, `--muted-foreground`, `--font-mono`.
- Add a small utility class `np-hairline` in `src/styles.css` only if needed for the 1px `border-color: hsl(var(--border) / 0.6)` divider treatment; otherwise inline with Tailwind arbitrary values.

## Versioning
- Bump `package.json` from `1.3.3` → `1.4.0` (new components = minor).
- Rebuild `dist/` via `bun run build:lib` so consumers pulling the tag get the new exports.
- Update README component list.

## Out of scope
- No changes to existing card components (SurfaceCard, GlassCard, etc.).
- No new tokens, no motion changes.
- Git push / tag creation stays a manual user step as before.
