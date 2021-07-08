module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
      './src/.vuepress/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.pug',
      './src/**/*.md'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fcfcfc': '#fcfcfc',
        'gray-150': '#EEEFF2',
        'gray-175': '#E9EBEE',
      },
      screens: {
        'xs': '320px',
        'sidebar': '719px',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
