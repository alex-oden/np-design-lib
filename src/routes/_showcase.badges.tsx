import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";
import { Badge, Count } from "@/components/ui/badge";
import { APP_VERSION_FULL } from "@/lib/version";

export const Route = createFileRoute("/_showcase/badges")({
  head: () => ({
    meta: [
      { title: "Badges & status — NeosPower UI" },
      {
        name: "description",
        content:
          "Compact monospace status vocabulary. Six variants, optional status dot, live pulse.",
      },
      { property: "og:title", content: "Badges & status — NeosPower UI" },
      {
        property: "og:description",
        content: "Six badge variants for status. Optional dot + live pulse.",
      },
    ],
  }),
  component: BadgesPage,
});

function BadgesPage() {
  return (
    <DocPage
      eyebrow="Components"
      title="Badges & status"
      intro="The compact vocabulary of a live system. Badges are monospace and uppercase-friendly; a status dot marks health, and the live flag pulses to signal real-time updates."
    >
      <Section title="Variants" hint="6 total">
        <div className="flex flex-wrap gap-2 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Badge>DEFAULT</Badge>
          <Badge variant="solid">SOLID</Badge>
          <Badge variant="success">HEALTHY</Badge>
          <Badge variant="warning">DEGRADED</Badge>
          <Badge variant="destructive">DOWN</Badge>
          <Badge variant="info">{APP_VERSION_FULL}</Badge>
        </div>
      </Section>

      <Section title="With dot" hint="dot · dot + live">
        <div className="flex flex-wrap gap-2 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Badge variant="success" dot>
            HEALTHY
          </Badge>
          <Badge variant="warning" dot>
            DEGRADED
          </Badge>
          <Badge variant="destructive" dot live>
            DOWN
          </Badge>
          <Badge variant="info" dot live>
            SYNCING
          </Badge>
        </div>
      </Section>

      <Section title="Count" hint="notification pill">
        <div className="flex flex-wrap items-center gap-6 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            Inbox <Count>3</Count>
          </span>
          <span className="inline-flex items-center gap-2">
            Warnings <Count className="!bg-warning !text-warning-foreground">12</Count>
          </span>
          <span className="inline-flex items-center gap-2">
            Alerts <Count className="!bg-destructive">99+</Count>
          </span>
        </div>
      </Section>
    </DocPage>
  );
}