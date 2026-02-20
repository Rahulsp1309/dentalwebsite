/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'Georgia', 'serif'],
          poppins: ['Poppins', 'system-ui', 'sans-serif'],
        },
        animation: {
          blob: 'blob 7s infinite',
          'fade-in': 'fadeIn 0.6s ease-out forwards',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          blob: {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '25%': { transform: 'translate(20px, -20px) scale(1.05)' },
            '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
            '75%': { transform: 'translate(20px, 20px) scale(1.02)' },
          },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-12px)' },
          },
        },
      },
    },
    plugins: [],
  }