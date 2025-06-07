/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Italian Flag Colors (Dark Mode Variants)
        'italian-green': '#1a5f3f',
        'italian-green-light': '#2d8f5f',
        'italian-white': '#f8fafc',
        'italian-red': '#c41e3a',
        'italian-red-light': '#dc2626',
        
        // Sicilian Inspired Colors
        'sicilian-sunset': '#d97706',
        'sicilian-sea': '#0369a1',
        'sicilian-olive': '#365314',
        'sicilian-stone': '#78716c',
        'sicilian-wine': '#7c2d12',
        'sicilian-gold': '#ca8a04',
        
        // Dark Mode Base Colors
        'dark-bg': '#0f172a',
        'dark-surface': '#1e293b',
        'dark-elevated': '#334155',
        'dark-border': '#475569',
        'dark-text': '#f1f5f9',
        'dark-text-secondary': '#cbd5e1',
        'dark-text-muted': '#94a3b8',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a5f3f 0%, #c41e3a 50%, #d97706 100%)',
        'card-gradient': 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        'sicilian-gradient': 'linear-gradient(135deg, #0369a1 0%, #1a5f3f 50%, #7c2d12 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #d97706 0%, #c41e3a 100%)',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}