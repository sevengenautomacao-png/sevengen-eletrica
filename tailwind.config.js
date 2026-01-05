/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fde4b8',
          200: '#fbcb7a',
          300: '#f9a83c',
          400: '#f78a16',
          500: '#e86f0c',
          600: '#d15507',
          700: '#ac400a',
          800: '#8b3310',
          900: '#712c10',
        },
      },
    },
  },
  plugins: [],
}
