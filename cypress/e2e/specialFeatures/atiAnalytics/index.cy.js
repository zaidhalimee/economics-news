import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { assertPageViewBeacon } from './assertions';
import {
  assertFeaturesAnalysisComponentClick,
  assertFeaturesAnalysisComponentView,
} from './assertions/featuresAnalysis';
// import { assertLiteSiteCTAComponentClick } from './assertions/liteSiteCta';
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
  assertPodcastPromoComponentClick,
  assertPodcastPromoComponentView,
} from './assertions/podcastPromo';
import {
  assertRadioScheduleComponentClick,
  assertRadioScheduleComponentView,
} from './assertions/radioSchedule';
import {
  assertRecentAudioEpisodesComponentClick,
  assertRecentAudioEpisodesComponentView,
} from './assertions/recentAudioEpisodes';
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
      assertPodcastPromoComponentView,
      assertPodcastPromoComponentClick,
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
  {
    path: '/afrique/bbc_afrique_radio/programmes/p030s6dq',
    runforEnv: ['local', 'test', 'live'],
    service: 'afrique',
    pageIdentifier: 'afrique.bbc_afrique_radio.programmes.p030s6dq.page',
    applicationType: 'responsive',
    contentType: 'player-episode',
    tests: [
      assertPageViewBeacon,
      assertRecentAudioEpisodesComponentView,
      assertRecentAudioEpisodesComponentClick,
      assertRadioScheduleComponentView,
      assertRadioScheduleComponentClick,
    ],
  },
];

const supportsAmp = ({ contentType }) =>
  !['index-home', 'player-live', 'player-episode'].includes(contentType);

const ampTestSuites = canonicalTestSuites.filter(supportsAmp).map(testSuite => {
  return {
    ...testSuite,
    path: `${testSuite.path}.amp`,
    applicationType: 'amp',
    tests: [assertPageViewBeacon],
  };
});

const liteTestSuites = canonicalTestSuites.map(testSuite => {
  const liteSiteTests = [assertPageViewBeacon];

  switch (testSuite.contentType) {
    case 'article':
      // TODO: enable this once https://github.com/bbc/simorgh/pull/12419 has been merged!
      // liteSiteTests.push(assertLiteSiteCTAComponentClick);
      break;
    case 'index-home':
      // TODO: enable this once https://github.com/bbc/simorgh/pull/12360 has been merged!
      // liteSiteTests.push(assertMostReadComponentClick);
      break;
    default:
      break;
  }

  return {
    ...testSuite,
    path: `${testSuite.path}.lite`,
    applicationType: 'lite',
    tests: [...liteSiteTests],
  };
});

runTestsForPage({
  testSuites: [...canonicalTestSuites, ...ampTestSuites, ...liteTestSuites],
});
