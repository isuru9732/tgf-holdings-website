import { defineConfig } from "vite";
import vinext from "vinext";
import { nitro } from "nitro/vite";
import { sites } from "./build/sites-vite-plugin";
import { fileURLToPath } from "node:url";

const tailwindCss = fileURLToPath(
  new URL("./node_modules/tailwindcss/index.css", import.meta.url),
);

// The nitro plugin replaces each Vite environment's `resolve.alias` entries,
// which breaks the CSS resolver's bare `@import "tailwindcss"` resolution.
// Pin the import to the real package stylesheet so the build succeeds.
const pinTailwindImport = {
  name: "pin-tailwind-import",
  applyToEnvironment: (env) => env.name === "rsc",
  configEnvironment(_name, config) {
    config.resolve ??= {};
    const alias = config.resolve.alias;
    const entry = { find: "tailwindcss", replacement: tailwindCss };
    config.resolve.alias = Array.isArray(alias)
      ? [entry, ...alias]
      : { tailwindcss: tailwindCss, ...alias };
  },
};

export default defineConfig({
  plugins: [
    vinext(),
    sites(),
    nitro(),
    pinTailwindImport,
  ],
});
