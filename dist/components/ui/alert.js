import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
//#region src/components/ui/alert.tsx
/**
* Alert — inline message. Pair the icon slot with an AlertTitle +
* AlertDescription. variant: info · success · warning · destructive
*/
var alertVariants = cva("relative flex gap-3 rounded-[calc(var(--radius)-2px)] border p-4 [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:translate-y-px", {
	variants: { variant: {
		info: "border-info/40 bg-info/[0.08] [&>svg]:text-info",
		success: "border-success/40 bg-success/[0.08] [&>svg]:text-success",
		warning: "border-warning/40 bg-warning/[0.08] [&>svg]:text-warning",
		destructive: "border-destructive/40 bg-destructive/[0.08] [&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "info" }
});
var Alert = React.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	role: "alert",
	className: cn(alertVariants({ variant }), className),
	...props
}));
Alert.displayName = "Alert";
var AlertTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", {
	ref,
	className: cn("mb-0.5 text-sm font-semibold text-foreground", className),
	...props
}));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", {
	ref,
	className: cn("text-[13px] leading-relaxed text-muted-foreground", className),
	...props
}));
AlertDescription.displayName = "AlertDescription";
//#endregion
export { Alert, AlertDescription, AlertTitle, alertVariants };

//# sourceMappingURL=alert.js.map