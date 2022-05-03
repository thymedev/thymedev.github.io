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
    "revision": "70afe80e8c9dddd9222bac46e4ec156d"
  },
  {
    "url": "about.html",
    "revision": "7f25b37f1f7781260a4be8af28656f1d"
  },
  {
    "url": "assets/css/0.styles.ed0fd18f.css",
    "revision": "1661e174b9e5da6fbb0eac16dcc8691b"
  },
  {
    "url": "assets/img/emotes.9103fe6b.jpg",
    "revision": "9103fe6b8442d67c16c40d74ede0ecea"
  },
  {
    "url": "assets/img/hellohook.f85bb281.jpg",
    "revision": "f85bb28109e6c35548f18a90dd7407d8"
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
    "url": "assets/js/10.328f840b.js",
    "revision": "14ba04bd2adc174c4157d6fb9f6cfd27"
  },
  {
    "url": "assets/js/11.e7aa8f72.js",
    "revision": "4ec6bda61b23706f4411a912cb4e179c"
  },
  {
    "url": "assets/js/12.d7756c24.js",
    "revision": "be35a799e1c396a49aaea7047d861894"
  },
  {
    "url": "assets/js/13.fa46eed4.js",
    "revision": "2c0baada97fe16f7cda503836584e885"
  },
  {
    "url": "assets/js/14.22ff474b.js",
    "revision": "966e0a02a3a418ccb2909b1ef42bf471"
  },
  {
    "url": "assets/js/15.55aa4623.js",
    "revision": "4b225e20199de46f92dbc44f713a41a0"
  },
  {
    "url": "assets/js/16.f6ef00bd.js",
    "revision": "248810e274ced93fad6b69090da00ded"
  },
  {
    "url": "assets/js/17.45d25e8b.js",
    "revision": "09470954d644fb21c65c888f382a1c91"
  },
  {
    "url": "assets/js/18.14bc2d67.js",
    "revision": "93410eaa41e490ec99dc808b9f8b9e70"
  },
  {
    "url": "assets/js/19.bdeaa5f7.js",
    "revision": "f3bffaea3d065dce7c7fa3708264861c"
  },
  {
    "url": "assets/js/2.8091f0af.js",
    "revision": "74496e6cc0ea4c0acd2be10be88bb17b"
  },
  {
    "url": "assets/js/20.a6ea12b9.js",
    "revision": "49dd960c75baf5e9261e9af56d589fe8"
  },
  {
    "url": "assets/js/21.3dceb504.js",
    "revision": "7ba7490871d887a0cbd34fdbe66e5754"
  },
  {
    "url": "assets/js/22.dfa56fb6.js",
    "revision": "3173ec92c0cfc0a86853142ae49ee711"
  },
  {
    "url": "assets/js/23.2aaf4bb1.js",
    "revision": "2dddf2eed029305a9c09b02af14cd49b"
  },
  {
    "url": "assets/js/24.bf25da4e.js",
    "revision": "dbb13972d9ab1b260fd85685766338bc"
  },
  {
    "url": "assets/js/25.ba8dd120.js",
    "revision": "8896c34ac8490e65eaa5e0e683a3f7c1"
  },
  {
    "url": "assets/js/26.ec5b538c.js",
    "revision": "314a4c9a9a682db74eba6fd65212ff25"
  },
  {
    "url": "assets/js/27.c77ffa78.js",
    "revision": "7cc54dcd3417b6b1bc3f959f7652fb3f"
  },
  {
    "url": "assets/js/28.2e161328.js",
    "revision": "25aa4edc6a2fef45e59ab075789f84ca"
  },
  {
    "url": "assets/js/29.6d7e30c5.js",
    "revision": "aa42b7a89d7ae08872ec6c135f3c8a2f"
  },
  {
    "url": "assets/js/3.5d4c0aea.js",
    "revision": "d37c574b8949cc15966a1ff0861d46b3"
  },
  {
    "url": "assets/js/30.2d8a2d9e.js",
    "revision": "a9a998e27a4dafd8723b9638a7ed8cde"
  },
  {
    "url": "assets/js/31.1af08a27.js",
    "revision": "b24764ee341c42b5e50bc5fd116b5ff1"
  },
  {
    "url": "assets/js/32.5e96a8ba.js",
    "revision": "191a6c4fa7da67874eb51e3a4fbf7aa9"
  },
  {
    "url": "assets/js/33.22efa17d.js",
    "revision": "a681d5ae48539140cb0552b96549edd2"
  },
  {
    "url": "assets/js/34.a3179ef3.js",
    "revision": "5cf29d9352c58a490b4fdddc65161f74"
  },
  {
    "url": "assets/js/35.2abc164f.js",
    "revision": "5697827ad6e3e2c6217f631b55b02dc4"
  },
  {
    "url": "assets/js/36.33c7fac5.js",
    "revision": "cde7bddea28be169b93ec53be19efe0a"
  },
  {
    "url": "assets/js/37.1c64b5c6.js",
    "revision": "84e36e0627159a3fdfcfbba685ef5c83"
  },
  {
    "url": "assets/js/38.99cff339.js",
    "revision": "6c91125883f8e48a575c3193278ea040"
  },
  {
    "url": "assets/js/39.c0e1a109.js",
    "revision": "236edda54d01cef1346c75b203e34e0f"
  },
  {
    "url": "assets/js/4.4873d0c7.js",
    "revision": "0252dc2bb37650847b1ddfccf934e194"
  },
  {
    "url": "assets/js/40.167dd2f7.js",
    "revision": "b4f7950a520c857e2d4c6ab3a9221195"
  },
  {
    "url": "assets/js/41.d3f72f22.js",
    "revision": "fb26f321d8ae9e9bb0b5d5a7334a1d91"
  },
  {
    "url": "assets/js/42.d9c3c3b0.js",
    "revision": "1eeabe9194d03025f752c4d25c150d71"
  },
  {
    "url": "assets/js/43.258fc488.js",
    "revision": "b722d00907548a13c57e53485d8bcf14"
  },
  {
    "url": "assets/js/44.0417bfcd.js",
    "revision": "f8223ed3226e79fd6e1d28531feddf00"
  },
  {
    "url": "assets/js/5.82b31d2e.js",
    "revision": "88412fc7b040de838aaa10bc6e258fda"
  },
  {
    "url": "assets/js/6.01a18fa6.js",
    "revision": "03816bf4f34c115e8ce3b3720ce35332"
  },
  {
    "url": "assets/js/7.464cd050.js",
    "revision": "c85b92d3ee3fa3a040d5d90f98a4053b"
  },
  {
    "url": "assets/js/8.548bfa78.js",
    "revision": "84916359b50efad7a939177058d76151"
  },
  {
    "url": "assets/js/9.fc8338a9.js",
    "revision": "ea7622c531f1d9b615e94dd3dc789837"
  },
  {
    "url": "assets/js/app.1474ea6c.js",
    "revision": "9b1686ccecc14f4520aad013593e6172"
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
    "revision": "3d3fa471f2aa2851083d254be67ab309"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "0a452ffef81c0cd2e6e83d444c5d55fc"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "8c5a623cb7eb24f6d946572bd4b61db5"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "3c1146b340bb534358735879b302712c"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "7537c3573db6b3ea290d8df8b416505d"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "2bafa2eee3b6ab1ace0916012b4544a8"
  },
  {
    "url": "coffee/index.html",
    "revision": "48b966cd669e55080606fb0f0233803a"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "4a4e9dc106fb83ffade0f287c11ebead"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "19261758f4ebbc5ab50d226de88f1723"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "e3226b0641b4c411a228e5413dc138ef"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "70a30c5cb545ff7d1cb7f6a2c7ee1f20"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "5ecfb6f8b5b286954f29696ca8e4a69f"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "de26716948981971f84a9682b8e51c8e"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "0646cd2b2eeffcdb4cc7c4790b5d6d3e"
  },
  {
    "url": "coffee/start.html",
    "revision": "d3fee1f7912befe8db47bec65f019bce"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "e63c8eae7f4010c41abf6598da6b9023"
  },
  {
    "url": "discord.html",
    "revision": "350b328bdd2607b4e5e9faf7b1c8c495"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "b7f6ab525790fdee98f9b35b8ae02064"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "a5839fd83baa8f90e785a17d99b2f5a0"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "9da4049f357dc7c45c8111a4f22c3cb9"
  },
  {
    "url": "docs/index.html",
    "revision": "1c0cf6699f2b80446102cd89bb9833e7"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "d58bb3742077bd28c65eda951337663c"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "aae9e3187945d068643a68778583344d"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "db2a4f6d0e46560501bafcf2b23d9192"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "4865e81aa076df7f9e561e6a8803a6fc"
  },
  {
    "url": "invite/index.html",
    "revision": "2de931b1bb3a03533b4f20b53bd49e2e"
  },
  {
    "url": "legal.html",
    "revision": "11f6399c99b30dde1130a22886c5e6a8"
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
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "privacy/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "status.html",
    "revision": "3aa4a5f00894ff0296fbc7b673a7972c"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "terms/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
  },
  {
    "url": "tos/index.html",
    "revision": "78b91000b47b7bbf310236d06368e3bc"
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
