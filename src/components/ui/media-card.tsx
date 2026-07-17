import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * MediaCard — image/video preview on top, content below.
 * Use for: article previews, product tiles, gallery cards.
 */
export interface MediaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  media: React.ReactNode;
  /** Tailwind aspect utility, e.g. "aspect-video" (default) or "aspect-square". */
  aspectClassName?: string;
}

export const MediaCard = React.forwardRef<HTMLDivElement, MediaCardProps>(
  ({ className, media, aspectClassName = "aspect-video", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/60 text-card-foreground",
        "transition-np-card will-change-transform",
        "hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.14),0_0_0_1px_hsl(var(--border)/.6)]",
        "active:translate-y-0 active:scale-[0.997]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        className,
      )}
      {...props}
    >
      <div className={cn("w-full overflow-hidden bg-muted transition-transform duration-500 ease-[cubic-bezier(.23,1,.32,1)] group-hover:scale-[1.03]", aspectClassName)}>{media}</div>
      {children}
    </div>
  ),
);
MediaCard.displayName = "MediaCard";