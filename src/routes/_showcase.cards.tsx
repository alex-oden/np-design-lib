import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { DocPage, Section } from "@/components/showcase-page";
import { Badge } from "@/components/ui/badge";
import { BorderGlow } from "@/components/ui/border-glow";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


export const Route = createFileRoute("/_showcase/cards")({
  head: () => ({
    meta: [
      { title: "Cards — NeosPower UI" },
      {
        name: "description",
        content:
          "Three card variants: default flat surface, glass with backdrop blur, and interactive with lift and brand glow.",
      },
      { property: "og:title", content: "Cards — NeosPower UI" },
      {
        property: "og:description",
        content: "Default, glass, and interactive card variants for data-dense layouts.",
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
      intro="The workhorse surface. Default is a flat panel; glass blurs the ambient background; interactive lifts on hover with a brand glow — reserve it for clickable tiles."
    >
      <Section title="Variants">
        <div className="grid gap-4 md:grid-cols-3">
          {(["default", "glass", "interactive"] as const).map((v) => (
            <Card key={v} variant={v}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Variant: {v}</CardTitle>
                  <Badge>{v}</Badge>
                </div>
                <CardDescription>Body copy sits comfortably on the surface.</CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-[13px] tabular-nums text-muted-foreground">
                184.2 MWh
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Composed card" hint="header · content · footer">
        <Card variant="glass">
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
            <CardDescription>Auto-balancing active. Threshold at €82/MWh.</CardDescription>
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
            <div className="grid grid-cols-3 gap-3 pt-1">
              {[
                ["MWh", "184.2"],
                ["€/MWh", "97.40"],
                ["Δ 24h", "+4.8%"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-lg border border-border/60 bg-white/[0.02] px-3 py-2"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {k}
                  </p>
                  <p className="font-mono text-[15px] tabular-nums text-foreground">{v}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="ghost">Details</Button>
            <Button>
              Open <ArrowUpRight />
            </Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Interactive cards" hint="BorderGlow · move your cursor near the edges">
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(248px,1fr))]">
          <BorderGlow colors={["#3657FF", "#FB00C8", "#22D3EE"]} glowColor="248 90 70">
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Asset
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                NeosPower BESS
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                215 kWh · 92% round-trip · &lt;200ms response.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow animated glowColor="312 100 62" colors={["#FB00C8", "#3657FF", "#7C5CFF"]}>
            <div className="p-6">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Annual saving
              </span>
              <div className="mt-3 text-5xl font-semibold text-gradient-brand">€48,200</div>
              <p className="mt-2 text-xs text-muted-foreground">
                Intro sweep plays once on mount.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            glowColor="188 92 60"
            colors={["#22D3EE", "#3657FF", "#7C5CFF"]}
            edgeSensitivity={10}
            coneSpread={40}
          >
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Grid signal
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                Frequency stable
              </h3>
              <div className="mt-3 font-mono text-3xl tabular-nums text-foreground">
                50.02<span className="text-lg text-muted-foreground"> Hz</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Wider cone, higher sensitivity.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            glowColor="150 84 55"
            colors={["#34E29B", "#22D3EE", "#3657FF"]}
            glowRadius={64}
            glowIntensity={1.2}
          >
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-success">
                Dispatch OK
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                Rotterdam · 042
              </h3>
              <div className="mt-3 font-mono text-3xl tabular-nums text-foreground">
                184.2 <span className="text-lg text-muted-foreground">MWh</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Larger halo, brighter tint.</p>
            </div>
          </BorderGlow>

          <BorderGlow
            glowColor="12 96 60"
            colors={["#FF5C3A", "#FB00C8", "#7C5CFF"]}
            coneSpread={12}
            fillOpacity={0.35}
          >
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-destructive">
                Alert
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                Peak imbalance
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Narrow cone traces the pointer more precisely.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            glowColor="268 88 70"
            colors={["#7C5CFF", "#3657FF", "#FB00C8"]}
            borderRadius={28}
          >
            <div className="p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Portfolio
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                42 sites · 1.2 GWh
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">Softer 28px radius.</p>
            </div>
          </BorderGlow>
        </div>
      </Section>
    </DocPage>
  );
}