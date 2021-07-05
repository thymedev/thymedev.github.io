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
    "revision": "05371039c07338745868da2bcbbacc4f"
  },
  {
    "url": "assets/css/0.styles.9bfb89b6.css",
    "revision": "3897c95a54a46d0db59c95284d18cd18"
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
    "url": "assets/js/10.3b8751d5.js",
    "revision": "89e22f02c512ae5870420187950d10a5"
  },
  {
    "url": "assets/js/11.13b11548.js",
    "revision": "d7d3f1154ead90d9bb7f5f49528be192"
  },
  {
    "url": "assets/js/12.e35f4dd1.js",
    "revision": "d6eeacbd320cb3dfc372d76c007f6576"
  },
  {
    "url": "assets/js/13.6522cbef.js",
    "revision": "fe3a63a9abcf7c0796dbba581070092a"
  },
  {
    "url": "assets/js/14.02371bd1.js",
    "revision": "688ee87631131e3f95a44d6b62db2f75"
  },
  {
    "url": "assets/js/15.bdd0a19a.js",
    "revision": "26fe72fbed4347324f548c2c0640cba9"
  },
  {
    "url": "assets/js/16.db42a474.js",
    "revision": "9ca54222f3afb12292e7a987dc8f6708"
  },
  {
    "url": "assets/js/17.f5813c62.js",
    "revision": "f2c3058080b2f948ed0d6f786923b076"
  },
  {
    "url": "assets/js/18.76e34f3c.js",
    "revision": "d29627109cf69bc027ba5f4ec7c1d1f9"
  },
  {
    "url": "assets/js/19.5c55fd13.js",
    "revision": "53d6165b76915354186279eca17021ed"
  },
  {
    "url": "assets/js/2.4abeb3f1.js",
    "revision": "e7defd4310d13c373ede6219258baa8a"
  },
  {
    "url": "assets/js/3.42e8d3cd.js",
    "revision": "de7e61a609da502b19680564516a6484"
  },
  {
    "url": "assets/js/4.d34cad27.js",
    "revision": "d4b4e22ae57a60b8eb91bef15a19b55c"
  },
  {
    "url": "assets/js/5.d6b43d8a.js",
    "revision": "3a47885d48f1ef68dd699e90efa0c3bc"
  },
  {
    "url": "assets/js/6.5b654a49.js",
    "revision": "b25944bffea7341f715c35b80d80055b"
  },
  {
    "url": "assets/js/7.bc29427e.js",
    "revision": "1be38d562661eb0cbeb90f8082abaee6"
  },
  {
    "url": "assets/js/8.280cd115.js",
    "revision": "5d11cb726af0a7296433b4bd82580b24"
  },
  {
    "url": "assets/js/9.141e2998.js",
    "revision": "83b6340b4112680e129511cdba2e838c"
  },
  {
    "url": "assets/js/app.6483ea78.js",
    "revision": "35d92dd155206b7e8959e813ab7c49bd"
  },
  {
    "url": "config/guide.html",
    "revision": "ee1ef080ba04d9ccb08a180bebe97caf"
  },
  {
    "url": "config/index.html",
    "revision": "c2e233a813850a5d01b3990b2001fc8a"
  },
  {
    "url": "config/using-vue.html",
    "revision": "71071d3642d9cb88ec28bfe4765d9dfe"
  },
  {
    "url": "discord.html",
    "revision": "16a8fb9d6ee49ff1383554df91caad76"
  },
  {
    "url": "docs/index.html",
    "revision": "c36077798cd57ca77472a694404cf27f"
  },
  {
    "url": "index.html",
    "revision": "a3057b11b3c8cff582fa8994b6f0e741"
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
