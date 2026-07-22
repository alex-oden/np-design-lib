# @alex-oden/ui

React 19 component library that ships every primitive from the NeosPower
design system as tree-shakeable ES modules, ready to drop into any Vite +
Tailwind v4 project. Radix under the hood, HSL tokens on top, dark-first.

## Install

Published on the public npm registry:

```bash
npm i @alex-oden/ui
# or: bun add @alex-oden/ui
# or: pnpm add @alex-oden/ui
```

Peer dependencies (make sure your app already has them):

- `react` ^19
- `react-dom` ^19
- `tailwindcss` ^4

## Quick start in a consumer project

These four files are enough to render a working page with `@alex-oden/ui`.

### 1. `package.json`

```json
{
  "name": "my-consumer-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@alex-oden/ui": "^1.3.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.2.1",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.2.0",
    "tailwindcss": "^4.2.1",
    "typescript": "^5.8.3",
    "vite": "^6.0.0"
  }
}
```

### 2. `src/styles.css`

Keep the two `@import` lines at the very top of the file, before any `@theme` or selector rules:

```css
@import "tailwindcss";
@import "@alex-oden/ui/tokens.css";
@source "../node_modules/@alex-oden/ui/dist";
```

- `tokens.css` registers the NeosPower theme (`@theme`, `:root`, keyframes, utilities, dark mode).
- `@source` tells Tailwind v4 to scan the compiled library so the utility classes used inside components are kept.

If you prefer the library to also bring in Tailwind's base (so you can skip `@import "tailwindcss"` in your own file), use `@import "@alex-oden/ui/styles.css"` instead.

### 3. `src/App.tsx`

```tsx
import { Button, Field, Input, SurfaceCard } from "@alex-oden/ui";

export function App() {
  return (
    <SurfaceCard className="max-w-md p-6 mx-auto mt-12">
      <Field label="Email">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Button className="mt-4 w-full">Continue</Button>
    </SurfaceCard>
  );
}
```

### 4. `index.html`

Load the `Geist` and `Geist Mono` fonts with `<link>` tags in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
/>
```

After `bun install` (or `npm install`) and `bun run dev`, the app should render the example card.

## Per-component imports

If you only need a few components, subpath imports keep the import list short:

```ts
import { Button } from "@alex-oden/ui/components/ui/button";
import { Card } from "@alex-oden/ui/components/ui/card";
```

## Fonts

The tokens declare `Geist` (sans) and `Geist Mono`. Load them via
`<link>` tags in your root document — never `@import` a remote font URL
inside `src/styles.css` (Lightning-CSS resolves imports from disk).

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
/>
```

Or install self-hosted `@fontsource-variable/geist` and import from there.

## Components

