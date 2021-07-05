module.exports = {
  // Ref：https://v1.vuepress.vuejs.org/config
  title: 'Thyme Dev',
  description: "Practical, user-friendly Discord bots for getting things done.",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/sq-rn-96.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#199966' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/logos/sq-rn.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' }],
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/assets/img/sq-rn-48.png',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Discord',
        link: '/discord',
        target:'_blank'
      }
    ],
    displayAllHeaders: true, // Default: false
    searchPlaceholder: 'Search Docs...',
    sidebar: {
      // '/docs/': 'auto',
      // '/docs/': [
      //   {
      //     title: 'Docs',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //     ]
      //   }
      // ],
      '/config/': [
        {
          title: 'Config',
          collapsable: false,
          children: [
            '',
            'guide',
            'using-vue',
          ]
        }
      ],
    }
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
}
