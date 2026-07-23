import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProcessCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  index: number;
  total: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export const ProcessCard = React.forwardRef<HTMLDivElement, ProcessCardProps>(
  ({ index, total, title, description, meta, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-full flex-col justify-between gap-8 p-6 md:p-8", className)}
        {...props}
      >
        <div className="space-y-5">
          <p className="font-mono text-[11px] tracking-[0.16em]">
            <span className="text-brand-end">{pad(index)}</span>
            <span className="text-muted-foreground/60"> / {pad(total)}</span>
          </p>
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
          {description && (
            <p className="text-[13px] leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
        {meta && (
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-[2px] w-8 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--brand-start)), hsl(var(--brand-end)))",
              }}
            />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
              {meta}
            </span>
          </div>
        )}
      </div>
    );
  },
);
ProcessCard.displayName = "ProcessCard";