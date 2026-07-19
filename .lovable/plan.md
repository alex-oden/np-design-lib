
# Navigation showcase — responsiveness pass

Scope: `src/routes/_showcase.navigation.tsx` only. No library, token, version, or docs changes. Goal: every example survives real viewport resize (from 320px up to desktop), and the "Mobile 375 / Tablet 768" mocks always render their content at the labelled internal width — not at whatever the parent column happens to be.

## Problems verified from the current file and your screenshots

1. **`DeviceFrame` collapses on narrow viewports.** It sets `style={{ width, maxWidth: "100%" }}` on the outer wrapper, so on a 390px preview the "768px tablet" frame becomes ~360px wide and the children re-flow into a broken narrow layout. That's why the App-header mock shows "Search…" wrapping into three lines and the E-commerce announcement wraps its code chip.
2. **Desktop headers are shown raw, without a frame.** `HeaderMarketing / App / Docs / Ecom / Transparent / Minimal` render at the page column width. When the browser is narrow (or the sidebar is open), they overflow or wrap in ugly ways (e.g. the Docs `v1.3.2` badge stacking, the E-commerce category select pushing the search out).
3. **Section grids don't adapt.** The mobile / tablet grid is a single column of stacked frames; on a wide desktop it wastes space, and the "Mobile · bottom tab bar (`lg:col-span-2`)" assumption breaks when the grid isn't `lg:grid-cols-2`.
4. **Page shell padding is fixed.** `DocPage` uses `px-6 md:px-10`; combined with the 768px tablet mock this guarantees horizontal overflow below ~820px. The examples need internal scroll containment, not page-level overflow.
5. **Sidebar / footer demos** repeat the same pattern (fixed inner widths, no min-width guards), so at <640px the mega-footer newsletter column and sidebar workspace switcher clip.

## Fix

### 1. Rewrite `DeviceFrame` to *simulate* the device width via CSS scale, not real width

- Render children in a fixed-size inner box: `width: {375|768}px, height: auto` (real internal width, so responsive breakpoints inside the header behave as they would on that device).
- Wrap that inner box in an outer container measured by `ResizeObserver` (small local hook). Compute `scale = min(1, containerWidth / deviceWidth)` and apply `transform: scale(var(--s)); transform-origin: top left;`. Reserve vertical space with `height: naturalHeight * scale` using another observer on the inner content.
- Add a small "scaled to N%" chip next to the existing "768px" label whenever `scale < 1`, so it's obvious the mock is a faithful shrink and not a broken layout.
- Keep the phone-frame styling (rounded border, shadow) on the *inner* box so the chrome scales with the content.

Result: the 768px tablet mock keeps its tablet layout even inside a 360px column; the 375px mobile mock stays pixel-accurate at every viewport.

### 2. Wrap the desktop header section in the same frame at a `desktop` size

- Extend `DeviceFrame` to accept `width: 375 | 768 | 1280` (or a numeric `width` + optional `label`).
- Render each of the 6 desktop headers inside `<DeviceFrame width={1280} label="Desktop · …">`. That guarantees each header always sees a ≥1024px canvas (its actual design target) and scales down cleanly on narrow browsers instead of collapsing into wrap chaos.
- Keep one live, un-framed "at page width" copy under a "Fluid" subsection ONLY for the Marketing and App headers, and harden those two so they truly work fluid:
  - `HeaderMarketing`: collapse the `NavigationMenu` to a hamburger under `md:`, hide the "Sign in" ghost button under `sm:`, keep only the gradient CTA.
  - `HeaderApp`: swap the workspace `Select` for an icon-only button under `md:`, hide the ⌘K search chip under `sm:` (icon-only trigger), keep avatar.

### 3. Harden every desktop header's internal layout

Even inside the 1280 frame, each header must not rely on wrapping tricks:

- Convert every "left group / center / right group" row from `flex flex-wrap justify-between` to `grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4`.
- Add `min-w-0` to every text-bearing flex/grid child, `shrink-0` to logos, icons, avatars, badges.
- `HeaderDocs`: put the version `Badge` on the wordmark row with `whitespace-nowrap`, and give the search input `min-w-0 flex-1 max-w-md`.
- `HeaderEcom`: two-row grid stays, but the announcement strip becomes `flex-wrap gap-x-3 gap-y-1` with `text-center` fallback under `sm:`; the code chip gets `shrink-0`.
- `HeaderTransparentDemo`: the CTA row uses `hidden sm:flex` for the secondary link so only the gradient CTA remains under 640px.
- `HeaderMinimal`: already `grid grid-cols-[1fr_auto_1fr]` — verify the center cell has `justify-self-center min-w-0`.

### 4. Responsive grids for the mock sections

- Desktop headers list: `grid grid-cols-1 gap-8` (each frame full-width inside the article column).
- Mobile / tablet mocks: `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-start`. Drop the `lg:col-span-2` on the bottom-tab-bar frame; it stands alone at its natural 375 width.
- Footer mocks: same 1 / 2 / 3 responsive grid.
- Sidebar demos: `grid grid-cols-1 lg:grid-cols-2 gap-6`, each sidebar mock rendered inside a `DeviceFrame width={1024}` so the sidebar+content split reads correctly at any browser width.

### 5. Page shell: prevent horizontal overflow

- In this route's return, wrap children in `<div className="min-w-0 overflow-x-hidden">` and use `px-4 sm:px-6 md:px-10` for the article. (Local override — no change to `DocPage`.)
- Every `Example`-style container in this file gets `min-w-0`. Long mono strings ("COMPOSED FROM: …") get `flex-wrap` on their chip row and `break-words` on the note paragraph.

### 6. FooterMega / FooterMegaMobile responsiveness

- `FooterMega`: `grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] gap-10`. Newsletter column always stacks vertically (`flex-col gap-2`), input `w-full`, button `w-full sm:w-auto`.
- `compact` mode (tablet mock inside 768 frame): `grid-cols-2` for the 4 link columns under a full-width brand row, newsletter stacked full-width above.
- Legal strip: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`, social icons row with `gap-3`.

### 7. SidebarIconRail / SidebarWorkspaceHeader / BottomTabBar

- Add `min-h-0` to their scroll regions, `truncate` to workspace name and user email.
- `BottomTabBar` FAB: absolutely positioned relative to the tab bar with `left-1/2 -translate-x-1/2 -top-5`, `size-11`, `aria-label="New"`; tab bar `pt-1.5 pb-2 grid grid-cols-5`.

## Technical notes

- Add one small local hook `useElementWidth(ref)` (ResizeObserver, guarded for SSR — no observer on the server; initial value `0`, scale defaults to `1` so first paint isn't blank).
- Scaling implementation:
  ```tsx
  <div ref={outerRef} className="w-full">
    <div
      style={{
        width: deviceWidth,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
    {/* spacer to reserve scaled height */}
    <div style={{ height: innerHeight * scale }} aria-hidden />
  </div>
  ```
  (Actual code will fold the spacer into the same wrapper via `height` on the outer and absolute-positioned inner to avoid layout thrash.)
- No new dependencies, no changes outside `src/routes/_showcase.navigation.tsx`.

## Out of scope

- No edits to `src/components/ui/*`, `src/components/showcase-page.tsx`, `styles.css`, tokens, `package.json`, `CHANGELOG.md`, `docs/`, or any other showcase route.
- No new library primitives, no version bump.
- Content (copy, section order, which patterns are shown) stays as-is; this pass is purely responsiveness and polish.
