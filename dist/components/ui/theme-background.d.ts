import * as React from "react";
export type ThemeBackgroundVariant = "page-aurora" | "hero-aurora" | "grid-glow" | "dot-field" | "spotlight";
export type ThemeBackgroundIntensity = "subtle" | "balanced" | "vivid";
export type ThemeBackgroundAccent = "brand" | "green";
export interface ThemeBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    variant: ThemeBackgroundVariant;
    intensity?: ThemeBackgroundIntensity;
    accent?: ThemeBackgroundAccent;
    animated?: boolean;
    /** Render as position:fixed instead of absolute. Defaults to fixed for `page-aurora`. */
    fixed?: boolean;
}
/**
 * ThemeBackground — layered decorative background primitives ported from the
 * NeosPower home. Renders absolutely-positioned, non-interactive layers behind
 * content. Wrap your content in `relative z-10` (or similar) to sit on top.
 */
export declare const ThemeBackground: React.ForwardRefExoticComponent<ThemeBackgroundProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=theme-background.d.ts.map