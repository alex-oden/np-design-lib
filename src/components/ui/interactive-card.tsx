import * as React from "react";
import { cn } from "@/lib/utils";

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
        "shadow-[0_1px_2px_-1px_hsl(var(--brand-start)/.08)]",
        "transition-[transform,box-shadow,border-color,background-color] duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        "will-change-[transform,box-shadow]",
        "hover:-translate-y-1 hover:border-border hover:shadow-[0_14px_30px_-10px_hsl(var(--brand-start)/.20),0_2px_6px_-2px_hsl(var(--brand-start)/.10),0_0_0_1px_hsl(var(--border)/.7)]",
        "active:duration-150 active:translate-y-0 active:scale-[0.995] active:shadow-[0_4px_12px_-4px_hsl(var(--brand-start)/.12),0_0_0_1px_hsl(var(--border)/.6)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:active:scale-100",
        className,
      )}
      {...props}
    />
  ),
);
InteractiveCard.displayName = "InteractiveCard";
