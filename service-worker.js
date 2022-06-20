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
    "revision": "af421e051611eefb6f48aa4291141395"
  },
  {
    "url": "about.html",
    "revision": "d2cf71ec88d634c5a0d2ffbd0b8f470c"
  },
  {
    "url": "assets/css/0.styles.27d9ec46.css",
    "revision": "30013e66083853b025f820b5443dc7af"
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
    "url": "assets/img/what-is-thyme.4cefd8bf.png",
    "revision": "4cefd8bf62d78952cad58b64198366d9"
  },
  {
    "url": "assets/js/10.aa2f1e6f.js",
    "revision": "c85553d5b1937dedff09d6ef5297059d"
  },
  {
    "url": "assets/js/11.0b8dce3c.js",
    "revision": "bf811ab883ca5fb697439b7658173135"
  },
  {
    "url": "assets/js/12.a087a80d.js",
    "revision": "9b9e31e12dcb49960e9d45aab2f01233"
  },
  {
    "url": "assets/js/13.b437a7f0.js",
    "revision": "af181a0f768adeb92754310d25741381"
  },
  {
    "url": "assets/js/14.738d207a.js",
    "revision": "d12a1f76224bc093ec5cc0890bc1d98a"
  },
  {
    "url": "assets/js/15.4b154dce.js",
    "revision": "1c28f64bfe1dbe495c817b38f389e1d7"
  },
  {
    "url": "assets/js/16.a45e87bb.js",
    "revision": "85e3237c9867b850df968d53673b7d1a"
  },
  {
    "url": "assets/js/17.da51aa32.js",
    "revision": "acc70b6fb22b49506b49758b03885ca4"
  },
  {
    "url": "assets/js/18.2f947893.js",
    "revision": "9c9cefeedca64ff97b70d0e3c6792ffc"
  },
  {
    "url": "assets/js/19.c4e8fcfd.js",
    "revision": "7449d9898d6ff1eff0db59803bb00bec"
  },
  {
    "url": "assets/js/2.e03109a4.js",
    "revision": "e6a1e04f939957b42b98e9adab470dc7"
  },
  {
    "url": "assets/js/20.cad9cd9e.js",
    "revision": "40e2be2ffba9ad600a3bb6310d98b675"
  },
  {
    "url": "assets/js/21.3c76a9a9.js",
    "revision": "36df804294e0538444905ceea1c12db9"
  },
  {
    "url": "assets/js/22.8b3eb54a.js",
    "revision": "e5f3ddabca2fa6be584c7c53519c79ca"
  },
  {
    "url": "assets/js/23.06187e8b.js",
    "revision": "0784f7ddbf47ff12b2c1e7fcf783b529"
  },
  {
    "url": "assets/js/24.884243e3.js",
    "revision": "89b9ea7efdc0ff2fb5b0e15cad4ac93b"
  },
  {
    "url": "assets/js/25.1ad61eaf.js",
    "revision": "d54a0f81e8aabb44c65e6e6098be3549"
  },
  {
    "url": "assets/js/26.8f0bdd29.js",
    "revision": "a6c79a6f9627bff01ef888e241c2548d"
  },
  {
    "url": "assets/js/27.a1fb4995.js",
    "revision": "5a8f8fd6e957aff44e2fdbd9d2505aa6"
  },
  {
    "url": "assets/js/28.c06806e6.js",
    "revision": "7197fe6ea7f6e0649e25fdfc79fef900"
  },
  {
    "url": "assets/js/29.56b8451d.js",
    "revision": "60c5620560bfdc8caa58e13a1970cae2"
  },
  {
    "url": "assets/js/3.1e67e6f1.js",
    "revision": "8a74f383c903252d6f8827ff2c3730db"
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
    "url": "assets/js/4.251fc5e1.js",
    "revision": "418588c099a13d5f1f8cf68259ff4276"
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
    "url": "assets/js/48.98de2edc.js",
    "revision": "49d24e336dca4f7e8f698752bb0f44bc"
  },
  {
    "url": "assets/js/5.9ed882e8.js",
    "revision": "3c2bd8b66ebdbf3a57ff24984f02677c"
  },
  {
    "url": "assets/js/6.56b98ccd.js",
    "revision": "dec730e9e442c284593eaf1e4ec01f78"
  },
  {
    "url": "assets/js/7.e41d8ffe.js",
    "revision": "e32d447ab16b97e8c125c322edac3ec9"
  },
  {
    "url": "assets/js/8.5bf193a6.js",
    "revision": "990e1f22f00f31e58a2f78db8d6334c9"
  },
  {
    "url": "assets/js/9.f9bc8a4d.js",
    "revision": "b8c7cdfc9c2efc2a2eb590163d0af942"
  },
  {
    "url": "assets/js/app.95b61c5e.js",
    "revision": "35278bd7bcd9729aefab3bbd35a3ae3d"
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
    "revision": "a41772e29af00c6634849154e737cef7"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "591b8abd6ba356dbca40bede427d1f55"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "7fdbe7898cad4518fbf12bf597c2958a"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "456335f8e17a0180b220ff15fc215ab6"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "8a647fd730b83e6a39518ca8e2b67486"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "c341ed1137f71f9746ea5321534f3504"
  },
  {
    "url": "coffee/index.html",
    "revision": "e6b78e47b5edf62122dfa4f506c96ce7"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "926552ac675734fa8a933dc18ebd35a7"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "9688da2f635c9612d14dd0113d6f015b"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "473439e12668bc3787217e5c7d5fcf0b"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "dd9b80e65c7533ee95484bd9f0bfe969"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "6b227e70b0db41709ad42be4650d088a"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "4e4e327f86e77a6931294ebebda4d51d"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "807da2b93a1eaf65d72577a3ff8dffdf"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "a06f5777b484c8f19d87e9e6e3a9269b"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "a5b8bcac6a0da62161cbd596c38d967f"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "ac0a24f1d82ae3aa31a15f310cc14672"
  },
  {
    "url": "discord.html",
    "revision": "00d015bf6e86deba5a93b0ed94d9e493"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "3a6d85efbfb4f64c09d32ee011e13e65"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "b266e94e43cf29ce4cb81f88d2b7cb24"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "89d0588cb7ed6d6e181456d2d641e315"
  },
  {
    "url": "docs/index.html",
    "revision": "3f74a0bcd637a3653454d67fbba7c5e9"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "2db6ece5179b30b181db7f80f1e6a893"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "12ac7d173cb053cc236da89c1e14cc54"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "a60daf2a16a369d4b84412da40053849"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "b4c1f52c435bd4c860dbd7de700e9368"
  },
  {
    "url": "invite/index.html",
    "revision": "8eac63dff18e3200793e467e2b1063dd"
  },
  {
    "url": "legal.html",
    "revision": "eba71ca72a90f982a0a941bc3bcaa673"
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
    "revision": "aa3ac2a332bdbeba69d8bf31a0954256"
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
