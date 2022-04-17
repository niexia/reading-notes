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
    "revision": "7b0aff307691d1ca69502ed33793969e"
  },
  {
    "url": "article/index.html",
    "revision": "d272e9cd724afc3154ffa449766c3d61"
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
    "url": "assets/js/28.6099332d.js",
    "revision": "5465a925c81739724cce32b52bbfe868"
  },
  {
    "url": "assets/js/29.3e6256e2.js",
    "revision": "0f6de1ae190c6fa21e666c9eda8df79e"
  },
  {
    "url": "assets/js/3.25b53b7c.js",
    "revision": "49e6418e0303dca2694d8fee21f840af"
  },
  {
    "url": "assets/js/app.9635b31f.js",
    "revision": "8a95baa84fdff439351c2e8d917d826d"
  },
  {
    "url": "assets/js/layout-Blog.96cf747a.js",
    "revision": "8bc69d17e35c67e86b3571c1a1539104"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.800fe0d1.js",
    "revision": "55ce56a17a5709339c111a9e20863978"
  },
  {
    "url": "assets/js/layout-Slide.3ad70942.js",
    "revision": "c318c4add7f6a0f6c91468924d3370ee"
  },
  {
    "url": "assets/js/page--3992e0e1.a2e99513.js",
    "revision": "953a6825387d8a59a1dbe69c7b1e5ccb"
  },
  {
    "url": "assets/js/page--44a0de64.12af4578.js",
    "revision": "e02516dc3adcb106330d7f21a906464f"
  },
  {
    "url": "assets/js/page--ac2b465e.b12c256c.js",
    "revision": "a230b4307abdcff8656fc2cf046fe81b"
  },
  {
    "url": "assets/js/page-SOLID.eb68e7a9.js",
    "revision": "5d5a48ed223d8bcfa3f877632cecf8bd"
  },
  {
    "url": "assets/js/page-专业主义.95c4614e.js",
    "revision": "455246963f06394a36dec3e850523cc6"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.cc008ca7.js",
    "revision": "9689254a42d1ae9b6f4f0d87223335b7"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.d867603d.js",
    "revision": "06d281bb9cb3d536c28ce68469a19882"
  },
  {
    "url": "assets/js/page-了解架构设计.2bc687b2.js",
    "revision": "5254b98880537c57eedcd9f065f19e96"
  },
  {
    "url": "assets/js/page-从0开始学架构.6f8e2178.js",
    "revision": "7948a7021d9ebf8d008ab7373fbe0e82"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.874db71d.js",
    "revision": "29e10b524019815b35f0ebd0662f1cfe"
  },
  {
    "url": "assets/js/page-前言.722a88d7.js",
    "revision": "2ec6ac7d658a1621443f3f44d6c617b1"
  },
  {
    "url": "assets/js/page-实战.b78da111.js",
    "revision": "b305edb0861ee2ef4e88f43d038aa0c6"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.6244f51e.js",
    "revision": "0228df123d933079f64b08334c9ac14c"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.afc6b64a.js",
    "revision": "286a0402b509b424d6a351f6d836eb3e"
  },
  {
    "url": "assets/js/page-说不.099d14f2.js",
    "revision": "4b8eab82954bc7ff691e109c9fd4b311"
  },
  {
    "url": "assets/js/page-说是.bc021923.js",
    "revision": "8f0a9be66958c6eb9572f38867b05b48"
  },
  {
    "url": "assets/js/page-面向对象是什么.174a3bcf.js",
    "revision": "463ab209469fca5112e2603f6a603be4"
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
    "url": "assets/js/vendors~layout-Layout.0dbf7c46.js",
    "revision": "fabc5fa08fc16b357c02f7521a03ec3b"
  },
  {
    "url": "assets/js/vendors~photo-swipe.e50f3a49.js",
    "revision": "afc7a2c8c492625e36f5b8cf0a5db0ad"
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
    "url": "category/index.html",
    "revision": "e756442dfd59e4d7ef7b59316d9d1d8f"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "0b57bd049ab96ee3d429f3d72126dcfa"
  },
  {
    "url": "encrypt/index.html",
    "revision": "315b4771c29ef8f14e05471f2214b631"
  },
  {
    "url": "index.html",
    "revision": "72c34de15400a8e3563bd5dbaae1482d"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "678c1df1ef643361482bbb53be2f33be"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "c8a9f1e031181d05fa682a01b59c4f2f"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "d0ae2b4d80663fc647a2276898af8b84"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "59a1819edce6139a351033487cafae16"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "ca9b4f4d0e8975912c066bf903453656"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "5c48be1aafe3f75f9fae1d1b88efb3af"
  },
  {
    "url": "slide/index.html",
    "revision": "9b88adf7ece2a1d7a1a5188245116f17"
  },
  {
    "url": "star/index.html",
    "revision": "5551976a87a0928f9d9e4169fb922d1a"
  },
  {
    "url": "tag/index.html",
    "revision": "cf02891e151d6b58295984551f8bb7dd"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "c8a63b458057245573a5d47160e11523"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "f9d6f705b28df4ed374b0d70d53dd7f1"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "89daf669ab373bdbd60ddb4714b9cc9a"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "5ca9435b61eb04350fe1890af485e77d"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "94ca0787edd1e43c519e80081c993207"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "a05f4f4e5fd448f52c459ae486f5633f"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "cae02bcbfafa6e15a8ba53986fccf102"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "f8f97e5621ce97038e9714cb50d993ff"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "dd637ec7eb3b4f8a2fa94a64ec1bd223"
  },
  {
    "url": "timeline/index.html",
    "revision": "8fdc01c5084057981b66e13fe9d8fe10"
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
