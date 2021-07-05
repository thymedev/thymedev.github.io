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
    "revision": "e750f91291c3f9fc121e1a1f624b1038"
  },
  {
    "url": "assets/css/0.styles.a64016a5.css",
    "revision": "d5534c8c6b3f4fdbf1c203aa74d32bb0"
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
    "url": "assets/js/13.1ca2e3de.js",
    "revision": "5e20810d977444eea7fef0674b1dc100"
  },
  {
    "url": "assets/js/14.a7f15ebb.js",
    "revision": "faa271b4e003d1d301f7c46d34b5a78f"
  },
  {
    "url": "assets/js/15.b16ff40d.js",
    "revision": "8e3d9abda2df24173f1ee6fcbaf3cb55"
  },
  {
    "url": "assets/js/16.3cf0bc7d.js",
    "revision": "aa99af17c9aee2dcdf1532c1aa4851e5"
  },
  {
    "url": "assets/js/17.275dbc6f.js",
    "revision": "e7546494c2c635365fb87a4b0de06520"
  },
  {
    "url": "assets/js/18.9ecf1c0f.js",
    "revision": "bc0205d169bd7cf167e00440f3fd0f0a"
  },
  {
    "url": "assets/js/19.5f607df0.js",
    "revision": "6c2553142ba2885218865d78873f7159"
  },
  {
    "url": "assets/js/2.6e793de5.js",
    "revision": "9b7fc95e9b37db966158b6f73ee7641b"
  },
  {
    "url": "assets/js/3.ae9bf481.js",
    "revision": "11c67e2d0390de9482b02286cfa0de52"
  },
  {
    "url": "assets/js/4.559ce3aa.js",
    "revision": "6a26f98aff5fe9c16898652333c3e3ba"
  },
  {
    "url": "assets/js/5.cc9dac4f.js",
    "revision": "bd9be2d300553ac8270c4f92159205b5"
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
    "url": "assets/js/9.20449d49.js",
    "revision": "eb8303d763ffcfc494e924ebb84e2080"
  },
  {
    "url": "assets/js/app.23f06656.js",
    "revision": "a0acf74ccc231fb3eae18c736928f9f2"
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
    "url": "discord.html",
    "revision": "83ce6f7ea670ae740d4e37073e7a2ace"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "18629954d7f79ec60c251eceb300575d"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "4b19e52b83b4605dee4d93b3e5904b00"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "cc583092e6256e6630c7d6fa22614442"
  },
  {
    "url": "docs/index.html",
    "revision": "39ef4d3dcf4cd756f9828ec14d23d349"
  },
  {
    "url": "index.html",
    "revision": "a20cb1c70d31cbbd3252e46b26e1062c"
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
