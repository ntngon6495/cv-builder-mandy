/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    letterSpacing: {
      1: '0em',
      2: '0.025em',
      3: '0.05em',
      4: '0.1em',
      tightest: '-0.03em',
    },
  },
  plugins: [],
}
