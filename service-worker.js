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
    "revision": "d9ce41265ca256188023dd801b31dc82"
  },
  {
    "url": "about.html",
    "revision": "0952e512895ea9b9a2516289982b085f"
  },
  {
    "url": "assets/css/0.styles.ffdb4017.css",
    "revision": "19e9ac232c2be39be98e2eb6dddec04b"
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
    "url": "assets/js/10.d57fa438.js",
    "revision": "c171fa5a3a0bc01194344725b900ecf3"
  },
  {
    "url": "assets/js/11.18974cf5.js",
    "revision": "b5607c9699e84b295a8f68f2b4a2dbb7"
  },
  {
    "url": "assets/js/12.cf08c7b4.js",
    "revision": "2c95f8974242670f51d5a73c68e6912c"
  },
  {
    "url": "assets/js/13.8be72e33.js",
    "revision": "e001749d6975a87c715b12bcc1a2e3cc"
  },
  {
    "url": "assets/js/14.d316ca1c.js",
    "revision": "ddbc6db232fc09fd23b467a013afad8f"
  },
  {
    "url": "assets/js/15.1e8bf8d7.js",
    "revision": "b2f5cbc2d228862f6b7320fa6546b0db"
  },
  {
    "url": "assets/js/16.dcb991e2.js",
    "revision": "35e3144ee596ecb02037a321bc10cdd1"
  },
  {
    "url": "assets/js/17.c9829d74.js",
    "revision": "a09acb082badb46902529719010670d0"
  },
  {
    "url": "assets/js/18.eebbdcee.js",
    "revision": "500a1afa22e50f1b57b253f0da150e5f"
  },
  {
    "url": "assets/js/19.13fc85e6.js",
    "revision": "be588959b818d88928783e459d7b83e3"
  },
  {
    "url": "assets/js/2.2e1298c3.js",
    "revision": "aa31eac837c6d33474e7d3fb43f571a9"
  },
  {
    "url": "assets/js/20.eadd58b5.js",
    "revision": "da6cbe4074c5a75396994ae0aed82d07"
  },
  {
    "url": "assets/js/21.328f4ede.js",
    "revision": "c9323059901101294e424c75bc494ccd"
  },
  {
    "url": "assets/js/22.7aefd5d1.js",
    "revision": "fb6a5e252865e9b96bad1fd0e1d172b4"
  },
  {
    "url": "assets/js/23.8d2d0894.js",
    "revision": "1991f943743e82319a5361f72efa91f7"
  },
  {
    "url": "assets/js/24.f5df1aa9.js",
    "revision": "a48d380da59a3b4ef75371bb6d158a4b"
  },
  {
    "url": "assets/js/3.7c2f36e4.js",
    "revision": "5f8cd07bde56925cd2b0ea0bf177f630"
  },
  {
    "url": "assets/js/4.6c0d5ba2.js",
    "revision": "62d6b46094dab26b25fbee8def43317c"
  },
  {
    "url": "assets/js/5.bcbb4366.js",
    "revision": "3494cefc4ff939feb07162691c31641d"
  },
  {
    "url": "assets/js/6.bc2bb021.js",
    "revision": "f1726d8ab0555bc785c7a9c2eda8bacd"
  },
  {
    "url": "assets/js/7.24ff703a.js",
    "revision": "1c8e2217bd08959685597aee2611231a"
  },
  {
    "url": "assets/js/8.ffed42d9.js",
    "revision": "36294ad68c2efcbd8d3d4d7c859d9f04"
  },
  {
    "url": "assets/js/9.507b71c6.js",
    "revision": "f98f67a81861ece0230f3d7f41f2f116"
  },
  {
    "url": "assets/js/app.775ec9f9.js",
    "revision": "d2a386af9c97bc0f52efeebe0a72dc0f"
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
    "url": "discord.html",
    "revision": "2d96b584d9e8b0a847a11ba93e7d56a4"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "252062eab3b674c36a55ec059ceec84c"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "d7fffac866c3cf1b6bb43cc56ee730ff"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "fc2af0e01b45e2b4de5e44661ce530bb"
  },
  {
    "url": "docs/index.html",
    "revision": "671479fcf3d0ccc817f56f44002acce0"
  },
  {
    "url": "index.html",
    "revision": "0c6e8251d51f64bfa9d7195ad43e2f95"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "09a1adbb11f2c2c06f561ee7f487afc3"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "5c0a59456b69441d1fe9a4784ad708f9"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "ce80331f333b2bc47b8e856563b588d1"
  },
  {
    "url": "invite/index.html",
    "revision": "164ec9ee3c196d63bb6e5f36e147fa1a"
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
    "url": "status.html",
    "revision": "f2594f10e1ae886ad848696c84582cf8"
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
