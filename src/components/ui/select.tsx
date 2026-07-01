import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

/**
 * Select — native styled select. (For a listbox with search/multi-select,
 * use a Radix-based combobox; this covers the common single-choice case
 * with full form semantics.)
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <div className="relative flex items-center">
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-[var(--radius)] border border-border/60 bg-secondary pl-3.5 pr-10 text-sm text-foreground",
          "transition-[border-color,box-shadow] duration-200 outline-none cursor-pointer",
          "hover:border-border focus:border-transparent focus:ring-2 focus:ring-ring/60",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 size-4 text-muted-foreground" />
    </div>
  ),
);
Select.displayName = "Select";

export { Select };
