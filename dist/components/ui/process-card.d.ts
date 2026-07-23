import * as React from "react";
export interface ProcessCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    index: number;
    total: number;
    title: React.ReactNode;
    description?: React.ReactNode;
    meta?: React.ReactNode;
}
export declare const ProcessCard: React.ForwardRefExoticComponent<ProcessCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=process-card.d.ts.map