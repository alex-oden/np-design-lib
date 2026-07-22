import { BorderGlowProps } from './border-glow';
import * as React from "react";
/**
 * GlowCard — opinionated wrapper over BorderGlow with brand-aligned presets.
 * Use for: hero/feature tiles that should draw attention with a proximity glow.
 */
export type GlowPreset = "brand" | "success" | "danger" | "info" | "violet";
export interface GlowCardProps extends Omit<BorderGlowProps, "colors" | "glowColor"> {
    preset?: GlowPreset;
}
export declare const GlowCard: React.ForwardRefExoticComponent<GlowCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=glow-card.d.ts.map