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
    "revision": "558ce11bb50c67d233e9229b7161e7b7"
  },
  {
    "url": "about.html",
    "revision": "c96b7accbbe4eecec4c95131a56632f5"
  },
  {
    "url": "assets/css/0.styles.be764155.css",
    "revision": "ccf11bf17fefcc5f250e1e2f14a207fc"
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
    "url": "assets/js/18.e2d38683.js",
    "revision": "f8e321f662bb4df21028554a8d66d193"
  },
  {
    "url": "assets/js/19.14caef9a.js",
    "revision": "b660716b691263c27786e585644257b0"
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
    "url": "assets/js/47.54696c67.js",
    "revision": "c660912dc28139230b044805c5a2fb1d"
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
    "url": "assets/js/app.e5a2935b.js",
    "revision": "48ae36e555439d767d2db693ce03740d"
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
    "revision": "94d6463b6e4d88092eb6c477eebfa681"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "56783ec1d6e2924ee112ee74802ea8ec"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "300ee83ba9215f4b250e2eb066e410b4"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "422faa446fec03267f54080ed1934934"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "3d402f7c5e66d79b4e385d49c7e1e537"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "75f7e6955c485d82c22901848e183e60"
  },
  {
    "url": "coffee/index.html",
    "revision": "fdd8910d70f4d598f3fd16fa68afa315"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "e75100f7c8407cefc4872b6734c26c16"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "d7d6d1266c72b46d0c92d222b558b484"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "45ea39c51b67dd65442f5239c551e254"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "ca44876a55309c222dd177247a57e294"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "43a5ed2967b287b017417dcd96e5acbb"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "a191b1d3b7440482322717cfdbf7ba30"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "364ea849a8684cf1d58e9fcec1ed4b63"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "223112d2a9ff5218ebbbd2f67a853737"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "f941e668c45f44f27118e3b75efd5ff9"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "6895dbd28b00d9abbeaf626a2c0a074e"
  },
  {
    "url": "discord.html",
    "revision": "9e4c0523524c8fdc3ca8315d64368b5b"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "a629174ca29a789e9017e691532df503"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "e67dd4d6e5eb900f5cc5134de45358dc"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "13f568c98ec9192e9bd3f7ff62b49bcb"
  },
  {
    "url": "docs/index.html",
    "revision": "7dd6452890acf78530fef69638a54937"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "439146278c8d3a9839ca1efb7c6f7ac4"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "738b9170cc1837d2e888ba3b16876d77"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "807e53570b73d9b57daa2963b228cf3e"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "3253761797c805dd2ac3c4537fa31ccd"
  },
  {
    "url": "invite/index.html",
    "revision": "1cc2f66138f44e59039389c4822b0442"
  },
  {
    "url": "legal.html",
    "revision": "02f139736ec08b88f659c7086b364dd6"
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
    "revision": "e75482d52d0266bc86267456fb3ed0f9"
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
    "revision": "bd8d310c52ef81b2649093c3d982dbcd"
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
