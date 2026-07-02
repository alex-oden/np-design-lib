import { cn } from "../../lib/utils.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
//#region src/components/ui/badge.tsx
/**
* Badge — compact status signal in monospace.
* variant: default (soft) · solid (brand gradient) · success · warning · destructive · info
*/
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium leading-tight tracking-[0.04em]", {
	variants: { variant: {
		default: "border-border/60 bg-white/[0.04] text-muted-foreground",
		solid: "border-brand-border bg-brand-gradient [background-clip:padding-box] text-primary-foreground",
		success: "border-success/35 bg-success/15 text-success",
		warning: "border-warning/35 bg-warning/15 text-warning",
		destructive: "border-destructive/35 bg-destructive/15 text-destructive",
		info: "border-info/35 bg-info/15 text-info"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, dot, live, children, ...props }) {
	return /* @__PURE__ */ jsxs("span", {
		className: cn(badgeVariants({ variant }), className),
		...props,
		children: [dot && /* @__PURE__ */ jsx("span", { className: cn("size-1.5 rounded-full bg-current", live && "animate-np-pulse") }), children]
	});
}
/** Count — numeric pill for notification badges. */
function Count({ className, children, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("inline-grid h-5 min-w-5 place-items-center rounded-full bg-brand-gradient px-1.5 font-mono text-[11px] font-medium text-primary-foreground", className),
		...props,
		children
	});
}
//#endregion
export { Badge, Count, badgeVariants };

//# sourceMappingURL=badge.js.map