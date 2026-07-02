import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import * as LabelPrimitive from "@radix-ui/react-label";
//#region src/components/ui/label.tsx
var Label = React.forwardRef(({ className, required, children, ...props }, ref) => /* @__PURE__ */ jsxs(LabelPrimitive.Root, {
	ref,
	className: cn("flex items-center gap-1.5 text-[12.5px] font-medium text-muted-foreground", "peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
	...props,
	children: [children, required && /* @__PURE__ */ jsx("span", {
		className: "text-destructive",
		children: "*"
	})]
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
export { Label };

//# sourceMappingURL=label.js.map