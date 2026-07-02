import { cn } from "../../lib/utils.js";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ui/banner.tsx
var Banner = React.forwardRef(({ className, title, description, children, ...props }, ref) => /* @__PURE__ */ jsxs("div", {
	ref,
	className: cn("relative flex items-center gap-4 overflow-hidden rounded-[calc(var(--radius)-2px)] border border-border/60 bg-card/70 p-4 pl-5", "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-brand-gradient", className),
	...props,
	children: [/* @__PURE__ */ jsxs("div", {
		className: "flex-1",
		children: [title && /* @__PURE__ */ jsx("p", {
			className: "mb-0.5 text-sm font-semibold text-foreground",
			children: title
		}), description && /* @__PURE__ */ jsx("p", {
			className: "text-[13px] leading-relaxed text-muted-foreground",
			children: description
		})]
	}), children]
}));
Banner.displayName = "Banner";
//#endregion
export { Banner };

//# sourceMappingURL=banner.js.map