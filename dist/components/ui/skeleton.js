import { cn } from "../../lib/utils.js";
import "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/ui/skeleton.tsx
/** Skeleton — shimmer placeholder for loading content. */
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("rounded-md animate-np-shimmer [background:linear-gradient(100deg,hsl(230_24%_16%)_30%,hsl(230_20%_22%)_50%,hsl(230_24%_16%)_70%)] [background-size:200%_100%]", className),
		...props
	});
}
//#endregion
export { Skeleton };

//# sourceMappingURL=skeleton.js.map