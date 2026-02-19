/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#0c1e3b',
        },
        dark: {
          bg: '#0a0e27',
          surface: '#0f172a',
          border: '#1e293b',
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        slideInDown: 'slideInDown 0.8s ease',
        bounce: 'bounce 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
        },
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
    },
  },
  plugins: [],
}
