import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { assertPageViewBeacon } from './assertions';
import {
  assertFeaturesAnalysisComponentClick,
  assertFeaturesAnalysisComponentView,
} from './assertions/featuresAnalysis';
import {
  assertMessageBannerComponentClick,
  assertMessageBannerComponentView,
} from './assertions/messageBanner';
import {
  assertMostReadComponentClick,
  assertMostReadComponentView,
} from './assertions/mostRead';
import {
  assertDropdownNavigationComponentClick,
  assertDropdownNavigationComponentView,
  assertScrollableNavigationComponentClick,
  assertScrollableNavigationComponentView,
} from './assertions/navigation';
import {
  assertRadioScheduleComponentClick,
  assertRadioScheduleComponentView,
} from './assertions/radioSchedule';
import {
  assertRelatedContentComponentClick,
  assertRelatedContentComponentView,
} from './assertions/relatedContent';
import {
  assertRelatedTopicsComponentClick,
  assertRelatedTopicsComponentView,
} from './assertions/relatedTopics';
import {
  assertTopStoriesComponentClick,
  assertTopStoriesComponentView,
} from './assertions/topStories';

const canonicalTestSuites = [
  {
    path: '/gahuza',
    runforEnv: ['local', 'test', 'live'],
    service: 'gahuza',
    pageIdentifier: 'gahuza.page',
    applicationType: 'responsive',
    contentType: 'index-home',
    tests: [
      assertPageViewBeacon,
      assertScrollableNavigationComponentView,
      assertScrollableNavigationComponentClick,
      assertDropdownNavigationComponentView,
      assertDropdownNavigationComponentClick,
      assertMessageBannerComponentView,
      assertMessageBannerComponentClick,
      assertMostReadComponentView,
      assertMostReadComponentClick,
    ],
  },
  {
    path: '/gahuza/articles/c5y51yxeg53o',
    runforEnv: ['local', 'live'],
    service: 'gahuza',
    pageIdentifier: 'gahuza.articles.c5y51yxeg53o.page',
    applicationType: 'responsive',
    contentType: 'article',
    tests: [
      assertPageViewBeacon,
      assertTopStoriesComponentView,
      assertTopStoriesComponentClick,
      assertFeaturesAnalysisComponentView,
      assertFeaturesAnalysisComponentClick,
      assertRelatedTopicsComponentView,
      assertRelatedTopicsComponentClick,
      assertRelatedContentComponentView,
      assertRelatedContentComponentClick,
      assertMostReadComponentView,
      assertMostReadComponentClick,
    ],
  },
  {
    path: '/afrique/bbc_afrique_radio/liveradio',
    runforEnv: ['local', 'test', 'live'],
    service: 'afrique',
    pageIdentifier: 'afrique.bbc_afrique_radio.liveradio.page',
    applicationType: 'responsive',
    contentType: 'player-live',
    tests: [
      assertPageViewBeacon,
      assertRadioScheduleComponentView,
      assertRadioScheduleComponentClick,
    ],
  },
];

const supportsAmp = ({ contentType }) =>
  !['index-home', 'player-live'].includes(contentType);

const ampTestSuites = canonicalTestSuites.filter(supportsAmp).map(testSuite => {
  return {
    ...testSuite,
    path: `${testSuite.path}.amp`,
    applicationType: 'amp',
    tests: [assertPageViewBeacon],
  };
});

const liteTestSuites = canonicalTestSuites.map(testSuite => {
  return {
    ...testSuite,
    path: `${testSuite.path}.lite`,
    applicationType: 'lite',
    tests: [
      assertPageViewBeacon,
      // TODO: enable this once https://github.com/bbc/simorgh/pull/12360 has been merged!
      // assertMostReadComponentClick
    ],
  };
});

runTestsForPage({
  testSuites: [...canonicalTestSuites, ...ampTestSuites, ...liteTestSuites],
});
