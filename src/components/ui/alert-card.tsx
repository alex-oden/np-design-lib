import * as React from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * AlertCard — inline status block (not a toast).
 * Use for: page-level notices, form-level errors, contextual warnings.
 * For transient popups use Toast; for compact inline messages use Alert.
 */
export type AlertCardTone = "info" | "success" | "warning" | "danger";

export interface AlertCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: AlertCardTone;
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

const toneMap: Record<
  AlertCardTone,
  { edge: string; icon: React.ComponentType<{ className?: string }>; text: string }
> = {
  info: { edge: "before:bg-primary", icon: Info, text: "text-primary" },
  success: { edge: "before:bg-success", icon: CheckCircle2, text: "text-success" },
  warning: { edge: "before:bg-warning", icon: AlertTriangle, text: "text-warning" },
  danger: { edge: "before:bg-destructive", icon: XCircle, text: "text-destructive" },
};

export const AlertCard = React.forwardRef<HTMLDivElement, AlertCardProps>(
  ({ className, tone = "info", title, icon, children, ...props }, ref) => {
    const t = toneMap[tone];
    const Icon = t.icon;
    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          "relative overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/60 p-5 pl-6 text-card-foreground",
          "before:absolute before:inset-y-0 before:left-0 before:w-1",
          t.edge,
          className,
        )}
        {...props}
      >
        <div className="flex gap-3">
          <div className={cn("mt-0.5 shrink-0", t.text)}>
            {icon ?? <Icon className="size-4" />}
          </div>
          <div className="min-w-0 flex-1">
            {title && <p className="text-[14px] font-semibold text-foreground">{title}</p>}
            {children && (
              <div className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);
AlertCard.displayName = "AlertCard";