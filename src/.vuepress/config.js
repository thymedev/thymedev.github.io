module.exports = {
  // Ref：https://v1.vuepress.vuejs.org/config
  title: 'Thyme Dev',
  description: "Practical, user-friendly Discord bots for getting things done.",

  // Theme configuration, here is the default theme configuration for VuePress. ：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Status', link: '/status' },
      { text: 'Discord', link: '/discord', target:'_blank' },
    ],
    sidebar: {
      // '/docs/': 'auto',
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          children: [
            ['', 'Home'],
            'invite/',
          ]
        },
        {
          title: 'BetterCensor',
          collapsable: false,
          children: [
            ['bettercensor/', 'Home'],
          ]
        },
        {
          title: 'BetterInvites',
          collapsable: false,
          children: [
            ['betterinvites/', 'Home'],
          ]
        },
        {
          title: 'BetterNotes',
          collapsable: false,
          children: [
            ['betternotes/', 'Home'],
          ]
        },
      ],
      // '/': 'auto',
    },
    repo: 'thymedev/thymedev.github.io',
    repoLabel: 'GitHub',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Help us improve this page',
    lastUpdated: 'Last updated',
    logo: '/assets/img/sq-rn-48.png',
    activeHeaderLinks: true, // Default: true - By default, the nested header links and the hash in the URL are updated as the user scrolls to view the different sections of the page.
    displayAllHeaders: true, // Default: false
    smoothScroll: true,
    searchPlaceholder: 'Search Docs...',
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/assets/img/sq-rn-96.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#199966' }],
    ['link', { rel: 'apple-touch-icon', href: '/logos/sq-rn.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { property: 'og:site_name', content: 'Thyme Dev' }],
    ['meta', { property: 'og:image', content: '/assets/img/sq-rn-72.png' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' }],
  ],
  plugins: [
    ['@vuepress/html-redirect',
      {
        countdown: 0,
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}
