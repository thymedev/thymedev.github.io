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
    "revision": "252692faf0a3feb65fe78f308ed785e2"
  },
  {
    "url": "assets/css/0.styles.b438633b.css",
    "revision": "6fb7cb94aa164f0b4d7289ea628cb288"
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
    "url": "assets/js/15.b89d1e38.js",
    "revision": "596416fc25135340e474edeb8fc4d67b"
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
    "url": "assets/js/2.73e2c8f1.js",
    "revision": "71fa63c389a7576146f080fec5293654"
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
    "url": "assets/js/8.c9538839.js",
    "revision": "52de4cb1f48d981e22fcb9ccaf257695"
  },
  {
    "url": "assets/js/9.093bc694.js",
    "revision": "c871e3d367334a3f19a21eb0c3264579"
  },
  {
    "url": "assets/js/app.255dac81.js",
    "revision": "52a849aa6ad0e2ffd6035f3ab6763d41"
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
    "revision": "c1c13f2d7a65b734390bc769f1fb69b9"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "55c917b61be917a169d43bcb4cb36fb9"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "70db22cd8641c1ae9f651abf232e591c"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "1e7ae61e8cc12c19bc81b7d43078bdb1"
  },
  {
    "url": "docs/index.html",
    "revision": "8c5bd84405721a74a954208df72e5658"
  },
  {
    "url": "index.html",
    "revision": "b55612319bf74ed888441cea78cd8adb"
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
