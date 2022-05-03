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
    "revision": "4187d4ff0b69f90f322553be23bb12b6"
  },
  {
    "url": "about.html",
    "revision": "7ce703fc27d52bb6ca509f0d7d880c04"
  },
  {
    "url": "assets/css/0.styles.6a809d4e.css",
    "revision": "c2e9dea973641b86defb6fde6a975b12"
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
    "url": "assets/js/7.8f5a58bc.js",
    "revision": "bf9d5515b10d384064ac0444f5de1957"
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
    "url": "assets/js/app.9ed50d45.js",
    "revision": "a80eaee27fcd3df59adc0baa91b672d2"
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
    "revision": "a537e1853af9c9393dc996fef9b6784c"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "6adb581e8f1804eaab2e35db869005ab"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "2c932e01c3ca19858f48ecd8fb6a884a"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "032f939f6a1724cd2a684deca27eb228"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "f07a3668d98dfb0b61f54dc0c4a8c481"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "bdefb7c9640fd4827aadfa62ecef76f1"
  },
  {
    "url": "coffee/index.html",
    "revision": "e0aa2d1c915568676c507d338501c53a"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "8981c7dac8b96467e063228c67edf908"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "7a8f91f4b372db0b85a0bcee0f3500d0"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "5c416ac7a57a6c0dfd3d849446f5ab05"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "63033d702fd40b3de22fe92f664abfa3"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "d34ba796f26be1031e6ae81862bc4771"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "af4c33753c91268a05fd8a3671da8268"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "93e0abb35969fc528abef35f297eff0c"
  },
  {
    "url": "coffee/start.html",
    "revision": "307e5ac5445e537d5a25ea3ec6f97adf"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "6e9b7614ebf7cbc23b46cce1712a4613"
  },
  {
    "url": "discord.html",
    "revision": "9443d98ab4ddacf34151496150f5b25f"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "cd1c1721206797bc33ed5f2e914f814e"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "6bdf49fa069089866065b2e3ac3f7a22"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "a9f26426849b74e95c82344ca1881831"
  },
  {
    "url": "docs/index.html",
    "revision": "5af25bb57f908b20a08b8541e431dea8"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "c577ef00de9f3e178a90f8bbc2d25260"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "658abe1d044a0c14f9161fbffe899c2c"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "df7c0ceb1caa0dcb1d4dd7bd173fdbe4"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "85f9b3ec31de35e2afeda260ce34958d"
  },
  {
    "url": "invite/index.html",
    "revision": "29d886d4f650c93a6bbf96451300f985"
  },
  {
    "url": "legal.html",
    "revision": "74438895fb75f32e5e7cf0151f158563"
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
    "revision": "cb63f1b99350e8ec1d23dc5c3845cfc8"
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
