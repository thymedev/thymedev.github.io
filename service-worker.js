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
    "revision": "a278ee2ed1ac24c8cfaf552897008435"
  },
  {
    "url": "about.html",
    "revision": "c91e93660178e627fbece392b00222a1"
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
    "url": "assets/js/20.687f6509.js",
    "revision": "1dafdcfa096a3921495fcab43ef2845c"
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
    "url": "assets/js/47.3905ff6e.js",
    "revision": "4c4ed237bf8fd1b4c13b1b4fdd32160f"
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
    "url": "assets/js/app.054c8b00.js",
    "revision": "54428a06ea019e3132496201be536b0b"
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
    "revision": "017b660ab368e1958f5c8f87b5474730"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "2d505d914b368961a4a8d7191fe353ed"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "44080f5d5e79225f7f2aca9c59754e77"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "b32007bf68d93dfb3c89d188c311ac0c"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "0ca14ad521f0e0e1a92272e49d1f0258"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "8cdd656ba972cfb74b593a16a17897d3"
  },
  {
    "url": "coffee/index.html",
    "revision": "59cc68ad3b72218f889b14830c8379da"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "17b205e23fea8ad66519e948b1c0a0d0"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "464120334b57e72a70eb0f3b1b5d6ecb"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "767120a15c3ba327430bf9a33b455476"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "23efc32a4a641bc706bfe68dde859502"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "13faba0669102aff6de67345e6f079ac"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "2737f3825bed195ec383f9d858395c4b"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "28ea666a3a13eb1cd065e6fff904a4e6"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "4b4c0a594eaa329bd9920b03cf307a94"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "fe1912f0bc463bda50b9ce227736fded"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "16c96bfa9f3b09f269582ad003455a0c"
  },
  {
    "url": "discord.html",
    "revision": "47ee2d7a1adb476955738883a6ab4c90"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "7f1b0b2367c3fa018591dcae47e64ed3"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "26ec11aeb5a12150efe4aa0004bf9c3c"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "d420b842d22fb9a90eea0b8a7e02ef8b"
  },
  {
    "url": "docs/index.html",
    "revision": "f358bc59aaee9da2019773fd09729258"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "7a604eed440d8359ebd9e5ab0ec01bfb"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "389cc6a20be81e6ee0000383dac15a0f"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "d40120692f052126e92ffd03ed3ba77f"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "0cbade14f0d9a628facf4b46f2e0a4a7"
  },
  {
    "url": "invite/index.html",
    "revision": "5669472b8f7e83cd9d7af4566ccc6676"
  },
  {
    "url": "legal.html",
    "revision": "3420adaca51e7a57c69b1995e97aa854"
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
    "revision": "ca7081532ef2971ffe130019d069bae9"
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
    "revision": "62ff1c3fb54a17bd98b0f64b70bd2bd5"
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
