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
    "revision": "95a72e8477b45024cce52d5863c76129"
  },
  {
    "url": "article/index.html",
    "revision": "e97b0bc78e1ba51340bdc7454ff8ef92"
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
    "url": "assets/js/18.1e58b556.js",
    "revision": "30ffd6a6b22b80ed87543b5aaed3fa1e"
  },
  {
    "url": "assets/js/19.d70f1a8e.js",
    "revision": "6d3f0ffe1ac7022564f476b8ebb8cf98"
  },
  {
    "url": "assets/js/3.dce1afc6.js",
    "revision": "f9d76ae089d6e345da54d0647658fae6"
  },
  {
    "url": "assets/js/app.2e8dc26c.js",
    "revision": "616873d7f3bc191135bd3e369581f689"
  },
  {
    "url": "assets/js/layout-Blog.32d11e7f.js",
    "revision": "b68ac51d1e33785063d6af42f5ca11af"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.f485b618.js",
    "revision": "46c80fd2a64b40bdefa5fdb7af0889e8"
  },
  {
    "url": "assets/js/layout-Slide.cebd5114.js",
    "revision": "75f0e2b224d556ab98fc83611ca9605b"
  },
  {
    "url": "assets/js/page--036a775b.57f4b817.js",
    "revision": "c353b2fc73aa1e81e98c99e891b8bfc7"
  },
  {
    "url": "assets/js/page--558e210a.27935d6e.js",
    "revision": "d11669caade48dc9e1876915ff18a7a4"
  },
  {
    "url": "assets/js/page--97d3928c.c81da4c5.js",
    "revision": "ca3b43af692fbfb6358649eab207303d"
  },
  {
    "url": "assets/js/page-了解架构设计.511985c7.js",
    "revision": "714992410f0eb177b99479b68dcf17f1"
  },
  {
    "url": "assets/js/page-从0开始学架构.e9ca0961.js",
    "revision": "b2f24f9886090318c396e874fef8f77d"
  },
  {
    "url": "assets/js/page-前言.d859030c.js",
    "revision": "7a1b30c2750ce7707e1c641d4f0a9b1a"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.ab8b7a10.js",
    "revision": "65c5584fc4e9872a43fd0bd9242bfbf3"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.c02d2c5e.js",
    "revision": "84f476be1d40d3f896e27dce243f0d55"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.7f25c46c.js",
    "revision": "ed39d2f15160080ffb5e6c44d8680612"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b2dc2ede.js",
    "revision": "be2f7993f3423ea2cde4250d6a7d8dff"
  },
  {
    "url": "assets/js/vendors~photo-swipe.752b52e9.js",
    "revision": "dc52e07be160effb08af03760223fdfe"
  },
  {
    "url": "category/index.html",
    "revision": "256f3067f66bc18d8640d70626053e77"
  },
  {
    "url": "encrypt/index.html",
    "revision": "9dffb7d2caf63545b16d410e213b0a05"
  },
  {
    "url": "index.html",
    "revision": "93b65ec0b3b7e514bcf92ede0090c389"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "323ff42afe38f9b654af1120dc4db0e6"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "f67c235b0e4f9970f632fd9fbbf1c500"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "8d8187a6cfc67d6a296d634a89d0365b"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "144a4f384e5447716023b1605d5622e4"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "ad2232739e950fdc426b669d24770a61"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "c3900701db179a5a4e5e1ea872d439ea"
  },
  {
    "url": "slide/index.html",
    "revision": "d65967ae3ad9492029cdf0f60d92879e"
  },
  {
    "url": "star/index.html",
    "revision": "69ac71257709a36191111ca9b7c6f13d"
  },
  {
    "url": "tag/index.html",
    "revision": "81c380b96dd7023161a2a05de568861c"
  },
  {
    "url": "timeline/index.html",
    "revision": "5bb4454949249a9b2fa17b4790cbdf55"
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
