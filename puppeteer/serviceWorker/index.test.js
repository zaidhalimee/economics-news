/* eslint-disable import/extensions */
import runTestsForPage from '../runTestsForPage/index.ts';

import {
  serviceWorkerIsAvailable,
  serviceWorkerIsRegistered,
  serviceWorkerCaching,
} from './assertions/index.ts';

const tests = [
  serviceWorkerIsAvailable,
  serviceWorkerIsRegistered,
  serviceWorkerCaching,
];

const testSuites = [
  {
    path: '/pidgin',
    runforEnv: ['local', 'test', 'live'],
    service: 'pidgin',
    tests,
  },
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
