import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [Vue(), Pages()],
	resolve: {
		alias: {
			'~': path.resolve('src'),
		},
	},
})
