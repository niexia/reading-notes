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
    "revision": "a9dcf830f78a1f0b0234d11846a2aa65"
  },
  {
    "url": "article/index.html",
    "revision": "eac939bbfe3617a12ec390538604a3cc"
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
    "url": "assets/js/3.9a267cc3.js",
    "revision": "34a6f2aa5bdeb0bae95751f36d2f5aab"
  },
  {
    "url": "assets/js/32.50fec113.js",
    "revision": "24e5df6751e3995d4e0ca2ab4439d883"
  },
  {
    "url": "assets/js/33.c9a97d40.js",
    "revision": "b517b97798f7df942b64a44a34c0cc75"
  },
  {
    "url": "assets/js/app.93911836.js",
    "revision": "06c2f62de4c4144f8906a1af5c0b7db8"
  },
  {
    "url": "assets/js/layout-Blog.bb8c7625.js",
    "revision": "dee3254a7ab0273c64e8f1da07265293"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.a3439517.js",
    "revision": "4a60c7cfce0460f9639d7fdaeb3a7cb1"
  },
  {
    "url": "assets/js/layout-Slide.f1970978.js",
    "revision": "af2842d8bc329ee9b7d1d0f654f69d48"
  },
  {
    "url": "assets/js/page--3992e0e1.2c870236.js",
    "revision": "7d0c5718a130cdd4133852b1581a19a6"
  },
  {
    "url": "assets/js/page--44a0de64.a43a2b6e.js",
    "revision": "3e0bcaaceb2cdfdc52e570197c558f4d"
  },
  {
    "url": "assets/js/page--ac2b465e.8c9c1329.js",
    "revision": "ae1d04efc92f5646e6a1104e7d150b9e"
  },
  {
    "url": "assets/js/page-DRY原则.9cf52eba.js",
    "revision": "9da2ce8d51fe96d3d06e0f7122742a30"
  },
  {
    "url": "assets/js/page-KISS.71abc749.js",
    "revision": "04b94888da8170bc32b4912f0d4a4672"
  },
  {
    "url": "assets/js/page-SOLID.d8cea2b6.js",
    "revision": "ce09805efc7cc247eb810b4e5b32cead"
  },
  {
    "url": "assets/js/page-YAGNI.df370756.js",
    "revision": "ad939ed09f73238323265152e521b933"
  },
  {
    "url": "assets/js/page-专业主义.f1670c2e.js",
    "revision": "98c26d574389e87d9cf42c88418003df"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.f112eb55.js",
    "revision": "2f7042291b02122acd7e7b96b86d7e3d"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.95e66f70.js",
    "revision": "44e22193b9a0f66aa65180964d7962ce"
  },
  {
    "url": "assets/js/page-了解架构设计.21941fe4.js",
    "revision": "093d2e28c03155ab823c71e7809492fd"
  },
  {
    "url": "assets/js/page-从0开始学架构.db11fc3e.js",
    "revision": "0870f803a526bf580a6e480cf56b5be6"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.1817ae7c.js",
    "revision": "49f345be625a676bb4ad17df2c85c40b"
  },
  {
    "url": "assets/js/page-前言.7883c01f.js",
    "revision": "48b5f044916b06efe3f5e81c96615fad"
  },
  {
    "url": "assets/js/page-实战.f377514d.js",
    "revision": "c5a2233b83323f0a597408bbd2adb995"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.af4d9282.js",
    "revision": "48acfc070336eab68d8b6edfe871a4a3"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.94f74ce5.js",
    "revision": "6fcc89a1e16ae295141868fc2c97d895"
  },
  {
    "url": "assets/js/page-说不.ed79b6d4.js",
    "revision": "11a4fa1161a1c4b63be5b1479347968c"
  },
  {
    "url": "assets/js/page-说是.2bbff39d.js",
    "revision": "5da22ac885cd0dbf5a68fd2bb0ef5f59"
  },
  {
    "url": "assets/js/page-金字塔原理.fc2f03a1.js",
    "revision": "c861d2f3746eaef6f85417be12104baa"
  },
  {
    "url": "assets/js/page-面向对象是什么.0edff677.js",
    "revision": "1a40e42730171facf91f3014adb2f4f4"
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
    "url": "assets/js/vendors~layout-Layout.48aca887.js",
    "revision": "23c1edd271bd5de3224af34f7359c53d"
  },
  {
    "url": "assets/js/vendors~photo-swipe.f22cf766.js",
    "revision": "96847f7625e67efedaac34627c41ca49"
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
    "revision": "33808d6a6597b1a16a5cdaba37c36148"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "04658a918f437414af0a89c06a0afde0"
  },
  {
    "url": "encrypt/index.html",
    "revision": "1a24aa68c73dc56d9bb1e92efa99d649"
  },
  {
    "url": "index.html",
    "revision": "cb8780655fd7b0645d2e8f0b22a8caec"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "cbda49bfe37b398b59b3793402410730"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "95f799e118236e7eb015fd873f09efa3"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "eda47eb6cbf93a62777703084dcaecf6"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "1d6e94cb5eb9e9713f97c8a27bba5661"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "2195c8369ef3da495684b5e4b2ff522d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "d3a38b71bfd74f07f3c3c13e8d66bc59"
  },
  {
    "url": "slide/index.html",
    "revision": "660f03bff121c95911955a27452aa4cd"
  },
  {
    "url": "star/index.html",
    "revision": "e1732eaa53ae6d0db3eb421b826ed433"
  },
  {
    "url": "tag/index.html",
    "revision": "e9a0a1911515facf065826e7e4b6eef7"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/DRY/index.html",
    "revision": "1ba282febba824fa962b871103a44767"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/KISS/index.html",
    "revision": "99b794a11b084d1ae14b1a6c2461ea69"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "2a685e946a940ea89d0fe31a4a95f1aa"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/YAGNI/index.html",
    "revision": "ebf21192a49c531848c4fd63c758cf08"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "c24732954a0f7e58565fb696617ce06e"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "74bc38e41b6028d14f98dd555bff5024"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "9cbb8062aba7ee0d65508c1378303f3d"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "ea4716bda320b58b621084987c2fac5c"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "6829f631ba086801dcf9d24c7dd4224a"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "735d8629c19e37e24af5431676eaac3d"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "5e351d8861243a2700ae5c567cd14c78"
  },
  {
    "url": "the-minto-pyramid-principle/index.html",
    "revision": "61912b3519c4349b2c5b9a9853ecd760"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "d1faf1a607152491567cbf8e3cc8a5af"
  },
  {
    "url": "timeline/index.html",
    "revision": "0654a56f192d295d34f390fdfb44b0a7"
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
