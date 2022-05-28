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
    "revision": "6e76e6849c30cc3d6463356b5b2fd371"
  },
  {
    "url": "about.html",
    "revision": "576ca8771af30b7a1dc9dd3f47ab504f"
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
    "url": "assets/js/16.6cb1fd91.js",
    "revision": "a1f1ee25de3b93ac870559f1916139bf"
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
    "url": "assets/js/app.019751f2.js",
    "revision": "f769d00fcd952cc2776fefadcc86097f"
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
    "revision": "61037962fde435adac0fe96bf55ed498"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "d9e206cd7e0fbb5741fa1ce31b365a70"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "db6c1459cb16a70c2bd86139ddbf95f9"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "faa8c07b2c46a78dec5152740cd87de1"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "174ed8cb05e277ea2e3b026baa1ec0f7"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "8aa624c16ec7bfc7faad316da6801f20"
  },
  {
    "url": "coffee/index.html",
    "revision": "3487dc80762fb1088053005505dfcf5a"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "0add25a1f67f7c72efa70d3d3e6f638c"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "404066a177daf314e206711d6471e4d5"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "3542c31127ce2d96e8566b600065d357"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "91293ec29ede7bd28dd4697e472c9e22"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "8ab44609b8df1eb144c24518dee91917"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "40b3dcd416c5c5fcc3a9676232323232"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "d8654119876017fcb3dd53cc72135e2d"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "034776c485643b6a8701aa32dab7df98"
  },
  {
    "url": "coffee/start.html",
    "revision": "51c470f1c081d41406d01bd2380d1dc5"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "3f71a97480f7eb4ccca2d16c3c1dba32"
  },
  {
    "url": "discord.html",
    "revision": "cb6c8ae00f77c6564046137c278d662a"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "80a2b4a1a326c210d1e3666746aa64ff"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "18d271013a4e2303b2419e8f9f2c835b"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "db89482bb3f768bb168c8ab4f665c79c"
  },
  {
    "url": "docs/index.html",
    "revision": "a0a0344b9efa186cccda0d133c31bee8"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "29330a76d23420a43ffaa70d2b2f5612"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "9852708fa2a9644312cbd048b4b68294"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "8d26752d333fe04ec578ce3d772477f2"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "81a4b59708137b22bd37d00c0530b1a9"
  },
  {
    "url": "invite/index.html",
    "revision": "b92c376efc3c9b5180fac7dd1a60eb00"
  },
  {
    "url": "legal.html",
    "revision": "d5b78e10bbab8f2a71d6eeb7f118d071"
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
    "revision": "35f5e542c0436ab6779e117979b96c24"
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
