import assertPageWeight from '#cypress/e2e/specialFeatures/liteSiteWeight/assertions/liteSiteWeight';
import runTestsForPage from '../../../support/helpers/runTestsForPage';

const liteTestSuites = [
  {
    path: '/urdu/live/c04z6x46l0vt.lite?renderer_env=live',
    runforEnv: 'local',
    pageType: 'Live',
    tests: [assertPageWeight],
  },
];

runTestsForPage({
  pageType: '',
  testSuites: [...liteTestSuites],
  testIsolation: true,
});
