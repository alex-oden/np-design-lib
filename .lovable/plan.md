# Button 3D + ambient glow refinement

Reference images show a gradient pill with:
1. A soft inner top highlight (subtle white bevel) giving a 3D lift.
2. An ambient colored (brand) shadow spreading below the button.

## Changes

**`src/components/ui/button.tsx`** — enhance the `default` (brand gradient) variant only, leaving other variants untouched.

- Add an inner top highlight via `inset` box-shadow: `inset 0 1px 0 hsl(0 0% 100% / 0.35)` plus a faint `inset 0 -1px 0 hsl(0 0% 0% / 0.25)` for the bottom edge — creates the bevel/3D look.
- Add layered ambient colored shadow using both brand tokens:
  - `0 10px 30px -8px hsl(var(--brand-start) / 0.55)`
  - `0 18px 50px -12px hsl(var(--brand-end) / 0.45)`
- Hover: intensify shadow (larger blur, higher alpha) and lift with `-translate-y-[1px]`.
- Active: reduce shadow + settle down (existing `active:translate-y-px` becomes the pressed state).
- Keep gradient background-position animation.

**Bump patch version** in `package.json` → `1.3.1` (visual polish only) and mirror the version constant already sourced from `package.json` (auto-propagates to showcase).

**Update `CHANGELOG.md`** with a short 1.3.1 entry: "Button: added top bevel highlight and ambient brand-tinted shadow for the primary variant."

## Not touched

- Secondary / ghost / outline / destructive / link variants stay flat — the 3D look is for the primary CTA only, matching the references.
- No changes to sizes, structure, or API.
- No showcase route edits needed (buttons page already renders all variants).
