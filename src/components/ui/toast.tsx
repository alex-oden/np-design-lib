import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheck, Info, TriangleAlert, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Toast — presentational transient notification. Pair with your app's
 * toast manager (e.g. `sonner`, which Lovable scaffolds by default) or
 * render directly. `variant` sets the leading icon + accent.
 */
const toastVariants = cva(
  "flex items-center gap-3 rounded-[calc(var(--radius)-2px)] border border-border bg-[hsl(230_45%_9%/0.92)] p-3.5 shadow-card glass animate-np-toast-in min-w-[280px]",
  {
    variants: {
      variant: {
        default: "[&>svg]:text-foreground",
        success: "[&>svg]:text-success",
        info: "[&>svg]:text-info",
        warning: "[&>svg]:text-warning",
        destructive: "[&>svg]:text-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const ICONS = {
  default: Info,
  success: CircleCheck,
  info: Info,
  warning: TriangleAlert,
  destructive: TriangleAlert,
} as const;

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  onDismiss?: () => void;
  action?: React.ReactNode;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "default", onDismiss, action, children, ...props }, ref) => {
    const Icon = ICONS[variant ?? "default"];
    return (
      <div ref={ref} role="status" className={cn(toastVariants({ variant }), className)} {...props}>
        <Icon className="size-[18px] shrink-0" />
        <span className="flex-1 text-[13px] text-foreground">{children}</span>
        {action}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="shrink-0 rounded p-0.5 text-muted-foreground transition hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    );
  },
);
Toast.displayName = "Toast";

export { Toast, toastVariants };
