import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

export default defineConfig({
  server: {
    port: 4000,
    fs: {
      allow: [".", "../shared"],
    },
  },
  preview: {
    port: 4000,
  },
  build: {
    target: "chrome89",
  },
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        app1: {
          type: "module",
          name: "app1",
          entry: "http://localhost:4001/remoteEntry.js",
          entryGlobalName: "app1",
          shareScope: "default",
        },
        app2: {
          type: "module",
          name: "app2",
          entry: "http://localhost:4002/remoteEntry.js",
          entryGlobalName: "app2",
          shareScope: "default",
        },
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
  ],
});
