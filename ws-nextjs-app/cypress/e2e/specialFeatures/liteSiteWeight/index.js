import runTestsForPage from '#nextjs/cypress/support/helpers/runTestsForPage';
import assertPageWeight from '#cypress/e2e/specialFeatures/liteSiteWeight/assertions/liteSiteWeight';

const liteTestSuites = [
  {
    path: '/urdu/live/c04z6x46l0vt.lite?renderer_env=live',
    runforEnv: 'local',
    pageType: 'Live',
    tests: [assertPageWeight],
  },
];

runTestsForPage({
  testSuites: [...liteTestSuites],
  testIsolation: true,
});
