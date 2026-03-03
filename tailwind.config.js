/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        cyan: { DEFAULT: '#00C8FF' },
        danger: '#FF3B3B',
        success: '#00E676',
        bg: '#0A0A0A',
      },
    },
  },
  plugins: [],
}
