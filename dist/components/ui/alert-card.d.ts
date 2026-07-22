import * as React from "react";
/**
 * AlertCard — inline status block (not a toast).
 * Use for: page-level notices, form-level errors, contextual warnings.
 * For transient popups use Toast; for compact inline messages use Alert.
 */
export type AlertCardTone = "info" | "success" | "warning" | "danger";
export interface AlertCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    tone?: AlertCardTone;
    title?: React.ReactNode;
    icon?: React.ReactNode;
}
export declare const AlertCard: React.ForwardRefExoticComponent<AlertCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=alert-card.d.ts.map