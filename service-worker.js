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
    "revision": "a3dedfa53fcc77922d4aa5020f7c10e2"
  },
  {
    "url": "about.html",
    "revision": "17cf18ff932b32b39a2e87bcf2bef996"
  },
  {
    "url": "assets/css/0.styles.a97119ca.css",
    "revision": "79dbe194c85aee56dfe9b888c3f449ca"
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
    "url": "assets/js/10.5f0086e2.js",
    "revision": "9837da13ea5e6cda50ba963a3ed1118c"
  },
  {
    "url": "assets/js/11.c82feb39.js",
    "revision": "135022eca01746a5511f2e04a0917269"
  },
  {
    "url": "assets/js/12.d8ac13dc.js",
    "revision": "a37898dfa9e077dddc3307e3d4ae19c0"
  },
  {
    "url": "assets/js/13.0fc09954.js",
    "revision": "af9db6aa16fa03f44b47b3523fe65828"
  },
  {
    "url": "assets/js/14.a1e7f294.js",
    "revision": "cbfa57aac21b844521f612a4e3d39128"
  },
  {
    "url": "assets/js/15.d67d2d83.js",
    "revision": "2d2de81be4a8e74d56eac2c1f0bc4432"
  },
  {
    "url": "assets/js/16.ac0003fa.js",
    "revision": "0d13c8859cbb18d6134c0523451e7f1e"
  },
  {
    "url": "assets/js/17.4d866fb9.js",
    "revision": "02319864095cca63caf8851a45dd2649"
  },
  {
    "url": "assets/js/18.0fac3204.js",
    "revision": "a3b4c386d5aee9aa46223f34fb3e45e3"
  },
  {
    "url": "assets/js/19.b8ba6614.js",
    "revision": "b392ba98418deadc6b68977d24ce3d1c"
  },
  {
    "url": "assets/js/2.fd34c10f.js",
    "revision": "7ee4be5fdd21c64bfc42502399929a56"
  },
  {
    "url": "assets/js/20.782a5db0.js",
    "revision": "f5ac0f629a004e6a07fbfe04f158332b"
  },
  {
    "url": "assets/js/21.1e10b75c.js",
    "revision": "c9323059901101294e424c75bc494ccd"
  },
  {
    "url": "assets/js/22.3eff5ea9.js",
    "revision": "fb6a5e252865e9b96bad1fd0e1d172b4"
  },
  {
    "url": "assets/js/23.8f4cffe3.js",
    "revision": "16d2f2b4c46c043f65fc4f625cf824aa"
  },
  {
    "url": "assets/js/24.0422f129.js",
    "revision": "537d4250c5624e5662c485669b803146"
  },
  {
    "url": "assets/js/25.45cd9c9b.js",
    "revision": "574baa3a989672cb5564c80b6fcb7970"
  },
  {
    "url": "assets/js/26.81f7206a.js",
    "revision": "9a078a5895261a94359b96a332a25c29"
  },
  {
    "url": "assets/js/3.7c2f36e4.js",
    "revision": "5f8cd07bde56925cd2b0ea0bf177f630"
  },
  {
    "url": "assets/js/4.caeda581.js",
    "revision": "156736f799bc6d652d0442d41a6da5a1"
  },
  {
    "url": "assets/js/5.8dbc43b3.js",
    "revision": "7f4df60aac8b9184030f7a686870936e"
  },
  {
    "url": "assets/js/6.bc2bb021.js",
    "revision": "f1726d8ab0555bc785c7a9c2eda8bacd"
  },
  {
    "url": "assets/js/7.a5e19b38.js",
    "revision": "413b1ea4d597e603e1bd8ac5fc61413b"
  },
  {
    "url": "assets/js/8.f3689e5f.js",
    "revision": "4a8d7fe5e0c30a9bbf8b0f064e6b06bd"
  },
  {
    "url": "assets/js/9.35482ae4.js",
    "revision": "e13a46bb882cda07b5daae408ac7be2b"
  },
  {
    "url": "assets/js/app.a56dabff.js",
    "revision": "7c78b468efafb830387d74560d241707"
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
    "revision": "aacd5d105ca3038d6d10fe8842d3bfe9"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "d69c226d19e1f90465c54a71265a9c63"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "cb3a150e4f9826602199141c39a2e788"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "b7c65678daf76be1817b82714d369b35"
  },
  {
    "url": "docs/index.html",
    "revision": "cfdb53b7c58bca8c421473afc109a632"
  },
  {
    "url": "index.html",
    "revision": "1c98603bf545027d993e2a772759fb4d"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "df010dd7148ca877ed9d4b79af0063fb"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "6643b71c477ee193e29665233e49b8be"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "7742bc6f4e3034f44b6651913189c882"
  },
  {
    "url": "invite/index.html",
    "revision": "7b5c8797f728aaaf24671c837a829c19"
  },
  {
    "url": "legal.html",
    "revision": "d100a8c5daf5c2ec2a740c4dfefcb90c"
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
    "revision": "a9561f5e502cda92144216470c301401"
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
