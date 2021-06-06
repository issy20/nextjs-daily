module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				// 18回にわけて2秒で出力
				typing: "typing 2s steps(18), cursor 1s steps(1) infinite",
			},
			spacing: {
				// 18文字
				typing: "18ch",
			},
			keyframes: {
				typing: {
					"0%": {
						width: 0,
					},
				},
				cursor: {
					// 間隔
					"50%": {
						"border-right-color": "transparent",
					},
				},
			},
			// 細さ
			borderWidth: {
				tenmetsu: ".05em",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
