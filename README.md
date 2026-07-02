# @neospower/ui

React 19 component library that ships every primitive from the NeosPower
design system as tree-shakeable ES modules, ready to drop into any Vite +
Tailwind v4 project. Radix under the hood, HSL tokens on top, dark-first.

## Install

Install straight from a GitHub tag — no npm registry required.

```bash
bun add github:neospower/np-design-lib#v1.0.0
# or: pnpm add github:neospower/np-design-lib#v1.0.0
# or: npm  i   github:neospower/np-design-lib#v1.0.0
```

Peer dependencies (make sure your app already has them):

- `react` ^19
- `react-dom` ^19
- `tailwindcss` ^4

## Wire up (Tailwind v4)

In your app's `src/styles.css`, keep imports at the very top, before any
`@theme`, `@utility`, or selector rules:

```css
@import "tailwindcss";
@import "@neospower/ui/tokens.css";
@source "../node_modules/@neospower/ui/dist";
```

- `tokens.css` registers the NeosPower theme (`@theme`, `:root`, keyframes,
  `@utility` helpers, `@custom-variant dark`) — no Tailwind entry inside, so
  your app owns `@import "tailwindcss"`.
- `@source` tells Tailwind v4's Lightning-CSS scanner to inspect the compiled
  component JS so utility classes used inside the library are kept.

## Use

```tsx
import { Button, Card, Field, Input } from "@neospower/ui";
import "@neospower/ui/styles.css"; // optional: full stylesheet incl. Tailwind base

export function Example() {
  return (
    <Card className="p-6">
      <Field label="Email">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Button className="mt-4">Continue</Button>
    </Card>
  );
}
```

Per-component subpath imports are also available:

```ts
import { Button } from "@neospower/ui/components/ui/button";
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
| `card` | Card, CardContent, CardDescription, CardFooter, CardHeader, CardProps | Card — the workhorse surface. `variant`: default (flat) Â· glass (blurred translucent) Â |
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

All components live under `@neospower/ui/components/ui/*` and are also
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

Follows semver. See [CHANGELOG.md](./CHANGELOG.md). Consumers pin to a tag
(`#v1.0.0`) rather than the default branch.

## License

MIT.
