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
    "revision": "e261470f5eebedac2c21ca406d8f3957"
  },
  {
    "url": "article/index.html",
    "revision": "f3bfb3e4844e5e1769b03dd36cd942dc"
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
    "url": "assets/img/object-oriented-extends-category.ec6375ce.png",
    "revision": "ec6375cee983e16a868c53c764923699"
  },
  {
    "url": "assets/img/object-oriented-extents.bfe20ae1.png",
    "revision": "bfe20ae1abe027ca25c1eeec094aba1c"
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
    "url": "assets/js/26.d89d310b.js",
    "revision": "aa6fdada3698bb8e1aae708fa539fd69"
  },
  {
    "url": "assets/js/27.35a99a6b.js",
    "revision": "f46ad1db6886ae62fa1883a6632804b5"
  },
  {
    "url": "assets/js/3.f2f4ea2d.js",
    "revision": "9ab38d87d5e6fe4c6ebf2c858f407ecd"
  },
  {
    "url": "assets/js/app.4e4e8978.js",
    "revision": "124e898f0583e76e1d43def63757bbd9"
  },
  {
    "url": "assets/js/layout-Blog.b5be986f.js",
    "revision": "e7de742b647cbefae7e38d7f2c45dc8c"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.97c06176.js",
    "revision": "21b0a535cab610d9d4413b2a2c2d2fae"
  },
  {
    "url": "assets/js/layout-Slide.d359760c.js",
    "revision": "c121cc0a277394a2443933386f24b0b6"
  },
  {
    "url": "assets/js/page--3992e0e1.8bd7e468.js",
    "revision": "e1c61247c7f14b0a8b235e192c3033e8"
  },
  {
    "url": "assets/js/page--44a0de64.12af4578.js",
    "revision": "e02516dc3adcb106330d7f21a906464f"
  },
  {
    "url": "assets/js/page--ac2b465e.c12aacfd.js",
    "revision": "fe2f6c8cff781681e615dc1815528836"
  },
  {
    "url": "assets/js/page-SOLID.2418d8cb.js",
    "revision": "d762c019c9bd088fb0c1a5d7b25a8f22"
  },
  {
    "url": "assets/js/page-专业主义.94e1cedb.js",
    "revision": "377a14d5f83b61b7f4ffc113807d0b11"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.aa480042.js",
    "revision": "78e1e02fe197962700be8bd605c60400"
  },
  {
    "url": "assets/js/page-了解架构设计.36e91f4d.js",
    "revision": "d7101890f28f8e565f6c8060620098d3"
  },
  {
    "url": "assets/js/page-从0开始学架构.9a8c3e8c.js",
    "revision": "6c7e9d8163214c668e16005fee8788a7"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.6d324441.js",
    "revision": "fc328e60370d371a1743d1eca3066579"
  },
  {
    "url": "assets/js/page-前言.8eb9b966.js",
    "revision": "9ef008a6d972be8ce33dc2d67e826e13"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.62aee097.js",
    "revision": "f207b438b62f5d8be5328231014210f2"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.08879614.js",
    "revision": "0354cbe63e481d2af8e3acd1be12b6b2"
  },
  {
    "url": "assets/js/page-说不.11bfc0c2.js",
    "revision": "db5a3c8b89813941766bad7e2057e57d"
  },
  {
    "url": "assets/js/page-说是.678ef1c5.js",
    "revision": "af7d04c2a7233f3eab1ffdf76fa4ada4"
  },
  {
    "url": "assets/js/page-面向对象是什么.56b5b721.js",
    "revision": "568c7cb5e31774b8015f422348e15c98"
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
    "url": "assets/js/vendors~layout-Layout.4e60704e.js",
    "revision": "fb33fe0c797a7240b04011523283de2f"
  },
  {
    "url": "assets/js/vendors~photo-swipe.90c0d90a.js",
    "revision": "0cf28704ae1491e775c8924f7ef60fcc"
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
    "url": "category/index.html",
    "revision": "061b6cc7c179b37e83379204b7761a4f"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "685167b5fc7852da90af4524cab46b83"
  },
  {
    "url": "encrypt/index.html",
    "revision": "7dc6a53f2a39eb5e7e7fb0d728609f4a"
  },
  {
    "url": "index.html",
    "revision": "7d02c0bc1e39790f2a1486d0a33e3b20"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "e4281360f3d930bc6e303b0995887474"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "5809d40109af4a3bf868614b311ccfcf"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "4d8df9b3585fbb5be95842b45bbd21b5"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "39afd14d80c900eb8431150917e1f10a"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "a1441408b375b710ec90272bd9d94158"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "a47e2f9dbe19f2ae72264563007128de"
  },
  {
    "url": "slide/index.html",
    "revision": "b6afcc42e0d8e41f5beb5738657c70d7"
  },
  {
    "url": "star/index.html",
    "revision": "30467b9995fc177624f8e85f8b697d82"
  },
  {
    "url": "tag/index.html",
    "revision": "ade4b1454d5aeef4cd3900461e2b288b"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "24cb2c49fda64a50b31d754815b1d150"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "bd6495a35d294291f2da18a87be2a15b"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "36e1d83ad9a5426e73f823470620b1fc"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "3d366fd8cdfb39ffce320e025c082acc"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "deccea5f32ae76709a95567a12cb8f32"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "2b95d51cbbf94d39f637c2e71816f746"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "5f8319c65a2250a46644c00340b465b3"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c47189191b69bd33fc2b9b8c3512915"
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
