import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Checkbox — brand-gradient fill when checked. Uses an OPAQUE border
 * (--brand-border) so the gradient never bleeds past the edge.
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-5 shrink-0 rounded-md border-[1.5px] border-[hsl(var(--border))] bg-secondary [background-clip:padding-box]",
      "transition-[background-color,border-color,box-shadow] duration-150 outline-none",
      "hover:border-muted-foreground/70",
      "focus-visible:ring-2 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-45",
      "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient data-[state=checked]:text-primary-foreground",
      "data-[state=checked]:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),inset_0_-1px_0_hsl(0_0%_0%/0.25),0_4px_14px_-4px_hsl(var(--brand-start)/0.55),0_8px_22px_-8px_hsl(var(--brand-end)/0.5)]",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-items-center text-current")}>
      <Check className="size-3 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
