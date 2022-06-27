exports.getTheCleanCoderSideBar = function () {
  return [{
    title: '专业主义',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', '程序员的职业素养'],
      'professionalism/professionalism',
    ]
  }, {
    title: '说不,说是',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'say-no/say-no',
      'say-yes/say-yes',
    ]
  }, ]
}