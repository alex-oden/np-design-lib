import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import neosLogo from "@/assets/neospower-logo.svg";

type NavItem = { to: string; label: string };
type NavGroup = { label?: string; items: NavItem[] };

const GROUPS: NavGroup[] = [
  {
    label: undefined,
    items: [
      { to: "/", label: "Overview" },
      { to: "/colors", label: "Colors" },
      { to: "/typography", label: "Typography" },
      { to: "/spacing", label: "Spacing & shadows" },
    ],
  },
  {
    label: "Components",
    items: [
      { to: "/buttons", label: "Buttons" },
      { to: "/button-states", label: "Button states" },
      { to: "/inputs", label: "Inputs & fields" },
      { to: "/selection", label: "Selection controls" },
      { to: "/cards", label: "Cards" },
      { to: "/badges", label: "Badges & status" },
    ],
  },
  {
    label: "Feedback & overlays",
    items: [
      { to: "/alerts", label: "Alerts & banners" },
      { to: "/overlays", label: "Overlays" },
      { to: "/loading", label: "Loading & progress" },
    ],
  },
  {
    label: "Layout",
    items: [{ to: "/navigation", label: "Navigation" }],
  },
  {
    label: "Expression",
    items: [
      { to: "/data-viz", label: "Data viz" },
      { to: "/motion", label: "Motion" },
      { to: "/iconography", label: "Iconography" },
      { to: "/brand", label: "Brand" },
    ],
  },
];

export function ShowcaseSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="flex h-full flex-col gap-6 px-5 py-6" aria-label="Design system sections">
      <Link to="/" className="flex items-center gap-2" onClick={onNavigate} aria-label="NeosPower UI — home">
        <img src={neosLogo} alt="NeosPower" className="h-6 w-auto" />
        <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70">/UI</span>
      </Link>

      <div className="flex flex-col gap-6 overflow-y-auto pr-1">
        {GROUPS.map((group, i) => (
          <div key={i} className="flex flex-col gap-1">
            {group.label && (
              <p className="mb-1 px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                {group.label}
              </p>
            )}
            {group.items.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onNavigate}
                  className={cn(
                    "group relative flex items-center gap-2.5 rounded-lg border border-transparent px-3 py-2 text-[13.5px] transition-colors",
                    active
                      ? "border-border/60 bg-brand-gradient-soft text-foreground"
                      : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "size-1.5 shrink-0 rounded-full transition-opacity",
                      active ? "bg-accent opacity-100 animate-np-pulse" : "opacity-0",
                    )}
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}