import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Info, TriangleAlert } from "lucide-react";
import { DocPage, Section } from "@/components/showcase-page";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Banner } from "@/components/ui/banner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_showcase/alerts")({
  head: () => ({
    meta: [
      { title: "Alerts & banners — NeosPower UI" },
      {
        name: "description",
        content:
          "Inline Alert for section-scoped messages; Banner for page-level context with a brand-gradient edge.",
      },
      { property: "og:title", content: "Alerts & banners — NeosPower UI" },
      {
        property: "og:description",
        content: "Info, success, warning, and destructive alert variants + page banners.",
      },
    ],
  }),
  component: AlertsPage,
});

function AlertsPage() {
  return (
    <DocPage
      eyebrow="Feedback & overlays"
      title="Alerts & banners"
      intro="Alerts sit inside a section and explain state at that scope. Banners run at page scope with a brand-gradient left edge — reserve them for one message per page."
    >
      <Section title="Banner" hint="page scope">
        <div className="space-y-3">
          <Banner
            title="Firmware 2.4.1 available"
            description="Rollout to Rotterdam and Utrecht clusters is queued for tonight, 02:00 CET."
          >
            <Button size="sm">Review</Button>
            <Button size="sm" variant="ghost">
              Dismiss
            </Button>
          </Banner>
          <Banner
            title="Maintenance window"
            description="Battery bank B on Site 042 is offline until 14:00."
          >
            <Button size="sm" variant="secondary">
              Details
            </Button>
          </Banner>
        </div>
      </Section>

      <Section title="Alert variants" hint="info · success · warning · destructive">
        <div className="space-y-3">
          <Alert variant="info">
            <Info />
            <div>
              <AlertTitle>Day-ahead market opens in 42 minutes</AlertTitle>
              <AlertDescription>
                Bids submitted after 12:00 CET will not be considered by EPEX SPOT.
              </AlertDescription>
            </div>
          </Alert>
          <Alert variant="success">
            <CircleCheck />
            <div>
              <AlertTitle>Dispatch confirmed</AlertTitle>
              <AlertDescription>
                184.2 MWh accepted for delivery at €97.40 per unit.
              </AlertDescription>
            </div>
          </Alert>
          <Alert variant="warning">
            <TriangleAlert />
            <div>
              <AlertTitle>Threshold nearing limit</AlertTitle>
              <AlertDescription>
                Current price is €81 — 1 EUR under your configured dispatch trigger.
              </AlertDescription>
            </div>
          </Alert>
          <Alert variant="destructive">
            <TriangleAlert />
            <div>
              <AlertTitle>Site 042 unreachable</AlertTitle>
              <AlertDescription>
                Last heartbeat 8 minutes ago. Automatic failover engaged.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </Section>
    </DocPage>
  );
}