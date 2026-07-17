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
        "overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/60 text-card-foreground",
        className,
      )}
      {...props}
    >
      <div className={cn("w-full overflow-hidden bg-muted", aspectClassName)}>{media}</div>
      {children}
    </div>
  ),
);
MediaCard.displayName = "MediaCard";