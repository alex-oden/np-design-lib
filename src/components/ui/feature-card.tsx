import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * FeatureCard — marketing feature block: icon on top, title, description.
 * Use for: landing "features" grids, benefits sections.
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius)] border border-border/60 bg-card/60 p-6 text-card-foreground",
        "transition-np-card will-change-transform",
        "hover:-translate-y-1 hover:border-border/80 hover:bg-card/70 hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.14),0_0_0_1px_hsl(var(--border)/.6)]",
        "group",
        "active:translate-y-0 active:scale-[0.997]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 grid size-10 place-items-center rounded-md border border-border/60 bg-secondary text-foreground transition-[border-color,background-color] duration-300 group-hover:border-border/80 group-hover:bg-secondary/80">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold tracking-[-0.015em] text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  ),
);
FeatureCard.displayName = "FeatureCard";