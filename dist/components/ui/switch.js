import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import * as SwitchPrimitive from "@radix-ui/react-switch";
//#region src/components/ui/switch.tsx
/**
* Switch — brand-gradient track when on, sliding white thumb.
* Opaque border on the checked track keeps the edge crisp.
*/
var Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SwitchPrimitive.Root, {
	ref,
	className: cn("peer inline-flex h-[26px] w-11 shrink-0 cursor-pointer items-center rounded-full border p-0.5 [background-clip:padding-box]", "transition-[background-color,border-color,box-shadow] duration-200 outline-none", "border-border/60 bg-[hsl(230_24%_22%)]", "focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-45", "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient data-[state=unchecked]:hover:border-border", className),
	...props,
	children: /* @__PURE__ */ jsx(SwitchPrimitive.Thumb, { className: cn("pointer-events-none block size-[18px] rounded-full bg-muted-foreground shadow-sm transition-transform duration-200", "data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = SwitchPrimitive.Root.displayName;
//#endregion
export { Switch };

//# sourceMappingURL=switch.js.map