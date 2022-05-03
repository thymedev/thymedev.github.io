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
    "revision": "74af2ef97f5ae017f077153a21606c0e"
  },
  {
    "url": "about.html",
    "revision": "8884eefd6c3009d26f10edfe6109fb4c"
  },
  {
    "url": "assets/css/0.styles.ed0fd18f.css",
    "revision": "1661e174b9e5da6fbb0eac16dcc8691b"
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
    "url": "assets/js/7.df404317.js",
    "revision": "dc5f22bed8e5241dceb1b0a1469be4d6"
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
    "url": "assets/js/app.405f28c0.js",
    "revision": "8aebf69da2030de39c32891c7afebe1f"
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
    "revision": "b35190a57e17f52304770e861edfef07"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "35a820f1c54829121f8b4076460a7ffc"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "e90148c183dcbe524ea8d048ac0adc4e"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "98efaa20b720faf95a3581c8c296e718"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "1ec38b5e026b4dcfd48e6a5b8e686c84"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "d29ce7e029962b07988a8651923590f8"
  },
  {
    "url": "coffee/index.html",
    "revision": "787a4120a7f7df635d2dae411f41a43c"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "23187fbaa74d7d9165bb2d8ea5ac0ec1"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "0cb4f04f2523b5129dee1b7c10dc96b9"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "f5d5379185b58eb1ba77ae30657bdb72"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "00d12d2c928f4c05b5f7e17b27039622"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "bd1d28552141d74be2be2181729fed0d"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "4de9b20862d35e0e72f1f61125c5cac7"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "46839ce1c74a1db02c2ee453a9530de7"
  },
  {
    "url": "coffee/start.html",
    "revision": "b3d41d266c9ffdcf7e2e198ba4377de9"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "d0b7b8b8f5af43716af7d08629616d45"
  },
  {
    "url": "discord.html",
    "revision": "c86c2edb4a9bd48350ddb806cd8057d5"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "68b662b65fddbab56bc78bee60342bf5"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "ee35f7fbd30f34d21d27e084d217800e"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "affe9a7944a15c8a5db67e7076d145f3"
  },
  {
    "url": "docs/index.html",
    "revision": "ded5d35ded9cec6f3a658867566bbe59"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "3502ea107c71893e4388994518177971"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "d17b50ac969aa626081cf9375ddca501"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "1077b59dbeef4c3032e63137c83f8a38"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "75274d16b092253c95ae588223295390"
  },
  {
    "url": "invite/index.html",
    "revision": "9679acc91348475bb65d92a45c3eb0e5"
  },
  {
    "url": "legal.html",
    "revision": "4864ad57ba5a746a795b45fe6f5b7f5d"
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
    "revision": "20fb2da4f0c678eeb23b1bc0d1bc84c7"
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
