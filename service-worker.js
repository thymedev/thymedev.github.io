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
    "revision": "066f908d4121e4e8af438fc6faa613b7"
  },
  {
    "url": "about.html",
    "revision": "3b30b663c9f010937637c0f918a31fca"
  },
  {
    "url": "assets/css/0.styles.47b76013.css",
    "revision": "fa95504272e41fb7372076d2d249377a"
  },
  {
    "url": "assets/img/emotes.17e4d8c3.jpg",
    "revision": "17e4d8c3523c7037db16cbc89592c5f2"
  },
  {
    "url": "assets/img/hellohook.f85bb281.jpg",
    "revision": "f85bb28109e6c35548f18a90dd7407d8"
  },
  {
    "url": "assets/img/kyarutail.988e3f18.jpg",
    "revision": "988e3f182b2bcbd31bdcd4baae4d25fb"
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
    "url": "assets/js/10.61e9c58e.js",
    "revision": "840e33c4ff216820cfb057d119d4cfe9"
  },
  {
    "url": "assets/js/11.4ed72399.js",
    "revision": "4dea9e5fdb1fdeaf6f7bfb55df4d8002"
  },
  {
    "url": "assets/js/12.be7ce2e0.js",
    "revision": "e429459c858298735f91b35ad26892d3"
  },
  {
    "url": "assets/js/13.d41fb2f1.js",
    "revision": "f560bcf65676ee7826349495eeb57679"
  },
  {
    "url": "assets/js/14.a3bd7a59.js",
    "revision": "52a6df79586e3e7cb0fdcd5890c34dcf"
  },
  {
    "url": "assets/js/15.fe01ce32.js",
    "revision": "4d8855f749cf4fcf5247a8b563288e80"
  },
  {
    "url": "assets/js/16.7e07f55c.js",
    "revision": "97a3475d0d7eb1dc8f15192ea4d9c4ad"
  },
  {
    "url": "assets/js/17.3d7e503f.js",
    "revision": "22e6723369e728215f61adf35e3d5098"
  },
  {
    "url": "assets/js/18.56c81890.js",
    "revision": "9d1e1e9e7aeaf6b9b18a81a9554b3fcb"
  },
  {
    "url": "assets/js/19.0ba8eee6.js",
    "revision": "5b472bbfecf9e60f8172215e3bf80cb0"
  },
  {
    "url": "assets/js/2.456485d5.js",
    "revision": "591fe84c2ce33616a1c2804e00de2f51"
  },
  {
    "url": "assets/js/20.ba6e746b.js",
    "revision": "e094d9d48afcc1ea6cb143a20a75f577"
  },
  {
    "url": "assets/js/21.91ab8281.js",
    "revision": "5101f26d17041acd7602ed16b9b2f7f9"
  },
  {
    "url": "assets/js/22.72941c57.js",
    "revision": "4d2a3c3d3ac91cc6b930a416be6b8178"
  },
  {
    "url": "assets/js/23.814e2589.js",
    "revision": "47c85e30b586d87e39f18a972fb51671"
  },
  {
    "url": "assets/js/24.26f8d507.js",
    "revision": "efedd4a968f8c976e373df426b5dae06"
  },
  {
    "url": "assets/js/25.180a9980.js",
    "revision": "bdc77ee013f442f019b7e8efca1cd4d0"
  },
  {
    "url": "assets/js/26.cb12e34e.js",
    "revision": "85f86e904b9244b48c305d871fcb34d0"
  },
  {
    "url": "assets/js/27.fbde6f08.js",
    "revision": "77544ab93a5fcf343c2729577d3d4f83"
  },
  {
    "url": "assets/js/28.99a593ac.js",
    "revision": "6a70773a6084546201a8b986614b8123"
  },
  {
    "url": "assets/js/29.adab2a85.js",
    "revision": "c3e50131330c399acb34821b237a210a"
  },
  {
    "url": "assets/js/3.1a1c5522.js",
    "revision": "b896a0c131495ab7ebe3fcd97061f0c1"
  },
  {
    "url": "assets/js/30.8cf7e0d4.js",
    "revision": "2f27ecacc55132a3ceeaf936e7b17358"
  },
  {
    "url": "assets/js/31.273c2a28.js",
    "revision": "6310f4d020259d99af505b2d7dd19682"
  },
  {
    "url": "assets/js/32.ec3b838c.js",
    "revision": "26b0f20c84a207f611e24d5022c43d0d"
  },
  {
    "url": "assets/js/33.539b70d4.js",
    "revision": "6647a8f7ddc1c367b022918258143471"
  },
  {
    "url": "assets/js/34.122abf56.js",
    "revision": "2d458cee01b2e43380924926420ec738"
  },
  {
    "url": "assets/js/35.1d181ea6.js",
    "revision": "22a79cda0b72a555f60437072daf23ad"
  },
  {
    "url": "assets/js/36.0495efab.js",
    "revision": "cb9fe5c194ff975e6593599cbbf0a192"
  },
  {
    "url": "assets/js/37.b391ac8f.js",
    "revision": "379a1587613c9422ffbefa36d01c2711"
  },
  {
    "url": "assets/js/38.fca0bd73.js",
    "revision": "4b63a0e917a16a4a32b7dd9da56a144f"
  },
  {
    "url": "assets/js/39.94df044d.js",
    "revision": "70fdb906de289897b263e2cbc0548e85"
  },
  {
    "url": "assets/js/4.ed5f97f9.js",
    "revision": "6ba74f61a4f660b42406987a343ea754"
  },
  {
    "url": "assets/js/40.d6e12843.js",
    "revision": "d8cdc4b069bfcf759264270c016972fe"
  },
  {
    "url": "assets/js/41.b79ff892.js",
    "revision": "c865c405f5a86bfde0e39467def0840c"
  },
  {
    "url": "assets/js/42.6539e811.js",
    "revision": "37111881217b04cfa925f3ec230dedf6"
  },
  {
    "url": "assets/js/43.75867675.js",
    "revision": "0fc94106067cec2298fc931e26bff843"
  },
  {
    "url": "assets/js/44.e032c8d8.js",
    "revision": "87f0bc841217c16b9fcfc2a883075880"
  },
  {
    "url": "assets/js/45.90c43f6a.js",
    "revision": "b15c648c41ce3de5c327f51bda323ac4"
  },
  {
    "url": "assets/js/5.579548ab.js",
    "revision": "7c0b2cdd3a7c465b8970e468fb8bf455"
  },
  {
    "url": "assets/js/6.f185ffd4.js",
    "revision": "bb9124d46a536e5fb64f9c3b5ef9c86c"
  },
  {
    "url": "assets/js/7.183e6679.js",
    "revision": "1b00242593a8f88d75ba94a4e5a70a97"
  },
  {
    "url": "assets/js/8.95e04ee7.js",
    "revision": "ebd4eb4d5e13daa65ceecce415306cc3"
  },
  {
    "url": "assets/js/9.674b9283.js",
    "revision": "1d0bd3bdcc1d81b725d34315b82ed4fb"
  },
  {
    "url": "assets/js/app.0b9baed0.js",
    "revision": "e7588b7c5975157934d6699fd4609f28"
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
    "url": "coffee/bartender/index.html",
    "revision": "252066711cca439f8a74dd3be2a4598d"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "0652025466d8c614b5fb26d2bc19ba73"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "1ff7d4a09123b450f1a9ceb7abd4ab9e"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "b96c481b407f8388fe8e18080451c83c"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "b8917ee3bfed4ef328a830d48aaff5de"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "fc11ffd7654067677ac2378a51b8253b"
  },
  {
    "url": "coffee/index.html",
    "revision": "a477a5ce21fe0f6e7f115c6f4c47b240"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "dbb88ff7c655f4f06ab34bdd9dd1cb50"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "18858854138fa88ef668562dc8443eb7"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "7f50046eeb80d216dc6e6258f5855cf4"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "cf19e49456085ec7d3c5ad4e83a3a957"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "d32c3f5c52fe40830f9bf6869eb5a4bc"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "0780918c5f15b2e1ebea52c4a84265c1"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "b0bcdec26d902d13570fbb88cf585f15"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "7dfdb1a3d0e239c5fd2d1afe220367e8"
  },
  {
    "url": "coffee/start.html",
    "revision": "492ea971db8af1a11e387639d6ade414"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "d84c5a66a801360aad17f3fe30e105e8"
  },
  {
    "url": "discord.html",
    "revision": "661748cd2cdd262bdf2b12452cb7bbc5"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "df54090b6611ee06e50b4951fd4f9dd3"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "93a47094be364778bee51eabac4a480b"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "e2ebac15bda935565c9bf6ac31ca3a50"
  },
  {
    "url": "docs/index.html",
    "revision": "7c0ec95a4c1342ed2d2ccf083bd19dd9"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "fbe5f4d61604ffc8c71bcbe58944dea5"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "6df29164329c975c75d30112c7ae41d7"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "890ae06abe812435e019883639d55ffc"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "5eb6e6438762aa279f2bcf645294c73b"
  },
  {
    "url": "invite/index.html",
    "revision": "8a0b2f1fef4c413326d1a07c34cc7c2a"
  },
  {
    "url": "legal.html",
    "revision": "77fe99c20264743f75f7aec84b93ccea"
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
    "revision": "39c2b1b1f67cbf686d99d3e40f4a3982"
  },
  {
    "url": "privacy/index.html",
    "revision": "39c2b1b1f67cbf686d99d3e40f4a3982"
  },
  {
    "url": "status.html",
    "revision": "4aa617d09dc0ea690f7909395c40501a"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "39c2b1b1f67cbf686d99d3e40f4a3982"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "39c2b1b1f67cbf686d99d3e40f4a3982"
  },
  {
    "url": "terms/index.html",
    "revision": "39c2b1b1f67cbf686d99d3e40f4a3982"
  },
  {
    "url": "tos/index.html",
    "revision": "39c2b1b1f67cbf686d99d3e40f4a3982"
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
