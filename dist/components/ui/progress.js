import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import * as ProgressPrimitive from "@radix-ui/react-progress";
//#region src/components/ui/progress.tsx
var Progress = React.forwardRef(({ className, value, indeterminate, ...props }, ref) => /* @__PURE__ */ jsx(ProgressPrimitive.Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-[hsl(230_24%_20%)]", className),
	value: indeterminate ? void 0 : value,
	...props,
	children: /* @__PURE__ */ jsx(ProgressPrimitive.Indicator, {
		className: cn("h-full rounded-full bg-brand-gradient transition-[width] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]", indeterminate && "w-2/5 animate-np-indeterminate"),
		style: indeterminate ? void 0 : { width: `${value ?? 0}%` }
	})
}));
Progress.displayName = ProgressPrimitive.Root.displayName;
//#endregion
export { Progress };

//# sourceMappingURL=progress.js.map