import { VariantProps } from 'class-variance-authority';
import * as React from "react";
/**
 * Toast — presentational transient notification. Pair with your app's
 * toast manager (e.g. `sonner`, which Lovable scaffolds by default) or
 * render directly. `variant` sets the leading icon + accent.
 */
declare const toastVariants: (props?: ({
    variant?: "default" | "destructive" | "info" | "success" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
    onDismiss?: () => void;
    action?: React.ReactNode;
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
export { Toast, toastVariants };
//# sourceMappingURL=toast.d.ts.map