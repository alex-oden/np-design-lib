import { cn } from "../../lib/utils.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ui/spinner.tsx
function Spinner({ className, brand, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		role: "status",
		"aria-label": "Loading",
		className: cn("inline-block size-6 animate-np-spin rounded-full border-[2.5px]", brand ? "border-transparent border-t-brand-start border-r-brand-end" : "border-white/15 border-t-brand-start", className),
		...props
	});
}
/** Dots — three bouncing dots for inline / button loading. */
function Dots({ className, ...props }) {
	return /* @__PURE__ */ jsxs("span", {
		className: cn("inline-flex gap-1.5", className),
		...props,
		children: [
			/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-brand-gradient animate-np-bounce" }),
			/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-brand-gradient animate-np-bounce [animation-delay:0.15s]" }),
			/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-brand-gradient animate-np-bounce [animation-delay:0.3s]" })
		]
	});
}
//#endregion
export { Dots, Spinner };

//# sourceMappingURL=spinner.js.map