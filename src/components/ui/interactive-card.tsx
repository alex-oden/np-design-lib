import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * InteractiveCard — clickable tile with hover lift and brand glow.
 * Use for: grid tiles that link somewhere, dashboard entry points.
 * Renders as <button> by default; pass `as="a"` to render as a link.
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
        "group block w-full cursor-pointer rounded-[var(--radius)] border border-border/60 bg-card/60 text-left text-card-foreground",
        "transition-[transform,border-color,box-shadow] duration-200",
        "hover:-translate-y-1 hover:border-border hover:shadow-glow",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    />
  ),
);
InteractiveCard.displayName = "InteractiveCard";