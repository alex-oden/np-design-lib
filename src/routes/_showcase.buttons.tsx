import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Search, Zap } from "lucide-react";
import { DocPage, Section, Example } from "@/components/showcase-page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_showcase/buttons")({
  head: () => ({
    meta: [
      { title: "Buttons — NeosPower UI" },
      {
        name: "description",
        content:
          "Six button variants and five sizes. One brand-gradient CTA per view; secondary and ghost carry the rest.",
      },
      { property: "og:title", content: "Buttons — NeosPower UI" },
      {
        property: "og:description",
        content: "Default, secondary, ghost, outline, destructive, and link variants.",
      },
    ],
  }),
  component: ButtonsPage,
});

function ButtonsPage() {
  return (
    <DocPage
      eyebrow="Components"
      title="Buttons"
      intro="The primary action element. Use one gradient CTA per view — secondary and ghost carry the rest. All variants share a 200 ms motion curve and a subtle active-state translate."
    >
      <Section title="Variants" hint="6 total">
        <Example>
          <Button>Save changes</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">Learn more</Button>
        </Example>
      </Section>

      <Section title="Sizes" hint="sm · default · lg · xl · icon">
        <Example>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
          <Button size="icon" aria-label="Search">
            <Search />
          </Button>
        </Example>
      </Section>

      <Section title="With icons">
        <Example>
          <Button>
            <Zap /> Dispatch now
          </Button>
          <Button variant="secondary">
            View report <ArrowRight />
          </Button>
          <Button variant="outline">
            <Zap /> Run diagnostics
          </Button>
        </Example>
      </Section>
    </DocPage>
  );
}