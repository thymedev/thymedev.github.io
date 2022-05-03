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
    "revision": "0004d8106ed30b5a660121070b88c459"
  },
  {
    "url": "about.html",
    "revision": "6f5365846fe566e6d2295e9b372e561a"
  },
  {
    "url": "assets/css/0.styles.ed0fd18f.css",
    "revision": "1661e174b9e5da6fbb0eac16dcc8691b"
  },
  {
    "url": "assets/img/emotes.8cb79651.jpg",
    "revision": "8cb79651eb6e7b3f2a3260769ed8c761"
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
    "url": "assets/js/14.f584e864.js",
    "revision": "17fe5c63fc652ee23008cdb18ee8887d"
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
    "url": "assets/js/app.02819f3b.js",
    "revision": "8a582df6afb39ba92604ccce40445cd4"
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
    "revision": "5256a9fb90ebd1c6d72b46bfaadbb128"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "662e89e5d27ffec69104cd70596f5345"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "8d06a8bf1ae5a5387c9f5bcc70fe4f4d"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "a95a8987c1e31b5ebac8884f27a308d5"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "7462cb3746fdb417f21c2f0dcbbfef31"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "cd4574b727ee0382bc8bd6167449ecf2"
  },
  {
    "url": "coffee/index.html",
    "revision": "9fc666bcf587a69fdf06760086384f29"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "47b6f2569143814582d3d1a242318886"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "bcbdf8a76f58b831a67b6e231dd7f744"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "bdaa87ad33fed425b2e3319a7bf30822"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "92658fe3e8693a34cd677ddbe15e81fa"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "454e7102f1404a1c3ef03a89a800497e"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "c10e5b61fbe65236c97eb857ea49179e"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "f3ba5a333807ef3687dcb527d92cd456"
  },
  {
    "url": "coffee/start.html",
    "revision": "e57d4599df814d14feae3592df5b674a"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "5e9f3e0dd3927bd3143d7440d536090b"
  },
  {
    "url": "discord.html",
    "revision": "c44ba00018f4d4f25b44e5ffdd39fa75"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "9542083e737a40f392a0f5f04b3f761e"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "ab43d189092a41780cbfd0132bc2855e"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "1bb6698b7db425ebc42cebdc40e8cc7a"
  },
  {
    "url": "docs/index.html",
    "revision": "e20313732a8ee376fb6819e87a502b96"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "8d8d8595f744b937c68bd526741cc6fd"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "32ff4997eea24ba9da0d538e5df70849"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "bee245bd388a6ff49950481270f32fb7"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "cc2471e399bf9ada3a0c2761bff3f9fd"
  },
  {
    "url": "invite/index.html",
    "revision": "ae00e4d886f49881935b41352aeec458"
  },
  {
    "url": "legal.html",
    "revision": "d5778bf6ba975820c50f2905a6b8109c"
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
    "revision": "8aa278f16d8c5c2b3f9cdac36dab8aa0"
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
