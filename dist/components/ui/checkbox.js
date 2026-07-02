import { cn } from "../../lib/utils.js";
import * as React from "react";
import { Check } from "lucide-react";
import { jsx } from "react/jsx-runtime";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
//#region src/components/ui/checkbox.tsx
/**
* Checkbox — brand-gradient fill when checked. Uses an OPAQUE border
* (--brand-border) so the gradient never bleeds past the edge.
*/
var Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
	ref,
	className: cn("peer size-5 shrink-0 rounded-md border-[1.5px] border-[hsl(var(--border))] bg-secondary [background-clip:padding-box]", "transition-[background-color,border-color,box-shadow] duration-150 outline-none", "hover:border-muted-foreground/70", "focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-45", "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
		className: cn("grid place-items-center text-current"),
		children: /* @__PURE__ */ jsx(Check, { className: "size-3 stroke-[3]" })
	})
}));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
//#endregion
export { Checkbox };

//# sourceMappingURL=checkbox.js.map