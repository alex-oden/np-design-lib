import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";
import {
  ThemeBackground,
  type ThemeBackgroundVariant,
  type ThemeBackgroundIntensity,
  type ThemeBackgroundAccent,
} from "@/components/ui/theme-background";
import { Segmented } from "@/components/ui/segmented";

export const Route = createFileRoute("/_showcase/backgrounds")({
  head: () => ({
    meta: [
      { title: "Backgrounds — NeosPower UI" },
      {
        name: "description",
        content:
          "Layered atmospheric backgrounds — page aurora, hero aurora, grid glow, dot field, and spotlight — themed by brand tokens.",
      },
      { property: "og:title", content: "Backgrounds — NeosPower UI" },
      {
        property: "og:description",
        content:
          "Five deep, moody background primitives that pair with any surface. Configurable intensity and accent.",
      },
    ],
  }),
  component: BackgroundsPage,
});

type Variant = {
  id: ThemeBackgroundVariant;
  title: string;
  hint: string;
  description: string;
  code: string;
};

const VARIANTS: Variant[] = [
  {
    id: "page-aurora",
    title: "Page aurora",
    hint: "app shell background",
    description:
      "Fixed full-viewport base. Top brand + bottom accent radial glows layered with a fine dual dot-noise pattern in overlay blend. Drop into __root.tsx behind the page content.",
    code: `<ThemeBackground variant="page-aurora" />`,
  },
  {
    id: "hero-aurora",
    title: "Hero aurora",
    hint: "3 animated blobs · screen blend",
    description:
      "Three floating blurred blobs — brand, accent, green — animated on slow 22 / 28 / 32 second float cycles. Screen blend on the dark base produces a living aurora above the fold.",
    code: `<ThemeBackground variant="hero-aurora" intensity="balanced" />`,
  },
  {
    id: "grid-glow",
    title: "Grid glow",
    hint: "64px grid · radial mask",
    description:
      "Fine 64px grid lines faded through a center-elliptical mask, warmed by dual brand radial glows. Ideal for feature or product sections that want a technical texture.",
    code: `<ThemeBackground variant="grid-glow" />`,
  },
  {
    id: "dot-field",
    title: "Dot field",
    hint: "22px dots · focal glow",
    description:
      "22px radial-dot field with a centered ellipse mask over a large blurred brand radial glow. A great stage behind a hero product image or key visual.",
    code: `<ThemeBackground variant="dot-field" />`,
  },
  {
    id: "spotlight",
    title: "Spotlight",
    hint: "soft brand radials",
    description:
      "Quiet dual and tri-radial brand glows placed at top and opposite corners. No grid, no noise — pure atmosphere for calmer sections like features, footers, or contact.",
    code: `<ThemeBackground variant="spotlight" />`,
  },
];

const INTENSITY_OPTIONS = [
  { value: "subtle", label: "Subtle" },
  { value: "balanced", label: "Balanced" },
  { value: "vivid", label: "Vivid" },
];

const ACCENT_OPTIONS = [
  { value: "brand", label: "Brand" },
  { value: "green", label: "Green" },
];

function VariantPreview({ variant }: { variant: Variant }) {
  const [intensity, setIntensity] = React.useState<ThemeBackgroundIntensity>("balanced");
  const [accent, setAccent] = React.useState<ThemeBackgroundAccent>("brand");

  return (
    <Section title={variant.title} hint={variant.hint}>
      <p className="text-[14px] leading-relaxed text-muted-foreground">{variant.description}</p>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
            Intensity
          </span>
          <Segmented
            options={INTENSITY_OPTIONS}
            value={intensity}
            onValueChange={(v) => setIntensity(v as ThemeBackgroundIntensity)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
            Accent
          </span>
          <Segmented
            options={ACCENT_OPTIONS}
            value={accent}
            onValueChange={(v) => setAccent(v as ThemeBackgroundAccent)}
          />
        </div>
      </div>

      <div className="relative h-[360px] w-full overflow-hidden rounded-[var(--radius)] border border-border/60 bg-background">
        <ThemeBackground
          variant={variant.id}
          intensity={intensity}
          accent={accent}
          fixed={false}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
            {variant.id}
          </p>
          <p className="max-w-md text-[15px] text-foreground/90">
            Content sits on top with{" "}
            <code className="font-mono text-[12px] text-muted-foreground">relative z-10</code>.
          </p>
        </div>
      </div>

      <pre className="overflow-x-auto rounded-lg border border-border/60 bg-card/40 p-4 font-mono text-[12px] text-muted-foreground">
        {variant.code}
      </pre>
    </Section>
  );
}

function BackgroundsPage() {
  return (
    <DocPage
      eyebrow="Foundations"
      title="Backgrounds"
      intro="Layered decorative backgrounds ported from the NeosPower home. Each variant is a stack of absolutely-positioned, non-interactive layers that reference brand tokens — re-theme by editing --brand-start / --brand-end. Wrap content in relative z-10 to sit on top."
    >
      <Section title="Usage" hint="component or utility">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 rounded-lg border border-border/60 bg-card/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
              Component (recommended)
            </p>
            <pre className="overflow-x-auto font-mono text-[12px] text-muted-foreground">{`import { ThemeBackground } from "@alex-oden/ui";

<section className="relative overflow-hidden">
  <ThemeBackground variant="grid-glow" />
  <div className="relative z-10">…</div>
</section>`}</pre>
          </div>
          <div className="space-y-2 rounded-lg border border-border/60 bg-card/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
              Utility class (single layer)
            </p>
            <pre className="overflow-x-auto font-mono text-[12px] text-muted-foreground">{`<section className="bg-page-aurora">…</section>
<section className="bg-grid-glow">…</section>
<section className="bg-dot-field">…</section>
<section className="bg-spotlight-top">…</section>
<section className="bg-spotlight-corners">…</section>`}</pre>
          </div>
        </div>
      </Section>

      {VARIANTS.map((v) => (
        <VariantPreview key={v.id} variant={v} />
      ))}
    </DocPage>
  );
}