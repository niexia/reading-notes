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
    "revision": "aa3c3f41a7922d4be6dee9581718d931"
  },
  {
    "url": "article/index.html",
    "revision": "df492bea1685e25a93d72db9a375c307"
  },
  {
    "url": "assets/architecture-cluter-extend.png",
    "revision": "67884070902343b95c1302506726d490"
  },
  {
    "url": "assets/architecture-cluter-task-decomposition.png",
    "revision": "b1cbb4581146d56ab820a9f7f94c2724"
  },
  {
    "url": "assets/architecture-division.png",
    "revision": "8bb761886f3b53047b4c9a11c50ca20b"
  },
  {
    "url": "assets/architecture-student-system-design.png",
    "revision": "f8175c743d33303d58d5ea01bef805fc"
  },
  {
    "url": "assets/css/0.styles.0c1cc593.css",
    "revision": "53fd8a7a8fd1c7e7533200783a9f8ae6"
  },
  {
    "url": "assets/img/architecture-cluter-extend.67884070.png",
    "revision": "67884070902343b95c1302506726d490"
  },
  {
    "url": "assets/img/architecture-cluter-task-decomposition.b1cbb458.png",
    "revision": "b1cbb4581146d56ab820a9f7f94c2724"
  },
  {
    "url": "assets/img/architecture-division.8bb76188.png",
    "revision": "8bb761886f3b53047b4c9a11c50ca20b"
  },
  {
    "url": "assets/img/architecture-student-system-design.f8175c74.png",
    "revision": "f8175c743d33303d58d5ea01bef805fc"
  },
  {
    "url": "assets/img/danger-dark.7b1d6aa1.svg",
    "revision": "7b1d6aa1bdcf013d0edfe316ab770f8e"
  },
  {
    "url": "assets/img/danger.b143eda2.svg",
    "revision": "b143eda243548a9982491dca4c81eed5"
  },
  {
    "url": "assets/img/default-skin.b257fa9c.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "assets/img/hero.b62ddd9c.jpg",
    "revision": "b62ddd9c4a72085202b5218e4c98fd68"
  },
  {
    "url": "assets/img/info-dark.f8a43cf6.svg",
    "revision": "f8a43cf67fa96a27a078530a3a43253c"
  },
  {
    "url": "assets/img/info.88826912.svg",
    "revision": "88826912d81d91c9e2d03164cd1481a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tip-dark.075a244c.svg",
    "revision": "075a244c83d1403c167defe81b4d7fe7"
  },
  {
    "url": "assets/img/tip.a2b80aa5.svg",
    "revision": "a2b80aa50b769a26da12fe352322a657"
  },
  {
    "url": "assets/img/warning-dark.aac7e30c.svg",
    "revision": "aac7e30c5fafc6748e21f7a9ef546698"
  },
  {
    "url": "assets/img/warning.ec428b6d.svg",
    "revision": "ec428b6d6d45ac5d0c610f08d757f40f"
  },
  {
    "url": "assets/js/21.0c5469a1.js",
    "revision": "976d112e7e6266b47fbf94bbfd9d712f"
  },
  {
    "url": "assets/js/22.300e6f5a.js",
    "revision": "96132d874c808934da4b2d0624eb2d30"
  },
  {
    "url": "assets/js/3.13ed4cb7.js",
    "revision": "4b3b48b149be1771d31140164b710a1b"
  },
  {
    "url": "assets/js/app.8176692c.js",
    "revision": "44d37b422556d8561e35e8d5129ea38f"
  },
  {
    "url": "assets/js/layout-Blog.68075d56.js",
    "revision": "26beefdcff1944545adb9f35454281ee"
  },
  {
    "url": "assets/js/layout-Layout.4ff65798.js",
    "revision": "f97132b7ed931cdfd556ea4bc81a48a6"
  },
  {
    "url": "assets/js/layout-NotFound.4b427cb4.js",
    "revision": "b57627e8829ddcc58c7cfab3c2c788be"
  },
  {
    "url": "assets/js/layout-Slide.64cf3213.js",
    "revision": "3049e14ac797287c48b4fb401e337d79"
  },
  {
    "url": "assets/js/page--10dcafec.9b96c7c2.js",
    "revision": "562d4843f580b9485ee6717cbfdf327a"
  },
  {
    "url": "assets/js/page--22b8927b.d8033c93.js",
    "revision": "3d1f325b548648e5e0e4e3d8ec389a1f"
  },
  {
    "url": "assets/js/page--3f2be02a.d9a083be.js",
    "revision": "032e4aae9417f221af72344dfa0efbee"
  },
  {
    "url": "assets/js/page-专业主义.a1e6d22a.js",
    "revision": "fabd2b7dd66aecb1d18997126926935f"
  },
  {
    "url": "assets/js/page-了解架构设计.6a20403a.js",
    "revision": "a18fdac0f7611b5606662bdda74cd2aa"
  },
  {
    "url": "assets/js/page-从0开始学架构.d9c45cef.js",
    "revision": "0ee10257f7d9804985faa8dd51735c62"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.f62ab13c.js",
    "revision": "869955fc7a274b986c4909f938469552"
  },
  {
    "url": "assets/js/page-前言.f8590fc4.js",
    "revision": "3491801a61bb8f57c6a9893c6a3e58d7"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.add89360.js",
    "revision": "061f0eaef21573e8c77e104563037776"
  },
  {
    "url": "assets/js/page-说不.4bf1ab0c.js",
    "revision": "836bea075315f66ee52f9c8fd70595fb"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.bea671b6.js",
    "revision": "fa456357d22c97cc2ce7a84f94d8f962"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.504428ac.js",
    "revision": "2d094d8043550531ff479e508691dedd"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b1c02154.js",
    "revision": "64f4172d2f92352b1f12097ce8a0133c"
  },
  {
    "url": "assets/js/vendors~photo-swipe.d4260e6c.js",
    "revision": "7e7ac849c4c8b5b86ea6684245eb81e3"
  },
  {
    "url": "category/index.html",
    "revision": "a9160cdf093ed020da44ce47e5cdc2ec"
  },
  {
    "url": "encrypt/index.html",
    "revision": "fe236cc98f9403ab0e407fdadb96974e"
  },
  {
    "url": "index.html",
    "revision": "39b58c0f41567bebd31389e3465c560b"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "b98c573ca050cb99cce19b593d2434f9"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "a02d5051dc071b22736681c4e1bf955b"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "c2add8921f3d433edddb6f1c7346a292"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "b94591de84b943547c2920b87bb55191"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "95b245ff9dc64759ebcf23e5188e5ba4"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "974c8826efd5547de48d260dfa4f364b"
  },
  {
    "url": "slide/index.html",
    "revision": "0807be225b0b46ae119877d4c96cd3d6"
  },
  {
    "url": "star/index.html",
    "revision": "ea24d9926f9062fbadf5d0c921d111e8"
  },
  {
    "url": "tag/index.html",
    "revision": "5154ee53dccf0d0ce57d4260b82e024d"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "83c386663c8a27d7f383a6636adf1dac"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "0335fcd96c378c0595aabd577b7b7308"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "f67606b222ef96a6bf1e880cb422db5e"
  },
  {
    "url": "timeline/index.html",
    "revision": "d8e1e09b89fd5d358da8edda681a453a"
  },
  {
    "url": "workbox-282d8a9c.js",
    "revision": "82ff92290a1fd3e4f03873cecfe0ce39"
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
