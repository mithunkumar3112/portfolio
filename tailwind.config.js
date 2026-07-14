/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Optimize animation performance
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'aurora': 'aurora 14s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 7s ease infinite',
        'border-glow': 'border-glow 3.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  // Optimize production build
  safelist: [],
  // Purge unused CSS aggressively in production
  corePlugins: {
    preflight: true,
  },
};
