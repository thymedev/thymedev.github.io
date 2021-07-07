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
    "revision": "648daac125b95babb29ac47a72532638"
  },
  {
    "url": "assets/css/0.styles.8f2b8452.css",
    "revision": "cf4679b5b158d286339523dc61bf6cd7"
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
    "url": "assets/js/10.e3749530.js",
    "revision": "136b6ba3c2f85aa10c86bd2a993e5a97"
  },
  {
    "url": "assets/js/11.d0f71a34.js",
    "revision": "d037448f3d50e59d1aec0a86cc42429c"
  },
  {
    "url": "assets/js/12.20ff99b2.js",
    "revision": "e0d619e5cfa7a707fdbf8ea80385368e"
  },
  {
    "url": "assets/js/13.05369158.js",
    "revision": "caeb8ba9277294610f208ee993c97c3c"
  },
  {
    "url": "assets/js/14.0f65ff6c.js",
    "revision": "5c026a54b702e488eefb5fc7115771f0"
  },
  {
    "url": "assets/js/15.a2e39033.js",
    "revision": "f1c8794690542b858a6efb0fb9dfb650"
  },
  {
    "url": "assets/js/16.a830ea86.js",
    "revision": "506307a757ff9e63526480ad4843e022"
  },
  {
    "url": "assets/js/17.32782c4c.js",
    "revision": "99705f12494989171be31804c453d599"
  },
  {
    "url": "assets/js/18.5bf5dea9.js",
    "revision": "aeb4098954cb7703521e5aaad6277cb0"
  },
  {
    "url": "assets/js/19.7c648de8.js",
    "revision": "b501eae685c7e2c61b47c1f44c010002"
  },
  {
    "url": "assets/js/2.f146273e.js",
    "revision": "026e5ba15f85243a152ee61e74dbf57b"
  },
  {
    "url": "assets/js/3.d554b303.js",
    "revision": "a336e0ba5a875b6fdf98cdd7a2f2f972"
  },
  {
    "url": "assets/js/4.f87645b0.js",
    "revision": "6fe6208c0b08d254c4eb94029462429c"
  },
  {
    "url": "assets/js/5.16a14485.js",
    "revision": "e508019c55e10391df1745966a6702fb"
  },
  {
    "url": "assets/js/6.6a0321f1.js",
    "revision": "e2dbfc1fbaa6475273afc856de135c4a"
  },
  {
    "url": "assets/js/7.05f0c28e.js",
    "revision": "27051c4cc3b812734dd85e774f0784ba"
  },
  {
    "url": "assets/js/8.5b582e01.js",
    "revision": "32d25e647ffc1fd3f4a979aeb98cc242"
  },
  {
    "url": "assets/js/9.093bc694.js",
    "revision": "c871e3d367334a3f19a21eb0c3264579"
  },
  {
    "url": "assets/js/app.4d8e3037.js",
    "revision": "e059a684a3732d766b44d3bde005e556"
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
    "revision": "288980e8fdb0ccec4f16db60e7130108"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "0483d36227b8ae680ff7c44ece24b474"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "a6469a992a160b22ade7b7e766d9be1c"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "351669d6dad46fb5595828634ecfa1f6"
  },
  {
    "url": "docs/index.html",
    "revision": "f90513789d19fb6f12acd99e0055651f"
  },
  {
    "url": "index.html",
    "revision": "155b576e1d73da4f6f857bbe8f0e2cd1"
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
    "url": "media/ezgif-2-80ca74867615[1].gif",
    "revision": "0a011f26fd5583dcc84b762bede0f477"
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
