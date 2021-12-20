const colors = require('tailwindcss/colors')


const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      colors: {
        ...colors,
        bordergray: '#ebebf0',
        buttonblue: {
          100: '#f1f5ff',
          200: '#e1ebfe',
          300: '#d3e1ff',
          600: '#8991a1',
          // 400: '',
          800: '#515e76',
          900: '#334361',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      extend: {},
  },
  // Only add this if you installed the TailwindCSS-plugins:
  plugins: [
    require("@tailwindcss/typography"),  
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}

module.exports = config
