const { getAlogSidebar } = require('./alog')
const { getTheElonMuskBiographySideBar } = require('./elon-musk')
const { getLearnArchitectureFromZeroSideBar } = require('./learn-architecture-from-zero')
const { getTheBeautyOfDesignPatternsSidebar } = require('./the-beauty-of-design-patterns')
const { getTheCleanCoderSideBar } = require('./the-clean-coder')
const { getTheMintoPyramidPrincipleSidebar } = require('./the-minto-pyramid-principle')
const { newYorkInstituteOfPhotography } = require('./new-york-institute-of-photography')

module.exports = {
  '/algo/': getAlogSidebar(),
  '/learn-architecture-from-zero/': getLearnArchitectureFromZeroSideBar(),
  '/the-clean-coder/': getTheCleanCoderSideBar(),
  '/the-beauty-of-design-patterns/': getTheBeautyOfDesignPatternsSidebar(),
  '/elon-musk/': getTheElonMuskBiographySideBar(),
  '/the-minto-pyramid-principle/': getTheMintoPyramidPrincipleSidebar(),
  '/new-york-institute-of-photography/': newYorkInstituteOfPhotography(),
}