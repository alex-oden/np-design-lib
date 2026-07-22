import * as React from "react";
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
export declare const StatCard: React.ForwardRefExoticComponent<StatCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=stat-card.d.ts.map