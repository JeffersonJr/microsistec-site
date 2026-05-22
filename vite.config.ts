// Configured for Vercel deployment.
// cloudflare: false — disables @cloudflare/vite-plugin so the build outputs a Vercel-compatible bundle.
// tanstackStart.server.preset: 'vercel' — tells Nitro (TanStack Start's build engine) to generate
//   Vercel Functions output under .vercel/output instead of Cloudflare Workers format.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable the Cloudflare Workers adapter — not needed on Vercel
  cloudflare: false,
  tanstackStart: {
    server: {
      preset: "vercel",
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT' && warning.message.includes('@tanstack/router-core')) return;
        warn(warning);
      }
    }
  }
});
