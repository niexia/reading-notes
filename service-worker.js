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
    "revision": "1abdcb5cbf86da37f6421199a66f4347"
  },
  {
    "url": "article/index.html",
    "revision": "8743c7f551e70b863b1b40995a70b705"
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
    "url": "assets/css/0.styles.bac28c70.css",
    "revision": "cc7015d7ee7f34357817bc59b8c74567"
  },
  {
    "url": "assets/design-principles-IOC.png",
    "revision": "055f1a70037ee8e64ab8ce93ba45c45b"
  },
  {
    "url": "assets/design-principles-LOD.png",
    "revision": "9ff7156d0e6a93ad232c711cd527352c"
  },
  {
    "url": "assets/design-principles-OCP.png",
    "revision": "5c3d5e666944a273867b68057d811c88"
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
    "url": "assets/img/design-principles-IOC.055f1a70.png",
    "revision": "055f1a70037ee8e64ab8ce93ba45c45b"
  },
  {
    "url": "assets/img/design-principles-LOD.9ff7156d.png",
    "revision": "9ff7156d0e6a93ad232c711cd527352c"
  },
  {
    "url": "assets/img/design-principles-OCP.5c3d5e66.png",
    "revision": "5c3d5e666944a273867b68057d811c88"
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
    "url": "assets/img/object-oriented-extends-category.ec6375ce.png",
    "revision": "ec6375cee983e16a868c53c764923699"
  },
  {
    "url": "assets/img/object-oriented-extents.bfe20ae1.png",
    "revision": "bfe20ae1abe027ca25c1eeec094aba1c"
  },
  {
    "url": "assets/img/object-oriented-wallet.a5bdd11d.png",
    "revision": "a5bdd11d9a164362cc79c9818160fd11"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/the-minto-pyramid-principle.59a3c7ef.png",
    "revision": "59a3c7ef202a98a58ef18a808d0409f6"
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
    "url": "assets/js/3.f5cc4994.js",
    "revision": "1444a4a330fe331d7022f7fdc1372031"
  },
  {
    "url": "assets/js/37.5a75d47b.js",
    "revision": "a1416ff39b9d7792c53728aff2ef1b83"
  },
  {
    "url": "assets/js/38.ab82d4b4.js",
    "revision": "197ba8731c958916ddc9407bf9e95632"
  },
  {
    "url": "assets/js/app.256b5208.js",
    "revision": "adb86e1c2ab6a5ae9d56fb921e56aa89"
  },
  {
    "url": "assets/js/layout-Blog.619a14d8.js",
    "revision": "8602bf65ddb58d7f701b4b091a78ba79"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.de88c5f3.js",
    "revision": "4b4582a9fa198c870e6345d95bfcf339"
  },
  {
    "url": "assets/js/layout-Slide.24e7e7cb.js",
    "revision": "b94151e6425532e054289a780220f713"
  },
  {
    "url": "assets/js/page--3992e0e1.2bcbbf9a.js",
    "revision": "b4ea1e6c79ded8b13827f430c8bae78c"
  },
  {
    "url": "assets/js/page--44a0de64.7118a33c.js",
    "revision": "0f6ba21b96145700b2707966efed4ecf"
  },
  {
    "url": "assets/js/page--5f87f751.271ec4e3.js",
    "revision": "ec74c4149662be0b597f3aadb06e4699"
  },
  {
    "url": "assets/js/page--7507ab0e.7183a335.js",
    "revision": "f9106ed6f0d0b73a4fb96cab9e61979f"
  },
  {
    "url": "assets/js/page--ac2b465e.5a5e0dd3.js",
    "revision": "ea09a13f1a6ce53cffc6fb6240000b62"
  },
  {
    "url": "assets/js/page--d1e0c466.78abfa50.js",
    "revision": "5185fd25eaee0d8bea7c827ddd9682ed"
  },
  {
    "url": "assets/js/page-DRY原则.81ecd29f.js",
    "revision": "affb4d80aee50b0abe65de8984caf6c7"
  },
  {
    "url": "assets/js/page-KISS.35e13008.js",
    "revision": "72e0c314441c41eff137d5550b6234de"
  },
  {
    "url": "assets/js/page-LOD.bd58e0db.js",
    "revision": "18155b20e8d18d7a63309f46e38fb755"
  },
  {
    "url": "assets/js/page-SOLID.a3cd4f89.js",
    "revision": "b0bf2f47e0afe3e060915faf1628f23f"
  },
  {
    "url": "assets/js/page-YAGNI.c40e60eb.js",
    "revision": "a298c848a027a4a47583f51b3955b68b"
  },
  {
    "url": "assets/js/page-专业主义.c19258f7.js",
    "revision": "6650696a5bc46a97a1e72bf2d2b37669"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.a6515cba.js",
    "revision": "007b1a08879bc8bfa7c0b8bb9bcfc044"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.4799c751.js",
    "revision": "8b95fc1019420d79be5650ddbf71624c"
  },
  {
    "url": "assets/js/page-了解架构设计.b2d731bd.js",
    "revision": "9e221dcd5cc0600b71d7c1e509e526d4"
  },
  {
    "url": "assets/js/page-从0开始学架构.224d5779.js",
    "revision": "85883612e5faf476baa2a863062d7ba8"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.4baf5a77.js",
    "revision": "4581dc4be6fbdc74a5787ce30a34dfd9"
  },
  {
    "url": "assets/js/page-前言.81f5e4a4.js",
    "revision": "c73b4c0db9c82fc2e8669aa741bad361"
  },
  {
    "url": "assets/js/page-实战.5c4b4f2a.js",
    "revision": "f14351110b1c7041b7b9e591a0a1df41"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.76ce2691.js",
    "revision": "7f8e77f9a11ba30c37b73522d8007cea"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.79517307.js",
    "revision": "e0f6cc03342ca24ee89ff495a3b9ffa7"
  },
  {
    "url": "assets/js/page-说不.04279b67.js",
    "revision": "ba1bfa649bca9eac1cf8949818576494"
  },
  {
    "url": "assets/js/page-说是.45f443d1.js",
    "revision": "84982a1887f7a7da7e9b110b75b6361a"
  },
  {
    "url": "assets/js/page-重构.e90c6b91.js",
    "revision": "36f0a4fc03a72bf8504a294695fd11f8"
  },
  {
    "url": "assets/js/page-金字塔原理.a0b47183.js",
    "revision": "56cd56e79097b554ed8201893649c4f5"
  },
  {
    "url": "assets/js/page-面向对象是什么.51844c2c.js",
    "revision": "43bfa9b43e655a156a91435a9620db10"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7c754536.js",
    "revision": "8a57dd11795cba7b66377a9c1032ce47"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.3cdde019.js",
    "revision": "763d8aa645dde3673ce0733e998194a4"
  },
  {
    "url": "assets/js/vendors~layout-Layout.5a15940e.js",
    "revision": "0219fef2b67a40ddc41a54821b86135a"
  },
  {
    "url": "assets/js/vendors~photo-swipe.8bb0dc2b.js",
    "revision": "2d4b304a78eafebe9472f58ccd39e6fe"
  },
  {
    "url": "assets/object-oriented-extends-category.png",
    "revision": "ec6375cee983e16a868c53c764923699"
  },
  {
    "url": "assets/object-oriented-extents.png",
    "revision": "bfe20ae1abe027ca25c1eeec094aba1c"
  },
  {
    "url": "assets/object-oriented-wallet.png",
    "revision": "a5bdd11d9a164362cc79c9818160fd11"
  },
  {
    "url": "assets/the-minto-pyramid-principle.png",
    "revision": "59a3c7ef202a98a58ef18a808d0409f6"
  },
  {
    "url": "category/index.html",
    "revision": "1de8221340526d61fa11dd9a94993ac6"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "9aa962cc7ee60d79ad0e2586db3f58cf"
  },
  {
    "url": "encrypt/index.html",
    "revision": "427f117bb00928317e64af4f3d7483d9"
  },
  {
    "url": "index.html",
    "revision": "38bc2f22c14bd8658561be00681045e1"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "5a7ed3af6c604611c3455b0f6d454a98"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "3c64ef888c0e81807137610ffc2e1a8f"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "fa4c176a9128efcb07d4a94442a18199"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "894f8fa8e313b8c5f6a334d3266b5f6a"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "895b4efa7060b93313133e057dc16ef0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "9fe05992d294c43a726bdbf0ae488962"
  },
  {
    "url": "slide/index.html",
    "revision": "6f593b7045fe4c9b7c5de68870c3ded3"
  },
  {
    "url": "star/index.html",
    "revision": "8e66f70907da0bfaea64182d00b02b1a"
  },
  {
    "url": "tag/index.html",
    "revision": "c28955a1a22561e963d6d2442d9eea9b"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/DRY/index.html",
    "revision": "8e2d2a5ad0de928776f01fe3900b5242"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/KISS/index.html",
    "revision": "2ba6a2b768bd29e9e9ed4fd3c662dcc1"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/LOD/index.html",
    "revision": "6fb19e07d6171f5487a00faa782eb60f"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/practice/index.html",
    "revision": "ed1f62ea51b560fb45acf2760f059ba9"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "fd3815de394946181b25fc3fd71d57f4"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/YAGNI/index.html",
    "revision": "cef7583f803d3be7a9191d8f35134487"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "c79293751d6c921862504a1602242bab"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "60201b1d9f2e13fedd6e7a11e94738af"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "9dd34b8cf1f67bf58a8257e7ab83630f"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/practice/index.html",
    "revision": "9a69b2ba5edcf23b89fed19fb2e2e7a0"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/refactor/index.html",
    "revision": "81d54a1b85be564b7caccde19b209e67"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/standard/index.html",
    "revision": "f49e599474f090dfc564935a75b5606a"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "5d56d087b0b94933c2015d4a8529dd61"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "0f4ac8730c93e088a7a1fd466e9a0e75"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "a47cfe922eade629f358db30b5056f40"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "443140734a7070b8fdc72edcd7231957"
  },
  {
    "url": "the-minto-pyramid-principle/index.html",
    "revision": "0f66d3f1ad3e49696738fa7186105d0f"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "0373d37bedea90124b5c430f22c2414f"
  },
  {
    "url": "timeline/index.html",
    "revision": "18f3c43c0075b907ba9d9d78b798cd95"
  },
  {
    "url": "workbox-2c301fb6.js",
    "revision": "daee210773cfc710af8014dfa06b41be"
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
