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
    "revision": "1b0f56f86bad90a29e6d0e79c76e96c4"
  },
  {
    "url": "about.html",
    "revision": "3678b7829baf91500beb6dc45ee5fad6"
  },
  {
    "url": "assets/css/0.styles.7ff83bd9.css",
    "revision": "0d2f672391f4ff207c3e5aa0cb0e2a2c"
  },
  {
    "url": "assets/img/carbon-user-avatar-as-webhook.9f3f28de.png",
    "revision": "9f3f28decd792dcfc2dd0e561dce6adb"
  },
  {
    "url": "assets/img/emotes.17e4d8c3.jpg",
    "revision": "17e4d8c3523c7037db16cbc89592c5f2"
  },
  {
    "url": "assets/img/gcp-ssh.ddd1fe50.png",
    "revision": "ddd1fe500e4528b4dfa6e3bab2c205e9"
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
    "url": "assets/js/10.9266b96d.js",
    "revision": "f6be368aa15cdbecb50f5742f689a23a"
  },
  {
    "url": "assets/js/11.00706cac.js",
    "revision": "8afaed6683c245510b3c00b8a1a04ba0"
  },
  {
    "url": "assets/js/12.0210ae12.js",
    "revision": "2e1186e6b4e9b10dedf0892465acedc0"
  },
  {
    "url": "assets/js/13.1dfb77eb.js",
    "revision": "cc49f8a3c29269beb72030e9f050ee13"
  },
  {
    "url": "assets/js/14.738d207a.js",
    "revision": "d12a1f76224bc093ec5cc0890bc1d98a"
  },
  {
    "url": "assets/js/15.4ce50d02.js",
    "revision": "e3091262815f19caa72c9d02ade25215"
  },
  {
    "url": "assets/js/16.ee1226fa.js",
    "revision": "3beab704d2bde6e36d9c69e9fad0f04c"
  },
  {
    "url": "assets/js/17.b4b8704e.js",
    "revision": "537a9ea8aab2d97a8e7f8a62d73290b4"
  },
  {
    "url": "assets/js/18.e365ed74.js",
    "revision": "039e7bf7bf3da047580c3141a1df4e71"
  },
  {
    "url": "assets/js/19.77291240.js",
    "revision": "9f67a14a5b46adde8e96aa6bab56fce0"
  },
  {
    "url": "assets/js/2.92328a25.js",
    "revision": "ec7260ad4b567390d252b04f6cd1b5c7"
  },
  {
    "url": "assets/js/20.2f1a4c6c.js",
    "revision": "a058ce3de6ce194bc644dc960992a8e3"
  },
  {
    "url": "assets/js/21.6d106e4e.js",
    "revision": "2bee6c5db3178478ec3f5f9e20652844"
  },
  {
    "url": "assets/js/22.e184bc3e.js",
    "revision": "d163239503d6c9fc07fc748430bd84f4"
  },
  {
    "url": "assets/js/23.b8941829.js",
    "revision": "d77619943c7211443ac6a190c12192e1"
  },
  {
    "url": "assets/js/24.40c7a2a9.js",
    "revision": "e3a5f582e0c105289273ef15959e3da1"
  },
  {
    "url": "assets/js/25.a26d30ea.js",
    "revision": "44799ab5d249758ed020149339aeab76"
  },
  {
    "url": "assets/js/26.efd48a49.js",
    "revision": "a147304d4705ae1640558dbd1c696a4f"
  },
  {
    "url": "assets/js/27.d82f0e3c.js",
    "revision": "5006b2d92650808e51180ad3ced7fa2d"
  },
  {
    "url": "assets/js/28.1ec7ca57.js",
    "revision": "13d07fcfe889ed92ef1774d798ef6586"
  },
  {
    "url": "assets/js/29.520b5b5f.js",
    "revision": "a8d735191773dc59f57c654f02a182be"
  },
  {
    "url": "assets/js/3.d2aa446c.js",
    "revision": "39f53165b0386618eb1dd1880f901ba1"
  },
  {
    "url": "assets/js/30.8d4e9264.js",
    "revision": "19759fe27906d6dc027b06c7d0369707"
  },
  {
    "url": "assets/js/31.44e3ca38.js",
    "revision": "f4787f59c88a37d3558665f1d27fe00d"
  },
  {
    "url": "assets/js/32.dc783929.js",
    "revision": "615ddcaa9c0987f4ef78e7581a8142d8"
  },
  {
    "url": "assets/js/33.cc80a09c.js",
    "revision": "74f83c662b2bd5b83041ae579e28aa84"
  },
  {
    "url": "assets/js/34.417472a6.js",
    "revision": "980a3ea966ed9f2c180e71321b29e1c6"
  },
  {
    "url": "assets/js/35.4009fa7d.js",
    "revision": "62c86ea6f9b3ef5c8f88a1dcd3b532ca"
  },
  {
    "url": "assets/js/36.0d43ac56.js",
    "revision": "66f6cc31b19e962acfeeb81b7a6305f3"
  },
  {
    "url": "assets/js/37.f968516a.js",
    "revision": "7b54397d9c869d4e26745fd0509b132a"
  },
  {
    "url": "assets/js/38.94fc8fa6.js",
    "revision": "bffb758162206f4d285023e0a40f9c74"
  },
  {
    "url": "assets/js/39.4b4c63ec.js",
    "revision": "81d5f77f23c7937c6816833d91c148c2"
  },
  {
    "url": "assets/js/4.96cea6f3.js",
    "revision": "bc4d3d52cbe952977218a859b84f08aa"
  },
  {
    "url": "assets/js/40.4247360a.js",
    "revision": "dd88dbc02cb5c51f5e12c932ba12ab97"
  },
  {
    "url": "assets/js/41.04af995d.js",
    "revision": "67b77c40bc48bc271e7cd3eab8d4b164"
  },
  {
    "url": "assets/js/42.aa0370ca.js",
    "revision": "2e3a97aff38b9b6f3ab5b15c69234346"
  },
  {
    "url": "assets/js/43.bff2103a.js",
    "revision": "474d9e1b1f0fd0601a3e8d19c757375d"
  },
  {
    "url": "assets/js/44.460de956.js",
    "revision": "ae853eeaa1b5eeaf409bb30a916a98ea"
  },
  {
    "url": "assets/js/45.648fb001.js",
    "revision": "543613d0b9bad4e82f994f71413ba134"
  },
  {
    "url": "assets/js/46.d253ce7f.js",
    "revision": "f04afd8079e3f7abae3fca40b968c060"
  },
  {
    "url": "assets/js/47.65f3fb66.js",
    "revision": "286ff412ab4a42aa9bd95ec7e09d5213"
  },
  {
    "url": "assets/js/48.928eba01.js",
    "revision": "ea30f5d56ca6db76b21d689d6903bf50"
  },
  {
    "url": "assets/js/5.25700a0a.js",
    "revision": "37cb082d4e84c38823e03643c5b15871"
  },
  {
    "url": "assets/js/6.aa20de8e.js",
    "revision": "8a058479eafd336425618bfe75919226"
  },
  {
    "url": "assets/js/7.eb2702e1.js",
    "revision": "a8f74bf928ed346c5e262b95f2025875"
  },
  {
    "url": "assets/js/8.c1352ac5.js",
    "revision": "f0a4658480037e825e22e48dbb1370a3"
  },
  {
    "url": "assets/js/9.8d4aada1.js",
    "revision": "533a07295f8eab7ff9b2d7e46eedfc88"
  },
  {
    "url": "assets/js/app.65775352.js",
    "revision": "73239bea496439fcee1bbeeb0006be8f"
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
    "revision": "d58d9e9744d78278e76e0ad850c8666a"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "66621c95f00fbbafea0a53fbe35a3518"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "adb51991486eb4625541343216c4d2f7"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "cb34903404d88fd4d964ca5983faf829"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "848476a848bdcc671bda35c4b335f249"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "617479430a0a4895efe92d4f63fce5b3"
  },
  {
    "url": "coffee/index.html",
    "revision": "c2f9fccf853622e18bb9329c9d3fba16"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "2ddd3cf81f36a4572e80b4fcf1fb7222"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "457a82381d1ed89533bef0523bd67170"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "0c3e5b69d546fe262d3baead4868d8b5"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "6bbd6407fc21d5db91ea7af624a26428"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "295158e1ecfc7790cf365c83f59f7d23"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "07e85a1563ea2fd5bd3c4898b4f89c4c"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "4171aa6fa671837e467bcfb31203bd30"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "d031cc04d05901e7e3770b66661c9ced"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "4b9e18e5d9e521bc70a3573997945040"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "1af4368bfcfb28b84ce4c420b1a5c684"
  },
  {
    "url": "discord.html",
    "revision": "fb7c28a008e8be487d1e95b6c5845e02"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "2b86a6969b78af2b86cec0a42fbc77e9"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "336e60c1cc129b2c7f023d16ce812800"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "a4d768f2b04eb1a6c90b67df1fd99d88"
  },
  {
    "url": "docs/index.html",
    "revision": "a005ac1a4601d769a738f836f6a28b4a"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "9ce0340d295d6b161b2694ef8492e101"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "ed5ff1c7f4d5512b61925043e8e64ea9"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "3126c38fb4f58068d5b232e777ddd526"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "35f1860b06c01f471c1389eaf9c26a1a"
  },
  {
    "url": "invite/index.html",
    "revision": "707170532ecac54fa34c8b4d9d3489f4"
  },
  {
    "url": "legal.html",
    "revision": "dffbe35e4f962263a34d90c5d054d734"
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
    "revision": "eeed06d64b392dcad655a8e5745b16c6"
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
