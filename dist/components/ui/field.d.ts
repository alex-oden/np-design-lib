import * as React from "react";
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
declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;
export { Field };
//# sourceMappingURL=field.d.ts.map