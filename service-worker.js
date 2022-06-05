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
    "revision": "0d200989a9ff4f2fab156a5b19ad66c2"
  },
  {
    "url": "algo/array/array/index.html",
    "revision": "6cf10e70862436c78967523eb5ae6389"
  },
  {
    "url": "algo/backtracking-algorithm/backtracking-algorithm/index.html",
    "revision": "26764b915adfe5d0e40b0e95e74e2976"
  },
  {
    "url": "algo/binary-search/binary-search/index.html",
    "revision": "fedcc7ec217516a9ed8385f462a9d1d4"
  },
  {
    "url": "algo/binary-search/deformation-of-binary-search/index.html",
    "revision": "276c07951ca0ad349ac57608a931184c"
  },
  {
    "url": "algo/binary-tree/binary-search-tree/index.html",
    "revision": "099a34148dcf50ae9f4906fd9eba9e63"
  },
  {
    "url": "algo/binary-tree/binary-tree/index.html",
    "revision": "3b8ec7724bf5a86f8eb3d05829ea709a"
  },
  {
    "url": "algo/binary-tree/red-black-tree/index.html",
    "revision": "f4ffeaa58b6e9188c083f2e7a211c052"
  },
  {
    "url": "algo/divide-and-conquer/divide-and-conquer/index.html",
    "revision": "1468a38ce2259f95a6034fa7d657d5fa"
  },
  {
    "url": "algo/dynamic-programming/dynamic-programming/index.html",
    "revision": "28891eaa2d73f82fce72bb71f8be3fd2"
  },
  {
    "url": "algo/graph/bfs-dfs/index.html",
    "revision": "b3d0e67de2cba069d2d65ecff3c9ed67"
  },
  {
    "url": "algo/graph/graph/index.html",
    "revision": "4f94c89d9e857c440502f70d373ccaca"
  },
  {
    "url": "algo/greedy-algorithm/greedy-algorithm/index.html",
    "revision": "b22b5bd988597bdeec4e713de6831b82"
  },
  {
    "url": "algo/hash-algorithm/hash-algorithm/index.html",
    "revision": "57c3a531274a88dfe45d481236a0d46a"
  },
  {
    "url": "algo/hash-table/design-hash-table/index.html",
    "revision": "a7267f2c591db27bd1696b4b5453a788"
  },
  {
    "url": "algo/hash-table/hash-table/index.html",
    "revision": "28a7cedc242c989cc34856705fbd9af3"
  },
  {
    "url": "algo/heap/application-of-heap/index.html",
    "revision": "6e1c692de92879daa7696e45625442e9"
  },
  {
    "url": "algo/heap/heap-and-heap-sort/index.html",
    "revision": "c7e7217cf2daf78082ab71d56d06b648"
  },
  {
    "url": "algo/index.html",
    "revision": "82c15d21ef8b925458d4fe5de28bffa5"
  },
  {
    "url": "algo/linked-list/handwritten-linked-list-skills/index.html",
    "revision": "e60e4c787bdd843a85a684c08b0b411e"
  },
  {
    "url": "algo/linked-list/linked-list/index.html",
    "revision": "9737136853d08e26a91d1a34b225d684"
  },
  {
    "url": "algo/queue/queue/index.html",
    "revision": "2ae3dc61cb583e614d8a82ebc4c1f630"
  },
  {
    "url": "algo/recursion/recursion/index.html",
    "revision": "dd0b379432f71f1dcea53a222336da19"
  },
  {
    "url": "algo/skip-list/skip-list/index.html",
    "revision": "7223b3a28ec3d2b2e1f985671a12897d"
  },
  {
    "url": "algo/sort/bubble-sort-insertion-sort-selection-sort/index.html",
    "revision": "431e2a22a759c2b52caf424c62988547"
  },
  {
    "url": "algo/sort/bucket-sort-counting-sort-radix-sort/index.html",
    "revision": "608afbeb588ac16f682f2e1bd73e26a1"
  },
  {
    "url": "algo/sort/merge-sort-quick-sort/index.html",
    "revision": "166422de9fa822b01e808eaa58dc0b75"
  },
  {
    "url": "algo/sort/sort-optimization/index.html",
    "revision": "05cbd41f6967b0d3510901bb80d26783"
  },
  {
    "url": "algo/sort/sort/index.html",
    "revision": "c5fc435f75c1151c548e7517adfb879d"
  },
  {
    "url": "algo/stack/practice/index.html",
    "revision": "97f3660a2d4cfdb2881681a6514111e3"
  },
  {
    "url": "algo/stack/stack/index.html",
    "revision": "735c37430987ea4d0b1f659208082e8c"
  },
  {
    "url": "algo/string-matching/BF-RK/index.html",
    "revision": "895db37d89a26621f438500e9da42cae"
  },
  {
    "url": "algo/string-matching/BM/index.html",
    "revision": "a05067544523bdf61f7af7253987291c"
  },
  {
    "url": "algo/string-matching/KMP/index.html",
    "revision": "326cdd075795c390b82b130ea8904c49"
  },
  {
    "url": "algo/Tire-tree/Tire-tree/index.html",
    "revision": "53653bf2e06881172eba096aa416b98d"
  },
  {
    "url": "article/index.html",
    "revision": "4422c5f550e2de59c244d1a9f4ef1a78"
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
    "url": "assets/design-patterns-deep-copy.png",
    "revision": "2c3b60e91399d04536e3620a6e11d858"
  },
  {
    "url": "assets/design-patterns-hashmap.png",
    "revision": "a7cb22eb2f25e7826ae0cc231ab93ad5"
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
    "url": "assets/design-patterns-shallow-copy.png",
    "revision": "a6e770767c3be0bdce64cd12211fb64e"
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
    "url": "assets/img/design-patterns-deep-copy.2c3b60e9.png",
    "revision": "2c3b60e91399d04536e3620a6e11d858"
  },
  {
    "url": "assets/img/design-patterns-hashmap.a7cb22eb.png",
    "revision": "a7cb22eb2f25e7826ae0cc231ab93ad5"
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
    "url": "assets/img/design-patterns-shallow-copy.a6e77076.png",
    "revision": "a6e770767c3be0bdce64cd12211fb64e"
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
    "url": "assets/js/3.0745fba9.js",
    "revision": "ebab26860bd7df75f678cd12f952803a"
  },
  {
    "url": "assets/js/75.8c821b23.js",
    "revision": "6d09d49a0f15ca837df6911dbd106f0b"
  },
  {
    "url": "assets/js/76.73f957df.js",
    "revision": "24751fcf263c59933dfb7d351e54432f"
  },
  {
    "url": "assets/js/app.3d0c3830.js",
    "revision": "94c47848978cabdb9a180ef9d2321bc5"
  },
  {
    "url": "assets/js/layout-Blog.dcc5ff84.js",
    "revision": "5a83c40d4cfa11501db0c29c557eabe8"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.35ec045b.js",
    "revision": "d539dfdd4227cf98fb652de7c0efd130"
  },
  {
    "url": "assets/js/layout-Slide.10a11898.js",
    "revision": "099ba6a20670c85cae2d41119f21ec31"
  },
  {
    "url": "assets/js/page--25410731.9377dc9a.js",
    "revision": "cbf6bd8fa77fe293d4d61c8b08291beb"
  },
  {
    "url": "assets/js/page--3992e0e1.7770daa0.js",
    "revision": "823730a24bde9518a56b3ab8f2ef6470"
  },
  {
    "url": "assets/js/page--44a0de64.b8858835.js",
    "revision": "ba8e1bf47b480d84af7257fa46223f41"
  },
  {
    "url": "assets/js/page--4855b8f6.a9e2ded1.js",
    "revision": "5dace29f8641ff62f4eb34738b8c3df4"
  },
  {
    "url": "assets/js/page--5f87f751.d32c1e05.js",
    "revision": "bda9d8b361ee196dcca55049caa3c6af"
  },
  {
    "url": "assets/js/page--7507ab0e.7f395923.js",
    "revision": "f7bcccd05c66b92fd260cc93c0705d20"
  },
  {
    "url": "assets/js/page--ac2b465e.db67aa41.js",
    "revision": "d180c723422d2c8f81a29dfc806b8548"
  },
  {
    "url": "assets/js/page--d1e0c466.043bf8e0.js",
    "revision": "123a30d012da63ccb52faa241fdd8ad3"
  },
  {
    "url": "assets/js/page-BF算法和RK算法.7b0b5cee.js",
    "revision": "3966d43958351b3623b50f13446a8505"
  },
  {
    "url": "assets/js/page-DRY.054b15af.js",
    "revision": "915671bb145eb1be78cf90b0bebf6d5f"
  },
  {
    "url": "assets/js/page-KISS.95240a5c.js",
    "revision": "aa18525bc38fac69f77778366cdbd385"
  },
  {
    "url": "assets/js/page-LOD.765ae0ff.js",
    "revision": "baaeabe0fd8461f59816107f40e392d1"
  },
  {
    "url": "assets/js/page-SOLID.57395655.js",
    "revision": "f994f43deb695f866b66d6342e7330d2"
  },
  {
    "url": "assets/js/page-Tire树.a0827513.js",
    "revision": "04675484f92b8826e6006680f7caefeb"
  },
  {
    "url": "assets/js/page-YAGNI.f665b05d.js",
    "revision": "5ff2b7402c72a27731d114dd3a06622f"
  },
  {
    "url": "assets/js/page-专业主义.13edd1bc.js",
    "revision": "de3dcbc111a34fd0bd3598e58ad56d6d"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.a7f06067.js",
    "revision": "b6c2f4ad42b6ffa14d7abe27f7a2363f"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.6d13f262.js",
    "revision": "c7d20c40d4b7687c6d4e2c273d280771"
  },
  {
    "url": "assets/js/page-了解架构设计.2c111cce.js",
    "revision": "80f36e05d16b30d8ac20e77d61527433"
  },
  {
    "url": "assets/js/page-二分查找.d9b11f3c.js",
    "revision": "d6030934670bf7c59a2d6acbf0a57b5f"
  },
  {
    "url": "assets/js/page-二分查找的变形.9479bbca.js",
    "revision": "c4dbf5bd318455807f140d5831591773"
  },
  {
    "url": "assets/js/page-二叉查找树.64abb029.js",
    "revision": "17ec90daf44418803658316cf6e2309d"
  },
  {
    "url": "assets/js/page-二叉树.b151b4e6.js",
    "revision": "f211d8e0e1d8095b9c2a7083a09ad9aa"
  },
  {
    "url": "assets/js/page-介绍.08d9a9c7.js",
    "revision": "ecf92013727257dbee46a7b486a87397"
  },
  {
    "url": "assets/js/page-从0开始学架构.48c7b249.js",
    "revision": "c4497a9e9be0cb3e0f79589b5c04dda8"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.1018d673.js",
    "revision": "0e4f6c2179a5726ac93a1778b28795ea"
  },
  {
    "url": "assets/js/page-冒泡、插入和选择排序.a855a251.js",
    "revision": "4e71ea29e694bfd1a204f615a032c461"
  },
  {
    "url": "assets/js/page-分治算法.c8fc8927.js",
    "revision": "86eec9b6f121020445ecbfc3cb593a75"
  },
  {
    "url": "assets/js/page-前言.f79e82e9.js",
    "revision": "c83ced8b98d96a8e3611da534bfd2385"
  },
  {
    "url": "assets/js/page-动态规划.b9d3f2e2.js",
    "revision": "684ba7871b9138e6b61b117055ea0a5b"
  },
  {
    "url": "assets/js/page-单例模式.6f5c4f9a.js",
    "revision": "86234fd3fa9a113a84a5b2188e8ef56a"
  },
  {
    "url": "assets/js/page-原型模式.6c3dcd61.js",
    "revision": "8190aa27c97153305e4eb30d77c718c0"
  },
  {
    "url": "assets/js/page-哈希算法.c1287d40.js",
    "revision": "ac4d3758ca853aa73b4c77eb24e9760c"
  },
  {
    "url": "assets/js/page-回溯算法.01c8cf35.js",
    "revision": "e5291a299a378e0d3cded44f78c3ac98"
  },
  {
    "url": "assets/js/page-图.e78a1047.js",
    "revision": "d015c93d078fd8558e5976a8fb47331e"
  },
  {
    "url": "assets/js/page-堆.84abe625.js",
    "revision": "13560656cc52844f9e476a681c17b1a9"
  },
  {
    "url": "assets/js/page-堆的应用.41a64e7f.js",
    "revision": "3985e285ff6d520871dfd9ce7794025e"
  },
  {
    "url": "assets/js/page-实战.6073968f.js",
    "revision": "5a3f4afd75302178940748e6fc7e02d6"
  },
  {
    "url": "assets/js/page-工厂模式.77e60ab9.js",
    "revision": "3ae348410b4cd2ccb6232883176ca663"
  },
  {
    "url": "assets/js/page-建造者模式.5de1b6ae.js",
    "revision": "5819ff5a70dc8517041d0cb237cbc716"
  },
  {
    "url": "assets/js/page-归并排序和快速排序.92f024f4.js",
    "revision": "032db402718c869995885c3e64dca907"
  },
  {
    "url": "assets/js/page-手写链表的技巧.c0016eb4.js",
    "revision": "103a9f76abd45731d969e1aa7cbcdbb5"
  },
  {
    "url": "assets/js/page-排序.8033a9be.js",
    "revision": "2ef3073ceca498209a886f3a972aa0ff"
  },
  {
    "url": "assets/js/page-排序优化.df2d2d0f.js",
    "revision": "f15071c71eb8e0a0581a3fc3a66d3b8c"
  },
  {
    "url": "assets/js/page-散列表.51a8696b.js",
    "revision": "1fae9ded70119e2661b28f1c7665d444"
  },
  {
    "url": "assets/js/page-数组.481973b1.js",
    "revision": "5316f3b9a557a97e7a9b39af584bd5e2"
  },
  {
    "url": "assets/js/page-栈.6e8010a5.js",
    "revision": "7eec3795afbddf8f1e95013a0243f6d6"
  },
  {
    "url": "assets/js/page-桶排序、计数排序和基数排序.282f3faa.js",
    "revision": "a4c47b9aa9765caad2f039c96a3bb70f"
  },
  {
    "url": "assets/js/page-深度优先和广度优先搜索.87c3b384.js",
    "revision": "e3ba674453b8f34f0605c144a6d2eee7"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.5174d838.js",
    "revision": "c4a48a60bf7d95045958d4ca209f6d88"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.047b8c22.js",
    "revision": "d4c35eb1163b2fe39eee6608d05a5066"
  },
  {
    "url": "assets/js/page-红黑树.e1b3897a.js",
    "revision": "acee13e132041a02c059cb963c87fb37"
  },
  {
    "url": "assets/js/page-练习.125689fb.js",
    "revision": "c1a228a5e7f99eb78692db09594d943e"
  },
  {
    "url": "assets/js/page-设计散列表.e6a33281.js",
    "revision": "6f703b04221c1deb595e4e045585697c"
  },
  {
    "url": "assets/js/page-说不.0ab859c8.js",
    "revision": "b0f411399f2c4d5721e23b2482e31bb3"
  },
  {
    "url": "assets/js/page-说是.ad92f1fd.js",
    "revision": "14c50180171eb33c6aa5bc571805cc11"
  },
  {
    "url": "assets/js/page-贪心算法.55369e31.js",
    "revision": "1d43d771b2ab8cdb3748050085a28991"
  },
  {
    "url": "assets/js/page-跳表.862ba8b3.js",
    "revision": "ad64763cf78a8dcfefed2208144a042e"
  },
  {
    "url": "assets/js/page-递归.aaa23242.js",
    "revision": "fa290e777bcc302705b949d7791862b2"
  },
  {
    "url": "assets/js/page-重构.1fea2347.js",
    "revision": "3f2297a13556060f08220cfb09d5c458"
  },
  {
    "url": "assets/js/page-金字塔原理.80a4ca29.js",
    "revision": "9db4bdd1df0eb82feefaacba3219e2e1"
  },
  {
    "url": "assets/js/page-链表.6233cc25.js",
    "revision": "a5c77118e7ac53e6dad92b307c737de7"
  },
  {
    "url": "assets/js/page-队列.a139af23.js",
    "revision": "e7817363585281e6e07f33d1b892b25c"
  },
  {
    "url": "assets/js/page-面向对象是什么.e8cb31ee.js",
    "revision": "76b6d2d0e6cac27088ee1c5b5d47552f"
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
    "url": "assets/js/vendors~layout-Layout.3c40cc25.js",
    "revision": "159d6f6d7467aebc3ce0d45d80ef821a"
  },
  {
    "url": "assets/js/vendors~photo-swipe.51c22c18.js",
    "revision": "601e6a13a28672857834bbe6f2092936"
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
    "revision": "5ce1b2922ccbdeb830deebf81b811272"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "a2e6cbb042c5a529c5a843d351db80f8"
  },
  {
    "url": "encrypt/index.html",
    "revision": "d6369635488ec1d60271865012c32c77"
  },
  {
    "url": "index.html",
    "revision": "3287c3cd8e852570c6e70c7dc4b11cea"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "c8651fc57e548eaa15f75130263843c7"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "3d8c6033c0f516bde64af1b03fa2047b"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "ffe29688fe6f2cad43153fbae95d8456"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "a9a64703b2012811c984fc632c92bd53"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "09a167b08cd6d727e9fd490b603e845f"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "29ad935cd10a6310266d5b3c51de670f"
  },
  {
    "url": "slide/index.html",
    "revision": "4b5873cd963f029f8a27159a6315c4e7"
  },
  {
    "url": "star/index.html",
    "revision": "458b0c3c2efcf9f18c936ee3cd2b5403"
  },
  {
    "url": "tag/index.html",
    "revision": "823d87e69680a58bb40754173413759d"
  },
  {
    "url": "the-beauty-of-design-patterns/design-patterns/create-type/builder-pattern/index.html",
    "revision": "7a737fb1cdf9280d63bfeca7d9d4f4a3"
  },
  {
    "url": "the-beauty-of-design-patterns/design-patterns/create-type/factory-design-pattern/index.html",
    "revision": "9a1664bc55d1e4f7f92790a11b3f1bef"
  },
  {
    "url": "the-beauty-of-design-patterns/design-patterns/create-type/prototype-design-pattern/index.html",
    "revision": "ea49c91598388a019cde17dc4ee71bd9"
  },
  {
    "url": "the-beauty-of-design-patterns/design-patterns/create-type/singleton-design-pattern/index.html",
    "revision": "43aad3529908c5c13d08101def5afe1a"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/DRY/index.html",
    "revision": "e8fab124fdb5aab011ad1547bfa22cc4"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/KISS/index.html",
    "revision": "f7c93c0199329cbb6af0aa7c80473a0a"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/LOD/index.html",
    "revision": "4efdabe898baf1d28b5166c8dcf2404f"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/practice/index.html",
    "revision": "50c84964ae02b9551e5bcc2f2d8061a4"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "dc1f7fd8f0d6859bcd71a7d227391ec9"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/YAGNI/index.html",
    "revision": "8b8fb6caab1e3501bbfa079ee236a567"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "f462dd6eee0869d6f8cdff39163b2ea0"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "3bad33e5a4c0235b7aa126ec3058a99f"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "4e5928ec5470889444c5b8335bef0e37"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/practice/index.html",
    "revision": "87cc2b7d4b2689fb4e6d11f044d4b08e"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/refactor/index.html",
    "revision": "bf1d35ffbe69dcb84fb128b005b0fd58"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/standard/index.html",
    "revision": "102886674a56e643694e321894bf16bf"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "96fa740c33d175b707413007c332a144"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "da2b512faee354ea4f6e18a8ca81efa3"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "0e9c2cf46f6b65aaffbfd3cca46cf2f8"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "d35fed42164ae6a604be67367639bd62"
  },
  {
    "url": "the-minto-pyramid-principle/index.html",
    "revision": "3c2fa741cced943785081c3d58949fab"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "f0507eb81e50bc857bd31fb4f25b5fea"
  },
  {
    "url": "timeline/index.html",
    "revision": "183687c57bee630f4c24cd30d91536f9"
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
