import * as React from "react";
/** Spinner — ring loader. `brand` fades the ring through both brand stops. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
    brand?: boolean;
}
declare function Spinner({ className, brand, ...props }: SpinnerProps): React.JSX.Element;
/** Dots — three bouncing dots for inline / button loading. */
declare function Dots({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
export { Spinner, Dots };
//# sourceMappingURL=spinner.d.ts.map