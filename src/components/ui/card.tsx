import * as React from "react";
import { GlassCard } from "./glass-card";
import { InteractiveCard } from "./interactive-card";
import { SurfaceCard } from "./surface-card";
export {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./surface-card";

/**
 * @deprecated Prefer the explicit named components:
 *   `SurfaceCard` (default), `GlassCard`, `InteractiveCard`,
 *   or a use-case specific card: `MetricCard`, `StatCard`, `FeatureCard`,
 *   `MediaCard`, `AlertCard`, `GlowCard`.
 *
 * Kept as a backward-compatible shim: the `variant` prop maps to the
 * corresponding named component.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "interactive";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", ...props }, ref) => {
    if (variant === "glass") return <GlassCard ref={ref} {...props} />;
    if (variant === "interactive") {
      // InteractiveCard renders <button>; cast the shared props.
      return (
        <InteractiveCard
          ref={ref as unknown as React.Ref<HTMLButtonElement>}
          {...(props as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        />
      );
    }
    return <SurfaceCard ref={ref} {...props} />;
  },
);
Card.displayName = "Card";

export { Card };
