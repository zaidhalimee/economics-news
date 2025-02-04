/* eslint-disable import/no-relative-packages */
import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { testsThatAlwaysRunForAllPages } from '../testsForAllPages';
import crossPlatformTests from './tests';
import ampTests from './testsForAMPOnly';
import canonicalTests from './testsForCanonicalOnly';
import liteTests from './testsForLiteOnly';

const allTestsForAllPagesAndPlatforms = [
  ...testsThatAlwaysRunForAllPages,
  ...crossPlatformTests,
];

const canonicalTestSuites = [
  {
    path: '/gahuza/articles/c5y51yxeg53o',
    runforEnv: ['local'],
    service: 'gahuza',
    tests: [...allTestsForAllPagesAndPlatforms, canonicalTests],
  },
  {
    path: '/news/articles/cn7k01xp8kxo',
    runforEnv: ['local'],
    service: 'news',
    tests: [...allTestsForAllPagesAndPlatforms, canonicalTests],
  },
  {
    path: '/serbian/articles/c805k05kr73o/cyr',
    runforEnv: ['local'],
    service: 'serbian',
    variant: 'cyr',
    tests: [...allTestsForAllPagesAndPlatforms, canonicalTests],
  },
  {
    path: '/serbian/articles/c805k05kr73o/lat',
    runforEnv: ['local'],
    service: 'serbian',
    variant: 'lat',
    tests: [...allTestsForAllPagesAndPlatforms, canonicalTests],
  },
  {
    path: '/mundo/articles/ce7p1pw7165o',
    runforEnv: ['live'],
    service: 'mundo',
    tests: [...allTestsForAllPagesAndPlatforms, canonicalTests],
  },
  {
    path: '/persian/articles/crgxnrdl1xvo',
    runforEnv: ['live'],
    service: 'persian',
    tests: [...allTestsForAllPagesAndPlatforms, canonicalTests],
  },
];

// add scenarios for amp
const ampTestSuites = canonicalTestSuites.map(testSuite => {
  return {
    ...testSuite,
    path: `${testSuite.path}.amp`,
    tests: [...allTestsForAllPagesAndPlatforms, ampTests],
  };
});

// add scenarios for lite
const liteTestSuites = canonicalTestSuites.map(testSuite => {
  return {
    ...testSuite,
    path: `${testSuite.path}.lite`,
    tests: [...allTestsForAllPagesAndPlatforms, liteTests],
  };
});

runTestsForPage({
  pageType: 'articles',
  testSuites: [...canonicalTestSuites, ...ampTestSuites, ...liteTestSuites],
});
