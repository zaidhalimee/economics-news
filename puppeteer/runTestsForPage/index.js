import puppeteer from 'puppeteer';
import context from '../context';

export default ({ testSuites, onPageRequest }) => {
  const TIMEOUT = 60000;
  describe('', () => {
    beforeAll(async () => {
      context.browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: false,
      });
    });

    afterAll(async () => {
      await context.browser.close();
      delete context.browser;
      delete context.page;
    });

    testSuites.forEach(testData => {
      const { path, tests, runforEnv, ...params } = testData;

      const BASE_URL = {
        local: 'http://localhost:7080',
        test: 'https://www.test.bbc.com',
        live: 'https://www.bbc.com',
      };

      const environment = process.env.SIMORGH_APP_ENV;
      const baseUrl = BASE_URL[environment];

      if (runforEnv.includes(environment)) {
        describe(`${baseUrl}${path}`, () => {
          beforeAll(async () => {
            context.page = await context.browser.newPage();

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

            context.page.setDefaultNavigationTimeout(TIMEOUT);
            context.page.on('request', onPageRequest);

            await context.page.goto(`${baseUrl}${path}`, {
              waitUntil: 'networkidle2',
            });

            await context.page.set;
          });

          tests.forEach(test => {
            test({ path, ...params });
          });
        });
      }
    });
  });
};
