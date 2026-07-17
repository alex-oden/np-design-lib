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
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 grid size-10 place-items-center rounded-md border border-border/60 bg-secondary text-foreground">
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