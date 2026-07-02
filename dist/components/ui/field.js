import { cn } from "../../lib/utils.js";
import { Label } from "./label.js";
import * as React from "react";
import { CircleCheck, TriangleAlert } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ui/field.tsx
var Field = React.forwardRef(({ className, label, htmlFor, required, hint, error, success, children, ...props }, ref) => /* @__PURE__ */ jsxs("div", {
	ref,
	className: cn("flex flex-col gap-1.5", className),
	...props,
	children: [
		label && /* @__PURE__ */ jsx(Label, {
			htmlFor,
			required,
			children: label
		}),
		children,
		hint && !error && /* @__PURE__ */ jsx("p", {
			className: "text-[11.5px] leading-snug text-muted-foreground/70",
			children: hint
		}),
		error && /* @__PURE__ */ jsxs("p", {
			className: "flex items-center gap-1.5 text-[11.5px] leading-snug text-destructive",
			children: [/* @__PURE__ */ jsx(TriangleAlert, { className: "size-3 shrink-0" }), error]
		}),
		success && !error && /* @__PURE__ */ jsxs("p", {
			className: "flex items-center gap-1.5 text-[11.5px] leading-snug text-success",
			children: [/* @__PURE__ */ jsx(CircleCheck, { className: "size-3 shrink-0" }), success]
		})
	]
}));
Field.displayName = "Field";
//#endregion
export { Field };

//# sourceMappingURL=field.js.map