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
    "revision": "03e301c1c417e426ca5a758da5cdb6ea"
  },
  {
    "url": "about.html",
    "revision": "09de32be87419c57e07f4e9c65ac29ba"
  },
  {
    "url": "assets/css/0.styles.fff51e05.css",
    "revision": "a7ebd412eb2f6c7f2183a0438de6ccd1"
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
    "url": "assets/js/10.d6f7e57a.js",
    "revision": "2202559a261a14b1ec23347bd33a4399"
  },
  {
    "url": "assets/js/11.792d9b3e.js",
    "revision": "1baf301ac02aa286ddd15dacd7a0567e"
  },
  {
    "url": "assets/js/12.b7097af2.js",
    "revision": "acb6d637ec128213c09e2205d2a278ad"
  },
  {
    "url": "assets/js/13.997e1c9e.js",
    "revision": "722f27b3096646fe44fa2509dc918493"
  },
  {
    "url": "assets/js/14.e855e000.js",
    "revision": "b239bf78dfe0bc0fe2f5f22eef47f2c5"
  },
  {
    "url": "assets/js/15.c70027cd.js",
    "revision": "0281663bce210d120521935de6c71b49"
  },
  {
    "url": "assets/js/16.5593bcd7.js",
    "revision": "e95ec24130698738dda494ede34fb8bd"
  },
  {
    "url": "assets/js/17.71bb19a2.js",
    "revision": "69dd2eb5dff0b23b96ac002a660c3fd1"
  },
  {
    "url": "assets/js/18.3880b6e1.js",
    "revision": "5820993ede976a72ad9610c86dfc337d"
  },
  {
    "url": "assets/js/19.3b084caa.js",
    "revision": "3fcd833ac3cb103bcd2f1334d1d1211b"
  },
  {
    "url": "assets/js/2.3eadcced.js",
    "revision": "0710da329854ed4afabc33997d0aaa65"
  },
  {
    "url": "assets/js/20.a4ce4e17.js",
    "revision": "1628840caf29f0e89a999d6050800c23"
  },
  {
    "url": "assets/js/21.f3d84451.js",
    "revision": "b9e3459f18d92e8e86a78ff0b5fbde38"
  },
  {
    "url": "assets/js/22.6bed2a06.js",
    "revision": "0513b07a9c272c2e0755c029221134c4"
  },
  {
    "url": "assets/js/3.4e95d98a.js",
    "revision": "4bca23a8a1bdbd3e2f073c5a15098e17"
  },
  {
    "url": "assets/js/4.0eabe606.js",
    "revision": "6adcc112dc1f722f73246c9193c09da9"
  },
  {
    "url": "assets/js/5.e4c5fff4.js",
    "revision": "5822ec0e07d69d254dc8b23a36df1421"
  },
  {
    "url": "assets/js/6.6d9c6aed.js",
    "revision": "4711ba0b590516d348fbb980542a2bd7"
  },
  {
    "url": "assets/js/7.ba26b437.js",
    "revision": "d34cb54851ffdeb64c33678591904ba8"
  },
  {
    "url": "assets/js/8.0a4e7db5.js",
    "revision": "67c78219bba71bebd5d395f6e0e452d7"
  },
  {
    "url": "assets/js/9.91613985.js",
    "revision": "35a86d1a6008a42f9d66963981263371"
  },
  {
    "url": "assets/js/app.0da77653.js",
    "revision": "0acfc872846f2c99aa61be33e2824f87"
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
    "revision": "2417274c1e0445abd7e36b6994c737f7"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "979c2d7a23b321c92e62d71625caef0f"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "a2d7b392077e4d8ea617efb491acd05e"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "cc63249866d4854188faff8af0f95dfc"
  },
  {
    "url": "docs/index.html",
    "revision": "c89e5bf1fdf24123184f35a699fd7dd8"
  },
  {
    "url": "index.html",
    "revision": "88bb0a09cb2fcd8c3d7c05df8b7d94ee"
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
    "url": "media/ezgif-2-80ca74867615[1].gif",
    "revision": "0a011f26fd5583dcc84b762bede0f477"
  },
  {
    "url": "status.html",
    "revision": "1e911804e3d8782429fb3ce8de3497fd"
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
