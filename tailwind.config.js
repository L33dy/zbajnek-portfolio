/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': 'Urbanist sans-serif'
      },
      fontSize: {
        '10xl': '10rem'
      },
      screens: {
        '3xl': '2000px'
      }
    },
  },
  plugins: [],
}

