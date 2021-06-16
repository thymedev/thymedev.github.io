// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Thyme Dev',
  siteUrl: 'https://thymedev.github.io',
  siteDescription: 'Practical, user-friendly Discord bots for getting things done.',
  templates: {
    Post: '/blog/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#455864",
        icon_path: "./static/logos/sq-rn.png",
        name: "Thyme Dev",
        short_name: "Thyme",
        theme_color: "#199966",
        lang: "en",
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    }
  ],
}
