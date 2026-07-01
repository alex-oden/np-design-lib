# NeosPower UI — Component Reference (for AI agents)

This is a machine-readable reference of every component shipped in this project, the technology behind it, and how to import it. Use it before writing new UI so you reuse existing primitives instead of duplicating them.

## 1. Stack

- **Framework**: React 19 + TypeScript, TanStack Start v1 (Vite 7). File-based routing under `src/routes/`. Root shell: `src/routes/__root.tsx`.
- **Styling**: Tailwind CSS v4. All design tokens live in `src/styles.css` via `@theme`, `@utility`, and `@custom-variant`. No `tailwind.config.js`.
- **Component base**: shadcn/ui conventions, Radix UI primitives for behavior/a11y, `class-variance-authority` (CVA) for variants, `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for class composition.
- **Icons**: `lucide-react` (1.5px stroke, sizes 14/16/20).
- **Charts**: `recharts` (wrapped in `src/components/ui/chart.tsx`, themed with `--color-chart-1..5`).
- **Fonts**: Geist (sans) and Geist Mono (mono), loaded via `<link>` in `__root.tsx`. Rule: `font-mono` for numbers/data/status/keys, `font-sans` for prose.
- **Theme**: dark-first, HSL semantic tokens. Signature is the brand gradient `bg-brand-gradient` (blue → magenta).
- **Crisp-edge rule (mandatory)**: any control filled with `bg-brand-gradient` must set `[background-clip:padding-box]` plus an opaque `border-brand-border` so the gradient does not bleed through the border.
- **Import alias**: `@/` → `src/`. All UI components import from `@/components/ui/<name>`.

## 2. Components (all under `@/components/ui/*`)

### Foundational controls
| File | Exports | Tech | Description | Key props / variants |
|---|---|---|---|---|
| `button.tsx` | `Button`, `buttonVariants` | CVA + Radix Slot | Primary control. Wraps spinner + children into a single slotted element when `asChild`. | `variant`: default (brand-gradient) / secondary / ghost / outline / destructive / link · `size`: sm/default/lg/icon · `loading` · `asChild` |
| `badge.tsx` | `Badge` | CVA | Compact status chip, mono numerals. | `variant` + `dot` (leading dot) + `live` (pulsing dot) |
| `spinner.tsx` | `Spinner` | SVG + `animate-np-spin` | Circular loader. | `size`, `className` |

### Inputs & fields
| File | Exports | Tech | Description | Key props |
|---|---|---|---|---|
| `input.tsx` | `Input` | Native + Tailwind | Text field with icon slots and `aria-invalid` styling. | `leadingIcon`, `trailingIcon` |
| `textarea.tsx` | `Textarea` | Native | Multiline input, same token styling as Input. | standard textarea props |
| `select.tsx` | `Select` | Native `<select>` + ChevronDown | Styled single-choice; use a combobox for search/multi. | standard select props |
| `label.tsx` | `Label` | `@radix-ui/react-label` | Field label, mono-ish 12.5px muted. | `required` (adds red star) |
| `field.tsx` | `Field` | Composition | Wraps Label + control + hint/error + required marker. | `label`, `hint`, `error`, `required` |
| `checkbox.tsx` | `Checkbox` | `@radix-ui/react-checkbox` | Brand-gradient fill when checked. | Radix Checkbox props |
| `radio-group.tsx` | `RadioGroup`, `RadioGroupItem` | `@radix-ui/react-radio-group` | Brand-gradient dot; opaque border for crisp edge. | Radix RadioGroup props |
| `switch.tsx` | `Switch` | `@radix-ui/react-switch` | Brand-gradient track when on. | Radix Switch props |
| `segmented.tsx` | `Segmented` | Custom (no Radix) | Single-choice pill with sliding brand thumb; thumb position measured via `useLayoutEffect`. | `options` (string[] or `{value,label}[]`), `value`, `onValueChange` |
| `slider.tsx` | `Slider` | `@radix-ui/react-slider` | Brand-gradient range track. | Radix Slider props |
| `input-otp.tsx` | `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator` | `input-otp` | OTP code entry. | see `input-otp` docs |

### Surfaces
| File | Exports | Tech | Description |
|---|---|---|---|
| `card.tsx` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | Composition | Base surface. Add `glass` class for translucent variant. |
| `border-glow.tsx` (+ `border-glow.css`) | `BorderGlow` | Custom pointer-driven CSS vars | Signature card: `pointermove` writes `--cursor-angle` and `--edge-proximity`; CSS renders the halo. Props: `glowColor` (HSL triplet), `animated` (intro sweep), `borderRadius`, `intensity`, `coneSpread`, `sensitivity`, `fillOpacity`. |
| `separator.tsx` | `Separator` | `@radix-ui/react-separator` | Hairline divider. |
| `aspect-ratio.tsx` | `AspectRatio` | `@radix-ui/react-aspect-ratio` | Media box ratio wrapper. |
| `skeleton.tsx` | `Skeleton` | Div + `animate-np-shimmer` | Loading placeholder. |
| `scroll-area.tsx` | `ScrollArea`, `ScrollBar` | `@radix-ui/react-scroll-area` | Themed scrollbars. |
| `resizable.tsx` | `ResizablePanel*` | `react-resizable-panels` | Split panels. |
| `avatar.tsx` | `Avatar`, `AvatarImage`, `AvatarFallback` | `@radix-ui/react-avatar` | User image with fallback. |

### Feedback
| File | Exports | Tech | Description |
|---|---|---|---|
| `alert.tsx` | `Alert`, `AlertTitle`, `AlertDescription` | CVA | Inline message. Variants: default / info / success / warning / destructive. |
| `banner.tsx` | `Banner` | Custom | Page-width banner, dismissible. Same tone variants as Alert. |
| `toast.tsx` | Radix Toast primitives | `@radix-ui/react-toast` (legacy) | Kept for compatibility. Prefer `sonner`. |
| `sonner.tsx` | `Toaster`, `toast` | `sonner` | Default notification system, uses `animate-np-toast-in`. |
| `progress.tsx` | `Progress` | `@radix-ui/react-progress` | Brand-gradient bar. `indeterminate` prop triggers `animate-np-indeterminate` sweep. |

### Overlays
All Radix-based, all render on a glass surface (`bg-popover/95 glass`, `border-border`, `shadow-card`) with `animate-in fade-in-0 zoom-in-95` entrance.

| File | Tech |
|---|---|
| `dialog.tsx` | `@radix-ui/react-dialog` |
| `alert-dialog.tsx` | `@radix-ui/react-alert-dialog` |
| `sheet.tsx` | `@radix-ui/react-dialog` (side variants) |
| `drawer.tsx` | `vaul` |
| `popover.tsx` | `@radix-ui/react-popover` |
| `hover-card.tsx` | `@radix-ui/react-hover-card` |
| `tooltip.tsx` | `@radix-ui/react-tooltip` (wrap app in `TooltipProvider`) |
| `dropdown-menu.tsx` | `@radix-ui/react-dropdown-menu` |
| `context-menu.tsx` | `@radix-ui/react-context-menu` |
| `menubar.tsx` | `@radix-ui/react-menubar` |

### Navigation & layout
| File | Tech | Notes |
|---|---|---|
| `sidebar.tsx` | shadcn composite | Collapsible rail + provider; used by the docs shell. |
| `navigation-menu.tsx` | `@radix-ui/react-navigation-menu` | Horizontal menu with viewport. |
| `breadcrumb.tsx` | Composition | Semantic `<nav>` + `<ol>`. |
| `pagination.tsx` | Composition + `Button` | Page controls. |
| `tabs.tsx` | `@radix-ui/react-tabs` | Underline + brand indicator. |
| `toggle.tsx` / `toggle-group.tsx` | `@radix-ui/react-toggle(-group)` | Icon toggles. |
| `command.tsx` | `cmdk` | Command palette / combobox. |
| `accordion.tsx` | `@radix-ui/react-accordion` | Disclosure. |
| `collapsible.tsx` | `@radix-ui/react-collapsible` | Simple show/hide. |

### Data & pickers
| File | Tech | Notes |
|---|---|---|
| `table.tsx` | Semantic wrappers | `Table`, `TableHeader`, `TableRow`, `TableCell`, `TableCaption`. |
| `calendar.tsx` | `react-day-picker` | Date picker themed with brand tokens. |
| `carousel.tsx` | `embla-carousel-react` | Prev/next buttons + dots. |
| `chart.tsx` | `recharts` wrapper | Provides `ChartContainer`, `ChartTooltip*`, `ChartLegend*`; consumes `--color-chart-1..5`. |
| `form.tsx` | `react-hook-form` + `zod` resolver | `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`. |

## 3. Showcase routes

Shell: `src/routes/_showcase.tsx` (pathless layout — sidebar + `<Outlet />` + `TooltipProvider`). Nav: `src/components/showcase-sidebar.tsx`. Shared page helpers (`Section`, `SectionHeader`, code blocks): `src/components/showcase-page.tsx`.

| Route file | URL | Purpose |
|---|---|---|
| `_showcase.index.tsx` | `/` | Overview + hero + section grid |
| `_showcase.colors.tsx` | `/colors` | Semantic HSL tokens |
| `_showcase.typography.tsx` | `/typography` | Geist / Geist Mono scale |
| `_showcase.spacing.tsx` | `/spacing` | Radius, spacing, shadow |
| `_showcase.buttons.tsx` | `/buttons` | Button variants & sizes |
| `_showcase.button-states.tsx` | `/button-states` | Hover / focus / disabled / loading |
| `_showcase.inputs.tsx` | `/inputs` | Input / Textarea / Select / Field |
| `_showcase.selection.tsx` | `/selection` | Checkbox / Radio / Switch / Segmented |
| `_showcase.cards.tsx` | `/cards` | Card variants + interactive `BorderGlow` grid |
| `_showcase.badges.tsx` | `/badges` | Status vocabulary |
| `_showcase.alerts.tsx` | `/alerts` | Alert + Banner |
| `_showcase.overlays.tsx` | `/overlays` | Dialog / Sheet / Popover / Dropdown / Tooltip |
| `_showcase.loading.tsx` | `/loading` | Spinner / Dots / Progress / Skeleton / Toast |
| `_showcase.navigation.tsx` | `/navigation` | Breadcrumb / top-bar / sidebar patterns |
| `_showcase.data-viz.tsx` | `/data-viz` | KPI cards + recharts (area, bar) |
| `_showcase.motion.tsx` | `/motion` | Animation utility catalog |
| `_showcase.iconography.tsx` | `/iconography` | Lucide sizing/color rules |
| `_showcase.brand.tsx` | `/brand` | Wordmark, gradient rules, signature `BorderGlow` hero |

## 4. Tokens & utilities (in `src/styles.css`)

**Semantic HSL tokens** (as CSS vars, referenced as `hsl(var(--x))` or via Tailwind classes):
`--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--muted`, `--muted-foreground`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--radius`, `--brand-start`, `--brand-end`, `--brand-cyan`, `--brand-border`, `--color-chart-1..5`.

**Utility classes**:
- `bg-brand-gradient` — blue → magenta fill (always pair with `[background-clip:padding-box]` + `border-brand-border` on bordered controls).
- `bg-brand-gradient-soft` — low-opacity brand wash for active pills.
- `text-gradient-brand` — gradient text via `bg-clip-text`.
- `glass` — translucent backdrop-blur surface for popovers/menus.
- `shadow-glow` — brand-tinted elevation.
- `shadow-card` — neutral elevation for surfaces.

**Animations** (all defined as `@utility animate-np-*`):
`animate-np-spin`, `animate-np-pulse`, `animate-np-bounce`, `animate-np-shimmer`, `animate-np-indeterminate`, `animate-np-toast-in`. Timing baseline: 180–260ms with `cubic-bezier(.2,.7,.2,1)` for enter, `cubic-bezier(.4,0,.2,1)` for movement.

## 5. Consumption example

```tsx
import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { BorderGlow } from "@/components/ui/border-glow";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AssetTile() {
  return (
    <BorderGlow glowColor="248 90 70" borderRadius={20}>
      <Card className="border-0 bg-transparent">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-sm text-muted-foreground">Solar-04</CardTitle>
          <Badge variant="default" dot live>ONLINE</Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="font-mono text-3xl tracking-tight">128.4 <span className="text-muted-foreground text-base">kW</span></p>
          <Button size="sm" asChild><Link to="/data-viz"><Zap /> Inspect</Link></Button>
        </CardContent>
      </Card>
    </BorderGlow>
  );
}
```

## 6. Rules of thumb for another agent

1. Never hardcode colors (`text-white`, `bg-[#...]`). Always use semantic tokens.
2. Never `@import` remote CSS in `styles.css` — load web fonts with `<link>` in `__root.tsx`.
3. Any new route needs a unique `head()` (title, description, og:title, og:description). No `og:image` on `__root`.
4. When wrapping components with Radix `Slot` (`asChild`), always pass exactly one child element.
5. Numbers, metrics, statuses, IDs → `font-mono`. Prose → `font-sans`.
6. Reuse `BorderGlow` for signature moments only (hero cards, brand tiles). Regular surfaces use `Card`.