# NeosPower UI — Implementation Report

A record of what was built in this project, and the technology behind each piece. Written as a hand-off so another AI agent knows what already exists before proposing new work.

## Stack that was set up

- React 19 + TypeScript on TanStack Start v1 (Vite 7). Root shell at `src/routes/__root.tsx`, file-based routing under `src/routes/`.
- Tailwind CSS v4 with all design tokens defined in `src/styles.css` via `@theme` and `@utility` (no `tailwind.config.js`).
- shadcn/ui conventions, Radix UI primitives for behavior and a11y, CVA for variants, `cn()` (clsx + tailwind-merge) for class composition.
- `lucide-react` for icons, `recharts` for charts, `sonner` for toasts, `vaul` for drawers, `cmdk` for command palette, `react-day-picker` for calendars, `embla-carousel-react` for carousels, `react-hook-form` + `zod` for forms.
- Geist (sans) and Geist Mono loaded via `<link>` in `__root.tsx`. Rule enforced across the system: mono for numbers/data/status, sans for prose.
- Dark-first HSL token palette with a signature blue → magenta brand gradient (`bg-brand-gradient`) and the crisp-edge rule (`[background-clip:padding-box]` + opaque `border-brand-border`) applied to every gradient-filled control.

## Components delivered (all in `src/components/ui/*`)

### Foundational controls
- **Button** (`button.tsx`) — CVA variants (default / secondary / ghost / outline / destructive / link), sizes sm/default/lg/icon, `loading` state, `asChild` via Radix Slot. Fixed to wrap spinner + children into a single slotted element so `asChild` doesn't break `React.Children.only`.
- **Badge** (`badge.tsx`) — CVA variants with `dot` and `live` (pulsing) modifiers, mono numerals.
- **Spinner** (`spinner.tsx`) — SVG circular loader driven by `animate-np-spin`.

### Inputs & fields
- **Input** (`input.tsx`) — leading/trailing icon slots, `aria-invalid` styling for validation.
- **Textarea** (`textarea.tsx`) — same token styling as Input.
- **Select** (`select.tsx`) — styled native select with ChevronDown.
- **Label** (`label.tsx`) — Radix Label with `required` star.
- **Field** (`field.tsx`) — composed wrapper: label + control + hint + error + required marker.
- **Checkbox** (`checkbox.tsx`) — Radix, brand-gradient when checked.
- **RadioGroup / RadioGroupItem** (`radio-group.tsx`) — Radix, brand-gradient dot with opaque border.
- **Switch** (`switch.tsx`) — Radix, brand-gradient track when on.
- **Segmented** (`segmented.tsx`) — custom control with a sliding brand thumb; thumb position measured via `useLayoutEffect`.
- **Slider** (`slider.tsx`) — Radix, brand-gradient range track.
- **InputOTP** (`input-otp.tsx`) — `input-otp` library.

### Surfaces
- **Card family** — split into named, use-case-specific components (v1.3.0):
  - `SurfaceCard` (`surface-card.tsx`) — neutral bordered container; also exports the shared `CardHeader / CardTitle / CardDescription / CardContent / CardFooter` sub-parts.
  - `GlassCard` (`glass-card.tsx`) — translucent panel with backdrop blur.
  - `InteractiveCard` (`interactive-card.tsx`) — clickable tile rendered as `<button>` with hover lift, brand glow and focus ring.
  - `MetricCard` (`metric-card.tsx`) — single KPI (label · value · unit · delta · trend).
  - `StatCard` (`stat-card.tsx`) — strip of 2–4 small metrics.
  - `FeatureCard` (`feature-card.tsx`) — icon + title + description marketing block.
  - `MediaCard` (`media-card.tsx`) — media slot on top, content below, configurable aspect.
  - `AlertCard` (`alert-card.tsx`) — inline status block (`info | success | warning | danger`).
  - `GlowCard` (`glow-card.tsx`) — `BorderGlow` wrapper with brand/violet/success/danger/info presets.
  - `card.tsx` remains as a deprecated shim: `<Card variant="default|glass|interactive">` maps to the named components.
- **BorderGlow** (`border-glow.tsx` + `border-glow.css`) — signature card. `pointermove` writes `--cursor-angle` and `--edge-proximity`; CSS renders the halo. Props: `glowColor`, `animated`, `borderRadius`, `intensity`, `coneSpread`, `sensitivity`, `fillOpacity`.
- **Separator** (`separator.tsx`) — Radix hairline divider.
- **AspectRatio** (`aspect-ratio.tsx`) — Radix media wrapper.
- **Skeleton** (`skeleton.tsx`) — `animate-np-shimmer` loading placeholder.
- **ScrollArea** (`scroll-area.tsx`) — Radix themed scrollbars.
- **Resizable** (`resizable.tsx`) — `react-resizable-panels`.
- **Avatar** (`avatar.tsx`) — Radix avatar + fallback.

