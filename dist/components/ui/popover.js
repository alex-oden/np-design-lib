import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import * as PopoverPrimitive from "@radix-ui/react-popover";
//#region src/components/ui/popover.tsx
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(PopoverPrimitive.Content, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-60 rounded-[calc(var(--radius)-2px)] border border-border bg-popover/95 p-4 text-popover-foreground shadow-card glass outline-none", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className),
	...props
}) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
//#endregion
export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };

//# sourceMappingURL=popover.js.map