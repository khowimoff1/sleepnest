/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        colorCycle: 'colorChange 3s infinite',
        slideIn: 'slideIn 0.5s ease-out',
        'slide-out': 'slideOut 0.5s ease-out'
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#ecdabf' },
          '25%': { backgroundColor: '#dcba94' },
          '50%': { backgroundColor: '#eabb74' },
          '75%': { backgroundColor: '#dcba94' },
          '100%': { backgroundColor: '#ecdabf' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
