import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatItem {
  label: string;
  value: React.ReactNode;
  unit?: string;
}

/**
 * StatCard — a horizontal strip of 2–4 small metrics.
 * Use for: card footer summaries, quick stat rows inside a larger card.
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StatItem[];
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, items, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid gap-3 rounded-[var(--radius)] border border-border/60 bg-card/60 p-4 text-card-foreground",
        `grid-cols-${Math.min(items.length, 4)}`,
        className,
      )}
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
      {...props}
    >
      {items.map((it, i) => (
        <div key={i} className="rounded-lg border border-border/60 bg-white/[0.02] px-3 py-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {it.label}
          </p>
          <p className="font-mono text-[15px] tabular-nums text-foreground">
            {it.value}
            {it.unit && <span className="ml-1 text-muted-foreground">{it.unit}</span>}
          </p>
        </div>
      ))}
    </div>
  ),
);
StatCard.displayName = "StatCard";