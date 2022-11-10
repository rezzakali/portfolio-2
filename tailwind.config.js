/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
