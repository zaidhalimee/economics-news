import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import { HOME_PAGE } from '../../../../src/app/routes/utils/pageTypes';
import assertScriptSwitch from './assertions';

const testSuites = [
  // Home pages Serbian
  {
    path: '/serbian/cyr',
    service: 'serbian',
    variant: 'cyr',
    otherVariant: 'lat',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/serbian/lat',
    service: 'serbian',
    variant: 'lat',
    otherVariant: 'cyr',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Home pages Uzbek
  {
    path: '/uzbek/cyr',
    service: 'uzbek',
    variant: 'cyr',
    otherVariant: 'lat',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/uzbek/lat',
    service: 'uzbek',
    variant: 'lat',
    otherVariant: 'cyr',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Home pages zhongwen
  {
    path: '/zhongwen/simp',
    service: 'zhongwen',
    variant: 'simp',
    otherVariant: 'trad',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/zhongwen/trad',
    service: 'zhongwen',
    variant: 'trad',
    otherVariant: 'simp',
    pageType: HOME_PAGE,
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Articles pages Serbian
  {
    path: '/serbian/articles/c805k05kr73o/cyr',
    service: 'serbian',
    variant: 'cyr',
    otherVariant: 'lat',
    runforEnv: ['local'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/serbian/articles/c805k05kr73o/lat',
    service: 'serbian',
    variant: 'lat',
    otherVariant: 'cyr',
    runforEnv: ['local'],
    tests: [assertScriptSwitch],
  },
  // Articles pages Uzbek
  {
    path: '/uzbek/articles/cxj3rjxm6r0o/simp',
    service: 'uzbek',
    variant: 'simp',
    otherVariant: 'trad',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/uzbek/articles/cxj3rjxm6r0o/trad',
    service: 'uzbek',
    variant: 'trad',
    otherVariant: 'simp',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Articles pages Zhongwen
  {
    path: '/zhongwen/articles/c3xd4x9prgyo/trad',
    service: 'zhongwen',
    variant: 'trad',
    otherVariant: 'simp',
    runforEnv: ['local'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/zhongwen/articles/c3xd4x9prgyo/simp',
    service: 'zhongwen',
    variant: 'simp',
    otherVariant: 'trad',
    runforEnv: ['local'],
    tests: [assertScriptSwitch],
  },

  // Topic pages Serbian
  {
    path: '/serbian/topics/c5wzvzzz5vrt/cyr',
    service: 'serbian',
    variant: 'cyr',
    otherVariant: 'lat',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/serbian/topics/c5wzvzzz5vrt/lat',
    service: 'serbian',
    variant: 'lat',
    otherVariant: 'cyr',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Topic pages Uzbek
  {
    path: '/uzbek/topics/c8y949r98pgt/cyr',
    service: 'uzbek',
    variant: 'cyr',
    otherVariant: 'lat',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/uzbek/topics/c8y949r98pgt/lat',
    service: 'uzbek',
    variant: 'lat',
    otherVariant: 'cyr',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Topic pages Zhongwen
  {
    path: '/zhongwen/topics/c83plve5vmjt/simp',
    service: 'zhongwen',
    variant: 'simp',
    otherVariant: 'trad',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/zhongwen/topics/c83plve5vmjt/trad',
    service: 'zhongwen',
    variant: 'trad',
    otherVariant: 'simp',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Most Read Serbian
  {
    path: '/serbian/cyr/popular/read',
    service: 'serbian',
    variant: 'cyr',
    otherVariant: 'lat',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/serbian/lat/popular/read',
    service: 'serbian',
    variant: 'lat',
    otherVariant: 'cyr',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  // Most Read zhongwen
  {
    path: '/zhongwen/simp/popular/read',
    service: 'zhongwen',
    variant: 'simp',
    otherVariant: 'trad',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
  {
    path: '/zhongwen/trad/popular/read',
    service: 'zhongwen',
    variant: 'trad',
    otherVariant: 'simp',
    runforEnv: ['local', 'test', 'live'],
    tests: [assertScriptSwitch],
  },
];

runTestsForPage({
  testSuites,
});
