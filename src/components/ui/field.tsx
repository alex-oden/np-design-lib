import * as React from "react";
import { CircleCheck, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "./label";

/**
 * Field — composes a Label, a control, an optional hint, and an optional
 * validation message. Wrap any input/select/textarea:
 *
 *   <Field label="Email" required hint="Work address" error="Invalid">
 *     <Input aria-invalid />
 *   </Field>
 */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  success?: React.ReactNode;
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, htmlFor, required, hint, error, success, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {children}
      {hint && !error && <p className="text-[11.5px] leading-snug text-muted-foreground/70">{hint}</p>}
      {error && (
        <p className="flex items-center gap-1.5 text-[11.5px] leading-snug text-destructive">
          <TriangleAlert className="size-3 shrink-0" />
          {error}
        </p>
      )}
      {success && !error && (
        <p className="flex items-center gap-1.5 text-[11.5px] leading-snug text-success">
          <CircleCheck className="size-3 shrink-0" />
          {success}
        </p>
      )}
    </div>
  ),
);
Field.displayName = "Field";

export { Field };
