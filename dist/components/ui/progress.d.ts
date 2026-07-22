import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
/**
 * Progress — brand-filled bar. Pass `value` (0–100) for determinate,
 * or `indeterminate` for a looping sweep.
 */
export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    indeterminate?: boolean;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
export { Progress };
//# sourceMappingURL=progress.d.ts.map