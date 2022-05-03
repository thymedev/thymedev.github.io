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
    "revision": "b08e79f6e0b84af18f84e7b44b5d7923"
  },
  {
    "url": "about.html",
    "revision": "4e628d188ea2cdc02f1b51c7a8c8dab8"
  },
  {
    "url": "assets/css/0.styles.6739fdbe.css",
    "revision": "4ee26c9c140cfd8dd19b221a80950d6e"
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
    "url": "assets/js/7.4c43ac36.js",
    "revision": "b093133fc1aec440dbe4f264cb66a6c6"
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
    "url": "assets/js/app.f9aef654.js",
    "revision": "0b15c8208097daf42004dd88b736e36c"
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
    "revision": "cf10c897cdfb1fa495bd369e0fd3ccb8"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "c46a5c4c778454bc49db8ff71d10fc97"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "b54feed3ce1a101696310a91668c7538"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "e01a36f9372341b20876d1ea9d9bb130"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "121bfbaf9c2b0dbc70b1e04406ee8a15"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "6c04b8c2d08adf2ab785c93b5fe0da77"
  },
  {
    "url": "coffee/index.html",
    "revision": "47d8b8764ad69ed83c0fd246f0ecc8b9"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "32cd3bcfeb7a80ff6a6615385bd5b2db"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "a706d6d61ee3751b57bd540bbc8a898c"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "7221847e91427a742c926c7c2cbb53ed"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "8cb47eb91af74472b8b6d3e6f7bdfd5a"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "be46e46371d468d6e7beb6590b66c1f9"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "0402c0003ccfb4e58046443e761db9e8"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "f43ae4a782656a1b659eb26a513b1027"
  },
  {
    "url": "coffee/start.html",
    "revision": "5666a36a6c4eb602c1cca8354c8c962a"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "69bba2772af1a371fe79237744ae3991"
  },
  {
    "url": "discord.html",
    "revision": "f0c6b0c0499e07949e0709e047945ae5"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "a7dba25f433dd8f95b51103b2bdcffde"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "c17f412ab41ff0f580bc0f4a9821659d"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "f5e99391f722f9f5de695da8e6d27f74"
  },
  {
    "url": "docs/index.html",
    "revision": "d10cfb2aab67875d351d69cf830c475b"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "07b547870113806cab8e2f07b4ec1cd5"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "1fab538ef631f5c283f3c77ae0b2042c"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "3036f1d5634143e37c4032d8053f2221"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "30bc5dece405ad8fb0669b8ade7d920e"
  },
  {
    "url": "invite/index.html",
    "revision": "f300caced9c50b41235fe839525c05be"
  },
  {
    "url": "legal.html",
    "revision": "136f1fbd6e8baa845962b71682a3dac1"
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
    "revision": "3f78254033234152244f68e526cdb497"
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
