/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        "2xl": '1140px'
      },
      colors: {
        primary: '#4318FF',
        dark: '#1B2559',
        light: '#68769F'
      },
    },
  },
  plugins: [],
}

