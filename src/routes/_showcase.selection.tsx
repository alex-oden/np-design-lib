import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/showcase-page";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Segmented } from "@/components/ui/segmented";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/_showcase/selection")({
  head: () => ({
    meta: [
      { title: "Selection controls — NeosPower UI" },
      {
        name: "description",
        content:
          "Checkbox, radio group, switch, and the sliding-thumb segmented control — all keyboard accessible.",
      },
      { property: "og:title", content: "Selection controls — NeosPower UI" },
      {
        property: "og:description",
        content: "Checkbox, radio, switch, and segmented control with a sliding brand thumb.",
      },
    ],
  }),
  component: SelectionPage,
});

function SelectionPage() {
  const [tab, setTab] = React.useState("realtime");
  const [dispatch, setDispatch] = React.useState("balanced");
  const [chan, setChan] = React.useState({ email: true, sms: false, webhook: true });
  const [auto, setAuto] = React.useState(true);
  const [manual, setManual] = React.useState(false);

  return (
    <DocPage
      eyebrow="Components"
      title="Selection controls"
      intro="Multi-select, single-select, and boolean state. The Segmented control uses a sliding brand-gradient thumb; Switch shows the brand gradient in its checked state."
    >
      <Section title="Segmented" hint="single-select">
        <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Segmented
            value={tab}
            onValueChange={setTab}
            options={[
              { value: "realtime", label: "Realtime" },
              { value: "day", label: "Day-ahead" },
              { value: "history", label: "History" },
            ]}
          />
        </div>
      </Section>

      <Section title="Radio group" hint="one of many">
        <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <RadioGroup value={dispatch} onValueChange={setDispatch}>
            {[
              ["conservative", "Conservative — smaller trades, tighter bounds"],
              ["balanced", "Balanced — default risk profile"],
              ["aggressive", "Aggressive — trade every opportunity"],
            ].map(([v, label]) => (
              <label key={v} className="flex cursor-pointer items-center gap-3 text-sm">
                <RadioGroupItem value={v} />
                <span className={dispatch === v ? "text-foreground" : "text-muted-foreground"}>
                  {label}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>
      </Section>

      <Section title="Checkbox" hint="many of many">
        <div className="space-y-2.5 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          {(
            [
              ["email", "Email"],
              ["sms", "SMS"],
              ["webhook", "Webhook"],
            ] as const
          ).map(([k, label]) => (
            <label key={k} className="flex cursor-pointer items-center gap-3 text-sm">
              <Checkbox
                checked={chan[k]}
                onCheckedChange={(v) => setChan((p) => ({ ...p, [k]: v === true }))}
              />
              <span className="text-foreground">{label}</span>
            </label>
          ))}
        </div>
      </Section>

      <Section title="Switch" hint="on / off">
        <div className="space-y-3 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <label className="flex cursor-pointer items-center gap-3 text-sm">
            <Switch checked={auto} onCheckedChange={setAuto} />
            <span className="text-foreground">Automatic balancing</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 text-sm">
            <Switch checked={manual} onCheckedChange={setManual} />
            <span className="text-foreground">Manual override</span>
          </label>
          <label className="flex items-center gap-3 text-sm opacity-60">
            <Switch checked disabled />
            <span>Disabled (locked on)</span>
          </label>
        </div>
      </Section>
    </DocPage>
  );
}