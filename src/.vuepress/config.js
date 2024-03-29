module.exports = {
  // Ref：https://v1.vuepress.vuejs.org/config
  title: 'Thyme Dev',
  description: "Practical, user-friendly Discord bots for getting things done.",

  // Theme configuration, here is the default theme configuration for VuePress. ：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Coffee', link: '/coffee/' },
      { text: 'Status', link: '/status/' },
      // { text: 'Discord', link: '/discord', target:'_blank' },
    ],
    sidebar: {
      // '/docs/': 'auto',
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          children: [
            ['', 'Home'],
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
            ['betterinvites/v1', 'BetterInvites v1'],
          ]
        },
        {
          title: 'BetterNotes',
          collapsable: false,
          children: [
            ['betternotes/', 'Home'],
          ]
        },
        {
          title: 'Cha Series',
          collapsable: false,
          children: [
            ['cha/ja', '茶 Japanese'],
            ['cha/ko', '차 Korean'],
          ]
        },
      ],
      '/coffee/': [
        {
          title: 'Coffee Series ☕',
          collapsable: false,
          children: [
            ['', 'Home'],
            ['https://coffeebank.github.io/coffee-cogs/start/', 'Getting Started'],
          ]
        },
        {
          title: 'Cherry Emotes',
          collapsable: false,
          children: [
            ['https://coffeebank.github.io/coffee-cogs/emotes/', 'Home'],
          ]
        },
        {
          title: 'Hellohook',
          collapsable: false,
          children: [
            ['https://coffeebank.github.io/coffee-cogs/hellohook/', 'Home'],
          ]
        },
        {
          title: 'Msgmover',
          collapsable: false,
          children: [
            ['https://coffeebank.github.io/coffee-cogs/msgmover/', 'Home'],
          ]
        },
        {
          title: 'More cogs',
          collapsable: false,
          children: [
            ['https://coffeebank.github.io/coffee-cogs/bartender/', 'bartender'],
            ['https://coffeebank.github.io/coffee-cogs/coffeetime/', 'coffeetime'],
            ['https://coffeebank.github.io/coffee-cogs/coffeetools/', 'coffeetools'],
            ['https://coffeebank.github.io/coffee-cogs/dmreply/', 'dmreply'],
            ['https://coffeebank.github.io/coffee-cogs/jsonrequest/', 'jsonrequest'],
            ['https://coffeebank.github.io/coffee-cogs/kyarutail/', 'kyarutail'],
            ['https://coffeebank.github.io/coffee-cogs/loveplay/', 'loveplay'],
            ['https://coffeebank.github.io/coffee-cogs/pinboard/', 'pinboard'],
            ['https://coffeebank.github.io/coffee-cogs/quarantine/', 'quarantine'],
            ['https://coffeebank.github.io/coffee-cogs/sendhook/', 'sendhook'],
            ['https://coffeebank.github.io/coffee-cogs/spotifyembed/', 'spotifyembed'],
            ['https://coffeebank.github.io/coffee-cogs/websearch/', 'websearch'],
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
    lastUpdated: false,
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
    ['script',{ async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-1GJ9K4097E' }],
    ['script', {}, ["window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-1GJ9K4097E');"]],
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
        serviceWorker: false,
        updatePopup: true
      }
    ],
  ],
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-attrs'))
    }
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}
