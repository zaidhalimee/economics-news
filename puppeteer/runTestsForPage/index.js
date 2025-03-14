import puppeteer from 'puppeteer';
import scope from '../scope';
import * as ChromeLauncher from 'chrome-launcher';
import util from 'node:util';

const exec = util.promisify(require('node:child_process').exec);

const getWebSocketDebuggerUrl = async ({ port }) => {
  const { stdout } = await exec(
    `curl -H "Accept: application/json" http://localhost:${port}/json/version`,
  );
  const { webSocketDebuggerUrl } = JSON.parse(stdout);
  scope.webSocketDebuggerUrl = webSocketDebuggerUrl;
};

export default ({ testSuites, onPageRequest }) => {
  const TIMEOUT = 60000;
  describe('Tests', () => {
    beforeAll(async () => {
      scope.browser = await puppeteer.launch({
        args: ['--no-sandbox'],
      });
    });

    afterAll(async () => {
      await scope.browser.close();
      delete scope.browser;
      delete scope.page;
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
            scope.page = await scope.browser.newPage();
            scope.page.setDefaultNavigationTimeout(TIMEOUT);
            scope.page.on('request', onPageRequest);

            await scope.page.goto(`${baseUrl}${path}`, {
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
