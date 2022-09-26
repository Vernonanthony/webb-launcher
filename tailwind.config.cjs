/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('preline/plugin')
	],
}
