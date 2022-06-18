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
    "revision": "5872edb599b8138692adc80f5c3ee9c3"
  },
  {
    "url": "about.html",
    "revision": "6bca5c3b47f8585d827c7e6c41c99b07"
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
    "url": "assets/js/19.9849cc18.js",
    "revision": "90c6c2747c4b254b80dd7f50c56a90fe"
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
    "url": "assets/js/24.b3fab472.js",
    "revision": "1daff2f7890ae9cc957a8f2b0f351a3f"
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
    "url": "assets/js/app.22915ed6.js",
    "revision": "649d716ad60367a98b31a485a443c714"
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
    "revision": "fc16b8377b71fe9cc3a15242a19e7db1"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "3f45d2b9e46c9a428fe42fa071c497f6"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "5b182e91918d75fbff11daeddba76956"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "b4044475c530fae223c58df18867714e"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "8e30e65c5285cb9dad8b10074011f5c5"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "f863b575a916822a39fa6f36551bad3e"
  },
  {
    "url": "coffee/index.html",
    "revision": "b2fe07b50c377fab48f0fb0a14e7e6a7"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "51bc28c139f5b2da563a3f1d415b8714"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "4f83263f31e40f38d590f0982ed6eaf5"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "31e7dc3691992349dbedae0d54a821c9"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "3f8854e5e29fd868171d01486eacda61"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "5f10267d990af3463313f6417e3d664b"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "4b47c3c61c9d224d8cb6a27a0e118571"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "887c9c3b6ccdbd320453c859710083d2"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "7cf95cb178a31739eccb1f461d25bde4"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "ead92432dec16b181af5c3fd2835f4b8"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "f3f40ec530662119e301d9b1d8e66112"
  },
  {
    "url": "discord.html",
    "revision": "3f9829d0208ecd6ffc7cd80b8aeb73c9"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "0a7a0399614e09e50436243042c6065e"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "09077c0d74a06240ad365e2c8701bea2"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "461882535876732c2fa3e4d248a7157f"
  },
  {
    "url": "docs/index.html",
    "revision": "8505c77e90478fd0453184b0f8b901fc"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "b1974238a700e19c7761fdffd7cb5196"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "9fd2e4cbec4b1d229f0ec91d7a96a1da"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "1a9a568328016ae1ed8d2ba69a971376"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "e8961de98d5ef911ba39da7032ea9123"
  },
  {
    "url": "invite/index.html",
    "revision": "1a46eba90b24a60aaedc1c50e5d6290e"
  },
  {
    "url": "legal.html",
    "revision": "7041eee75d39f93826ed1ab47cb185b6"
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
    "revision": "cc0b5fbc71d1430850f82db31c2a1d0c"
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
