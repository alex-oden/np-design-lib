import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root ref={ref} className={cn("grid gap-3", className)} {...props} />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

/**
 * RadioGroupItem — brand-gradient fill + white dot when selected.
 * Opaque border keeps the edge crisp over the gradient.
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "size-5 shrink-0 rounded-full border-[1.5px] border-[hsl(var(--border))] bg-secondary [background-clip:padding-box]",
      "transition-[background-color,border-color,box-shadow] duration-150 outline-none",
      "hover:border-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-45",
      "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient",
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="grid size-full place-items-center">
      <span className="size-2 rounded-full bg-white" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
