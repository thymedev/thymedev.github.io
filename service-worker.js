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
    "revision": "e3dc204a6935e3537a831684a6118882"
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
    "url": "assets/js/18.a0d21496.js",
    "revision": "1122106ddeed0b7773cec9629acdd496"
  },
  {
    "url": "assets/js/19.79f18f81.js",
    "revision": "bd925582b61bd1d1df0e07cd5eb3810d"
  },
  {
    "url": "assets/js/2.a9b40460.js",
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
    "url": "assets/js/app.7ffefb29.js",
    "revision": "369cce34bdac90fba9e6c095b873ea90"
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
    "revision": "0502c9990a78750ff1555c380b4a691a"
  },
  {
    "url": "config/index.html",
    "revision": "3c43a93e0661036e937a9926b081d5f0"
  },
  {
    "url": "config/using-vue.html",
    "revision": "ae580cb7672c70915e3578a34e877a37"
  },
  {
    "url": "discord.html",
    "revision": "d56553ba7f745ba3b65db449c33b87fa"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "4d406f7ce25275ea1e6b503806539051"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "b4bb7d6b078fb6b5e87ee922922487f0"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "e56558b08d3fe8f594723b457e2cc6fe"
  },
  {
    "url": "docs/index.html",
    "revision": "0fcd970e1bb0c07956460a4249d95fe5"
  },
  {
    "url": "index.html",
    "revision": "7994df7d4dd8c392934ef9223a63cb7c"
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
