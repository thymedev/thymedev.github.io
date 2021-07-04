// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import RedirectLayout from '~/layouts/Redirect.vue'
import NavComponent from '~/components/Nav.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Redirect', RedirectLayout)
  Vue.component('Nav', NavComponent)

  // Add an external CSS file
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Yrsa:wght@300;400;500;600;700&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
  })

  // Add meta tags
  head.meta.push({
    key: 'og:site_name',
    name: 'og:site_name',
    content: `Thyme Dev`,
  })
  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: `/assets/img/sq-rn-72.png`,
  })
}
