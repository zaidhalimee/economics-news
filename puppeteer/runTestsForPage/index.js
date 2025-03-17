import puppeteer from 'puppeteer';
import context from '../context';

const BASE_URL = {
  local: 'http://localhost:7080',
  test: 'https://www.test.bbc.com',
  live: 'https://www.bbc.com',
};

export default ({
  testSuites,
  onPageRequest,
  visitPageBeforeEachTest = false,
}) => {
  describe('Puppeteer Tests', () => {
    const environment = process.env.SIMORGH_APP_ENV;
    const baseUrl = BASE_URL[environment];
    const testSuitesForEnvironment = testSuites.filter(({ runforEnv }) =>
      runforEnv.includes(environment),
    );

    testSuitesForEnvironment.forEach(testData => {
      const { path, tests, ...params } = testData;

      const testsToRun = tests;
      if (visitPageBeforeEachTest) {
        tests.map(test => {
          return { ...testData, tests: [test] };
        });
      }

      const url = `${baseUrl}${path}`;

      describe(url, () => {
        const before = visitPageBeforeEachTest ? beforeEach : beforeAll;

        const after = visitPageBeforeEachTest ? afterEach : afterAll;

        before(async () => {
          context.browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            // headless: false,
          });

          // Disable cookie banner
          await context.browser.setCookie({
            name: 'ckns_explicit',
            value: '1',
            domain: new URL(baseUrl).hostname,
            path: '/',
            sameParty: false,
            expires: -1,
            httpOnly: false,
            secure: false,
            sourceScheme: 'NonSecure',
          });

          context.page = await context.browser.newPage();
          context.page.setDefaultNavigationTimeout(context.TIMEOUT);
          context.page.on('request', onPageRequest);

          await context.page.goto(url, {
            waitUntil: 'networkidle2',
          });
        });

        after(async () => {
          await context.page.close();
          await context.browser.close();
        });

        testsToRun.forEach(test => {
          test({ path, ...params });
        });
      });
    });
  });
};
