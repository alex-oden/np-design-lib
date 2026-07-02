import { cn } from "../../lib/utils.js";
import * as React from "react";
import { CircleCheck, Info, TriangleAlert, X } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
//#region src/components/ui/toast.tsx
/**
* Toast — presentational transient notification. Pair with your app's
* toast manager (e.g. `sonner`, which Lovable scaffolds by default) or
* render directly. `variant` sets the leading icon + accent.
*/
var toastVariants = cva("flex items-center gap-3 rounded-[calc(var(--radius)-2px)] border border-border bg-[hsl(230_45%_9%/0.92)] p-3.5 shadow-card glass animate-np-toast-in min-w-[280px]", {
	variants: { variant: {
		default: "[&>svg]:text-foreground",
		success: "[&>svg]:text-success",
		info: "[&>svg]:text-info",
		warning: "[&>svg]:text-warning",
		destructive: "[&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var ICONS = {
	default: Info,
	success: CircleCheck,
	info: Info,
	warning: TriangleAlert,
	destructive: TriangleAlert
};
var Toast = React.forwardRef(({ className, variant = "default", onDismiss, action, children, ...props }, ref) => {
	const Icon = ICONS[variant ?? "default"];
	return /* @__PURE__ */ jsxs("div", {
		ref,
		role: "status",
		className: cn(toastVariants({ variant }), className),
		...props,
		children: [
			/* @__PURE__ */ jsx(Icon, { className: "size-[18px] shrink-0" }),
			/* @__PURE__ */ jsx("span", {
				className: "flex-1 text-[13px] text-foreground",
				children
			}),
			action,
			onDismiss && /* @__PURE__ */ jsx("button", {
				onClick: onDismiss,
				className: "shrink-0 rounded p-0.5 text-muted-foreground transition hover:text-foreground",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ jsx(X, { className: "size-4" })
			})
		]
	});
});
Toast.displayName = "Toast";
//#endregion
export { Toast, toastVariants };

//# sourceMappingURL=toast.js.map