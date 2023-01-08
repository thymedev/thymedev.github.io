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
    "revision": "f77a2378159030f905453d252ad460f5"
  },
  {
    "url": "about.html",
    "revision": "5e355c06991c4ca31e7ff98c642f124e"
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
    "url": "assets/js/17.c7736226.js",
    "revision": "f87b136334915d04c99770ce2a09eb2a"
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
    "url": "assets/js/47.469c13db.js",
    "revision": "d39cc416d7a4ed116c6cf1e5e65a8cdc"
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
    "url": "assets/js/app.ef99e348.js",
    "revision": "6102d649c5b23d2a97058c39ef82fb05"
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
    "revision": "21828fa22db995fb0c692e297699b9c5"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "4bc3f41f1a7b58fd196f7e478582cbe6"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "899a3ef5148e060c3fc30c5129a9d7ad"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "b20ebeef4efb8edfd4d26b096060a20f"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "99719952a0b2f42fc578d2924573ee0d"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "cecc2fa5cf6daf002aad0a204fbfe9ff"
  },
  {
    "url": "coffee/index.html",
    "revision": "8659baf84b27707f4785014587b60300"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "e7c5e2c375803593a901517314dcc89e"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "c3f9d0029886be6d245ff77179ec1662"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "fa8dca0e5f8d77d2e9763173f1a3f45d"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "986c27f75cc8cd5f3b2e1ca7451ea32c"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "4b80ad92be7be4f942870b00a36f0437"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "3857fa761fed668398d1cd6410256d5c"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "d3fb08afb1478ae75c1f33ef9487ba5c"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "84e503aca3ee93a46fb289bee8b6e71a"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "6d0260677dd1a35d4a4014ec38273ba0"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "d5fbcfe32aa2cf9c56c240a174f83570"
  },
  {
    "url": "discord.html",
    "revision": "42c20788df4f8ca08a9773b1737d9efe"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "fee739b7410b1544c8cc9d97dd229ce2"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "9bd96afccb3265a239846960b9c20661"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "49eb92d998fe6dc3fc20181947c88a11"
  },
  {
    "url": "docs/index.html",
    "revision": "e779d8472464adbd10a0cff4d872995a"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "88d188ff7ff579b2b44eb28ef15695a3"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "4683bbbcc00d65b808eb0c4787b108f7"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "6f0f06b08d508f403097d48317b26a53"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "f7fafab0e947c197ff1c8a5bab705994"
  },
  {
    "url": "invite/index.html",
    "revision": "418c49e289ddb430fee3ce12590236ae"
  },
  {
    "url": "legal.html",
    "revision": "f4e48264aa8045a7a07bd3f36069085b"
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
    "revision": "4b3181fc53b9865b8d6bff20e8dae9b6"
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
    "revision": "37567237ac3204dfa5ddaf645427022e"
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
