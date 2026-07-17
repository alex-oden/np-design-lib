
# Navigation showcase — detailed headers, footers & responsive patterns

Goal: turn the thin `/navigation` page into a comprehensive pattern library that another agent (or designer) can copy from. Every example composes existing library primitives (`Button`, `Input`, `Badge`, `Avatar`, `DropdownMenu`, `Sheet`, `NavigationMenu`, `Separator`, `Tabs`, `Breadcrumb`, `Command`, `SurfaceCard`, `GlassCard`, etc.) and uses only design tokens — no hard-coded colors.

## Scope

Restructure `src/routes/_showcase.navigation.tsx` into clearly-labeled subsections. Each pattern gets: a live demo inside `<Example>` (framed at realistic width via a device-mock wrapper), a short usage note (when to use / avoid), and a "Composed from:" line listing the primitives used so another agent can trace it.

### 1. Headers (Top bars)
Six variants, each in its own `<Section>`:

1. **Marketing header — desktop**
   - Logo (wordmark SVG) · centered `NavigationMenu` with 3 grouped mega-menu items · right-side CTA cluster (`Button` ghost "Sign in" + gradient "Get started") · sticky w/ backdrop blur.
2. **App header — dashboard shell**
   - Logo · workspace `Select` switcher · global `Command`-triggered search (⌘K hint via `<kbd>`) · notifications `Button` icon with `Badge` count · `Avatar` + `DropdownMenu` (profile, settings, sign out).
3. **Docs header**
   - Logo · inline `Input` search with keyboard hint · version `Badge` · `Tabs`-style secondary nav row underneath for section switching · theme toggle (`Toggle`).
4. **E-commerce header (two-row)**
   - Announcement strip using `AlertCard` styling · main row: logo, full-width search `Input` with category `Select` prefix, account/cart icon buttons with count `Badge`s · category `NavigationMenu` row below.
5. **Transparent hero header**
   - Overlays a gradient hero, becomes solid on scroll (documented via a note; demo shows both states side-by-side using `Tabs`).
6. **Minimal centered header** — logo center, single CTA right; used for auth / landing pages.

### 2. Mobile & tablet header variants
Rendered inside a 375px and 768px framed device mock (a simple bordered container with `rounded-[24px]` and label). Same tokens, adapted layouts:

- **Mobile app header** — hamburger `Button` → `Sheet` slide-in with `ShowcaseSidebar`-style nav list, centered logo, right avatar.
- **Mobile marketing header** — logo + hamburger; sheet reveals stacked accordion nav with CTA pinned to bottom.
- **Mobile search header** — collapsed → tap search icon expands into full-width `Input` with cancel.
- **Tablet split header** — logo + primary nav inline (condensed), overflow items collapse into `DropdownMenu` "More".
- **Bottom tab bar (mobile)** — fixed bottom nav with 4–5 icon+label items, active state uses `bg-brand-gradient-soft` pill and pulsing accent dot (matching sidebar pattern). Includes a floating gradient action button variant.

### 3. Sidebars
- **Icon rail (collapsed)** — 56px wide, icon-only with tooltips (`Tooltip` primitive), active pill.
- **Expanded sidebar with sections** — the current showcase sidebar, annotated.
- **Sidebar with workspace switcher header + user footer** — `Avatar`+`DropdownMenu` docked to the bottom.
- **Off-canvas mobile drawer** — `Sheet` example driven by a "Open menu" button.

### 4. Secondary navigation
- **Breadcrumb** — expanded to 4 levels with a truncated middle (`…` `DropdownMenu`) for deep paths, plus a compact mobile variant that shows only "‹ Parent".
- **Tabs — underline, pill, and segmented** — three flavors using `Tabs` + `Segmented`.
- **Stepper / Progress nav** — horizontal 4-step wizard using `Badge` + `Separator` + check icons; vertical variant for mobile.
- **Anchor nav (in-page TOC)** — right-rail sticky list with active-section highlight (visual only, static demo).
- **Pagination** — numeric pager + prev/next; compact mobile variant with just prev/next + "Page 3 of 12".

### 5. Footers
Four variants, each responsive (demonstrated at desktop / tablet / mobile widths via nested framed mocks):

1. **Marketing mega-footer** — 4 link columns + newsletter `Input` + CTA `Button` + social icon row + bottom legal strip with logo, copyright, `Separator`, region `Select`. Collapses to accordion on mobile.
2. **App footer (thin utility bar)** — status dot ("All systems normal"), version `Badge`, links (Docs, Support, Changelog).
3. **Docs footer** — "Was this helpful?" `Segmented` (Yes/No), Edit-on-GitHub link, prev/next article `Button`s with arrow icons, last-updated timestamp.
4. **Minimal centered footer** — wordmark + one line of legal links; used for auth pages.

### 6. Cross-cutting details
- Each demo lives inside `<Example>` and uses `<Section>`'s stagger animation.
- Device-mock component (local to this file) — `<DeviceFrame width={375|768} label="Mobile" />` — bordered `rounded-[24px]` container with a header chip showing the label; used to visually communicate the target viewport without needing real responsive resizing.
- Add a fresh intro paragraph in `DocPage` explaining "how to read this page" (composition-first, tokens-only).
- Update the `_showcase.index.tsx` overview blurb for Navigation so the landing card advertises the new depth.
- No new dependencies; no changes to library components — this is showcase-only. No version bump.

## Technical notes

- File to rewrite: `src/routes/_showcase.navigation.tsx`. Length will grow to ~500–700 lines; keep it split into small internal components (`DeviceFrame`, `HeaderMarketing`, `HeaderApp`, `FooterMega`, etc.) declared at the bottom of the file for readability.
- Reuse `neos-logo.svg` / `neospower-logo.svg` for logos.
- Use `Sheet` for mobile drawers, `NavigationMenu` for desktop mega-menus, `DropdownMenu` for overflow, `Command` for the ⌘K trigger (open-on-click demo), `Tooltip` for collapsed sidebar icons.
- All colors via tokens: `bg-card`, `bg-secondary`, `border-border/60`, `bg-brand-gradient`, `bg-brand-gradient-soft`, `text-muted-foreground`, `text-accent`.
- Active states reuse the pulsing accent dot pattern from `ShowcaseSidebar` for consistency.
- No changes to `src/routes/_showcase.tsx`, `styles.css`, or any `src/components/ui/*` file.
- Update `docs/neospower-report.md` with a short bullet noting the expanded Navigation showcase.

## Out of scope

- Real router integration for the demo links (they render as visual `Link`/`Button` with `#`).
- New card/button variants or new tokens.
- Library version bump — showcase-only change.
