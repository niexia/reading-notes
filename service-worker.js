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
    "revision": "580da08af71ea5ea1e7d871db4b739f2"
  },
  {
    "url": "article/index.html",
    "revision": "c3ec2ba7bcadbb5aa6cbfd69f1f7deaa"
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
    "url": "assets/js/20.29a66739.js",
    "revision": "61af4a5f0e77c59e60eebaa144efffcb"
  },
  {
    "url": "assets/js/21.7d0ec45d.js",
    "revision": "85f0edab77f2154f134e3342bce7be10"
  },
  {
    "url": "assets/js/3.dce1afc6.js",
    "revision": "f9d76ae089d6e345da54d0647658fae6"
  },
  {
    "url": "assets/js/app.0bb168a6.js",
    "revision": "043c64c55c55643f0f2fcb1f91019067"
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
    "url": "assets/js/page--558e210a.5e4cf37a.js",
    "revision": "3d1f325b548648e5e0e4e3d8ec389a1f"
  },
  {
    "url": "assets/js/page--97d3928c.189523dc.js",
    "revision": "9e68cdfb3e8abbc2ce5f371ef8102c6a"
  },
  {
    "url": "assets/js/page-专业主义.52087ee6.js",
    "revision": "a623a945a1679010227f44f5f4b61134"
  },
  {
    "url": "assets/js/page-了解架构设计.1801b247.js",
    "revision": "384db039d69919b690e1cd91d1e9de6a"
  },
  {
    "url": "assets/js/page-从0开始学架构.452c55fd.js",
    "revision": "27cce9440320b6f3d7b1cfd9eed06baa"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.f62ab13c.js",
    "revision": "869955fc7a274b986c4909f938469552"
  },
  {
    "url": "assets/js/page-前言.d48883da.js",
    "revision": "92cb96f80e48e21c752c2f2f0d5eeeee"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.c7985211.js",
    "revision": "27a49520950c57663a7511a3b464350f"
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
    "url": "assets/js/vendors~layout-Layout.79d8d642.js",
    "revision": "f846a7f95d09ddb0f9d229546cb0bc9c"
  },
  {
    "url": "assets/js/vendors~photo-swipe.5b552896.js",
    "revision": "1a4cedeac9bf9fab76e1fcc7d7a81d15"
  },
  {
    "url": "category/index.html",
    "revision": "8af4bc514d976b8fa7209feb2a418246"
  },
  {
    "url": "encrypt/index.html",
    "revision": "38cba95923303f18e61e861467cf9fdd"
  },
  {
    "url": "index.html",
    "revision": "7ef7de6d17b7ff326ae21daa72d8e42c"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "756c211790369e613f4fb4bb33ecea98"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "e06214cd1cc141bbb447ab2984224f4f"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "14f4ef15d45417316651807214f954df"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "0b88ce1d2664c525617939c033952bca"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "23c1eb4be3f949a588bc2ef1ae6058fd"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "0adfcc815a6cef0d71f36730c21fcf59"
  },
  {
    "url": "slide/index.html",
    "revision": "d183176cc21b176ab6d88cf60fd0e0d8"
  },
  {
    "url": "star/index.html",
    "revision": "be0554835d8be68c02f83616e4d6a5b5"
  },
  {
    "url": "tag/index.html",
    "revision": "f10985da581738132f62826aa3ff2ba5"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "a3b5201fe5d7e09ccd326957ded1b4f8"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "368c362898cf92e5de095e3e7cdc4583"
  },
  {
    "url": "timeline/index.html",
    "revision": "74cc39d4db70b01e195fb87928839abd"
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
