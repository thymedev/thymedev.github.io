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
    "revision": "6cb3ffb03de50152af3515499a7f5813"
  },
  {
    "url": "about.html",
    "revision": "e6ea15bd344912ffe9ff410545f646e4"
  },
  {
    "url": "assets/css/0.styles.9556c6d6.css",
    "revision": "3c92c516d0424237fa73ca81dda29fa1"
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
    "url": "assets/js/10.fb5cfe63.js",
    "revision": "ff4c863f40424841365875fc17ffb36f"
  },
  {
    "url": "assets/js/11.b073d247.js",
    "revision": "6bce03760ac98a2efb3ddc43218ee75d"
  },
  {
    "url": "assets/js/12.18d14003.js",
    "revision": "8c191b1156fe54f31b101ac44a22387b"
  },
  {
    "url": "assets/js/13.dc33e05e.js",
    "revision": "6a3ee36f1e7d5c3dccbb270b23c24ac7"
  },
  {
    "url": "assets/js/14.d913ef4a.js",
    "revision": "6a177e6e0535dd6dcbfcadf2fab6771f"
  },
  {
    "url": "assets/js/15.c4ae0b14.js",
    "revision": "ec5a6b23f2a9027a3658499d650da4b1"
  },
  {
    "url": "assets/js/16.fcbdf55f.js",
    "revision": "e0328cec4df0b92703ae299dcd9c9ce2"
  },
  {
    "url": "assets/js/17.7244bfae.js",
    "revision": "86bde59b796bd48d9c46975002a30db6"
  },
  {
    "url": "assets/js/18.02db9960.js",
    "revision": "ca9d33c903f3462d43b16cef646f18c8"
  },
  {
    "url": "assets/js/19.facd4808.js",
    "revision": "077fd4b11e7450f12e720c3d4dcab44a"
  },
  {
    "url": "assets/js/2.7c192dfa.js",
    "revision": "39ed648574090a12b9973c2b17bcacb3"
  },
  {
    "url": "assets/js/3.73bc8768.js",
    "revision": "bdde3a1242d1b621295d97b71fbd9007"
  },
  {
    "url": "assets/js/4.1ef926ba.js",
    "revision": "85111f438b422a4b8017191b4e80d312"
  },
  {
    "url": "assets/js/5.d01761ac.js",
    "revision": "89aa2e9c41d1092c181315de3f51c138"
  },
  {
    "url": "assets/js/6.f4008aab.js",
    "revision": "96b3deaa6319962dd4e6336c0903c448"
  },
  {
    "url": "assets/js/7.e6a036ca.js",
    "revision": "a776a82872de196c654e5ef9f68b432f"
  },
  {
    "url": "assets/js/8.b1f96eb0.js",
    "revision": "11887d0c10e6c60ef24706cca29656f7"
  },
  {
    "url": "assets/js/9.fa91cf19.js",
    "revision": "bdd5f9f5bcade69aa5279d073fc856ba"
  },
  {
    "url": "assets/js/app.af751e73.js",
    "revision": "27ea0a6aa99a1d154372fad87b8eb452"
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
    "revision": "292a06808c2ec2e7fc3c1b8f74e5d13a"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "3660355f74ec5e1611bbfca2fd5f50cc"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "3fdf759c16a0ed46ee581328b484d40a"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "10df122d995cefefa260b5ead1affa65"
  },
  {
    "url": "docs/index.html",
    "revision": "072e869f3b6f740d2c4a5e4e820a2212"
  },
  {
    "url": "index.html",
    "revision": "1f489959ecf6031159b72c5e2e70605e"
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
  },
  {
    "url": "status.html",
    "revision": "712c5c8993fadfc59c67149e3c367fde"
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
