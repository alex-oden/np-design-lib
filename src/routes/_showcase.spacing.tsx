import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";

export const Route = createFileRoute("/_showcase/spacing")({
  head: () => ({
    meta: [
      { title: "Spacing & shadows — NeosPower UI" },
      {
        name: "description",
        content:
          "Radius scale from 6 to 20 pixels, plus card, glow, and ring shadow tokens for depth.",
      },
      { property: "og:title", content: "Spacing & shadows — NeosPower UI" },
      {
        property: "og:description",
        content: "Radius, spacing, and elevation tokens shared by every component.",
      },
    ],
  }),
  component: SpacingPage,
});

const RADII = [
  { name: "--radius-sm", cls: "rounded-[calc(var(--radius)-6px)]", value: "6px" },
  { name: "--radius-md", cls: "rounded-[calc(var(--radius)-4px)]", value: "8px" },
  { name: "--radius (lg)", cls: "rounded-[var(--radius)]", value: "12px" },
  { name: "--radius-xl", cls: "rounded-[calc(var(--radius)+8px)]", value: "20px" },
];

const SPACING = [
  { name: "p-2", size: "8px" },
  { name: "p-3", size: "12px" },
  { name: "p-4", size: "16px" },
  { name: "p-6", size: "24px" },
  { name: "p-10", size: "40px" },
];

const SHADOWS = [
  { name: "shadow-card", cls: "shadow-card" },
  { name: "shadow-glow", cls: "shadow-glow" },
  { name: "shadow-ring", cls: "shadow-ring" },
];

function SpacingPage() {
  return (
    <DocPage
      eyebrow="Foundations"
      title="Spacing & shadows"
      intro="A calm radius scale and three shadow tokens do most of the work. Depth comes from the shadow-glow token; edges stay sharp with a padding-box background clip."
    >
      <Section title="Radius">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RADII.map((r) => (
            <div key={r.name} className="space-y-3">
              <div className={`h-24 border border-border/60 bg-brand-gradient-soft ${r.cls}`} />
              <div>
                <p className="font-mono text-[12px] text-foreground">{r.name}</p>
                <p className="font-mono text-[11px] text-muted-foreground">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing scale">
        <div className="space-y-2">
          {SPACING.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-4 rounded-lg border border-border/60 bg-card/50 p-3"
            >
              <div
                className="rounded-md bg-brand-gradient-soft"
                style={{ width: s.size, height: s.size }}
              />
              <p className="font-mono text-[12px] text-foreground">{s.name}</p>
              <p className="ml-auto font-mono text-[11px] text-muted-foreground">{s.size}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div className="grid gap-4 sm:grid-cols-3">
          {SHADOWS.map((s) => (
            <div key={s.name} className="space-y-3">
              <div
                className={`h-32 rounded-[var(--radius)] border border-border/60 bg-card ${s.cls}`}
              />
              <p className="font-mono text-[12px] text-foreground">{s.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </DocPage>
  );
}