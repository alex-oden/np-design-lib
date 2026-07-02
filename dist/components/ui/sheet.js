import { cn } from "../../lib/utils.js";
import * as React from "react";
import { X } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import * as DialogPrimitive from "@radix-ui/react-dialog";
//#region src/components/ui/sheet.tsx
/**
* Sheet — a Dialog that slides in from an edge (drawer). Built on Radix
* Dialog for focus-trap, Esc-to-close and scroll-lock.
*/
var Sheet = DialogPrimitive.Root;
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetPortal = DialogPrimitive.Portal;
var SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-[hsl(230_60%_4%/0.66)] backdrop-blur-[3px]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 border-border bg-popover/95 p-6 shadow-card glass transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-[min(360px,86vw)] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
		right: "inset-y-0 right-0 h-full w-[min(360px,86vw)] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-md p-1 text-muted-foreground opacity-70 transition hover:bg-white/[0.06] hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none",
		children: [/* @__PURE__ */ jsx(X, { className: "size-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogPrimitive.Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col gap-2", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-base font-semibold", className),
	...props
}));
SheetTitle.displayName = DialogPrimitive.Title.displayName;
var SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-[13.5px] leading-relaxed text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger };

//# sourceMappingURL=sheet.js.map