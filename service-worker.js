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
    "revision": "7604f5e31022afbdbb3f6e06a88ed574"
  },
  {
    "url": "about.html",
    "revision": "0ab4344beb5e4530758468caa3268e01"
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
    "url": "assets/js/20.53993227.js",
    "revision": "b438ee12b7f37365fddcc17c78bd315b"
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
    "url": "assets/js/40.bf5e3653.js",
    "revision": "f52349ce90b2359bbdbb5f6fe3750df0"
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
    "url": "assets/js/app.d7d0be05.js",
    "revision": "674c8f91fb8817aeeb850d3535152758"
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
    "revision": "8ff401c9e35f2ff2c249c6ca39361965"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "f336341eb5cb3a569bb07d1df78d4b79"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "f835d81cda051c363ac01847eed846d9"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "7dd67188e94cd59293d75a974c642e92"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "4fffc8bcf837ab7a672a5a65168e145b"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "484cb8c06e97896d2614b8637226dd4e"
  },
  {
    "url": "coffee/index.html",
    "revision": "74a26b7b3fa18a69a58c5e72f4edf1d0"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "bd8915ccec406383c9b35ced10dc5ff8"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "5664721400413259f700991a63e33978"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "b8e1a989b68cba5fe21836c9be1509c3"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "49f721cf840ed4f8e801ab483e3a0d08"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "5d869f0756fc7cd63c7b928f40ce46c4"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "781241b28dfa7924605a589dd527fa7c"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "0ec9ef249d528c5bb0ae47625ac4ea14"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "e0c08129ce3b234b4d94cef640816455"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "d1d735febbd4f2d4bed8251f0eb6ec7c"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "aa93ec962f5bb5fe5ed88f2a39373457"
  },
  {
    "url": "discord.html",
    "revision": "56c6e137da82e54a874e84edf3e996e2"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "fbde19d1e095834bbb8449f3b92a9916"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "b91f8fe484fb2ad03036f613f50e1f71"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "ecf42be6b39ea907a78f4204f0875c5f"
  },
  {
    "url": "docs/index.html",
    "revision": "03ed34d8efa534ebb2ef872a509b6ec3"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "756a7c48de234b5bd096260185249a11"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "b0591a2a0137f3c7922f6c5e2aed375b"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "ee0805150d4eb32f7d1e669bec27a537"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "8844bbf7e67e9b66f019d50c2d121a8d"
  },
  {
    "url": "invite/index.html",
    "revision": "607474c4f94eab4e9d361ecb9dbf564e"
  },
  {
    "url": "legal.html",
    "revision": "d259a4b6353f4840ee0cfe179107413e"
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
    "revision": "5d91d949f05c8e946393f4ca31719ea4"
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
