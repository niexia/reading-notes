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
    "revision": "04581104665f15ed0231bde58a861a7a"
  },
  {
    "url": "article/index.html",
    "revision": "73bcba770c15cdf9dec2f12e302d1ee4"
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
    "url": "assets/js/22.c82c2df0.js",
    "revision": "e6a67c733d0b242161bff75d754e4fb6"
  },
  {
    "url": "assets/js/23.0fd71e05.js",
    "revision": "4cbee848a728cc31118286f7d4f2c1d8"
  },
  {
    "url": "assets/js/3.dce1afc6.js",
    "revision": "f9d76ae089d6e345da54d0647658fae6"
  },
  {
    "url": "assets/js/app.1da0acf7.js",
    "revision": "2359a541ba0d799cab1ddd5893345696"
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
    "url": "assets/js/page--3992e0e1.8b193696.js",
    "revision": "0e268b7d70a11b90ccd36d727e2ab047"
  },
  {
    "url": "assets/js/page--44a0de64.a43a2b6e.js",
    "revision": "3e0bcaaceb2cdfdc52e570197c558f4d"
  },
  {
    "url": "assets/js/page--ac2b465e.2c6b7a51.js",
    "revision": "51eec835b8c161cdfb965519875c4041"
  },
  {
    "url": "assets/js/page-🍅前言.549433c2.js",
    "revision": "b18efbbd5931076fc89607b727fb46a9"
  },
  {
    "url": "assets/js/page-专业主义.5bc70283.js",
    "revision": "72eee934ff347300ced045b4abdf8bda"
  },
  {
    "url": "assets/js/page-了解架构设计.2e24a79f.js",
    "revision": "0f5e790921d0fcf4b10ef6dd0a60279b"
  },
  {
    "url": "assets/js/page-从0开始学架构.c09ccddd.js",
    "revision": "442690ee8bd791f435a9c3a7cf5e0e10"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.206d459d.js",
    "revision": "19fc02410d4b43c342574578c4eae7b2"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.34504c1a.js",
    "revision": "f29e314eae2d39b2a74d741335b61895"
  },
  {
    "url": "assets/js/page-说不.eddcd400.js",
    "revision": "7c60388a37e8e44c752fdb8e70bae7a5"
  },
  {
    "url": "assets/js/page-说是.bceb45dd.js",
    "revision": "f05bbc002a391db06bac2d882e391ca5"
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
    "url": "assets/js/vendors~layout-Layout.281ebd90.js",
    "revision": "0819a56aea2da015d9941682782e971a"
  },
  {
    "url": "assets/js/vendors~photo-swipe.02ce2996.js",
    "revision": "e3acc94b42d7a4c49179298e9bdb2a07"
  },
  {
    "url": "category/index.html",
    "revision": "6ad559a3408277fc846e63ef5d55238d"
  },
  {
    "url": "encrypt/index.html",
    "revision": "0629cc0db1671c49a8186f704265eb8d"
  },
  {
    "url": "index.html",
    "revision": "1a9dfa76eab1aee22bf0ff5817b28b92"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "c8108c624160740460ef8bff244e11d0"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "f8bc3d9cb678f69b903ab654cc0e3f19"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "31ad2cf8ab0b7e59cff9e324e5bd8136"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "71915f56c7cdf1561649d2b5a00ca63a"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "76f39e6283377ab9264d9d658150fcbd"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "d4740c749b50b6150ee97e5fe0016719"
  },
  {
    "url": "slide/index.html",
    "revision": "cd36dd1f97f9b738e7d3a1a4c8bbc8c6"
  },
  {
    "url": "star/index.html",
    "revision": "8309b75612388663a4a195e570d2060f"
  },
  {
    "url": "tag/index.html",
    "revision": "f282e16eff6d214db6305d1d89655408"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "dfda08b937f48566c57fdcc4171b5a31"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "ab9a2fb14b916b68c8f75e8b885d7910"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "af696c3fdb6c243fceb338260d8e409b"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "d95c9c37e2f2f4932bac3a2bd878ed87"
  },
  {
    "url": "timeline/index.html",
    "revision": "6598afc66b9164ead8916d888ccc7207"
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
