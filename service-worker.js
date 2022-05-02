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
    "revision": "a240f7b7dc1d7f3fcd1dcd0c8f49a27e"
  },
  {
    "url": "about.html",
    "revision": "74f7d84158e64ffc742b15c0745cc4eb"
  },
  {
    "url": "assets/css/0.styles.3ac34224.css",
    "revision": "8b224e3e1bd156a77b465d103ae9caf2"
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
    "url": "assets/js/10.eb91112c.js",
    "revision": "196369f0919ee724180d5a9a2fc06f13"
  },
  {
    "url": "assets/js/11.f4d477cb.js",
    "revision": "11cfdd5ba5a74423fcb1ed35f967f0ac"
  },
  {
    "url": "assets/js/12.aae96504.js",
    "revision": "58a791e0ab53d76004771e64f3c45d5f"
  },
  {
    "url": "assets/js/13.16a0264e.js",
    "revision": "c1490315692931ceea1fa5c3512d812d"
  },
  {
    "url": "assets/js/14.d99166fe.js",
    "revision": "b86e8ec113ffea6268e4872cb1695fc2"
  },
  {
    "url": "assets/js/15.7319366a.js",
    "revision": "db2430316381254961cc5f3e7cb00b09"
  },
  {
    "url": "assets/js/16.a54bf5c8.js",
    "revision": "e5151a7b4b40e0d984b0a3860585b498"
  },
  {
    "url": "assets/js/17.64dc88aa.js",
    "revision": "80b3be5e6686cb1a634794a5c6fc5f54"
  },
  {
    "url": "assets/js/18.6d885745.js",
    "revision": "330598e2b982f0a4ebddefe59e0fbdd3"
  },
  {
    "url": "assets/js/19.dcc84c6f.js",
    "revision": "061206ce9c5ceae54e7b44f4ed283942"
  },
  {
    "url": "assets/js/2.0a47c48d.js",
    "revision": "b1c9f3e7a7d6084bc239aef9522e8e60"
  },
  {
    "url": "assets/js/20.55de1e57.js",
    "revision": "0cd6ea6a6e55a17d5c53bc459e944394"
  },
  {
    "url": "assets/js/21.b074060c.js",
    "revision": "d244de8ae238fc47ea8186c95fa72197"
  },
  {
    "url": "assets/js/22.f5ab2540.js",
    "revision": "189bff99fab03e4bba9d1441c4ee7de5"
  },
  {
    "url": "assets/js/23.5327dd6a.js",
    "revision": "b888adae189f76e057a566d171c98ce2"
  },
  {
    "url": "assets/js/24.b41f2e24.js",
    "revision": "dbbc853089079f0a99344828a3336b56"
  },
  {
    "url": "assets/js/25.311b8670.js",
    "revision": "a38df1e9005e1ced88653c2b6e428357"
  },
  {
    "url": "assets/js/26.b61c04f9.js",
    "revision": "064b94908fed29d1e00de8008830429c"
  },
  {
    "url": "assets/js/3.51643a31.js",
    "revision": "b1c91830a5bbecbc7a2903b238c0522f"
  },
  {
    "url": "assets/js/4.417bc9d0.js",
    "revision": "40f30f98c84a23a254fe84a66793a46a"
  },
  {
    "url": "assets/js/5.7718aef2.js",
    "revision": "fbfb82c3eaeaebf5109e47087577138f"
  },
  {
    "url": "assets/js/6.fe9311bd.js",
    "revision": "af4a7dc829524d24ebb2fd8ed915a55e"
  },
  {
    "url": "assets/js/7.5f5bdea1.js",
    "revision": "318f0e21835929303afec59dcfa7833c"
  },
  {
    "url": "assets/js/8.873498e7.js",
    "revision": "398665d17972a8844e3a4ef0455b0f5b"
  },
  {
    "url": "assets/js/9.31edeef3.js",
    "revision": "8dc43974d08d0e221a06a6ecc7d0e910"
  },
  {
    "url": "assets/js/app.205fd9de.js",
    "revision": "ab4abc31cc83debee527f7ae8aef5d2c"
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
    "revision": "ad30f7be08f2298a4a688ca1a16d23ee"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "0f76c15cc470a9586ea797d7e22faffe"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "3c4676905eb7d0114f8121b78c20a8ab"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "a29f107740b41aba8cafb4b8088bbe44"
  },
  {
    "url": "docs/index.html",
    "revision": "6e34987848f800a1611b0522b18555c4"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "78e44cd067bad87423868ae039cb9d72"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "7e2c2744aa6d2bfe193244b67829e76c"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "7a9ee99186caa7040ebb82087b6e53ff"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "84ca4f6c5880edf864831bf81eda2f71"
  },
  {
    "url": "invite/index.html",
    "revision": "73fc65d3b9286dd209bd89b6efadb85b"
  },
  {
    "url": "legal.html",
    "revision": "a41104d63a59e089794bc68b423414f0"
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
    "revision": "980bfd52725b1d4310f6ef284da2631e"
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
