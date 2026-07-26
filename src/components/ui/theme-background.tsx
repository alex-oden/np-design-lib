import * as React from "react";
import { cn } from "@/lib/utils";

export type ThemeBackgroundVariant =
  | "page-aurora"
  | "hero-aurora"
  | "grid-glow"
  | "dot-field"
  | "spotlight";

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

const INTENSITY_SCALE: Record<ThemeBackgroundIntensity, number> = {
  subtle: 0.6,
  balanced: 1,
  vivid: 1.4,
};

function accentStop(accent: ThemeBackgroundAccent, alpha: number) {
  // brand-end is magenta by default; "green" swaps to the accent-green stop.
  return accent === "green"
    ? `rgba(0, 220, 140, ${alpha})`
    : `rgba(251, 0, 200, ${alpha})`;
}

const BLUE = (a: number) => `rgba(54, 87, 255, ${a})`;

/**
 * ThemeBackground — layered decorative background primitives ported from the
 * NeosPower home. Renders absolutely-positioned, non-interactive layers behind
 * content. Wrap your content in `relative z-10` (or similar) to sit on top.
 */
export const ThemeBackground = React.forwardRef<HTMLDivElement, ThemeBackgroundProps>(
  function ThemeBackground(
    {
      variant,
      intensity = "balanced",
      accent = "brand",
      animated,
      fixed,
      className,
      style,
      ...rest
    },
    ref,
  ) {
    const k = INTENSITY_SCALE[intensity];
    const isFixed = fixed ?? variant === "page-aurora";
    const isAnimated = animated ?? variant === "hero-aurora";

    const rootClass = cn(
      "pointer-events-none overflow-hidden",
      isFixed ? "fixed inset-0" : "absolute inset-0",
      className,
    );

    return (
      <div
        ref={ref}
        aria-hidden
        className={rootClass}
        style={{ zIndex: 0, ...style }}
        data-variant={variant}
        {...rest}
      >
        {variant === "page-aurora" && (
          <>
            <div className="absolute inset-0 bg-background" />
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 60% 40% at 50% 0%, ${BLUE(0.18 * k)}, transparent 60%),
                  radial-gradient(ellipse 80% 50% at 50% 100%, ${accentStop(accent, 0.08 * k)}, transparent 60%)
                `,
              }}
            />
            <div
              className="absolute inset-0 opacity-25 mix-blend-overlay"
              style={{
                backgroundImage: `
                  radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: "3px 3px, 7px 7px",
                backgroundPosition: "0 0, 1px 1px",
              }}
            />
          </>
        )}

        {variant === "hero-aurora" && (
          <div className="absolute inset-0 mix-blend-screen">
            <div
              className={cn(
                "absolute rounded-full",
                isAnimated && "animate-np-float-1 motion-reduce:animate-none",
              )}
              style={{
                width: 620,
                height: 620,
                top: -180,
                left: -120,
                filter: "blur(90px)",
                opacity: 0.45 * k,
                mixBlendMode: "screen",
                background: `radial-gradient(circle, ${BLUE(0.85)}, transparent 70%)`,
              }}
            />
            <div
              className={cn(
                "absolute rounded-full",
                isAnimated && "animate-np-float-2 motion-reduce:animate-none",
              )}
              style={{
                width: 560,
                height: 560,
                top: -120,
                right: -100,
                filter: "blur(90px)",
                opacity: 0.45 * k,
                mixBlendMode: "screen",
                background: `radial-gradient(circle, ${accentStop(accent, 0.75)}, transparent 70%)`,
              }}
            />
            <div
              className={cn(
                "absolute rounded-full",
                isAnimated && "animate-np-float-3 motion-reduce:animate-none",
              )}
              style={{
                width: 420,
                height: 420,
                bottom: -200,
                left: "35%",
                filter: "blur(90px)",
                opacity: 0.45 * k,
                mixBlendMode: "screen",
                background: `radial-gradient(circle, rgba(0, 220, 140, 0.40), transparent 70%)`,
              }}
            />
          </div>
        )}

        {variant === "grid-glow" && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "64px 64px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
                maskImage:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 50% 40% at 25% 50%, ${BLUE(0.18 * k)}, transparent 60%),
                  radial-gradient(ellipse 50% 40% at 80% 30%, ${accentStop(accent, 0.10 * k)}, transparent 60%)
                `,
              }}
            />
          </>
        )}

        {variant === "dot-field" && (
          <>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "80%",
                height: "70%",
                filter: "blur(60px)",
                background: `radial-gradient(ellipse, ${BLUE(0.40 * k)} 0%, ${accentStop(accent, 0.18 * k)} 40%, transparent 70%)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 55% 55% at 50% 50%, #000 20%, transparent 80%)",
                maskImage:
                  "radial-gradient(ellipse 55% 55% at 50% 50%, #000 20%, transparent 80%)",
              }}
            />
          </>
        )}

        {variant === "spotlight" && (
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 50% 40% at 80% 30%, ${BLUE(0.12 * k)}, transparent 60%),
                radial-gradient(ellipse 40% 30% at 20% 70%, ${accentStop(accent, 0.10 * k)}, transparent 60%),
                radial-gradient(ellipse 60% 50% at 50% 0%, ${BLUE(0.08 * k)}, transparent 60%)
              `,
            }}
          />
        )}
      </div>
    );
  },
);
