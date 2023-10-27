import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  build: {
    // https://suid.io/getting-started/installation
    target: "esnext",
  },
  plugins: [suidPlugin(), solid()],
});
