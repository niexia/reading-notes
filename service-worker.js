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
    "revision": "51e4616f02632cdfe499382149da7ba5"
  },
  {
    "url": "algo/array/array/index.html",
    "revision": "9bd44286b26683e61699c97cdaa676ad"
  },
  {
    "url": "algo/backtracking-algorithm/backtracking-algorithm/index.html",
    "revision": "5b0f82c6edfd6836bdbbd6e8da8fc4a5"
  },
  {
    "url": "algo/binary-search/binary-search/index.html",
    "revision": "db0c1592e60494762d1d6d6a0a0772d7"
  },
  {
    "url": "algo/binary-search/deformation-of-binary-search/index.html",
    "revision": "8aecc7ddad792f18c078dffead366f9a"
  },
  {
    "url": "algo/binary-tree/binary-search-tree/index.html",
    "revision": "4e2e9c2104fe401b176653979ecf28f7"
  },
  {
    "url": "algo/binary-tree/binary-tree/index.html",
    "revision": "f7fc7e95fdbb7b153493fd4e41460ba9"
  },
  {
    "url": "algo/binary-tree/red-black-tree/index.html",
    "revision": "4d76a0b7ebc33cee4f33aabbf79c7354"
  },
  {
    "url": "algo/divide-and-conquer/divide-and-conquer/index.html",
    "revision": "ee677855c9337c1542574153631fd065"
  },
  {
    "url": "algo/dynamic-programming/dynamic-programming/index.html",
    "revision": "89d4d4440397936c4b25dc82d08659ac"
  },
  {
    "url": "algo/graph/bfs-dfs/index.html",
    "revision": "d98a49bc94da012c9e1a440200aa3215"
  },
  {
    "url": "algo/graph/graph/index.html",
    "revision": "3eed74a674a5b2f57c9327c0c837debd"
  },
  {
    "url": "algo/greedy-algorithm/greedy-algorithm/index.html",
    "revision": "d2cb2bb54f93d32aca8b4abe08fc8283"
  },
  {
    "url": "algo/hash-algorithm/hash-algorithm/index.html",
    "revision": "53aa9b5e44a4f536e1c742e207808552"
  },
  {
    "url": "algo/hash-table/design-hash-table/index.html",
    "revision": "f88ac8175b85cccac922101cc6d8dde1"
  },
  {
    "url": "algo/hash-table/hash-table/index.html",
    "revision": "0359ed61b36c80df19ef180d217f173d"
  },
  {
    "url": "algo/heap/application-of-heap/index.html",
    "revision": "b923c406ba9b283433ba6dde6e1ded33"
  },
  {
    "url": "algo/heap/heap-and-heap-sort/index.html",
    "revision": "edc5330f6b9230b3dde03b1affadf2fe"
  },
  {
    "url": "algo/index.html",
    "revision": "02706afcec6cdc9f5031ab790335761b"
  },
  {
    "url": "algo/linked-list/handwritten-linked-list-skills/index.html",
    "revision": "2589e07e40bf4a67718d376d942f9124"
  },
  {
    "url": "algo/linked-list/linked-list/index.html",
    "revision": "51b81b11e8fa290357a6386803d0cbf6"
  },
  {
    "url": "algo/queue/queue/index.html",
    "revision": "6a95a2f6a3dccee9097d9df183b7c655"
  },
  {
    "url": "algo/recursion/recursion/index.html",
    "revision": "df779979d4680b08f6184cd20cdc5dea"
  },
  {
    "url": "algo/skip-list/skip-list/index.html",
    "revision": "7bd3dff698d65abbe8488facce8b6bb6"
  },
  {
    "url": "algo/sort/bubble-sort-insertion-sort-selection-sort/index.html",
    "revision": "8dcdd7454460a46476dbb88ecb7f09b7"
  },
  {
    "url": "algo/sort/bucket-sort-counting-sort-radix-sort/index.html",
    "revision": "77e7bfb0da6965fe7a6a8d7d4b3fcf8b"
  },
  {
    "url": "algo/sort/merge-sort-quick-sort/index.html",
    "revision": "adcb0b45827e582a138a8b4adf253737"
  },
  {
    "url": "algo/sort/sort-optimization/index.html",
    "revision": "a2ccdee3760ce3211fd5d147030966ed"
  },
  {
    "url": "algo/sort/sort/index.html",
    "revision": "5b7473429608796584321d6968049d53"
  },
  {
    "url": "algo/stack/practice/index.html",
    "revision": "1f89582369c159eef4beb700830565dc"
  },
  {
    "url": "algo/stack/stack/index.html",
    "revision": "630d06602fdebcfd6b7915b9f23c7cfe"
  },
  {
    "url": "algo/string-matching/BF-RK/index.html",
    "revision": "bf7fb79c4d63914775ed87e4a35dbe68"
  },
  {
    "url": "algo/string-matching/BM/index.html",
    "revision": "7c0a8cdbdcc83dfb83553ba77aa8fae4"
  },
  {
    "url": "algo/string-matching/KMP/index.html",
    "revision": "c8f7c24c58f8f6a556bc96f2581e1d5a"
  },
  {
    "url": "algo/Tire-tree/Tire-tree/index.html",
    "revision": "683204b35cd739736e613d34d609f29d"
  },
  {
    "url": "article/index.html",
    "revision": "0852360e27543c502a2f5c9c5827c2ce"
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
    "url": "assets/js/3.1b77c550.js",
    "revision": "45a7214032419573356abfc5f6d2cc42"
  },
  {
    "url": "assets/js/71.57253716.js",
    "revision": "7b1133cf3a976aff7078da4d84a2df79"
  },
  {
    "url": "assets/js/72.16da1e8b.js",
    "revision": "4924003a5c07ffcbd6247273be5fa330"
  },
  {
    "url": "assets/js/app.345870b4.js",
    "revision": "9e782b41487cc7dfd5b89fb84b7fb6d1"
  },
  {
    "url": "assets/js/layout-Blog.0802cdff.js",
    "revision": "47c6ad11c7f3c6bf830c54e13cbd2973"
  },
  {
    "url": "assets/js/layout-Layout.ea688dcf.js",
    "revision": "266efc939d9edd44c3878f0caa00687b"
  },
  {
    "url": "assets/js/layout-NotFound.c77a49fb.js",
    "revision": "af72e0e73a85c450cde94d568fdc3d77"
  },
  {
    "url": "assets/js/layout-Slide.6e5e88a9.js",
    "revision": "2cd30a3d4b2c8879b20655c8322097df"
  },
  {
    "url": "assets/js/page--25410731.c72f8e99.js",
    "revision": "8393fba2a4b0c63e9f3da0a8038a6ee1"
  },
  {
    "url": "assets/js/page--3992e0e1.addfe44d.js",
    "revision": "78859b43df8503e7778d824b61e1bcc7"
  },
  {
    "url": "assets/js/page--44a0de64.b6c54115.js",
    "revision": "32063556ca6b28f1bc04565fb325d749"
  },
  {
    "url": "assets/js/page--4855b8f6.6e451f2a.js",
    "revision": "eb5f8a18cb80db43705bf03f3cf81079"
  },
  {
    "url": "assets/js/page--5f87f751.ea557d00.js",
    "revision": "dc2afccbd332a20af26baadadfa233ec"
  },
  {
    "url": "assets/js/page--7507ab0e.4efc981e.js",
    "revision": "6e04b26a9da9bd106660ec83348229e2"
  },
  {
    "url": "assets/js/page--ac2b465e.e25f2a9c.js",
    "revision": "75c02004451d0eee3bc9a8cda90b4559"
  },
  {
    "url": "assets/js/page--d1e0c466.71ac3d47.js",
    "revision": "9bc75ed6b0c06eed023b15f0c150f957"
  },
  {
    "url": "assets/js/page-BF算法和RK算法.202ffbff.js",
    "revision": "5941e7330a4df61553fada745f26cf0b"
  },
  {
    "url": "assets/js/page-DRY原则.52b00526.js",
    "revision": "65d94665fc180ab80d87cdbcda9df24a"
  },
  {
    "url": "assets/js/page-KISS.186f2a45.js",
    "revision": "a2498fc862abc06fbd8792cebc54830c"
  },
  {
    "url": "assets/js/page-LOD.e7d60146.js",
    "revision": "8ae3af68f69749d6048b1703ef866320"
  },
  {
    "url": "assets/js/page-SOLID.1e5e29a2.js",
    "revision": "5dd34c7896e573ab34985876009a1807"
  },
  {
    "url": "assets/js/page-Tire树.ec562be4.js",
    "revision": "10688cae619c247780fc3af6e081cbd1"
  },
  {
    "url": "assets/js/page-YAGNI.57fc7ef2.js",
    "revision": "e5092f7abe3e7c6d6b65a44a6fbe1685"
  },
  {
    "url": "assets/js/page-专业主义.af16f84a.js",
    "revision": "547e72af8e03b2a7716cc6bbf4b27c1a"
  },
  {
    "url": "assets/js/page-为什么要用金字塔原理.e360398a.js",
    "revision": "c48e9edc44c35cebb19a4f36935457b9"
  },
  {
    "url": "assets/js/page-为什么需要学习掌握设计模式相关知识.3ffcede7.js",
    "revision": "fcd54934a416e01678b30b9375f952c1"
  },
  {
    "url": "assets/js/page-了解架构设计.e6eb2120.js",
    "revision": "d99691f98e92a6f70e6a2c69418d141e"
  },
  {
    "url": "assets/js/page-二分查找.56a5f810.js",
    "revision": "3d2737b96bd650a1b7b9fc6e7e13535c"
  },
  {
    "url": "assets/js/page-二分查找的变形.6066ab81.js",
    "revision": "7835331f16620d3d274f8830c5be62ab"
  },
  {
    "url": "assets/js/page-二叉查找树.b7b4f127.js",
    "revision": "36fa08b4b88a433ca0a477e75511c14b"
  },
  {
    "url": "assets/js/page-二叉树.1e9e72f9.js",
    "revision": "efa79633d3493b494c0997a85a5e3a8b"
  },
  {
    "url": "assets/js/page-介绍.3f8b8940.js",
    "revision": "49219877520e2205fd804490c2fc2be9"
  },
  {
    "url": "assets/js/page-从0开始学架构.d46de445.js",
    "revision": "795fb0ea83c2b246a6e87aba35a46ed7"
  },
  {
    "url": "assets/js/page-代码整洁之道-程序员的职业素养.f817a408.js",
    "revision": "a25fb867ac77cafb352a35dab4e359a7"
  },
  {
    "url": "assets/js/page-冒泡、插入和选择排序.c1e74f17.js",
    "revision": "717c646a53911e5614bac662984082fb"
  },
  {
    "url": "assets/js/page-分治算法.bd1ca026.js",
    "revision": "87a8f34cae466be2e8b390d601e7024e"
  },
  {
    "url": "assets/js/page-前言.cc66d306.js",
    "revision": "ba1d2fe432b237690c7541ee4607ed56"
  },
  {
    "url": "assets/js/page-动态规划.23e5169b.js",
    "revision": "1d3703ae6b137ab9acf469e90809bfc7"
  },
  {
    "url": "assets/js/page-哈希算法.38d5864c.js",
    "revision": "679977486d740d555445b70d75560621"
  },
  {
    "url": "assets/js/page-回溯算法.89e9886d.js",
    "revision": "d87cbdfd5d157bcfb8a705757ed23fd6"
  },
  {
    "url": "assets/js/page-图.1b1a331d.js",
    "revision": "ce514647d7af0ad9cfb4f26b26fc5413"
  },
  {
    "url": "assets/js/page-堆.620e3562.js",
    "revision": "b799e81d835594cf3f6c98990e2c3b19"
  },
  {
    "url": "assets/js/page-堆的应用.13d63d71.js",
    "revision": "f88e5ebd39f716e705002e264ed78a15"
  },
  {
    "url": "assets/js/page-实战.136958b1.js",
    "revision": "d4d12da9c64e0793fd917a97643bc7d0"
  },
  {
    "url": "assets/js/page-归并排序和快速排序.de505601.js",
    "revision": "e265b2d50ba4f7dc84a048328b881dea"
  },
  {
    "url": "assets/js/page-手写链表的技巧.9878a3c1.js",
    "revision": "720e69bb33d5df4557bc66c4647f7137"
  },
  {
    "url": "assets/js/page-排序.0afbb37e.js",
    "revision": "c45c61ab6b01573f659e14140fd8cd2d"
  },
  {
    "url": "assets/js/page-排序优化.6884a7b1.js",
    "revision": "a1ce462ddd0df95a012df752fa51393d"
  },
  {
    "url": "assets/js/page-散列表.e66d5302.js",
    "revision": "bdbd22b9e7ae40d1803146a357282eae"
  },
  {
    "url": "assets/js/page-数组.37195c16.js",
    "revision": "90d86be38c0cc13ddf5f20c1d01fa2d0"
  },
  {
    "url": "assets/js/page-栈.2a1bc434.js",
    "revision": "aab93292969dba57202a73d2062d1f12"
  },
  {
    "url": "assets/js/page-桶排序、计数排序和基数排序.71ea81d4.js",
    "revision": "fb9e740cc3130feb4fb4cf10a2d9169d"
  },
  {
    "url": "assets/js/page-深度优先和广度优先搜索.a386bf72.js",
    "revision": "c1e2df25918e675765781e8f7171da41"
  },
  {
    "url": "assets/js/page-硅谷钢铁侠.977b2e0c.js",
    "revision": "735b5834d7511f26e84a1ea792bc53ff"
  },
  {
    "url": "assets/js/page-系统复杂度的来源.b407aa1e.js",
    "revision": "609f621d04d7fd89b9b4a37ea06cad46"
  },
  {
    "url": "assets/js/page-红黑树.ca04409e.js",
    "revision": "02f58d441ca9193af4d548f48c5958ab"
  },
  {
    "url": "assets/js/page-练习.1020f553.js",
    "revision": "937335c288cc25f27a282853e9a5748f"
  },
  {
    "url": "assets/js/page-设计散列表.be637e19.js",
    "revision": "c02ff7a348584e01b4b7e49962432f45"
  },
  {
    "url": "assets/js/page-说不.5e57ec82.js",
    "revision": "b72c392b91122e80c8796fc5a36edada"
  },
  {
    "url": "assets/js/page-说是.52ab684f.js",
    "revision": "8bae60b92f339fccf29f85ee02a4a49f"
  },
  {
    "url": "assets/js/page-贪心算法.be36c700.js",
    "revision": "7d4c4124adb07628bf9cbd61ffd1061d"
  },
  {
    "url": "assets/js/page-跳表.ae1321ec.js",
    "revision": "c357be954141374b9eaabe6d272b2e9c"
  },
  {
    "url": "assets/js/page-递归.4927d34e.js",
    "revision": "b917c7e17c9ca9edf3de999a90ac2125"
  },
  {
    "url": "assets/js/page-重构.8c78b7bb.js",
    "revision": "81d9320ab4079dc454d775c7ec7b788a"
  },
  {
    "url": "assets/js/page-金字塔原理.7d1e5168.js",
    "revision": "b09b95172ee99e5489003db3a6a1d2c3"
  },
  {
    "url": "assets/js/page-链表.ffbac2ef.js",
    "revision": "a328a863f499527a5388a6ce8a554436"
  },
  {
    "url": "assets/js/page-队列.df7ba957.js",
    "revision": "1c56ea67f974bb65c9ace6c15afb7307"
  },
  {
    "url": "assets/js/page-面向对象是什么.920ffeff.js",
    "revision": "e137dbc5067ad8132518a2273988907f"
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
    "url": "assets/js/vendors~layout-Layout.783be478.js",
    "revision": "90dfe8aa7bd0b7a46571b1361e32b711"
  },
  {
    "url": "assets/js/vendors~photo-swipe.62884794.js",
    "revision": "15c53a5fc0f991e9bc4e928aa9e1f7f1"
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
    "revision": "91e734bc195a4107827877bc06a7e9a7"
  },
  {
    "url": "elon-musk/index.html",
    "revision": "1ccb0266d38e26aadc4b6ada569b7cea"
  },
  {
    "url": "encrypt/index.html",
    "revision": "d0cc9cfeddcf29f5d310487ccf5d8d43"
  },
  {
    "url": "index.html",
    "revision": "1aef42c7b4da1950c0bf614c27d89e10"
  },
  {
    "url": "learn-architecture-from-zero/index.html",
    "revision": "4f3aa50ba0db6759e4ef705dfacf4bd4"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/design-flow/index.html",
    "revision": "f3962a0dec65b2ca3b0a47527454639a"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/principles/index.html",
    "revision": "202170b0864d0dae76950de308cdb0c6"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/sources-of-complexity/index.html",
    "revision": "8b099d0dee7e7add0bfa2f1b2665b748"
  },
  {
    "url": "learn-architecture-from-zero/infrastructure/what-is-architecture/index.html",
    "revision": "a7777f2019e837a31c2e03e34f26744d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mysql/index.html",
    "revision": "6568539b25cdaea3846851cfb5b46eab"
  },
  {
    "url": "slide/index.html",
    "revision": "9c22339fe8f82c609423ec41b597bd32"
  },
  {
    "url": "star/index.html",
    "revision": "85dad5394825f95a6d6f8d6c59370573"
  },
  {
    "url": "tag/index.html",
    "revision": "d391a9af9f391c4b2160569a597a6668"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/DRY/index.html",
    "revision": "d0cd429013a8eef641bdef617a290b5b"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/KISS/index.html",
    "revision": "5bc844fa5472dc7aed72c04f98f2a4cf"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/LOD/index.html",
    "revision": "24412d1b03d0f8aa7adcf0280c9b2cac"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/practice/index.html",
    "revision": "dd308a64fb9dada34deb8166612bd28d"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/SOLID/index.html",
    "revision": "ee81c6290a3e93c24ff6b82cbbfdd668"
  },
  {
    "url": "the-beauty-of-design-patterns/design-principles/YAGNI/index.html",
    "revision": "79a5684d11e70a7ab2b076c4a4e49597"
  },
  {
    "url": "the-beauty-of-design-patterns/index.html",
    "revision": "007f74e09f2a2c176e4f913d13de050d"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/practice/index.html",
    "revision": "510d1994b7b66cd2eccd00ec110c3a43"
  },
  {
    "url": "the-beauty-of-design-patterns/object-oriented/what-is-object-oriented/index.html",
    "revision": "707f2d367b3f256cebb6cb08eebfb91f"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/practice/index.html",
    "revision": "13840bd2d6de1218c63fe7a773c97a5f"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/refactor/index.html",
    "revision": "26d5ec297eccdcbbe3c2122916a77dfd"
  },
  {
    "url": "the-beauty-of-design-patterns/standard-refactor/standard/index.html",
    "revision": "c822b8154b4aa8a60272a6f09c355e50"
  },
  {
    "url": "the-clean-coder/index.html",
    "revision": "caac5c77427233d223f7cf7b0bfc3a30"
  },
  {
    "url": "the-clean-coder/professionalism/professionalism/index.html",
    "revision": "849873b39b1e358192c8c9bc69fdb222"
  },
  {
    "url": "the-clean-coder/say-no/say-no/index.html",
    "revision": "7f2ee24f8e23fd5f1f88adbd516778e0"
  },
  {
    "url": "the-clean-coder/say-yes/say-yes/index.html",
    "revision": "d1cd043ee47b15c823844c4527ddf73a"
  },
  {
    "url": "the-minto-pyramid-principle/index.html",
    "revision": "8ac1759ff02467a3783a86e1d107fdb9"
  },
  {
    "url": "the-minto-pyramid-principle/logic-of-expression/为什么要用金字塔原理/index.html",
    "revision": "0a7fbd54000c80012347a2476a57d791"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e03eb210e930557867e7b9066ecbadb"
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
