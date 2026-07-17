import * as React from "react";
import { BorderGlow, type BorderGlowProps } from "./border-glow";

/**
 * GlowCard — opinionated wrapper over BorderGlow with brand-aligned presets.
 * Use for: hero/feature tiles that should draw attention with a proximity glow.
 */
export type GlowPreset = "brand" | "success" | "danger" | "info" | "violet";

export interface GlowCardProps extends Omit<BorderGlowProps, "colors" | "glowColor"> {
  preset?: GlowPreset;
}

const presets: Record<GlowPreset, { colors: string[]; glowColor: string }> = {
  brand: { colors: ["#3657FF", "#FB00C8", "#22D3EE"], glowColor: "248 90 70" },
  violet: { colors: ["#7C5CFF", "#3657FF", "#FB00C8"], glowColor: "268 88 70" },
  success: { colors: ["#34E29B", "#22D3EE", "#3657FF"], glowColor: "150 84 55" },
  danger: { colors: ["#FF5C3A", "#FB00C8", "#7C5CFF"], glowColor: "12 96 60" },
  info: { colors: ["#22D3EE", "#3657FF", "#7C5CFF"], glowColor: "188 92 60" },
};

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ preset = "brand", animated = true, ...props }, ref) => {
    const p = presets[preset];
    return <BorderGlow ref={ref as never} colors={p.colors} glowColor={p.glowColor} animated={animated} {...props} />;
  },
);
GlowCard.displayName = "GlowCard";