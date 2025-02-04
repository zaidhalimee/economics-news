/* eslint-disable import/no-relative-packages */
import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { testsThatAlwaysRunForAllPages } from '../testsForAllPages';
import articleTests from './tests';
// import { testsThatFollowSmokeTestConfigForAMPOnly } from './testsForAMPOnly';
// import { testsThatFollowSmokeTestConfigForCanonicalOnly } from './testsForCanonicalOnly';
// import { testsForLiteOnly } from './testsForLiteOnly';

const testSuites = [
  {
    path: '/gahuza/articles/c5y51yxeg53o',
    runforEnv: ['local'],
    service: 'gahuza',
    tests: [testsThatAlwaysRunForAllPages, articleTests],
  },
  {
    path: '/news/articles/cn7k01xp8kxo',
    runforEnv: ['local'],
    service: 'news',
    tests: [testsThatAlwaysRunForAllPages, articleTests],
  },
  {
    path: '/mundo/articles/ce7p1pw7165o',
    runforEnv: ['live'],
    service: 'mundo',
    tests: [testsThatAlwaysRunForAllPages, articleTests],
  },
  {
    path: '/persian/articles/crgxnrdl1xvo',
    runforEnv: ['live'],
    service: 'persian',
    tests: [testsThatAlwaysRunForAllPages, articleTests],
  },
];

runTestsForPage({ pageType: 'articles', testSuites });
