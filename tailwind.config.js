/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const {
    colors
} = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        fontFamily: {
            display: ['"Playfair Display"', 'serif'],
            body: ['Fauna One', 'sans-serif'],
        },
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
        }
    },
    variants: {},
    plugins: []
}