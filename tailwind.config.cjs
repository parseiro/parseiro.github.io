/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
              'fira': ["Fira Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: {
                    g1: '#f7f7f7',
                    g3: '#DEDEDE',
                    g5: '#B2B2B2',
                    g7: '#717171',
                    g9: '#404040',
                    g10: '#2e2e2e',
                    g12: '#0E0E0E',
                }
            }
        },
    },
    plugins: [],
}
