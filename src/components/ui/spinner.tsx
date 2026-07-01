import * as React from "react";
import { cn } from "@/lib/utils";

/** Spinner — ring loader. `brand` fades the ring through both brand stops. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  brand?: boolean;
}

function Spinner({ className, brand, ...props }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block size-6 animate-np-spin rounded-full border-[2.5px]",
        brand
          ? "border-transparent border-t-brand-start border-r-brand-end"
          : "border-white/15 border-t-brand-start",
        className,
      )}
      {...props}
    />
  );
}

/** Dots — three bouncing dots for inline / button loading. */
function Dots({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("inline-flex gap-1.5", className)} {...props}>
      <span className="size-2 rounded-full bg-brand-gradient animate-np-bounce" />
      <span className="size-2 rounded-full bg-brand-gradient animate-np-bounce [animation-delay:0.15s]" />
      <span className="size-2 rounded-full bg-brand-gradient animate-np-bounce [animation-delay:0.3s]" />
    </span>
  );
}

export { Spinner, Dots };
