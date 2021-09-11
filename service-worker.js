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
    "revision": "ae828c10dbb4ce88a78d964e72c70f30"
  },
  {
    "url": "article/index.html",
    "revision": "bd3ef0443a1af63c0105ecd9d7749b31"
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
    "url": "assets/js/21.0e985be0.js",
    "revision": "0193a76720909e77a8b3610fd402682e"
  },
  {
    "url": "assets/js/22.d32e7c32.js",
    "revision": "32a025c236db1634458ea1b2c2ed3524"
  },
  {
    "url": "assets/js/3.dce1afc6.js",
    "revision": "f9d76ae089d6e345da54d0647658fae6"
  },
  {
    "url": "assets/js/app.2f842212.js",
    "revision": "227661bff58a95be877aa123711f33e7"
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
    "url": "assets/js/page--036a775b.92577d0c.js",
    "revision": "562d4843f580b9485ee6717cbfdf327a"
  },
  {
    "url": "assets/js/page--558e210a.5e4cf37a.js",
    "revision": "3d1f325b548648e5e0e4e3d8ec389a1f"
  },
  {
    "url": "assets/js/page--97d3928c.5711f69b.js",
    "revision": "059e70e8ff77374072cc94de838fa5d0"
  },
  {
    "url": "assets/js/page-专业主义.a3f64a21.js",
    "revision": "96ee283314487534730c747f0c0df1d5"
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
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.e7d9e810.js",
    "revision": "5764a1aaf72f32970c5c416e96a9706c"
  },
  {
    "url": "assets/js/page-前言.d48883da.js",
    "revision": "92cb96f80e48e21c752c2f2f0d5eeeee"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.aee9fba7.js",
    "revision": "2b1bde4245d44f87decb9dd21f703095"
  },
  {
    "url": "assets/js/page-说不.6dac671b.js",
    "revision": "951ceda8310023582bec3635a8aa9cec"
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
    "url": "assets/js/vendors~layout-Layout.2a367880.js",
    "revision": "e363196518efd452f8a16cde94917479"
  },
  {
    "url": "assets/js/vendors~photo-swipe.4487d372.js",
    "revision": "436d891000e365bcf5851691c81265a1"
  },
  {
    "url": "category/index.html",
    "revision": "5a366b8278a83972b81c96e04666c015"
  },
  {
    "url": "encrypt/index.html",
    "revision": "e133aeefd082e687fe65b9d54534dbb8"
  },
  {
    "url": "index.html",
    "revision": "2192e1b594e2e4a13463380826464878"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "1175a44d29283e130b86599496f8aadd"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "b52868009d7ad773a6fcd1d32da39a42"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "53d7a596cc169654cc72d07f37b209ad"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "51c55242219ada37e4b0bae264e9575f"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "48f126df3fea333fffeffa569ef8788b"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "1400edb7e17c89c6ee06c605eb472b10"
  },
  {
    "url": "slide/index.html",
    "revision": "98d51f53a21ad87496861b21bb93c8b3"
  },
  {
    "url": "star/index.html",
    "revision": "bca431f430193e624214b99a2107cb4c"
  },
  {
    "url": "tag/index.html",
    "revision": "be7b6e4165b8abbf5bc5ce2d9c9b1b59"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "a6379780f040b5b373383608246746dd"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "5d910d90095861911a36bd6768688f41"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "cba6a972b8b89794e5fc73eaebf565ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "c36236ef0c423e6aaa0a4ea487aaf082"
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
