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
    "revision": "8d8f746bc3aee97ddcdf41fafab4fcbc"
  },
  {
    "url": "about.html",
    "revision": "084596305c9900c85d75b09936f1ccf9"
  },
  {
    "url": "assets/css/0.styles.492ff612.css",
    "revision": "3792dd8ffa06e3934fbeb6a170a52178"
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
    "url": "assets/js/10.d4f17a1e.js",
    "revision": "4742387af08f2d95dd829168728dc180"
  },
  {
    "url": "assets/js/11.096b6081.js",
    "revision": "033c6b5349321abcf7adb56cc905ffbe"
  },
  {
    "url": "assets/js/12.ffb21a41.js",
    "revision": "20e208b9e1014e614d28c4e64bd4e66d"
  },
  {
    "url": "assets/js/13.00cf3833.js",
    "revision": "8682467c37ea6459a2154f67000e4fe4"
  },
  {
    "url": "assets/js/14.ff2e38b9.js",
    "revision": "b5da105dd8e61030d9b73979d864589c"
  },
  {
    "url": "assets/js/15.2c6f2ad2.js",
    "revision": "6d0449692b405ed728dc557a2c989bd2"
  },
  {
    "url": "assets/js/16.b8a10516.js",
    "revision": "73a96cde94f7887bdeee547035e990bf"
  },
  {
    "url": "assets/js/17.8a2ef0f0.js",
    "revision": "b0eaa17b62c9cdfba8031eaa397a00bf"
  },
  {
    "url": "assets/js/18.c4991af8.js",
    "revision": "f337e0cc375ad15b9387d2759f6eab86"
  },
  {
    "url": "assets/js/19.67a84a3a.js",
    "revision": "ee34cc77a5a9d439400cedf518cbe432"
  },
  {
    "url": "assets/js/2.d293d8f8.js",
    "revision": "fdca0df312223db5cc8370b0857511c9"
  },
  {
    "url": "assets/js/20.9a956da7.js",
    "revision": "f303e39cae14227748d6be47110c64f1"
  },
  {
    "url": "assets/js/21.7a4666a2.js",
    "revision": "1dcd726a9933b033fc90635b0cc5c95e"
  },
  {
    "url": "assets/js/22.98544be0.js",
    "revision": "57ec8cc1a997a69e30dffc6b4828bafb"
  },
  {
    "url": "assets/js/23.c7df1b10.js",
    "revision": "921e35343a12d2f907da8828752eb1f1"
  },
  {
    "url": "assets/js/24.4d27bdaa.js",
    "revision": "e59ecea705dc35ef8bb376ca8d203ca2"
  },
  {
    "url": "assets/js/25.afcbd9da.js",
    "revision": "03c9a090ca4b6bc91af9b6b50697a990"
  },
  {
    "url": "assets/js/26.3561d5a8.js",
    "revision": "aecc0b5acd013287a823535eee5f5a39"
  },
  {
    "url": "assets/js/27.70aa3dcb.js",
    "revision": "3e3df1442ca1069a96a38c1bdc4ec1f6"
  },
  {
    "url": "assets/js/28.098bc163.js",
    "revision": "fe9f87fe73d3b4b670f46bfa263a126a"
  },
  {
    "url": "assets/js/29.2c8d0b64.js",
    "revision": "5d54d543d0610336764e8f795fee7f78"
  },
  {
    "url": "assets/js/3.3c429fb2.js",
    "revision": "563740864e7ff716993db4bb023913c1"
  },
  {
    "url": "assets/js/30.83632e0c.js",
    "revision": "77d3bb01a5b564a06cbf38d2ac325fc3"
  },
  {
    "url": "assets/js/4.33036141.js",
    "revision": "ef7ff007b287ef041cd59eaf35bb4d36"
  },
  {
    "url": "assets/js/5.ef459dc9.js",
    "revision": "b68d8c336fe878b0ef41404d2c3b2d97"
  },
  {
    "url": "assets/js/6.1f239b42.js",
    "revision": "8f577003e31bd498bda5c21b5c2d971c"
  },
  {
    "url": "assets/js/7.703d579a.js",
    "revision": "f25ccd90ea455e9b9c51c670a492f715"
  },
  {
    "url": "assets/js/8.3bcbfabf.js",
    "revision": "a8f9cec9b761a07e9e148701b29d277b"
  },
  {
    "url": "assets/js/9.3f55d7f9.js",
    "revision": "777e1e72cd2d8d40f7ad72bd57984720"
  },
  {
    "url": "assets/js/app.98cc4d14.js",
    "revision": "bd0d0bdce0b6f50e4b07892d6f88ce00"
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
    "url": "coffee-cogs/index.html",
    "revision": "9ff02d2d7c5da8f94df2a3726a8a1357"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "8aa565bb6d4aad396f29bd5bc8fc1c27"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "73d31f0af3b9f4509e562f2a9439da3e"
  },
  {
    "url": "coffee/index.html",
    "revision": "00124280b1bbc5fd54db8ba96d55b7e0"
  },
  {
    "url": "coffee/start.html",
    "revision": "cfa0475f9f0cac31a0c33d9d678ec170"
  },
  {
    "url": "discord.html",
    "revision": "66e2f01dc93f82ab1fad821c4d74e966"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "00d262ecaf3d792bb7b861987a4ffb22"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "0777a4d71b52b2f49b4cd464c5c69b3f"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "d1ec03a12fa0e7944c4effdefc2ca1cd"
  },
  {
    "url": "docs/index.html",
    "revision": "bbf00a6ae7ad6719d542c3de2f0b6df8"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "fcd7e44ca83fc718bbadce794a603c97"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "2bd09848aa9a87ab00e96e7123cfd86d"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "4bc3a411031a6f9baf36e176abd105d0"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "be3607af627eaadbbee5f1f6c3bf238e"
  },
  {
    "url": "invite/index.html",
    "revision": "51d4db613f8aaeee0010e567ed9752dd"
  },
  {
    "url": "legal.html",
    "revision": "57cd3795cd21635817043e33e779645d"
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
    "revision": "cec4324b4b8a7c1113d2852ab3e3da44"
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
