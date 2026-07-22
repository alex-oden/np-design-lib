import * as React from "react";
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
export declare const MetricCard: React.ForwardRefExoticComponent<MetricCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=metric-card.d.ts.map