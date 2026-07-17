## Fix: smooth levitation on `InteractiveCard`

**Problem:** hover feels like a jump/teleport instead of a smooth lift. Two root causes in `src/components/ui/interactive-card.tsx`:

1. The transition timing `cubic-bezier(.23, 1, .32, 1)` is an "out-expo"-style curve — most of the movement happens in the first ~60ms, so the eye reads it as a snap. It needs a softer, more symmetrical easing and a longer duration.
2. On hover the card animates **transform + shadow + border-color**, but on unhover only transform reverses smoothly — shadow appears/disappears abruptly because the base state has no shadow to interpolate from. Result: lift up looks OK, drop back looks like a pop.

**Scope:** only `src/components/ui/interactive-card.tsx`. No other components, no global CSS, no route changes, no version bump. Revert the earlier broader motion additions is NOT part of this task — user only flagged this one component.

### Changes

Rewrite the className stack in `InteractiveCard` to:

- **Duration:** `420ms` (up from 280ms) so the eye tracks the motion.
- **Easing:** `cubic-bezier(0.22, 0.61, 0.36, 1)` (ease-out-quart-ish, smoother tail) — motion decelerates gently instead of snapping.
- **Base shadow:** add a subtle resting shadow (`shadow-[0_1px_2px_-1px_hsl(var(--brand-start)/.08)]`) so the hover shadow has a value to animate **from** and **to** — no more pop on exit.
- **Hover lift:** keep `-translate-y-1` but pair it with a slightly softer shadow so it feels lifted, not slammed.
- **Active state:** shorter override (`duration-150`) for tactile press feedback — press should be quick, release should ride the main curve.
- **Transition list:** explicitly include `background-color` too, in case token themes tint on hover.
- Keep `will-change-transform`, focus-visible ring, and `motion-reduce` guards.

### Verification

- Playwright: hover an `InteractiveCard` on `/cards`, record a short screenshot sequence (before / mid-transition / hovered / mid-exit / rest) to confirm the intermediate frames actually differ — i.e. the motion is interpolating, not jumping.
- Confirm no regression on `active:` press and on `motion-reduce`.

### Not doing

- No changes to `GlassCard`, `MetricCard`, `FeatureCard`, etc.
- No changes to `src/styles.css`, route transitions, or the staggered section entrance.
- No version bump, no changelog entry (internal polish).
