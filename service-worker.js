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
    "revision": "dbf853b04a39f8b14cb7271d6f9cfd85"
  },
  {
    "url": "about.html",
    "revision": "5dd46e870fc2f3da67be65db24805838"
  },
  {
    "url": "assets/css/0.styles.3ae1d943.css",
    "revision": "e383cb3f19a28a5be28fb589d8a80039"
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
    "url": "assets/js/12.7b512609.js",
    "revision": "23832fa8e7c985a318fb6769ce196b79"
  },
  {
    "url": "assets/js/13.fa46eed4.js",
    "revision": "2c0baada97fe16f7cda503836584e885"
  },
  {
    "url": "assets/js/14.f9cb62b1.js",
    "revision": "e5e28aff8e650668e394aae8bbe42a3d"
  },
  {
    "url": "assets/js/15.604011f6.js",
    "revision": "d7bb062bf3f1717a7151dea86aaf59ca"
  },
  {
    "url": "assets/js/16.aa0ee264.js",
    "revision": "19f6869e8c95d3d6bf7bd36be2b5ced3"
  },
  {
    "url": "assets/js/17.e9764a30.js",
    "revision": "9c28dfef38b0bf015cdc166b44ce858a"
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
    "url": "assets/js/32.234d5b74.js",
    "revision": "478ed665f27f9e6ac2b1d33d40509bb5"
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
    "url": "assets/js/42.c2f52bd1.js",
    "revision": "f74f9894a444821db73929f9e29683b3"
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
    "url": "assets/js/7.3e31b0d0.js",
    "revision": "8e90415d09b0785b9daf795237f6f3ba"
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
    "url": "assets/js/app.790560df.js",
    "revision": "d3bd9ecc2112221ff4c3319d5821969e"
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
    "revision": "0afb4acbc9148c24be21a4012a1b7370"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "4f9b8285ab0495f27a8106ae3b4859c0"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "955f54d2523138dae81077ca8ab55f59"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "dee872203d8b9d80b312f808c1e6b149"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "587183640cc8150906a4ed2017f1ed8f"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "077676c57b6cd586a445379bbb0bf3b0"
  },
  {
    "url": "coffee/index.html",
    "revision": "2c54cb3d2ffbf355728a87b31dabc565"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "4ee8825ff66df5d85ba6257f68a3d86a"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "3042789e9264bbcb6e035193833eea1d"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "3984db5efd7597e409c1077275d24733"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "e248d8d3c9ae50cf73e61746536a6ad3"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "2fca60c1b8b59eafbfd80d74365a1ff8"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "da81548c4dafcd1e1d025857a7126f68"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "de0a5d0647018c705c59bd533d016ae3"
  },
  {
    "url": "coffee/start.html",
    "revision": "7b5aa3736caa977574af8115d3291614"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "b0f42a45245c6f65283d9cf483722803"
  },
  {
    "url": "discord.html",
    "revision": "60c579acfd7c9eee16cc58804c28c69b"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "187d68739cf976de0d33d2ac697a5603"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "a9f2d17a5a3286a1aa4bc75f6f9d7107"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "f4a163eeef9114169c730800be8c0ca9"
  },
  {
    "url": "docs/index.html",
    "revision": "7b214124ce32f69832201c8585feb001"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "b3f171551eda161e764c9aac8efa1141"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "04b622d005715df6c2659fb14ed78c02"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "00da02317844758380ae64f1c1af82f8"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "3266e817d8db0a95045ec200c9fb8b3d"
  },
  {
    "url": "invite/index.html",
    "revision": "a688a609d5aa9a82a8b5a54ea17c8dce"
  },
  {
    "url": "legal.html",
    "revision": "df5c61d40af93a16bbb8cdad956239b5"
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
    "revision": "c49a8099cabd180fbaa5d9400db93fa8"
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
