import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Banner — page-level message with a brand gradient edge. Put a title +
 * text on the left; actions (e.g. a Button) as children on the right.
 */
export interface BannerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className, title, description, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center gap-4 overflow-hidden rounded-[calc(var(--radius)-2px)] border border-border/60 bg-card/70 p-4 pl-5",
        "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-brand-gradient",
        className,
      )}
      {...props}
    >
      <div className="flex-1">
        {title && <p className="mb-0.5 text-sm font-semibold text-foreground">{title}</p>}
        {description && <p className="text-[13px] leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  ),
);
Banner.displayName = "Banner";

export { Banner };
