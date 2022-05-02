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
    "revision": "9734855c43d4dff0a688978c8d94b881"
  },
  {
    "url": "article/index.html",
    "revision": "1acfd08e9f6f4f253e5f3ad4bfe40387"
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
    "url": "assets/css/0.styles.d0bc5918.css",
    "revision": "c1eb77329de790d09e28627f1342a41b"
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
    "url": "assets/js/app.e6a9f205.js",
    "revision": "10a867e299fac60e2792f1ed2a1d2e37"
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
    "url": "assets/js/page--3992e0e1.d49ab92a.js",
    "revision": "e4c00575196fe62d3a459dd98ab2c97c"
  },
  {
    "url": "assets/js/page--44a0de64.487467af.js",
    "revision": "d82060ab9737d8bae92fdd32ba8f4b91"
  },
  {
    "url": "assets/js/page--5f87f751.b750d627.js",
    "revision": "c1fa5178f5d89b21a506966e51beabb2"
  },
  {
    "url": "assets/js/page--7507ab0e.b6579281.js",
    "revision": "701fc9902d24b9f254059be85a26eb34"
  },
  {
    "url": "assets/js/page--ac2b465e.8b47f4ac.js",
    "revision": "085696b8c788c55ae29869b25b9c9189"
  },
  {
    "url": "assets/js/page--d1e0c466.b2332822.js",
    "revision": "27d6262555462bc61cc2991f28f60dde"
  },
  {
    "url": "assets/js/page-DRY原则.61301bc4.js",
    "revision": "f4e6388f05ffc48723f32c5b7b70beae"
  },
  {
    "url": "assets/js/page-KISS.35e13008.js",
    "revision": "72e0c314441c41eff137d5550b6234de"
  },
  {
    "url": "assets/js/page-LOD.19aa49ff.js",
    "revision": "1837928ac9a5a5edc575a4d1cc75b762"
  },
  {
    "url": "assets/js/page-SOLID.774414f8.js",
    "revision": "9cf16dec67d270827682dc4864e9ea49"
  },
  {
    "url": "assets/js/page-YAGNI.83d2d66a.js",
    "revision": "fef8ea3d35278c714775e9fcb6bf1f9f"
  },
  {
    "url": "assets/js/page-专业主义.b7f51522.js",
    "revision": "65ea5303932e7a053cc0b141a5119018"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.a6515cba.js",
    "revision": "007b1a08879bc8bfa7c0b8bb9bcfc044"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.a7f76ed9.js",
    "revision": "92e7836d62590686f104138a08396fec"
  },
  {
    "url": "assets/js/page-了解架构设计.1a5bc9e5.js",
    "revision": "5321dccebfaf3a332f87c5d0a8e782bd"
  },
  {
    "url": "assets/js/page-从0开始学架构.8991210d.js",
    "revision": "ca6e284b074151f03280b7548541e7c0"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.52fb2188.js",
    "revision": "8f063f5cc75766307939a166514a24a5"
  },
  {
    "url": "assets/js/page-前言.eb873ccd.js",
    "revision": "2fb517c14ed2e3ca409ce283778b4e74"
  },
  {
    "url": "assets/js/page-实战.aec7368d.js",
    "revision": "a6dd7cc06b3fc2f9c61c965ebb601fd6"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.259f4fff.js",
    "revision": "a72152b8fdd39dd20d8370984df167a2"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.dadf2416.js",
    "revision": "f905c65e1ac3eb2161808fce20a39669"
  },
  {
    "url": "assets/js/page-说不.7f866a23.js",
    "revision": "ab40fcb0c0c8839147778a16e8c2529b"
  },
  {
    "url": "assets/js/page-说是.45f443d1.js",
    "revision": "84982a1887f7a7da7e9b110b75b6361a"
  },
  {
    "url": "assets/js/page-重构.61d7a2c3.js",
    "revision": "a5f9cd3071caa11c1ff3fb0413c76caf"
  },
  {
    "url": "assets/js/page-金字塔原理.a0b47183.js",
    "revision": "56cd56e79097b554ed8201893649c4f5"
  },
  {
    "url": "assets/js/page-面向对象是什么.c3ee4b9b.js",
    "revision": "6726d914fd3154d2e0e047ede1bbdae1"
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
    "revision": "6dc4d6515f83e43ad098675074df369b"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "6faac101dbb84493a60377145df0027d"
  },
  {
    "url": "encrypt/index.html",
    "revision": "f8181db4d7ece0798b541933cf3173e7"
  },
  {
    "url": "index.html",
    "revision": "bc5951086cd8ea033cbf29c5a03807bf"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "2ec081c66e261ff9f1308b77d08497a6"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "c767fb36670c6f7bc562bcf1545bc931"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "70f6e0396a29388e6cb1c65c4d4db2c2"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "bdc158a18fce8f0f7f3d813309057922"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "9b84acaca11acbd471f270f517e20ccc"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "e38c535756cbc65702098d3a7bc08215"
  },
  {
    "url": "slide/index.html",
    "revision": "29dc166717ec0161da15704b12966257"
  },
  {
    "url": "star/index.html",
    "revision": "e6f988c050c9a9de6c7aebc28a492c61"
  },
  {
    "url": "tag/index.html",
    "revision": "86d7951f6759daa5da01369c820ae814"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/DRY/index.html",
    "revision": "b33c3a6ffb4a30466a89842dcc3d1e42"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/KISS/index.html",
    "revision": "80f080f566a471c60661aa4a8bc4f170"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/LOD/index.html",
    "revision": "42dd597c804c52d83c4e0bbb0ba8a6e7"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/practice/index.html",
    "revision": "252dd5bfd4fdb2b30122b7ba5890b1ef"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "c1a414ab0e3d22a8974eb28f34e11880"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/YAGNI/index.html",
    "revision": "eae62397e9714bfd73935bc76cab8f2f"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "748bab0a5fe7324e4e98a29745160f82"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "65031c53a67c56e0205bcc92d724a387"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "50f4914db462eeb3b44e14c4e63516c5"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/practice/index.html",
    "revision": "157565bb840147b39c49eb99edd4227a"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/refactor/index.html",
    "revision": "ef32a15144adcb4014043c9b7c20766f"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/standard/index.html",
    "revision": "39c3549ff36997b3e0d668d30620d105"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "b84c3a7e2a679dc6258265beea86f37e"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "c7baff181ce839f063ec6e1eef68cd64"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "1a5f1d228964b01be5dafc3070a06363"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "43f91e65cbce6829659514f23c220269"
  },
  {
    "url": "the-minto-pyramid-principle/index.html",
    "revision": "ca9a213fb1c8d13780119edddc35fb7e"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "bfafb6732c1bd6923f902673863f217f"
  },
  {
    "url": "timeline/index.html",
    "revision": "d4c9ca5139602c2372f2d43670ae8c7f"
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
