## Add subtle brand gradient background + hover glow to `FeatureCard`

Reference screenshot shows FeatureCards with a soft radial/linear brand-tinted gradient sitting on top of the dark card surface, brightening on hover.

### Scope
Only `src/components/ui/feature-card.tsx`. No changes to other card types, tokens, or the showcase.

### Changes
- Wrap the card in `relative isolate` and add a `::before` layer (via an absolutely-positioned `<span aria-hidden>`) painted with a soft brand gradient:
  `background: radial-gradient(120% 90% at 100% 0%, hsl(var(--brand-end)/.10), transparent 60%), linear-gradient(180deg, hsl(var(--brand-start)/.06), transparent 55%)`
  At rest: opacity ~0.7. On hover: opacity 1 + slightly stronger stops, transitioned over ~500ms with the same easing used elsewhere (`cubic-bezier(0.22,0.61,0.36,1)`).
- Keep existing lift + border/shadow hover, but drop the redundant `bg-card/70` swap since the gradient now handles the "lighting up".
- Ensure content sits above the gradient (`relative z-10` wrapper for icon/title/description/children).
- Keep `motion-reduce` guard so the gradient is present but doesn't animate.

### Verification
- Playwright screenshot on `/cards` (Features section) at rest and on hover to confirm the gradient is visible and brightens smoothly.
- Confirm the card still lifts and the border/shadow still respond.

### Not doing
- No change to `SurfaceCard`, `GlassCard`, `MetricCard`, `StatCard`, `MediaCard`, `AlertCard`, `GlowCard`, `InteractiveCard`.
- No token or global CSS additions.
