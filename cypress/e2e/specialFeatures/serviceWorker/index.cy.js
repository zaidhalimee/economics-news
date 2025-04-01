import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import {
  serviceWorkerIsAvailable,
  serviceWorkerIsRegistered,
  serviceWorkerCaching,
} from './assertions';

const tests = [
  serviceWorkerIsAvailable,
  serviceWorkerIsRegistered,
  serviceWorkerCaching,
];

const testSuites = [
  {
    path: '/pidgin/articles/czje40pxkypo?renderer_env=live',
    runforEnv: ['local', 'test', 'live'],
    service: 'pidgin',
    tests,
  },
];

runTestsForPage({
  testSuites,
});
