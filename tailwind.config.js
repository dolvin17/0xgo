/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
		aniatedgradient: {
			'0%': { backgroundPosition: '0% 50%' },
			'50%': { backgroundPosition: '100% 50%' },
			'100%': { backgroundPosition: '0% 50%' },
		},
	  },
      fontFamily: {
        "0xgo": ["Roboto", "sans-serif"],
		sans: ['var(--font-londrina)'],
      },
	  backgroundImage: {
        "nouns-sea": "url('/bg_theme5.svg') ",
      },
      colors: {
        "0xgo": {
          dark: "#1D1D1D",
          blue: "#02F6FF",
          green: "#00E834",
        },
      },
  
	  backgroundSize: {
        '300%': '300%',
      },
	  animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
	}
    },
  },
  plugins: [require("tailwindcss-animated")],
};
