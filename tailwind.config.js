/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        medieval: {
          primary: '#8B0000', // Deep Red
          secondary: '#DAA520', // Golden Rod
          accent: '#2F4F4F', // Dark Slate Gray
          light: '#F5DEB3', // Wheat
          dark: '#2C1810', // Dark Brown
          parchment: '#FFF8DC', // Cornsilk
          ink: '#000000', // Black
        },
      },
      fontFamily: {
        medieval: ['Cinzel', 'serif'],
        text: ['Crimson Text', 'serif'],
      },
      backgroundImage: {
        'parchment-light': 'url("/parchment-light.svg")',
        'parchment-dark': 'url("/parchment-dark.svg")',
      },
    },
  },
  plugins: [],
}; 