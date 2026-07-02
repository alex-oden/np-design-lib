import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from "node:fs";

/**
 * Library build config for @neospower/ui.
 * Emits an ES-module tree under dist/ mirroring src/, plus styles.css and tokens.css.
 */

const runtimeExternal = [
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

function emitCssAssets() {
  return {
    name: "neospower-emit-css",
    apply: "build" as const,
    closeBundle() {
      const outDir = resolve(__dirname, "dist");
      const src = readFileSync(resolve(__dirname, "src/styles.css"), "utf8");

      // Full stylesheet (opt-in for consumers)
      writeFileSync(resolve(outDir, "styles.css"), src);

      // Tokens-only: strip tailwind entry + @source + tw-animate-css imports.
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

      // Copy border-glow.css alongside its component
      const borderGlowSrc = resolve(__dirname, "src/components/ui/border-glow.css");
      const borderGlowDest = resolve(outDir, "components/ui/border-glow.css");
      if (existsSync(borderGlowSrc)) {
        mkdirSync(resolve(outDir, "components/ui"), { recursive: true });
        copyFileSync(borderGlowSrc, borderGlowDest);
      }
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
      include: ["src/lib-entry.ts", "src/components/ui/**/*", "src/lib/utils.ts"],
      exclude: ["src/routes/**", "src/server.ts", "src/start.ts", "src/router.tsx"],
      insertTypesEntry: true,
    }),
    emitCssAssets(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    target: "es2022",
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/lib-entry.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: runtimeExternal,
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: (chunk) => {
          if (chunk.name === "lib-entry") return "index.js";
          return "[name].js";
        },
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});