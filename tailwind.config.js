/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkGreen": '#173610',
        "darkTeal": '#142f2f',
        "darkMedium": '#758374',
        "pastelGreen": "#c6f2b6",
        "forestGreen": "#023020",
        "lightGreen": "#266510",
        "greenishGray": "#758374",
        "blackShade": "#0000000D",
        "grayMedium": "#898989",
      },
      boxShadow: {
        "matchBox": "rgba(99, 99, 99, 0.034) 0px 2px 8px 0px",
        "shortMatchBox": "rgba(99, 99, 99, 0.123) 0px 2px 8px 0px",
        "priceBox": "rgba(99, 99, 99, 0.164) 0px 2px 8px 0px"
      },
    },
  },
  plugins: [],
};
