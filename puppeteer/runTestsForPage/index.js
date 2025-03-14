import puppeteer from 'puppeteer';
import context from '../context';

export default ({ testSuites, onPageRequest }) => {
  const TIMEOUT = 60000;
  describe('Tests', () => {
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
            context.page.setDefaultNavigationTimeout(TIMEOUT);
            context.page.on('request', onPageRequest);

            await context.page.goto(`${baseUrl}${path}`, {
              waitUntil: 'networkidle2',
            });
          });

          tests.forEach(test => {
            test({ path, ...params });
          });
        });
      }
    });
  });
};
