import * as React from "react";
/**
 * BorderGlow — an interactive card whose edges light up as the cursor
 * approaches them. Adapted from React Bits (reactbits.dev) and themed
 * to the NeosPower brand gradient.
 *
 * The effect tracks the pointer's angle and proximity to the nearest
 * edge, feeding two CSS custom properties (--cursor-angle,
 * --edge-proximity) that reveal a mesh-gradient border + outer halo.
 *
 *   <BorderGlow glowColor="248 90 70" colors={["#3657FF","#FB00C8","#22D3EE"]}>
 *     <div className="p-6">…</div>
 *   </BorderGlow>
 */
export interface BorderGlowProps extends React.HTMLAttributes<HTMLDivElement> {
    /** how near an edge (0–100) the glow starts appearing */
    edgeSensitivity?: number;
    /** halo hue as "H S L" (space-separated) */
    glowColor?: string;
    /** inner card fill */
    backgroundColor?: string;
    borderRadius?: number;
    glowRadius?: number;
    glowIntensity?: number;
    coneSpread?: number;
    /** mesh-gradient border colors (any CSS colors) */
    colors?: string[];
    fillOpacity?: number;
    /** play a one-off intro sweep on mount */
    animated?: boolean;
}
declare const BorderGlow: React.ForwardRefExoticComponent<BorderGlowProps & React.RefAttributes<HTMLDivElement>>;
export { BorderGlow };
//# sourceMappingURL=border-glow.d.ts.map