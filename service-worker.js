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
    "revision": "6e9d0005daeab9f13a34844dee0f63ff"
  },
  {
    "url": "about.html",
    "revision": "584699d812de3765665ca1206a539ce1"
  },
  {
    "url": "assets/css/0.styles.0f97849d.css",
    "revision": "c77c3f79689992e63386f4c35bb68c34"
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
    "url": "assets/js/10.570f969b.js",
    "revision": "d7e3e31a858da4f41b357766d7926cbe"
  },
  {
    "url": "assets/js/11.60dde55f.js",
    "revision": "98f9090a02450dd47be9ece1952c9bb0"
  },
  {
    "url": "assets/js/12.8fe0171a.js",
    "revision": "7df79bf22240a6d10b678783dcf78a6f"
  },
  {
    "url": "assets/js/13.134424bb.js",
    "revision": "77a22907af7c61c1b4ff12eccb719852"
  },
  {
    "url": "assets/js/14.21d01a23.js",
    "revision": "5a8c195feb8b1a0c36d50b96863f69a1"
  },
  {
    "url": "assets/js/15.8d784d38.js",
    "revision": "25cfb64278d77a63d5162757e242bf05"
  },
  {
    "url": "assets/js/16.240e4e2e.js",
    "revision": "a062dfcd69f2da39fe7917d83571675d"
  },
  {
    "url": "assets/js/17.8fc7aa0a.js",
    "revision": "9f55fbe436a419bb75466d284846c55f"
  },
  {
    "url": "assets/js/18.1f5fa27e.js",
    "revision": "1444432a913b6f2ce815e9293d9f9069"
  },
  {
    "url": "assets/js/19.b101fbf1.js",
    "revision": "c56f7dc7f6b6fba89942268035741dea"
  },
  {
    "url": "assets/js/2.5354ee36.js",
    "revision": "af97b72f09f177a2350eded7aa5b98ce"
  },
  {
    "url": "assets/js/20.6c529c6f.js",
    "revision": "ae2c14a90dd86baf9a8fc0a06958ed1b"
  },
  {
    "url": "assets/js/21.0dd19944.js",
    "revision": "81bee02426ab5a74b0bc83311bcfd4a0"
  },
  {
    "url": "assets/js/22.b0413db0.js",
    "revision": "57d1c9f67e4833417f2e578d6e2bb95c"
  },
  {
    "url": "assets/js/23.70e3ea3a.js",
    "revision": "b3b3e720c93bf96ee78c929c894c399c"
  },
  {
    "url": "assets/js/24.fc35fe16.js",
    "revision": "50803fbd82047eea8c2c9743e2eb9458"
  },
  {
    "url": "assets/js/25.d31e5592.js",
    "revision": "b94c21372cf9c69ab00b13095dcc7805"
  },
  {
    "url": "assets/js/26.a11f5123.js",
    "revision": "fc909d57bd4a663521ee5ca16e85f989"
  },
  {
    "url": "assets/js/27.fcc0a210.js",
    "revision": "5241873a25b06798665b3583542fca26"
  },
  {
    "url": "assets/js/28.eff95350.js",
    "revision": "a200673b793ef25db362d745db16a2aa"
  },
  {
    "url": "assets/js/29.f7ef9476.js",
    "revision": "021cbc7b67f39f837c0d512123390555"
  },
  {
    "url": "assets/js/3.bcf4c63b.js",
    "revision": "e2fd0e9cbb7982412a507a5492b3c942"
  },
  {
    "url": "assets/js/30.bb76f88d.js",
    "revision": "0b047ad0c038a95b57bbd8f97133e27e"
  },
  {
    "url": "assets/js/31.665d0b71.js",
    "revision": "f58ced72b51585e25654e3d2a0c7de78"
  },
  {
    "url": "assets/js/32.5a4658bc.js",
    "revision": "5b2ec8f8cfaa11c7dd7c0dc69c1feb78"
  },
  {
    "url": "assets/js/33.091d591a.js",
    "revision": "6f67bd0fe2ed7afb526914b4b2664cf1"
  },
  {
    "url": "assets/js/34.364e278e.js",
    "revision": "95585a1b17453d12fc93f77789602172"
  },
  {
    "url": "assets/js/35.04a263da.js",
    "revision": "221fa750e7b51a6eccf9a45fdadf0fd2"
  },
  {
    "url": "assets/js/36.852c3a18.js",
    "revision": "706d4d5da979be144156385ba3d39b70"
  },
  {
    "url": "assets/js/37.b7fa4743.js",
    "revision": "a34d68ddd114b538f62555a6698498da"
  },
  {
    "url": "assets/js/38.a69e1e40.js",
    "revision": "96f2a87d02018f4e8c47fee22bd5c4a1"
  },
  {
    "url": "assets/js/39.027104a9.js",
    "revision": "5f89290cc1f921d3f412684bf7089b14"
  },
  {
    "url": "assets/js/4.096b6140.js",
    "revision": "9a1034db811984ed0ad2fdeb39ab6552"
  },
  {
    "url": "assets/js/40.d0eb7235.js",
    "revision": "dcab7f9ebb83c064f64f3842f37c3720"
  },
  {
    "url": "assets/js/41.1a4e5b20.js",
    "revision": "c30b113fbcaf863c0fb29a4f36233b87"
  },
  {
    "url": "assets/js/42.344574e5.js",
    "revision": "fb641c5a380ecd3dbbbd6828ea8d6c9a"
  },
  {
    "url": "assets/js/43.5c8f9fa8.js",
    "revision": "3aae30ee4762cd1c966dc00a13635236"
  },
  {
    "url": "assets/js/44.19b404f1.js",
    "revision": "ddf3ae58df2fa48d9cbc3772c9485408"
  },
  {
    "url": "assets/js/45.57b1d3f5.js",
    "revision": "9fd7bc444fd8b67696ffd379185f6925"
  },
  {
    "url": "assets/js/46.5f66710d.js",
    "revision": "4a44a3d9db0389ca8da4ae0ce1e928f4"
  },
  {
    "url": "assets/js/5.6e74d271.js",
    "revision": "d3f6ec1b03220b7eac0f1a40700e07da"
  },
  {
    "url": "assets/js/6.06aa7199.js",
    "revision": "55801992800ab63d995dea4c2895d717"
  },
  {
    "url": "assets/js/7.63f29605.js",
    "revision": "d51e120b318c8607b4c9d3663cc6091c"
  },
  {
    "url": "assets/js/8.ca835008.js",
    "revision": "e458ec61e5eecb8b8e98299a15269ee8"
  },
  {
    "url": "assets/js/9.2852a129.js",
    "revision": "4a8a002ff3bf894e2acdf7de7e3b7863"
  },
  {
    "url": "assets/js/app.01184a12.js",
    "revision": "9e566bb9e551b93eccd2ec54cc3af293"
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
    "revision": "0285d8194f1d87de2c340d1cffc7880f"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "5a1881adb562c8d3f1d6a949b253142a"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "746f34a0085e0031f0de5bdda5f8d36b"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "18b0845d33b5fc65fda570f8e45ef672"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "3da9ca9ae0ebc8a9c11e65eb89b4189d"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "a1ef8f4a6c29f645288c9320c8a3cf24"
  },
  {
    "url": "coffee/index.html",
    "revision": "592d321757d02b80ef4c753aead73cfc"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "ccd4cd27bfdd8df538fa81495c0f317e"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "5bc74c5691b440915287370e4e4c9631"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "769f963eb77c95a14f77b8d4caa531e6"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "ba9887f6c6277fffb23c0059619bc5d4"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "773f76c2a32dadb3e70d840f32a329d5"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "c0ad5b24bf6e13b02ed7eacfe7413419"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "10233886e32e1c78dac556d12aabfe4c"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "e88ce01b34c73609d65e5c4c5a0507cf"
  },
  {
    "url": "coffee/start.html",
    "revision": "39bbaae0f483efa12259b613b4eef0ea"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "c15b0659d6c6b134312b724931fc1de2"
  },
  {
    "url": "discord.html",
    "revision": "0557d79274fc641b943642bf4ae71d8e"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "e234f84824bdc7f07087d0833ad51b1b"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "4d57d735af1a5e235ea64f16821ed104"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "eadd3471d5cf8795c7d6cf4b3f93f92b"
  },
  {
    "url": "docs/index.html",
    "revision": "1871af1e099210a2dc4e8575403df336"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "96a686fe0976d59ad046bdf41bf31fc4"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "7fd3d0b225958baf619f5ac875bf5bcc"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "064dcec05b6a2067053f07f1fbac0acb"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "9b3111fda5e0cf1c64e35b273c6c5c73"
  },
  {
    "url": "invite/index.html",
    "revision": "f4976f40892b7fcd26141ad3a0fee56f"
  },
  {
    "url": "legal.html",
    "revision": "b9041a33727c7a7cac8fdc37a3b2a5c1"
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
    "revision": "49d4fd98ca1d46044d786f892373156d"
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
