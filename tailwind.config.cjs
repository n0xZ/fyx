/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.vue', './src/components/**/*.vue', './index.html'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				archivo: ['Archivo', 'sans-serif'],
				balsamiq: ['Balsamiq Sans', 'display'],
			},
		},
	},
	plugins: [require('daisyui')],
}
