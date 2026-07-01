import { createFileRoute } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DocPage, Section } from "@/components/showcase-page";

export const Route = createFileRoute("/_showcase/data-viz")({
  head: () => ({
    meta: [
      { title: "Data viz — NeosPower UI" },
      {
        name: "description",
        content:
          "Charts themed with the NeosPower brand palette. Brand start, brand end, cyan, success, and warning as chart hues.",
      },
      { property: "og:title", content: "Data viz — NeosPower UI" },
      {
        property: "og:description",
        content: "Recharts themed with brand-start, brand-end, cyan, success, and warning hues.",
      },
    ],
  }),
  component: DataVizPage,
});

const HOURS = Array.from({ length: 12 }, (_, i) => ({
  h: `${i * 2}:00`,
  price: 60 + Math.round(Math.sin(i * 0.7) * 18 + i * 2.3 + Math.random() * 6),
  dispatch: 40 + Math.round(Math.cos(i * 0.5) * 20 + i * 3 + Math.random() * 5),
}));

const KPIS = [
  { label: "MWh dispatched", value: "184.2", delta: "+4.8%", color: "text-success" },
  { label: "€/MWh clearing", value: "97.40", delta: "+1.2%", color: "text-success" },
  { label: "Sites live", value: "42 / 44", delta: "2 offline", color: "text-warning" },
  { label: "Latency p95", value: "184 ms", delta: "-6 ms", color: "text-success" },
];

function DataVizPage() {
  return (
    <DocPage
      eyebrow="Expression"
      title="Data viz"
      intro="Data reads in monospace. Charts pull their colors from the same tokens as the rest of the system — brand-start and brand-end frame the primary series, cyan carries deltas, and status hues signal thresholds."
    >
      <Section title="KPI grid" hint="mono numerals">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                {k.label}
              </p>
              <p className="mt-2 font-mono text-2xl tabular-nums text-foreground">{k.value}</p>
              <p className={`mt-1 font-mono text-[11px] ${k.color}`}>{k.delta}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Area chart" hint="brand gradient fill">
        <div className="h-64 rounded-[var(--radius)] border border-border/60 bg-card/50 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={HOURS} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="np-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--brand-end))" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="hsl(var(--brand-start))" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="hsl(var(--border) / 0.4)" strokeDasharray="3 3" />
              <XAxis
                dataKey="h"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }}
                tickLine={false}
                axisLine={false}
                width={40}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--brand-end))"
                strokeWidth={2}
                fill="url(#np-area)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <Section title="Bar chart" hint="two series">
        <div className="h-64 rounded-[var(--radius)] border border-border/60 bg-card/50 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={HOURS} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="hsl(var(--border) / 0.4)" strokeDasharray="3 3" />
              <XAxis
                dataKey="h"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }}
                tickLine={false}
                axisLine={false}
                width={40}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                }}
                cursor={{ fill: "hsl(var(--muted) / 0.4)" }}
              />
              <Bar dataKey="price" fill="hsl(var(--brand-start))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="dispatch" fill="hsl(var(--brand-cyan))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <Section title="Chart palette">
        <div className="grid grid-cols-5 gap-2">
          {[
            ["--brand-start", "hsl(var(--brand-start))"],
            ["--brand-end", "hsl(var(--brand-end))"],
            ["--brand-cyan", "hsl(var(--brand-cyan))"],
            ["--success", "hsl(var(--success))"],
            ["--warning", "hsl(var(--warning))"],
          ].map(([n, c]) => (
            <div key={n} className="space-y-2">
              <div
                className="h-14 rounded-md border border-border/60"
                style={{ background: c }}
              />
              <p className="font-mono text-[10.5px] text-muted-foreground">{n}</p>
            </div>
          ))}
        </div>
      </Section>
    </DocPage>
  );
}