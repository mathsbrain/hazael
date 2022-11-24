/* eslint-disable @typescript-eslint/no-var-requires */
import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
	},
	plugins: [react()]
});
