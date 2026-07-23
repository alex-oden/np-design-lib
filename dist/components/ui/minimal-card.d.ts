import * as React from "react";
export type MinimalCardTone = "default" | "brand";
export interface MinimalCardProps extends React.HTMLAttributes<HTMLDivElement> {
    eyebrow?: React.ReactNode;
    value?: React.ReactNode;
    description?: React.ReactNode;
    trend?: "up" | "down" | "flat";
    tone?: MinimalCardTone;
}
/**
 * MinimalCard — sharp-cornered KPI cell. Designed to sit inside a
 * MinimalCardRow, where the row owns the outer border / hairline dividers.
 * Standalone use is fine too; then pass a className with your own border.
 */
export declare const MinimalCard: React.ForwardRefExoticComponent<MinimalCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=minimal-card.d.ts.map