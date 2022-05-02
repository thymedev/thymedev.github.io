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
    "revision": "87ad64a5ece10c0a5fb7fe485a006f60"
  },
  {
    "url": "about.html",
    "revision": "2bc554798f735ed9a91cac9b0f6839b3"
  },
  {
    "url": "assets/css/0.styles.998f9ba5.css",
    "revision": "c04923c523d7070a7f6e59fc4ffecd49"
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
    "url": "assets/js/10.edd2b246.js",
    "revision": "7eb07e209724e00fb99399d38c4a2402"
  },
  {
    "url": "assets/js/11.98a1e087.js",
    "revision": "a4ab5720a682d5be2174ee2d615faca2"
  },
  {
    "url": "assets/js/12.b5136276.js",
    "revision": "87385aca5be8ed0020d405e3d7410581"
  },
  {
    "url": "assets/js/13.b2d08793.js",
    "revision": "cc2f6ba90419a55401eaefe246d5c44f"
  },
  {
    "url": "assets/js/14.0f6f72de.js",
    "revision": "95ca936a04afd99e558e2e86af0fa233"
  },
  {
    "url": "assets/js/15.5d94f027.js",
    "revision": "4a6a9917e78420d520e28a315bb66a63"
  },
  {
    "url": "assets/js/16.f00e1d33.js",
    "revision": "a78c9136ae1e363be47749803496348e"
  },
  {
    "url": "assets/js/17.e0075d48.js",
    "revision": "5c1e83a15cd0f3938ba23136f6a85022"
  },
  {
    "url": "assets/js/18.d6aa6204.js",
    "revision": "0eec0e215c95101db6511df434243ba0"
  },
  {
    "url": "assets/js/19.e0704b78.js",
    "revision": "654f5c6610994d1f0da1b0a1b80ca6d3"
  },
  {
    "url": "assets/js/2.ab2745dc.js",
    "revision": "c540e1f807c2a1a291d95feef10a4c04"
  },
  {
    "url": "assets/js/20.b8d81c00.js",
    "revision": "86f91ac10817c79c798df39f41a56598"
  },
  {
    "url": "assets/js/21.d8b53b3c.js",
    "revision": "e0e1d50bae9758c29528017ce912129b"
  },
  {
    "url": "assets/js/22.f8affa99.js",
    "revision": "614c66fbabdbbfe5f733552040667745"
  },
  {
    "url": "assets/js/23.76e941af.js",
    "revision": "761320234a4f4739c6c6cbea31cbc6eb"
  },
  {
    "url": "assets/js/24.6c55e638.js",
    "revision": "7d4a0b555131e72f94cf7abae3bb252e"
  },
  {
    "url": "assets/js/25.c0976a89.js",
    "revision": "010cdc92f77042462817873e93506e6f"
  },
  {
    "url": "assets/js/26.65b02544.js",
    "revision": "6d679bc5200d55113551617875ce9084"
  },
  {
    "url": "assets/js/27.0ab2405d.js",
    "revision": "2569eb1d695d46658050cb61240ba7d5"
  },
  {
    "url": "assets/js/28.1b835e98.js",
    "revision": "cfebae29f5b289997495efa5b36eaa68"
  },
  {
    "url": "assets/js/29.a714c8a3.js",
    "revision": "9a873db5bcadc768f8c86d531c5444a0"
  },
  {
    "url": "assets/js/3.a90d7752.js",
    "revision": "5e6e376597252eeb0ed646ad174b850b"
  },
  {
    "url": "assets/js/30.835e603e.js",
    "revision": "9ee61ff5371c81e6e936c8cc45f7ca27"
  },
  {
    "url": "assets/js/4.dd2a97c4.js",
    "revision": "3c00a84c04e6f63dd9232f56fb1f093c"
  },
  {
    "url": "assets/js/5.84178eca.js",
    "revision": "c133059cc08cf3ccc1905b7442d2285c"
  },
  {
    "url": "assets/js/6.b737b534.js",
    "revision": "3d0d41b1d97c12919761d32db096f9e9"
  },
  {
    "url": "assets/js/7.8cb515bc.js",
    "revision": "2fe62b068ddd344e7bf09b46b1cb2c5a"
  },
  {
    "url": "assets/js/8.24d36c34.js",
    "revision": "0c19ba7af46c880906d41159de7b57db"
  },
  {
    "url": "assets/js/9.d0205f1a.js",
    "revision": "04bdb2f7a8cc89e15aaa0cd86c54b104"
  },
  {
    "url": "assets/js/app.3838242f.js",
    "revision": "bfa91d230c60f3ac4c75ec6297717f64"
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
    "revision": "b0f29d1b6665ebc6d1f0150a76a0620a"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "121fe6947426bdaf9ad5ed35557026d9"
  },
  {
    "url": "coffee/index.html",
    "revision": "c2794c6fc8198702207c9556f6e40fd3"
  },
  {
    "url": "coffee/start.html",
    "revision": "a3817a971512930804b408cb0fdd1a88"
  },
  {
    "url": "discord.html",
    "revision": "7a1ed959cfaaf4e111d3879e5d181485"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "f2f6b690bb91974ceafb50dca100a459"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "17cf10f226bc787c94c5f7d423f457c9"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "b3ea228b4f37037f56e4acb954e7f5df"
  },
  {
    "url": "docs/index.html",
    "revision": "dc3d70d1c6ba1978e7e19f9524639a5a"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "b23208c51f408cc6570a122bc84f79da"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "e1dc6332044c96123228474b60979e22"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "1f9d81700b010dee829986c83a2898c3"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "c321c09d7e17e2c1f243e697d08cc720"
  },
  {
    "url": "invite/index.html",
    "revision": "e40043607c0787153f4fdfcf2a46a6ec"
  },
  {
    "url": "legal.html",
    "revision": "78d8d6d8c6dc6cbbaa917a176b463556"
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
    "revision": "c629d88062c5c94a483b75818cacd97e"
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
