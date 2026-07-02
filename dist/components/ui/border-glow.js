import { cn } from "../../lib/utils.js";
/* empty css                   */
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
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
export { BorderGlow };

//# sourceMappingURL=border-glow.js.map