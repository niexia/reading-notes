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
    "revision": "f15e3b0e057d404cfe94601ea4ce7971"
  },
  {
    "url": "article/index.html",
    "revision": "d81c6717b2a23fe34f8cdf7955c0885d"
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
    "url": "assets/js/25.ae0dafbd.js",
    "revision": "2a4ff97fda7f9e688d39c5b97014053e"
  },
  {
    "url": "assets/js/26.8745758a.js",
    "revision": "67efd59bc393b31006caa51d9e5f49d9"
  },
  {
    "url": "assets/js/3.dce1afc6.js",
    "revision": "f9d76ae089d6e345da54d0647658fae6"
  },
  {
    "url": "assets/js/app.e4a04009.js",
    "revision": "a09d26fb4d52565ea9e46c66e74a94e3"
  },
  {
    "url": "assets/js/layout-Blog.846626cd.js",
    "revision": "49d434728a9603991759a5cd7d2d0870"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.8801acf6.js",
    "revision": "93a612c55bdda1bf922c8ee72f334b85"
  },
  {
    "url": "assets/js/layout-Slide.fbff9a57.js",
    "revision": "ecea0019d0b7752a0124a929d18295b2"
  },
  {
    "url": "assets/js/page--3992e0e1.b9fa6676.js",
    "revision": "56b998bf05439998067b14078362fef0"
  },
  {
    "url": "assets/js/page--44a0de64.7bcb16f5.js",
    "revision": "d739297f407978fc54d379c3476c6611"
  },
  {
    "url": "assets/js/page--ac2b465e.18a6ba60.js",
    "revision": "bd8f44649b973f76d0bccf1995915043"
  },
  {
    "url": "assets/js/page-专业主义.cc837050.js",
    "revision": "513884bf0a8da7d1735ae0869866a94f"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.fc114664.js",
    "revision": "39281e32121e3867fcdb5162c51d63e4"
  },
  {
    "url": "assets/js/page-了解架构设计.ca08f448.js",
    "revision": "d838b9202ff9952d7dca7bbfe70577e2"
  },
  {
    "url": "assets/js/page-从0开始学架构.9347711e.js",
    "revision": "c6695c1a8f45e54b9682db6ff68ef0e9"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.8d9ea009.js",
    "revision": "527920e15f95e73bd15559a225cc796f"
  },
  {
    "url": "assets/js/page-前言.8c6bfe18.js",
    "revision": "0fa94c17c6fdd9eb21052bb141afd7e8"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.4387771a.js",
    "revision": "cac348d8db8afe72f35ef4501507dbb6"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.10242c45.js",
    "revision": "16dc435da12ca439f1182b8e790a56b4"
  },
  {
    "url": "assets/js/page-说不.0dbcfc15.js",
    "revision": "b1e6ae6c98901828218646800f105c8a"
  },
  {
    "url": "assets/js/page-说是.b9ba821b.js",
    "revision": "4f0e5b662c8a4551f286981609ad3dc4"
  },
  {
    "url": "assets/js/page-面向对象是什么.5e31738f.js",
    "revision": "c8708815112714916b638cce11aa61fb"
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
    "url": "assets/js/vendors~layout-Layout.3a29b77a.js",
    "revision": "8ba73890fcb7aba3df6e6f295e116cd9"
  },
  {
    "url": "assets/js/vendors~photo-swipe.63e198ec.js",
    "revision": "795c728fbe3192d468d3835ab546ddef"
  },
  {
    "url": "category/index.html",
    "revision": "5203718a4c559b41e1c4678fb68c9215"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "46f70927adecd23f537a866d3e319aaa"
  },
  {
    "url": "encrypt/index.html",
    "revision": "8a3aee901cf6906e77c09e8db75c838e"
  },
  {
    "url": "index.html",
    "revision": "1c782c8486210aaf7f59a84cf3f8a39a"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "5e4ab8d07b7a75277d9580160fd5c3a6"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "b87829d731c8281053d19c121c26aeaa"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "57461a9e72009556fcc2efa75bcf5799"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "a46b69f0ac88dad224030c87668172f1"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "b064f8c74bd240cd3393132e8304ce3a"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "447199a49bb7ce32f587f5be22443e3c"
  },
  {
    "url": "slide/index.html",
    "revision": "a025353269e3efe9cec0a4ff1492a9a0"
  },
  {
    "url": "star/index.html",
    "revision": "95c3bc6571fcf82c70661634bbd46aff"
  },
  {
    "url": "tag/index.html",
    "revision": "f4034ac651d7dd87087bcd0d67881131"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "5c9f7a4af433373596466164c8ff5656"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "4a61ed57b048d5f7f44a99d3c8bae0d1"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "0075ed2183eb23192d02168d1f070a71"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "a80f548d3dac8feaeaa9ebbf3d85774c"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "c564f0002eb0e11bb5affabb77e42386"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "54de501a47fec64812b310d87c0d1709"
  },
  {
    "url": "timeline/index.html",
    "revision": "ce2cc3f42a9bcf41adeaf3103bb73a1a"
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
