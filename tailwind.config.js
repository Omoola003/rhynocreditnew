/** @type {import('tailwindcss').Config} */
const plugin = require('tailwind-scrollbar-hide');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'], // works with manual data-theme switch
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--bg)',
        'theme-surface': 'var(--surface)',
        'theme-text': 'var(--text)',
        'theme-muted': 'var(--muted)',
        'theme-accent': 'var(--accent)',
        'theme-accent-strong': 'var(--accent-strong)',
      },
      boxShadow: {
        'theme-soft': 'var(--cta-shadow)',
      },
      borderRadius: {
        'xl-2': '1rem',
      },
    },
  },
  plugins: [plugin],
};
