import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), tailwindcss()],
	optimizeDeps: { include: ['dayjs/plugin/relativeTime.js'] }
};

export default config;