### Feedback
- **Alert** (`alert.tsx`) — CVA variants: default / info / success / warning / destructive.
- **Banner** (`banner.tsx`) — page-width dismissible banner with the same tones.
- **Toast** (`toast.tsx`) — Radix Toast primitives kept for compatibility.
- **Sonner** (`sonner.tsx`) — `sonner`-based toaster, `animate-np-toast-in` entrance.
- **Progress** (`progress.tsx`) — Radix, brand-gradient fill; `indeterminate` prop triggers `animate-np-indeterminate` sweep.

### Overlays (all Radix, all on a `glass` + `shadow-card` surface)
Dialog, AlertDialog, Sheet, Drawer (`vaul`), Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu, Menubar.

### Navigation & layout
Sidebar (shadcn composite, used by the docs shell), NavigationMenu, Breadcrumb, Pagination, Tabs, Toggle / ToggleGroup, Command (`cmdk`), Accordion, Collapsible.

### Data & pickers
Table, Calendar (`react-day-picker`), Carousel (`embla`), Chart (`recharts` wrapper themed with `--color-chart-1..5`), Form (`react-hook-form` + `zod`).

## Design system foundation

Rewrote `src/styles.css` to expose semantic HSL tokens (`--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--radius`, `--brand-start`, `--brand-end`, `--brand-cyan`, `--brand-border`, `--color-chart-1..5`) and mapped them to Tailwind v4 utilities: `bg-brand-gradient`, `bg-brand-gradient-soft`, `text-gradient-brand`, `glass`, `shadow-glow`, `shadow-card`, plus the animation set `animate-np-spin | pulse | bounce | shimmer | indeterminate | toast-in`.

## Documentation site

Shipped a multi-route docs site behind the pathless `_showcase` layout (`src/routes/_showcase.tsx` — sidebar + `<Outlet />` + `TooltipProvider`). Sidebar: `src/components/showcase-sidebar.tsx`. Shared helpers (`Section`, headers, code blocks): `src/components/showcase-page.tsx`.

| Route | URL | What it covers |
|---|---|---|
| `_showcase.index` | `/` | Overview, hero, section grid |
| `_showcase.colors` | `/colors` | Semantic HSL tokens |
| `_showcase.typography` | `/typography` | Geist / Geist Mono scale |
| `_showcase.spacing` | `/spacing` | Radius, spacing, shadows |
| `_showcase.buttons` | `/buttons` | Variants and sizes |
| `_showcase.button-states` | `/button-states` | Hover / focus / disabled / loading |
| `_showcase.inputs` | `/inputs` | Input, Textarea, Select, Field |
| `_showcase.selection` | `/selection` | Checkbox, Radio, Switch, Segmented |
| `_showcase.cards` | `/cards` | Card variants + interactive `BorderGlow` grid |
| `_showcase.badges` | `/badges` | Status vocabulary |
| `_showcase.alerts` | `/alerts` | Alert + Banner |
| `_showcase.overlays` | `/overlays` | Dialog, Sheet, Popover, Dropdown, Tooltip |
| `_showcase.loading` | `/loading` | Spinner, Dots, Progress, Skeleton, Toast |
| `_showcase.navigation` | `/navigation` | Breadcrumb, top-bar, sidebar patterns |
| `_showcase.data-viz` | `/data-viz` | KPI cards + recharts (area, bar) themed with brand tokens |
| `_showcase.motion` | `/motion` | Animation utility catalog with timing |
| `_showcase.iconography` | `/iconography` | Lucide sizing (14/16/20) and color rules |
| `_showcase.brand` | `/brand` | Wordmark, gradient rules, signature `BorderGlow` hero |

Every leaf route sets its own `head()` (title, description, og:title, og:description, twitter:card). No `og:image` on `__root`.

## Notable fixes made along the way

- Button + Radix Slot: reworked to `React.cloneElement` a single child, resolving an SSR `React.Children.only` crash that blanked the home page.
- Banner `BannerProps` type conflict resolved.
- Cards page: interactive `BorderGlow` grid (six variants — default, animated intro sweep, wide cone / high sensitivity, brighter halo, narrow-cone alert, softer radius) moved from Brand to Cards; Brand page keeps only the signature hero.

## Dependencies added during the port

`@radix-ui/react-checkbox`, `@radix-ui/react-radio-group`, `@radix-ui/react-switch`, `@radix-ui/react-progress` (plus the Radix primitives already present for the remaining components).

## Not touched / out of scope

No backend, no auth, no Lovable Cloud, no dark/light toggle (system is dark-first), no command palette in the shell.