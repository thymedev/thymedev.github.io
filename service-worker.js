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
    "revision": "717b81c8769823ce2237d3c01a1d5af6"
  },
  {
    "url": "about.html",
    "revision": "f0fbc35ce0c8500f03672a1330accca1"
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
    "url": "assets/js/app.0e14e576.js",
    "revision": "cbbd74e4339888cdd66f641fabd115c4"
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
    "revision": "fb23f052136f240b9bada4544a0ae80b"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "e817379c3edec4ba4bacb585045707ef"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "95aac8eebee1946c27bd1990df644119"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "838d58b3fee6f8660f15974a326e47b8"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "8f6b08d9329e7744b3bd7f3d13604d55"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "d5ee6cb5cb5c2445b44fcb5b804b33c8"
  },
  {
    "url": "coffee/index.html",
    "revision": "11ebe515b7b076054999a18387740091"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "ae0a3e8315888c59f3f6277bcd963e6d"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "ed0c577ddf48965346d5ea7801d23800"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "9a50dd37491bb0ffe91dfa2dade3111c"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "d87d35181bd0d466a5462b2bddc74ae5"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "aa8626864e70c69966dac0171a5bbdf4"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "b38e93009dc58e887444451c8aeff986"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "584ee00a7a91635d93d9941295ce7035"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "97417e64240b4cbd269a342f7c658ca0"
  },
  {
    "url": "coffee/start.html",
    "revision": "1d5d5be0eebfa9890da7e68075205913"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "4bfc85c49fb43134a69510dfb518af11"
  },
  {
    "url": "discord.html",
    "revision": "6a49ef6aeee3d79cdddcdfb66f3c9d2f"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "dea4fb24c9c232fd265d8bdb3b71daac"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "fa3cb5e5981c8e031b6559456d945b55"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "f12fe07191e42e73053a1b16a070ff73"
  },
  {
    "url": "docs/index.html",
    "revision": "9da347d4fe6198e40722f6a6df3b771e"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "77cce394a41f1d3dab11472079a6ac36"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "5aba232d07cbdda755db68289c4762fb"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "49e8dfd273f4e6433764da446f80d1d2"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "ae2ab268badbef09b4b0700932f03abe"
  },
  {
    "url": "invite/index.html",
    "revision": "ce6db553ba5fed968a950cdd1c193023"
  },
  {
    "url": "legal.html",
    "revision": "b02d5c7d0e1336f6dac48b0cbf69f6e1"
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
    "revision": "64bc6dae218dc5b01f9f614bedaa0ccf"
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
