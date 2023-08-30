/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				theme: {
					light: {
						"very-light-gray": "hsl(0, 0%, 98%)",
						"very-light-grayish-blue": "hsl(236, 33%, 92%)",
						"light-grayish-blue": "hsl(233, 11%, 84%)",
						"dark-grayish-blue": "hsl(236, 9%, 61%)",
						"very-dark-grayish-blue": "hsl(235, 19%, 35%)",
					},
					dark: {
						"very-dark-blue": "hsl(235, 21%, 11%)",
						"very-dark-desaturated-blue": "hl(235, 24%, 19%)",
						"light-grayish-blue": "hl(234, 39%, 85%)",
						"light-grayish-blue-hover": "hl(236, 33%, 92%)",
						"dark-grayish-blue": "hl(234, 11%, 52%)",
						"very-dark-grayish-blue": "hl(233, 14%, 35%)",
						"very-dark-grayish-blue": "hl(237, 14%, 26%)",
					},
				},
			},
			fontFamily: {
				sans: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
