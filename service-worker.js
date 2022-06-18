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
    "revision": "615ec543b04e91d396044cf3411c062a"
  },
  {
    "url": "about.html",
    "revision": "ca8f98544bff45dc46f13055185a60c4"
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
    "url": "assets/js/10.0fe43650.js",
    "revision": "aceb3b713769236fb94a06a9e13df586"
  },
  {
    "url": "assets/js/11.c8932594.js",
    "revision": "0e4ff21c9ffc7e4178da6c08b55c2836"
  },
  {
    "url": "assets/js/12.1acee884.js",
    "revision": "212dff9e726f148a0af14b92f0e8cd70"
  },
  {
    "url": "assets/js/13.301d8dfc.js",
    "revision": "5cab3573070e268644e68b70fc6b2a19"
  },
  {
    "url": "assets/js/14.78021e2a.js",
    "revision": "fb583829fb4d868e4f18060259b8c144"
  },
  {
    "url": "assets/js/15.e93708b9.js",
    "revision": "ed1fcac9af3633fb4f418307e4af0565"
  },
  {
    "url": "assets/js/16.9848740c.js",
    "revision": "2376c16688fcbee45b8f24cb4a17fb38"
  },
  {
    "url": "assets/js/17.50d793df.js",
    "revision": "26e69b2494df063f6938b6d1443383c0"
  },
  {
    "url": "assets/js/18.2df6256a.js",
    "revision": "2c54f613544caa44b7affbd400271c00"
  },
  {
    "url": "assets/js/19.94389666.js",
    "revision": "a9c1df3997963df820f270f6b0a55f50"
  },
  {
    "url": "assets/js/2.92328a25.js",
    "revision": "ec7260ad4b567390d252b04f6cd1b5c7"
  },
  {
    "url": "assets/js/20.c71e0c65.js",
    "revision": "00cba7583743b6f558c024b8c0f63092"
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
    "url": "assets/js/24.dcd9f818.js",
    "revision": "c6221754fe6ce2ae21638e81cd3523b4"
  },
  {
    "url": "assets/js/25.113f6d26.js",
    "revision": "0009b3a8c0b839ec5d86e13d02bfa0dc"
  },
  {
    "url": "assets/js/26.17e77cd8.js",
    "revision": "bb76ca7a3d01f0a112818adff86702aa"
  },
  {
    "url": "assets/js/27.5685bc80.js",
    "revision": "99dbd99f9f10da5afe8ddf7917fafea0"
  },
  {
    "url": "assets/js/28.6eeeebca.js",
    "revision": "91cb8ea0121506c5c7bd58b34aa5fd0f"
  },
  {
    "url": "assets/js/29.d55f8ca6.js",
    "revision": "48354344729ab461993217a8c6b39703"
  },
  {
    "url": "assets/js/3.d2aa446c.js",
    "revision": "39f53165b0386618eb1dd1880f901ba1"
  },
  {
    "url": "assets/js/30.edc3df4a.js",
    "revision": "96c52fe11b2c44dd27e981e8d617227f"
  },
  {
    "url": "assets/js/31.49a2b904.js",
    "revision": "03ac8cf3469130089178c5fa73ef0de9"
  },
  {
    "url": "assets/js/32.5291702d.js",
    "revision": "536167985108c39a9b8db4cc4928b775"
  },
  {
    "url": "assets/js/33.965a0823.js",
    "revision": "a18cfd990df5de754f7acaa1704dce56"
  },
  {
    "url": "assets/js/34.c55c75cc.js",
    "revision": "408de87b9b7e408f6dfb88d2e8e8d63d"
  },
  {
    "url": "assets/js/35.a0e5be29.js",
    "revision": "9b7deb173d5d795f0645a779a7b04d26"
  },
  {
    "url": "assets/js/36.f20e0a36.js",
    "revision": "aa29388e5329e1d168e2d58680209c1f"
  },
  {
    "url": "assets/js/37.92fd0f70.js",
    "revision": "d608ed27f195cbfd8f3719cc23dd3643"
  },
  {
    "url": "assets/js/38.69adff26.js",
    "revision": "22480494a3916c1e460d937af930ad57"
  },
  {
    "url": "assets/js/39.7076a941.js",
    "revision": "7702ca65e75864f52b707ef5d5da5f65"
  },
  {
    "url": "assets/js/4.657a560a.js",
    "revision": "871dd3343cb1990ac962d03f4b77d776"
  },
  {
    "url": "assets/js/40.cf436db8.js",
    "revision": "2bdda55f8a0cc0b65ba4094400d7eae2"
  },
  {
    "url": "assets/js/41.d1be712d.js",
    "revision": "9527514522b5907883d52707e40fbd2a"
  },
  {
    "url": "assets/js/42.0a9f40a7.js",
    "revision": "c0c10e0a934abe73142cded65c64bad9"
  },
  {
    "url": "assets/js/43.c7850f8b.js",
    "revision": "474d9e1b1f0fd0601a3e8d19c757375d"
  },
  {
    "url": "assets/js/44.f841f841.js",
    "revision": "ae853eeaa1b5eeaf409bb30a916a98ea"
  },
  {
    "url": "assets/js/45.cb8bbf05.js",
    "revision": "72708fe9cf63017450eff5779eab7b53"
  },
  {
    "url": "assets/js/46.84e32729.js",
    "revision": "cdf23aaae81a16524cbc0f4ca78a620b"
  },
  {
    "url": "assets/js/47.accb5f13.js",
    "revision": "3edde4a243d733c1703bcffbc3d7aa69"
  },
  {
    "url": "assets/js/5.a55a8c4e.js",
    "revision": "c6455b1efa739823f2d48bf853aa07f1"
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
    "url": "assets/js/app.001d701d.js",
    "revision": "1a05a9a8bad4b5be36b322710ad2d7b7"
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
    "revision": "d110da2d6d6cfaf2079506d17aa6db88"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "27c41ef375ffcefba682ee88647d845b"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "97c82fa8545798cddf9e5646b8808258"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "11f247830a3d3103da178c1a35262360"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "9ab1b22a4746e0aa794c12030e61f2bd"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "8cca3c3641f2901326036070e61ce3c1"
  },
  {
    "url": "coffee/index.html",
    "revision": "203d385bc9ac763ea256fdbac51f3a73"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "7a96ae67374c4987dbed899cedaf0bde"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "61e9236e7a0c8f6f2b3be42461a1e6a5"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "b91714307e94212d8231e685d17b5339"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "49fcb0098313260585964e91f72e74cf"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "e45b10af05085c39be47a5934ac2ee04"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "48a3d80e52783b202771de2da2b4895b"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "f0ab71ad97b2cfd1c0a959be02b1bf2a"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "7105f88f9ebbc95e2a91a4b12a90096d"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "f11d8400523e9ff2ea86a3dd69c9d552"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "0ec60c812f5256b8b74cc9595dd5caa1"
  },
  {
    "url": "discord.html",
    "revision": "4bb9636b8268c57e12516aa03ca115db"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "a5698a5bfb6e40d2dab1ed1d603c12c9"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "f7f09e1ae5bcf34860f32baf87628a03"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "60bbda63081aaf6113f382d3c05ba712"
  },
  {
    "url": "docs/index.html",
    "revision": "c430b3a7786e9ef93024a30788847517"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "9346271c2e289fdf85bf0d26a05bcbaf"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "803723d59f522cae030d283a9b13c172"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "eb3a192e1dafac49c5a7249ac783f87b"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "039f23c5688b6429dfa7063c8985e1a7"
  },
  {
    "url": "invite/index.html",
    "revision": "8b05d0b27369007db9b3bb177c4f52ce"
  },
  {
    "url": "legal.html",
    "revision": "cc0881a7f8b2969e2d2eba39b49f221b"
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
    "revision": "065ef37ccd51c9508b514a51d5d53203"
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
