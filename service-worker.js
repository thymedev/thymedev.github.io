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
    "revision": "408c541fb548541cb3edd4a64f7b6f64"
  },
  {
    "url": "about.html",
    "revision": "7182badcba12331f662fd28ae3b30d6b"
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
    "url": "assets/js/10.642e110e.js",
    "revision": "f6efc3b88caa30520d98b6387611cf15"
  },
  {
    "url": "assets/js/11.3d1f8add.js",
    "revision": "f9460902bb33d21ba1814f3a4338ee02"
  },
  {
    "url": "assets/js/12.ddf792cc.js",
    "revision": "f403512f57c311c8f4d5dff5a0ea91ec"
  },
  {
    "url": "assets/js/13.34a9fd59.js",
    "revision": "fca5a7a37fcecdc9a43747184700d58c"
  },
  {
    "url": "assets/js/14.182f9fd8.js",
    "revision": "1aac6c43233b53b8a659fdaa04a88079"
  },
  {
    "url": "assets/js/15.090851f6.js",
    "revision": "e65ea58185b8af0f794f9f304b59b845"
  },
  {
    "url": "assets/js/16.4f4ec96b.js",
    "revision": "4c8bf125a68ac25724b63b450df8afc0"
  },
  {
    "url": "assets/js/17.6e30a746.js",
    "revision": "798e2b11db5ce3d5112b5836f1b6aa49"
  },
  {
    "url": "assets/js/18.23105257.js",
    "revision": "7424009f41b0c7a454f73143e370a828"
  },
  {
    "url": "assets/js/19.1f280099.js",
    "revision": "a6793e7645e07881f3d290fabda34ff1"
  },
  {
    "url": "assets/js/2.3eadcced.js",
    "revision": "0710da329854ed4afabc33997d0aaa65"
  },
  {
    "url": "assets/js/3.4e95d98a.js",
    "revision": "4bca23a8a1bdbd3e2f073c5a15098e17"
  },
  {
    "url": "assets/js/4.b6726668.js",
    "revision": "a754fcb3c04ab6e39ec64f34eee6ea8a"
  },
  {
    "url": "assets/js/5.e4c5fff4.js",
    "revision": "5822ec0e07d69d254dc8b23a36df1421"
  },
  {
    "url": "assets/js/6.0dccaa8a.js",
    "revision": "f70395c1a3f2da2a9fdc32117fed555a"
  },
  {
    "url": "assets/js/7.d52dd469.js",
    "revision": "cd02513a1facd0131372d291c76e337f"
  },
  {
    "url": "assets/js/8.68569fcf.js",
    "revision": "43abbcf6f9a9e2500e881bf677d3dd20"
  },
  {
    "url": "assets/js/9.2875d6f3.js",
    "revision": "f57b8e38bb0f2665b03ef671f8646dac"
  },
  {
    "url": "assets/js/app.4e14f9d8.js",
    "revision": "b366b64c6ff326c6c8fc7d83ee9c265b"
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
    "revision": "92fbea1fa63e7b19eb668d4b5d287c6f"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "b496676e6fdec6a4a9137279475c16c8"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "882f5f78e686f8b05602e1e03e3c5ab0"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "cd8da67c0bab270f42097d9169424ced"
  },
  {
    "url": "docs/index.html",
    "revision": "34afb0eed062a2dfe4f70d37f8029607"
  },
  {
    "url": "index.html",
    "revision": "174fc2758498195acd4f2a5a9d705bdf"
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
    "revision": "d00367569456daae87813f103c8481a6"
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
