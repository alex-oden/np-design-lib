import * as React from "react";
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
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=input.d.ts.map