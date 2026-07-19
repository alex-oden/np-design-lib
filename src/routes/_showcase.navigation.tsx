import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  Command as CommandIcon,
  Compass,
  Github,
  Globe,
  Heart,
  Home,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  Linkedin,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Sparkles,
  Twitter,
  User,
  Zap,
} from "lucide-react";

import { DocPage, Section, Example } from "@/components/showcase-page";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Segmented } from "@/components/ui/segmented";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import neosLogo from "@/assets/neospower-logo.svg";
import neosMark from "@/assets/neos-logo.svg";

export const Route = createFileRoute("/_showcase/navigation")({
  head: () => ({
    meta: [
      { title: "Navigation patterns — NeosPower UI" },
      {
        name: "description",
        content:
          "Headers, footers, sidebars, and secondary navigation composed from NeosPower UI primitives — with mobile and tablet variants.",
      },
      { property: "og:title", content: "Navigation patterns — NeosPower UI" },
      {
        property: "og:description",
        content:
          "A pattern library of headers, footers and responsive nav built from tokens and existing components.",
      },
    ],
  }),
  component: NavigationPage,
});

/* ────────────────────────────────────────────────────────────────
   NavigationPage — pattern library. Every demo is composed from
   existing primitives and design tokens (no ad-hoc colors).
   ──────────────────────────────────────────────────────────────── */

