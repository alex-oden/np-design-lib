# Changelog

## 1.3.1 — Button polish

- Primary `Button` variant now has a subtle top bevel highlight and
  bottom edge shadow (inset) for a soft 3D lift.
- Added layered ambient brand-tinted shadows (brand-start + brand-end)
  that intensify on hover, plus a 1px hover lift and settled pressed state.

## 1.3.0 — Named card components

Cards are now split into dedicated, use-case named components so consumers
(humans and AI agents) can pick the right primitive at a glance.

Added:

- `SurfaceCard` — neutral bordered container (was `<Card variant="default">`).
- `GlassCard` — translucent panel with backdrop blur (was `variant="glass"`).
- `InteractiveCard` — clickable tile with hover lift; renders `<button>`
  with focus ring (was `variant="interactive"`).
- `MetricCard` — single KPI with label, value, unit, and trend delta.
- `StatCard` — 2–4 small metrics laid out in a strip.
- `FeatureCard` — icon + title + description for marketing grids.
- `MediaCard` — image/video slot on top, content below; configurable aspect.
- `AlertCard` — inline status block with `info | success | warning | danger`.
- `GlowCard` — `BorderGlow` wrapper with `brand | violet | success | danger | info` presets.

Shared sub-parts (`CardHeader`, `CardTitle`, `CardDescription`,
`CardContent`, `CardFooter`) moved to `surface-card.tsx` and are
re-exported from `./card` for backward compatibility.

Deprecated (kept as a shim):

- `<Card variant="default | glass | interactive">` — maps to the named
  components at runtime. Prefer the explicit component name in new code.

## 1.2.0 — Published to npmjs.com

- Package is now published on the public npm registry as `@alex-oden/ui`.
  Install with `npm i @alex-oden/ui` (or `bun add` / `pnpm add`).
- Switched `publishConfig` to `{ access: "public", registry: "https://registry.npmjs.org" }`.
- CI workflow authenticates with `NPM_TOKEN` instead of `GITHUB_TOKEN`.
- No API changes vs. 1.1.0.

## 1.1.0 — GitHub Packages release

- Single-bundle ESM at `dist/index.js` with matching `dist/index.d.ts`.
- Ships `dist/styles.css` and `dist/tokens.css`; component styles inlined.
- Removed app artifacts (`lib-entry.*`, `hooks/*`, favicon) from the tarball.

## 1.0.0 — Initial package release

First public release of `@alex-oden/ui`. Ships every primitive from the
NeosPower design system as a tree-shakeable ES module library, along with
the design tokens and utilities from the showcase site.

### Included components

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Banner,
BorderGlow, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox,
Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Field,
Form, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu,
Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea,
Segmented, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner,
Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, ToggleGroup,
Tooltip.

### Also exported

- `cn` (clsx + tailwind-merge) helper.
- `@alex-oden/ui/styles.css` — full stylesheet.
- `@alex-oden/ui/tokens.css` — tokens, utilities, keyframes only.