import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
//#region src/components/ui/tooltip.tsx
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Content, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-lg border border-border bg-popover/95 px-3 py-1.5 text-xs text-popover-foreground shadow-card glass", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className),
	...props
}) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
//#endregion
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };

//# sourceMappingURL=tooltip.js.map