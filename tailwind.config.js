/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#64ffda',
        'card': '#112240',
        'background': '#0a192f'
      }
    },
  },
  plugins: [],
};
