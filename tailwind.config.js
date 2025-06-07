/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sicily-blue': '#667eea',
        'sicily-purple': '#764ba2',
        'sicily-orange': '#f39c12',
        'sicily-red': '#e74c3c',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'card-gradient': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }
    },
  },
  plugins: [],
}