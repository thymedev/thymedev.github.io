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
    "revision": "6c078b1655a8b2ed734fc5e4fe193cd1"
  },
  {
    "url": "about.html",
    "revision": "e50ca594ed8db733c070bd759ee4ad6c"
  },
  {
    "url": "assets/css/0.styles.3210bdd3.css",
    "revision": "b5975464c61c2a140e7e2cfd3dd02f7a"
  },
  {
    "url": "assets/img/emotes.9103fe6b.jpg",
    "revision": "9103fe6b8442d67c16c40d74ede0ecea"
  },
  {
    "url": "assets/img/hellohook.f85bb281.jpg",
    "revision": "f85bb28109e6c35548f18a90dd7407d8"
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
    "url": "assets/js/10.da713618.js",
    "revision": "cfed58abc8ad1c4d5ade1f5ee7633403"
  },
  {
    "url": "assets/js/11.fc7c711b.js",
    "revision": "47efccc631a621fa21083ffb62deaf50"
  },
  {
    "url": "assets/js/12.bec4bc2a.js",
    "revision": "13a00bd429d2efcf2ccd39f1caf2c39b"
  },
  {
    "url": "assets/js/13.1cbf978e.js",
    "revision": "2350e7d681931b4ae2ddb671d36db3bf"
  },
  {
    "url": "assets/js/14.5ccac206.js",
    "revision": "c8ee2a4250b27b4e6e4fe8dae3a38304"
  },
  {
    "url": "assets/js/15.556265b8.js",
    "revision": "22c92968dd70bf9e38703dd6ef16355a"
  },
  {
    "url": "assets/js/16.d50595ba.js",
    "revision": "6d6a88155d3aedbbee66d0966337a175"
  },
  {
    "url": "assets/js/17.5446c64a.js",
    "revision": "c61a90b9291a93182baffc8fb5661ace"
  },
  {
    "url": "assets/js/18.b86fdeee.js",
    "revision": "d61f78923f36d7722ddc9072c7960568"
  },
  {
    "url": "assets/js/19.97f4ebae.js",
    "revision": "e02efc1601edb96f16311b1a5d3e9a82"
  },
  {
    "url": "assets/js/2.775e820d.js",
    "revision": "7360729a03258a8b393ac8cc36356171"
  },
  {
    "url": "assets/js/20.cb0bc7f6.js",
    "revision": "d7d0cfe2a7466b4cf469476b9933e5e6"
  },
  {
    "url": "assets/js/21.82a625df.js",
    "revision": "f4e8b1255aa09bd766ccdcc638008790"
  },
  {
    "url": "assets/js/22.9e412b6a.js",
    "revision": "73ddd528b18680179dcddcf3ed882204"
  },
  {
    "url": "assets/js/23.289935bf.js",
    "revision": "4ba6a0b4a5b4cbe4a31820f3983d50cc"
  },
  {
    "url": "assets/js/24.c3d0bde8.js",
    "revision": "dc6b9a00e66be18dcd1da366e084ebc7"
  },
  {
    "url": "assets/js/25.18c04899.js",
    "revision": "08932dfd3b8f6cb874c4ee6938da40d3"
  },
  {
    "url": "assets/js/26.878ef721.js",
    "revision": "56f6d07963d9616f3a0e674b30fecd93"
  },
  {
    "url": "assets/js/27.bd8f9760.js",
    "revision": "d045022e1ac6c003b8ab1e49947e68ae"
  },
  {
    "url": "assets/js/28.147a7f39.js",
    "revision": "91f0b01a5e63704dc8d15750ff808480"
  },
  {
    "url": "assets/js/29.0cc08140.js",
    "revision": "809702e41069fd65b3dbb085caf85879"
  },
  {
    "url": "assets/js/3.54a9f420.js",
    "revision": "beb2418b58abcfd6a26ce474a11721e7"
  },
  {
    "url": "assets/js/30.04018b2f.js",
    "revision": "a6f2efdab7563838e6b7a3181e06a898"
  },
  {
    "url": "assets/js/31.771e81e7.js",
    "revision": "03f6c74ab22c268a970e9029c4ce892e"
  },
  {
    "url": "assets/js/32.512ca24c.js",
    "revision": "e4d394b06905193ca12dc5e7a64529b1"
  },
  {
    "url": "assets/js/33.45ee6795.js",
    "revision": "a346546a5c49ea917ce05998e986a599"
  },
  {
    "url": "assets/js/34.4616250c.js",
    "revision": "f419709d8d4e93cefc7a177f2e9d157d"
  },
  {
    "url": "assets/js/35.183b23b6.js",
    "revision": "31b3ae00ca5b480d43a070ac65686a2b"
  },
  {
    "url": "assets/js/36.d665eae1.js",
    "revision": "11e6feb81994f28af283dd31565b9b0e"
  },
  {
    "url": "assets/js/37.454484ed.js",
    "revision": "c56c65ad72a97781d2dc441689a79e66"
  },
  {
    "url": "assets/js/38.be4e0c5e.js",
    "revision": "6c705f755be386dfd6a58a2620d6bae2"
  },
  {
    "url": "assets/js/39.e1c832e7.js",
    "revision": "d1da2a5c69374450c3e99348ba1cb17a"
  },
  {
    "url": "assets/js/4.a8c40f8e.js",
    "revision": "a7d870c1554a2dee07748b9496199efd"
  },
  {
    "url": "assets/js/40.8dd6f923.js",
    "revision": "160edbc41f03fb70b44cd1110d8e0d6f"
  },
  {
    "url": "assets/js/41.c7f42a5a.js",
    "revision": "f53dd39b9c6589547143f4345c74ce9b"
  },
  {
    "url": "assets/js/42.17e2d661.js",
    "revision": "7ffc1de2ecd0ecd392fc4106c6773ccb"
  },
  {
    "url": "assets/js/43.c7a2b204.js",
    "revision": "c7596de12ef8a4f6e3865b4bfd137303"
  },
  {
    "url": "assets/js/44.aacd67c4.js",
    "revision": "a1138b05857879ff2b3cf2132496d6ff"
  },
  {
    "url": "assets/js/5.70fc0f0f.js",
    "revision": "42bd120f3147e57a47f78dc1b3a61836"
  },
  {
    "url": "assets/js/6.9288354d.js",
    "revision": "ede54b9819debed81378d0554f64bd39"
  },
  {
    "url": "assets/js/7.fee1ba73.js",
    "revision": "c6b63588b0807f6cd066d06a4872a78c"
  },
  {
    "url": "assets/js/8.8b7cc0e3.js",
    "revision": "7fb7728318e2f1de33776a6464d8e4da"
  },
  {
    "url": "assets/js/9.13301f74.js",
    "revision": "0e8de18b34918703c1fff3672936735b"
  },
  {
    "url": "assets/js/app.61499e0b.js",
    "revision": "06be502d5a837afaee15ab6d546d77dc"
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
    "revision": "e8eaa67fc639fd2de346fcca27b07e09"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "087199c174ba28b472891ad4c0753e5c"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "7149fcece919f05829241b8105b4e368"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "f82fe3893f4ce5d83fc5c87b1ef4250b"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "f1b3fbb12ea128420de173ccb398aafb"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "4f779f3655cc20bc460cd7df188ff852"
  },
  {
    "url": "coffee/index.html",
    "revision": "eb4de31b1cd36aedd4d70ee741852e9f"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "c193afd1f0c5d0fcad7351a0e93ee5d1"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "14123662956c133bddfde57f10b6bc8d"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "36a941cfc1fba8390ea91a2630da63b2"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "19339e91524ddcf2e2e2ad4c6b3b9190"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "c54520c7bef3755e70553683698bd60a"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "7b773ca93ccd64272c564dbb909cd1a8"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "76661c28dbc3213b0926645a2f77fd5f"
  },
  {
    "url": "coffee/start.html",
    "revision": "5afd17d7c7cfaa8bcfa31bdf9e51cebd"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "a9057cfb471286f7e7fe1f95f4d709c2"
  },
  {
    "url": "discord.html",
    "revision": "745d376321cc438d2632bac2b26a1447"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "0b7aa582fd413809d65046bf58743dc5"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "1d36b32af2d2196080295d3b0944bc52"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "cf518e2ca9a0ffa4be80058101a3e2b2"
  },
  {
    "url": "docs/index.html",
    "revision": "886f132ac943c6c416bbeb44ac5ee0c7"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "1e6d23c801509e7da897d12e3ccc4236"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "5f40402c016348026ec836bb08b4b67c"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "e24d300b16b40aa4af453aa1c326ca40"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "934181aef400192b1d823184810c58e0"
  },
  {
    "url": "invite/index.html",
    "revision": "699e671bd7103fe4c070d357783a65fa"
  },
  {
    "url": "legal.html",
    "revision": "23bf43933781f0bb43d31dbba17b10ad"
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
    "revision": "d196ef30115be35dee3cafa32a75e493"
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
