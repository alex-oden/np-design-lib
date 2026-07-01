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

      <Section
        title="Interactive cards"
        hint="move your cursor near the card edges"
      >
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