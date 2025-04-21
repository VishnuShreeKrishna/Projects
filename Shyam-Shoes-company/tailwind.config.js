const { plugin } = require('postcss');
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [
      plugin(function({addVariant}){
        addVariant("open-menu", ".open-menu &");
      })
    ],
  }
  