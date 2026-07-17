import * as React from "react";
import { cn } from "@lib/utils";

/**
 * InteractiveCard — clickable tile with a tactile elevation animation.
 * Use for: grid tiles that link somewhere, dashboard entry points.
 * Renders as <button> by default; pass `asChild` to render as a link.
 */
export interface InteractiveCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const InteractiveCard = React.forwardRef<HTMLButtonElement, InteractiveCardProps>(
  ({ className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "group relative block w-full cursor-pointer overflow-hidden rounded-[var(--radius)]",
        "border border-border/60 bg-card/60 text-left text-card-foreground",
        "transition-transform transition-shadow transition-colors duration-[280ms] ease-[cubic-bezier(.23,1,.32,1)]",
        "will-change-transform",
        "hover:-translate-y-1 hover:border-border hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.18),0_0_0_1px_hsl(var(--border)/.7)]",
        "active:translate-y-0 active:scale-[0.995] active:shadow-[0_4px_12px_-4px_hsl(var(--brand-start)/.12),0_0_0_1px_hsl(var(--border)/.6)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:active:scale-100",
        className,
      )}
      {...props}
    />
  ),
);
InteractiveCard.displayName = "InteractiveCard";
