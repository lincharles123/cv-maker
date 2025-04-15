import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [tailwindcss(), sveltekit()],
	optimizeDeps: { include: ['dayjs/plugin/relativeTime.js'] }
};

export default config;
