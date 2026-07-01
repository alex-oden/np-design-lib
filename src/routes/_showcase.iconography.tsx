import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  Battery,
  Bell,
  Bolt,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Gauge,
  Info,
  Leaf,
  Search,
  Settings,
  Signal,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import { DocPage, Section } from "@/components/showcase-page";

export const Route = createFileRoute("/_showcase/iconography")({
  head: () => ({
    meta: [
      { title: "Iconography — NeosPower UI" },
      {
        name: "description",
        content:
          "Lucide as the icon set. 1.5px stroke, currentColor, 14 / 16 / 20px sizes tuned to typography.",
      },
      { property: "og:title", content: "Iconography — NeosPower UI" },
      {
        property: "og:description",
        content: "Lucide icons at 14, 16, and 20px. currentColor, 1.5px stroke.",
      },
    ],
  }),
  component: IconographyPage,
});

const SET = [
  Zap, Bolt, Battery, Signal, Activity, Gauge, Wind, Sun, Leaf, Cloud,
  Cpu, Bell, Search, Settings, Info, CheckCircle2, AlertTriangle, ChevronRight,
];

function IconographyPage() {
  return (
    <DocPage
      eyebrow="Expression"
      title="Iconography"
      intro="Lucide is the icon set. Icons inherit currentColor, run at 1.5px stroke, and lock to three sizes that align with the type scale: 14, 16, and 20 pixels."
    >
      <Section title="Sizes" hint="14 · 16 · 20">
        <div className="flex items-end gap-8 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6 text-foreground">
          {[14, 16, 20].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Zap style={{ width: s, height: s }} strokeWidth={1.5} />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                {s}px
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tinting" hint="currentColor">
        <div className="flex items-center gap-6 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Zap className="size-5 text-foreground" strokeWidth={1.5} />
          <Zap className="size-5 text-muted-foreground" strokeWidth={1.5} />
          <Zap className="size-5 text-brand-end" strokeWidth={1.5} />
          <Zap className="size-5 text-success" strokeWidth={1.5} />
          <Zap className="size-5 text-warning" strokeWidth={1.5} />
          <Zap className="size-5 text-destructive" strokeWidth={1.5} />
        </div>
      </Section>

      <Section title="Set">
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-9">
          {SET.map((Icon, i) => (
            <div
              key={i}
              className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-[calc(var(--radius)-2px)] border border-border/60 bg-card/40 text-muted-foreground transition-colors hover:border-brand-end/50 hover:text-foreground"
            >
              <Icon className="size-5" strokeWidth={1.5} />
              <span className="font-mono text-[9.5px] uppercase tracking-[0.12em]">
                {Icon.displayName ?? "icon"}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </DocPage>
  );
}