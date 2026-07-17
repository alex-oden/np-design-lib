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
        "glass rounded-[var(--radius)] border border-border/60 bg-card/70 text-card-foreground shadow-card",
        className,
      )}
      {...props}
    />
  ),
);
GlassCard.displayName = "GlassCard";