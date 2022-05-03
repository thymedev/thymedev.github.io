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
    "revision": "254bdba72c02bad7825a78afaa254152"
  },
  {
    "url": "about.html",
    "revision": "9656ad95ac22a2e2fbb3f44486ca6691"
  },
  {
    "url": "assets/css/0.styles.bde410e0.css",
    "revision": "feeb2601f026038f39ea56c9f573897c"
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
    "url": "assets/js/37.6ab3b0b6.js",
    "revision": "81f1605b4cbb6e977193e371da1106e3"
  },
  {
    "url": "assets/js/38.8181a60e.js",
    "revision": "d56fd3d1c0a0033bfbf355933495ed0f"
  },
  {
    "url": "assets/js/39.bd96780e.js",
    "revision": "369c880f83a61ead7b6bfd07b1229166"
  },
  {
    "url": "assets/js/4.a8c40f8e.js",
    "revision": "a7d870c1554a2dee07748b9496199efd"
  },
  {
    "url": "assets/js/40.2e0c26f3.js",
    "revision": "46d0b2ad422f473ce1ff45f06991123d"
  },
  {
    "url": "assets/js/41.0994e7e3.js",
    "revision": "fff3e03dd580ee2f41dde59456556cf5"
  },
  {
    "url": "assets/js/42.c703c4f8.js",
    "revision": "323eb3e52468f5d62faa591659bd2348"
  },
  {
    "url": "assets/js/43.2c80e8aa.js",
    "revision": "106511899a78afd18bad0307940df8d5"
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
    "url": "assets/js/7.b1886000.js",
    "revision": "e7e9a0f3f361c6a7764d31633992c0a8"
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
    "url": "assets/js/app.3731819e.js",
    "revision": "b9a4b8b7997587efd68e419a4620104c"
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
    "revision": "72268b4e77157f31c8f1c97c33a4a6e2"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "49b30dab907080e54b3acdca0f64eb4c"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "400feb3b0fefbc943fa59ebb0a3b50d7"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "71e4231beacdfd2601dabcd2a1532ba5"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "f8add07bc5be7ad775e6664bc19d8f6d"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "e580800fef9cb3c40c83d0ed9e58fd1d"
  },
  {
    "url": "coffee/index.html",
    "revision": "b6d89b67786cb8b4252bba97404aa9f4"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "306866f59a7e7ce969483f75017a5812"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "521c42e1972687244149f20e8be69ce0"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "22a688be1c5da0590b91f5c393eebe5c"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "14c1820dd2f90c0c9784fcf33e76437f"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "c17cd5a79f9c60d64bce24576478d83e"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "9d553f3fc40a4e096a43cca981aae33f"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "c0856d92372a9b8e72c7d130da03d3e8"
  },
  {
    "url": "coffee/start.html",
    "revision": "de57569c937f3e872de4fbbf7fce63f5"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "cb962a7e945c891e9058c018866f853c"
  },
  {
    "url": "discord.html",
    "revision": "100d1ca4ccf55e50a94881a091e51061"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "65a9f4a57a6a2bfd211633848509543e"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "040781ac1aa232a20ae5c4365c5fa50f"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "7fff6d7012da3ee45a7dc66d682db505"
  },
  {
    "url": "docs/index.html",
    "revision": "fe44d3c046195ad63cf50dce59648dee"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "fab5cd602d07f0d637048473da0a3a77"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "0e8d8d2b670def775dd7c6d9f7e7bda4"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "1d16d243949af239a5fec7dc3cb12590"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "ea3998a91e4a35ff3f19bc25ee193226"
  },
  {
    "url": "invite/index.html",
    "revision": "20faba89e95a2d8794f34654cfc690f6"
  },
  {
    "url": "legal.html",
    "revision": "f0fcda3a3b09bdd33ad360ebb8a5cead"
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
    "revision": "b5948d92250201645b7a151c98a80d18"
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
