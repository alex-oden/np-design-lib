# Themed backgrounds

`@alex-oden/ui` ships five layered background treatments as a single
component (`ThemeBackground`) plus matching Tailwind v4 utility classes
for the static variants. Every layer references the brand tokens
(`--brand-start`, `--brand-end`, `--background`), so re-theming is a
CSS override, not a fork.

## When to use each variant

| Variant | Use for | Notes |
| ------- | ------- | ----- |
| `page-aurora` | App shell / root background | Fixed full-viewport; radial glows + fine dot noise |
| `hero-aurora` | Above-the-fold hero | 3 animated blurred blobs, screen-blended |
| `grid-glow` | Product/feature sections that want a technical texture | 64px grid, center mask |
| `dot-field` | Stage behind a hero image or key visual | 22px dot pattern with focal glow |
| `spotlight` | Calmer sections (features, footers, contact) | Soft brand radials, no grid/noise |

## Component vs utility

Prefer the component. It renders every layer (masks, animated blobs,
blend modes) and is `pointer-events-none` by default.

```tsx
import { ThemeBackground } from "@alex-oden/ui";

<section className="relative overflow-hidden">
  <ThemeBackground variant="hero-aurora" intensity="balanced" />
  <div className="relative z-10">{/* your content */}</div>
</section>
```

The utility classes are single-layer shortcuts — good enough for a
section wrapper when you don't need animation or blend modes:

```html
<section class="bg-page-aurora">…</section>
<section class="bg-grid-glow">…</section>
<section class="bg-dot-field">…</section>
<section class="bg-spotlight-top">…</section>
<section class="bg-spotlight-corners">…</section>
```

Always put content on top with `relative z-10`. Without it, the
background layers stack over your text.

## Props

```ts
type ThemeBackgroundVariant =
  | "page-aurora"
  | "hero-aurora"
  | "grid-glow"
  | "dot-field"
  | "spotlight";

type ThemeBackgroundIntensity = "subtle" | "balanced" | "vivid";
type ThemeBackgroundAccent = "brand" | "green";

interface ThemeBackgroundProps {
  variant?: ThemeBackgroundVariant;     // default "page-aurora"
  intensity?: ThemeBackgroundIntensity; // default "balanced"
  accent?: ThemeBackgroundAccent;       // default "brand"
  fixed?: boolean;                      // default true — position: fixed to viewport
  className?: string;
}
```

Set `fixed={false}` inside a bounded section (e.g. a hero card) so the
layers stay inside their parent instead of covering the whole viewport.

## Full hero example

```tsx
import { ThemeBackground, Button } from "@alex-oden/ui";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl border border-border/60 py-24">
      <ThemeBackground variant="hero-aurora" intensity="vivid" fixed={false} />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Ship faster with the NeosPower kit
        </h1>
        <p className="mt-4 text-muted-foreground">
          51 components, one token file, zero surprises.
        </p>
        <Button className="mt-8">Get started</Button>
      </div>
    </section>
  );
}
```

## Re-theming

All background gradients read from `--brand-start` and `--brand-end` on
`:root`. Override them once and every variant re-tints:

```css
/* your app's styles.css, AFTER @import "@alex-oden/ui/tokens.css"; */
:root {
  --brand-start: 210 100% 60%;   /* ocean */
  --brand-end:   180  90% 55%;   /* cyan  */
}
```

To keep the default NeosPower magenta but change only the secondary
accent used by `hero-aurora`, pass `accent="green"` on the component.

## Motion & accessibility

- Every layer is `pointer-events-none` and `aria-hidden` — clicks and
  screen readers pass through.
- The three float animations (`animate-np-float-1|2|3`) are
  automatically paused when the user has
  `prefers-reduced-motion: reduce`.
- Layers use transform-based motion (translate + scale) so they
  composite on the GPU. Keep only one `hero-aurora` on screen at a
  time — the blur radii are expensive.

## Performance tips

- Use `page-aurora` once at the app root, not inside every route.
- Prefer the utility classes over the component when you don't need
  animation — they emit a single `background-image` and skip the
  wrapper `div`s.
- Wrap animated sections in `[contain:paint]` when they sit inside long
  scrollable pages.

## See it live

The showcase at `/backgrounds` renders every variant with live
intensity and accent toggles.
