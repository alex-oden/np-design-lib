import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";
import { BorderGlow } from "@/components/ui/border-glow";

export const Route = createFileRoute("/_showcase/brand")({
  head: () => ({
    meta: [
      { title: "Brand — NeosPower UI" },
      {
        name: "description",
        content:
          "Wordmark, gradient, and voice. The blue-to-magenta gradient is the single load-bearing brand asset.",
      },
      { property: "og:title", content: "Brand — NeosPower UI" },
      {
        property: "og:description",
        content: "Wordmark, gradient, voice, and BorderGlow signature.",
      },
    ],
  }),
  component: BrandPage,
});

function BrandPage() {
  return (
    <DocPage
      eyebrow="Expression"
      title="Brand"
      intro="The brand rests on one load-bearing asset: the blue-to-magenta gradient. Everything else — wordmark, halo, glow — orbits it. Deploy sparingly so it keeps its charge."
    >
      <Section title="Wordmark">
        <div className="flex items-center justify-center rounded-[var(--radius)] border border-border/60 bg-card/50 py-14">
          <span className="font-mono text-3xl tracking-[0.32em] text-foreground">
            NEOS<span className="bg-brand-gradient bg-clip-text text-transparent">POWER</span>
          </span>
        </div>
      </Section>

      <Section title="Gradient" hint="brand-start → brand-end">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-border/60 p-1">
            <div className="flex h-32 items-end justify-between rounded-[calc(var(--radius)-4px)] bg-brand-gradient p-4 text-foreground">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] opacity-80">
                bg-brand-gradient
              </span>
              <span className="font-mono text-[10.5px] opacity-80">solid</span>
            </div>
          </div>
          <div className="rounded-[var(--radius)] border border-border/60 p-1">
            <div className="flex h-32 items-end justify-between rounded-[calc(var(--radius)-4px)] bg-brand-gradient-soft p-4 text-foreground">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                bg-brand-gradient-soft
              </span>
              <span className="font-mono text-[10.5px] text-muted-foreground">tinted glass</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title="BorderGlow" hint="signature">
        <BorderGlow className="rounded-[calc(var(--radius)+4px)]">
          <div className="rounded-[calc(var(--radius)+2px)] bg-background/80 p-8">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              Signature surface
            </p>
            <h3 className="mt-3 text-xl text-foreground">Grid-scale intelligence, delivered live.</h3>
            <p className="mt-2 max-w-lg text-[13.5px] text-muted-foreground">
              Reserve BorderGlow for the single most important surface on a page — a hero, a
              committed action, a moment worth staging.
            </p>
          </div>
        </BorderGlow>
      </Section>

      <Section title="Voice">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-success">Do</p>
            <ul className="mt-3 space-y-2 text-[13.5px] text-foreground">
              <li>· Precise, measured, evidence-first.</li>
              <li>· Numbers before adjectives.</li>
              <li>· Present tense, active voice.</li>
            </ul>
          </div>
          <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-destructive">
              Don't
            </p>
            <ul className="mt-3 space-y-2 text-[13.5px] text-foreground">
              <li>· Hype, superlatives, marketing gloss.</li>
              <li>· Emoji or exclamation points in product UI.</li>
              <li>· Passive constructions in error copy.</li>
            </ul>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}