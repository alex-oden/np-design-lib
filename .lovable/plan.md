
## Goal

Produce a single machine-readable reference file that another AI agent can ingest to understand every component shipped in this NeosPower UI project — what it is, which tech powers it, and how to import it. No UI changes.

## Deliverable

Create `docs/neospower-components.md` (new file, ~250 lines). Structure:

### 1. Stack summary (top of file)
One short block: React 19 + TypeScript, TanStack Start v1 (file-based routing under `src/routes/`), Tailwind CSS v4 (tokens in `src/styles.css` via `@theme` + `@utility`), shadcn/ui conventions, Radix UI primitives, `lucide-react` icons, `recharts` for data viz, `class-variance-authority` + `tailwind-merge` (`cn`) for variant styling. Dark-first, HSL semantic tokens, brand gradient `bg-brand-gradient` (blue → magenta) with crisp-edge rule (`[background-clip:padding-box]` + opaque border).

### 2. Component table
One row per file in `src/components/ui/`. Columns: `import path` · `exports` · `primitive/tech` · `one-line description` · `key props/variants`.

Grouped to match the docs sidebar:

- **Foundational controls** — `button` (CVA variants: default/secondary/ghost/outline/destructive/link, sizes sm/default/lg/icon, `loading`, `asChild` via Radix Slot), `badge` (variants + `dot`, `live` pulse), `spinner` (SVG, `animate-np-spin`).
- **Inputs & fields** — `input` (leading/trailing icon slots, `aria-invalid` styling), `textarea`, `select` (native styled + ChevronDown), `label` (Radix Label, `required` star), `field` (composed Label + control + hint/error wrapper), `checkbox` (Radix), `radio-group` (Radix, brand-gradient fill), `switch` (Radix), `segmented` (custom, sliding brand thumb via `useLayoutEffect` measuring offsets), `slider` (Radix), `input-otp` (input-otp lib).
- **Surfaces** — `card` (CardHeader/Title/Description/Content/Footer, `glass` variant), `border-glow` (custom: pointermove sets `--cursor-angle` + `--edge-proximity` CSS vars, styled by `border-glow.css`; props: `glowColor`, `animated`, `borderRadius`, `intensity`, `coneSpread`, `sensitivity`, `fillOpacity`), `separator` (Radix), `aspect-ratio` (Radix), `skeleton` (`animate-np-shimmer`), `scroll-area` (Radix), `resizable` (react-resizable-panels), `avatar` (Radix).
- **Feedback** — `alert` (variants: default/info/success/warning/destructive), `banner` (page-width, dismissible, `BannerProps`), `toast` + `sonner` (sonner lib, `animate-np-toast-in`), `progress` (Radix, `indeterminate` mode via `animate-np-indeterminate`).
- **Overlays** — `dialog`, `alert-dialog`, `sheet`, `drawer` (vaul), `popover`, `hover-card`, `tooltip` (all Radix; glass surfaces via `bg-popover/95 glass`), `dropdown-menu`, `context-menu`, `menubar` (all Radix).
- **Navigation & layout** — `sidebar` (shadcn composite), `navigation-menu` (Radix), `breadcrumb`, `pagination`, `tabs` (Radix), `toggle` + `toggle-group` (Radix), `command` (cmdk), `accordion` (Radix), `collapsible` (Radix).
- **Data & pickers** — `table` (semantic wrappers), `calendar` (react-day-picker), `carousel` (embla), `chart` (recharts wrapper themed with `--color-chart-1..5`), `form` (react-hook-form + zod resolver).

### 3. Showcase routes map
Short list mapping each route file `src/routes/_showcase.*.tsx` → URL → purpose. Note the `_showcase` pathless layout in `src/routes/_showcase.tsx` (sidebar + Outlet, TooltipProvider), the sidebar component `src/components/showcase-sidebar.tsx`, and the shared page helpers in `src/components/showcase-page.tsx`.

### 4. Token & utility cheat sheet
- Semantic HSL tokens: `--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--brand-start`, `--brand-end`, `--brand-cyan`, `--brand-border`, `--radius`.
- Utilities: `bg-brand-gradient`, `bg-brand-gradient-soft`, `text-gradient-brand`, `glass`, `shadow-glow`, `shadow-card`.
- Animations: `animate-np-spin`, `animate-np-pulse`, `animate-np-bounce`, `animate-np-shimmer`, `animate-np-indeterminate`, `animate-np-toast-in`.
- Typography: `font-sans` = Geist, `font-mono` = Geist Mono (loaded via `<link>` in `__root.tsx`). Rule: mono for numbers/data/keys/status, sans for prose.
- Crisp-edge rule: any control filled with `bg-brand-gradient` must add `[background-clip:padding-box]` + opaque border color to prevent gradient bleeding through the border.

### 5. Consumption example
One 10-line TSX snippet showing correct imports (`@/components/ui/*`), a `BorderGlow`-wrapped `Card` with a mono metric and a brand `Button`, so another agent has a copy-paste starting point.

## Out of scope

No changes to components, tokens, routes, or the showcase. Documentation only.
