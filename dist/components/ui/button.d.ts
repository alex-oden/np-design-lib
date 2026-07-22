import { VariantProps } from 'class-variance-authority';
import * as React from "react";
/**
 * Button — the primary action element.
 *
 * variant: default (brand gradient) · secondary · ghost · destructive · outline · inverse · link
 * size:    sm · default · lg · xl · icon
 * loading: shows a spinner and disables the button
 */
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "secondary" | "ghost" | "destructive" | "outline" | "inverse" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map