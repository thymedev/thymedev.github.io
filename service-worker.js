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
    "revision": "657026d588f81597563663713e318f07"
  },
  {
    "url": "about.html",
    "revision": "36cf31e4e08801291cbad082be3212ab"
  },
  {
    "url": "assets/css/0.styles.be764155.css",
    "revision": "ccf11bf17fefcc5f250e1e2f14a207fc"
  },
  {
    "url": "assets/img/carbon-user-avatar-as-webhook.9f3f28de.png",
    "revision": "9f3f28decd792dcfc2dd0e561dce6adb"
  },
  {
    "url": "assets/img/emotes.17e4d8c3.jpg",
    "revision": "17e4d8c3523c7037db16cbc89592c5f2"
  },
  {
    "url": "assets/img/gcp-ssh.ddd1fe50.png",
    "revision": "ddd1fe500e4528b4dfa6e3bab2c205e9"
  },
  {
    "url": "assets/img/google_sheets_template.5cd4750c.png",
    "revision": "5cd4750cb481095daa091243959fe50b"
  },
  {
    "url": "assets/img/hellohook.f85bb281.jpg",
    "revision": "f85bb28109e6c35548f18a90dd7407d8"
  },
  {
    "url": "assets/img/kyarutail.988e3f18.jpg",
    "revision": "988e3f182b2bcbd31bdcd4baae4d25fb"
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
    "url": "assets/img/what-is-thyme.4cefd8bf.png",
    "revision": "4cefd8bf62d78952cad58b64198366d9"
  },
  {
    "url": "assets/js/10.2aa7b63d.js",
    "revision": "e66a2794076a75c8a95c920addfbe173"
  },
  {
    "url": "assets/js/11.172d4036.js",
    "revision": "a7ba6f5a7e86ae4f38eb4cc16b868822"
  },
  {
    "url": "assets/js/12.db3067b7.js",
    "revision": "f65d684b50f7188af981e36f896d6991"
  },
  {
    "url": "assets/js/13.c3bdd3c7.js",
    "revision": "20b762c2e9893829e3ef51011938389b"
  },
  {
    "url": "assets/js/14.3caa0fb2.js",
    "revision": "9a1ee36926ce178643d2b7bac7d56c87"
  },
  {
    "url": "assets/js/15.e9516d03.js",
    "revision": "8970ac58ac233aad724e78e996fffbe3"
  },
  {
    "url": "assets/js/16.587e2f72.js",
    "revision": "eda9f42e3ba5153c9c923e6885716bd2"
  },
  {
    "url": "assets/js/17.fb073cf5.js",
    "revision": "8ab6b2ab62a93654d9ab3d8f6fa70504"
  },
  {
    "url": "assets/js/18.0dad9ee1.js",
    "revision": "c71ead9fb01f3b5d4b10dc795a66a1ce"
  },
  {
    "url": "assets/js/19.8405881c.js",
    "revision": "1ba52df33f1b7b22aae20042d064ca8b"
  },
  {
    "url": "assets/js/2.c48c2f09.js",
    "revision": "c47c9903a0281e4301841567fa29ed5b"
  },
  {
    "url": "assets/js/20.9c6c6965.js",
    "revision": "d8b74145bab4fe683af026b8ec347d73"
  },
  {
    "url": "assets/js/21.a8c16467.js",
    "revision": "36ec6b08a74f65a569f59f7779bb08ce"
  },
  {
    "url": "assets/js/22.f5444a58.js",
    "revision": "ef3130c664e2c337116a9bcc63729ae4"
  },
  {
    "url": "assets/js/23.ef54dd29.js",
    "revision": "ecdd7035b3a19e3ad380ec5a3e571ab5"
  },
  {
    "url": "assets/js/24.a313c984.js",
    "revision": "f61210e1ea3690642a3d1cce32c5ebc9"
  },
  {
    "url": "assets/js/25.bcb0f3e9.js",
    "revision": "0c71b2d5e1478f7db9c2ecdca66c00e9"
  },
  {
    "url": "assets/js/26.27f6ce6a.js",
    "revision": "110f87777aa4d39b158bebcaebfef87f"
  },
  {
    "url": "assets/js/27.fca09432.js",
    "revision": "b29c161db715c2728ef68fe2bdcef368"
  },
  {
    "url": "assets/js/28.6e1728e7.js",
    "revision": "901ddd13b4f8cf7dc268ed06406141aa"
  },
  {
    "url": "assets/js/29.aad8e608.js",
    "revision": "704f701f65f9de553b809d60b519754c"
  },
  {
    "url": "assets/js/3.536c53a0.js",
    "revision": "b76d7f0009b6f891c5ae62eb08c6a46c"
  },
  {
    "url": "assets/js/30.6ba9b36a.js",
    "revision": "da5417737f124d672cb853628ce443ca"
  },
  {
    "url": "assets/js/31.0a821ad2.js",
    "revision": "178fe83d46eb1a52e5bddd2751fb35a5"
  },
  {
    "url": "assets/js/32.b1366205.js",
    "revision": "eebc9e80dfc100176167d5737a05cae0"
  },
  {
    "url": "assets/js/33.be33902e.js",
    "revision": "889e2a99045d7867e1c90dc4aa5dd60e"
  },
  {
    "url": "assets/js/34.56d56e3c.js",
    "revision": "277d87e00ecbdf2596a5eeb4e7d6fe76"
  },
  {
    "url": "assets/js/35.ea2cff98.js",
    "revision": "544b42b74084d629ff31b555735425db"
  },
  {
    "url": "assets/js/36.722cd1de.js",
    "revision": "93adebeda3fc1e758e2bb6e844f668ab"
  },
  {
    "url": "assets/js/37.abb73261.js",
    "revision": "1e8f4f0688ce4f4cd99c8e956270b1d2"
  },
  {
    "url": "assets/js/38.bc316cf9.js",
    "revision": "9c828e39668c5099e79ed7fa6f9fb740"
  },
  {
    "url": "assets/js/39.39f99c56.js",
    "revision": "e57f8068c17db0c0247679c7177a6aa9"
  },
  {
    "url": "assets/js/4.cdb82805.js",
    "revision": "913dfb053c21efa4dadb4e6e7f266193"
  },
  {
    "url": "assets/js/40.993a23b6.js",
    "revision": "d43c566a2643b8a6a0a91ac7bd53ca6f"
  },
  {
    "url": "assets/js/41.e669a311.js",
    "revision": "c2c23c882f4fa9481c30b355c266b058"
  },
  {
    "url": "assets/js/42.e9a19902.js",
    "revision": "b2a64f9f91791063ec44844bc17a40ad"
  },
  {
    "url": "assets/js/43.97a29e1f.js",
    "revision": "82e54f2f339f71456fd90a6e04a6e09c"
  },
  {
    "url": "assets/js/44.410d4d49.js",
    "revision": "75ebbfa6a1df19cfb80bdb6b1d0a60da"
  },
  {
    "url": "assets/js/45.391dc989.js",
    "revision": "33c10ea2b02acb12e5561100b4052771"
  },
  {
    "url": "assets/js/46.33419dd5.js",
    "revision": "e8915d7fa9843c8d3d00f64df16cb8fc"
  },
  {
    "url": "assets/js/47.fc459fa5.js",
    "revision": "3a4631f0d2e49e3c74ba65f94bbd0429"
  },
  {
    "url": "assets/js/48.9962b13a.js",
    "revision": "05cf801b547ba2548328802e6a4d46eb"
  },
  {
    "url": "assets/js/49.a7e19cf3.js",
    "revision": "5031397ff2099884294c6249af1d1e1e"
  },
  {
    "url": "assets/js/5.f2f052fc.js",
    "revision": "0803d8818bc3a48f2282462c531b20d3"
  },
  {
    "url": "assets/js/6.e9fe629e.js",
    "revision": "3e8bbf0bfd779076fa82831ac637f5f7"
  },
  {
    "url": "assets/js/7.647d4f74.js",
    "revision": "da44a4eefc67250990e10d5b39b0f3e4"
  },
  {
    "url": "assets/js/8.c5e17595.js",
    "revision": "52b82691f5f8361ceeff7ec766a6954e"
  },
  {
    "url": "assets/js/9.db081008.js",
    "revision": "2e17ac34bbc0822cb65c71c1dfc90d3b"
  },
  {
    "url": "assets/js/app.2dc30cb9.js",
    "revision": "d8a6b6b807d230e1f1662efdc48d1fbe"
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
    "revision": "2ab69b7259dfa05bc9baf144101baa78"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "5166090303450b6910719aecf71bc02b"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "24b49542632017ab63521a287bc3305f"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "5a2af1f531a7e89e7f914c1289b94145"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "cde471e92ac585e1311f11ba4d818d3b"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "44732608fa17ddacd3fd2b4fb20154cd"
  },
  {
    "url": "coffee/index.html",
    "revision": "50817535c5519a66c1be293d6dd36fd9"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "8129d8b3949b951ca3df0c890da0e3a8"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "62c07518c97b8e3f30aba3ac08d1d039"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "07942e41ba4187e3f7515846b8965d86"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "fa4272e190a0196f2d4d57db73a25ac7"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "109397729a17236cdc5b3dd5d31e0f03"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "625b24f3198153828db50e1d9d817012"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "f4bf5a40ec89a163bc961c18f86c9789"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "780f40ddfc3cdd7302575fa8b5bbe397"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "3a8e812d4ff6de6f39ea7ced9420f8e0"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "5f17ddbb8357c5646cd142df6a73d396"
  },
  {
    "url": "discord.html",
    "revision": "ff63f345c985508ea55db72f5025a86c"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "644e6995af973f1680b8d523f1e1ab95"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "949213ca7fecec19695454d269f2606c"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "dee728d0877fa37bad1dfd5acec312be"
  },
  {
    "url": "docs/index.html",
    "revision": "630d47a02d0783d19a8cf214c9694682"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "f555fbc42d7a84b5477ed44a8cd348b1"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "499bf702fd29f6aa8c3bdcd491b4aa4a"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "ed57cd15f3e55cfc35e757f7a579fb6b"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "6a4152b69550ab68de1afef633282d64"
  },
  {
    "url": "invite/index.html",
    "revision": "56d584dad266291eaa75aac8c3eeb33a"
  },
  {
    "url": "legal.html",
    "revision": "376f2204c7220f3a9c9651af4d65c768"
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
    "revision": "077814bbd1b01a27e403f45963dacdc6"
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
  },
  {
    "url": "waitlist.html",
    "revision": "913c2aa360c6183699dd59fca514cc6d"
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
