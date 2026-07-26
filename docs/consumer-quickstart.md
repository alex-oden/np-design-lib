# Consumer quick start

How to wire `@alex-oden/ui` into a fresh Vite + React 19 + Tailwind v4
project.

## 1. Install

```bash
bun add @alex-oden/ui
# or: npm i @alex-oden/ui
# or: pnpm add @alex-oden/ui
```

Peer dependencies your app must already have:

- `react` ^19
- `react-dom` ^19
- `tailwindcss` ^4
- `@tailwindcss/vite` ^4 (recommended over the PostCSS plugin)

## 2. Wire Tailwind v4

`src/styles.css` — keep the three lines below at the very top, before
any `@theme`, selectors, `@utility`, or other rules:

```css
@import "tailwindcss";
@import "@alex-oden/ui/tokens.css";
@source "../node_modules/@alex-oden/ui/dist";
```

- `tokens.css` registers the NeosPower `@theme`, `:root` variables,
  keyframes, utilities, and the class-based `dark` variant.
- `@source` tells Tailwind v4's Lightning-CSS scanner to keep the
  utility classes used inside the compiled library. Without it,
  classes like `bg-brand-gradient` used inside `<Button>` are purged
  from your build.

If you'd rather not add `@import "tailwindcss"` yourself, use
`@import "@alex-oden/ui/styles.css"` — it bundles the Tailwind base
plus the tokens.

## 3. Load the fonts

`index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
/>
```

Or install `@fontsource-variable/geist` and `@fontsource-variable/geist-mono`
and `@import` them from `src/styles.css`. Do NOT `@import` remote URLs from
`src/styles.css` — Tailwind v4's Lightning-CSS resolves `@import` from disk
and the build will fail.

## 4. Render something

```tsx
import { Button, Field, Input, SurfaceCard } from "@alex-oden/ui";

export function App() {
  return (
    <SurfaceCard className="mx-auto mt-12 max-w-md p-6">
      <Field label="Email">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Button className="mt-4 w-full">Continue</Button>
    </SurfaceCard>
  );
}
```

## 5. Dark mode

The tokens define a class-based `.dark` variant. Toggle by adding or
removing the class on the root element:

```ts
document.documentElement.classList.toggle("dark");
```

Persist the choice in `localStorage` and set it on the first paint in
`index.html` to avoid a flash of the light theme.

## 6. Tree-shaking

The barrel export re-exports every component, but modern bundlers
tree-shake it fine — importing `{ Button }` from `@alex-oden/ui` does
not pull in the whole library. For extra insurance or shorter imports,
use subpaths:

```ts
import { Button } from "@alex-oden/ui/components/ui/button";
import { SurfaceCard } from "@alex-oden/ui/components/ui/surface-card";
```

## 7. Upgrading

The package follows semver. See `CHANGELOG.md` for release notes.
Pin an exact version in `package.json` for reproducible installs:

```json
{ "dependencies": { "@alex-oden/ui": "1.5.0" } }
```

## Troubleshooting

**Components render but have no styling / wrong colors.**
`tokens.css` isn't imported, or `@import "tailwindcss"` is missing.
Check `src/styles.css` and make sure the imports are at the very top
of the file.

**A component looks half-styled** (e.g. buttons have padding but no
background). The `@source` line is missing or its path is wrong. It
must resolve to the installed `dist/` folder relative to `src/styles.css`:

```css
@source "../node_modules/@alex-oden/ui/dist";
```

In a monorepo, use the absolute workspace path instead of `../`.

**`Cannot apply unknown utility class 'border-border'` in a CSS module
or scoped block.** That file doesn't inherit the theme. Add
`@reference "../styles.css";` at the top of it, or drop `@apply` and
use the utility in JSX `className`.

**Font falls back to system-sans.** The `<link>` tags for Geist / Geist
Mono aren't in `index.html`, or the `@fontsource-variable/geist`
packages aren't installed.

**Server error `ENOENT: 'https://fonts.googleapis.com/...'`.**
Something in your CSS is `@import`-ing a remote URL. Move the font
load to `<link>` tags in `index.html` and delete the remote `@import`.

**Custom brand color isn't picked up.** Override `--brand-start` /
`--brand-end` on `:root` in your own `styles.css`, AFTER
`@import "@alex-oden/ui/tokens.css";`. Order matters.
