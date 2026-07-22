import * as React from "react";
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter, } from './surface-card';
/**
 * @deprecated Prefer the explicit named components:
 *   `SurfaceCard` (default), `GlassCard`, `InteractiveCard`,
 *   or a use-case specific card: `MetricCard`, `StatCard`, `FeatureCard`,
 *   `MediaCard`, `AlertCard`, `GlowCard`.
 *
 * Kept as a backward-compatible shim: the `variant` prop maps to the
 * corresponding named component.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "interactive";
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card };
//# sourceMappingURL=card.d.ts.map