function NavigationPage() {
  return (
    <DocPage
      eyebrow="Layout"
      title="Navigation"
      intro="A catalog of navigation surfaces — top bars, sidebars, drawers, breadcrumbs, tabs, steppers, pagers and footers — built entirely from library primitives and semantic tokens. Every example lists the components it composes so another agent can trace and remix it."
    >
      <Section title="How to read this page" hint="composition first">
        <div className="rounded-[var(--radius)] border border-border/60 bg-card/50 p-5 text-[13.5px] leading-relaxed text-muted-foreground">
          Each pattern is rendered live inside an <span className="font-mono text-foreground">Example</span> frame.
          Mobile & tablet variants are shown inside a <span className="font-mono text-foreground">DeviceFrame</span>{" "}
          mock so the target viewport is visible without resizing your window. All colors resolve through tokens
          (<span className="font-mono text-foreground">bg-card</span>, <span className="font-mono text-foreground">border-border</span>,{" "}
          <span className="font-mono text-foreground">bg-brand-gradient</span>), and every active state reuses the
          pulsing accent-dot idiom from the showcase sidebar.
        </div>
      </Section>

      {/* 1 · HEADERS ───────────────────────────────────────────── */}
      <Section title="1 · Headers — desktop" hint="6 variants" animated index={0}>
        <PatternGroup>
          <Pattern
            title="Marketing header"
            note="Use for public sites. One gradient CTA at the far right; centered mega-menu keeps the wordmark and CTA in balance."
            uses="NavigationMenu · Button · Badge · Separator"
            deviceWidth={1280}
          >
            <HeaderMarketing />
          </Pattern>

          <Pattern
            title="App shell header"
            note="Dashboards. Workspace switcher on the left, ⌘K search center, notifications + avatar right."
            uses="Select · Input · Button · Badge · Avatar · DropdownMenu"
            deviceWidth={1280}
          >
            <HeaderApp />
          </Pattern>

          <Pattern
            title="Docs header"
            note="Documentation sites. Inline search with keyboard hint, version badge, secondary tab row underneath."
            uses="Input · Badge · Tabs · Toggle · Button"
            deviceWidth={1280}
          >
            <HeaderDocs />
          </Pattern>

          <Pattern
            title="E-commerce header (two-row)"
            note="Storefronts. Announcement strip on top, main utility row with combined search, category nav underneath."
            uses="Input · Select · Button · Badge · NavigationMenu"
            deviceWidth={1280}
          >
            <HeaderEcom />
          </Pattern>

          <Pattern
            title="Transparent hero header → solid on scroll"
            note="Landing pages. Same header, two visual states — before and after scroll. Swap via IntersectionObserver in production."
            uses="Tabs (demo only) · Button · NavigationMenu"
            deviceWidth={1280}
          >
            <HeaderTransparentDemo />
          </Pattern>

          <Pattern
            title="Minimal centered"
            note="Auth, checkout, focused flows. Center wordmark, single escape hatch on the right."
            uses="Button"
            deviceWidth={1280}
          >
            <HeaderMinimal />
          </Pattern>
        </PatternGroup>
      </Section>

      {/* 2 · MOBILE + TABLET HEADERS ──────────────────────────── */}
      <Section title="2 · Mobile & tablet headers" hint="375 · 768" animated index={1}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 items-start">
          <DeviceFrame width={375} label="Mobile · 375">
            <MobileAppHeader />
            <MobilePageBody />
          </DeviceFrame>
          <DeviceFrame width={375} label="Mobile · marketing">
            <MobileMarketingHeader />
            <MobileMarketingBody />
          </DeviceFrame>
          <DeviceFrame width={375} label="Mobile · search expand">
            <MobileSearchHeader />
            <MobilePageBody />
          </DeviceFrame>
          <DeviceFrame width={768} label="Tablet · split" className="sm:col-span-2 xl:col-span-2">
            <TabletSplitHeader />
            <MobilePageBody />
          </DeviceFrame>
          <DeviceFrame width={375} label="Mobile · bottom tab bar">
            <MobileAppHeader compact />
            <MobilePageBody tall />
            <BottomTabBar />
          </DeviceFrame>
        </div>
      </Section>

      {/* 3 · SIDEBARS ─────────────────────────────────────────── */}
      <Section title="3 · Sidebars" hint="4 variants" animated index={2}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">
          <Pattern
            title="Icon rail (collapsed)"
            note="Space-constrained shells. Tooltip labels appear on hover; active item uses the brand-gradient-soft pill."
            uses="Tooltip · Badge"
          >
            <SidebarIconRail />
          </Pattern>
          <Pattern
            title="Sections + user footer"
            note="Full sidebar with grouped labels and a docked account switcher at the bottom."
            uses="Avatar · DropdownMenu · Separator · Badge"
          >
            <SidebarWithFooter />
          </Pattern>
          <Pattern
            title="Off-canvas drawer (mobile)"
            note="Live Sheet — tap to open. Same nav model as desktop, slid in from the left."
            uses="Sheet · Button"
          >
            <OffCanvasDemo />
          </Pattern>
          <Pattern
            title="Workspace switcher header"
            note="Sidebars for multi-tenant apps. Header hosts a dropdown that swaps the active workspace."
            uses="DropdownMenu · Avatar · Badge"
          >
            <SidebarWorkspaceHeader />
          </Pattern>
        </div>
      </Section>

      {/* 4 · SECONDARY NAV ────────────────────────────────────── */}
      <Section title="4 · Secondary navigation" animated index={3}>
        <PatternGroup>
          <Pattern
            title="Breadcrumb — deep path"
            note="Truncate the middle with an ellipsis DropdownMenu when the path exceeds 4 levels."
            uses="Breadcrumb · DropdownMenu"
          >
            <BreadcrumbDeep />
          </Pattern>

          <Pattern
            title="Breadcrumb — mobile compact"
            note="Under 640px, collapse to a single back-link so the header keeps room for the page title."
            uses="Button"
          >
            <BreadcrumbMobile />
          </Pattern>

          <Pattern
            title="Tabs — three flavors"
            note="Underline for content switching, pill (Tabs default) for filters, Segmented for compact single-choice."
            uses="Tabs · Segmented"
          >
            <TabsFlavors />
          </Pattern>

          <Pattern
            title="Stepper / wizard"
            note="Horizontal for desktop, vertical for mobile. Completed steps use success token; current uses brand gradient."
            uses="Badge · Separator"
          >
            <StepperDemo />
          </Pattern>

          <Pattern
            title="In-page anchor nav"
            note="Sticky right-rail for long articles. Active section reuses the sidebar pulsing dot idiom."
            uses="—"
          >
            <AnchorNav />
          </Pattern>

          <Pattern
            title="Pagination"
            note="Numeric pager on desktop. On mobile, degrade to prev / next + a page counter."
            uses="Pagination · Button"
          >
            <PaginationDemo />
          </Pattern>
        </PatternGroup>
      </Section>

      {/* 5 · FOOTERS ──────────────────────────────────────────── */}
      <Section title="5 · Footers" hint="4 variants" animated index={4}>
        <PatternGroup>
          <Pattern
            title="Marketing mega-footer"
            note="Four link columns, newsletter capture, social row, region select in the legal strip. Collapses to a single stacked column on mobile."
            uses="Input · Button · Select · Separator"
          >
            <FooterMega />
          </Pattern>

          <Pattern
            title="App utility bar"
            note="Thin bar for dashboards. Status dot on the left, meta links on the right."
            uses="Badge"
          >
            <FooterApp />
          </Pattern>

          <Pattern
            title="Docs footer"
            note="Feedback + prev/next article links. Segmented captures a Yes/No signal without opening a modal."
            uses="Segmented · Button · Separator"
          >
            <FooterDocs />
          </Pattern>

          <Pattern
            title="Minimal centered"
            note="Auth pages, single-purpose flows. Wordmark plus one line of legal links."
            uses="—"
          >
            <FooterMinimal />
          </Pattern>
        </PatternGroup>

        <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 items-start">
          <DeviceFrame width={375} label="Mobile · mega-footer collapsed">
            <FooterMegaMobile />
          </DeviceFrame>
          <DeviceFrame width={768} label="Tablet · mega-footer">
            <FooterMega compact />
          </DeviceFrame>
        </div>
      </Section>
    </DocPage>
  );
}

/* ────────────────────────────────────────────────────────────────
   Local layout helpers
   ──────────────────────────────────────────────────────────────── */

function PatternGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-8">{children}</div>;
}

function Pattern({
  title,
  note,
  uses,
  children,
  deviceWidth,
}: {
  title: string;
  note: string;
  uses: string;
  children: React.ReactNode;
  deviceWidth?: number;
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-[13.5px] font-medium text-foreground">{title}</h3>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/70">
          Composed from: {uses}
        </p>
      </div>
      {deviceWidth ? (
        <DeviceFrame width={deviceWidth} label={`Design canvas · ${deviceWidth}px`}>
          {children}
        </DeviceFrame>
      ) : (
        <Example className="!block !p-0 min-w-0">{children}</Example>
      )}
      <p className="text-[12.5px] leading-relaxed text-muted-foreground">{note}</p>
    </div>
  );
}

