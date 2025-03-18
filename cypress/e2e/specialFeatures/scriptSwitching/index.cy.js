import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { HOME_PAGE } from '../../../../src/app/routes/utils/pageTypes';
import assertions from './assertions';

const testSuites = [
  {
    path: '/serbian/cyr',
    service: 'serbian',
    variant: 'cyr',
    otherVariant: 'lat',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertions],
  },
  {
    path: '/serbian/lat',
    service: 'serbian',
    variant: 'lat',
    otherVariant: 'cyr',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertions],
  },
];

runTestsForPage({
  testSuites,
});
