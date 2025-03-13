import puppeteer from 'puppeteer';

export default ({ testSuites }) => {
  const TIMEOUT = 60000;

  testSuites.forEach(testData => {
    const { path, tests, runforEnv, ...params } = testData;

    const BASE_URL = {
      local: 'http://localhost:7080',
      test: 'https://www.test.bbc.com',
      live: 'https://www.bbc.com',
    };

    const environment = process.env.SIMORGH_APP_ENV;
    const baseUrl = BASE_URL[environment];

    // if (runforEnv.includes(environment)) {
    let browser;
    let page;
    let requests = [];

    describe(`${baseUrl}${path}`, () => {
      beforeAll(async () => {
        browser = await puppeteer.launch({
          args: ['--no-sandbox'],
        });
        page = await browser.newPage();
        page.setDefaultNavigationTimeout(TIMEOUT);
        page.on('request', request => {
          requests.push(request.url);
        });
      });

      afterAll(async () => {
        await browser.close();
        requests = [];
      });

      it(`should run a test for ${path}`, () => {
        expect(true).toBe(true);
      });

      tests?.forEach(test =>
        test({ path, page, browser, requests, ...params }),
      );
    });
    // }
  });
};
