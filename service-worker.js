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
    "revision": "4111e5c7ba10a5a6104f53b1654a5e4c"
  },
  {
    "url": "about.html",
    "revision": "cca2ee5dbfb9714f4dfcac10e3bc9236"
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
    "url": "assets/js/15.8aa4d16c.js",
    "revision": "b9d94a155a872ae1352efad25834f0f3"
  },
  {
    "url": "assets/js/16.ee1dbd35.js",
    "revision": "ba269e350e403856c733952e94dbead1"
  },
  {
    "url": "assets/js/17.4d0400d3.js",
    "revision": "7315920d9871197bec3c482b8fb4a7a2"
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
    "url": "assets/js/app.770a043f.js",
    "revision": "0f5e4595601db87ce7694a4108c84a48"
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
    "revision": "23538a2b166f3626192d8aed5935a6e6"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "c7b24526abcfb21162a30c456747c859"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "f04cf0e026b9189cf45388bfe5ff3b81"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "21d659a998d4252ffa4d8ef4b2554e59"
  },
  {
    "url": "docs/index.html",
    "revision": "8c0aced86e28af3a7f5c163f35408050"
  },
  {
    "url": "index.html",
    "revision": "ea80c4c8e3a5e8fa5d622126630ee6d0"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "3c7d9ebae94ee83431319524120a4945"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "d7593bb903ad337ff80b50c569a04fb4"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "d1d0ed1567577897303f0c70f6f89049"
  },
  {
    "url": "invite/index.html",
    "revision": "06bb96d1b8a041cba920c3d112d50057"
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
    "revision": "a49eaf55e0d0806f69a7f8cb89ea39e1"
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
