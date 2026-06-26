/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C5CFC',
        'primary-light': '#EDE9FF',
      },
    },
  },
  plugins: [],
};
