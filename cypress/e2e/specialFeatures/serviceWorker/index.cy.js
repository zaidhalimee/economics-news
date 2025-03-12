import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { assertServiceWorker } from './assertions';

const testSuites = [
  {
    path: '/pidgin',
    runforEnv: ['local', 'test', 'live'],
    service: 'pidgin',
    tests: [assertServiceWorker],
  },
];

runTestsForPage({ testSuites });
