/* eslint-disable no-console */
import puppeteer from 'puppeteer';
import context from '../context';
import util from 'node:util';
import * as ChromeLauncher from 'chrome-launcher';

const exec = util.promisify(require('node:child_process').exec);

const getWebSocketDebuggerUrl = async (port: number) => {
  const { stdout } = await exec(
    `curl -H "Accept: application/json" http://localhost:${port}/json/version`,
  );
  const { webSocketDebuggerUrl } = JSON.parse(stdout);
  return webSocketDebuggerUrl;
};

const BASE_URL = {
  local: 'http://localhost:7080',
  test: 'https://www.test.bbc.com',
  live: 'https://www.bbc.com',
};

const onFailedRequest = request => {
  console.log('Request failed:', {
    url: request.url(),
    test: expect.getState().currentTestName,
    errorText: request.failure().errorText,
  });
};

const noOp = () => {
  /** Do nothing */
};

export default ({
  testSuites,
  onPageRequest = noOp,
  visitPageBeforeEachTest = false,
}) => {
  describe('Puppeteer Tests', () => {
    const environment = process.env.PUPPETEER_APP_ENV || 'local';
    const headless = process.env.PUPPETEER_HEADLESS
      ? process.env.PUPPETEER_HEADLESS === 'true'
      : true;

    const baseUrl = BASE_URL[environment];
    const testSuitesForEnvironment = testSuites.filter(({ runforEnv }) =>
      runforEnv.includes(environment),
    );

    testSuitesForEnvironment.forEach(testData => {
      const { path, tests, ...params } = testData;

      let testsToRun = tests;
      if (visitPageBeforeEachTest) {
        testsToRun = tests.map(test => test);
      }

      const url = `${baseUrl}${path}`;

      describe(url, () => {
        const before = visitPageBeforeEachTest ? beforeEach : beforeAll;

        const after = visitPageBeforeEachTest ? afterEach : afterAll;

        before(async () => {
          const chrome = await ChromeLauncher.launch();
          const browserWSEndpoint = await getWebSocketDebuggerUrl(chrome.port);

          context.browser = await puppeteer.connect({
            browserWSEndpoint,
          });

          //   Disable cookie banner
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
          context.page.on('requestfailed', onFailedRequest);

          await context.page.goto(url, {
            waitUntil: 'networkidle2',
          });
        });

        after(async () => {
          await context.browser.close();
        });

        testsToRun.forEach(test => {
          test({ path, ...params });
        });
      });
    });
  });
};
