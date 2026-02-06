// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: [{ find: "@", replacement: "/src" }],
        },
        server: {
            host: "0.0.0.0",
            // https: true, // Enable HTTPS with self
            hmr: {
                // host: [
                //     "3.144.215.198",
                //     "ec2-3-144-215-198.us-east-2.compute.amazonaws.com",
                // ],
                host: "3.144.215.198",
            },
        },
    },

    integrations: [react()],
});
