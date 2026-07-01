import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { DocPage, Section } from "@/components/showcase-page";
import { Badge } from "@/components/ui/badge";
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
    </DocPage>
  );
}