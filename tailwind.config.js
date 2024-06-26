/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			display: ['"Inter Variable"'],
			serif: ['"Source Serif 4 Variable"']
		},
		container: {
			center: true
		}
	},
	plugins: []
};
