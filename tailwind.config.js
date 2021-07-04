module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.pug',
      './src/**/*.md'
    ],
  },
  theme: {
    extend: {
      colors: {
        'fcfcfc': '#fcfcfc',
        'gray-150': '#EEEFF2',
        'gray-175': '#E9EBEE',
      }
    }
  }
}
