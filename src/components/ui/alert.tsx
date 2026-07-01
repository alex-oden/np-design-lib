import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Alert — inline message. Pair the icon slot with an AlertTitle +
 * AlertDescription. variant: info · success · warning · destructive
 */
const alertVariants = cva(
  "relative flex gap-3 rounded-[calc(var(--radius)-2px)] border p-4 [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:translate-y-px",
  {
    variants: {
      variant: {
        info: "border-info/40 bg-info/[0.08] [&>svg]:text-info",
        success: "border-success/40 bg-success/[0.08] [&>svg]:text-success",
        warning: "border-warning/40 bg-warning/[0.08] [&>svg]:text-warning",
        destructive: "border-destructive/40 bg-destructive/[0.08] [&>svg]:text-destructive",
      },
    },
    defaultVariants: { variant: "info" },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  ),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("mb-0.5 text-sm font-semibold text-foreground", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-[13px] leading-relaxed text-muted-foreground", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
