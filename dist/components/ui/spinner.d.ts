import * as React from "react";
/** Spinner — ring loader. `brand` fades the ring through both brand stops. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
    brand?: boolean;
}
declare function Spinner({ className, brand, ...props }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
/** Dots — three bouncing dots for inline / button loading. */
declare function Dots({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
export { Spinner, Dots };
//# sourceMappingURL=spinner.d.ts.map