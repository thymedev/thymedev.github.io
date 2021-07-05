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
    "revision": "bf27a005682fce2187b1e94074f389e6"
  },
  {
    "url": "assets/css/0.styles.36d925c9.css",
    "revision": "a4487fc99f29744fba8df700bfe66da7"
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
    "url": "assets/js/17.eb4c6daa.js",
    "revision": "95871f5723839c99ddda408cb869b637"
  },
  {
    "url": "assets/js/18.bdea240c.js",
    "revision": "066b5ef3af5d81a4dd3d98989763c141"
  },
  {
    "url": "assets/js/19.c619389b.js",
    "revision": "4a3273ece730863bc6d170df4100fba2"
  },
  {
    "url": "assets/js/2.a9b40460.js",
    "revision": "9b7fc95e9b37db966158b6f73ee7641b"
  },
  {
    "url": "assets/js/20.4e99edbd.js",
    "revision": "43cba71f1b038cfc05f36631820ff90c"
  },
  {
    "url": "assets/js/3.e6172d5d.js",
    "revision": "2b7fe161a852ddd42fb30456900dd964"
  },
  {
    "url": "assets/js/4.cd0a67d3.js",
    "revision": "eab6b217687cc12c9a5b7252b35be9ae"
  },
  {
    "url": "assets/js/5.cf192cea.js",
    "revision": "405f14495b740a92c36ff1d650d3505d"
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
    "url": "assets/js/9.2f51184a.js",
    "revision": "0295ace899841ee6c385ab0b268f9ff3"
  },
  {
    "url": "assets/js/app.6ae0844f.js",
    "revision": "4db3e3179cc014f803f68656705de245"
  },
  {
    "url": "config/guide.html",
    "revision": "fdaedba266b4eb5d3429848404e1d106"
  },
  {
    "url": "config/index.html",
    "revision": "583b9710525ebfd0d8e0b44e699f32fb"
  },
  {
    "url": "config/using-vue.html",
    "revision": "5cdfab6af9a355395cd07448a1dbdd37"
  },
  {
    "url": "discord.html",
    "revision": "4db05d59ee6a67f03488f1ca6ff3247f"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "7a1bca4f221c7bb0fbecb3e7a60ffacc"
  },
  {
    "url": "docs/index.html",
    "revision": "e9f76fe2b3f1ebcd17b5dc042f386b1e"
  },
  {
    "url": "index.html",
    "revision": "5c23acbd789bc461f68c1974db9a2d45"
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
