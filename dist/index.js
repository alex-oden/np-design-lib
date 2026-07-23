import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AlertTriangle, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, ChevronDownIcon, ChevronLeft, ChevronLeftIcon, ChevronRight, ChevronRightIcon, Circle, CircleCheck, GripVertical, Info, Loader2, Minus, MoreHorizontal, PanelLeft, Search, TriangleAlert, X, XCircle } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import useEmblaCarousel from "embla-carousel-react";
import * as RechartsPrimitive from "recharts";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Command as Command$1 } from "cmdk";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Drawer as Drawer$1 } from "vaul";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { OTPInput, OTPInputContext } from "input-otp";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Group, Panel, Separator as Separator$1 } from "react-resizable-panels";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Toaster as Toaster$1 } from "sonner";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as TogglePrimitive from "@radix-ui/react-toggle";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/components/ui/button.tsx
/**
* Button — the primary action element.
*
* variant: default (brand gradient) · secondary · ghost · destructive · outline · inverse · link
* size:    sm · default · lg · xl · icon
* loading: shows a spinner and disables the button
*/
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-sm font-medium tracking-[-0.01em] transition-[background-position,background-color,border-color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-px select-none", {
	variants: {
		variant: {
			default: "text-primary-foreground bg-brand-gradient [background-size:150%_150%] [background-position:0%_50%] hover:[background-position:100%_50%] shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),inset_0_-1px_0_hsl(0_0%_0%/0.25),0_10px_30px_-8px_hsl(var(--brand-start)/0.55),0_18px_50px_-12px_hsl(var(--brand-end)/0.45)] hover:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.45),inset_0_-1px_0_hsl(0_0%_0%/0.28),0_14px_38px_-8px_hsl(var(--brand-start)/0.7),0_24px_60px_-12px_hsl(var(--brand-end)/0.6)] hover:-translate-y-px active:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.25),inset_0_-1px_0_hsl(0_0%_0%/0.2),0_6px_18px_-8px_hsl(var(--brand-start)/0.5)] duration-500",
			secondary: "bg-white/[0.04] text-foreground border border-border/60 hover:bg-white/[0.08] hover:border-border",
			ghost: "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
			destructive: "text-destructive bg-destructive/15 border border-destructive/40 hover:bg-destructive/25 hover:border-destructive/60",
			outline: "border border-border text-foreground hover:bg-white/[0.05] hover:border-border",
			inverse: "bg-white/[0.04] text-foreground border border-foreground/80 hover:bg-white/[0.08] hover:border-foreground hover:shadow-[0_0_24px_-8px_hsl(var(--foreground)/0.25)] hover:-translate-y-px",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			sm: "h-[30px] px-3 text-xs rounded-[calc(var(--radius)-4px)]",
			default: "h-[38px] px-4",
			lg: "h-[46px] px-[22px] text-sm",
			xl: "h-[52px] px-[26px] text-[15px] rounded-[calc(var(--radius)+1px)]",
			icon: "h-[38px] w-[38px] p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	const content = asChild ? React.cloneElement(children, void 0, /* @__PURE__ */ jsxs(Fragment, { children: [loading && /* @__PURE__ */ jsx(Loader2, { className: "animate-np-spin" }), children.props.children] })) : /* @__PURE__ */ jsxs(Fragment, { children: [loading && /* @__PURE__ */ jsx(Loader2, { className: "animate-np-spin" }), children] });
	return /* @__PURE__ */ jsx(Comp, {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		disabled: disabled || loading,
		"data-loading": loading || void 0,
		...props,
		children: content
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/alert-dialog.tsx
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Overlay, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [/* @__PURE__ */ jsx(AlertDialogOverlay, {}), /* @__PURE__ */ jsx(AlertDialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
//#endregion
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
//#region src/components/ui/aspect-ratio.tsx
var AspectRatio = AspectRatioPrimitive.Root;
//#endregion
//#region src/components/ui/avatar.tsx
var Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Root, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Fallback, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
//#endregion
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
//#region src/components/ui/border-glow.tsx
var GRADIENT_POSITIONS = [
	"80% 55%",
	"69% 34%",
	"8% 6%",
	"41% 38%",
	"86% 85%",
	"82% 18%",
	"51% 4%"
];
var GRADIENT_KEYS = [
	"--gradient-one",
	"--gradient-two",
	"--gradient-three",
	"--gradient-four",
	"--gradient-five",
	"--gradient-six",
	"--gradient-seven"
];
var COLOR_MAP = [
	0,
	1,
	2,
	0,
	1,
	2,
	1
];
function parseHSL(hsl) {
	const m = hsl.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
	if (!m) return {
		h: 248,
		s: 90,
		l: 70
	};
	return {
		h: +m[1],
		s: +m[2],
		l: +m[3]
	};
}
function buildGlowVars(glowColor, intensity) {
	const { h, s, l } = parseHSL(glowColor);
	const base = `${h}deg ${s}% ${l}%`;
	const steps = [
		["", 100],
		["-60", 60],
		["-50", 50],
		["-40", 40],
		["-30", 30],
		["-20", 20],
		["-10", 10]
	];
	const out = {};
	for (const [suffix, op] of steps) out[`--glow-color${suffix}`] = `hsl(${base} / ${Math.min(op * intensity, 100)}%)`;
	return out;
}
function buildGradientVars(colors) {
	const out = {};
	for (let i = 0; i < 7; i++) {
		const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
		out[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`;
	}
	out["--gradient-base"] = `linear-gradient(${colors[0]} 0 100%)`;
	return out;
}
var easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
var easeInCubic = (x) => x * x * x;
function animateValue(opts) {
	const { start = 0, end = 100, duration = 1e3, delay = 0, ease = easeOutCubic, onUpdate, onEnd } = opts;
	const t0 = performance.now() + delay;
	const tick = () => {
		const t = Math.min((performance.now() - t0) / duration, 1);
		onUpdate(start + (end - start) * ease(t));
		if (t < 1) requestAnimationFrame(tick);
		else onEnd?.();
	};
	setTimeout(() => requestAnimationFrame(tick), delay);
}
var BorderGlow = React.forwardRef(({ className, style, children, edgeSensitivity = 30, glowColor = "248 90 70", backgroundColor = "hsl(230 33% 12%)", borderRadius = 18, glowRadius = 40, glowIntensity = 1, coneSpread = 25, colors = [
	"#3657FF",
	"#FB00C8",
	"#22D3EE"
], fillOpacity = .5, animated = false, ...props }, forwardedRef) => {
	const cardRef = React.useRef(null);
	const setRefs = (node) => {
		cardRef.current = node;
		if (typeof forwardedRef === "function") forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	};
	const handlePointerMove = React.useCallback((e) => {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const cx = rect.width / 2;
		const cy = rect.height / 2;
		const dx = e.clientX - rect.left - cx;
		const dy = e.clientY - rect.top - cy;
		const kx = dx !== 0 ? cx / Math.abs(dx) : Infinity;
		const ky = dy !== 0 ? cy / Math.abs(dy) : Infinity;
		const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
		let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
		if (angle < 0) angle += 360;
		card.style.setProperty("--edge-proximity", (edge * 100).toFixed(3));
		card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
	}, []);
	React.useEffect(() => {
		if (!animated) return;
		const card = cardRef.current;
		if (!card) return;
		const a0 = 110, a1 = 465;
		card.classList.add("np-sweep");
		card.style.setProperty("--cursor-angle", `${a0}deg`);
		animateValue({
			duration: 500,
			onUpdate: (v) => card.style.setProperty("--edge-proximity", String(v))
		});
		animateValue({
			ease: easeInCubic,
			duration: 1500,
			end: 50,
			onUpdate: (v) => card.style.setProperty("--cursor-angle", `${(a1 - a0) * (v / 100) + a0}deg`)
		});
		animateValue({
			ease: easeOutCubic,
			delay: 1500,
			duration: 2250,
			start: 50,
			end: 100,
			onUpdate: (v) => card.style.setProperty("--cursor-angle", `${(a1 - a0) * (v / 100) + a0}deg`)
		});
		animateValue({
			ease: easeInCubic,
			delay: 2500,
			duration: 1500,
			start: 100,
			end: 0,
			onUpdate: (v) => card.style.setProperty("--edge-proximity", String(v)),
			onEnd: () => card.classList.remove("np-sweep")
		});
	}, [animated]);
	return /* @__PURE__ */ jsxs("div", {
		ref: setRefs,
		onPointerMove: handlePointerMove,
		className: cn("np-border-glow", className),
		style: {
			"--card-bg": backgroundColor,
			"--edge-sensitivity": edgeSensitivity,
			"--border-radius": `${borderRadius}px`,
			"--glow-padding": `${glowRadius}px`,
			"--cone-spread": coneSpread,
			"--fill-opacity": fillOpacity,
			...buildGlowVars(glowColor, glowIntensity),
			...buildGradientVars(colors),
			...style
		},
		...props,
		children: [/* @__PURE__ */ jsx("span", { className: "np-edge-light" }), /* @__PURE__ */ jsx("div", {
			className: "np-border-glow-inner",
			children
		})]
	});
});
BorderGlow.displayName = "BorderGlow";
//#endregion
//#region src/components/ui/breadcrumb.tsx
var Breadcrumb = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("nav", {
	ref,
	"aria-label": "breadcrumb",
	...props
}));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("ol", {
	ref,
	className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className),
	...props
}));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", {
	ref,
	className: cn("inline-flex items-center gap-1.5", className),
	...props
}));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "a", {
		ref,
		className: cn("transition-colors hover:text-foreground", className),
		...props
	});
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("span", {
	ref,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: cn("font-normal text-foreground", className),
	...props
}));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsx("li", {
	role: "presentation",
	"aria-hidden": "true",
	className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
	...props,
	children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxs("span", {
	role: "presentation",
	"aria-hidden": "true",
	className: cn("flex h-9 w-9 items-center justify-center", className),
	...props,
	children: [/* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
		className: "sr-only",
		children: "More"
	})]
});
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
//#endregion
//#region src/components/ui/calendar.tsx
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ jsx(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ jsx("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ jsx(ChevronLeftIcon, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ jsx(ChevronRightIcon, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ jsx(ChevronDownIcon, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ jsx("td", {
					...props,
					children: /* @__PURE__ */ jsx("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = React.useRef(null);
	React.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ jsx(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
//#endregion
//#region src/components/ui/glass-card.tsx
var GlassCard = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("glass relative overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/70 text-card-foreground shadow-card", "transition-[border-color,box-shadow] duration-300 ease-out", "hover:border-border/80 hover:shadow-[0_20px_48px_-12px_hsl(var(--brand-start)/.22),0_0_0_1px_hsl(var(--border)/.7)]", "motion-reduce:transition-none motion-reduce:hover:shadow-none", className),
	...props
}));
GlassCard.displayName = "GlassCard";
//#endregion
//#region src/components/ui/interactive-card.tsx
var InteractiveCard = React.forwardRef(({ className, type = "button", ...props }, ref) => /* @__PURE__ */ jsx("button", {
	ref,
	type,
	className: cn("group relative block w-full cursor-pointer overflow-hidden rounded-[var(--radius)]", "border border-border/60 bg-card/60 text-left text-card-foreground", "shadow-[0_1px_2px_-1px_hsl(var(--brand-start)/.08)]", "transition-[transform,box-shadow,border-color,background-color] duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]", "will-change-[transform,box-shadow]", "hover:-translate-y-1 hover:border-border hover:shadow-[0_14px_30px_-10px_hsl(var(--brand-start)/.20),0_2px_6px_-2px_hsl(var(--brand-start)/.10),0_0_0_1px_hsl(var(--border)/.7)]", "active:duration-150 active:translate-y-0 active:scale-[0.995] active:shadow-[0_4px_12px_-4px_hsl(var(--brand-start)/.12),0_0_0_1px_hsl(var(--border)/.6)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:active:scale-100", className),
	...props
}));
InteractiveCard.displayName = "InteractiveCard";
//#endregion
//#region src/components/ui/surface-card.tsx
var SurfaceCard = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("rounded-[var(--radius)] border border-border/60 bg-card/60 text-card-foreground", className),
	...props
}));
SurfaceCard.displayName = "SurfaceCard";
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
//#region src/components/ui/card.tsx
var Card = React.forwardRef(({ variant = "default", ...props }, ref) => {
	if (variant === "glass") return /* @__PURE__ */ jsx(GlassCard, {
		ref,
		...props
	});
	if (variant === "interactive") return /* @__PURE__ */ jsx(InteractiveCard, {
		ref,
		...props
	});
	return /* @__PURE__ */ jsx(SurfaceCard, {
		ref,
		...props
	});
});
Card.displayName = "Card";
//#endregion
//#region src/components/ui/metric-card.tsx
var trendClass = {
	up: "text-success",
	down: "text-destructive",
	flat: "text-muted-foreground"
};
var trendIcon = {
	up: ArrowUpRight,
	down: ArrowDownRight,
	flat: Minus
};
var MetricCard = React.forwardRef(({ className, label, value, unit, delta, trend, icon, ...props }, ref) => {
	const TrendIcon = trend ? trendIcon[trend] : null;
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: cn("rounded-[var(--radius)] border border-border/60 bg-card/60 p-5 text-card-foreground", "transition-np-card will-change-transform", "hover:-translate-y-1 hover:border-border/80 hover:bg-card/70 hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.14),0_0_0_1px_hsl(var(--border)/.6)]", "active:translate-y-0 active:scale-[0.997]", "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:hover:bg-card/60", className),
		...props,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground",
					children: label
				}), icon && /* @__PURE__ */ jsx("div", {
					className: "text-muted-foreground",
					children: icon
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-3 flex items-baseline gap-1.5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-mono text-3xl tabular-nums text-foreground",
					children: value
				}), unit && /* @__PURE__ */ jsx("span", {
					className: "font-mono text-sm text-muted-foreground",
					children: unit
				})]
			}),
			delta && /* @__PURE__ */ jsxs("div", {
				className: cn("mt-2 inline-flex items-center gap-1 font-mono text-[12px] tabular-nums", trend ? trendClass[trend] : "text-muted-foreground"),
				children: [TrendIcon && /* @__PURE__ */ jsx(TrendIcon, { className: "size-3.5" }), delta]
			})
		]
	});
});
MetricCard.displayName = "MetricCard";
//#endregion
//#region src/components/ui/stat-card.tsx
var StatCard = React.forwardRef(({ className, items, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("grid gap-3 rounded-[var(--radius)] border border-border/60 bg-card/60 p-4 text-card-foreground", "transition-np-card will-change-transform", "hover:-translate-y-0.5 hover:border-border/80 hover:bg-card/70 hover:shadow-[0_8px_20px_-6px_hsl(var(--brand-start)/.12),0_0_0_1px_hsl(var(--border)/.6)]", "active:translate-y-0 active:scale-[0.997]", "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none", `grid-cols-${Math.min(items.length, 4)}`, className),
	style: { gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` },
	...props,
	children: items.map((it, i) => /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border/60 bg-white/[0.02] px-3 py-2 transition-[border-color,background-color] duration-300 hover:border-border/80 hover:bg-white/[0.04]",
		children: [/* @__PURE__ */ jsx("p", {
			className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
			children: it.label
		}), /* @__PURE__ */ jsxs("p", {
			className: "font-mono text-[15px] tabular-nums text-foreground",
			children: [it.value, it.unit && /* @__PURE__ */ jsx("span", {
				className: "ml-1 text-muted-foreground",
				children: it.unit
			})]
		})]
	}, i))
}));
StatCard.displayName = "StatCard";
//#endregion
//#region src/components/ui/feature-card.tsx
var FeatureCard = React.forwardRef(({ className, icon, title, description, children, ...props }, ref) => /* @__PURE__ */ jsxs("div", {
	ref,
	className: cn("group relative isolate overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/60 p-6 text-card-foreground", "transition-np-card will-change-transform", "hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.14),0_0_0_1px_hsl(var(--border)/.6)]", "active:translate-y-0 active:scale-[0.997]", "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none", className),
	...props,
	children: [
		/* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			className: cn("pointer-events-none absolute inset-0 -z-10 opacity-100", "transition-opacity duration-[500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]", "motion-reduce:transition-none"),
			style: { background: "radial-gradient(120% 90% at 100% 0%, hsl(var(--brand-end) / 0.18), transparent 60%), linear-gradient(160deg, hsl(var(--brand-start) / 0.10), transparent 55%)" }
		}),
		/* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			className: cn("pointer-events-none absolute inset-0 -z-10 opacity-0", "transition-opacity duration-[500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]", "group-hover:opacity-100", "motion-reduce:transition-none"),
			style: { background: "radial-gradient(140% 100% at 100% 0%, hsl(var(--brand-end) / 0.32), transparent 60%), radial-gradient(120% 90% at 0% 100%, hsl(var(--brand-start) / 0.22), transparent 60%)" }
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "relative z-10",
			children: [
				icon && /* @__PURE__ */ jsx("div", {
					className: "mb-4 grid size-10 place-items-center rounded-md border border-border/60 bg-secondary text-foreground transition-[border-color,background-color] duration-300 group-hover:border-border/80 group-hover:bg-secondary/80",
					children: icon
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-lg font-semibold tracking-[-0.015em] text-foreground",
					children: title
				}),
				description && /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] leading-relaxed text-muted-foreground",
					children: description
				}),
				children
			]
		})
	]
}));
FeatureCard.displayName = "FeatureCard";
//#endregion
//#region src/components/ui/media-card.tsx
var MediaCard = React.forwardRef(({ className, media, aspectClassName = "aspect-video", children, ...props }, ref) => /* @__PURE__ */ jsxs("div", {
	ref,
	className: cn("overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/60 text-card-foreground", "transition-[border-color,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]", "hover:border-border/80 hover:shadow-[0_12px_28px_-8px_hsl(var(--brand-start)/.14),0_0_0_1px_hsl(var(--border)/.6)]", className),
	...props,
	children: [/* @__PURE__ */ jsx("div", {
		className: cn("w-full overflow-hidden bg-muted", aspectClassName),
		children: media
	}), children]
}));
MediaCard.displayName = "MediaCard";
//#endregion
//#region src/components/ui/alert-card.tsx
var toneMap = {
	info: {
		edge: "before:bg-primary",
		icon: Info,
		text: "text-primary"
	},
	success: {
		edge: "before:bg-success",
		icon: CheckCircle2,
		text: "text-success"
	},
	warning: {
		edge: "before:bg-warning",
		icon: AlertTriangle,
		text: "text-warning"
	},
	danger: {
		edge: "before:bg-destructive",
		icon: XCircle,
		text: "text-destructive"
	}
};
var AlertCard = React.forwardRef(({ className, tone = "info", title, icon, children, ...props }, ref) => {
	const t = toneMap[tone];
	const Icon = t.icon;
	return /* @__PURE__ */ jsx("div", {
		ref,
		role: "status",
		className: cn("relative overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card/60 p-5 pl-6 text-card-foreground", "before:absolute before:inset-y-0 before:left-0 before:w-1", "transition-[border-color,background-color,transform] duration-300 ease-[cubic-bezier(.23,1,.32,1)]", "hover:border-border/80 hover:bg-card/70", "active:scale-[0.997]", "motion-reduce:transition-none", t.edge, className),
		...props,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ jsx("div", {
				className: cn("mt-0.5 shrink-0", t.text),
				children: icon ?? /* @__PURE__ */ jsx(Icon, { className: "size-4" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [title && /* @__PURE__ */ jsx("p", {
					className: "text-[14px] font-semibold text-foreground",
					children: title
				}), children && /* @__PURE__ */ jsx("div", {
					className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
					children
				})]
			})]
		})
	});
});
AlertCard.displayName = "AlertCard";
//#endregion
//#region src/components/ui/glow-card.tsx
var presets = {
	brand: {
		colors: [
			"#3657FF",
			"#FB00C8",
			"#22D3EE"
		],
		glowColor: "248 90 70"
	},
	violet: {
		colors: [
			"#7C5CFF",
			"#3657FF",
			"#FB00C8"
		],
		glowColor: "268 88 70"
	},
	success: {
		colors: [
			"#34E29B",
			"#22D3EE",
			"#3657FF"
		],
		glowColor: "150 84 55"
	},
	danger: {
		colors: [
			"#FF5C3A",
			"#FB00C8",
			"#7C5CFF"
		],
		glowColor: "12 96 60"
	},
	info: {
		colors: [
			"#22D3EE",
			"#3657FF",
			"#7C5CFF"
		],
		glowColor: "188 92 60"
	}
};
var GlowCard = React.forwardRef(({ preset = "brand", animated = true, ...props }, ref) => {
	const p = presets[preset];
	return /* @__PURE__ */ jsx(BorderGlow, {
		ref,
		colors: p.colors,
		glowColor: p.glowColor,
		animated,
		...props
	});
});
GlowCard.displayName = "GlowCard";
//#endregion
//#region src/components/ui/minimal-card.tsx
var TREND_GLYPH = {
	up: "↑",
	down: "↓",
	flat: "→"
};
/**
* MinimalCard — sharp-cornered KPI cell. Designed to sit inside a
* MinimalCardRow, where the row owns the outer border / hairline dividers.
* Standalone use is fine too; then pass a className with your own border.
*/
var MinimalCard = React.forwardRef(({ eyebrow, value, description, trend, tone = "brand", className, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: cn("flex h-full flex-col justify-between gap-8 p-6 md:p-8", className),
		...props,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [eyebrow && /* @__PURE__ */ jsxs("p", {
					className: "font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground",
					children: [trend && /* @__PURE__ */ jsx("span", {
						className: "mr-1",
						children: TREND_GLYPH[trend]
					}), eyebrow]
				}), value !== void 0 && /* @__PURE__ */ jsx("p", {
					className: cn("font-semibold tabular-nums leading-none tracking-[-0.03em]", "text-4xl md:text-5xl", tone === "brand" ? "text-brand-end" : "text-foreground"),
					children: value
				})]
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: "text-[13px] leading-relaxed text-muted-foreground",
				children: description
			}),
			children
		]
	});
});
MinimalCard.displayName = "MinimalCard";
//#endregion
//#region src/components/ui/minimal-card-row.tsx
var COL_CLASSES = {
	2: "md:grid-cols-2",
	3: "md:grid-cols-3",
	4: "md:grid-cols-2 lg:grid-cols-4",
	5: "md:grid-cols-2 lg:grid-cols-5"
};
/**
* MinimalCardRow — arranges MinimalCard / ProcessCard children as a single
* row of cells separated by hairline dividers (vertical on md+, horizontal
* when stacked on small screens).
*/
var MinimalCardRow = React.forwardRef(({ bleed = "contained", columns = 4, className, children, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn("grid grid-cols-1", COL_CLASSES[columns], "divide-y divide-border/60", "md:divide-y-0 md:divide-x md:divide-border/60", bleed === "contained" ? "rounded-[var(--radius)] border border-border/60 bg-card/50 overflow-hidden" : "border-y border-border/60", className),
		...props,
		children
	});
});
MinimalCardRow.displayName = "MinimalCardRow";
//#endregion
//#region src/components/ui/process-card.tsx
var pad = (n) => n.toString().padStart(2, "0");
var ProcessCard = React.forwardRef(({ index, total, title, description, meta, className, ...props }, ref) => {
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: cn("flex h-full flex-col justify-between gap-8 p-6 md:p-8", className),
		...props,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ jsxs("p", {
					className: "font-mono text-[11px] tracking-[0.16em]",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-brand-end",
						children: pad(index)
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-muted-foreground/60",
						children: [" / ", pad(total)]
					})]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-lg font-semibold tracking-[-0.01em] text-foreground",
					children: title
				}),
				description && /* @__PURE__ */ jsx("p", {
					className: "text-[13px] leading-relaxed text-muted-foreground",
					children: description
				})
			]
		}), meta && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "h-[2px] w-8 rounded-full",
				style: { background: "linear-gradient(90deg, hsl(var(--brand-start)), hsl(var(--brand-end)))" }
			}), /* @__PURE__ */ jsx("span", {
				className: "font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground",
				children: meta
			})]
		})]
	});
});
ProcessCard.displayName = "ProcessCard";
//#endregion
//#region src/components/ui/carousel.tsx
var CarouselContext = React.createContext(null);
function useCarousel() {
	const context = React.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);
	const onSelect = React.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = React.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = React.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	React.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	React.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ jsx(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ jsx("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
//#endregion
//#region src/components/ui/chart.tsx
var THEMES = {
	light: "",
	dark: ".dark"
};
var ChartContext = React.createContext(null);
function useChart() {
	const context = React.useContext(ChartContext);
	if (!context) throw new Error("useChart must be used within a <ChartContainer />");
	return context;
}
var ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
	const uniqueId = React.useId();
	const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
	return /* @__PURE__ */ jsx(ChartContext.Provider, {
		value: { config },
		children: /* @__PURE__ */ jsxs("div", {
			"data-chart": chartId,
			ref,
			className: cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
			...props,
			children: [/* @__PURE__ */ jsx(ChartStyle, {
				id: chartId,
				config
			}), /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })]
		})
	});
});
ChartContainer.displayName = "Chart";
var ChartStyle = ({ id, config }) => {
	const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
	if (!colorConfig.length) return null;
	return /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: Object.entries(THEMES).map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
		const color = itemConfig.theme?.[theme] || itemConfig.color;
		return color ? `  --color-${key}: ${color};` : null;
	}).join("\n")}
}
`).join("\n") } });
};
var ChartTooltip = RechartsPrimitive.Tooltip;
var ChartTooltipContent = React.forwardRef(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref) => {
	const { config } = useChart();
	const tooltipLabel = React.useMemo(() => {
		if (hideLabel || !payload?.length) return null;
		const [item] = payload;
		const itemConfig = getPayloadConfigFromPayload(config, item, `${labelKey || item?.dataKey || item?.name || "value"}`);
		const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
		if (labelFormatter) return /* @__PURE__ */ jsx("div", {
			className: cn("font-medium", labelClassName),
			children: labelFormatter(value, payload)
		});
		if (!value) return null;
		return /* @__PURE__ */ jsx("div", {
			className: cn("font-medium", labelClassName),
			children: value
		});
	}, [
		label,
		labelFormatter,
		payload,
		hideLabel,
		labelClassName,
		config,
		labelKey
	]);
	if (!active || !payload?.length) return null;
	const nestLabel = payload.length === 1 && indicator !== "dot";
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
		children: [!nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("div", {
			className: "grid gap-1.5",
			children: payload.filter((item) => item.type !== "none").map((item, index) => {
				const itemConfig = getPayloadConfigFromPayload(config, item, `${nameKey || item.name || item.dataKey || "value"}`);
				const indicatorColor = color || item.payload.fill || item.color;
				return /* @__PURE__ */ jsx("div", {
					className: cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
					children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx("div", {
						className: cn("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": indicator === "dot",
							"w-1": indicator === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
							"my-0.5": nestLabel && indicator === "dashed"
						}),
						style: {
							"--color-bg": indicatorColor,
							"--color-border": indicatorColor
						}
					}), /* @__PURE__ */ jsxs("div", {
						className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid gap-1.5",
							children: [nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: itemConfig?.label || item.name
							})]
						}), item.value && /* @__PURE__ */ jsx("span", {
							className: "font-mono font-medium tabular-nums text-foreground",
							children: item.value.toLocaleString()
						})]
					})] })
				}, item.dataKey);
			})
		})]
	});
});
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive.Legend;
var ChartLegendContent = React.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
	const { config } = useChart();
	if (!payload?.length) return null;
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
		children: payload.filter((item) => item.type !== "none").map((item) => {
			const itemConfig = getPayloadConfigFromPayload(config, item, `${nameKey || item.dataKey || "value"}`);
			return /* @__PURE__ */ jsxs("div", {
				className: cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: item.color }
				}), itemConfig?.label]
			}, item.value);
		})
	});
});
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
	if (typeof payload !== "object" || payload === null) return;
	const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
	let configLabelKey = key;
	if (key in payload && typeof payload[key] === "string") configLabelKey = payload[key];
	else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") configLabelKey = payloadPayload[key];
	return configLabelKey in config ? config[configLabelKey] : config[key];
}
//#endregion
//#region src/components/ui/checkbox.tsx
/**
* Checkbox — brand-gradient fill when checked. Uses an OPAQUE border
* (--brand-border) so the gradient never bleeds past the edge.
*/
var Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
	ref,
	className: cn("peer size-5 shrink-0 rounded-md border-[1.5px] border-[hsl(var(--border))] bg-secondary [background-clip:padding-box]", "transition-[background-color,border-color,box-shadow] duration-150 outline-none", "hover:border-muted-foreground/70", "focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-45", "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient data-[state=checked]:text-primary-foreground", "data-[state=checked]:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),inset_0_-1px_0_hsl(0_0%_0%/0.25),0_4px_14px_-4px_hsl(var(--brand-start)/0.55),0_8px_22px_-8px_hsl(var(--brand-end)/0.5)]", className),
	...props,
	children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
		className: cn("grid place-items-center text-current"),
		children: /* @__PURE__ */ jsx(Check, { className: "size-3 stroke-[3]" })
	})
}));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/collapsible.tsx
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-[hsl(230_60%_4%/0.66)] backdrop-blur-[3px]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-full max-w-md -translate-x-1/2 -translate-y-1/2 gap-4", "rounded-[calc(var(--radius)+8px)] border border-border bg-popover/95 p-6 shadow-card glass", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-md p-1 text-muted-foreground opacity-70 transition hover:bg-white/[0.06] hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none",
		children: [/* @__PURE__ */ jsx(X, { className: "size-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col gap-2", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex justify-end gap-2.5", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold tracking-[-0.015em]", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-[13.5px] leading-relaxed text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/ui/command.tsx
var Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command.displayName = Command$1.displayName;
var CommandDialog = ({ children, ...props }) => {
	return /* @__PURE__ */ jsx(Dialog, {
		...props,
		children: /* @__PURE__ */ jsx(DialogContent, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ jsx(Command, {
				className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children
			})
		})
	});
};
var CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ jsx(Command$1.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = Command$1.Input.displayName;
var CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = Command$1.List.displayName;
var CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command$1.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = Command$1.Empty.displayName;
var CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = Command$1.Group.displayName;
var CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = Command$1.Separator.displayName;
var CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = Command$1.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
//#endregion
//#region src/components/ui/context-menu.tsx
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var ContextMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(ContextMenuPrimitive.SubTrigger, {
	ref,
	className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })]
}));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ContextMenuPrimitive.SubContent, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)", className),
	...props
}));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(ContextMenuPrimitive.Content, {
	ref,
	className: cn("z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)", className),
	...props
}) }));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(ContextMenuPrimitive.Item, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
	...props
}));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(ContextMenuPrimitive.CheckboxItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), children]
}));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(ContextMenuPrimitive.RadioItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 fill-current" }) })
	}), children]
}));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(ContextMenuPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className),
	...props
}));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ContextMenuPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-border", className),
	...props
}));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
//#endregion
//#region src/components/ui/drawer.tsx
var Drawer = ({ shouldScaleBackground = true, ...props }) => /* @__PURE__ */ jsx(Drawer$1.Root, {
	shouldScaleBackground,
	...props
});
Drawer.displayName = "Drawer";
var DrawerTrigger = Drawer$1.Trigger;
var DrawerPortal = Drawer$1.Portal;
var DrawerClose = Drawer$1.Close;
var DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Drawer$1.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80", className),
	...props
}));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
var DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [/* @__PURE__ */ jsx(DrawerOverlay, {}), /* @__PURE__ */ jsxs(Drawer$1.Content, {
	ref,
	className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className),
	...props,
	children: [/* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }), children]
})] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
	...props
});
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("mt-auto flex flex-col gap-2 p-4", className),
	...props
});
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Drawer$1.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DrawerTitle.displayName = Drawer$1.Title.displayName;
var DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Drawer$1.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DrawerDescription.displayName = Drawer$1.Description.displayName;
//#endregion
//#region src/components/ui/dropdown-menu.tsx
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuContent = React.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
	ref,
	sideOffset,
	className: cn("z-50 min-w-[12rem] overflow-hidden rounded-[calc(var(--radius)-2px)] border border-border bg-popover/95 p-1.5 text-popover-foreground shadow-card glass", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className),
	...props
}) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] text-muted-foreground outline-none transition-colors", "focus:bg-white/[0.05] focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "[&_svg]:size-4 [&_svg]:shrink-0", variant === "destructive" && "text-destructive focus:bg-destructive/12 focus:text-destructive", className),
	...props
}));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.CheckboxItem, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center rounded-lg py-2 pl-8 pr-3 text-[13.5px] text-muted-foreground outline-none transition-colors focus:bg-white/[0.05] focus:text-foreground", className),
	checked,
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2.5 grid place-items-center",
		children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.RadioItem, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center rounded-lg py-2 pl-8 pr-3 text-[13.5px] text-muted-foreground outline-none transition-colors focus:bg-white/[0.05] focus:text-foreground", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2.5 grid place-items-center",
		children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "size-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, {
	ref,
	className: cn("px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70", className),
	...props
}));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, {
	ref,
	className: cn("mx-1 my-1.5 h-px bg-border/60", className),
	...props
}));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
//#endregion
//#region src/components/ui/label.tsx
var Label = React.forwardRef(({ className, required, children, ...props }, ref) => /* @__PURE__ */ jsxs(LabelPrimitive.Root, {
	ref,
	className: cn("flex items-center gap-1.5 text-[12.5px] font-medium text-muted-foreground", "peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
	...props,
	children: [children, required && /* @__PURE__ */ jsx("span", {
		className: "text-destructive",
		children: "*"
	})]
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
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
//#region src/components/ui/form.tsx
var Form = FormProvider;
var FormFieldContext = React.createContext(null);
var FormField = ({ ...props }) => {
	return /* @__PURE__ */ jsx(FormFieldContext.Provider, {
		value: { name: props.name },
		children: /* @__PURE__ */ jsx(Controller, { ...props })
	});
};
var useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext);
	const itemContext = React.useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();
	if (!fieldContext) throw new Error("useFormField should be used within <FormField>");
	if (!itemContext) throw new Error("useFormField should be used within <FormItem>");
	const fieldState = getFieldState(fieldContext.name, formState);
	const { id } = itemContext;
	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState
	};
};
var FormItemContext = React.createContext(null);
var FormItem = React.forwardRef(({ className, ...props }, ref) => {
	const id = React.useId();
	return /* @__PURE__ */ jsx(FormItemContext.Provider, {
		value: { id },
		children: /* @__PURE__ */ jsx("div", {
			ref,
			className: cn("space-y-2", className),
			...props
		})
	});
});
FormItem.displayName = "FormItem";
var FormLabel = React.forwardRef(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();
	return /* @__PURE__ */ jsx(Label, {
		ref,
		className: cn(error && "text-destructive", className),
		htmlFor: formItemId,
		...props
	});
});
FormLabel.displayName = "FormLabel";
var FormControl = React.forwardRef(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
	return /* @__PURE__ */ jsx(Slot, {
		ref,
		id: formItemId,
		"aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
		"aria-invalid": !!error,
		...props
	});
});
FormControl.displayName = "FormControl";
var FormDescription = React.forwardRef(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField();
	return /* @__PURE__ */ jsx("p", {
		ref,
		id: formDescriptionId,
		className: cn("text-[0.8rem] text-muted-foreground", className),
		...props
	});
});
FormDescription.displayName = "FormDescription";
var FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message ?? "") : children;
	if (!body) return null;
	return /* @__PURE__ */ jsx("p", {
		ref,
		id: formMessageId,
		className: cn("text-[0.8rem] font-medium text-destructive", className),
		...props,
		children: body
	});
});
FormMessage.displayName = "FormMessage";
//#endregion
//#region src/components/ui/hover-card.tsx
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(HoverCardPrimitive.Content, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)", className),
	...props
}));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
//#endregion
//#region src/components/ui/input-otp.tsx
var InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ jsx(OTPInput, {
	ref,
	containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
	className: cn("disabled:cursor-not-allowed", className),
	...props
}));
InputOTP.displayName = "InputOTP";
var InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("flex items-center", className),
	...props
}));
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
	const { char, hasFakeCaret, isActive } = React.useContext(OTPInputContext).slots[index];
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	role: "separator",
	...props,
	children: /* @__PURE__ */ jsx(Minus, {})
}));
InputOTPSeparator.displayName = "InputOTPSeparator";
//#endregion
//#region src/components/ui/input.tsx
/**
* Input — text field. Supports leading/trailing icons and validation
* styling via the native `aria-invalid` attribute.
*/
var Input = React.forwardRef(({ className, type, leadingIcon, trailingIcon, ...props }, ref) => {
	const field = /* @__PURE__ */ jsx("input", {
		type,
		ref,
		className: cn("flex h-11 w-full rounded-[var(--radius)] border border-border/60 bg-secondary px-3.5 text-sm text-foreground", "transition-[border-color,box-shadow,background-color] duration-200 outline-none", "placeholder:text-muted-foreground/70", "hover:border-border", "focus:border-transparent focus:bg-[hsl(230_28%_15%)] focus:ring-2 focus:ring-ring/60", "disabled:cursor-not-allowed disabled:opacity-50", "aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus:ring-destructive/30", "file:border-0 file:bg-transparent file:text-sm file:font-medium", leadingIcon && "pl-10", trailingIcon && "pr-10", className),
		...props
	});
	if (!leadingIcon && !trailingIcon) return field;
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex items-center",
		children: [
			leadingIcon && /* @__PURE__ */ jsx("span", {
				className: "pointer-events-none absolute left-3.5 grid place-items-center text-muted-foreground [&_svg]:size-4",
				children: leadingIcon
			}),
			field,
			trailingIcon && /* @__PURE__ */ jsx("span", {
				className: "absolute right-3.5 grid place-items-center text-muted-foreground [&_svg]:size-4",
				children: trailingIcon
			})
		]
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/menubar.tsx
function MenubarMenu({ ...props }) {
	return /* @__PURE__ */ jsx(MenubarPrimitive.Menu, { ...props });
}
function MenubarGroup({ ...props }) {
	return /* @__PURE__ */ jsx(MenubarPrimitive.Group, { ...props });
}
function MenubarPortal({ ...props }) {
	return /* @__PURE__ */ jsx(MenubarPrimitive.Portal, { ...props });
}
function MenubarRadioGroup({ ...props }) {
	return /* @__PURE__ */ jsx(MenubarPrimitive.RadioGroup, { ...props });
}
function MenubarSub({ ...props }) {
	return /* @__PURE__ */ jsx(MenubarPrimitive.Sub, {
		"data-slot": "menubar-sub",
		...props
	});
}
var Menubar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Root, {
	ref,
	className: cn("flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm", className),
	...props
}));
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Trigger, {
	ref,
	className: cn("flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className),
	...props
}));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(MenubarPrimitive.SubTrigger, {
	ref,
	className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })]
}));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.SubContent, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)", className),
	...props
}));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React.forwardRef(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx(MenubarPrimitive.Content, {
	ref,
	align,
	alignOffset,
	sideOffset,
	className: cn("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)", className),
	...props
}) }));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Item, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
	...props
}));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(MenubarPrimitive.CheckboxItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), children]
}));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(MenubarPrimitive.RadioItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 fill-current" }) })
	}), children]
}));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
MenubarShortcut.displayname = "MenubarShortcut";
//#endregion
//#region src/components/ui/navigation-menu.tsx
var NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Root, {
	ref,
	className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(NavigationMenuViewport, {})]
}));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(NavigationMenuPrimitive.List, {
	ref,
	className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className),
	...props
}));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
var NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Trigger, {
	ref,
	className: cn(navigationMenuTriggerStyle(), "group", className),
	...props,
	children: [
		children,
		" ",
		/* @__PURE__ */ jsx(ChevronDown, {
			className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
			"aria-hidden": "true"
		})
	]
}));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(NavigationMenuPrimitive.Content, {
	ref,
	className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className),
	...props
}));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	className: cn("absolute left-0 top-full flex justify-center"),
	children: /* @__PURE__ */ jsx(NavigationMenuPrimitive.Viewport, {
		className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
		ref,
		...props
	})
}));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(NavigationMenuPrimitive.Indicator, {
	ref,
	className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className),
	...props,
	children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
}));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
//#endregion
//#region src/components/ui/pagination.tsx
var Pagination = ({ className, ...props }) => /* @__PURE__ */ jsx("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: cn("mx-auto flex w-full justify-center", className),
	...props
});
Pagination.displayName = "Pagination";
var PaginationContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("ul", {
	ref,
	className: cn("flex flex-row items-center gap-1", className),
	...props
}));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", {
	ref,
	className: cn("", className),
	...props
}));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ jsx("a", {
	"aria-current": isActive ? "page" : void 0,
	className: cn(buttonVariants({
		variant: isActive ? "outline" : "ghost",
		size
	}), className),
	...props
});
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({ className, ...props }) => /* @__PURE__ */ jsxs(PaginationLink, {
	"aria-label": "Go to previous page",
	size: "default",
	className: cn("gap-1 pl-2.5", className),
	...props,
	children: [/* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Previous" })]
});
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({ className, ...props }) => /* @__PURE__ */ jsxs(PaginationLink, {
	"aria-label": "Go to next page",
	size: "default",
	className: cn("gap-1 pr-2.5", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", { children: "Next" }), /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })]
});
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxs("span", {
	"aria-hidden": true,
	className: cn("flex h-9 w-9 items-center justify-center", className),
	...props,
	children: [/* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
		className: "sr-only",
		children: "More pages"
	})]
});
PaginationEllipsis.displayName = "PaginationEllipsis";
//#endregion
//#region src/components/ui/popover.tsx
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(PopoverPrimitive.Content, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-60 rounded-[calc(var(--radius)-2px)] border border-border bg-popover/95 p-4 text-popover-foreground shadow-card glass outline-none", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className),
	...props
}) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
//#endregion
//#region src/components/ui/progress.tsx
var Progress = React.forwardRef(({ className, value, indeterminate, ...props }, ref) => /* @__PURE__ */ jsx(ProgressPrimitive.Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-[hsl(230_24%_20%)]", className),
	value: indeterminate ? void 0 : value,
	...props,
	children: /* @__PURE__ */ jsx(ProgressPrimitive.Indicator, {
		className: cn("h-full rounded-full bg-brand-gradient transition-[width] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]", indeterminate && "w-2/5 animate-np-indeterminate"),
		style: indeterminate ? void 0 : { width: `${value ?? 0}%` }
	})
}));
Progress.displayName = ProgressPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/radio-group.tsx
var RadioGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, {
	ref,
	className: cn("grid gap-3", className),
	...props
}));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
/**
* RadioGroupItem — brand-gradient fill + white dot when selected.
* Opaque border keeps the edge crisp over the gradient.
*/
var RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadioGroupPrimitive.Item, {
	ref,
	className: cn("size-5 shrink-0 rounded-full border-[1.5px] border-[hsl(var(--border))] bg-secondary [background-clip:padding-box]", "transition-[background-color,border-color,box-shadow] duration-150 outline-none", "hover:border-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-45", "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient", "data-[state=checked]:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),inset_0_-1px_0_hsl(0_0%_0%/0.25),0_4px_14px_-4px_hsl(var(--brand-start)/0.55),0_8px_22px_-8px_hsl(var(--brand-end)/0.5)]", className),
	...props,
	children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, {
		className: "grid size-full place-items-center",
		children: /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-white" })
	})
}));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
//#endregion
//#region src/components/ui/resizable.tsx
var ResizablePanelGroup = ({ className, ...props }) => /* @__PURE__ */ jsx(Group, {
	className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
	...props
});
var ResizablePanel = Panel;
var ResizableHandle = ({ withHandle, className, ...props }) => /* @__PURE__ */ jsx(Separator$1, {
	className: cn("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", className),
	...props,
	children: withHandle && /* @__PURE__ */ jsx("div", {
		className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",
		children: /* @__PURE__ */ jsx(GripVertical, { className: "h-2.5 w-2.5" })
	})
});
//#endregion
//#region src/components/ui/scroll-area.tsx
var ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(ScrollAreaPrimitive.Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ jsx(ScrollBar, {}),
		/* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
	]
}));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
//#endregion
//#region src/components/ui/segmented.tsx
/**
* Segmented — a compact single-choice control with a sliding brand thumb.
* Controlled: pass `value` and `onValueChange`.
*/
var Segmented = React.forwardRef(({ options, value, onValueChange, className }, ref) => {
	const items = options.map((o) => typeof o === "string" ? {
		value: o,
		label: o
	} : o);
	const listRef = React.useRef(null);
	const [thumb, setThumb] = React.useState({
		left: 0,
		width: 0
	});
	React.useLayoutEffect(() => {
		const idx = items.findIndex((o) => o.value === value);
		const el = listRef.current?.querySelectorAll("[data-seg]")[idx];
		if (el) setThumb({
			left: el.offsetLeft,
			width: el.offsetWidth
		});
	}, [value, items.map((i) => i.value).join("|")]);
	return /* @__PURE__ */ jsxs("div", {
		ref: (node) => {
			listRef.current = node;
			if (typeof ref === "function") ref(node);
			else if (ref) ref.current = node;
		},
		role: "tablist",
		className: cn("relative inline-flex gap-0.5 rounded-[var(--radius)] border border-border/60 bg-secondary p-[3px]", className),
		children: [/* @__PURE__ */ jsx("span", {
			"aria-hidden": true,
			className: "absolute top-[3px] bottom-[3px] rounded-[calc(var(--radius)-3px)] bg-brand-gradient shadow-[inset_0_1px_0_hsl(0_0%_100%/0.3),inset_0_-1px_0_hsl(0_0%_0%/0.2),0_4px_14px_-4px_hsl(var(--brand-start)/0.55),0_8px_22px_-6px_hsl(var(--brand-end)/0.45)] transition-[left,width] duration-[260ms] ease-[cubic-bezier(.4,0,.2,1)]",
			style: {
				left: thumb.left,
				width: thumb.width
			}
		}), items.map((o) => /* @__PURE__ */ jsx("button", {
			"data-seg": true,
			role: "tab",
			"aria-selected": o.value === value,
			type: "button",
			onClick: () => onValueChange(o.value),
			className: cn("relative z-[1] whitespace-nowrap rounded-[calc(var(--radius)-3px)] px-4 py-[7px] text-[13px] font-medium transition-colors duration-200", o.value === value ? "text-white" : "text-muted-foreground hover:text-foreground"),
			children: o.label
		}, o.value))]
	});
});
Segmented.displayName = "Segmented";
//#endregion
//#region src/components/ui/select.tsx
/**
* Select — native styled select. (For a listbox with search/multi-select,
* use a Radix-based combobox; this covers the common single-choice case
* with full form semantics.)
*/
var Select = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs("div", {
	className: "relative flex items-center",
	children: [/* @__PURE__ */ jsx("select", {
		ref,
		className: cn("flex h-11 w-full appearance-none rounded-[var(--radius)] border border-border/60 bg-secondary pl-3.5 pr-10 text-sm text-foreground", "transition-[border-color,box-shadow] duration-200 outline-none cursor-pointer", "hover:border-border focus:border-transparent focus:ring-2 focus:ring-ring/60", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children
	}), /* @__PURE__ */ jsx(ChevronDown, { className: "pointer-events-none absolute right-3.5 size-4 text-muted-foreground" })]
}));
Select.displayName = "Select";
//#endregion
//#region src/components/ui/separator.tsx
var Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(SeparatorPrimitive.Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}));
Separator.displayName = SeparatorPrimitive.Root.displayName;
//#endregion
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
//#region src/hooks/use-mobile.tsx
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState(void 0);
	React.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
//#endregion
//#region src/components/ui/skeleton.tsx
/** Skeleton — shimmer placeholder for loading content. */
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("rounded-md animate-np-shimmer [background:linear-gradient(100deg,hsl(230_24%_16%)_30%,hsl(230_20%_22%)_50%,hsl(230_24%_16%)_70%)] [background-size:200%_100%]", className),
		...props
	});
}
//#endregion
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
//#region src/components/ui/sidebar.tsx
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 3600 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React.createContext(null);
function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
	return context;
}
var SidebarProvider = React.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React.useState(false);
	const [_open, _setOpen] = React.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = React.useCallback((value) => {
		const openState = typeof value === "function" ? value(open) : value;
		if (setOpenProp) setOpenProp(openState);
		else _setOpen(openState);
		document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
	}, [setOpenProp, open]);
	const toggleSidebar = React.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [
		isMobile,
		setOpen,
		setOpenMobile
	]);
	React.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	const state = open ? "expanded" : "collapsed";
	const contextValue = React.useMemo(() => ({
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	}), [
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	]);
	return /* @__PURE__ */ jsx(SidebarContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsx("div", {
				style: {
					"--sidebar-width": SIDEBAR_WIDTH,
					"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
					...style
				},
				className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
				ref,
				...props,
				children
			})
		})
	});
});
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
		ref,
		...props,
		children
	});
	if (isMobile) return /* @__PURE__ */ jsx(Sheet, {
		open: openMobile,
		onOpenChange: setOpenMobile,
		...props,
		children: /* @__PURE__ */ jsxs(SheetContent, {
			"data-sidebar": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
			side,
			children: [/* @__PURE__ */ jsxs(SheetHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }), /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full flex-col",
				children
			})]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": state,
		"data-collapsible": state === "collapsed" ? collapsible : "",
		"data-variant": variant,
		"data-side": side,
		children: [/* @__PURE__ */ jsx("div", { className: cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), /* @__PURE__ */ jsx("div", {
			className: cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
			...props,
			children: /* @__PURE__ */ jsx("div", {
				"data-sidebar": "sidebar",
				className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
				children
			})
		})]
	});
});
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		"data-sidebar": "trigger",
		variant: "ghost",
		size: "icon",
		className: cn("h-7 w-7", className),
		onClick: (event) => {
			onClick?.(event);
			toggleSidebar();
		},
		...props,
		children: [/* @__PURE__ */ jsx(PanelLeft, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ jsx("button", {
		ref,
		"data-sidebar": "rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: toggleSidebar,
		title: "Toggle Sidebar",
		className: cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
		...props
	});
});
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("main", {
		ref,
		className: cn("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className),
		...props
	});
});
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Input, {
		ref,
		"data-sidebar": "input",
		className: cn("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className),
		...props
	});
});
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		"data-sidebar": "header",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		"data-sidebar": "footer",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Separator, {
		ref,
		"data-sidebar": "separator",
		className: cn("mx-2 w-auto bg-sidebar-border", className),
		...props
	});
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		"data-sidebar": "content",
		className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
		...props
	});
});
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		"data-sidebar": "group",
		className: cn("relative flex w-full min-w-0 flex-col p-2", className),
		...props
	});
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "div", {
		ref,
		"data-sidebar": "group-label",
		className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
		...props
	});
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		ref,
		"data-sidebar": "group-action",
		className: cn("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className),
		...props
	});
});
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	"data-sidebar": "group-content",
	className: cn("w-full text-sm", className),
	...props
}));
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("ul", {
	ref,
	"data-sidebar": "menu",
	className: cn("flex w-full min-w-0 flex-col gap-1", className),
	...props
}));
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", {
	ref,
	"data-sidebar": "menu-item",
	className: cn("group/menu-item relative", className),
	...props
}));
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring cursor-pointer transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var SidebarMenuButton = React.forwardRef(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	const { isMobile, state } = useSidebar();
	const button = /* @__PURE__ */ jsx(Comp, {
		ref,
		"data-sidebar": "menu-button",
		"data-size": size,
		"data-active": isActive,
		className: cn(sidebarMenuButtonVariants({
			variant,
			size
		}), className),
		...props
	});
	if (!tooltip) return button;
	if (typeof tooltip === "string") tooltip = { children: tooltip };
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: button
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "right",
		align: "center",
		hidden: state !== "collapsed" || isMobile,
		...tooltip
	})] });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		ref,
		"data-sidebar": "menu-action",
		className: cn("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
		...props
	});
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	"data-sidebar": "menu-badge",
	className: cn("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
	...props
}));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React.forwardRef(({ className, showIcon = false, ...props }, ref) => {
	const width = React.useMemo(() => {
		return `${Math.floor(Math.random() * 40) + 50}%`;
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		"data-sidebar": "menu-skeleton",
		className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
		...props,
		children: [showIcon && /* @__PURE__ */ jsx(Skeleton, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ jsx(Skeleton, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": width }
		})]
	});
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("ul", {
	ref,
	"data-sidebar": "menu-sub",
	className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
	...props
}));
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("li", {
	ref,
	...props
}));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "a", {
		ref,
		"data-sidebar": "menu-sub-button",
		"data-size": size,
		"data-active": isActive,
		className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
		...props
	});
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
//#endregion
//#region src/components/ui/slider.tsx
var Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(SliderPrimitive.Root, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ jsx(SliderPrimitive.Track, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = SliderPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster$1, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
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
//#region src/components/ui/switch.tsx
/**
* Switch — brand-gradient track when on, sliding white thumb.
* Opaque border on the checked track keeps the edge crisp.
*/
var Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SwitchPrimitive.Root, {
	ref,
	className: cn("peer inline-flex h-[26px] w-11 shrink-0 cursor-pointer items-center rounded-full border p-0.5 [background-clip:padding-box]", "transition-[background-color,border-color,box-shadow] duration-200 outline-none", "border-border/60 bg-[hsl(230_24%_22%)]", "focus-visible:ring-2 focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-45", "data-[state=checked]:border-brand-border data-[state=checked]:bg-brand-gradient data-[state=unchecked]:hover:border-border", "data-[state=checked]:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.3),inset_0_-1px_0_hsl(0_0%_0%/0.2),0_6px_18px_-6px_hsl(var(--brand-start)/0.55),0_12px_28px_-10px_hsl(var(--brand-end)/0.5)]", className),
	...props,
	children: /* @__PURE__ */ jsx(SwitchPrimitive.Thumb, { className: cn("pointer-events-none block size-[18px] rounded-full bg-muted-foreground shadow-sm transition-transform duration-200", "data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = SwitchPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/table.tsx
var Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ jsx("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
//#endregion
//#region src/components/ui/tabs.tsx
var Tabs = TabsPrimitive.Root;
var TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-[var(--radius)] bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-[calc(var(--radius)-4px)] px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsPrimitive.Content.displayName;
//#endregion
//#region src/components/ui/textarea.tsx
/** Textarea — multi-line text field. */
var Textarea = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("textarea", {
	ref,
	className: cn("flex min-h-[92px] w-full rounded-[var(--radius)] border border-border/60 bg-secondary px-3.5 py-3 text-sm leading-relaxed text-foreground", "transition-[border-color,box-shadow,background-color] duration-200 outline-none resize-y", "placeholder:text-muted-foreground/70 hover:border-border", "focus:border-transparent focus:bg-[hsl(230_28%_15%)] focus:ring-2 focus:ring-ring/60", "disabled:cursor-not-allowed disabled:opacity-50", "aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus:ring-destructive/30", className),
	...props
}));
Textarea.displayName = "Textarea";
//#endregion
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
//#region src/components/ui/toggle.tsx
var toggleVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-9 px-2 min-w-9",
			sm: "h-8 px-1.5 min-w-8",
			lg: "h-10 px-2.5 min-w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(TogglePrimitive.Root, {
	ref,
	className: cn(toggleVariants({
		variant,
		size,
		className
	})),
	...props
}));
Toggle.displayName = TogglePrimitive.Root.displayName;
//#endregion
//#region src/components/ui/toggle-group.tsx
var ToggleGroupContext = React.createContext({
	size: "default",
	variant: "default"
});
var ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsx(ToggleGroupPrimitive.Root, {
	ref,
	className: cn("flex items-center justify-center gap-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ToggleGroupContext.Provider, {
		value: {
			variant,
			size
		},
		children
	})
}));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
	const context = React.useContext(ToggleGroupContext);
	return /* @__PURE__ */ jsx(ToggleGroupPrimitive.Item, {
		ref,
		className: cn(toggleVariants({
			variant: context.variant || variant,
			size: context.size || size
		}), className),
		...props,
		children
	});
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
//#endregion
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertCard, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Banner, BorderGlow, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, CalendarDayButton, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Count, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Dots, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuTrigger, FeatureCard, Field, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, GlassCard, GlowCard, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, InteractiveCard, Label, MediaCard, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MetricCard, MinimalCard, MinimalCardRow, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, ProcessCard, Progress, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Segmented, Select, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Slider, Spinner, StatCard, SurfaceCard, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, alertVariants, badgeVariants, buttonVariants, cn, navigationMenuTriggerStyle, toastVariants, toggleVariants, useFormField, useSidebar };

//# sourceMappingURL=index.js.map