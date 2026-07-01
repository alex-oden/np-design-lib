import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Button — the primary action element.
 *
 * variant: default (brand gradient) · secondary · ghost · destructive · outline · link
 * size:    sm · default · lg · xl · icon
 * loading: shows a spinner and disables the button
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-sm font-medium tracking-[-0.01em] transition-[background-position,background-color,border-color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-px select-none",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-brand-gradient [background-size:150%_150%] [background-position:0%_50%] hover:[background-position:100%_50%] shadow-[0_8px_24px_-10px_hsl(var(--brand-start)/0.6)] duration-500",
        secondary:
          "bg-white/[0.04] text-foreground border border-border/60 hover:bg-white/[0.08] hover:border-border",
        ghost:
          "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
        destructive:
          "text-destructive bg-destructive/15 border border-destructive/40 hover:bg-destructive/25 hover:border-destructive/60",
        outline:
          "border border-border text-foreground hover:bg-white/[0.05] hover:border-border",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-[30px] px-3 text-xs rounded-[calc(var(--radius)-4px)]",
        default: "h-[38px] px-4",
        lg: "h-[46px] px-[22px] text-sm",
        xl: "h-[52px] px-[26px] text-[15px] rounded-[calc(var(--radius)+1px)]",
        icon: "h-[38px] w-[38px] p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        data-loading={loading || undefined}
        {...props}
      >
        {loading && <Loader2 className="animate-np-spin" />}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
