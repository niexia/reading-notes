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
    "revision": "02b41589342c566a931bff01b78886e4"
  },
  {
    "url": "algo/array/array/index.html",
    "revision": "806cea2041de3b2aa96d589c237d196a"
  },
  {
    "url": "algo/backtracking-algorithm/backtracking-algorithm/index.html",
    "revision": "1d20d916d988f329d38085703c30ff18"
  },
  {
    "url": "algo/binary-search/binary-search/index.html",
    "revision": "dac4e03d44fba4b1108eedd90e70a8d0"
  },
  {
    "url": "algo/binary-search/deformation-of-binary-search/index.html",
    "revision": "bc759beaee26342517e3fdef2c814dff"
  },
  {
    "url": "algo/binary-tree/binary-search-tree/index.html",
    "revision": "f5553c9f405020aa94dc75b3438982ca"
  },
  {
    "url": "algo/binary-tree/binary-tree/index.html",
    "revision": "bfe641be7d964d3fc761f210b6d6227c"
  },
  {
    "url": "algo/binary-tree/red-black-tree/index.html",
    "revision": "d99b17fde2eeb36ca22edd2679994198"
  },
  {
    "url": "algo/divide-and-conquer/divide-and-conquer/index.html",
    "revision": "7d8eb2b62f2c129fbdc21082eb37726b"
  },
  {
    "url": "algo/dynamic-programming/dynamic-programming/index.html",
    "revision": "e10184f747b07da1395e5b4549fc400b"
  },
  {
    "url": "algo/graph/bfs-dfs/index.html",
    "revision": "88817084e2b888b96a3fec679ede0982"
  },
  {
    "url": "algo/graph/graph/index.html",
    "revision": "9ea60256f230836d02084c8f855c4e25"
  },
  {
    "url": "algo/greedy-algorithm/greedy-algorithm/index.html",
    "revision": "8b19c41e3255b14035cdeeb1bf6c36d7"
  },
  {
    "url": "algo/hash-algorithm/hash-algorithm/index.html",
    "revision": "2fb7a73d072377c97fa23bb6c962041b"
  },
  {
    "url": "algo/hash-table/design-hash-table/index.html",
    "revision": "0cb413a144d7b5a82b43848e454e1584"
  },
  {
    "url": "algo/hash-table/hash-table/index.html",
    "revision": "d65f5d04896a75df0e39e72e51f0a9a7"
  },
  {
    "url": "algo/heap/application-of-heap/index.html",
    "revision": "fd90dd6d5dc0a73b75e6c81fad2c836d"
  },
  {
    "url": "algo/heap/heap-and-heap-sort/index.html",
    "revision": "31ca34916d0d47d583fa2fea4fcfb06a"
  },
  {
    "url": "algo/index.html",
    "revision": "61d4b0d337c831fb85ef8a1a350e9c48"
  },
  {
    "url": "algo/linked-list/handwritten-linked-list-skills/index.html",
    "revision": "2c5f091457d9ee2da3e60a04082437b0"
  },
  {
    "url": "algo/linked-list/linked-list/index.html",
    "revision": "720ff2e6a35f9472cc84dac798a179fa"
  },
  {
    "url": "algo/queue/queue/index.html",
    "revision": "da37583f19bc1b9ccbdaf5ee222b5337"
  },
  {
    "url": "algo/recursion/recursion/index.html",
    "revision": "f3ea4ed0aeadfe45db1fb817b72c418d"
  },
  {
    "url": "algo/skip-list/skip-list/index.html",
    "revision": "72b1e58ec5c286bfb85445c05926437b"
  },
  {
    "url": "algo/sort/bubble-sort-insertion-sort-selection-sort/index.html",
    "revision": "bde733d202da5f1b528dee599108cc6e"
  },
  {
    "url": "algo/sort/bucket-sort-counting-sort-radix-sort/index.html",
    "revision": "c1e0c3b0f09a29a5e4062ad674df765f"
  },
  {
    "url": "algo/sort/merge-sort-quick-sort/index.html",
    "revision": "89c24fe07f35066af653433a01bdc053"
  },
  {
    "url": "algo/sort/sort-optimization/index.html",
    "revision": "e425f0dcfddc47191676d3d681ce50f8"
  },
  {
    "url": "algo/sort/sort/index.html",
    "revision": "f696ac05d4fb2c1eba1c8087071b8ac3"
  },
  {
    "url": "algo/stack/practice/index.html",
    "revision": "97e33b12b49da11ac7c3fda4f4976375"
  },
  {
    "url": "algo/stack/stack/index.html",
    "revision": "04f4be901a495b6a46b0217ed56a5ef2"
  },
  {
    "url": "algo/string-matching/BF-RK/index.html",
    "revision": "3c68c062c5957f005129b46491f5098b"
  },
  {
    "url": "algo/string-matching/BM/index.html",
    "revision": "8f0f3505e729a6e094e7141a163cedff"
  },
  {
    "url": "algo/string-matching/KMP/index.html",
    "revision": "832811c712c05459a1ee5040492d5284"
  },
  {
    "url": "algo/Tire-tree/Tire-tree/index.html",
    "revision": "a8d14dc826999da9958b18708887ca93"
  },
  {
    "url": "article/index.html",
    "revision": "b89ccc8295d3440aeb09c19641f2d2b1"
  },
  {
    "url": "assets/algorithm-backtrackAlgorithm-eg1.png",
    "revision": "dac3ed2256b05dadab62fbc2c9817bfa"
  },
  {
    "url": "assets/algorithm-bubbleSort.png",
    "revision": "22be0e27c668e31ad944203736bb38c4"
  },
  {
    "url": "assets/algorithm-divideAndConquerAlgorithms-eg1.png",
    "revision": "ee54330bec5183333dcbffd4434338d7"
  },
  {
    "url": "assets/algorithm-graph-1.png",
    "revision": "35c85ce16650be9c25fae7dda893b189"
  },
  {
    "url": "assets/algorithm-graph-2.png",
    "revision": "e34cd96f671c739a7b7d4e5174692060"
  },
  {
    "url": "assets/algorithm-graph-3.png",
    "revision": "863542931611a111499330ba33182555"
  },
  {
    "url": "assets/algorithm-graph-adjacencyList.png",
    "revision": "703d61af17b1faeda5824e074af8bbd5"
  },
  {
    "url": "assets/algorithm-graph-adjacencyListAndInverseAdjacencyList.png",
    "revision": "e3ecdcdedb9a3def10d350c4e32a6168"
  },
  {
    "url": "assets/algorithm-graph-adjacencyMatrix.png",
    "revision": "c1e3c6882928bb1db36baf199c20f790"
  },
  {
    "url": "assets/algorithm-graph-database.png",
    "revision": "f6a6d0f76cf92c9abbbf5f6754a7d3b2"
  },
  {
    "url": "assets/algorithm-greedyAlgorithm-eg1.png",
    "revision": "99ed3bce2988375f8791b3d0eadbf7c3"
  },
  {
    "url": "assets/algorithm-greedyAlgorithm-eg2.png",
    "revision": "d0d7022d5a27cc5bcf32a6038f847fb0"
  },
  {
    "url": "assets/algorithm-insertionSort.png",
    "revision": "9c7532da187d4f954f6a03f62779468b"
  },
  {
    "url": "assets/algorithm-recursive-replicationComputation.png",
    "revision": "e2a229c385291a96da645c299a159607"
  },
  {
    "url": "assets/algorithm-selectionSort.png",
    "revision": "6f6ae80376699ebf34c5e785e4f0bf50"
  },
  {
    "url": "assets/algorithm-stringMatching-BF.png",
    "revision": "af7009274717149fd4fbff88d7b0ff17"
  },
  {
    "url": "assets/algorithm-stringMatching-RK1.png",
    "revision": "59c097c80bb0fe7e553018d84d720f68"
  },
  {
    "url": "assets/algorithm-stringMatching-RK2.png",
    "revision": "b8805494ea4207eb8fb02d76b3936996"
  },
  {
    "url": "assets/algorithm-stringMatching-RK3.png",
    "revision": "a34038cff655928b729eb910fcdc142d"
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
    "url": "assets/css/0.styles.9772cc4e.css",
    "revision": "0545ffb1e5ea1041a93e0f1297b57243"
  },
  {
    "url": "assets/dataStructure-complexity.png",
    "revision": "8ad8113fd1b0fd80226bc843df9d9f18"
  },
  {
    "url": "assets/dataStructure-HashTable-delete.png",
    "revision": "840a8a2ca8f2f9aa790dcd0344615c0c"
  },
  {
    "url": "assets/dataStructure-HashTable-dynamicCapacity.png",
    "revision": "1263e28da3b7176771a6fe45e48da91e"
  },
  {
    "url": "assets/dataStructure-HashTable-find.png",
    "revision": "1c1601361c6397532929c2f73373f2eb"
  },
  {
    "url": "assets/dataStructure-HashTable-insert.png",
    "revision": "36cc3e80629e0c008ca3da6ae7c18858"
  },
  {
    "url": "assets/dataStructure-HashTable-linked.png",
    "revision": "9a4a80f32346c19952a6d042badb16d7"
  },
  {
    "url": "assets/dataStructure-HashTable-notFound.png",
    "revision": "2e7ed55bc8406a9ad6b89ad6b5af9911"
  },
  {
    "url": "assets/dataStructure-heap-createHeap-complexity.png",
    "revision": "44398d0e3562b0a3ebaf882a920020f9"
  },
  {
    "url": "assets/dataStructure-heap-createHeap.png",
    "revision": "e17d5663fe2deae73a9762710df452d7"
  },
  {
    "url": "assets/dataStructure-heap-delete.png",
    "revision": "507e6fa307e5cf8351f3c37ec2086b98"
  },
  {
    "url": "assets/dataStructure-heap-deleteHeapify.png",
    "revision": "551b4aabd879bbec412fcf1f772f6944"
  },
  {
    "url": "assets/dataStructure-heap-demo.png",
    "revision": "7370f20e7b4ba321365e5b30921733b0"
  },
  {
    "url": "assets/dataStructure-heap-heapify.png",
    "revision": "cbc875a78fd3585f65be04cb2a7bf45a"
  },
  {
    "url": "assets/dataStructure-heap-sort.png",
    "revision": "1c1a22793d64f4ceb5f51ab25663a49f"
  },
  {
    "url": "assets/dataStructure-heap-store.png",
    "revision": "5304ffa29e6c24d4f72d7b4a1a140f53"
  },
  {
    "url": "assets/dataStructure-linked-circularLinkedList.png",
    "revision": "80cb20379dc36557f2373f238586a8e5"
  },
  {
    "url": "assets/dataStructure-linked-cycleDetection.png",
    "revision": "ff78a55e015621256e6ff129a0c3ac39"
  },
  {
    "url": "assets/dataStructure-linked-doubleCircularLinkedList.png",
    "revision": "8630853b7f3e33af0ec49c0374c8f24a"
  },
  {
    "url": "assets/dataStructure-linked-doubleLinkedList.png",
    "revision": "8faf8af48cc6e785e24226c7e2417202"
  },
  {
    "url": "assets/dataStructure-linked-insertAndDelete.png",
    "revision": "ec323798f2ae7c42934b5acd169219b9"
  },
  {
    "url": "assets/dataStructure-linked-singleLinkedList.png",
    "revision": "f53a9eb88ddb1db63c28d84ee2a190ac"
  },
  {
    "url": "assets/dataStructure-linked-tips-eg1.png",
    "revision": "ff4560e8f1bba9a2dfba1a2c9283a635"
  },
  {
    "url": "assets/dataStructure-linked-tips-eg2.png",
    "revision": "851e563cd59570337fdfc9e55ca13031"
  },
  {
    "url": "assets/dataStructure-queue-circularQueue.jpg",
    "revision": "c29528b0e30aa68a93b81bdb7af9d3d6"
  },
  {
    "url": "assets/dataStructure-queue.png",
    "revision": "5cb9080f21dc10e70a0359437b40064d"
  },
  {
    "url": "assets/dataStructure-skipList-linked.png",
    "revision": "6b07b78805b83809088158840e5253f9"
  },
  {
    "url": "assets/dataStructure-skipList-math.png",
    "revision": "d2235462b35125331c0bbb0fe556ee05"
  },
  {
    "url": "assets/dataStructure-skipList-multipleInsert.png",
    "revision": "8bd65d37d77aa262a7cd568b5a0efb40"
  },
  {
    "url": "assets/dataStructure-skipList-oneLay.png",
    "revision": "a2fb9640ff048bf3e8c589fb82b7c7a7"
  },
  {
    "url": "assets/dataStructure-skipList-threeLays.png",
    "revision": "9dfb55bfa854a3345b6643f7ba1f6f3f"
  },
  {
    "url": "assets/dataStructure-skipList-twoLays.png",
    "revision": "3b958037133bbfade9dafbd4c4775278"
  },
  {
    "url": "assets/dataStructure-stack.jpg",
    "revision": "981e2984db62f97435e4bbe42e0b6339"
  },
  {
    "url": "assets/dataStructure-tire-eg1.png",
    "revision": "6d1322eae65060aa97e9aa10dff9c413"
  },
  {
    "url": "assets/dataStructure-tire-eg2.png",
    "revision": "df796e56a4ea9d0621d8a49a96950e29"
  },
  {
    "url": "assets/dataStructure-tire-eg3.png",
    "revision": "5c72db1b905238826f6428b2372bcd41"
  },
  {
    "url": "assets/dataStructure-tire-eg4.png",
    "revision": "eb6ec34469c0c329554de1d30aedef5f"
  },
  {
    "url": "assets/dataStructure-tire-eg5.png",
    "revision": "12baf12642cfd0db3c9fa5e7f701a00e"
  },
  {
    "url": "assets/dataStructure-tire-eg6.png",
    "revision": "467a95ed8b9f29b8364d1c521d014684"
  },
  {
    "url": "assets/dataStructure-tire-eg7.png",
    "revision": "e8bd235dcd0fdced26fce67151efb930"
  },
  {
    "url": "assets/dataStructure-tree-balancedTree.png",
    "revision": "8ab6f75b97d99cd146539498cbf04a4e"
  },
  {
    "url": "assets/dataStructure-tree-binarySearchTree.png",
    "revision": "04c88bd01766039a800f25fdfe730ab7"
  },
  {
    "url": "assets/dataStructure-tree-binarySearchTree2.png",
    "revision": "66812b27c927e8b627e60fe0705fa3c2"
  },
  {
    "url": "assets/dataStructure-tree-binaryTree-arrayStore.png",
    "revision": "bf3c63e35031f8e378271f9da63bc63c"
  },
  {
    "url": "assets/dataStructure-tree-binaryTree-linkedStore.png",
    "revision": "7da993062abf3e904932b5cac59c49ff"
  },
  {
    "url": "assets/dataStructure-tree-binaryTree.png",
    "revision": "aa38250eeae08efa76eeb0d9e37bcf40"
  },
  {
    "url": "assets/dataStructure-tree-example.png",
    "revision": "5b3c334462a55a5fcc96a259c4cfd54c"
  },
  {
    "url": "assets/dataStructure-tree-RebBlackTree.png",
    "revision": "50bfb18b294d43c69b25925bb5c278a6"
  },
  {
    "url": "assets/dataStructure-tree.png",
    "revision": "da939a19735245ba2daf25e99cfe195f"
  },
  {
    "url": "assets/design-patterns-multi-threaded-safe.png",
    "revision": "c0878babc35043bc98f3199b9c70553d"
  },
  {
    "url": "assets/design-patterns-multi-threaded.png",
    "revision": "25d492c5c364dcc211b65fcb03e6b009"
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
    "url": "assets/img/algorithm-backtrackAlgorithm-eg1.dac3ed22.png",
    "revision": "dac3ed2256b05dadab62fbc2c9817bfa"
  },
  {
    "url": "assets/img/algorithm-bubbleSort.22be0e27.png",
    "revision": "22be0e27c668e31ad944203736bb38c4"
  },
  {
    "url": "assets/img/algorithm-divideAndConquerAlgorithms-eg1.ee54330b.png",
    "revision": "ee54330bec5183333dcbffd4434338d7"
  },
  {
    "url": "assets/img/algorithm-graph-adjacencyList.703d61af.png",
    "revision": "703d61af17b1faeda5824e074af8bbd5"
  },
  {
    "url": "assets/img/algorithm-graph-adjacencyListAndInverseAdjacencyList.e3ecdcde.png",
    "revision": "e3ecdcdedb9a3def10d350c4e32a6168"
  },
  {
    "url": "assets/img/algorithm-graph-adjacencyMatrix.c1e3c688.png",
    "revision": "c1e3c6882928bb1db36baf199c20f790"
  },
  {
    "url": "assets/img/algorithm-greedyAlgorithm-eg1.99ed3bce.png",
    "revision": "99ed3bce2988375f8791b3d0eadbf7c3"
  },
  {
    "url": "assets/img/algorithm-insertionSort.9c7532da.png",
    "revision": "9c7532da187d4f954f6a03f62779468b"
  },
  {
    "url": "assets/img/algorithm-selectionSort.6f6ae803.png",
    "revision": "6f6ae80376699ebf34c5e785e4f0bf50"
  },
  {
    "url": "assets/img/algorithm-stringMatching-BF.af700927.png",
    "revision": "af7009274717149fd4fbff88d7b0ff17"
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
    "url": "assets/img/dataStructure-complexity.8ad8113f.png",
    "revision": "8ad8113fd1b0fd80226bc843df9d9f18"
  },
  {
    "url": "assets/img/dataStructure-HashTable-delete.840a8a2c.png",
    "revision": "840a8a2ca8f2f9aa790dcd0344615c0c"
  },
  {
    "url": "assets/img/dataStructure-HashTable-dynamicCapacity.1263e28d.png",
    "revision": "1263e28da3b7176771a6fe45e48da91e"
  },
  {
    "url": "assets/img/dataStructure-HashTable-find.1c160136.png",
    "revision": "1c1601361c6397532929c2f73373f2eb"
  },
  {
    "url": "assets/img/dataStructure-HashTable-insert.36cc3e80.png",
    "revision": "36cc3e80629e0c008ca3da6ae7c18858"
  },
  {
    "url": "assets/img/dataStructure-HashTable-linked.9a4a80f3.png",
    "revision": "9a4a80f32346c19952a6d042badb16d7"
  },
  {
    "url": "assets/img/dataStructure-HashTable-notFound.2e7ed55b.png",
    "revision": "2e7ed55bc8406a9ad6b89ad6b5af9911"
  },
  {
    "url": "assets/img/dataStructure-heap-createHeap-complexity.44398d0e.png",
    "revision": "44398d0e3562b0a3ebaf882a920020f9"
  },
  {
    "url": "assets/img/dataStructure-heap-createHeap.e17d5663.png",
    "revision": "e17d5663fe2deae73a9762710df452d7"
  },
  {
    "url": "assets/img/dataStructure-heap-delete.507e6fa3.png",
    "revision": "507e6fa307e5cf8351f3c37ec2086b98"
  },
  {
    "url": "assets/img/dataStructure-heap-deleteHeapify.551b4aab.png",
    "revision": "551b4aabd879bbec412fcf1f772f6944"
  },
  {
    "url": "assets/img/dataStructure-heap-demo.7370f20e.png",
    "revision": "7370f20e7b4ba321365e5b30921733b0"
  },
  {
    "url": "assets/img/dataStructure-heap-heapify.cbc875a7.png",
    "revision": "cbc875a78fd3585f65be04cb2a7bf45a"
  },
  {
    "url": "assets/img/dataStructure-heap-sort.1c1a2279.png",
    "revision": "1c1a22793d64f4ceb5f51ab25663a49f"
  },
  {
    "url": "assets/img/dataStructure-heap-store.5304ffa2.png",
    "revision": "5304ffa29e6c24d4f72d7b4a1a140f53"
  },
  {
    "url": "assets/img/dataStructure-linked-doubleCircularLinkedList.8630853b.png",
    "revision": "8630853b7f3e33af0ec49c0374c8f24a"
  },
  {
    "url": "assets/img/dataStructure-linked-insertAndDelete.ec323798.png",
    "revision": "ec323798f2ae7c42934b5acd169219b9"
  },
  {
    "url": "assets/img/dataStructure-linked-tips-eg2.851e563c.png",
    "revision": "851e563cd59570337fdfc9e55ca13031"
  },
  {
    "url": "assets/img/dataStructure-skipList-multipleInsert.8bd65d37.png",
    "revision": "8bd65d37d77aa262a7cd568b5a0efb40"
  },
  {
    "url": "assets/img/dataStructure-skipList-oneLay.a2fb9640.png",
    "revision": "a2fb9640ff048bf3e8c589fb82b7c7a7"
  },
  {
    "url": "assets/img/dataStructure-skipList-threeLays.9dfb55bf.png",
    "revision": "9dfb55bfa854a3345b6643f7ba1f6f3f"
  },
  {
    "url": "assets/img/dataStructure-skipList-twoLays.3b958037.png",
    "revision": "3b958037133bbfade9dafbd4c4775278"
  },
  {
    "url": "assets/img/dataStructure-stack.981e2984.jpg",
    "revision": "981e2984db62f97435e4bbe42e0b6339"
  },
  {
    "url": "assets/img/dataStructure-tire-eg1.6d1322ea.png",
    "revision": "6d1322eae65060aa97e9aa10dff9c413"
  },
  {
    "url": "assets/img/dataStructure-tire-eg2.df796e56.png",
    "revision": "df796e56a4ea9d0621d8a49a96950e29"
  },
  {
    "url": "assets/img/dataStructure-tire-eg3.5c72db1b.png",
    "revision": "5c72db1b905238826f6428b2372bcd41"
  },
  {
    "url": "assets/img/dataStructure-tire-eg4.eb6ec344.png",
    "revision": "eb6ec34469c0c329554de1d30aedef5f"
  },
  {
    "url": "assets/img/dataStructure-tire-eg5.12baf126.png",
    "revision": "12baf12642cfd0db3c9fa5e7f701a00e"
  },
  {
    "url": "assets/img/dataStructure-tire-eg6.467a95ed.png",
    "revision": "467a95ed8b9f29b8364d1c521d014684"
  },
  {
    "url": "assets/img/dataStructure-tire-eg7.e8bd235d.png",
    "revision": "e8bd235dcd0fdced26fce67151efb930"
  },
  {
    "url": "assets/img/dataStructure-tree-balancedTree.8ab6f75b.png",
    "revision": "8ab6f75b97d99cd146539498cbf04a4e"
  },
  {
    "url": "assets/img/dataStructure-tree-binarySearchTree.04c88bd0.png",
    "revision": "04c88bd01766039a800f25fdfe730ab7"
  },
  {
    "url": "assets/img/dataStructure-tree-binarySearchTree2.66812b27.png",
    "revision": "66812b27c927e8b627e60fe0705fa3c2"
  },
  {
    "url": "assets/img/dataStructure-tree-binaryTree-arrayStore.bf3c63e3.png",
    "revision": "bf3c63e35031f8e378271f9da63bc63c"
  },
  {
    "url": "assets/img/dataStructure-tree-binaryTree-linkedStore.7da99306.png",
    "revision": "7da993062abf3e904932b5cac59c49ff"
  },
  {
    "url": "assets/img/dataStructure-tree-binaryTree.aa38250e.png",
    "revision": "aa38250eeae08efa76eeb0d9e37bcf40"
  },
  {
    "url": "assets/img/dataStructure-tree-example.5b3c3344.png",
    "revision": "5b3c334462a55a5fcc96a259c4cfd54c"
  },
  {
    "url": "assets/img/dataStructure-tree-RebBlackTree.50bfb18b.png",
    "revision": "50bfb18b294d43c69b25925bb5c278a6"
  },
  {
    "url": "assets/img/dataStructure-tree.da939a19.png",
    "revision": "da939a19735245ba2daf25e99cfe195f"
  },
  {
    "url": "assets/img/default-skin.b257fa9c.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "assets/img/design-patterns-multi-threaded-safe.c0878bab.png",
    "revision": "c0878babc35043bc98f3199b9c70553d"
  },
  {
    "url": "assets/img/design-patterns-multi-threaded.25d492c5.png",
    "revision": "25d492c5c364dcc211b65fcb03e6b009"
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
    "url": "assets/js/3.832dc784.js",
    "revision": "111726ac022e074b82bda6b26dc763fc"
  },
  {
    "url": "assets/js/73.ab0e76f6.js",
    "revision": "6179bc16ed94b86c8234d479b1bfbd85"
  },
  {
    "url": "assets/js/74.668f8b56.js",
    "revision": "4d09ccc6603e7684477ae37403668f2c"
  },
  {
    "url": "assets/js/app.8bb7ee81.js",
    "revision": "d91e7fb7d5611b96b2925100a064351f"
  },
  {
    "url": "assets/js/layout-Blog.5eb9853e.js",
    "revision": "ccc328bf1648040ac6286370cabdc6b9"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.4b7d9d39.js",
    "revision": "4ff05e24612dc72e849e12c6d3d7e70b"
  },
  {
    "url": "assets/js/layout-Slide.82e33c92.js",
    "revision": "a9f4a52dc9b57762a68affad78902413"
  },
  {
    "url": "assets/js/page--25410731.60d18da4.js",
    "revision": "3e8c9d8a8ae5f836686d0e7ac32f005e"
  },
  {
    "url": "assets/js/page--3992e0e1.35fb3708.js",
    "revision": "ed484a702efbbee5fa9d0412d5fd84bb"
  },
  {
    "url": "assets/js/page--44a0de64.52f28ad0.js",
    "revision": "fdf0325563b5e05d00ddc07ecdd19015"
  },
  {
    "url": "assets/js/page--4855b8f6.bae76056.js",
    "revision": "7007eb66d238a3c4af1a56f674b78958"
  },
  {
    "url": "assets/js/page--5f87f751.6b55c4b9.js",
    "revision": "5aa42a9c9c22cd903fe77e6476e2d7b0"
  },
  {
    "url": "assets/js/page--7507ab0e.99dff375.js",
    "revision": "0ba65566b2e72948a2a373352a02267f"
  },
  {
    "url": "assets/js/page--ac2b465e.f7160225.js",
    "revision": "b7ffeade3209b603cb4432f039a5173b"
  },
  {
    "url": "assets/js/page--d1e0c466.2b1910d0.js",
    "revision": "55521cae3ab1e90f6d0d54382a67235a"
  },
  {
    "url": "assets/js/page-BF算法和RK算法.a662a423.js",
    "revision": "778bf09b92610bad4fe713efb6b458b7"
  },
  {
    "url": "assets/js/page-DRY.ada6b95f.js",
    "revision": "0193ffa3ef558beba561884548193519"
  },
  {
    "url": "assets/js/page-KISS.b6f299c9.js",
    "revision": "4ba76790293cd0ac6f6383480bcc7263"
  },
  {
    "url": "assets/js/page-LOD.8589db1b.js",
    "revision": "d0741634f37574b00cf02ed430eb1e08"
  },
  {
    "url": "assets/js/page-SOLID.173a911a.js",
    "revision": "10a674a97061cd6da052322e8fdd1e6d"
  },
  {
    "url": "assets/js/page-Tire树.51dac316.js",
    "revision": "439fbd5427edffc900aee9801c6b6803"
  },
  {
    "url": "assets/js/page-YAGNI.0b205f1a.js",
    "revision": "0e85d39bffcba09bc4848e55202998c2"
  },
  {
    "url": "assets/js/page-专业主义.257b25f6.js",
    "revision": "004b4dec5b4adacdf0201f7b7e4e01d6"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.077e9f45.js",
    "revision": "20b9b18a11bfc6fa3556f283c2c588b4"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.6200cf77.js",
    "revision": "d87979d32a89adbf82ac02f5a0e6d449"
  },
  {
    "url": "assets/js/page-了解架构设计.6b953858.js",
    "revision": "d5b38e2c300a822cec533c1654b1c1b3"
  },
  {
    "url": "assets/js/page-二分查找.1e1cbd65.js",
    "revision": "7c118a7a91bdb0a53366659d99384f0c"
  },
  {
    "url": "assets/js/page-二分查找的变形.54336bf2.js",
    "revision": "0eda93b1eca6f13a82cb4f880542056b"
  },
  {
    "url": "assets/js/page-二叉查找树.88f76603.js",
    "revision": "0dd4d35d22807a201f0944114ca6ad12"
  },
  {
    "url": "assets/js/page-二叉树.001fd545.js",
    "revision": "f4c503ab880fd9f82c1aedc7092e797f"
  },
  {
    "url": "assets/js/page-介绍.cedc487b.js",
    "revision": "127204273d4e4c99497188a70deabdc6"
  },
  {
    "url": "assets/js/page-从0开始学架构.a1221b62.js",
    "revision": "738d409ecd8f8a66726497c0f1b41fb8"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.f3d2f19b.js",
    "revision": "16a9b9d903356bbc6aacc96397d0307c"
  },
  {
    "url": "assets/js/page-冒泡、插入和选择排序.49e78e9a.js",
    "revision": "f8853d3fa2412cbd2c46902c46c7e93c"
  },
  {
    "url": "assets/js/page-分治算法.748ece70.js",
    "revision": "dd8371adbf1d568598250aff34d16d36"
  },
  {
    "url": "assets/js/page-前言.98967410.js",
    "revision": "ec647862904acddcc852c6d77db7bbac"
  },
  {
    "url": "assets/js/page-动态规划.fd388d03.js",
    "revision": "177213d564b45d02ec13370d1b1e6dce"
  },
  {
    "url": "assets/js/page-单例模式.303b9f99.js",
    "revision": "6c1ea30a232ff0b11cc966a22b5d0cab"
  },
  {
    "url": "assets/js/page-哈希算法.d8dcf231.js",
    "revision": "b1506db1d28c69f72b03d027a2fbb346"
  },
  {
    "url": "assets/js/page-回溯算法.5fad58a3.js",
    "revision": "9253a6ac1916777c97a67393d58d8cda"
  },
  {
    "url": "assets/js/page-图.1c6f525a.js",
    "revision": "46314176cc416e472f00e7f26fb5773e"
  },
  {
    "url": "assets/js/page-堆.b12487c2.js",
    "revision": "3f84592a3ee0a2b78abbf4d19d0c14d8"
  },
  {
    "url": "assets/js/page-堆的应用.150377cd.js",
    "revision": "7e5a413a3cdbc31db18e5fc15d9977ce"
  },
  {
    "url": "assets/js/page-实战.9d68d105.js",
    "revision": "9a2fa69d76d3ac20285a13d514ea4e4b"
  },
  {
    "url": "assets/js/page-工厂模式.481119e5.js",
    "revision": "7a086627fc7bf7f16ece936b78c00f0e"
  },
  {
    "url": "assets/js/page-归并排序和快速排序.03ee5692.js",
    "revision": "77030a235c147abc7e8a9dc1df5599a5"
  },
  {
    "url": "assets/js/page-手写链表的技巧.7456b309.js",
    "revision": "d0465c08e3fe696b8f50715d4cc93a1b"
  },
  {
    "url": "assets/js/page-排序.88075437.js",
    "revision": "76e4dadadb1f561448d25560ad80451f"
  },
  {
    "url": "assets/js/page-排序优化.972c8463.js",
    "revision": "5fd272e354001502d43b9a0229ba2dd8"
  },
  {
    "url": "assets/js/page-散列表.e802efed.js",
    "revision": "99681708a771b765232fdf1de7bcc2a0"
  },
  {
    "url": "assets/js/page-数组.bba08247.js",
    "revision": "fd9dbef29e68cd798a02a3da48b74f80"
  },
  {
    "url": "assets/js/page-栈.c9f3e88a.js",
    "revision": "1bb4a6e9f15862bd1961b95588cd6aa1"
  },
  {
    "url": "assets/js/page-桶排序、计数排序和基数排序.d0db807d.js",
    "revision": "ddd92b008dc5d02f470865e68b5a6e15"
  },
  {
    "url": "assets/js/page-深度优先和广度优先搜索.7876bb70.js",
    "revision": "1cee52a169dac8aed130c31994632a7c"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.9b674b29.js",
    "revision": "d29989e2c389912792c30bf7134a2faa"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.ee896c59.js",
    "revision": "593d93d8117ba2edb2ce836dd747b849"
  },
  {
    "url": "assets/js/page-红黑树.4fa0a43f.js",
    "revision": "2348caab20ca7490d91ac19422da221a"
  },
  {
    "url": "assets/js/page-练习.1e442784.js",
    "revision": "94a25852c883b4ab9d133b14eba7efa6"
  },
  {
    "url": "assets/js/page-设计散列表.248e6354.js",
    "revision": "afa63f6f8a8d896e2bdeb030b4f25154"
  },
  {
    "url": "assets/js/page-说不.4525b60d.js",
    "revision": "ea1387aa42034e393a9f2ac7a0419a31"
  },
  {
    "url": "assets/js/page-说是.6043cd86.js",
    "revision": "6a626e843561cca546c8efa631a3960c"
  },
  {
    "url": "assets/js/page-贪心算法.72be82ef.js",
    "revision": "769369afb9e921b0bc28fb2f86692a58"
  },
  {
    "url": "assets/js/page-跳表.bbe21187.js",
    "revision": "4438f987d3fbd68034ba458edb0e50cc"
  },
  {
    "url": "assets/js/page-递归.983254a3.js",
    "revision": "23c7b714f49b03eb7bb54a74290d8a12"
  },
  {
    "url": "assets/js/page-重构.fe063ed3.js",
    "revision": "397c8e6da40407f0260d54988a70c1b8"
  },
  {
    "url": "assets/js/page-金字塔原理.75c9d90e.js",
    "revision": "d060b1e82e3e4fa9e8952e8761a9e8f2"
  },
  {
    "url": "assets/js/page-链表.b517bfd4.js",
    "revision": "bb9c39f5e9336d419cfe00959cb4d833"
  },
  {
    "url": "assets/js/page-队列.8176978c.js",
    "revision": "9771569a6ce8eea3137734d37b70f26f"
  },
  {
    "url": "assets/js/page-面向对象是什么.57a1b465.js",
    "revision": "1f705343be0d7b03830e64af6a934583"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.9b90199b.js",
    "revision": "806c9b55cad916d8d14139a897a49269"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.c1acbf4e.js",
    "revision": "dc70e941b8c4bf954be2a39183ca24b5"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b9c2e4d9.js",
    "revision": "c17fbe2b39b242e80276fdb74931ec60"
  },
  {
    "url": "assets/js/vendors~photo-swipe.5aab1745.js",
    "revision": "ef965b1d6e2aa6e5930a4640b085d783"
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
    "revision": "6d3bc2a75bc88430ff35ff61ea259719"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "92942b2e7680b83e6b863fe93e8aee98"
  },
  {
    "url": "encrypt/index.html",
    "revision": "231ed26cb7c48668c20088fcd1c544f0"
  },
  {
    "url": "index.html",
    "revision": "94eb6518834a6b29da1e85c9767b8739"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "e82a66dde15df8d152e9b73000898baa"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "8592d52872b85b2e14dffbec5a3b00ab"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "c3791961892fea57f1706fc3ae81a56e"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "5fb365a66e510e03e9ed4eb2b55808ff"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "811e28cd678a5420bd66889eb92b0b2e"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "2c25181b75f95f2bfb4f6a9add87535d"
  },
  {
    "url": "slide/index.html",
    "revision": "4a674a26f46969fd6f4b116d0ea6b6ce"
  },
  {
    "url": "star/index.html",
    "revision": "6e97c6c0d53e69e1a49ac597f4e65b09"
  },
  {
    "url": "tag/index.html",
    "revision": "98d1ffc8ddb7faeaee86b092d25c389b"
  },
  {
    "url": "the-beauty-of-design-patterns/design-patterns/create-type/factory-design-pattern/index.html",
    "revision": "fd09c0e4bed664e294f2e2f4774a1b3a"
  },
  {
    "url": "the-beauty-of-design-patterns/design-patterns/create-type/singleton-design-pattern/index.html",
    "revision": "652c507a6b49f350e8f7c5aa80dab898"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/DRY/index.html",
    "revision": "c5d59757a35e1a16ca60ebffcdf4b484"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/KISS/index.html",
    "revision": "bfaa75b33b33dea91095264583490d5d"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/LOD/index.html",
    "revision": "af65cc199fcf6dfbd0fbea4530fbe648"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/practice/index.html",
    "revision": "0099060f3a7a704b3a7556c7fcd533d3"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "c60f5fe3f510b084cc4a8fe26c967bcd"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/YAGNI/index.html",
    "revision": "aca9fa19408b4379b6f14fac4d3fae22"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "f2eb9284e6ea5c7c144b26fe10766abb"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "2522c46f4dcef06466b8517c659ab210"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "e3925fd467cd4fa78c88a57e8fff3bbb"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/practice/index.html",
    "revision": "8d9fb958c2122b75af9ffd093505a36b"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/refactor/index.html",
    "revision": "80f38e031cfe47703ec6f46793b522f2"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/standard/index.html",
    "revision": "ebbe36cd0605ef47901f8f09bdb02eb6"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "4b6375cfbb638bbc085f0d7a04e0fb6a"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "d3acb2e071fa226cb9d21e2559b95c56"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "34858fd3accb1e7aa96a29bddaabdf35"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "6159746c74b4e29d158cccda0dd71749"
  },
  {
    "url": "the-minto-pyramid-principle/index.html",
    "revision": "64c2e9df12f2101ee23d73928a095205"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "7ba216c62e9a3175dc968c487907e752"
  },
  {
    "url": "timeline/index.html",
    "revision": "7219a402c73d1793b4b40ca8fe4ed696"
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
