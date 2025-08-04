import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  splitting: false,
  minify: true,
  treeshake: {
    preset: "recommended",
    moduleSideEffects: false,
  },
  sourcemap: true,
  external: [
    "react", 
    "react-dom", 
    "@radix-ui/react-select",
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "lucide-react",
    "tailwind-merge"
  ],
  injectStyle: false,
  loader: {
    ".ttf": "file",
    ".css": "css",
    ".svg": "dataurl",
  },
  esbuildOptions(options, context) {
    options.loader = {
      ".svg": "jsx",
      ".css": "css",
      ".ttf": "file",
    };
    options.assetNames = "fonts/[name]";
    options.target = "es2020";

    if (context.format === "cjs") {
      options.platform = "node";
    } else {
      options.platform = "neutral";
    }
  },
});
