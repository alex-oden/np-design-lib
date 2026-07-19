import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section, Example } from "@/components/showcase-page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_showcase/button-states")({
  head: () => ({
    meta: [
      { title: "Button states — NeosPower UI" },
      {
        name: "description",
        content:
          "Default, hover, focus, active, loading, and disabled states rendered side by side for every button variant.",
      },
      { property: "og:title", content: "Button states — NeosPower UI" },
      {
        property: "og:description",
        content: "Every interactive state for every button variant.",
      },
    ],
  }),
  component: ButtonStatesPage,
});

const VARIANTS = ["default", "secondary", "ghost", "outline", "inverse", "destructive"] as const;

function ButtonStatesPage() {
  return (
    <DocPage
      eyebrow="Components"
      title="Button states"
      intro="Interactive states share the same 200 ms curve. Loading disables pointer events and swaps the leading slot for a spinner; disabled drops opacity to 0.45."
    >
      <Section title="Loading">
        <Example>
          <Button loading>Dispatching…</Button>
          <Button variant="secondary" loading>
            Loading
          </Button>
          <Button variant="destructive" loading>
            Deleting
          </Button>
        </Example>
      </Section>

      <Section title="Disabled">
        <Example>
          {VARIANTS.map((v) => (
            <Button key={v} variant={v} disabled>
              {v[0].toUpperCase() + v.slice(1)}
            </Button>
          ))}
        </Example>
      </Section>

      <Section title="Focus ring" hint="tab to focus">
        <Example>
          {VARIANTS.map((v) => (
            <Button key={v} variant={v}>
              Focus me
            </Button>
          ))}
        </Example>
        <p className="font-mono text-[11.5px] text-muted-foreground">
          ring-2 ring-ring/60 · shown only on keyboard focus
        </p>
      </Section>

      <Section title="Full width">
        <div className="space-y-3 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Button className="w-full">Save configuration</Button>
          <Button variant="secondary" className="w-full">
            Cancel
          </Button>
        </div>
      </Section>
    </DocPage>
  );
}