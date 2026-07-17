import * as React from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * MetricCard — a single KPI (label + big value + optional delta).
 * Use for: dashboard KPIs, headline numbers.
 */
export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  unit?: string;
  /** e.g. "+4.8%" — pair with `trend` for color/icon. */
  delta?: string;
  trend?: "up" | "down" | "flat";
  icon?: React.ReactNode;
}

const trendClass: Record<NonNullable<MetricCardProps["trend"]>, string> = {
  up: "text-success",
  down: "text-destructive",
  flat: "text-muted-foreground",
};

const trendIcon = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  flat: Minus,
} as const;

export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, label, value, unit, delta, trend, icon, ...props }, ref) => {
    const TrendIcon = trend ? trendIcon[trend] : null;
    return (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius)] border border-border/60 bg-card/60 p-5 text-card-foreground",
        "transition-np-card will-change-transform",
        "hover:-translate-y-1 hover:border-border/80 hover:bg-card/70 hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.14),0_0_0_1px_hsl(var(--border)/.6)]",
        "active:translate-y-0 active:scale-[0.997]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:hover:bg-card/60",
        className,
      )}
      {...props}
    >
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
            {label}
          </p>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="font-mono text-3xl tabular-nums text-foreground">{value}</span>
          {unit && <span className="font-mono text-sm text-muted-foreground">{unit}</span>}
        </div>
        {delta && (
          <div
            className={cn(
              "mt-2 inline-flex items-center gap-1 font-mono text-[12px] tabular-nums",
              trend ? trendClass[trend] : "text-muted-foreground",
            )}
          >
            {TrendIcon && <TrendIcon className="size-3.5" />}
            {delta}
          </div>
        )}
      </div>
    );
  },
);
MetricCard.displayName = "MetricCard";