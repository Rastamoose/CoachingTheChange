/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-green': '#c5e1a5',
        'pastel-blue': '#d3e4fd',
        'pastel-purple': '#e5deff',
        'pastel-yellow': '#fef7cd',
        'pastel-pink': '#ffdee2',
        'pastel-peach': '#fde1d3',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-mint': 'linear-gradient(90deg, #eed891, #caf7f4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

