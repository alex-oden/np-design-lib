import * as React from "react";
export interface SegmentedOption {
    value: string;
    label: React.ReactNode;
}
export interface SegmentedProps {
    options: (SegmentedOption | string)[];
    value: string;
    onValueChange: (value: string) => void;
    className?: string;
}
/**
 * Segmented — a compact single-choice control with a sliding brand thumb.
 * Controlled: pass `value` and `onValueChange`.
 */
declare const Segmented: React.ForwardRefExoticComponent<SegmentedProps & React.RefAttributes<HTMLDivElement>>;
export { Segmented };
//# sourceMappingURL=segmented.d.ts.map