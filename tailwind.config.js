module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : 'aot',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
