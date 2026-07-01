import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";
import { Spinner } from "@/components/ui/spinner";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/_showcase/motion")({
  head: () => ({
    meta: [
      { title: "Motion — NeosPower UI" },
      {
        name: "description",
        content:
          "Motion primitives: 180–260ms transitions, ease-out entrances, and the animate-np-* utility set.",
      },
      { property: "og:title", content: "Motion — NeosPower UI" },
      {
        property: "og:description",
        content: "Timing, easing, and the animate-np-* utility set.",
      },
    ],
  }),
  component: MotionPage,
});

const CURVES = [
  { name: "np-spin", duration: "1.1s", ease: "linear", use: "Spinner rotation" },
  { name: "np-dots", duration: "1.4s", ease: "ease-in-out", use: "Inline loading dots" },
  { name: "np-toast-in", duration: "260ms", ease: "cubic-bezier(.2,.8,.2,1)", use: "Toast entrance" },
  { name: "np-shimmer", duration: "1.6s", ease: "linear", use: "Skeleton sweep" },
  { name: "np-pulse", duration: "1.8s", ease: "ease-in-out", use: "Live status dots" },
];

function MotionPage() {
  return (
    <DocPage
      eyebrow="Expression"
      title="Motion"
      intro="Motion is functional. Micro-interactions live between 180–260ms, entrances ease-out, exits fade only. Nothing bounces or overshoots — the system reads calm even under load."
    >
      <Section title="Timing tokens">
        <div className="overflow-hidden rounded-[var(--radius)] border border-border/60">
          <table className="w-full text-left font-mono text-[12.5px]">
            <thead className="bg-card/50 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Keyframe</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Easing</th>
                <th className="px-4 py-3">Used by</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 bg-card/30 text-foreground">
              {CURVES.map((c) => (
                <tr key={c.name}>
                  <td className="px-4 py-3">{c.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.duration}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.ease}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Live demos">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              animate-np-spin
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Spinner brand className="size-8" />
            </div>
          </div>
          <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              animate-np-pulse
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[13px] text-foreground">
              <span className="size-2 rounded-full bg-success animate-np-pulse" />
              LIVE
            </div>
          </div>
          <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              animate-np-shimmer
            </p>
            <div className="mt-6">
              <Progress indeterminate />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Principles">
        <ul className="space-y-2 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6 text-[13.5px] leading-relaxed text-muted-foreground">
          <li>· Prefer opacity and small translate over scale for entrances.</li>
          <li>· Never animate layout-affecting properties on hover.</li>
          <li>· Loading states appear only after 250ms of latency.</li>
          <li>· Respect <span className="font-mono text-foreground">prefers-reduced-motion</span>: swap animation for static state.</li>
        </ul>
      </Section>
    </DocPage>
  );
}