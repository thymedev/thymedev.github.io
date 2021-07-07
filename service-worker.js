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
    "revision": "29039e5a34b6ba810443d52214cfe63c"
  },
  {
    "url": "about.html",
    "revision": "786bc7fc517921b3a189079e2a9441d0"
  },
  {
    "url": "assets/css/0.styles.8af3fc92.css",
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
    "url": "assets/js/10.efaea7f8.js",
    "revision": "21c1c0be67c06a6eff010e6621476f33"
  },
  {
    "url": "assets/js/11.91f876b1.js",
    "revision": "bd89609eb62605c55f33cbba8bd433e2"
  },
  {
    "url": "assets/js/12.08b21dda.js",
    "revision": "f7fd15c2106c1897be18558161dd16e1"
  },
  {
    "url": "assets/js/13.81e12b8d.js",
    "revision": "1ca744fadd036c2cef7f106417b51624"
  },
  {
    "url": "assets/js/14.73eb5ae5.js",
    "revision": "0e5d060b6e4fd7fe36f8fcf3f61a853b"
  },
  {
    "url": "assets/js/15.26500518.js",
    "revision": "a3862a41375a2de95f1b220dc69f6969"
  },
  {
    "url": "assets/js/16.cedece69.js",
    "revision": "e2277821f9bb8a5d2fd3adec2772ed9b"
  },
  {
    "url": "assets/js/17.71bb19a2.js",
    "revision": "69dd2eb5dff0b23b96ac002a660c3fd1"
  },
  {
    "url": "assets/js/18.1bb542c7.js",
    "revision": "cc64c615599c661aa0fade8a07c1e483"
  },
  {
    "url": "assets/js/19.35e29ce9.js",
    "revision": "b67dac0df12d394dc4cb36e9a6cc24f5"
  },
  {
    "url": "assets/js/2.346ed48d.js",
    "revision": "c6a12acec607eab8b3aa22fb712e149a"
  },
  {
    "url": "assets/js/20.b7251e01.js",
    "revision": "840d0f26e37aff3839bb62fc48eb82a6"
  },
  {
    "url": "assets/js/21.8fa2dbb4.js",
    "revision": "4e8f903563bcce117e12f5349d30f90e"
  },
  {
    "url": "assets/js/22.deff04ba.js",
    "revision": "ef1d41463756afe454a51a0aab9b1b40"
  },
  {
    "url": "assets/js/3.1103d143.js",
    "revision": "9f7bc0c2e5e29aa8f823bf6e388da0db"
  },
  {
    "url": "assets/js/4.ad34095b.js",
    "revision": "d00fbb61a9aa53ea9999fd145cd26e3a"
  },
  {
    "url": "assets/js/5.7091fb25.js",
    "revision": "90d2f1e5589a9526b144b693a38add3a"
  },
  {
    "url": "assets/js/6.1e54f7f3.js",
    "revision": "e5b90035490f4084bc86a1575e99bfea"
  },
  {
    "url": "assets/js/7.f211a18b.js",
    "revision": "c71412215b9defa59fce02b3fecf7562"
  },
  {
    "url": "assets/js/8.df105b11.js",
    "revision": "ca920444ef4aae2094a482cdf2b9cf0c"
  },
  {
    "url": "assets/js/9.94346a39.js",
    "revision": "a8c0620e477d0e7c1b0c0a6fcaecb8f8"
  },
  {
    "url": "assets/js/app.494ad040.js",
    "revision": "5cf76c114e3e79aecd434470681cfd2e"
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
    "revision": "c89873b58cee591abd506c462a196118"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "747be2a3590921ce43b34a4e440c4c10"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "2a9c9e7ef82c89dc49182b2f4604017f"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "63525c49dadba09597ecc1fdf1100254"
  },
  {
    "url": "docs/index.html",
    "revision": "32e64e635d3df81fc5fa5b22f8bc2f2d"
  },
  {
    "url": "index.html",
    "revision": "86354e3d6a216bd05836ced3b90bc656"
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
    "revision": "5e359be4567acd43aad8def85393e08a"
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
