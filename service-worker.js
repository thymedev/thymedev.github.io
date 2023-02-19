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
    "revision": "a372aba555627f72327708d318ddf8ed"
  },
  {
    "url": "about.html",
    "revision": "7e97f0af6a6267d768db926defb94232"
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
    "url": "assets/js/10.d4ca9d15.js",
    "revision": "61e11ac7bff8b9006682ad1648ef80b4"
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
    "url": "assets/js/20.0d41307b.js",
    "revision": "6e44360c8b0a70ceff7d7be1053c934f"
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
    "url": "assets/js/40.56ffbac6.js",
    "revision": "02db70ff8cd837be8df1f788254bd8c3"
  },
  {
    "url": "assets/js/41.86247bd5.js",
    "revision": "31cec17fd768243e8fd9e68b06f6cabb"
  },
  {
    "url": "assets/js/42.c3dd6f0d.js",
    "revision": "c7ef04f4c3e58abbc9f64894cb3aee27"
  },
  {
    "url": "assets/js/43.13528339.js",
    "revision": "b5b083f4c96594da256c86dcf3e7cd97"
  },
  {
    "url": "assets/js/44.6aba4631.js",
    "revision": "75ebbfa6a1df19cfb80bdb6b1d0a60da"
  },
  {
    "url": "assets/js/45.ddaf0a29.js",
    "revision": "33c10ea2b02acb12e5561100b4052771"
  },
  {
    "url": "assets/js/46.a5a4bc88.js",
    "revision": "986dc1533e028c2bef7312b6054fdd59"
  },
  {
    "url": "assets/js/47.43919bb6.js",
    "revision": "5118d2fecf38a95444a51401361d3673"
  },
  {
    "url": "assets/js/48.6cceeadd.js",
    "revision": "8324ce3936e1c2033af20660faf60614"
  },
  {
    "url": "assets/js/49.7a942a42.js",
    "revision": "3077a9f70c7b84032171290173569cc8"
  },
  {
    "url": "assets/js/5.f2f052fc.js",
    "revision": "0803d8818bc3a48f2282462c531b20d3"
  },
  {
    "url": "assets/js/50.66afbab9.js",
    "revision": "ea54661039e6172fc33a2a063c952e2e"
  },
  {
    "url": "assets/js/51.87761468.js",
    "revision": "1ab778d92b7a25513e589f6573811720"
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
    "url": "assets/js/app.158822b6.js",
    "revision": "cc4a9972abedde86252d3368ac50b697"
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
    "revision": "be81eb1c20981d728fd3621fa620f422"
  },
  {
    "url": "coffee/coffeetime/index.html",
    "revision": "d7ee45a458eb8e8d91d422684592844e"
  },
  {
    "url": "coffee/coffeetools/index.html",
    "revision": "32b5545a09d6078746f9ac23243eb404"
  },
  {
    "url": "coffee/dmreply/index.html",
    "revision": "88a1d7efd73f8c3b99268aba8652d111"
  },
  {
    "url": "coffee/emotes/index.html",
    "revision": "567ccb1c28d649e366cdb3f183f53a77"
  },
  {
    "url": "coffee/hellohook/index.html",
    "revision": "8b5d37ec54256e1bb8b5cdae7f828952"
  },
  {
    "url": "coffee/index.html",
    "revision": "7bbf5d0f428d6ad6069c59dbfdc13d34"
  },
  {
    "url": "coffee/jsonrequest/index.html",
    "revision": "0bd955df54b4092d93ded73029936d9a"
  },
  {
    "url": "coffee/kyarutail/index.html",
    "revision": "c67250237879e650adfb23cefc974a88"
  },
  {
    "url": "coffee/loveplay/index.html",
    "revision": "8af5026d21dabde24a454939a668461c"
  },
  {
    "url": "coffee/msgmover/index.html",
    "revision": "df5fe4653f0cb54a54e20657a71d1871"
  },
  {
    "url": "coffee/pinboard/index.html",
    "revision": "19aac995630f5a4b3666ba51d31d6e4a"
  },
  {
    "url": "coffee/quarantine/index.html",
    "revision": "7dddeea20a8b500c5dffa0f027ba3899"
  },
  {
    "url": "coffee/sendhook/index.html",
    "revision": "f4019a58ae65473d0ebc45d8810cf540"
  },
  {
    "url": "coffee/spotifyembed/index.html",
    "revision": "fa1dad704e2fd64f5b722be35ac03234"
  },
  {
    "url": "coffee/start/index.html",
    "revision": "ed9e8c791f105d3013695a80c437e642"
  },
  {
    "url": "coffee/websearch/index.html",
    "revision": "f6c1b65dc29fd6b4d987e69121c4fb82"
  },
  {
    "url": "discord.html",
    "revision": "cee6a61af8013ed8e79178b3af5474a9"
  },
  {
    "url": "docs/bettercensor/index.html",
    "revision": "9d04e7c0fbcd72888b0c1928f70ad71e"
  },
  {
    "url": "docs/betterinvites/index.html",
    "revision": "dfd7a6657d4dc5476bd47ccd29741d72"
  },
  {
    "url": "docs/betterinvites/v1.html",
    "revision": "876bdb369a624ced91071180d96dd4fc"
  },
  {
    "url": "docs/betternotes/index.html",
    "revision": "2f7a974c6a774cb8bdb29a8f008fed40"
  },
  {
    "url": "docs/index.html",
    "revision": "3af04b941ea6b264635920fd55774320"
  },
  {
    "url": "img/pawel-czerwinski-95QNbCkVERM-unsplash.jpg",
    "revision": "1f662d91b0c6deac7c8de460f9e96310"
  },
  {
    "url": "index.html",
    "revision": "6b5c1acf6151b506736dfb00847ed963"
  },
  {
    "url": "invite/bettercensor.html",
    "revision": "9655211a64842b514ba7dbc1c7dd5ef5"
  },
  {
    "url": "invite/betterinvites.html",
    "revision": "2fc8334f2d954dea07014f70cfaddb12"
  },
  {
    "url": "invite/betterinvites/v1.html",
    "revision": "8432dc61c61b73ad0e187c04ed25cdbf"
  },
  {
    "url": "invite/betternotes.html",
    "revision": "d702883d6df69111fa0f77adf21f25cc"
  },
  {
    "url": "invite/index.html",
    "revision": "e8124d57ff0cf9d794af51024ef4546a"
  },
  {
    "url": "legal.html",
    "revision": "e4583bde41efd3a5153610063b0e6f85"
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
    "revision": "9f607aa94b811addd30b52c6d70bebb9"
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
    "revision": "a92d83004520c7affce72bd8aaae8a74"
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
