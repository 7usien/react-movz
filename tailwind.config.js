/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Inria+Sans': ['Inria Sans'],
      },
      colors: {
        primary: 'var(--primary)',
        darkest: 'var(--darkest)',
        dark: 'var(--dark)',
        medium: 'var(--medium)',
        light: 'var(--light)',
        lightest: 'var(--lightest)',
      },
    },
  },
  plugins: [],
};
