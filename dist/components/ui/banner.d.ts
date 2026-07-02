import * as React from "react";
/**
 * Banner — page-level message with a brand gradient edge. Put a title +
 * text on the left; actions (e.g. a Button) as children on the right.
 */
export interface BannerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React.ReactNode;
    description?: React.ReactNode;
}
declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;
export { Banner };
//# sourceMappingURL=banner.d.ts.map