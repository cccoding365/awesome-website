/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {},
		colors: {
			'primary-100': '#1F3A5F',
			'primary-200': '#4d648d',
			'primary-300': '#acc2ef',
			'accent-100': '#3D5A80',
			'accent-200': '#cee8ff',
			'text-100': '#FFFFFF',
			'text-200': '#e0e0e0',
			'bg-100': '#0F1C2E',
			'bg-200': '#1f2b3e',
			'bg-300': '#374357',
		},
	},
	plugins: [],
};