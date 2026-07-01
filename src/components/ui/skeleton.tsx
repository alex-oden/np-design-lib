import * as React from "react";
import { cn } from "@/lib/utils";

/** Skeleton — shimmer placeholder for loading content. */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md animate-np-shimmer [background:linear-gradient(100deg,hsl(230_24%_16%)_30%,hsl(230_20%_22%)_50%,hsl(230_24%_16%)_70%)] [background-size:200%_100%]",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
