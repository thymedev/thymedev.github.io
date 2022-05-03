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
    "revision": "8478776019eac6dcbd0c4ee163606f4d"
  },
  {
    "url": "about.html",
    "revision": "537d6f483b26ed33762af126df15014f"
  },
  {
    "url": "assets/css/0.styles.6eea5a29.css",
    "revision": "ecbcc583e9b59c3083b98cd7aee96fd9"
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
    "url": "assets/js/16.d344d7a7.js",
    "revision": "72a501752b2c2d58407b4a562bebdfbe"
  },
  {
    "url": "assets/js/17.befb8f4f.js",
    "revision": "5fa268960d907ef614f7f37249950630"
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
    "url": "assets/js/7.7656d8db.js",
    "revision": "9a13811807a8b27fe8c5f5d693fc99f0"
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
    "url": "assets/js/app.44ee6ae2.js",
    "revision": "0d2d54a4b0b463409a3cd7323cdca6bb"
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
    "revision": "275319826900b716143464aeff07d659"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "961184d21727001dbe501a0b53c6da6e"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "2551fe4b20ea19e1572300fa1b489c91"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "f1f1bc39e3caf72dcc566def7c23c7f9"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "7dbbef1d680d46009c94d932fe31af2b"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "4d3ebbefacdf8accc4159105f6f8466e"
  },
  {
    "url": "coffee/index.html",
    "revision": "632e149b0fbd36e1dc7066158340a26e"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "f83cb0491c464ac7c621f2a155105ab0"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "87b146b7ceedc2b253d837c40337438b"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "8e8edba7ae2404827eee372f3bf8e96f"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "cb50c4be3a060d0921360ba4dd2d1aa4"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "adc4bc07fb8e216e1387f3b8c0b7024c"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "427b5cfc82abd41df6cdff6618be9d52"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "9f129e50484dcaabe27d6f615ed52a83"
  },
  {
    "url": "coffee/start.html",
    "revision": "e0f666fe7b30a118da5bcebeea4e6fda"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "a1f6aae82af39cf504e91954ba88620a"
  },
  {
    "url": "discord.html",
    "revision": "1406a9fc85f5d5d6689c4ac89bc6fc7d"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "19bb3c51a961631c7e3594d235d83a2c"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "472e3151a06c22555dec8b0c438a222b"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "ce74656e7198f2c6b25a4e067e458849"
  },
  {
    "url": "docs/index.html",
    "revision": "1e7de20043e79dd8180f40afc9d692da"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "353587b8935713296fee67d70e7f8d00"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "23ff05acf2c1c83f03a14e0e966a91ed"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "68ffa501531b38736ee94b175e0223a9"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "7eb1d0841fa7e3c9bb75a9be2b2425b2"
  },
  {
    "url": "invite/index.html",
    "revision": "7af163ebd76114b3a09779876283eac6"
  },
  {
    "url": "legal.html",
    "revision": "4891c28ed2bd9a4cf2f04e1fdf0f8684"
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
    "revision": "2068121a97b9bab0f2bcf99bd92b8ab0"
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
