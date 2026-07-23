import * as React from "react";
import { cn } from "@/lib/utils";

export type MinimalCardRowBleed = "contained" | "full";

export interface MinimalCardRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * contained → rounded outer border wraps the row.
   * full      → no outer border/radius, only top + bottom hairlines,
   *             stretches edge-to-edge of its parent (drop inside a
   *             full-width section).
   */
  bleed?: MinimalCardRowBleed;
  /** Number of columns on md+ screens. Defaults to child count via auto-fit-like grid. */
  columns?: 2 | 3 | 4 | 5;
}

const COL_CLASSES: Record<NonNullable<MinimalCardRowProps["columns"]>, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  5: "md:grid-cols-2 lg:grid-cols-5",
};

/**
 * MinimalCardRow — arranges MinimalCard / ProcessCard children as a single
 * row of cells separated by hairline dividers (vertical on md+, horizontal
 * when stacked on small screens).
 */
export const MinimalCardRow = React.forwardRef<HTMLDivElement, MinimalCardRowProps>(
  ({ bleed = "contained", columns = 4, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1",
          COL_CLASSES[columns],
          // hairline dividers between cells — divide utility uses border color
          "divide-y divide-border/60",
          "md:divide-y-0 md:divide-x md:divide-border/60",
          bleed === "contained"
            ? "rounded-[var(--radius)] border border-border/60 bg-card/50 overflow-hidden"
            : "border-y border-border/60",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
MinimalCardRow.displayName = "MinimalCardRow";