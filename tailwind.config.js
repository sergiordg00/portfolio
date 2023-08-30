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
        'background': '#0a192f',
        'light': '#ccd6f6',
        'dark': '#8892b0',
      }
    },
  },
  plugins: [],
};
