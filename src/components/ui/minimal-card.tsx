import * as React from "react";
import { cn } from "@/lib/utils";

export type MinimalCardTone = "default" | "brand";

export interface MinimalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  value?: React.ReactNode;
  description?: React.ReactNode;
  trend?: "up" | "down" | "flat";
  tone?: MinimalCardTone;
}

const TREND_GLYPH: Record<NonNullable<MinimalCardProps["trend"]>, string> = {
  up: "↑",
  down: "↓",
  flat: "→",
};

/**
 * MinimalCard — sharp-cornered KPI cell. Designed to sit inside a
 * MinimalCardRow, where the row owns the outer border / hairline dividers.
 * Standalone use is fine too; then pass a className with your own border.
 */
export const MinimalCard = React.forwardRef<HTMLDivElement, MinimalCardProps>(
  ({ eyebrow, value, description, trend, tone = "brand", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full flex-col justify-between gap-8 p-6 md:p-8",
          className,
        )}
        {...props}
      >
        <div className="space-y-6">
          {eyebrow && (
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
              {trend && <span className="mr-1">{TREND_GLYPH[trend]}</span>}
              {eyebrow}
            </p>
          )}
          {value !== undefined && (
            <p
              className={cn(
                "font-semibold tabular-nums leading-none tracking-[-0.03em]",
                "text-4xl md:text-5xl",
                tone === "brand" ? "text-brand-end" : "text-foreground",
              )}
            >
              {value}
            </p>
          )}
        </div>
        {description && (
          <p className="text-[13px] leading-relaxed text-muted-foreground">{description}</p>
        )}
        {children}
      </div>
    );
  },
);
MinimalCard.displayName = "MinimalCard";