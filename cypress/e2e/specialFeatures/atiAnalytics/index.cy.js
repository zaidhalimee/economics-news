import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { assertPageViewBeacon } from './assertions';
import {
  assertFeaturesAnalysisComponentClick,
  assertFeaturesAnalysisComponentView,
} from './assertions/featuresAnalysis';
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
      assertFeaturesAnalysisComponentView,
      assertFeaturesAnalysisComponentClick,
      assertMostReadComponentView,
      assertMostReadComponentClick,
    ],
  },
];

const isHomePage = (path, service) => path === `/${service}`;

const ampTestSuites = canonicalTestSuites
  .filter(({ path, service }) => !isHomePage(path, service))
  .map(testSuite => {
    return {
      ...testSuite,
      path: `${testSuite.path}.amp`,
      applicationType: 'amp',
      tests: [...testSuite.tests],
    };
  });

const liteTestSuites = canonicalTestSuites.map(testSuite => {
  return {
    ...testSuite,
    path: `${testSuite.path}.lite`,
    applicationType: 'lite',
    tests: [
      assertPageViewBeacon,
      // assertMostReadComponentClick
    ],
  };
});

runTestsForPage({
  testSuites: [...canonicalTestSuites, ...ampTestSuites, ...liteTestSuites],
});
