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
    "revision": "31b7e0ee3afedb8de33f95c4d711cbaa"
  },
  {
    "url": "about.html",
    "revision": "419c6d00f2b7bb4c6d51032bab61edb0"
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
    "url": "assets/js/24.6211f8a3.js",
    "revision": "2cc72fd7fb7af6c5a1c24f23c770d32d"
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
    "url": "assets/js/app.2d85e2e4.js",
    "revision": "f82592704cfcb2d9e0c85350e4799e33"
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
    "revision": "a9347032c996f45038b51c83731148e4"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "68028ba146cbe12db89ecf8a928d3bfb"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "cd88d54700bc218d2496ba0ef744e4ce"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "28cd29ee856b103f2edfec8fbe0a56f0"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "7024bc1e6b5926ecc937e7dc87006e2d"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "797dd54e29563deea0154c29c3bfec3c"
  },
  {
    "url": "coffee/index.html",
    "revision": "f37353130d26ddfc170c8f110ba97b36"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "0bc7750ba3bebd57461c11609650a7d1"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "1dcb8e2e63e7f3cda9737ae606622eab"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "3ed4d8773939b6b153cb255e1c25c144"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "189d427c9be3ac543d19e26adbbbd790"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "0ebb7f0a1cbce8dcdff65daa176caaa1"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "8010ab34589bc94feedacfa6f22bb65a"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "be036aedacb8d00d0ecfa872b042ed7a"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "2ad59c136001f71bcf8b9e8fd6135839"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "9ed7ff7766bec5d48d6da4b56a72aabf"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "46c6b7663d779e0fbf2f2137055a7f97"
  },
  {
    "url": "discord.html",
    "revision": "30248da50a686d0af9c93468e938ce7d"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "c3c270e2a9a804ccd3a23ebecd7c0085"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "a06c2b76b91175afc050de1e8b2f5e9f"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "be8a7fbc2e4f36c972fe49bc13159608"
  },
  {
    "url": "docs/index.html",
    "revision": "0d277fcc304f44ab8b72dff2131750e6"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "15ac0d55b13c8c53d2077e0843d82dc1"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "efd491bccc59180705fc860ef21b0f77"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "bf5d0c36d74e4b8b20fb3aefb047b541"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "c5c4c9860dbc008e4e1a7d7cce6ff3a4"
  },
  {
    "url": "invite/index.html",
    "revision": "d642e02c2bb7a07146ede53088488c7b"
  },
  {
    "url": "legal.html",
    "revision": "7ab7bb60c9b49b2204b0e0ce4778b0c4"
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
    "revision": "d76b1bc9b862ba2cd1888338887b227b"
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
