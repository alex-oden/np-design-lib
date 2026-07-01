import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";

export const Route = createFileRoute("/_showcase/typography")({
  head: () => ({
    meta: [
      { title: "Typography — NeosPower UI" },
      {
        name: "description",
        content:
          "Geist for interface and prose, Geist Mono for numerals, IDs, and data. Two families, one rule.",
      },
      { property: "og:title", content: "Typography — NeosPower UI" },
      {
        property: "og:description",
        content: "Geist sans for interface, Geist Mono for data. Type scale from 11 to 54 px.",
      },
    ],
  }),
  component: TypographyPage,
});

const SCALE = [
  { label: "Display", cls: "text-[54px] leading-[1.05] tracking-[-0.03em] font-semibold" },
  { label: "H1", cls: "text-[40px] leading-[1.1] tracking-[-0.025em] font-semibold" },
  { label: "H2", cls: "text-2xl tracking-[-0.02em] font-semibold" },
  { label: "H3", cls: "text-[17px] tracking-[-0.015em] font-semibold" },
  { label: "Body", cls: "text-[15px] leading-relaxed" },
  { label: "Small", cls: "text-[13px] leading-relaxed text-muted-foreground" },
  { label: "Caption", cls: "text-[11.5px] leading-snug text-muted-foreground" },
];

function TypographyPage() {
  return (
    <DocPage
      eyebrow="Foundations"
      title="Typography"
      intro="Geist for interface text. Geist Mono for numerals, identifiers, live metrics, and any data-dense context. Two families, one rule: data reads in mono."
    >
      <Section title="Families">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border/60 bg-card/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              --font-sans
            </p>
            <p className="mt-3 font-sans text-4xl tracking-[-0.02em]">Geist</p>
            <p className="mt-2 font-sans text-[13px] text-muted-foreground">
              The quick brown fox jumps over the lazy dog. 0123456789
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-card/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              --font-mono
            </p>
            <p className="mt-3 font-mono text-4xl tracking-[-0.02em]">Geist Mono</p>
            <p className="mt-2 font-mono text-[13px] text-muted-foreground">
              184.2 MWh · €97.40 · +4.8%
            </p>
          </div>
        </div>
      </Section>

      <Section title="Type scale">
        <div className="divide-y divide-border/60 rounded-lg border border-border/60 bg-card/50">
          {SCALE.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-6 p-5">
              <span className={s.cls}>Neos powers the grid</span>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Data readout" hint="mono · tabular-nums">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["MWh", "184.2"],
            ["€/MWh", "97.40"],
            ["Δ 24h", "+4.8%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-border/60 bg-card/50 p-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                {k}
              </p>
              <p className="mt-1 font-mono text-2xl tabular-nums text-foreground">{v}</p>
            </div>
          ))}
        </div>
      </Section>
    </DocPage>
  );
}