
# Navigation showcase — fix broken / illogical patterns

Scope: `src/routes/_showcase.navigation.tsx` only (plus using the existing `src/assets/neos-logo.svg` mark). No library, tokens, or version changes.

## Concrete issues to fix (verified from live screenshots)

1. **Wordmarks are too small everywhere.** `Wordmark` renders at `h-5` (compact `h-4`); on desktop headers it looks like a favicon. Bump to `h-7` / `h-6` compact and add a `hero` size (`h-8`, white variant) for the transparent hero header where it currently disappears into the gradient.
2. **Transparent hero header — logo unreadable.** On the gradient background the small wordmark blends in. Use the new hero size and add a subtle text-shadow / drop-shadow so it reads on both states, and swap the CTA to gradient once the header goes solid.
3. **App shell header — "A. Oden" wraps to two lines** inside the avatar chip. Add `whitespace-nowrap` and reduce the search field max width so the header still fits at 1024–1280px without the chip collapsing.
4. **Docs header — `v1.3.2` badge competes with wordmark.** Switch to `Badge variant="outline"`, and give the `/` kbd hint proper right padding so it never overlaps the theme toggle.
5. **Marketing mega-footer — newsletter input squished to "you@co".** Stack the label/input/button vertically inside the brand column and let the input be `w-full`; the current inline `Input + Button` doesn't fit the column.
6. **Tablet mega-footer (768px) is broken.** With `compact=true` we drop to 2 link columns *and* the newsletter input renders empty and Subscribe wraps outside the column. Change tablet layout to `grid-cols-2` for the four link columns under a full-width brand row, and use the vertical newsletter from fix #5.
7. **Mobile mega-footer — legal strip social icons cramped**; give the row `gap-3` and align copyright + icons on their own line above the icons at <400px.
8. **Sheets inside `DeviceFrame` portal to the document body.** Tapping the hamburger in "Mobile · 375" or "Mobile · marketing" opens a full-page sheet across the whole showcase, not inside the phone frame — this is the "broken" behaviour the user is seeing. Replace `Sheet` in mobile demo frames with a **local `MobileDrawer`** helper (absolutely-positioned inside the frame via `position: absolute` on the DeviceFrame's `relative` wrapper, controlled by local `useState`). Keep the real `Sheet` for the dedicated "Off-canvas drawer (mobile)" pattern, but render that pattern inside its own `DeviceFrame` with `container` set to the frame element so the sheet stays inside the phone. Also show the drawer already open by default so the pattern actually communicates something at rest.
9. **Bottom tab bar FAB overlaps content and has no label.** Move the FAB to sit *above* the tab bar (`-top-5`, centered) with a soft brand glow and an aria-label; give the tab bar `pt-1.5 pb-2` and shrink the FAB to `size-11` so it doesn't crowd the "Home" pill.
10. **Sidebar icon rail + workspace switcher use a generic "N"/"NP" square.** Swap for the existing `neos-logo.svg` mark asset so the brand is consistent with the wordmark used elsewhere.
11. **Stepper example stacks a horizontal + vertical variant with no divider or labels** — reads as duplication. Split into two labelled sub-blocks ("Horizontal" / "Vertical (mobile)") with the same mono eyebrow used elsewhere on the page.
12. **Anchor nav** is static: keep the demo but replace the fake body blocks with two short paragraphs (using tokens) so the pattern shows an actual reading surface, and add scroll-margin comment to the "Composed from" note.
13. **HeaderEcom search button** is a full brand-gradient `Button` which visually outshouts the wordmark. Downgrade to `variant="ghost"` inside the input, and reserve the gradient CTA for the announcement strip only.
14. **HeaderMinimal** uses two hardcoded `w-24` spacer divs to centre the wordmark — replace with a proper `grid grid-cols-[1fr_auto_1fr]` layout so the wordmark is truly centered at any width.
15. **Tablet split header — logo at `h-4` is unreadable at 768px.** Use the new default (`h-6`) here.

## Technical notes

- New file-local helpers: `MobileDrawer` (absolute-positioned in-frame drawer with a scrim), `SectionSubhead` (small mono eyebrow used to split stepper variants).
- `DeviceFrame` gains a `frameRef` returned from a `useRef` so `Sheet`'s `container` prop can target it for the one remaining real-Sheet demo.
- `Wordmark` grows a `size` prop: `"sm" | "md" | "hero"` mapped to `h-5`, `h-7`, `h-8`, with an optional `dropShadow` flag for the hero.
- All colors stay on tokens; no `text-white` literals — the hero variant uses `text-foreground` on a `bg-brand-gradient` overlay so it inverts cleanly.
- Bottom tab bar FAB moves inside the same `<div className="relative">` wrapper the tab bar already lives in.

## Out of scope

- No changes to `src/components/ui/*`, `styles.css`, tokens, `package.json`, `CHANGELOG.md`, or the `docs/` report.
- No new library primitives, no new dependencies, no library version bump — this is a showcase-only fix.
