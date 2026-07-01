import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";

export const Route = createFileRoute("/_showcase/colors")({
  head: () => ({
    meta: [
      { title: "Colors — NeosPower UI" },
      {
        name: "description",
        content:
          "Semantic HSL color tokens for surfaces, text, brand gradient, and status. Re-theme the system by editing :root.",
      },
      { property: "og:title", content: "Colors — NeosPower UI" },
      {
        property: "og:description",
        content:
          "Surface, text, brand, and status tokens as HSL triplets. Edit :root to re-theme.",
      },
    ],
  }),
  component: ColorsPage,
});

type Token = { name: string; value: string; text?: string };

const SURFACE: Token[] = [
  { name: "--background", value: "232 40% 9%" },
  { name: "--card", value: "230 33% 12%" },
  { name: "--popover", value: "230 33% 13%" },
  { name: "--secondary", value: "230 24% 18%" },
  { name: "--muted", value: "230 24% 17%" },
  { name: "--border", value: "230 20% 26%" },
];

const TEXT: Token[] = [
  { name: "--foreground", value: "230 25% 97%" },
  { name: "--muted-foreground", value: "230 12% 68%" },
  { name: "--primary-foreground", value: "0 0% 100%" },
];

const BRAND: Token[] = [
  { name: "--brand-start", value: "230 100% 61%" },
  { name: "--brand-end", value: "312 100% 49%" },
  { name: "--brand-cyan", value: "188 86% 53%" },
  { name: "--brand-border", value: "245 76% 58%" },
];

const STATUS: Token[] = [
  { name: "--primary", value: "230 100% 61%" },
  { name: "--accent", value: "312 100% 49%" },
  { name: "--success", value: "155 62% 45%" },
  { name: "--warning", value: "40 95% 58%" },
  { name: "--info", value: "250 82% 68%" },
  { name: "--destructive", value: "2 78% 60%" },
];

function Swatch({ token }: { token: Token }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/60 bg-card/50">
      <div
        className="h-20 w-full"
        style={{ backgroundColor: `hsl(${token.value})` }}
        aria-hidden
      />
      <div className="space-y-0.5 p-3">
        <p className="font-mono text-[12px] text-foreground">{token.name}</p>
        <p className="font-mono text-[11px] text-muted-foreground">hsl({token.value})</p>
      </div>
    </div>
  );
}

function ColorsPage() {
  return (
    <DocPage
      eyebrow="Foundations"
      title="Colors"
      intro="Every color lives in :root as an HSL triplet (`H S% L%`). Tailwind wraps them in hsl() so alpha compositing stays clean. Re-theme the whole system by editing these values."
    >
      <Section title="Brand gradient" hint="two stops">
        <div className="space-y-4">
          <div className="h-32 w-full rounded-[var(--radius)] border border-brand-border bg-brand-gradient [background-clip:padding-box] shadow-glow" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND.map((t) => (
              <Swatch key={t.name} token={t} />
            ))}
          </div>
          <p className="font-mono text-[12px] text-muted-foreground">
            bg-brand-gradient · text-gradient-brand · bg-brand-gradient-soft
          </p>
        </div>
      </Section>

      <Section title="Surfaces" hint="6 tokens">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SURFACE.map((t) => (
            <Swatch key={t.name} token={t} />
          ))}
        </div>
      </Section>

      <Section title="Text" hint="3 tokens">
        <div className="grid gap-3 sm:grid-cols-3">
          {TEXT.map((t) => (
            <Swatch key={t.name} token={t} />
          ))}
        </div>
      </Section>

      <Section title="Status & semantic" hint="6 tokens">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STATUS.map((t) => (
            <Swatch key={t.name} token={t} />
          ))}
        </div>
      </Section>
    </DocPage>
  );
}