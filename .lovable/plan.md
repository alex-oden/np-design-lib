
## Goal

Replace the single-page showcase with a proper documentation site for the NeosPower design system. Each section from your reference sidebar becomes its own route with dedicated SEO metadata. All existing NeosPower components stay as-is — this is purely a showcase/presentation change.

## Route structure

All routes live under a shared `_showcase` layout (pathless — URLs stay clean):

```
src/routes/
  __root.tsx                       (unchanged shell)
  _showcase.tsx                    (sidebar + <Outlet />)
  _showcase.index.tsx              (/  — overview / hero landing)
  _showcase.colors.tsx             (/colors)
  _showcase.typography.tsx         (/typography)
  _showcase.spacing.tsx            (/spacing)
  _showcase.buttons.tsx            (/buttons)
  _showcase.button-states.tsx      (/button-states)
  _showcase.inputs.tsx             (/inputs)
  _showcase.selection.tsx          (/selection)
  _showcase.cards.tsx              (/cards)
  _showcase.badges.tsx             (/badges)
  _showcase.alerts.tsx             (/alerts)
  _showcase.overlays.tsx           (/overlays)
  _showcase.loading.tsx            (/loading)
  _showcase.navigation.tsx         (/navigation)
  _showcase.data-viz.tsx           (/data-viz)
  _showcase.motion.tsx             (/motion)
  _showcase.iconography.tsx        (/iconography)
  _showcase.brand.tsx              (/brand)
```

Delete the current monolithic `src/routes/index.tsx` content and replace with a compact overview landing (hero + section grid linking to each doc page).

## Sidebar

New `src/components/showcase-sidebar.tsx` built on shadcn `Sidebar` primitives (already in the project). Grouped exactly like your screenshot:

- **Foundations** — Colors, Typography, Spacing & shadows
- **Components** — Buttons, Button states, Inputs & fields, Selection controls, Cards, Badges & status
- **Feedback & overlays** — Alerts & banners, Overlays, Loading & progress
- **Layout** — Navigation
- **Expression** — Data viz, Motion, Iconography, Brand

Active-route highlight via `useRouterState` + `Link activeProps`. Active pill styled with `bg-brand-gradient-soft` + brand-cyan dot to match the reference. `SidebarTrigger` in a slim top bar so it collapses to an icon rail on mobile.

## Section content

Each route exports `head()` with unique title/description/og tags and a `<section>` block that:

- Opens with an H1 + one-line intro (Geist sans).
- Shows live examples grouped by variant/state.
- Includes an "Anatomy" or "Usage" note using `font-mono` for prop names.
- Wraps code snippets in a token-driven `<pre>` block (bg-secondary, border-border/60).

Existing component sections (Buttons, Inputs, Cards, etc.) get expanded coverage — every variant, size, and state from the NeosPower archive, not just a sampler.

## Missing sections (token-driven demos)

- **Data viz** — a small bar chart + line chart using `recharts` (already installed) themed with `--color-chart-1..5` (brand start/end/cyan/success/warning). Plus a KPI stat card grid using `font-mono` numerals.
- **Motion** — live tiles demonstrating `animate-np-spin`, `animate-np-pulse`, `animate-np-bounce`, `animate-np-shimmer`, `animate-np-indeterminate`, `animate-np-toast-in`, each with its duration/easing shown in mono.
- **Iconography** — a searchable grid of ~40 curated `lucide-react` icons at 16/20/24 sizes showing muted-foreground → foreground → brand-gradient tinting rules.
- **Brand** — brand mark built from `bg-brand-gradient` on a rounded square, wordmark using `text-gradient-brand`, a palette strip of `--brand-start / --brand-end / --brand-cyan / --brand-border`, and do/don't cards for gradient-fill edge treatment (the "crisp edge" rule with `[background-clip:padding-box]`).

## SEO / metadata

- `__root.tsx` head keeps site-wide title template + description; **no og:image** at root (leaf routes own it).
- Each leaf route sets its own `title`, `description`, `og:title`, `og:description`, `og:type=article`, `twitter:card=summary_large_image`.
- No og:image URLs until we have real hero images — omit rather than use placeholders.

## Technical notes

- Uses TanStack file-based routing with `_showcase` pathless layout — URLs like `/colors` (no `/showcase/` prefix).
- `<Outlet />` in `_showcase.tsx` renders the active child.
- Sidebar width uses `w-[var(--sidebar-width)]` per Tailwind v4 rules.
- `recharts` is already in the shadcn `chart.tsx` component — reuse it for Data viz.
- No new npm packages required.
- No changes to `src/styles.css`, tokens, or any `src/components/ui/*` component.

## Out of scope

- No changes to design tokens, component APIs, or the NeosPower components themselves.
- No dark/light toggle (project is dark-first per the DS).
- No search / command palette (can be added later if wanted).
