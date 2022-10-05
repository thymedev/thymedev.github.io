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
    "revision": "77255271f07bdbe9f95684e97deaa970"
  },
  {
    "url": "about.html",
    "revision": "cb362655c33a748615bdb2161a84de20"
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
    "url": "assets/js/10.59c8f8aa.js",
    "revision": "16d034ea51f9b0010fb199a0ac5816ab"
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
    "url": "assets/js/13.eec8a870.js",
    "revision": "45afa9fc64eebde50ad28172ea980ed9"
  },
  {
    "url": "assets/js/14.dc857062.js",
    "revision": "939ff4d64f6324ed153addcf0e0c485d"
  },
  {
    "url": "assets/js/15.61f41f2d.js",
    "revision": "ce9e94fff15a4c74e3c0b3b79ad6c1e0"
  },
  {
    "url": "assets/js/16.06528b2f.js",
    "revision": "3b89558339b77d01f1cd5def3b591a88"
  },
  {
    "url": "assets/js/17.2aa44685.js",
    "revision": "aeaaaa084e9ba6e5d911aa41975caf52"
  },
  {
    "url": "assets/js/18.da3a7b3c.js",
    "revision": "e1d67e79a9eda16187aefe71090bafb2"
  },
  {
    "url": "assets/js/19.8a6f0918.js",
    "revision": "71a2888d0996279b0827132965fceffb"
  },
  {
    "url": "assets/js/2.e03109a4.js",
    "revision": "e6a1e04f939957b42b98e9adab470dc7"
  },
  {
    "url": "assets/js/20.e4575e5e.js",
    "revision": "9bda80e0aa1b4cc979f19f59d00d6cdd"
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
    "url": "assets/js/26.f2065860.js",
    "revision": "fae59084f76f917f36d895b8bc58e00f"
  },
  {
    "url": "assets/js/27.46df481d.js",
    "revision": "beb68ddfd4a9bc935bdc42544c8de4d7"
  },
  {
    "url": "assets/js/28.24ed8aa9.js",
    "revision": "d52c9b3370c55d36c78b55182df276d6"
  },
  {
    "url": "assets/js/29.f63934f1.js",
    "revision": "29d54e30beb104581b2b4099b3d7dec5"
  },
  {
    "url": "assets/js/3.1e67e6f1.js",
    "revision": "8a74f383c903252d6f8827ff2c3730db"
  },
  {
    "url": "assets/js/30.ed0ed844.js",
    "revision": "c878d98196a2a11f4f17b1676e3e82db"
  },
  {
    "url": "assets/js/31.07c19695.js",
    "revision": "42aeae9f4e4ca7f0ba83c353a7aed552"
  },
  {
    "url": "assets/js/32.1fa3cc2e.js",
    "revision": "018fa0bcd9da3e0905d1d378d13bfb92"
  },
  {
    "url": "assets/js/33.e5f3520f.js",
    "revision": "0e4ed6a733aaf5b45bb9092388d02134"
  },
  {
    "url": "assets/js/34.1c557dc2.js",
    "revision": "95f2b04ba0b13175ed42968cc48663c4"
  },
  {
    "url": "assets/js/35.edd4f27d.js",
    "revision": "ec8bb4566cd7ed459171b114410b126e"
  },
  {
    "url": "assets/js/36.ac718395.js",
    "revision": "2883fb337b89e4bc334dbe375af5194c"
  },
  {
    "url": "assets/js/37.82f56973.js",
    "revision": "0ec5011c5884d3ed8c2589ab932e8153"
  },
  {
    "url": "assets/js/38.a7260aa6.js",
    "revision": "bc86b14f3a5a87a0e1278267f42bdebf"
  },
  {
    "url": "assets/js/39.270aa588.js",
    "revision": "392248851b0e595fb9d454b6f4b3bca4"
  },
  {
    "url": "assets/js/4.251fc5e1.js",
    "revision": "418588c099a13d5f1f8cf68259ff4276"
  },
  {
    "url": "assets/js/40.c629ae2f.js",
    "revision": "e254e0662a01807b7a59d6119c1c23ab"
  },
  {
    "url": "assets/js/41.976c1da3.js",
    "revision": "7215fcd49c6feb35cb70bf50562eab88"
  },
  {
    "url": "assets/js/42.3ef7a197.js",
    "revision": "277ddb4280f3f67b30dea46172df4c09"
  },
  {
    "url": "assets/js/43.227156f6.js",
    "revision": "84ce0f4260ffe2fd5e1a2d8fa5030d71"
  },
  {
    "url": "assets/js/44.decf940e.js",
    "revision": "4a9903114f53fc976e5f47275e9accdb"
  },
  {
    "url": "assets/js/45.d63af16d.js",
    "revision": "c870c70163472bb682f035e653b65d3e"
  },
  {
    "url": "assets/js/46.d92d0731.js",
    "revision": "e5f307dc0ef6dd009d0ddbba3f60c824"
  },
  {
    "url": "assets/js/47.b98343c3.js",
    "revision": "2490754310d092343e42ad481536e283"
  },
  {
    "url": "assets/js/48.8ad64c5e.js",
    "revision": "e436b0dfbe520a0afbe8a045e317f87f"
  },
  {
    "url": "assets/js/49.0e6bbfb7.js",
    "revision": "62e75d5a5bb0e69e7656dc061471d757"
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
    "url": "assets/js/app.804904e2.js",
    "revision": "50f547f062e9121fc6259aa95d29dac0"
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
    "revision": "35e6bc77741f7e5a4537e79c0549cc0e"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "cdeb2ed96d1853c3bb3cddfd84617006"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "3deda08426f591e6d36b932902c2d938"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "0c2f88904b423b8422ac165ea22e3f68"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "b7ee62ccaa4cf1e5246bb3acf744ac5b"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "fb6970922cfa653a7a3327c10eab68d7"
  },
  {
    "url": "coffee/index.html",
    "revision": "89f27a8a70eae81e260bef494378f095"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "4fd4ef9dd2414e98069e7749e6b2e27c"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "d1c627f1a6bd304eb51ba04e2799c381"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "a4f48c7986a7463c1084379b9a04bd51"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "f42a118b269486935929051b68147a25"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "d3142e47b616a03d8d41faa913a251b4"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "912d8ab0019055207ca1b272b7203273"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "89a1a51016b90be6c37f398278d0a9d4"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "de4f73d849defa8624d82978827558f2"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "604e12ea717341f6578e7f815b066f65"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "e45a5952f85492270f60ca0105e930b1"
  },
  {
    "url": "discord.html",
    "revision": "be2d8cbc55a866be281caed1512df30d"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "05e7c6375a153c0629d0eae5b4a11df1"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "469f9ef00d84e419049bf9ffa468a167"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "2bc92da666b19e969293b00108bc6ab0"
  },
  {
    "url": "docs/index.html",
    "revision": "9281161403eee3b23358ab6d0e43168d"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "29338d4fd75473e49bf32803a06dba24"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "ab99e4d9b868a17617a8236b7b55f4bc"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "1795982ffad332cd08d6b13ff23183cd"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "6328368cf6b7bddcacaa9366c0aa406a"
  },
  {
    "url": "invite/index.html",
    "revision": "bd33f4fe7c1e519acfea04b5e9a5b05a"
  },
  {
    "url": "legal.html",
    "revision": "79f9828e1f22e40cce03ea2524944d49"
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
    "revision": "c94aaa0b62133d310cfc28bec961ba2a"
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
  },
  {
    "url": "waitlist.html",
    "revision": "490a67bdb6230522625d259802d4fc73"
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
