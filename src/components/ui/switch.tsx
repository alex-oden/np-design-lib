import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

/**
 * Switch — brand-gradient track when on, sliding white thumb.
 * Opaque border on the checked track keeps the edge crisp.
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex h-[26px] w-11 shrink-0 cursor-pointer items-center rounded-full border p-0.5 [background-clip:padding-box]",
      "transition-[background-color,border-color,box-shadow] duration-200 outline-none",
      "border-border/60 bg-[hsl(230_24%_22%)]",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-45",
      "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient data-[state=unchecked]:hover:border-border",
      "data-[state=checked]:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.3),inset_0_-1px_0_hsl(0_0%_0%/0.2),0_6px_18px_-6px_hsl(var(--brand-start)/0.55),0_12px_28px_-10px_hsl(var(--brand-end)/0.5)]",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block size-[18px] rounded-full bg-muted-foreground shadow-sm transition-transform duration-200",
        "data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
