/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55aa4d20fd23fa47a323d8ecf3843841"
  },
  {
    "url": "about.html",
    "revision": "42d214630e4b6ad26c4d85f457c75fa4"
  },
  {
    "url": "assets/css/0.styles.82bebb6f.css",
    "revision": "36da703d3aefd1e78c9743cbbce4ba66"
  },
  {
    "url": "assets/img/emotes.9103fe6b.jpg",
    "revision": "9103fe6b8442d67c16c40d74ede0ecea"
  },
  {
    "url": "assets/img/hellohook.f85bb281.jpg",
    "revision": "f85bb28109e6c35548f18a90dd7407d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sq-rn-144.png",
    "revision": "2624541a0f8b80a3cd78404c7f92603b"
  },
  {
    "url": "assets/img/sq-rn-192.png",
    "revision": "932d26b53461b4e0841665e66c2a977d"
  },
  {
    "url": "assets/img/sq-rn-48.png",
    "revision": "832c853621061d306ab722d993188a44"
  },
  {
    "url": "assets/img/sq-rn-512.png",
    "revision": "46b2ad17e523baff61eb348abaeefb32"
  },
  {
    "url": "assets/img/sq-rn-72.png",
    "revision": "7b5b64e7f0d43451f6a7dd224a400f6c"
  },
  {
    "url": "assets/img/sq-rn-96.png",
    "revision": "9b635813348a4d8a4f35fd0df6c03584"
  },
  {
    "url": "assets/js/10.50e8c4b2.js",
    "revision": "6d930891be36b53cfe824a8545b4602e"
  },
  {
    "url": "assets/js/11.c6f6b395.js",
    "revision": "1706f2d9d30e18ea69ff06b9a61f3a50"
  },
  {
    "url": "assets/js/12.8c00f6cb.js",
    "revision": "57ff93750f02219bca1a686175e8a258"
  },
  {
    "url": "assets/js/13.0ff55e09.js",
    "revision": "e1db948fa37a47766abffe53ca52476b"
  },
  {
    "url": "assets/js/14.c25f8dba.js",
    "revision": "ac0ff516c95e947d8f27d04ce45fbcda"
  },
  {
    "url": "assets/js/15.b2586fb2.js",
    "revision": "ee345c127c10a8bdcd91b45815ca97e5"
  },
  {
    "url": "assets/js/16.5e5e213c.js",
    "revision": "5c3d4470dc33447c76fa09500cba795f"
  },
  {
    "url": "assets/js/17.2ca4f529.js",
    "revision": "fa4f6d3fe6472c4711129a623c9c3493"
  },
  {
    "url": "assets/js/18.c7258a26.js",
    "revision": "42e2c5d77c8e48c61fc67546ab2d50f9"
  },
  {
    "url": "assets/js/19.42f6f454.js",
    "revision": "a1880e3f42bc1d1a266e80087941919c"
  },
  {
    "url": "assets/js/2.4af9e962.js",
    "revision": "b3a56bc7bdc00098f0224570ea644173"
  },
  {
    "url": "assets/js/20.a7cf22fd.js",
    "revision": "2ec7f1da95470a179b16cc0c5baa7ba1"
  },
  {
    "url": "assets/js/21.b4c46956.js",
    "revision": "5c305d8db7d9e1a05b252305b357881e"
  },
  {
    "url": "assets/js/22.e19c40b6.js",
    "revision": "88f42377d0e5ea848c25dc26b2c835d6"
  },
  {
    "url": "assets/js/23.4bdec324.js",
    "revision": "fd0d19bb3bf03ed773690571b86c4ae9"
  },
  {
    "url": "assets/js/24.8aecba55.js",
    "revision": "abea13d599ad46a94725e68b7d80c1da"
  },
  {
    "url": "assets/js/25.ca7ebfd7.js",
    "revision": "bcff7c1b2186ce4cbd174f783d549fc1"
  },
  {
    "url": "assets/js/26.9a1a5676.js",
    "revision": "63b2850fa4d23b424fd2129d870a2df6"
  },
  {
    "url": "assets/js/27.88882615.js",
    "revision": "4cbf715238e720f4ff2e51c3fff3a325"
  },
  {
    "url": "assets/js/28.4cf88296.js",
    "revision": "a2d96604681e9035a43accddcf26766a"
  },
  {
    "url": "assets/js/29.ab759c6d.js",
    "revision": "c560971122c759f4a3dd3970d1e8bfa6"
  },
  {
    "url": "assets/js/3.f66f6858.js",
    "revision": "7b9e9ab8891665e8d567ff2fd75dbe4c"
  },
  {
    "url": "assets/js/30.2fcca5bf.js",
    "revision": "1af93b8bac79f32ced99056347acc3dc"
  },
  {
    "url": "assets/js/4.c8fe84f1.js",
    "revision": "42afc3914939aa83ad95d4eff5d205cb"
  },
  {
    "url": "assets/js/5.148fe112.js",
    "revision": "bd3ca3bd7ffa94f0d1375ee97af79bdb"
  },
  {
    "url": "assets/js/6.fa1ac0d2.js",
    "revision": "82eb3d7fca4752574699205295d0712a"
  },
  {
    "url": "assets/js/7.ed1d5066.js",
    "revision": "92e07db9e5bdff3e1ea86e81f756ea74"
  },
  {
    "url": "assets/js/8.ea985b51.js",
    "revision": "0cb6822326ef60e7e593b954af32a02b"
  },
  {
    "url": "assets/js/9.be24e4d0.js",
    "revision": "6c2466017b73fa84d37766ad4df434df"
  },
  {
    "url": "assets/js/app.9bb53c71.js",
    "revision": "9b4b7d94db464debc9f52ac423c571f7"
  },
  {
    "url": "bettercensor/index.html",
    "revision": "1d3e78f00a842329505b0904c280bd6b"
  },
  {
    "url": "betterinvites/index.html",
    "revision": "ddbfb8c82046bfced65ae144e3b3d00d"
  },
  {
    "url": "betternotes/index.html",
    "revision": "cbb389291d31a24a1fd5adbdfc55844c"
  },
  {
    "url": "bots/index.html",
    "revision": "cfca9719db120182e1d085f8a35c5f62"
  },
  {
    "url": "coffee-cogs/index.html",
    "revision": "9ff02d2d7c5da8f94df2a3726a8a1357"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "b18212761629f24a50a2aa795a695441"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "f13c652bc8eb601ee824ef5b4c1aee2d"
  },
  {
    "url": "coffee/index.html",
    "revision": "fa110cca93bca4e6f5222c37829ddaf0"
  },
  {
    "url": "coffee/start.html",
    "revision": "5cf71a59708f31323c468bcd8b72109a"
  },
  {
    "url": "discord.html",
    "revision": "a79484fd0cf8eb49dc7ea0554313b765"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "92f6089f390aef01c354dbe43bf00547"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "e245915d90784de5ad98c53f83fa9bd9"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "e55139e0e917a77276b49716610522f1"
  },
  {
    "url": "docs/index.html",
    "revision": "be93e79b461dad3c5efeccb019fd83c9"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "105970ba22935b6e0bbb09f478be6d22"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "dd1887a014193b40c5d82c73b7e1bf8d"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "4814b67004861a5ff6dc89b2079a1422"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "da1ab512bcd89e4b61177aa7eef689ed"
  },
  {
    "url": "invite/index.html",
    "revision": "b36955d4e57ef0480793203d4354d652"
  },
  {
    "url": "legal.html",
    "revision": "1adfb876329b78e1a80cb756378a75a5"
  },
  {
    "url": "logos/full.png",
    "revision": "dd1b92a0473e3d59018f2548bde66018"
  },
  {
    "url": "logos/sq-rn.png",
    "revision": "cb908c5f825336218a3c2a5f0195f451"
  },
  {
    "url": "media/BetterInvites_bstart.png",
    "revision": "2a5f654e1201ac6bec531a3cb911facb"
  },
  {
    "url": "media/ezgif-2-80ca74867615[1].gif",
    "revision": "0a011f26fd5583dcc84b762bede0f477"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "privacy/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "status.html",
    "revision": "23d55a826a2a0c6ff3763319e4c0d82f"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "terms/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "tos/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
