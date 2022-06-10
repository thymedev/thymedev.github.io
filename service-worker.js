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
    "revision": "e316e531673429eb34343cacdf050cbb"
  },
  {
    "url": "about.html",
    "revision": "8d3337ed2e86e5307acdffc01dcfe561"
  },
  {
    "url": "assets/css/0.styles.47b76013.css",
    "revision": "fa95504272e41fb7372076d2d249377a"
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
    "url": "assets/js/10.4fd45f75.js",
    "revision": "e18410a5be733e595ee3841d358aa00d"
  },
  {
    "url": "assets/js/11.5ef1ee5c.js",
    "revision": "296c3fb956c3e54d400e9edae7b3273b"
  },
  {
    "url": "assets/js/12.2106705b.js",
    "revision": "17c3fc643518511e834d053b55519873"
  },
  {
    "url": "assets/js/13.aa782efc.js",
    "revision": "de359e60defb42aa38c9c9e6effc7804"
  },
  {
    "url": "assets/js/14.70b16196.js",
    "revision": "f63450967fba74fca2b380ef1cb3ec05"
  },
  {
    "url": "assets/js/15.50a92c0b.js",
    "revision": "882c6f6fa123aee3292c251dd6d93519"
  },
  {
    "url": "assets/js/16.66fd9313.js",
    "revision": "5e08ce8b516b78280a1bd9f9ff089b8a"
  },
  {
    "url": "assets/js/17.a4f8888d.js",
    "revision": "38a5dd798f805e9edd46c96a4cde6ce2"
  },
  {
    "url": "assets/js/18.d79a14ff.js",
    "revision": "02fd36cde2021cf0f6c78cc1ef1b9731"
  },
  {
    "url": "assets/js/19.22954d94.js",
    "revision": "77073c85bb69dd21aeab223c40f61305"
  },
  {
    "url": "assets/js/2.5354ee36.js",
    "revision": "af97b72f09f177a2350eded7aa5b98ce"
  },
  {
    "url": "assets/js/20.d3d6f28b.js",
    "revision": "608624ef321ee167edcabfc86e6d0110"
  },
  {
    "url": "assets/js/21.e3e127b7.js",
    "revision": "7355d72d894bbcaafc163733f1280f69"
  },
  {
    "url": "assets/js/22.9d2acb3a.js",
    "revision": "f53126472367db0e57d51f90c824dd41"
  },
  {
    "url": "assets/js/23.814459ad.js",
    "revision": "f04c775500966fbeb714ce3d414e13dc"
  },
  {
    "url": "assets/js/24.889463ac.js",
    "revision": "3cb53d8ccf8ec94bca211b0a61a2ad12"
  },
  {
    "url": "assets/js/25.5d42fd33.js",
    "revision": "c01951c56bd06902e2cbd07b0e32c4a3"
  },
  {
    "url": "assets/js/26.6b74a700.js",
    "revision": "7305d513526172939d8f95312d2a0c86"
  },
  {
    "url": "assets/js/27.9e68e7e5.js",
    "revision": "d8e42a6141e52547a4ea59c15f7aeeff"
  },
  {
    "url": "assets/js/28.ba4e7868.js",
    "revision": "741ea77e8247a44d9330e546e0f17b58"
  },
  {
    "url": "assets/js/29.ef462360.js",
    "revision": "976be8f11d7695c2dec3065c5da82690"
  },
  {
    "url": "assets/js/3.bcf4c63b.js",
    "revision": "e2fd0e9cbb7982412a507a5492b3c942"
  },
  {
    "url": "assets/js/30.56eb4529.js",
    "revision": "c320b61688d064fcb9355e43d3839780"
  },
  {
    "url": "assets/js/31.1a79fec1.js",
    "revision": "89bdff152fca4cf20763dfa634518088"
  },
  {
    "url": "assets/js/32.20b69074.js",
    "revision": "c37bb62312d0bf685064dafddabe7603"
  },
  {
    "url": "assets/js/33.01676b8a.js",
    "revision": "757bd24828ab5aec0f83802395814719"
  },
  {
    "url": "assets/js/34.b9c753dd.js",
    "revision": "ac790d9b083861223d935f9016eb9f50"
  },
  {
    "url": "assets/js/35.5efcd136.js",
    "revision": "3c12fed23ee727eff1538365728fcbf7"
  },
  {
    "url": "assets/js/36.5e76b21f.js",
    "revision": "efebe4e88741b5f34324309c4b8045d3"
  },
  {
    "url": "assets/js/37.e3096e0a.js",
    "revision": "daac071716aecfdc8b9a59d3fd922436"
  },
  {
    "url": "assets/js/38.e0efc08a.js",
    "revision": "f5bf4e6b27a7722d5d8c9b9d33caf31a"
  },
  {
    "url": "assets/js/39.95aa1fe6.js",
    "revision": "189e9441e783de40eb17de27ab8a9503"
  },
  {
    "url": "assets/js/4.47c10d4d.js",
    "revision": "b35f543e7141e9bbf89d6e8dd50d0561"
  },
  {
    "url": "assets/js/40.a8a0024e.js",
    "revision": "19712619ab34167a8876e1b5e6c4598e"
  },
  {
    "url": "assets/js/41.506f9690.js",
    "revision": "c30b113fbcaf863c0fb29a4f36233b87"
  },
  {
    "url": "assets/js/42.efd78c60.js",
    "revision": "fb641c5a380ecd3dbbbd6828ea8d6c9a"
  },
  {
    "url": "assets/js/43.f9c0156e.js",
    "revision": "5d4b10f243df56dbeab7e3bc11aa7f76"
  },
  {
    "url": "assets/js/44.35a36a87.js",
    "revision": "4c1c5e7a1043e3440725e7af049a42a8"
  },
  {
    "url": "assets/js/45.4acf9f45.js",
    "revision": "65b89871edd4af5fe7f853c90cbd4380"
  },
  {
    "url": "assets/js/5.3e8c2743.js",
    "revision": "0f430dc99655f5aa34aeb48dc92c24a1"
  },
  {
    "url": "assets/js/6.06aa7199.js",
    "revision": "55801992800ab63d995dea4c2895d717"
  },
  {
    "url": "assets/js/7.dc16b2b4.js",
    "revision": "36d396a0b5d6c1a32300bceeaa5bd7f9"
  },
  {
    "url": "assets/js/8.efe98aab.js",
    "revision": "8fd701b39d7ded66ca4e9510036852ef"
  },
  {
    "url": "assets/js/9.3d7fc51e.js",
    "revision": "f984387c16591e84ee575f440cfe4e2a"
  },
  {
    "url": "assets/js/app.fc185813.js",
    "revision": "fa09572b750809c33875be7a9c24fecf"
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
    "revision": "0cf773fb930ebe994c2f80cc7e98890a"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "7c0a5933d3cc2fc1a988b71ddbc0a2a1"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "085e05cc83d74e1c81c2615bf1762681"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "deb6b5c8a27764367f9945c09fd3d720"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "0c4e06622598821db39dc1b17f15af9a"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "92999e5aa43a8294f869e749b8f24ea7"
  },
  {
    "url": "coffee/index.html",
    "revision": "a904ae450c67686877ac4bcec16ea537"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "6bc316981419f9d80e6159db5ee3da41"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "ae92efa9d5c221d255e648316add539e"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "43395cf22095a1283f1fa711b848a022"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "274256b9ba33d4e836286fec4819c65b"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "86345a7014564e948d791ffcbb117068"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "2b3e3f72b01930d9572763f4f85a501c"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "85b6677b20091404015b773b02f71645"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "12027f9c9ea638a81d7576ff7ffcaafd"
  },
  {
    "url": "coffee/start.html",
    "revision": "4ba5b58b67adee88491b9b9c0047edbd"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "bdee16eb896db32ff66e0cfef19741b8"
  },
  {
    "url": "discord.html",
    "revision": "4bb888d96f6b8eb6526b14dd5032a11b"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "6fd698df66f9a7ea6a1bc69d472f320f"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "74ad44eb84a01fa9c4ba15aec3842a69"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "dba84ef755e48fc09f05d190360f15e3"
  },
  {
    "url": "docs/index.html",
    "revision": "f7400815715de2d85ad07ae39f314f92"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "f19a311ae15e561c3184721d669118b7"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "8a16109ab5f1793ee81744e8f3d08c54"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "177b8182e183d316610da2588a90eeb5"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "9145d1fd356a791d7c5daf4cccc152b9"
  },
  {
    "url": "invite/index.html",
    "revision": "5fa029bac7db7dbbcbbe29d72efc577a"
  },
  {
    "url": "legal.html",
    "revision": "9d78b9c9d7abd0000eb62b74c76c9e4c"
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
    "revision": "49797a49de33e15249fcadde077fa634"
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
