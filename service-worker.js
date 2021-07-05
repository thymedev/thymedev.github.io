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
    "revision": "9f197f8764a8b094d7c7aaeaf3ea9f3e"
  },
  {
    "url": "assets/css/0.styles.c93c0202.css",
    "revision": "e3fb21255dab866186e603efade8af5b"
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
    "url": "assets/js/10.47ba59ad.js",
    "revision": "9642956cbe4fc0ef229500b5963630b4"
  },
  {
    "url": "assets/js/11.262e0f89.js",
    "revision": "b5a5c461fca3349249d375010ddb93b3"
  },
  {
    "url": "assets/js/12.aea9d3d3.js",
    "revision": "9e808b7cf967b846ed3329ec5ecc0f00"
  },
  {
    "url": "assets/js/13.378b17ac.js",
    "revision": "2031d6239dcbaa2e529a339534c94839"
  },
  {
    "url": "assets/js/14.b394ea3e.js",
    "revision": "0ea1adc6dde7d8c3e5f9be153c690373"
  },
  {
    "url": "assets/js/15.160d72cf.js",
    "revision": "bc9aa4fba37360b8a37e852d539fe587"
  },
  {
    "url": "assets/js/16.4c0bb08d.js",
    "revision": "9873ad41897de55d36ddf76b96f203fe"
  },
  {
    "url": "assets/js/17.52b96969.js",
    "revision": "1ac16d62df3048924c7279fa80bfa438"
  },
  {
    "url": "assets/js/18.4741ce7e.js",
    "revision": "5c76138cbc85bf3ae2949e554a635518"
  },
  {
    "url": "assets/js/19.79f18f81.js",
    "revision": "bd925582b61bd1d1df0e07cd5eb3810d"
  },
  {
    "url": "assets/js/2.7273b26b.js",
    "revision": "9b7fc95e9b37db966158b6f73ee7641b"
  },
  {
    "url": "assets/js/20.823d9fe4.js",
    "revision": "73e862152e8508607605d32c66e84755"
  },
  {
    "url": "assets/js/21.e1accca1.js",
    "revision": "40381e892046ed39bfbedc0fcf6a7747"
  },
  {
    "url": "assets/js/22.2d1278f5.js",
    "revision": "d43636b6a8a2ad82ab502ef1ea12f1b2"
  },
  {
    "url": "assets/js/3.141be6f3.js",
    "revision": "070e859ae22a6cb201aa7b8b672a22ec"
  },
  {
    "url": "assets/js/4.57355589.js",
    "revision": "2857b7238b6bb4315d673fabcfcbc2ab"
  },
  {
    "url": "assets/js/5.584455d9.js",
    "revision": "914900ac37ce499bbd1ed795db84780c"
  },
  {
    "url": "assets/js/6.d70077a8.js",
    "revision": "f091a42c6f5446400c7932b3d8db895d"
  },
  {
    "url": "assets/js/7.e19649e3.js",
    "revision": "6eb6280ecfd034b122fe6cbc860c139d"
  },
  {
    "url": "assets/js/8.52cf005a.js",
    "revision": "08f34f286455a06b4077ab7bc353a0c9"
  },
  {
    "url": "assets/js/9.66127db7.js",
    "revision": "5a3055d6b6083ad287242ec38a353292"
  },
  {
    "url": "assets/js/app.1fb56199.js",
    "revision": "9ca3b462d6b2a46a15e4c36fb0ddaaa2"
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
    "url": "config/guide.html",
    "revision": "07ed0dd84b876df0d292f41f7e7120fb"
  },
  {
    "url": "config/index.html",
    "revision": "c55a07fe3e8715340af50d069cb0fd14"
  },
  {
    "url": "config/using-vue.html",
    "revision": "c28b85204e0418f0038afb80b41921ae"
  },
  {
    "url": "discord.html",
    "revision": "5507fc42a80f16698d42633eff81c6c6"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "59267b814272ee2860ce200956293a6c"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "7c71834ba24a88aa4f6bb37623fee438"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "2ae354b99cf2f6016f67446a45e01086"
  },
  {
    "url": "docs/index.html",
    "revision": "7ed1c9f58dce839b0e97ed575c29779b"
  },
  {
    "url": "index.html",
    "revision": "d6f76e6777db79841a03874738db9b89"
  },
  {
    "url": "logos/full.png",
    "revision": "dd1b92a0473e3d59018f2548bde66018"
  },
  {
    "url": "logos/sq-rn.png",
    "revision": "cb908c5f825336218a3c2a5f0195f451"
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
