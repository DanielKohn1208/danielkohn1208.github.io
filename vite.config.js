import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VitePluginRadar({
			analytics:{
				id: 'G-07D766DS4L',
			},
			enableDev:  false,
		}),
		svelte()
	],
})
