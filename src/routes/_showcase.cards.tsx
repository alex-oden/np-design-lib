import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Battery, Gauge, Zap } from "lucide-react";
import { DocPage, Section } from "@/components/showcase-page";
import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
import { GlassCard } from "@/components/ui/glass-card";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { MetricCard } from "@/components/ui/metric-card";
import { StatCard } from "@/components/ui/stat-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { MediaCard } from "@/components/ui/media-card";
import { AlertCard } from "@/components/ui/alert-card";
import { GlowCard } from "@/components/ui/glow-card";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/surface-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


export const Route = createFileRoute("/_showcase/cards")({
  head: () => ({
    meta: [
      { title: "Cards — NeosPower UI" },
      {
        name: "description",
        content:
          "Named card components for every use case: SurfaceCard, GlassCard, InteractiveCard, MetricCard, StatCard, FeatureCard, MediaCard, AlertCard, GlowCard.",
      },
      { property: "og:title", content: "Cards — NeosPower UI" },
      {
        property: "og:description",
        content:
          "Nine specialised card components — one per use case — for data-dense layouts.",
      },
    ],
  }),
  component: CardsPage,
});

function CardsPage() {
  return (
    <DocPage
      eyebrow="Components"
      title="Cards"
      intro="Each card is a distinct component with a clear use case. Pick by intent — SurfaceCard for neutral containers, GlassCard for overlays, InteractiveCard for clickable tiles, MetricCard for KPIs, and so on."
    >
      <Section title="SurfaceCard" hint="neutral container · forms, panels" animated index={0}>
        <SurfaceCard>
          <CardHeader>
            <CardTitle>General settings</CardTitle>
            <CardDescription>
              The default flat surface. No hover, no blur — just a bordered container.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-[13px] text-muted-foreground">
            Use for forms, settings panels, and any content block that shouldn't compete for
            attention.
          </CardContent>
        </SurfaceCard>
      </Section>

      <Section title="GlassCard" hint="translucent · overlays, hero panels" animated index={1}>
        <GlassCard>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  Site 042 · Rotterdam
                </p>
                <CardTitle>Trading live</CardTitle>
              </div>
              <Badge variant="success" dot live>
                OK
              </Badge>
            </div>
            <CardDescription>
              Backdrop blur + saturation. Reach for it when the card sits over a gradient or
              image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Dispatched
                </span>
                <span className="font-mono text-sm tabular-nums text-foreground">64%</span>
              </div>
              <Progress value={64} />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="ghost">Details</Button>
            <Button>
              Open <ArrowUpRight />
            </Button>
          </CardFooter>
        </GlassCard>
      </Section>

      <Section title="InteractiveCard" hint="clickable · renders as <button>" animated index={2}>
        <div className="grid gap-4 md:grid-cols-2">
          {["Rotterdam · 042", "Amsterdam · 018"].map((label) => (
            <InteractiveCard key={label} onClick={() => {}}>
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                    Site
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                    {label}
                  </h3>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
            </InteractiveCard>
          ))}
        </div>
      </Section>

      <Section title="MetricCard" hint="single KPI · label + value + delta" animated index={3}>
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard label="Dispatched" value="184.2" unit="MWh" delta="+4.8%" trend="up" />
          <MetricCard label="Avg price" value="97.40" unit="€/MWh" delta="-1.2%" trend="down" />
          <MetricCard
            label="Round-trip"
            value="92"
            unit="%"
            delta="±0.0%"
            trend="flat"
            icon={<Battery className="size-4" />}
          />
        </div>
      </Section>

      <Section title="StatCard" hint="2–4 small metrics in one row" animated index={4}>
        <StatCard
          items={[
            { label: "MWh", value: "184.2" },
            { label: "€/MWh", value: "97.40" },
            { label: "Δ 24h", value: "+4.8%" },
            { label: "Sites", value: "42" },
          ]}
        />
      </Section>

      <Section title="FeatureCard" hint="icon + title + description" animated index={5}>
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Zap className="size-5" />}
            title="Real-time dispatch"
            description="Sub-200 ms response across the fleet."
          />
          <FeatureCard
            icon={<Gauge className="size-5" />}
            title="Auto-balancing"
            description="Thresholds tune themselves against live spot prices."
          />
          <FeatureCard
            icon={<Battery className="size-5" />}
            title="92% round-trip"
            description="Best-in-class BESS efficiency, warranted."
          />
        </div>
      </Section>

      <Section title="MediaCard" hint="image on top, content below" animated index={6}>
        <div className="grid gap-4 md:grid-cols-2">
          <MediaCard
            media={
              <div className="size-full bg-brand-gradient" aria-hidden />
            }
          >
            <div className="p-5">
              <h3 className="text-base font-semibold text-foreground">Brand gradient</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Any node fits into the media slot — img, video, SVG, or a coloured div.
              </p>
            </div>
          </MediaCard>
          <MediaCard
            aspectClassName="aspect-square"
            media={<div className="size-full bg-brand-gradient-soft" aria-hidden />}
          >
            <div className="p-5">
              <h3 className="text-base font-semibold text-foreground">Square variant</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Override the aspect ratio via <code>aspectClassName</code>.
              </p>
            </div>
          </MediaCard>
        </div>
      </Section>

      <Section title="AlertCard" hint="inline status block · info / success / warning / danger" animated index={7}>
        <div className="grid gap-3">
          <AlertCard tone="info" title="Scheduled maintenance">
            Grid operator has flagged a 30-minute maintenance window at 03:00 UTC.
          </AlertCard>
          <AlertCard tone="success" title="Dispatch complete">
            184.2 MWh delivered against the 12:00 program.
          </AlertCard>
          <AlertCard tone="warning" title="Approaching cap">
            Site 042 is at 88% of its daily throughput budget.
          </AlertCard>
          <AlertCard tone="danger" title="Comms lost">
            Site 018 heartbeat missed &gt; 60 s. Failover initiated.
          </AlertCard>
        </div>
      </Section>

      <Section title="GlowCard" hint="BorderGlow with brand presets" animated index={8}>
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(248px,1fr))]">
          <GlowCard preset="brand">
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                brand
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                NeosPower BESS
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                215 kWh · 92% round-trip · &lt;200ms response.
              </p>
            </div>
          </GlowCard>
          <GlowCard preset="success">
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-success">
                success
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                Dispatch OK
              </h3>
              <div className="mt-3 font-mono text-3xl tabular-nums text-foreground">
                184.2 <span className="text-lg text-muted-foreground">MWh</span>
              </div>
            </div>
          </GlowCard>
          <GlowCard preset="danger">
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-destructive">
                danger
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                Peak imbalance
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Use for high-severity attention cards.
              </p>
            </div>
          </GlowCard>
        </div>
      </Section>
    </DocPage>
  );
}