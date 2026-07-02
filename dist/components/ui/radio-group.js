import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
//#region src/components/ui/radio-group.tsx
var RadioGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, {
	ref,
	className: cn("grid gap-3", className),
	...props
}));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
/**
* RadioGroupItem — brand-gradient fill + white dot when selected.
* Opaque border keeps the edge crisp over the gradient.
*/
var RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadioGroupPrimitive.Item, {
	ref,
	className: cn("size-5 shrink-0 rounded-full border-[1.5px] border-[hsl(var(--border))] bg-secondary [background-clip:padding-box]", "transition-[background-color,border-color,box-shadow] duration-150 outline-none", "hover:border-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-45", "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient", className),
	...props,
	children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, {
		className: "grid size-full place-items-center",
		children: /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-white" })
	})
}));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
//#endregion
export { RadioGroup, RadioGroupItem };

//# sourceMappingURL=radio-group.js.map