| Component | Exports | Description |
| --------- | ------- | ----------- |
| `accordion` | Accordion, AccordionContent, AccordionItem, AccordionTrigger |  |
| `alert-dialog` |  |  |
| `alert` | Alert, AlertDescription, AlertProps, AlertTitle, Variants | Alert — inline message. Pair the icon slot with an AlertTitle + AlertDescription. varian |
| `aspect-ratio` | AspectRatio |  |
| `avatar` | Avatar, AvatarFallback, AvatarImage |  |
| `badge` | Badge, BadgeProps, Count, Variants | Badge — compact status signal in monospace. variant: default (soft) Â· solid (brand grad |
| `banner` | Banner, BannerProps, HTMLAttributes, HTMLDivElement, Omit, React | Banner — page-level message with a brand gradient edge. Put a title + text on the left;  |
| `border-glow` | BorderGlow, BorderGlowProps, HTMLAttributes, HTMLDivElement, React | BorderGlow — an interactive card whose edges light up as the cursor approaches them. Ada |
| `breadcrumb` |  |  |
| `button` | Button, ButtonProps, Variants | Button — the primary action element. variant: default (brand gradient) Â· secondary Â· g |
| `calendar` | Calendar, CalendarDayButton |  |
| `card` | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter | **Deprecated shim** — routes `variant` prop to the named components below. Prefer the explicit names. |
| `surface-card` | SurfaceCard | Neutral bordered container. Use for forms, settings panels, generic content blocks. |
| `glass-card` | GlassCard | Translucent surface with backdrop blur. Use for hero overlays and panels over gradients. |
| `interactive-card` | InteractiveCard | Clickable tile that renders `<button>` with hover lift + brand glow + focus ring. |
| `metric-card` | MetricCard | Single KPI: `label`, `value`, `unit`, `delta`, `trend` (`up`/`down`/`flat`). |
| `stat-card` | StatCard | Strip of 2–4 small metrics; pass `items: { label, value, unit? }[]`. |
| `feature-card` | FeatureCard | Marketing feature: `icon` + `title` + `description`. |
| `media-card` | MediaCard | Image/video slot on top, content below; override with `aspectClassName`. |
| `alert-card` | AlertCard, AlertCardTone | Inline status block. `tone`: `info` \| `success` \| `warning` \| `danger`. |
| `glow-card` | GlowCard, GlowPreset | `BorderGlow` wrapper. `preset`: `brand` \| `violet` \| `success` \| `danger` \| `info`. |
| `carousel` |  |  |
| `chart` | ChartConfig |  |
| `checkbox` | Checkbox | Checkbox — brand-gradient fill when checked. Uses an OPAQUE border (--brand-border) so t |
| `collapsible` | Collapsible, CollapsibleContent, CollapsibleTrigger |  |
| `command` |  |  |
| `context-menu` |  |  |
| `dialog` |  |  |
| `drawer` |  |  |
| `dropdown-menu` |  |  |
| `field` | Field, FieldProps, HTMLAttributes, HTMLDivElement, React | Field — composes a Label, a control, an optional hint, and an optional validation messag |
| `form` |  |  |
| `hover-card` | HoverCard, HoverCardContent, HoverCardTrigger |  |
| `input-otp` | InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot |  |
| `input` | HTMLInputElement, Input, InputHTMLAttributes, InputProps, React | leadingIcon?: React.ReactNode; trailingIcon?: React.ReactNode; } |
| `label` | Label |  |
| `menubar` |  |  |
| `navigation-menu` |  |  |
| `pagination` |  |  |
| `popover` | Popover, PopoverAnchor, PopoverContent, PopoverTrigger |  |
| `progress` | Progress, ProgressProps | Progress — brand-filled bar. Pass `value` (0â100) for determinate, or `indeterminate`  |
| `radio-group` | RadioGroup, RadioGroupItem | RadioGroupItem — brand-gradient fill + white dot when selected. Opaque border keeps the  |
| `resizable` | ResizableHandle, ResizablePanel, ResizablePanelGroup |  |
| `scroll-area` | ScrollArea, ScrollBar |  |
| `segmented` | Segmented, SegmentedOption, SegmentedProps | Segmented — a compact single-choice control with a sliding brand thumb. Controlled: pass |
| `select` | HTMLSelectElement, React, Select, SelectHTMLAttributes, SelectProps | Select — native styled select. (For a listbox with search/multi-select, use a Radix-base |
| `separator` | Separator |  |
| `sheet` |  | Sheet — a Dialog that slides in from an edge (drawer). Built on Radix Dialog for focus-t |
| `sidebar` |  |  |
| `skeleton` | Skeleton | function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return  |
| `slider` | Slider |  |
| `sonner` | Toaster |  |
| `spinner` | Dots, HTMLAttributes, HTMLSpanElement, React, Spinner, SpinnerProps | export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> { brand?: bool |
| `switch` | Switch | Switch — brand-gradient track when on, sliding white thumb. Opaque border on the checked |
| `table` | Table, TableBody, TableCaption, TableCell, TableFooter, TableHead |  |
| `tabs` | Tabs, TabsContent, TabsList, TabsTrigger |  |
| `textarea` | HTMLTextAreaElement, React, Textarea, TextareaHTMLAttributes, TextareaProps | const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>( ({ className, ...pr |
| `toast` | Toast, ToastProps, Variants | Toast — presentational transient notification. Pair with your app's toast manager (e.g.  |
| `toggle-group` | ToggleGroup, ToggleGroupItem |  |
| `toggle` | Toggle, Variants |  |
| `tooltip` | Tooltip, TooltipContent, TooltipProvider, TooltipTrigger |  |

All components live under `@alex-oden/ui/components/ui/*` and are also
re-exported from the package root.

## Design tokens

The tokens file defines the full palette as HSL triplets on `:root`, plus
semantic color tokens (`--color-*`), radius scale, shadows, and animations.
Everything is override-friendly — drop your own values on `:root` to
re-theme without forking.

Key utilities you get for free:

- `bg-brand-gradient`, `bg-brand-gradient-soft`, `text-gradient-brand`
- `glass` (backdrop blur + saturation)
- `animate-np-spin`, `animate-np-pulse`, `animate-np-bounce`,
  `animate-np-shimmer`, `animate-np-indeterminate`, `animate-np-toast-in`
- `shadow-card`, `shadow-glow`, `shadow-ring`

## Versioning

Follows semver. See [CHANGELOG.md](./CHANGELOG.md). Pin an exact version
(e.g. `@alex-oden/ui@1.2.0`) for reproducible installs.

## License

MIT.
