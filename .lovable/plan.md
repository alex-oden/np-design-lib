## Goal

Adopt **NeosPower UI** as the app's design system: dark-first, token-driven, Geist typography, single blue→magenta brand gradient, with the signature `BorderGlow` card. Replace the current oklch shadcn tokens and re-theme the whole app.

## 1. Tokens — `src/styles.css`

Rewrite the `:root` / `.dark` blocks with NeosPower's HSL variables (shadcn `H S% L%` convention). Because Tailwind v4 needs values inlined for utilities like `bg-primary`, keep `@theme inline` mapping tokens to `hsl(var(--x))`.

- Add tokens: `success`, `success-foreground`, `warning`, `warning-foreground`, `info`, `info-foreground`, `brand-start`, `brand-end`, `brand-cyan`, `brand-border`.
- Add radius scale (`sm/md/lg/xl` per spec), shadow tokens (`--shadow-card`, `--shadow-glow`, `--shadow-ring`), and a `--gradient-brand` var.
- Register a `bg-brand-gradient` utility via `@utility` (Tailwind v4 replacement for the v3 `backgroundImage` config) plus a `text-gradient-brand` utility (clipped text).
- Add keyframes + `@utility animate-np-*` (spin, pulse, bounce, shimmer, indeterminate, toast-in) — v4 replacement for `tailwindcss-animate` keyframes referenced by NeosPower.
- Dark values become the defaults (the system is dark-first); keep a light `.dark` inversion optional / minimal.

## 2. Fonts

Load **Geist** + **Geist Mono** via `<link>` tags in `src/routes/__root.tsx` `head()` (project rule: no `@import` of remote URLs). Add `--font-sans: "Geist", …` and `--font-mono: "Geist Mono", …` in `@theme`.

## 3. Dependencies

`bun add` the missing Radix packages the NeosPower components need beyond what's in the current tree:
`@radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch @radix-ui/react-progress` (dialog, popover, dropdown, tooltip, label, slot are already installed via existing shadcn).

## 4. Components — full swap

Port all 25 files from `neospower-ds/src/components/` into this project's `src/components/ui/` (same folder shadcn already uses so downstream imports keep working):

button, input, textarea, select, label, field, checkbox, radio-group, switch, segmented, badge (+ Count), card, alert, banner, spinner (+ Dots), progress, skeleton, dialog, sheet, tooltip, popover, dropdown-menu, toast, border-glow (+ co-located `border-glow.css`).

Adaptations during port:
- Keep shadcn file names so existing imports (`@/components/ui/button`, etc.) resolve to the new NeosPower versions.
- Add new-file exports for NeosPower-only pieces not in the current ui/: `field`, `segmented`, `banner`, `border-glow`, and re-export `Count`, `Dots` from their sibling files.
- Replace any `tailwindcss-animate` class refs with the `animate-np-*` utilities defined in styles.css.
- Keep `React.forwardRef` + `cva` + `cn()` structure verbatim. Enforce the crisp-gradient-edge rule (`border-brand-border` + `[background-clip:padding-box]`) on Checkbox/Radio/Switch/Segmented/solid Badge.
- Delete shadcn components that NeosPower doesn't cover only if unused; leave others (accordion, table, etc.) in place — they'll re-theme via the shared tokens.

## 5. `cn()` + utils

Already present at `src/lib/utils.ts`. Verify signature matches (`twMerge(clsx(inputs))`) — no change expected.

## 6. Home page showcase — `src/routes/index.tsx`

Replace the placeholder with a dark showcase route:

- Root `<TooltipProvider>` wrap.
- Hero: `BorderGlow` card with headline in `text-gradient-brand`, one primary `Button` (gradient), one `Button variant="ghost"`.
- Sections (each in a `Card variant="glass"`): Buttons (all variants/sizes/loading), Forms (Field + Input/Textarea/Select/Checkbox/Radio/Switch/Segmented), Status (Badge/Count/Alert/Banner/Progress/Skeleton/Spinner/Dots), Overlays (Dialog + Sheet + Popover + DropdownMenu + Tooltip triggers).
- Data blocks use `font-mono` per NeosPower rules.
- Update `head()` on the route with a real app-specific title / description / og tags (kill the "Lovable App" defaults on `__root.tsx` too).

## 7. Verification

- Build passes (`routeTree.gen.ts` unaffected — only route content changes).
- Visual check via Playwright screenshot of `/` at 1280×1800: dark navy background, gradient hero, crisp checked-state edges on Checkbox/Switch, focus ring visible on tab.
- Toggle a token in `src/styles.css` mentally-verify (no hardcoded hex in components).

## Technical notes

- Tailwind v4 has no `tailwind.config.ts`; every token/utility/animation from NeosPower's v3 config is re-expressed inside `src/styles.css` (`@theme`, `@utility`, `@keyframes`).
- `border-glow.css` stays co-located and is imported by `border-glow.tsx` (component-scoped CSS import is fine in Vite).
- No backend / server-function work; all changes are frontend/presentation.
- Existing routes and shadcn consumers keep working because ui/ file paths and export names are preserved.

## Out of scope

- No changes to auth, routing beyond `index.tsx` `head()`, server code, or `routeTree.gen.ts`.
- No light theme polish beyond keeping `.dark` variant hookable — NeosPower ships as dark-default.
