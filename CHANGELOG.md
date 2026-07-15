# Changelog

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