import { VariantProps } from 'class-variance-authority';
import * as React from "react";
/**
 * Badge — compact status signal in monospace.
 * variant: default (soft) · solid (brand gradient) · success · warning · destructive · info
 */
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "info" | "success" | "warning" | "solid" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    /** render a leading status dot; `live` makes it pulse */
    dot?: boolean;
    live?: boolean;
}
declare function Badge({ className, variant, dot, live, children, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
/** Count — numeric pill for notification badges. */
declare function Count({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
export { Badge, Count, badgeVariants };
//# sourceMappingURL=badge.d.ts.map