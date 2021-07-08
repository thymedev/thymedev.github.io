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
    "revision": "f10f0ec814e47820a3cc1381165adfe4"
  },
  {
    "url": "about.html",
    "revision": "879ecb8c96f6496232f6784fcc111854"
  },
  {
    "url": "assets/css/0.styles.29548261.css",
    "revision": "ac17d1e1232dc66b754570f351400e96"
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
    "url": "assets/js/10.b0535e6a.js",
    "revision": "c171fa5a3a0bc01194344725b900ecf3"
  },
  {
    "url": "assets/js/11.321f62b9.js",
    "revision": "b5607c9699e84b295a8f68f2b4a2dbb7"
  },
  {
    "url": "assets/js/12.fa325dda.js",
    "revision": "2c95f8974242670f51d5a73c68e6912c"
  },
  {
    "url": "assets/js/13.308ebbc9.js",
    "revision": "e001749d6975a87c715b12bcc1a2e3cc"
  },
  {
    "url": "assets/js/14.61e1bf3b.js",
    "revision": "ddbc6db232fc09fd23b467a013afad8f"
  },
  {
    "url": "assets/js/15.6109fb38.js",
    "revision": "b2f5cbc2d228862f6b7320fa6546b0db"
  },
  {
    "url": "assets/js/16.729d183c.js",
    "revision": "727ea66a6bbfc15310925f81194f1590"
  },
  {
    "url": "assets/js/17.e719d53d.js",
    "revision": "a09acb082badb46902529719010670d0"
  },
  {
    "url": "assets/js/18.192da0e6.js",
    "revision": "500a1afa22e50f1b57b253f0da150e5f"
  },
  {
    "url": "assets/js/19.4481e795.js",
    "revision": "844b476327e101ee5a7ece7ab2850cc9"
  },
  {
    "url": "assets/js/2.25b12542.js",
    "revision": "aa31eac837c6d33474e7d3fb43f571a9"
  },
  {
    "url": "assets/js/20.8e976704.js",
    "revision": "da6cbe4074c5a75396994ae0aed82d07"
  },
  {
    "url": "assets/js/21.95ff3541.js",
    "revision": "c9323059901101294e424c75bc494ccd"
  },
  {
    "url": "assets/js/22.81f9b3c4.js",
    "revision": "fb6a5e252865e9b96bad1fd0e1d172b4"
  },
  {
    "url": "assets/js/23.d03876e3.js",
    "revision": "1991f943743e82319a5361f72efa91f7"
  },
  {
    "url": "assets/js/24.f5df1aa9.js",
    "revision": "a48d380da59a3b4ef75371bb6d158a4b"
  },
  {
    "url": "assets/js/3.1c5bf0b5.js",
    "revision": "5f8cd07bde56925cd2b0ea0bf177f630"
  },
  {
    "url": "assets/js/4.20adf9f8.js",
    "revision": "62d6b46094dab26b25fbee8def43317c"
  },
  {
    "url": "assets/js/5.534a945e.js",
    "revision": "74b2681d27b84cecd230a537efa18c24"
  },
  {
    "url": "assets/js/6.ae1dc9c0.js",
    "revision": "f1726d8ab0555bc785c7a9c2eda8bacd"
  },
  {
    "url": "assets/js/7.e9bd8fcb.js",
    "revision": "1c8e2217bd08959685597aee2611231a"
  },
  {
    "url": "assets/js/8.ffed42d9.js",
    "revision": "36294ad68c2efcbd8d3d4d7c859d9f04"
  },
  {
    "url": "assets/js/9.3eb4b60c.js",
    "revision": "f98f67a81861ece0230f3d7f41f2f116"
  },
  {
    "url": "assets/js/app.63bda91d.js",
    "revision": "8e69c34130fbed68eae1ebfddea72dbf"
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
    "revision": "cb289e3d2405b4064405c12cabb7344b"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "6fcb8bb85872f9d595a8dfaa910a723e"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "1604462371fd27528ad4b06187d2324b"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "0abff0fe18b3137426330741dda247e5"
  },
  {
    "url": "docs/index.html",
    "revision": "f64ca43b4891cf7b2bc0933a5716d2af"
  },
  {
    "url": "index.html",
    "revision": "1850b3730116302cfcf1912bd7d46cd5"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "0872955e94690114224f8b891d3a62bd"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "1fd0c3385cd08a855d19769aa75c6a7f"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "d200474a0bcbfbae1093f900a1444db6"
  },
  {
    "url": "invite/index.html",
    "revision": "f7e2ca7a3d8107891a87285100320d3a"
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
    "revision": "cffcc205b9edee0d0469004a161c9cee"
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
