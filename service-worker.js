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
    "revision": "fbdf034d09959eb1790f5b970e550dd0"
  },
  {
    "url": "assets/css/0.styles.ab7e22a9.css",
    "revision": "c4b099a3260c460cc1ead0214b64adf7"
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
    "url": "assets/js/15.a01146bd.js",
    "revision": "8d94a6366dc186327d48c99159e44316"
  },
  {
    "url": "assets/js/16.21661adf.js",
    "revision": "01164c10a6f70bd176d6a6e3cd3bc5c5"
  },
  {
    "url": "assets/js/17.1f98ab65.js",
    "revision": "c230b63f19e8399d335da37104816a14"
  },
  {
    "url": "assets/js/18.4b7334ea.js",
    "revision": "c1db207bb3e4ede38654520ae0f3ee25"
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
    "url": "assets/js/app.16fb8cf8.js",
    "revision": "d4ae6a50bbfce503025d274613bcf556"
  },
  {
    "url": "config/guide.html",
    "revision": "9517a1c24516994ae7e1afa065d900d8"
  },
  {
    "url": "config/index.html",
    "revision": "edbf2461e7f13f5e47ac502b662cdb49"
  },
  {
    "url": "config/using-vue.html",
    "revision": "cead961bd7aa66b09ae9eb5e5b74adf9"
  },
  {
    "url": "discord.html",
    "revision": "20581d8d02c7b6c57eda3395db291336"
  },
  {
    "url": "docs/index.html",
    "revision": "540ebec185668d76669fec493a98ccb8"
  },
  {
    "url": "index.html",
    "revision": "8f0a3b16065d3b4591602a264ce0b1eb"
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
