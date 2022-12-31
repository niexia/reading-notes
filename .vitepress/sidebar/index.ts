import { getAlogSidebar } from './alog';
import { getTheElonMuskBiographySideBar } from './elon-musk';
import { getLearnArchitectureFromZeroSideBar } from './learn-architecture-from-zero';
import { getTheBeautyOfDesignPatternsSidebar } from './the-beauty-of-design-patterns';
import { getTheCleanCoderSideBar } from './the-clean-coder';
import { getTheMintoPyramidPrincipleSidebar } from './the-minto-pyramid-principle';
import { newYorkInstituteOfPhotography } from './new-york-institute-of-photography';

export default {
  '/algo/': getAlogSidebar(),
  '/learn-architecture-from-zero/': getLearnArchitectureFromZeroSideBar(),
  '/the-clean-coder/': getTheCleanCoderSideBar(),
  '/the-beauty-of-design-patterns/': getTheBeautyOfDesignPatternsSidebar(),
  '/elon-musk/': getTheElonMuskBiographySideBar(),
  '/the-minto-pyramid-principle/': getTheMintoPyramidPrincipleSidebar(),
  '/new-york-institute-of-photography/': newYorkInstituteOfPhotography(),
}