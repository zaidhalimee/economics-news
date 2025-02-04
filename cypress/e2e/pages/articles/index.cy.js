/* eslint-disable import/no-relative-packages */
import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { testsThatAlwaysRunForAllPages } from '../testsForAllPages';
import { testsThatFollowSmokeTestConfig } from './tests';
// import { testsThatFollowSmokeTestConfigForAMPOnly } from './testsForAMPOnly';
// import { testsThatFollowSmokeTestConfigForCanonicalOnly } from './testsForCanonicalOnly';
// import { testsForLiteOnly } from './testsForLiteOnly';

const testSuites = [
  {
    path: '/mundo/articles/ce7p1pw7165o',
    runforEnv: ['live'],
    service: 'mundo',
    tests: [testsThatAlwaysRunForAllPages, testsThatFollowSmokeTestConfig],
  },
];

runTestsForPage({ pageType: 'articles', testSuites });
