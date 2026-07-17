import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * GlassCard — translucent surface with backdrop blur.
 * Use for: hero overlays, premium sections, panels that sit over a
 * colored/gradient background.
 */
export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass relative overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/70 text-card-foreground shadow-card",
        "transition-np-card will-change-transform",
        "hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_20px_48px_-12px_hsl(var(--brand-start)/.22),0_0_0_1px_hsl(var(--border)/.7)]",
        "active:translate-y-0 active:scale-[0.997]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        className,
      )}
      {...props}
    />
  ),
);
GlassCard.displayName = "GlassCard";