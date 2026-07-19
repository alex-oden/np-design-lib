import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Button — the primary action element.
 *
 * variant: default (brand gradient) · secondary · ghost · destructive · outline · inverse · link
 * size:    sm · default · lg · xl · icon
 * loading: shows a spinner and disables the button
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-sm font-medium tracking-[-0.01em] transition-[background-position,background-color,border-color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-px select-none",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-brand-gradient [background-size:150%_150%] [background-position:0%_50%] hover:[background-position:100%_50%] shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),inset_0_-1px_0_hsl(0_0%_0%/0.25),0_10px_30px_-8px_hsl(var(--brand-start)/0.55),0_18px_50px_-12px_hsl(var(--brand-end)/0.45)] hover:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.45),inset_0_-1px_0_hsl(0_0%_0%/0.28),0_14px_38px_-8px_hsl(var(--brand-start)/0.7),0_24px_60px_-12px_hsl(var(--brand-end)/0.6)] hover:-translate-y-px active:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.25),inset_0_-1px_0_hsl(0_0%_0%/0.2),0_6px_18px_-8px_hsl(var(--brand-start)/0.5)] duration-500",
        secondary:
          "bg-white/[0.04] text-foreground border border-border/60 hover:bg-white/[0.08] hover:border-border",
        ghost:
          "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
        destructive:
          "text-destructive bg-destructive/15 border border-destructive/40 hover:bg-destructive/25 hover:border-destructive/60",
        outline:
          "border border-border text-foreground hover:bg-white/[0.05] hover:border-border",
        inverse:
          "bg-white/[0.04] text-foreground border border-foreground/80 hover:bg-white/[0.08] hover:border-foreground hover:shadow-[0_0_24px_-8px_hsl(var(--foreground)/0.25)] hover:-translate-y-px",
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
    // When asChild is used, Slot requires a single child element. Wrap the
    // spinner + original child so the slotted element still receives all
    // props while Slot only sees one child.
    const content = asChild ? (
      React.cloneElement(
        children as React.ReactElement<{ children?: React.ReactNode }>,
        undefined,
        <>
          {loading && <Loader2 className="animate-np-spin" />}
          {(children as React.ReactElement<{ children?: React.ReactNode }>).props.children}
        </>,
      )
    ) : (
      <>
        {loading && <Loader2 className="animate-np-spin" />}
        {children}
      </>
    );
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        data-loading={loading || undefined}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
