import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Search } from "lucide-react";
import { DocPage, Section } from "@/components/showcase-page";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_showcase/inputs")({
  head: () => ({
    meta: [
      { title: "Inputs & fields — NeosPower UI" },
      {
        name: "description",
        content:
          "Text inputs, textareas, native selects, and the Field wrapper that composes label, hint, and validation.",
      },
      { property: "og:title", content: "Inputs & fields — NeosPower UI" },
      {
        property: "og:description",
        content: "Every text control wrapped in a Field for label, hint, and validation.",
      },
    ],
  }),
  component: InputsPage,
});

function InputsPage() {
  const [email, setEmail] = React.useState("op@neos.grid");
  const [notes, setNotes] = React.useState("");
  const invalid = notes.length > 140;

  return (
    <DocPage
      eyebrow="Components"
      title="Inputs & fields"
      intro="Every text control is wrapped in a Field. Field owns the Label, the required marker, the hint text, and the validation message. Controls stay focused on typing."
    >
      <Section title="Text input" hint="leading & trailing icons">
        <div className="grid gap-5 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6 md:grid-cols-2">
          <Field label="Email" htmlFor="email" required>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leadingIcon={<Mail />}
            />
          </Field>
          <Field label="Search" htmlFor="q" hint="Filter dispatched sites.">
            <Input id="q" placeholder="Site ID, region…" leadingIcon={<Search />} />
          </Field>
          <Field label="Disabled" htmlFor="d">
            <Input id="d" defaultValue="Read-only" disabled />
          </Field>
          <Field label="Invalid" htmlFor="inv" error="Value must be a positive number.">
            <Input id="inv" defaultValue="-10" aria-invalid />
          </Field>
        </div>
      </Section>

      <Section title="Textarea" hint="live validation">
        <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-6">
          <Field
            label="Ops note"
            htmlFor="note"
            hint="Optional context for the shift handover."
            error={invalid ? "Keep it under 140 characters." : undefined}
          >
            <Textarea
              id="note"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Battery bank B down for maintenance…"
              aria-invalid={invalid}
            />
          </Field>
        </div>
      </Section>

      <Section title="Select" hint="native semantics">
        <div className="grid gap-5 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6 md:grid-cols-2">
          <Field label="Market" htmlFor="mkt">
            <Select id="mkt" defaultValue="epex">
              <option value="epex">EPEX SPOT · NL</option>
              <option value="nordpool">Nord Pool · SE1</option>
              <option value="omie">OMIE · ES</option>
            </Select>
          </Field>
          <Field label="Timezone" htmlFor="tz" hint="Used for scheduling.">
            <Select id="tz" defaultValue="cet">
              <option value="cet">CET · Europe/Amsterdam</option>
              <option value="utc">UTC</option>
              <option value="pst">PST · America/Los_Angeles</option>
            </Select>
          </Field>
        </div>
      </Section>
    </DocPage>
  );
}