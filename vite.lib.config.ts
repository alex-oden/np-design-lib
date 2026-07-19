import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

/**
 * Library build for @alex-oden/ui.
 * ESM-only, single bundle at dist/index.js.
 * Emits dist/styles.css (full Tailwind v4 stylesheet) and dist/tokens.css
 * (design tokens only — no Tailwind entry, no @source).
 */

const externalPatterns = [
  /^react($|\/)/,
  /^react-dom($|\/)/,
  /^@radix-ui\//,
  /^lucide-react($|\/)/,
  /^class-variance-authority($|\/)/,
  /^clsx($|\/)/,
  /^tailwind-merge($|\/)/,
  /^sonner($|\/)/,
  /^embla-carousel-react($|\/)/,
  /^cmdk($|\/)/,
  /^vaul($|\/)/,
  /^input-otp($|\/)/,
  /^react-hook-form($|\/)/,
  /^zod($|\/)/,
  /^@hookform\//,
  /^react-day-picker($|\/)/,
  /^react-resizable-panels($|\/)/,
  /^recharts($|\/)/,
  /^tw-animate-css($|\/)/,
  /^date-fns($|\/)/,
];

function emitLibraryCss() {
  return {
    name: "alex-oden-emit-css",
    apply: "build" as const,
    closeBundle() {
      const outDir = resolve(__dirname, "dist");
      const src = readFileSync(resolve(__dirname, "src/styles.css"), "utf8");

      // Inline component-scoped stylesheet(s) so consumers only import styles.css.
      const borderGlowPath = resolve(__dirname, "src/components/ui/border-glow.styles.css");
      const extras = existsSync(borderGlowPath)
        ? "\n/* border-glow component styles */\n" + readFileSync(borderGlowPath, "utf8")
        : "";

      // Full stylesheet — Tailwind v4 entry + tokens + utilities.
      writeFileSync(resolve(outDir, "styles.css"), src + extras);

      // Tokens-only — strip Tailwind entry and @source so it can be layered
      // into a consumer that already has its own Tailwind setup.
      const tokens = src
        .split("\n")
        .filter((line) => {
          const t = line.trim();
          if (t.startsWith('@import "tailwindcss"')) return false;
          if (t.startsWith("@source ")) return false;
          if (t.startsWith('@import "tw-animate-css"')) return false;
          return true;
        })
        .join("\n");
      writeFileSync(resolve(outDir, "tokens.css"), tokens);
    },
  };
}

export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: "tsconfig.lib.json",
      entryRoot: "src",
      include: ["src/index.ts", "src/components/ui/**/*", "src/lib/utils.ts", "src/types/**/*"],
      exclude: [
        "src/routes/**",
        "src/server.ts",
        "src/start.ts",
        "src/router.tsx",
        "src/hooks/**",
        "src/components/showcase-*",
        "src/**/*.test.*",
        "src/**/*.stories.*",
      ],
      insertTypesEntry: true,
    }),
    emitLibraryCss(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: false,
    sourcemap: true,
    target: "es2022",
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: externalPatterns,
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "chunks/[name]-[hash].js",
        // Route any emitted CSS asset to a discardable name — we write
        // styles.css / tokens.css ourselves in the plugin above.
        assetFileNames: (asset) =>
          asset.name && asset.name.endsWith(".css")
            ? "assets/inline-[name][extname]"
            : "assets/[name][extname]",
      },
    },
  },
});
