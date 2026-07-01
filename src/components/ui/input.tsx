import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** icon rendered inside the left edge */
  leadingIcon?: React.ReactNode;
  /** icon rendered inside the right edge */
  trailingIcon?: React.ReactNode;
}

/**
 * Input — text field. Supports leading/trailing icons and validation
 * styling via the native `aria-invalid` attribute.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leadingIcon, trailingIcon, ...props }, ref) => {
    const field = (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-[var(--radius)] border border-border/60 bg-secondary px-3.5 text-sm text-foreground",
          "transition-[border-color,box-shadow,background-color] duration-200 outline-none",
          "placeholder:text-muted-foreground/70",
          "hover:border-border",
          "focus:border-transparent focus:bg-[hsl(230_28%_15%)] focus:ring-2 focus:ring-ring/60",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus:ring-destructive/30",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          leadingIcon && "pl-10",
          trailingIcon && "pr-10",
          className,
        )}
        {...props}
      />
    );

    if (!leadingIcon && !trailingIcon) return field;

    return (
      <div className="relative flex items-center">
        {leadingIcon && (
          <span className="pointer-events-none absolute left-3.5 grid place-items-center text-muted-foreground [&_svg]:size-4">
            {leadingIcon}
          </span>
        )}
        {field}
        {trailingIcon && (
          <span className="absolute right-3.5 grid place-items-center text-muted-foreground [&_svg]:size-4">
            {trailingIcon}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
