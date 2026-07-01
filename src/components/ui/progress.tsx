import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

/**
 * Progress — brand-filled bar. Pass `value` (0–100) for determinate,
 * or `indeterminate` for a looping sweep.
 */
export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indeterminate?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indeterminate, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-[hsl(230_24%_20%)]", className)}
    value={indeterminate ? undefined : value}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full rounded-full bg-brand-gradient transition-[width] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]",
        indeterminate && "w-2/5 animate-np-indeterminate",
      )}
      style={indeterminate ? undefined : { width: `${value ?? 0}%` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