function DeviceFrame({
  width,
  label,
  children,
  className,
}: {
  width: number;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);
  const [innerH, setInnerH] = React.useState(0);

  React.useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner || typeof ResizeObserver === "undefined") return;
    const update = () => {
      const w = outer.clientWidth;
      const s = Math.min(1, w / width);
      setScale(s);
      setInnerH(inner.offsetHeight);
    };
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    update();
    return () => ro.disconnect();
  }, [width]);

  const pct = Math.round(scale * 100);
  return (
    <div className={cn("min-w-0 space-y-2", className)}>
      <div className="flex items-center justify-between gap-2 px-1">
        <span className="truncate font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/70">
          {label}
        </span>
        <span className="shrink-0 font-mono text-[10.5px] text-muted-foreground/50">
          {width}px{scale < 1 ? ` · ${pct}%` : ""}
        </span>
      </div>
      <div
        ref={outerRef}
        className="relative w-full"
        style={{ height: innerH ? innerH * scale : undefined }}
      >
        <div
          ref={innerRef}
          className="absolute left-0 top-0 origin-top-left overflow-hidden rounded-[22px] border border-border/60 bg-background shadow-[0_20px_60px_-30px_hsl(230_60%_4%/0.9)]"
          style={{ width, transform: `scale(${scale})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Wordmark({
  size = "md",
  compact = false,
  hero = false,
  className,
}: {
  size?: "sm" | "md" | "hero";
  compact?: boolean;
  hero?: boolean;
  className?: string;
}) {
  // compact is a legacy alias for size="sm"
  const s = compact ? "sm" : size;
  const h = s === "hero" ? "h-8" : s === "sm" ? "h-6" : "h-7";
  const tag = s === "hero" ? "text-[12px]" : "text-[10.5px]";
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        hero && "drop-shadow-[0_2px_10px_hsl(230_60%_4%/0.55)]",
        className,
      )}
    >
      <img src={neosLogo} alt="NeosPower" className={cn("w-auto", h)} />
      <span
        className={cn(
          "font-mono tracking-[0.18em]",
          tag,
          hero ? "text-foreground/80" : "text-muted-foreground/70",
        )}
      >
        /UI
      </span>
    </div>
  );
}

function SubEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/70">
      {children}
    </p>
  );
}

/* Absolutely-positioned drawer that stays inside its DeviceFrame parent.
   Use this instead of Sheet inside phone mock-ups so the overlay does not
   escape to document.body. Parent must be `relative` (DeviceFrame is). */
function MobileDrawer({
  open,
  onClose,
  side = "left",
  children,
}: {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "pointer-events-none absolute inset-0 z-20 transition-opacity duration-200",
        open ? "opacity-100" : "opacity-0",
      )}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-background/70 backdrop-blur-sm",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 flex w-[82%] max-w-[300px] flex-col border-border/60 bg-card shadow-xl transition-transform duration-250",
          side === "left" ? "left-0 border-r" : "right-0 border-l",
          open
            ? "translate-x-0 pointer-events-auto"
            : side === "left"
              ? "-translate-x-full"
              : "translate-x-full",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center gap-0.5 rounded border border-border/70 bg-secondary px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground">
      {children}
    </kbd>
  );
}

function NavDot({ active }: { active?: boolean }) {
  return (
    <span
      className={cn(
        "size-1.5 shrink-0 rounded-full transition-opacity",
        active ? "bg-accent opacity-100 animate-np-pulse" : "opacity-0",
      )}
    />
  );
}

/* ────────────────────────────────────────────────────────────────
   1 · Desktop headers
   ──────────────────────────────────────────────────────────────── */

function HeaderMarketing() {
  return (
    <header className="flex h-16 items-center justify-between gap-6 border-b border-border/60 bg-background/70 px-6 backdrop-blur-md">
      <Wordmark />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[420px] grid-cols-2 gap-2 p-4">
                {[
                  { title: "Grid ops", desc: "Real-time site monitoring" },
                  { title: "Forecasting", desc: "ML load prediction" },
                  { title: "Dispatch", desc: "Automated response" },
                  { title: "Reporting", desc: "Regulatory-ready exports" },
                ].map((i) => (
                  <li key={i.title}>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block space-y-1 rounded-md p-3 hover:bg-secondary/60"
                      >
                        <div className="text-[13px] font-medium text-foreground">{i.title}</div>
                        <div className="text-[12px] text-muted-foreground">{i.desc}</div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
              Solutions
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
              Docs
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
        <Button size="sm">
          Get started <ArrowRight />
        </Button>
      </div>
    </header>
  );
}

function HeaderApp() {
  return (
    <header className="flex h-14 items-center gap-3 border-b border-border/60 bg-background/70 px-4 backdrop-blur-md">
      <Wordmark size="sm" />
      <Separator orientation="vertical" className="h-6" />
      <Select defaultValue="rotterdam" className="h-8 w-[180px] shrink-0 text-[12.5px]">
        <option value="rotterdam">Site 042 · Rotterdam</option>
        <option value="hamburg">Site 118 · Hamburg</option>
        <option value="oslo">Site 204 · Oslo</option>
      </Select>
      <div className="mx-auto flex w-full max-w-sm items-center">
        <button
          type="button"
          className="group flex w-full items-center gap-2 rounded-md border border-border/60 bg-secondary/50 px-3 py-1.5 text-[12.5px] text-muted-foreground transition-colors hover:bg-secondary"
        >
          <Search className="size-3.5" />
          <span className="flex-1 text-left">Search sites, assets, alerts…</span>
          <Kbd>⌘K</Kbd>
        </button>
      </div>
      <div className="ml-auto flex shrink-0 items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell />
              <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-accent" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>3 new alerts</TooltipContent>
        </Tooltip>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-1 flex items-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-secondary/60 py-1 pl-1 pr-2 text-[12px] hover:bg-secondary">
              <Avatar className="size-6">
                <AvatarFallback className="bg-brand-gradient text-[10px] text-white">
                  AO
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-foreground md:inline">A. Oden</span>
              <ChevronDown className="size-3 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>alex@neospower.com</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function HeaderDocs() {
  const [tab, setTab] = React.useState("guides");
  return (
    <header className="border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="flex h-14 items-center gap-4 px-6">
        <Wordmark />
        <Badge variant="default" className="border border-border/60 bg-transparent font-mono text-[10px] text-muted-foreground">
          v1.3.2
        </Badge>
        <div className="ml-auto flex w-full max-w-sm items-center gap-2">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search docs…" className="h-8 pl-8 pr-10 text-[13px]" />
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <Kbd>/</Kbd>
            </div>
          </div>
          <Toggle aria-label="Toggle theme" size="sm">
            <Sparkles className="size-3.5" />
          </Toggle>
          <Button variant="outline" size="sm">
            <Github /> GitHub
          </Button>
        </div>
      </div>
      <div className="px-6">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="bg-transparent p-0">
            {[
              { v: "guides", l: "Guides" },
              { v: "components", l: "Components" },
              { v: "tokens", l: "Tokens" },
              { v: "api", l: "API" },
            ].map((t) => (
              <TabsTrigger
                key={t.v}
                value={t.v}
                className="rounded-none border-b-2 border-transparent bg-transparent px-3 pb-3 pt-0 text-[13px] data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                {t.l}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}

function HeaderEcom() {
  return (
    <header className="border-b border-border/60 bg-background">
      <div className="flex items-center justify-center gap-2 bg-brand-gradient-soft py-1.5 text-[12px] text-foreground">
        <Zap className="size-3.5 text-accent" />
        Free EU shipping over €150 · use code <span className="font-mono">NEOS</span>
      </div>
      <div className="flex h-16 items-center gap-4 px-6">
        <Wordmark />
        <div className="flex flex-1 items-center rounded-md border border-border/60 bg-secondary/40 focus-within:border-ring">
          <Select defaultValue="all" className="h-10 w-[150px] rounded-r-none border-0 bg-transparent">
            <option value="all">All categories</option>
            <option value="inverters">Inverters</option>
            <option value="batteries">Batteries</option>
            <option value="meters">Smart meters</option>
          </Select>
          <Separator orientation="vertical" className="h-6" />
          <Input
            placeholder="Search 12 400 products…"
            className="h-10 flex-1 border-0 bg-transparent focus-visible:ring-0"
          />
          <Button variant="ghost" size="icon" className="mr-1" aria-label="Search">
            <Search />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Account">
            <User />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Wishlist" className="relative">
            <Heart />
            <Badge className="absolute -right-1 -top-1 h-4 min-w-4 px-1 text-[9px]">4</Badge>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
            <ShoppingCart />
            <Badge className="absolute -right-1 -top-1 h-4 min-w-4 px-1 text-[9px]">2</Badge>
          </Button>
        </div>
      </div>
      <nav className="flex items-center gap-6 border-t border-border/60 px-6 py-2 text-[12.5px]">
        {["New", "Inverters", "Batteries", "EV chargers", "Meters", "Bundles", "Sale"].map(
          (l, i) => (
            <a
              key={l}
              href="#"
              className={cn(
                "text-muted-foreground hover:text-foreground",
                i === 0 && "text-foreground",
              )}
            >
              {l}
              {i === 6 && (
                <Badge variant="destructive" className="ml-1.5 h-4 px-1 text-[9px]">
                  -20%
                </Badge>
              )}
            </a>
          ),
        )}
      </nav>
    </header>
  );
}

function HeaderTransparentDemo() {
  const [state, setState] = React.useState("transparent");
  return (
    <div className="space-y-3 p-4">
      <Segmented
        value={state}
        onValueChange={setState}
        options={[
          { value: "transparent", label: "At top" },
          { value: "solid", label: "After scroll" },
        ]}
      />
      <div
        className={cn(
          "relative h-40 overflow-hidden rounded-[var(--radius)]",
          state === "transparent" ? "bg-brand-gradient" : "bg-background",
        )}
      >
        {state === "transparent" && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 90% at 12% 0%, hsl(var(--brand-start) / 0.5), transparent 60%), radial-gradient(60% 90% at 92% 8%, hsl(var(--brand-end) / 0.5), transparent 60%)",
            }}
          />
        )}
        <header
          className={cn(
            "relative flex h-14 items-center justify-between gap-6 px-6 transition-colors",
            state === "solid" && "border-b border-border/60 bg-background/80 backdrop-blur-md",
          )}
        >
          <Wordmark size={state === "transparent" ? "hero" : "md"} hero={state === "transparent"} />
          <nav className="hidden gap-5 text-[13px] md:flex">
            <a href="#" className="text-foreground/90 hover:text-foreground">Product</a>
            <a href="#" className="text-foreground/90 hover:text-foreground">Pricing</a>
            <a href="#" className="text-foreground/90 hover:text-foreground">Docs</a>
          </nav>
          <Button size="sm" variant={state === "transparent" ? "secondary" : "default"}>
            Get started
          </Button>
        </header>
      </div>
    </div>
  );
}

function HeaderMinimal() {
  return (
    <header className="grid h-14 grid-cols-[1fr_auto_1fr] items-center border-b border-border/60 px-6">
      <span />
      <div className="mx-auto">
        <Wordmark />
      </div>
      <div className="flex justify-end">
        <Button variant="ghost" size="sm">
          Exit
        </Button>
      </div>
    </header>
  );
}

/* ────────────────────────────────────────────────────────────────
   2 · Mobile & tablet
   ──────────────────────────────────────────────────────────────── */

function MobileAppHeader({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className="flex h-12 items-center gap-2 border-b border-border/60 bg-background/80 px-3 backdrop-blur">
        <Button variant="ghost" size="icon" aria-label="Menu" onClick={() => setOpen(true)}>
          <Menu />
        </Button>
        <div className="mx-auto">
          <Wordmark size="sm" />
        </div>
        {!compact ? (
          <Avatar className="size-7">
            <AvatarFallback className="bg-brand-gradient text-[10px] text-white">AO</AvatarFallback>
          </Avatar>
        ) : (
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell />
          </Button>
        )}
      </header>
      <MobileDrawer open={open} onClose={() => setOpen(false)} side="left">
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <Wordmark size="sm" />
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
            <ChevronRight className="rotate-180" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto pt-2">
          <MiniNavList />
        </div>
      </MobileDrawer>
    </>
  );
}

function MobileMarketingHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className="flex h-12 items-center justify-between border-b border-border/60 px-4">
        <Wordmark size="sm" />
        <Button variant="ghost" size="icon" aria-label="Menu" onClick={() => setOpen(true)}>
          <Menu />
        </Button>
      </header>
      <MobileDrawer open={open} onClose={() => setOpen(false)} side="right">
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <Wordmark size="sm" />
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
            <ChevronRight />
          </Button>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {["Product", "Solutions", "Pricing", "Docs", "Blog"].map((l) => (
            <a
              key={l}
              href="#"
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-[14px] text-foreground/90 hover:bg-secondary/60"
            >
              {l}
              <ChevronRight className="size-4 text-muted-foreground/60" />
            </a>
          ))}
        </nav>
        <div className="border-t border-border/60 p-4">
          <Button className="w-full">
            Get started <ArrowRight />
          </Button>
        </div>
      </MobileDrawer>
    </>
  );
}

function MobileSearchHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="flex h-12 items-center gap-2 border-b border-border/60 px-3">
      {!open ? (
        <>
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Menu />
          </Button>
          <div className="mx-auto">
            <Wordmark size="sm" />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Search">
            <Search />
          </Button>
        </>
      ) : (
        <>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input autoFocus placeholder="Search…" className="h-8 pl-8 text-[13px]" />
          </div>
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </>
      )}
    </header>
  );
}

function TabletSplitHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-border/60 px-4">
      <Wordmark />
      <nav className="flex items-center gap-1 text-[12.5px]">
        {["Dashboard", "Sites", "Alerts", "Reports"].map((l, i) => (
          <a
            key={l}
            href="#"
            className={cn(
              "rounded-md px-2.5 py-1.5",
              i === 1
                ? "bg-brand-gradient-soft text-foreground"
                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
            )}
          >
            {l}
          </a>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-[12.5px]">
              More <ChevronDown className="size-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Devices</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div className="ml-auto flex items-center gap-1">
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
          <Bell />
          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-accent" />
        </Button>
        <Avatar className="size-7">
          <AvatarFallback className="bg-brand-gradient text-[10px] text-white">AO</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

function MobilePageBody({ tall = false }: { tall?: boolean }) {
  return (
    <div className={cn("space-y-2 p-4", tall ? "min-h-[220px]" : "min-h-[140px]")}>
      <div className="h-3 w-2/3 rounded bg-secondary/60" />
      <div className="h-3 w-full rounded bg-secondary/40" />
      <div className="h-3 w-4/5 rounded bg-secondary/40" />
      <div className="mt-4 h-16 rounded-md border border-border/60 bg-card/40" />
      <div className="h-16 rounded-md border border-border/60 bg-card/40" />
    </div>
  );
}

function MobileMarketingBody() {
  return (
    <div className="space-y-3 p-4 pb-6">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        <Sparkles className="size-2.5" /> New
      </span>
      <h4 className="text-[18px] font-semibold leading-tight tracking-[-0.02em]">
        Grid ops that <span className="text-gradient-brand">feel engineered</span>
      </h4>
      <p className="text-[12.5px] text-muted-foreground">
        Real-time monitoring, dispatch, and reporting for European operators.
      </p>
      <Button size="sm" className="w-full">
        Get started <ArrowRight />
      </Button>
    </div>
  );
}

function BottomTabBar() {
  const [active, setActive] = React.useState("home");
  const items = [
    { v: "home", i: Home, l: "Home" },
    { v: "sites", i: Compass, l: "Sites" },
    { v: "alerts", i: Bell, l: "Alerts" },
    { v: "inbox", i: Inbox, l: "Inbox" },
  ];
  return (
    <div className="relative border-t border-border/60 bg-background/90 backdrop-blur">
      <button
        aria-label="New"
        className="absolute -top-5 left-1/2 grid size-11 -translate-x-1/2 place-items-center rounded-full bg-brand-gradient text-white shadow-[0_10px_24px_-8px_hsl(var(--brand-end)/0.5)]"
      >
        <Plus className="size-5" />
      </button>
      <nav className="grid grid-cols-4 pb-2 pt-1.5">
        {items.map((it) => {
          const on = active === it.v;
          return (
            <button
              key={it.v}
              onClick={() => setActive(it.v)}
              className="flex flex-col items-center gap-0.5 py-1"
            >
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] transition-colors",
                  on
                    ? "bg-brand-gradient-soft text-foreground"
                    : "text-muted-foreground",
                )}
              >
                <it.i className="size-3.5" />
                <NavDot active={on} />
              </span>
              <span
                className={cn(
                  "text-[10px]",
                  on ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {it.l}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

function MiniNavList() {
  const items = [
    { i: LayoutDashboard, l: "Dashboard", active: true },
    { i: Compass, l: "Sites" },
    { i: Bell, l: "Alerts", badge: "3" },
    { i: Inbox, l: "Inbox" },
    { i: Settings, l: "Settings" },
  ];
  return (
    <nav className="space-y-0.5 px-3 pb-4">
      {items.map((it) => (
        <a
          key={it.l}
          href="#"
          className={cn(
            "flex items-center gap-2.5 rounded-md px-3 py-2 text-[13.5px]",
            it.active
              ? "bg-brand-gradient-soft text-foreground"
              : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
          )}
        >
          <NavDot active={it.active} />
          <it.i className="size-4" />
          <span className="flex-1">{it.l}</span>
          {it.badge && (
            <Badge variant="default" className="h-5 px-1.5 text-[10px]">
              {it.badge}
            </Badge>
          )}
        </a>
      ))}
    </nav>
  );
}

/* ────────────────────────────────────────────────────────────────
   3 · Sidebars
   ──────────────────────────────────────────────────────────────── */

function SidebarIconRail() {
  const items = [
    { i: LayoutDashboard, l: "Dashboard", active: true },
    { i: Compass, l: "Sites" },
    { i: Bell, l: "Alerts" },
    { i: Inbox, l: "Inbox" },
    { i: Settings, l: "Settings" },
  ];
  return (
    <div className="flex h-64">
      <aside className="flex w-14 shrink-0 flex-col items-center gap-1 border-r border-border/60 bg-card/40 py-3">
        <div className="mb-1 grid size-8 place-items-center rounded-md bg-brand-gradient-soft">
          <img src={neosMark} alt="NeosPower" className="size-4" />
        </div>
        {items.map((it) => (
          <Tooltip key={it.l}>
            <TooltipTrigger asChild>
              <button
                className={cn(
                  "grid size-9 place-items-center rounded-md",
                  it.active
                    ? "bg-brand-gradient-soft text-foreground"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                )}
              >
                <it.i className="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">{it.l}</TooltipContent>
          </Tooltip>
        ))}
      </aside>
      <div className="flex-1 p-4 text-[12px] text-muted-foreground">Page content →</div>
    </div>
  );
}

function SidebarWithFooter() {
  return (
    <div className="flex h-72">
      <aside className="flex w-56 shrink-0 flex-col border-r border-border/60 bg-card/40">
        <div className="px-4 py-3">
          <Wordmark size="sm" />
        </div>
        <Separator />
        <MiniNavList />
        <div className="mt-auto flex items-center gap-2 border-t border-border/60 p-3">
          <Avatar className="size-7">
            <AvatarFallback className="bg-brand-gradient text-[10px] text-white">
              AO
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] text-foreground">Alex Oden</p>
            <p className="truncate text-[11px] text-muted-foreground">Pro plan</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-7">
                <MoreHorizontal className="size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
      <div className="flex-1 p-4 text-[12px] text-muted-foreground">Page content →</div>
    </div>
  );
}

function OffCanvasDemo() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="relative flex h-72 flex-col overflow-hidden">
      <div className="flex h-12 items-center gap-2 border-b border-border/60 bg-background/80 px-3 backdrop-blur">
        <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <Menu />
        </Button>
        <div className="mx-auto">
          <Wordmark size="sm" />
        </div>
      </div>
      <div className="flex-1 p-4 text-[12px] text-muted-foreground">
        Toggle the hamburger to see the drawer slide in from the left, over the page content.
      </div>
      <MobileDrawer open={open} onClose={() => setOpen(false)} side="left">
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <Wordmark size="sm" />
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
            <ChevronRight className="rotate-180" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto pt-2">
          <MiniNavList />
        </div>
      </MobileDrawer>
    </div>
  );
}

function SidebarWorkspaceHeader() {
  return (
    <div className="flex h-72">
      <aside className="flex w-56 shrink-0 flex-col border-r border-border/60 bg-card/40">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 border-b border-border/60 px-3 py-3 text-left hover:bg-secondary/40">
              <div className="grid size-8 shrink-0 place-items-center rounded-md bg-brand-gradient-soft">
                <img src={neosMark} alt="NeosPower" className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12.5px] text-foreground">NeosPower</p>
                <p className="truncate text-[10.5px] text-muted-foreground">Enterprise</p>
              </div>
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Check className="text-accent" /> NeosPower
            </DropdownMenuItem>
            <DropdownMenuItem>Grid Labs</DropdownMenuItem>
            <DropdownMenuItem>Sandbox</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Plus /> New workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <MiniNavList />
      </aside>
      <div className="flex-1 p-4 text-[12px] text-muted-foreground">Page content →</div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   4 · Secondary nav
   ──────────────────────────────────────────────────────────────── */

function BreadcrumbDeep() {
  return (
    <div className="p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="inline-flex items-center gap-1">
              <Home className="size-3.5" /> Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Regions</DropdownMenuItem>
                <DropdownMenuItem>Netherlands</DropdownMenuItem>
                <DropdownMenuItem>South Holland</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Rotterdam</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Site 042</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function BreadcrumbMobile() {
  return (
    <div className="flex items-center gap-2 p-4">
      <Button variant="ghost" size="sm" className="h-8 px-2">
        <ArrowLeft /> Sites
      </Button>
      <span className="truncate text-[13px] text-foreground">Site 042 · Rotterdam</span>
    </div>
  );
}

function TabsFlavors() {
  const [pill, setPill] = React.useState("overview");
  const [seg, setSeg] = React.useState("day");
  return (
    <div className="space-y-6 p-5">
      <div>
        <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/70">
          Underline
        </p>
        <div className="flex gap-4 border-b border-border/60">
          {["Overview", "Assets", "History", "Alerts"].map((l, i) => (
            <a
              key={l}
              href="#"
              className={cn(
                "-mb-px border-b-2 px-1 pb-2 text-[13px] transition-colors",
                i === 0
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/70">
          Pill (Tabs)
        </p>
        <Tabs value={pill} onValueChange={setPill}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value={pill} className="mt-3 text-[12.5px] text-muted-foreground">
            Content for “{pill}”.
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/70">
          Segmented
        </p>
        <Segmented
          value={seg}
          onValueChange={setSeg}
          options={[
            { value: "day", label: "Day" },
            { value: "week", label: "Week" },
            { value: "month", label: "Month" },
            { value: "year", label: "Year" },
          ]}
        />
      </div>
    </div>
  );
}

function StepperDemo() {
  const steps = ["Account", "Workspace", "Team", "Done"];
  const current = 1;
  return (
    <div className="space-y-6 p-5">
      <div>
        <SubEyebrow>Horizontal · desktop</SubEyebrow>
        <ol className="flex items-center gap-3">
        {steps.map((s, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <React.Fragment key={s}>
              <li className="flex items-center gap-2">
                <span
                  className={cn(
                    "grid size-6 place-items-center rounded-full border text-[11px] font-medium",
                    done && "border-transparent bg-success text-success-foreground",
                    active && "border-transparent bg-brand-gradient text-white",
                    !done && !active && "border-border/60 text-muted-foreground",
                  )}
                >
                  {done ? <Check className="size-3" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "text-[12.5px]",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s}
                </span>
              </li>
              {i < steps.length - 1 && (
                <Separator className="flex-1" orientation="horizontal" />
              )}
            </React.Fragment>
          );
        })}
        </ol>
      </div>
      <Separator />
      <div>
        <SubEyebrow>Vertical · mobile</SubEyebrow>
        <ol className="max-w-[220px] space-y-2">
        {steps.map((s, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li key={s} className="flex items-center gap-2.5">
              <span
                className={cn(
                  "grid size-6 place-items-center rounded-full border text-[11px]",
                  done && "border-transparent bg-success text-success-foreground",
                  active && "border-transparent bg-brand-gradient text-white",
                  !done && !active && "border-border/60 text-muted-foreground",
                )}
              >
                {done ? <Check className="size-3" /> : i + 1}
              </span>
              <span className={cn("text-[12.5px]", active ? "text-foreground" : "text-muted-foreground")}>
                {s}
              </span>
            </li>
          );
        })}
        </ol>
      </div>
    </div>
  );
}

function AnchorNav() {
  const items = ["Overview", "Installation", "Usage", "API reference", "Changelog"];
  const [active, setActive] = React.useState(1);
  return (
    <div className="grid grid-cols-[1fr_180px] gap-6 p-5">
      <div className="space-y-2 text-[12.5px] text-muted-foreground">
        <div className="h-3 w-2/3 rounded bg-secondary/50" />
        <div className="h-3 rounded bg-secondary/40" />
        <div className="h-3 w-5/6 rounded bg-secondary/40" />
        <div className="h-24 rounded-md border border-border/60 bg-card/30" />
        <div className="h-3 w-3/4 rounded bg-secondary/40" />
      </div>
      <aside className="space-y-0.5 border-l border-border/60 pl-3 text-[12px]">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
          On this page
        </p>
        {items.map((l, i) => (
          <button
            key={l}
            onClick={() => setActive(i)}
            className={cn(
              "flex w-full items-center gap-2 rounded-md px-2 py-1 text-left transition-colors",
              i === active
                ? "bg-brand-gradient-soft text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <NavDot active={i === active} />
            {l}
          </button>
        ))}
      </aside>
    </div>
  );
}

function PaginationDemo() {
  return (
    <div className="space-y-4 p-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">12</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="flex items-center justify-between border-t border-border/60 pt-4">
        <Button variant="outline" size="sm">
          <ArrowLeft /> Prev
        </Button>
        <span className="font-mono text-[11px] text-muted-foreground">Page 3 / 12</span>
        <Button variant="outline" size="sm">
          Next <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   5 · Footers
   ──────────────────────────────────────────────────────────────── */

const FOOTER_COLS: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Grid ops", "Forecasting", "Dispatch", "Changelog"] },
  { title: "Solutions", links: ["Operators", "Utilities", "Aggregators", "Municipal"] },
  { title: "Resources", links: ["Docs", "API", "Guides", "Status"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
];

function FooterMega({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="border-t border-border/60 bg-card/30 px-6 py-10">
      {compact ? (
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="space-y-3">
              <Wordmark />
              <p className="text-[12.5px] leading-relaxed text-muted-foreground">
                Engineered dark-first UI for European energy operators.
              </p>
            </div>
            <form className="space-y-2">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/70">
                Newsletter
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input placeholder="you@company.com" className="h-9 flex-1 text-[12.5px]" />
                <Button size="sm">Subscribe</Button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {FOOTER_COLS.map((c) => (
              <FooterColumn key={c.title} title={c.title} links={c.links} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <Wordmark />
            <p className="max-w-xs text-[12.5px] leading-relaxed text-muted-foreground">
              Engineered dark-first UI for European energy operators. Ship data-dense interfaces
              without designing every widget from scratch.
            </p>
            <form className="max-w-xs space-y-2">
              <Input placeholder="you@company.com" className="h-9 w-full text-[12.5px]" />
              <Button size="sm" className="w-full">
                Subscribe to changelog <ArrowRight />
              </Button>
            </form>
          </div>
          {FOOTER_COLS.map((c) => (
            <FooterColumn key={c.title} title={c.title} links={c.links} />
          ))}
        </div>
      )}
      <Separator className="my-8" />
      <div className="flex flex-col items-start justify-between gap-4 text-[11.5px] text-muted-foreground md:flex-row md:items-center">
        <div>© 2026 NeosPower BV · Rotterdam, NL</div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="size-4" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-foreground">
            <Github className="size-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="size-4" />
          </a>
          <Separator orientation="vertical" className="h-4" />
          <Select defaultValue="en-eu" className="h-7 w-[140px] text-[11.5px]">
            <option value="en-eu">English · EU</option>
            <option value="nl">Nederlands</option>
            <option value="de">Deutsch</option>
          </Select>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground/70">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterMegaMobile() {
  return (
    <footer className="space-y-4 border-t border-border/60 bg-card/30 p-4">
      <Wordmark />
      <p className="text-[12px] text-muted-foreground">
        Engineered dark-first UI for European energy operators.
      </p>
      <form className="space-y-2">
        <Input placeholder="you@company.com" className="h-9 w-full text-[12px]" />
        <Button size="sm" className="w-full">Subscribe</Button>
      </form>
      {FOOTER_COLS.map((c) => (
        <details
          key={c.title}
          className="group rounded-md border border-border/60 bg-secondary/30 px-3 py-2"
        >
          <summary className="flex cursor-pointer items-center justify-between text-[12.5px] text-foreground marker:content-['']">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/80">
              {c.title}
            </span>
            <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
          </summary>
          <ul className="mt-2 space-y-1.5 pt-1">
            {c.links.map((l) => (
              <li key={l}>
                <a href="#" className="text-[12.5px] text-muted-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
      <Separator />
      <div className="space-y-2 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-3">
          <Twitter className="size-3.5" />
          <Github className="size-3.5" />
          <Linkedin className="size-3.5" />
        </div>
        <div>© 2026 NeosPower</div>
      </div>
    </footer>
  );
}

function FooterApp() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 bg-card/40 px-4 py-2 text-[11.5px] text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-np-pulse rounded-full bg-success/50" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
        All systems normal
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="default" className="h-5 font-mono text-[10px]">
          v1.3.2
        </Badge>
        <a href="#" className="hover:text-foreground">Docs</a>
        <a href="#" className="hover:text-foreground">Support</a>
        <a href="#" className="hover:text-foreground">Changelog</a>
      </div>
    </footer>
  );
}

function FooterDocs() {
  const [helpful, setHelpful] = React.useState<string>("");
  return (
    <footer className="space-y-5 border-t border-border/60 bg-card/30 px-6 py-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-foreground">Was this page helpful?</span>
          <Segmented
            value={helpful}
            onValueChange={setHelpful}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
          />
        </div>
        <Button variant="ghost" size="sm">
          <Github /> Edit on GitHub
        </Button>
      </div>
      <Separator />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <a
          href="#"
          className="group flex items-center justify-between rounded-[var(--radius)] border border-border/60 bg-card/40 px-4 py-3 hover:border-brand-border/60"
        >
          <div>
            <p className="text-[11px] text-muted-foreground">Previous</p>
            <p className="text-[13.5px] text-foreground">Getting started</p>
          </div>
          <ArrowLeft className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
        </a>
        <a
          href="#"
          className="group flex items-center justify-between rounded-[var(--radius)] border border-border/60 bg-card/40 px-4 py-3 hover:border-brand-border/60"
        >
          <div>
            <p className="text-[11px] text-muted-foreground">Next</p>
            <p className="text-[13.5px] text-foreground">Theming with tokens</p>
          </div>
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
      <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
        <LifeBuoy className="size-3.5" /> Last updated 17 Jul 2026
      </p>
    </footer>
  );
}

function FooterMinimal() {
  return (
    <footer className="flex flex-col items-center gap-2 border-t border-border/60 py-6 text-[11.5px] text-muted-foreground">
      <Wordmark compact />
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-foreground">Terms</a>
        <a href="#" className="hover:text-foreground">Privacy</a>
        <a href="#" className="hover:text-foreground">Security</a>
      </div>
      <p>© 2026 NeosPower BV</p>
    </footer>
  );
}