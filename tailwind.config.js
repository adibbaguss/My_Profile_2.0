/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#141338',
        'secondary-color': '#ffffff',
        green: '#11ff00',
        red: '#ff0000',
        'linkedin-blue': '#0A66C2',
        'instagram-pink': '#C13584',
        'github-gray': '#333333',
        'telegram-blue': '#0088cc',
        'shutterstock-orange': '#FF6F00',
        greenCustom: {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#11ff00', // Your custom green-500 color
          600: '#00e600',
          700: '#00cc00',
          800: '#00b300',
          900: '#009900',
        },
        blueCustom: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Example blue-500 color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        redCustom: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ff0000', // Example red-500 color
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        },
        yellowCustom: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Example yellow-500 color
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      rotate: {
        270: '270deg',
      },
      spacing: {
        '26rem': '26rem',
      },
    },
  },
  plugins: [],
};
