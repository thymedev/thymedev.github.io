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
    "revision": "64061e9d7fe6129b2efa83719304170b"
  },
  {
    "url": "about.html",
    "revision": "8bfb4b82cae17f6e7bc056626b3d6b62"
  },
  {
    "url": "assets/css/0.styles.bc506600.css",
    "revision": "ba9e2862abdf20f34847c33ee3fc0a02"
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
    "url": "assets/js/18.a63a2555.js",
    "revision": "5291e97081b581117f59af5a535af201"
  },
  {
    "url": "assets/js/19.8d0ae257.js",
    "revision": "883a0354c9ff378bff1b5fcc676d1383"
  },
  {
    "url": "assets/js/2.5849dba7.js",
    "revision": "bb96d64d4dcd12510a3fa8bb47f7b10f"
  },
  {
    "url": "assets/js/20.55dd786d.js",
    "revision": "b9efa8233b688b7e253b26bdb88a3f36"
  },
  {
    "url": "assets/js/21.0e8900ff.js",
    "revision": "eb46a1fee93a5de518559943f2d63d58"
  },
  {
    "url": "assets/js/22.ce5d3926.js",
    "revision": "e53d1c0d2c57ab3b3ef6a9bbcb3912b1"
  },
  {
    "url": "assets/js/23.a4211eeb.js",
    "revision": "9069d430473cf81a831e1550fcb402db"
  },
  {
    "url": "assets/js/3.79b1cffb.js",
    "revision": "9a3a380e0c1ea5d9c7aa4e04cbb07e7d"
  },
  {
    "url": "assets/js/4.3cf6ffa0.js",
    "revision": "80c5cc73058ceb4b8ff5a844dd55ea17"
  },
  {
    "url": "assets/js/5.531e4409.js",
    "revision": "86687f1a395e79740351a18bf1f61405"
  },
  {
    "url": "assets/js/6.f4008aab.js",
    "revision": "96b3deaa6319962dd4e6336c0903c448"
  },
  {
    "url": "assets/js/7.45d4e1f5.js",
    "revision": "d15416d2916ff04e3cdb0942d1df138a"
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
    "url": "assets/js/app.cc609bc1.js",
    "revision": "39eaf84a5f22d42c307677f7ccf88f0c"
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
    "revision": "5f1a60920d46de3865f1a9aef7b44675"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "ed41e7c1b1b59d3d5e37c0aa4ad2b6ae"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "bfc5212fe46467ecd5794cdd8b0e0dee"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "36b84a29e68aa62f99a0a2c7b8de327d"
  },
  {
    "url": "docs/index.html",
    "revision": "8e63115878a72eb4c749c403edcfe262"
  },
  {
    "url": "index.html",
    "revision": "e1168ab4647f81a90f91831af821d4a4"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "15c9c0f8aadd96af8b5217f574c90e2f"
  },
  {
    "url": "invite/betterinvite.html",
    "revision": "1a5e3cca4ad217cf892c851caf5b6717"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "c1c0de70db3bd3a41436bd9a7ff11bf7"
  },
  {
    "url": "invite/index.html",
    "revision": "22d451457b41791d7b6299d54fa3bb37"
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
    "revision": "3f63ab967f72755a6ad1313cec50a8c5"
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
