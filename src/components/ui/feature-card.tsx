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
        "group relative isolate overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/60 p-6 text-card-foreground",
        "transition-np-card will-change-transform",
        "hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.14),0_0_0_1px_hsl(var(--border)/.6)]",
        "active:translate-y-0 active:scale-[0.997]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-70",
          "transition-opacity duration-[500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          "group-hover:opacity-100",
          "motion-reduce:transition-none",
        )}
        style={{
          background:
            "radial-gradient(120% 90% at 100% 0%, hsl(var(--brand-end) / 0.14), transparent 60%), linear-gradient(180deg, hsl(var(--brand-start) / 0.08), transparent 55%)",
        }}
      />
      <div className="relative z-10">
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
    </div>
  ),
);
FeatureCard.displayName = "FeatureCard";