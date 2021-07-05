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
    "revision": "ba5222d34177e2884686ce8ce5e61d07"
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
    "url": "assets/js/15.fecaad44.js",
    "revision": "036970d28fdd6b50b8efbdd6c53b60c0"
  },
  {
    "url": "assets/js/16.db42a474.js",
    "revision": "9ca54222f3afb12292e7a987dc8f6708"
  },
  {
    "url": "assets/js/17.c3e51f01.js",
    "revision": "df03d8adcd58010dc352c282c6e7398e"
  },
  {
    "url": "assets/js/18.234bff39.js",
    "revision": "bc4d294529499961f0799a9898987923"
  },
  {
    "url": "assets/js/19.206b698d.js",
    "revision": "909f5b4835b1b9982e49edd6ed047e13"
  },
  {
    "url": "assets/js/2.e8083279.js",
    "revision": "f725569b7a862d76027ada331eced8dd"
  },
  {
    "url": "assets/js/20.be957631.js",
    "revision": "f9f5c6a7a299df2ff432c3157bc5c561"
  },
  {
    "url": "assets/js/3.992377ec.js",
    "revision": "298e877d6a90ee4f67a2f9360e63b001"
  },
  {
    "url": "assets/js/4.5efa2064.js",
    "revision": "033d1368e7c8c86162592186462b48ba"
  },
  {
    "url": "assets/js/5.97f00a96.js",
    "revision": "5ef04a3a1aa531bc0ce688a8ded39241"
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
    "url": "assets/js/9.423369e4.js",
    "revision": "4e9992fdb400287755edf824e3556b7f"
  },
  {
    "url": "assets/js/app.1c17880a.js",
    "revision": "7bf484800e1fe02bce49a7631638109b"
  },
  {
    "url": "config/guide.html",
    "revision": "fd8ad4c859eeac9e6a43a707b9c40334"
  },
  {
    "url": "config/index.html",
    "revision": "992ac992a44a9afb82e485e4590980ca"
  },
  {
    "url": "config/using-vue.html",
    "revision": "88a93892fdc512d8cee9849180f999db"
  },
  {
    "url": "discord.html",
    "revision": "1518ec74208a8052c73a8220e460a80e"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "9306a18d8ef1c261f718c78309cdd5a1"
  },
  {
    "url": "docs/index.html",
    "revision": "bf41ea7ad6dc159ec34c47a7451f8163"
  },
  {
    "url": "index.html",
    "revision": "dec5d59c409d8b437c30e38b7bd0a124"
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
