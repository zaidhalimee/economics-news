export default testSuites => {
  const TIMEOUT = 60000;

  testSuites.forEach(testData => {
    const { path, tests, runforEnv, ...params } = testData;

    const BASE_URL = {
      local: 'http://localhost:7080',
      test: 'https://www.test.bbc.com',
      live: 'https://www.test.bbc.com',
    };

    const environment = process.env.SIMORGH_APP_ENV;
    const baseUrl = BASE_URL[environment];

    if (runforEnv.includes(environment)) {
      let browser;
      let page;

      describe(`${baseUrl}${path}`, () => {
        beforeAll(async () => {
          browser = await puppeteer.launch({
            args: ['--no-sandbox --enable-features=NetworkService'],
            ignoreHTTPSErrors: true,
          });
          page = await browser.newPage();
          page.setDefaultNavigationTimeout(TIMEOUT);
        });

        afterAll(async () => {
          await browser.close();
        });

        tests.forEach(test => test({ path, page, browser, ...params }));
      });
    }
  });
};
