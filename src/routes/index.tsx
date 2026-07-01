import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Bolt, ChevronDown, Search, Sparkles, Zap } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, Count } from "@/components/ui/badge";
import { Banner } from "@/components/ui/banner";
import { BorderGlow } from "@/components/ui/border-glow";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Segmented } from "@/components/ui/segmented";
import { Select } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Dots, Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "@/components/ui/toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeosPower UI — Dark-first energy-tech design system" },
      {
        name: "description",
        content:
          "Every button, form, card, and overlay in the NeosPower design system, rendered on one page. Token-driven, accessible, brand-consistent.",
      },
      { property: "og:title", content: "NeosPower UI — Dark-first energy-tech design system" },
      {
        property: "og:description",
        content:
          "Every button, form, card, and overlay in the NeosPower design system, rendered on one page.",
      },
    ],
  }),
  component: Showcase,
});

function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">{title}</h2>
        {description && (
          <p className="max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function Showcase() {
  const [tab, setTab] = React.useState("realtime");
  const [progress, setProgress] = React.useState(64);
  const [threshold, setThreshold] = React.useState("82");
  const [notes, setNotes] = React.useState("");
  const [auto, setAuto] = React.useState(true);
  const [dispatch, setDispatch] = React.useState<"conservative" | "balanced" | "aggressive">(
    "balanced",
  );
  const [chan, setChan] = React.useState({ email: true, sms: false, webhook: true });

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => (p >= 100 ? 24 : p + 4));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <TooltipProvider delayDuration={120}>
      <main className="relative min-h-screen bg-background text-foreground">
        {/* Ambient gradient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-[0.55]"
          style={{
            background:
              "radial-gradient(60% 100% at 20% 0%, hsl(var(--brand-start) / 0.35), transparent 60%), radial-gradient(60% 100% at 90% 10%, hsl(var(--brand-end) / 0.28), transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-6 pt-10 pb-24 space-y-20">
          {/* Top nav */}
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-brand-gradient shadow-[0_8px_24px_-10px_hsl(var(--brand-start)/0.7)]">
                <Bolt className="size-4 text-primary-foreground" />
              </span>
              <span className="font-mono text-[13px] tracking-[0.14em] text-foreground">
                NEOSPOWER<span className="text-muted-foreground/70">/UI</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default" dot live>
                v1.0 live
              </Badge>
              <Button size="sm" variant="ghost">
                Docs
              </Button>
              <Button size="sm" variant="secondary">
                GitHub
              </Button>
            </div>
          </nav>

          {/* HERO — BorderGlow */}
          <BorderGlow animated glowColor="248 90 70" borderRadius={22}>
            <div className="grid gap-6 p-10 md:p-14 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <Sparkles className="size-3" />
                  Design system · v1.0
                </span>
                <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-[54px]">
                  Build energy-tech UI that <span className="text-gradient-brand">feels engineered</span>.
                </h1>
                <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                  Dark, calm, data-dense. Twenty-five accessible components, one brand gradient, and
                  the tokens to re-theme the whole system from a single file.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg">
                    <Zap /> Start building
                  </Button>
                  <Button size="lg" variant="ghost">
                    Read system.md
                  </Button>
                </div>
              </div>

              <Card variant="glass" className="border-border/70">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                        Site 042 · Rotterdam
                      </p>
                      <CardTitle>Trading live</CardTitle>
                    </div>
                    <Badge variant="success" dot live>
                      OK
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        Dispatched
                      </span>
                      <span className="font-mono text-sm tabular-nums text-foreground">
                        {progress}%
                      </span>
                    </div>
                    <Progress value={progress} />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    {[
                      ["MWh", "184.2"],
                      ["€/MWh", "97.40"],
                      ["Δ 24h", "+4.8%"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="rounded-lg border border-border/60 bg-white/[0.02] px-3 py-2"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          {k}
                        </p>
                        <p className="font-mono text-[15px] tabular-nums text-foreground">{v}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </BorderGlow>

          {/* BUTTONS */}
          <Section
            eyebrow="01 · Actions"
            title="Buttons"
            description="One gradient CTA per view. Secondary and ghost carry the rest."
          >
            <Card variant="glass">
              <CardContent className="space-y-6 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>Save changes</Button>
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Delete</Button>
                  <Button variant="link">Learn more</Button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra large</Button>
                  <Button size="icon" aria-label="Search">
                    <Search />
                  </Button>
                  <Button loading>Dispatching…</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* FORMS */}
          <Section
            eyebrow="02 · Input"
            title="Forms & selection"
            description="Every control wrapped in a Field for label, hint, and validation."
          >
            <Card variant="glass">
              <CardContent className="grid gap-6 p-6 md:grid-cols-2">
                <div className="space-y-5">
                  <Field
                    label="Dispatch threshold"
                    htmlFor="thr"
                    required
                    hint="Trigger auto-balancing above this price."
                  >
                    <Input
                      id="thr"
                      value={threshold}
                      onChange={(e) => setThreshold(e.target.value)}
                      leadingIcon={<span className="font-mono">€</span>}
                      trailingIcon={<span className="font-mono text-[11px]">/MWh</span>}
                    />
                  </Field>

                  <Field label="Market" htmlFor="mkt">
                    <Select id="mkt" defaultValue="epex">
                      <option value="epex">EPEX SPOT · NL</option>
                      <option value="nordpool">Nord Pool · SE1</option>
                      <option value="omie">OMIE · ES</option>
                    </Select>
                  </Field>

                  <Field
                    label="Ops note"
                    htmlFor="note"
                    error={notes.length > 140 ? "Keep it under 140 characters." : undefined}
                    hint="Optional context for the shift handover."
                  >
                    <Textarea
                      id="note"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Battery bank B down for maintenance…"
                      aria-invalid={notes.length > 140}
                    />
                  </Field>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                      View mode
                    </p>
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

                  <div className="space-y-3">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                      Dispatch strategy
                    </p>
                    <RadioGroup
                      value={dispatch}
                      onValueChange={(v) => setDispatch(v as typeof dispatch)}
                    >
                      {(
                        [
                          ["conservative", "Conservative — smaller trades, tighter bounds"],
                          ["balanced", "Balanced — default risk profile"],
                          ["aggressive", "Aggressive — trade every opportunity"],
                        ] as const
                      ).map(([v, label]) => (
                        <label key={v} className="flex cursor-pointer items-center gap-3 text-sm">
                          <RadioGroupItem value={v} />
                          <span
                            className={
                              dispatch === v ? "text-foreground" : "text-muted-foreground"
                            }
                          >
                            {label}
                          </span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                      Alert channels
                    </p>
                    <div className="space-y-2.5">
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
                            onCheckedChange={(v) =>
                              setChan((prev) => ({ ...prev, [k]: v === true }))
                            }
                          />
                          <span className="text-foreground">{label}</span>
                        </label>
                      ))}
                    </div>
                    <label className="flex cursor-pointer items-center gap-3 text-sm pt-1">
                      <Switch checked={auto} onCheckedChange={setAuto} />
                      <span className="text-foreground">Automatic balancing</span>
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button variant="ghost">Reset</Button>
                <Button>Save configuration</Button>
              </CardFooter>
            </Card>
          </Section>

          {/* STATUS */}
          <Section
            eyebrow="03 · Signal"
            title="Status & display"
            description="Badges, alerts, banners, progress — the vocabulary of a live system."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Compact status signals in monospace.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>DEFAULT</Badge>
                    <Badge variant="solid">SOLID</Badge>
                    <Badge variant="success" dot>
                      HEALTHY
                    </Badge>
                    <Badge variant="warning" dot>
                      DEGRADED
                    </Badge>
                    <Badge variant="destructive" dot live>
                      DOWN
                    </Badge>
                    <Badge variant="info">v1.0.0</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>Notifications</span>
                    <Count>3</Count>
                    <span className="ml-4">Warnings</span>
                    <Count className="!bg-warning !text-warning-foreground">12</Count>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Loading</CardTitle>
                  <CardDescription>Spinners, dots, indeterminate & shimmer.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center gap-6">
                    <Spinner />
                    <Spinner brand />
                    <Dots />
                  </div>
                  <Progress indeterminate />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </CardContent>
              </Card>

              <Alert variant="info">
                <Sparkles />
                <div>
                  <AlertTitle>New dispatch strategy available</AlertTitle>
                  <AlertDescription>
                    ML-assisted balancing is in beta for EPEX SPOT markets.
                  </AlertDescription>
                </div>
              </Alert>
              <Alert variant="success">
                <Sparkles />
                <div>
                  <AlertTitle>Deployment succeeded</AlertTitle>
                  <AlertDescription>Site 042 is trading on version 1.14.2.</AlertDescription>
                </div>
              </Alert>
              <Alert variant="warning">
                <Sparkles />
                <div>
                  <AlertTitle>Curtailment expected</AlertTitle>
                  <AlertDescription>Grid operator requested a 15% reduction 14:00–16:00.</AlertDescription>
                </div>
              </Alert>
              <Alert variant="destructive">
                <Sparkles />
                <div>
                  <AlertTitle>Inverter fault · bank B</AlertTitle>
                  <AlertDescription>Auto-balancing paused. Investigate within 30 minutes.</AlertDescription>
                </div>
              </Alert>
            </div>

            <Banner
              title="Scheduled maintenance · Sunday 03:00 UTC"
              description="Trading engine will fail over to standby for ~4 minutes. No action required."
            >
              <Button size="sm" variant="secondary">
                View details
              </Button>
            </Banner>

            <Toast variant="success" onDismiss={() => {}}>
              Configuration saved to site 042.
            </Toast>
          </Section>

          {/* OVERLAYS */}
          <Section
            eyebrow="04 · Overlay"
            title="Dialogs, sheets, menus"
            description="Radix under the hood — focus-trapped, keyboard-first, glass-surfaced."
          >
            <Card variant="glass">
              <CardContent className="flex flex-wrap gap-3 p-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">Open dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm dispatch</DialogTitle>
                      <DialogDescription>
                        Site 042 will begin exporting 120 MWh to the grid at 14:00 UTC. This can't
                        be undone from the console.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="ghost">Cancel</Button>
                      <Button>Confirm dispatch</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="secondary">Open sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Site 042 · settings</SheetTitle>
                      <SheetDescription>
                        Edit dispatch, alerts and access for this site.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                      <Field label="Nickname">
                        <Input defaultValue="Rotterdam A" />
                      </Field>
                      <Field label="Priority">
                        <Select defaultValue="high">
                          <option value="low">Low</option>
                          <option value="normal">Normal</option>
                          <option value="high">High</option>
                        </Select>
                      </Field>
                    </div>
                  </SheetContent>
                </Sheet>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="secondary">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="mb-1 text-[13px] font-medium text-foreground">Quick note</p>
                    <p className="text-[12.5px] leading-relaxed text-muted-foreground">
                      Popovers use the same glass surface as dialogs and dropdowns.
                    </p>
                  </PopoverContent>
                </Popover>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary">
                      Actions <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Site 042</DropdownMenuLabel>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Export config</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost">Hover for tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Trading engine v1.14.2 · uptime 42d
                  </TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>
          </Section>

          <footer className="flex items-center justify-between border-t border-border/50 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              NEOSPOWER · UI v1.0
            </p>
            <p className="text-[12px] text-muted-foreground/80">
              Built with tokens, not hex codes.
            </p>
          </footer>
        </div>
      </main>
    </TooltipProvider>
  );
}