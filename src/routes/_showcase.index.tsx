import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { BorderGlow } from "@/components/ui/border-glow";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { APP_VERSION_SHORT } from "@/lib/version";

export const Route = createFileRoute("/_showcase/")({
  head: () => ({
    meta: [
      { title: "NeosPower UI — Design system for energy-tech" },
      {
        name: "description",
        content:
          "A dark-first, token-driven React design system. Twenty-five components, one brand gradient, engineered for data-dense energy interfaces.",
      },
      { property: "og:title", content: "NeosPower UI — Design system for energy-tech" },
      {
        property: "og:description",
        content:
          "Dark, calm, data-dense. Twenty-five accessible components with a single blue → magenta brand gradient.",
      },
    ],
  }),
  component: Overview,
});

const SECTIONS: { to: string; label: string; blurb: string }[] = [
  { to: "/colors", label: "Colors", blurb: "Semantic HSL tokens · brand gradient · status hues" },
  { to: "/typography", label: "Typography", blurb: "Geist for prose · Geist Mono for data" },
  { to: "/spacing", label: "Spacing & shadows", blurb: "Radius scale · elevation · glow" },
  { to: "/buttons", label: "Buttons", blurb: "Six variants · five sizes · loading state" },
  { to: "/inputs", label: "Inputs & fields", blurb: "Text, textarea, select, icons, validation" },
  { to: "/selection", label: "Selection controls", blurb: "Checkbox · radio · switch · segmented" },
  { to: "/cards", label: "Cards", blurb: "Surface · Glass · Interactive · Metric · Stat · Feature · Media · Alert · Glow" },
  { to: "/badges", label: "Badges & status", blurb: "Compact monospace status vocabulary" },
  {
    to: "/navigation",
    label: "Navigation",
    blurb: "Headers, sidebars, drawers, breadcrumbs, tabs, steppers, pagers, footers — desktop, tablet & mobile",
  },
  { to: "/alerts", label: "Alerts & banners", blurb: "Inline messages · page banners" },
  { to: "/overlays", label: "Overlays", blurb: "Dialog · sheet · popover · dropdown · tooltip" },
  { to: "/loading", label: "Loading & progress", blurb: "Spinners · dots · progress · skeleton" },
  { to: "/data-viz", label: "Data viz", blurb: "Charts themed with brand palette" },
  { to: "/motion", label: "Motion", blurb: "Animation utility catalog" },
  { to: "/iconography", label: "Iconography", blurb: "Lucide sizing & color rules" },
  { to: "/brand", label: "Brand", blurb: "Mark, wordmark, gradient rules" },
];

function Overview() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-16 px-6 py-14 md:px-10">
      <BorderGlow animated glowColor="248 90 70" borderRadius={22}>
        <div className="space-y-6 p-10 md:p-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="size-3" />
            Design system · {APP_VERSION_SHORT}
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-[54px]">
            Build energy-tech UI that{" "}
            <span className="text-gradient-brand">feels engineered</span>.
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            NeosPower UI is a dark-first React design system. Twenty-five accessible components,
            one brand gradient, and the tokens to re-theme the whole system from a single file.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" asChild>
              <Link to="/colors">
                <Zap /> Explore foundations
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link to="/buttons">Browse components</Link>
            </Button>
          </div>
        </div>
      </BorderGlow>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-[-0.02em]">Sections</h2>
          <Badge variant="default" dot live>
            {APP_VERSION_SHORT} live
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex flex-col justify-between gap-3 rounded-[var(--radius)] border border-border/60 bg-card/60 p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-glow"
            >
              <div className="space-y-1">
                <p className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                  {s.label}
                </p>
                <p className="text-[12.5px] leading-relaxed text-muted-foreground">{s.blurb}</p>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}