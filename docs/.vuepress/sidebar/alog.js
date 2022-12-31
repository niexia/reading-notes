exports.getAlogSidebar = function () {
  return [{
    title: '数据结构和算法',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', '介绍'],
      'array/array',
      'linked-list/linked-list',
      'linked-list/handwritten-linked-list-skills',
      'stack/stack',
      'recursion/recursion',
      'sort/sort',
      'sort/bubble-sort-insertion-sort-selection-sort',
      'sort/merge-sort-quick-sort',
      'sort/bucket-sort-counting-sort-radix-sort',
      'sort/sort-optimization',
      'binary-search/binary-search',
      'binary-search/deformation-of-binary-search',
      'skip-list/skip-list',
      'hash-table/hash-table',
      'hash-table/design-hash-table',
      'hash-algorithm/hash-algorithm',
      'binary-tree/binary-tree',
      'binary-tree/binary-search-tree',
      'binary-tree/red-black-tree',
      'heap/heap-and-heap-sort',
      'heap/application-of-heap',
      'graph/graph',
      'graph/bfs-dfs',
      'string-matching/BF-RK',
      'string-matching/BM',
      'string-matching/KMP',
      'Tire-tree/Tire-tree',
      'greedy-algorithm/greedy-algorithm',
      'divide-and-conquer/divide-and-conquer',
      'backtracking-algorithm/backtracking-algorithm',
      'dynamic-programming/dynamic-programming'
    ]
  }]
};