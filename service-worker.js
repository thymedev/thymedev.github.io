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
    "revision": "ed73fb60f51cad074d154c2d565a4879"
  },
  {
    "url": "about.html",
    "revision": "ffdd8f5ebc7912385cea02c6bd221186"
  },
  {
    "url": "assets/css/0.styles.cedbddf6.css",
    "revision": "82eec0a79973aa37627afd930f1600c8"
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
    "url": "assets/js/12.67af3840.js",
    "revision": "7e4a8485d9aaa9203f5ccc5982a3be8f"
  },
  {
    "url": "assets/js/13.d4ff06b3.js",
    "revision": "4e328ce96fde4b632e8bdb7ef65ea60e"
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
    "url": "assets/js/19.9a30cdcf.js",
    "revision": "3ba4efce372d1fdc6ded0821d536b675"
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
    "url": "assets/js/37.48720d38.js",
    "revision": "4354debd9972e67d6f1f4d5e817268f0"
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
    "url": "assets/js/43.48bc35c1.js",
    "revision": "c17738b6a0bdf3c1d756c167a727dd17"
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
    "url": "assets/js/app.73a97d14.js",
    "revision": "774ccac8b486c57d65028b2aa93092c1"
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
    "revision": "9dc0dfb5cc02d179b7e839b77be301e5"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "7428d3ce7f1dec59ad00b5718b80fbe4"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "80f01e987a2e8afedf1a488253118d29"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "59254a3c6db6cb11d4ad7880c0b57121"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "a7619108cf1453a82738a801471b1ae9"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "3a9e009b00a11401ed557ce06b6e1825"
  },
  {
    "url": "coffee/index.html",
    "revision": "fc3efe832f226d36adad02da8ff536ce"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "1a8f57d00b927b92467ebd5bb5573630"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "3fcd480ff48e11ed89975d675f5b322c"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "3f7fce0be3ec8fd5dd166118650b0249"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "ab5146a49dbc00ca60cf7326fee52b86"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "e94ba18e52f8c81f38833c8d737087e5"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "fdb79e001cad8e419e166ad158eb2311"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "dd2b722a0e35b15dfc975c6b9d79b22e"
  },
  {
    "url": "coffee/start.html",
    "revision": "5f32978dec7ddd7f1302e9228837dd47"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "a204efceac3fa1851ed4ee7759f3b7af"
  },
  {
    "url": "discord.html",
    "revision": "c22e0010d065ce64951d9c7d091ffe18"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "6919484daa779212c12e12d0faaa7cdf"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "3128a26c080202059b5d84bf2264c615"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "afb3248d51505d6b8fa24a70d29907b0"
  },
  {
    "url": "docs/index.html",
    "revision": "9ffa968b31e871cc86b470e8dee24f0d"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "b52be43f03db107cf472fc1c61ab11fc"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "8862ada68073dc9b9847e5fec72565f6"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "3324aff04e057fec5fcbf7961c0fd3bf"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "e29cf69d573762a47cba91616373a6d8"
  },
  {
    "url": "invite/index.html",
    "revision": "dc781fde31d7e9b073ee1f646db2012e"
  },
  {
    "url": "legal.html",
    "revision": "a33e080ee05b54548dd9dd7538103fc1"
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
    "revision": "23d4eebd1273d6d951066dd5a499236d"
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
