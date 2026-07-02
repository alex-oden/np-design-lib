import { VariantProps } from 'class-variance-authority';
import * as React from "react";
/**
 * Alert — inline message. Pair the icon slot with an AlertTitle +
 * AlertDescription. variant: info · success · warning · destructive
 */
declare const alertVariants: (props?: ({
    variant?: "destructive" | "info" | "success" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export { Alert, AlertTitle, AlertDescription, alertVariants };
//# sourceMappingURL=alert.d.ts.map