import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/ui/card.tsx
var Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("rounded-[var(--radius)] border border-border/60 text-card-foreground", variant === "default" && "bg-card/60", variant === "glass" && "glass bg-card/70 shadow-card", variant === "interactive" && "bg-card/60 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-border hover:shadow-glow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("flex flex-col gap-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("h3", {
	ref,
	className: cn("text-[17px] font-semibold leading-tight tracking-[-0.015em]", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", {
	ref,
	className: cn("text-[13px] leading-relaxed text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("flex items-center gap-3 p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
//#endregion
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };

//# sourceMappingURL=card.js.map