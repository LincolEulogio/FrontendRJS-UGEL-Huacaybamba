/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0056b3",
        "secondary": "#002147",
        "accent": "#3b82f6",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
        "glass-white": "rgba(255, 255, 255, 0.7)",
        "glass-border": "rgba(255, 255, 255, 0.3)",
      },
      fontFamily: {
        "sans": ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        "display": ["'Plus Jakarta Sans'", "sans-serif"],
        "body": ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "20px",
        "xl": "24px",
        "2xl": "32px",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'clay': 'inset 0 2px 4px rgba(255,255,255,0.3), 0 10px 15px -3px rgba(17, 82, 212, 0.3)',
      },
      animation: {
        'slide-scroll': 'slide-scroll 40s linear infinite',
      },
      keyframes: {
        'slide-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
