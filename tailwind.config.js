/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      'text': '#1d1d1d',
      'background': '#ffffff',
      'primary': '#0045e6',
      'secondary': '#e1e2e3',
      'accent': '#3f3f3f',
      'transparent': 'transparent',
    },

    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },

    fontFamily: {
      heading: 'inter',
      body: 'inter',
    },

    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },

    extend: {},
  },

  // plugins: [require("@tailwindcss/typography")],
}