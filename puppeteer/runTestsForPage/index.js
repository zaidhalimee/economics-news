import puppeteer from 'puppeteer';

export default ({ testSuites, onPageRequest }) => {
  const TIMEOUT = 60000;

  describe('Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        args: ['--no-sandbox'],
      });
    });

    afterAll(async () => {
      await browser.close();
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
            page = await browser.newPage();
            page.setDefaultNavigationTimeout(TIMEOUT);
            page.on('request', onPageRequest);

            await page.goto(`${baseUrl}${path}`, {
              waitUntil: 'networkidle2',
            });
          });

          tests.forEach(test => test({ path, ...params }));
        });
      }
    });
  });
};
