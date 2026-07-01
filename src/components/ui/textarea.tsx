import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Textarea — multi-line text field. */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[92px] w-full rounded-[var(--radius)] border border-border/60 bg-secondary px-3.5 py-3 text-sm leading-relaxed text-foreground",
        "transition-[border-color,box-shadow,background-color] duration-200 outline-none resize-y",
        "placeholder:text-muted-foreground/70 hover:border-border",
        "focus:border-transparent focus:bg-[hsl(230_28%_15%)] focus:ring-2 focus:ring-ring/60",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus:ring-destructive/30",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
