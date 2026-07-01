import * as React from "react";
import { cn } from "@/lib/utils";

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
}

export interface SegmentedProps {
  options: (SegmentedOption | string)[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

/**
 * Segmented — a compact single-choice control with a sliding brand thumb.
 * Controlled: pass `value` and `onValueChange`.
 */
const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  ({ options, value, onValueChange, className }, ref) => {
    const items = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
    const listRef = React.useRef<HTMLDivElement | null>(null);
    const [thumb, setThumb] = React.useState({ left: 0, width: 0 });

    React.useLayoutEffect(() => {
      const idx = items.findIndex((o) => o.value === value);
      const el = listRef.current?.querySelectorAll<HTMLButtonElement>("[data-seg]")[idx];
      if (el) setThumb({ left: el.offsetLeft, width: el.offsetWidth });
    }, [value, items.map((i) => i.value).join("|")]);

    return (
      <div
        ref={(node) => {
          listRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="tablist"
        className={cn("relative inline-flex gap-0.5 rounded-[calc(var(--radius)-1px)] border border-border/60 bg-secondary p-[3px]", className)}
      >
        <span
          aria-hidden
          className="absolute top-[3px] bottom-[3px] rounded-lg bg-brand-gradient shadow-[0_1px_3px_rgba(0,0,0,0.25)] transition-[left,width] duration-[260ms] ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ left: thumb.left, width: thumb.width }}
        />
        {items.map((o) => (
          <button
            key={o.value}
            data-seg
            role="tab"
            aria-selected={o.value === value}
            type="button"
            onClick={() => onValueChange(o.value)}
            className={cn(
              "relative z-[1] whitespace-nowrap rounded-lg px-4 py-[7px] text-[13px] font-medium transition-colors duration-200",
              o.value === value ? "text-white" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    );
  },
);
Segmented.displayName = "Segmented";

export { Segmented };
