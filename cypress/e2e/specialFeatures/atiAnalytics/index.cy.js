import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { assertPageViewBeacon } from './assertions';
import {
  assertFeaturesAnalysisComponentClick,
  assertFeaturesAnalysisComponentView,
} from './assertions/featuresAnalysis';
import {
  assertLatestMediaComponentClick,
  assertLatestMediaComponentView,
} from './assertions/latestMedia';
import { assertLiteSiteCTAComponentClick } from './assertions/liteSiteCta';
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
  assertPodcastLinksComponentClick,
  assertPodcastLinksComponentView,
} from './assertions/podcastLinks';
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
  assertRecommendationsComponentClick,
  assertRecommendationsComponentView,
} from './assertions/recommendations';
import {
  assertRelatedContentComponentClick,
  assertRelatedContentComponentView,
} from './assertions/relatedContent';
import {
  assertRelatedTopicsComponentClick,
  assertRelatedTopicsComponentView,
} from './assertions/relatedTopics';
import {
  assertScrollablePromoComponentClick,
  assertScrollablePromoComponentView,
} from './assertions/scrollablePromo';
import {
  assertTopStoriesComponentClick,
  assertTopStoriesComponentView,
} from './assertions/topStories';

const canonicalTestSuites = [
  {
    path: '/gahuza',
    runforEnv: ['local', 'live'],
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
    runforEnv: ['local'],
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
    path: '/hindi/articles/c9w59wnx27ro',
    runforEnv: ['live'],
    service: 'hindi',
    pageIdentifier: 'hindi.articles.c9w59wnx27ro.page',
    applicationType: 'responsive',
    contentType: 'article',
    tests: [
      assertPageViewBeacon,
      assertTopStoriesComponentView,
      assertTopStoriesComponentClick,
      assertFeaturesAnalysisComponentView,
      assertFeaturesAnalysisComponentClick,
      assertRecommendationsComponentView,
      assertRecommendationsComponentClick,
      assertPodcastPromoComponentView,
      assertPodcastPromoComponentClick,
      assertScrollablePromoComponentView,
      assertScrollablePromoComponentClick,
      assertRelatedTopicsComponentView,
      assertRelatedTopicsComponentClick,
      assertRelatedContentComponentView,
      assertRelatedContentComponentClick,
      assertMostReadComponentView,
      assertMostReadComponentClick,
    ],
  },
  {
    path: '/hausa/bbc_hausa_radio/liveradio',
    runforEnv: ['local', 'live'],
    service: 'hausa',
    pageIdentifier: 'hausa.bbc_hausa_radio.liveradio.page',
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
  {
    path: '/gahuza/podcasts/p07yh8hb',
    runforEnv: ['local', 'test', 'live'],
    service: 'gahuza',
    pageIdentifier: 'gahuza.bbc_gahuza_radio.podcasts.programmes.p07yh8hb.page',
    applicationType: 'responsive',
    contentType: 'player-episode',
    tests: [
      assertPageViewBeacon,
      assertPodcastLinksComponentView,
      assertPodcastLinksComponentClick,
      assertRecentAudioEpisodesComponentView,
      assertRecentAudioEpisodesComponentClick,
    ],
  },
  {
    path: '/gahuza/podcasts/p07yh8hb/p094vs2n',
    runforEnv: ['local', 'test', 'live'],
    service: 'gahuza',
    pageIdentifier: 'gahuza.bbc_gahuza_radio.podcasts.p094vs2n.page',
    applicationType: 'responsive',
    contentType: 'player-episode',
    tests: [
      assertPageViewBeacon,
      assertPodcastLinksComponentView,
      assertPodcastLinksComponentClick,
      assertRecentAudioEpisodesComponentView,
      assertRecentAudioEpisodesComponentClick,
    ],
  },
  {
    path: '/gahuza/popular/read',
    runforEnv: ['local', 'test', 'live'],
    service: 'gahuza',
    pageIdentifier: 'gahuza.popular.read.page',
    applicationType: 'responsive',
    contentType: 'list-datadriven',
    tests: [assertPageViewBeacon],
  },
  {
    path: '/hausa/articles/cw43vy8zdjvo',
    runforEnv: ['local', 'live'],
    service: 'hausa',
    pageIdentifier: 'hausa.articles.cw43vy8zdjvo.page',
    applicationType: 'responsive',
    contentType: 'article-sfv',
    tests: [
      assertPageViewBeacon,
      assertLatestMediaComponentView,
      assertLatestMediaComponentClick,
    ],
  },
  {
    path: '/afrique/bbc_afrique_tv/tv_programmes/w13xttmz',
    runforEnv: ['local', 'test', 'live'],
    service: 'afrique',
    pageIdentifier: 'afrique.bbc_afrique_tv.tv_programmes.w13xttmz.page',
    applicationType: 'responsive',
    contentType: 'player-episode',
    tests: [assertPageViewBeacon],
  },
  {
    path: '/afrique/bbc_afrique_tv/tv/w3ct05mp',
    runforEnv: ['local', 'test', 'live'],
    service: 'afrique',
    pageIdentifier: 'afrique.bbc_afrique_tv.tv.w3ct05mp.page',
    applicationType: 'responsive',
    contentType: 'player-episode',
    tests: [assertPageViewBeacon],
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

// Most Read & On Demand TV pages do not currently support .lite
const supportsLite = ({ path, contentType }) =>
  !path.includes('_tv') && contentType !== 'list-datadriven';

const liteTestSuites = canonicalTestSuites
  .filter(supportsLite)
  .map(testSuite => {
    const liteSiteTests = [assertPageViewBeacon];

    switch (testSuite.contentType) {
      case 'article':
        liteSiteTests.push(
          ...[assertLiteSiteCTAComponentClick, assertMostReadComponentClick],
        );
        break;
      case 'index-home':
        liteSiteTests.push(assertMostReadComponentClick);
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
