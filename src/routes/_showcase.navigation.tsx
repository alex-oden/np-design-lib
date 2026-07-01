import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { DocPage, Section } from "@/components/showcase-page";

export const Route = createFileRoute("/_showcase/navigation")({
  head: () => ({
    meta: [
      { title: "Navigation — NeosPower UI" },
      {
        name: "description",
        content:
          "Sidebar, breadcrumbs, and top-bar patterns using the same tokens as the rest of the system.",
      },
      { property: "og:title", content: "Navigation — NeosPower UI" },
      {
        property: "og:description",
        content: "Sidebar, breadcrumb, and top-bar navigation patterns.",
      },
    ],
  }),
  component: NavigationPage,
});

function NavigationPage() {
  return (
    <DocPage
      eyebrow="Layout"
      title="Navigation"
      intro="Navigation patterns built from the same tokens. The sidebar on the left of this page is the canonical example — an active item lights up with the soft brand gradient and a pulsing accent dot."
    >
      <Section title="Breadcrumb">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 rounded-[var(--radius)] border border-border/60 bg-card/50 px-4 py-3 text-[13px]"
        >
          <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <Home className="size-3.5" />
            Home
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" />
          <span className="text-muted-foreground">Sites</span>
          <ChevronRight className="size-3.5 text-muted-foreground/60" />
          <span className="text-foreground">Site 042 · Rotterdam</span>
        </nav>
      </Section>

      <Section title="Top bar" hint="global">
        <div className="flex items-center justify-between rounded-[var(--radius)] border border-border/60 bg-card/50 px-4 py-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[12px] tracking-[0.14em] text-foreground">
              NEOSPOWER/UI
            </span>
            <span className="text-[13px] text-muted-foreground">Sites · Live</span>
          </div>
          <div className="flex items-center gap-4 text-[13px]">
            <span className="text-muted-foreground">CET · 14:42</span>
            <div className="size-8 rounded-full bg-brand-gradient" />
          </div>
        </div>
      </Section>

      <Section title="Sidebar (this page)">
        <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6 text-[13.5px] leading-relaxed text-muted-foreground">
          The sidebar on the left of this page is the canonical navigation pattern for the system.
          Group labels use monospace at{" "}
          <span className="font-mono text-foreground">10px</span> with heavy letter-spacing; the
          active item pairs a{" "}
          <span className="font-mono text-foreground">bg-brand-gradient-soft</span> pill with a
          pulsing{" "}
          <span className="inline-block size-1.5 translate-y-[1px] rounded-full bg-accent align-baseline" />
          {" "}accent dot.
        </div>
      </Section>
    </DocPage>
  );
}