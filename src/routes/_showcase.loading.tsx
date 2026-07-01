import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Dots, Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";

export const Route = createFileRoute("/_showcase/loading")({
  head: () => ({
    meta: [
      { title: "Loading & progress — NeosPower UI" },
      {
        name: "description",
        content:
          "Spinners, dots, determinate and indeterminate progress, skeleton shimmer, and toast enter animation.",
      },
      { property: "og:title", content: "Loading & progress — NeosPower UI" },
      {
        property: "og:description",
        content: "Spinners, dots, progress, skeleton, and toast animations.",
      },
    ],
  }),
  component: LoadingPage,
});

function LoadingPage() {
  const [pct, setPct] = React.useState(24);
  React.useEffect(() => {
    const id = window.setInterval(() => setPct((p) => (p >= 100 ? 24 : p + 4)), 1200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <DocPage
      eyebrow="Feedback & overlays"
      title="Loading & progress"
      intro="Spinners for indeterminate waits, Dots for inline button loading, Progress for known ratios, and Skeleton for content shape. Toast has its own enter animation."
    >
      <Section title="Spinner & dots">
        <div className="flex flex-wrap items-center gap-8 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Spinner />
          <Spinner brand />
          <Spinner className="size-8" />
          <Dots />
          <Button loading>Dispatching…</Button>
        </div>
      </Section>

      <Section title="Progress" hint="determinate · indeterminate">
        <div className="space-y-5 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <div className="space-y-1.5">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Dispatched
              </span>
              <span className="font-mono text-sm tabular-nums text-foreground">{pct}%</span>
            </div>
            <Progress value={pct} />
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Syncing
            </span>
            <Progress indeterminate />
          </div>
        </div>
      </Section>

      <Section title="Skeleton" hint="shimmer">
        <div className="grid gap-4 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6 md:grid-cols-2">
          <div className="space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Toast" hint="enter animation">
        <div className="flex flex-col items-start gap-3 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Toast variant="success">Dispatch confirmed · 184.2 MWh</Toast>
          <Toast variant="info">Firmware 2.4.1 rollout queued</Toast>
          <Toast variant="warning">Site 042 latency spiking</Toast>
          <Toast variant="destructive">Connection lost · retrying</Toast>
        </div>
      </Section>
    </DocPage>
  );
}