/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        colorCycle: 'colorChange 3s infinite', // 3 soniyalik cheksiz animatsiya
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#ecdabf' },
          '25%': { backgroundColor: '#dcba94' },
          '50%': { backgroundColor: '#eabb74' },
          '75%': { backgroundColor: '#dcba94' },
          '100%': { backgroundColor: '#ecdabf' },
        },
      },
    },
  },
  plugins: [],
};
