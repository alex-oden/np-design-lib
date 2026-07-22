import * as React from "react";
/**
 * FeatureCard — marketing feature block: icon on top, title, description.
 * Use for: landing "features" grids, benefits sections.
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title: string;
    description?: React.ReactNode;
}
export declare const FeatureCard: React.ForwardRefExoticComponent<FeatureCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=feature-card.d.ts.map