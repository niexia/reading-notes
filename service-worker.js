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
    "revision": "2c6aa551c26abfc7d9651e4b0e2673de"
  },
  {
    "url": "article/index.html",
    "revision": "c19b27490e739965507abb673dafe4d4"
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
    "url": "assets/js/29.9d8556bc.js",
    "revision": "665fac07e385fb602810af7f95a4b6de"
  },
  {
    "url": "assets/js/3.ab8f78cd.js",
    "revision": "da6de4d23c1a2cbf0217c40c50683c58"
  },
  {
    "url": "assets/js/30.a17525c4.js",
    "revision": "10faf51e3bd04a41e4ad3965340e5285"
  },
  {
    "url": "assets/js/app.ca57778b.js",
    "revision": "f8ffff231c1153ecf2015b49126c8840"
  },
  {
    "url": "assets/js/layout-Blog.28958473.js",
    "revision": "9406273149e514e31b19b6cfc653966b"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.937e9717.js",
    "revision": "809430df1fcac0c35645a8217e6ad2f7"
  },
  {
    "url": "assets/js/layout-Slide.1ba2dce6.js",
    "revision": "188dc46fc5282d9d53740844a0d48837"
  },
  {
    "url": "assets/js/page--3992e0e1.21d8fd84.js",
    "revision": "d07deef00ac143ecb776e0d763d537b7"
  },
  {
    "url": "assets/js/page--44a0de64.a43a2b6e.js",
    "revision": "3e0bcaaceb2cdfdc52e570197c558f4d"
  },
  {
    "url": "assets/js/page--ac2b465e.ba36a86e.js",
    "revision": "5ed831d3b242e0ac6025df459b5edacd"
  },
  {
    "url": "assets/js/page-SOLID.25c6bbf7.js",
    "revision": "b5fbf7df2c1352ff6b18ba94fcbcfa8a"
  },
  {
    "url": "assets/js/page-专业主义.5fbd243d.js",
    "revision": "cc60c9cde32c2eebab786a1b484b7cf7"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.596a09c2.js",
    "revision": "9ef75a440cff05e5a859c63f83554326"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.e8b0eb51.js",
    "revision": "6b014a404fc42dc62189897b25f92169"
  },
  {
    "url": "assets/js/page-了解架构设计.675b085b.js",
    "revision": "034745f33649a529794647dfb70e49bb"
  },
  {
    "url": "assets/js/page-从0开始学架构.6f8e2178.js",
    "revision": "7948a7021d9ebf8d008ab7373fbe0e82"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.a879fce7.js",
    "revision": "a750c5b63a5b613f917aba5714580b98"
  },
  {
    "url": "assets/js/page-前言.722a88d7.js",
    "revision": "2ec6ac7d658a1621443f3f44d6c617b1"
  },
  {
    "url": "assets/js/page-实战.c2a60c17.js",
    "revision": "d2d7d6cb5bce03db068ff6e933a0ff53"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.4c4b929f.js",
    "revision": "c633a3950527824759467432a1e52bdf"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.77e20275.js",
    "revision": "e04684f333b7cd6a00f869f73cb663da"
  },
  {
    "url": "assets/js/page-说不.3d012c47.js",
    "revision": "b855100ee1f93f99faf1fcedd52f1cfb"
  },
  {
    "url": "assets/js/page-说是.bbc5c32e.js",
    "revision": "494fa8539203b3d5328a759a7c61d5d0"
  },
  {
    "url": "assets/js/page-金字塔原理.83973309.js",
    "revision": "2cb6adf4650e0678b42d7db02f96dce6"
  },
  {
    "url": "assets/js/page-面向对象是什么.20708ffe.js",
    "revision": "291ad91007cdae922f413316fd522b9c"
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
    "url": "assets/js/vendors~layout-Layout.d506f19c.js",
    "revision": "df4e6b04d6bb0f79f4f15e021ae22202"
  },
  {
    "url": "assets/js/vendors~photo-swipe.ed28657c.js",
    "revision": "c56c389b693ad591a64caf44c8c507d5"
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
    "revision": "ed643061269dcf2ac236a69908a995e9"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "c3461970fe4fa02fb0cf60da395c9455"
  },
  {
    "url": "encrypt/index.html",
    "revision": "bc67d27fd323dfd5312a105c258b4060"
  },
  {
    "url": "index.html",
    "revision": "e32ff9aae211ed32822120895cb93e6b"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "e0a5e93f2272501f568e35606c85c214"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "ec87fe154aa6d7aa5e923c0bd98e651d"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "a22cfa4512b23a236d0a28a9489d3c1a"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "53252d4d186faeffd4a4c90517c8bf00"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "6b4bc46a60d577a1fda0120db86d9aea"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "e50dac46e796be83b0a6b02ad7d8b317"
  },
  {
    "url": "slide/index.html",
    "revision": "5b1a0daa2676407e35d8452f5b12ba4e"
  },
  {
    "url": "star/index.html",
    "revision": "3437cccb59b8374bb6eab1f5b7b77b9e"
  },
  {
    "url": "tag/index.html",
    "revision": "d81da0f3df92c784e1102c50aad361e9"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "f5eeb32e3031cf28707cdad5f968f7e4"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "b0fd98a9dce95772ef5932550d670d7d"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "967901748cfffaf6234d8854a6f6816d"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "6fc95ac89e741d84176e2fa030b32fc4"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "236ede33890ce2cfabcec6bc1cfd38f7"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "46b9f6f75a6364702b3316a994087035"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "dc078a5e8371ded3040d74d25928bea9"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "b3dcf6daf1b0ad1e256bd4b459f4f066"
  },
  {
    "url": "the-minto-pyramid-principle/index.html",
    "revision": "00aff3aefe9966a65324c02c93774658"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "dbd75f85dea697c227c2623abc799538"
  },
  {
    "url": "timeline/index.html",
    "revision": "dcf866518c0991e981037166f711ca87"
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
