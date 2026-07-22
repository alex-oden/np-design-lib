import * as React from "react";
/**
 * InteractiveCard — clickable tile with a tactile elevation animation.
 * Use for: grid tiles that link somewhere, dashboard entry points.
 * Renders as <button> by default; pass `asChild` to render as a link.
 */
export interface InteractiveCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}
export declare const InteractiveCard: React.ForwardRefExoticComponent<InteractiveCardProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=interactive-card.d.ts.map