import * as React from "react";
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
/**
 * MinimalCardRow — arranges MinimalCard / ProcessCard children as a single
 * row of cells separated by hairline dividers (vertical on md+, horizontal
 * when stacked on small screens).
 */
export declare const MinimalCardRow: React.ForwardRefExoticComponent<MinimalCardRowProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=minimal-card-row.d.ts.map