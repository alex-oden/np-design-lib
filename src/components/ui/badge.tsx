import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — compact status signal in monospace.
 * variant: default (soft) · solid (brand gradient) · success · warning · destructive · info
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium leading-tight tracking-[0.04em]",
  {
    variants: {
      variant: {
        default: "border-border/60 bg-white/[0.04] text-muted-foreground",
        solid:
          "border-brand-border bg-brand-gradient [background-clip:padding-box] text-primary-foreground",
        success: "border-success/35 bg-success/15 text-success",
        warning: "border-warning/35 bg-warning/15 text-warning",
        destructive: "border-destructive/35 bg-destructive/15 text-destructive",
        info: "border-info/35 bg-info/15 text-info",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** render a leading status dot; `live` makes it pulse */
  dot?: boolean;
  live?: boolean;
}

function Badge({ className, variant, dot, live, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span className={cn("size-1.5 rounded-full bg-current", live && "animate-np-pulse")} />
      )}
      {children}
    </span>
  );
}

/** Count — numeric pill for notification badges. */
function Count({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-grid h-5 min-w-5 place-items-center rounded-full bg-brand-gradient px-1.5 font-mono text-[11px] font-medium text-primary-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge, Count, badgeVariants };
