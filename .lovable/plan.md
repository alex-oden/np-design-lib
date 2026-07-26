## Goal

Ship the current v1.5.0 (`ThemeBackground` + background utilities) so consumer projects can install and use it, and add usage documentation.

The library code and `package.json` are already at 1.5.0 and `dist/` is rebuilt. What's missing is: docs, README updates, changelog, and the publish steps.

## Changes

### 1. `CHANGELOG.md` — prepend v1.5.0 entry
- New `ThemeBackground` component (variants: `page-aurora`, `hero-aurora`, `grid-glow`, `dot-field`, `spotlight`; props `intensity`, `accent`, `fixed`).
- New Tailwind v4 utilities: `bg-page-aurora`, `bg-grid-glow`, `bg-dot-field`, `bg-spotlight-top`, `bg-spotlight-corners`.
- New keyframes/animations: `animate-np-float-1|2|3`.

### 2. `README.md`
- Bump version examples from `1.3.3` → `1.5.0`.
- Add `ThemeBackground` row to the Components table.
- Add a short "Backgrounds" section with 3 snippets (component, utility, custom accent) plus the "wrap content in `relative z-10`" note.
- Update the "Key utilities" list to include the new `bg-*` background utilities and `animate-np-float-*`.

### 3. New `docs/usage-backgrounds.md`
Focused how-to for consumers:
- When to use each variant (page shell, hero, feature section, product stage, calm section).
- Full working example: hero section with `hero-aurora` + content on `relative z-10`.
- Re-theming via `--brand-start` / `--brand-end` override on `:root`.
- Performance/accessibility notes: layers are `pointer-events-none`, honor `prefers-reduced-motion` (hero-aurora animations should be paused — verify current component and note the fix if missing).

### 4. New `docs/consumer-quickstart.md`
Extract the "Quick start in a consumer project" section from README into a longer standalone doc that also covers:
- Font loading (`<link>` vs `@fontsource-variable/geist`).
- Dark mode toggle (add/remove `.dark` on `<html>`).
- Tree-shaking with subpath imports.
- Upgrading (version pinning, semver).
- Troubleshooting (missing utilities → `@source` path; unstyled components → `tokens.css` not imported).

Link both new docs from README under a new "Documentation" section.

### 5. Rebuild + publish
- Run `bun run build:lib` to refresh `dist/` (picks up any README/token comment changes bundled in the CSS).
- GitHub side (user action, since I can't push git): commit + tag `v1.5.0`; the existing publish workflow will push to npm. I'll spell the exact commands out at the end.

## Out of scope

- No component behavior changes — v1.5.0 code is already merged.
- No new components beyond `ThemeBackground`.
- No changes to the showcase site beyond what's already at `/backgrounds`.
