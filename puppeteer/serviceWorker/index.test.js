import puppeteer from 'puppeteer';

describe('Service Worker', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox --enable-features=NetworkService'],
      ignoreHTTPSErrors: true,
    });
    page = await browser.newPage();
    page.setDefaultNavigationTimeout(10000);

    // page.on('request', request => {
    //   console.log({ request: request.url() });
    // });

    // page.on('response', response => {
    //   console.log({ response: response.url() });
    // });
  });

  afterAll(async () => {
    await browser.close();
  });

  [
    {
      path: '/pidgin',
      runforEnv: ['local', 'test', 'live'],
      service: 'pidgin',
    },
    {
      path: '/pidgin/articles/czje40pxkypo?renderer_env=live',
      runforEnv: ['local', 'test', 'live'],
      service: 'pidgin',
    },
  ].forEach(async ({ path, runforEnv, tests }) => {
    describe(path, () => {
      const BASE_URL = {
        local: 'http://localhost:7080',
        test: 'https://www.test.bbc.com',
        live: 'https://www.test.bbc.com',
      };

      const environment = process.env.SIMORGH_APP_ENV;
      const baseUrl = BASE_URL[environment];

      beforeEach(async () => {
        await page.goto(`${baseUrl}${path}`, {
          waitUntil: 'networkidle2',
        });
      });

      it('is available', async () => {
        const serviceWorker = await page.evaluate(
          () => navigator.serviceWorker,
        );
        expect(serviceWorker).not.toBeNull();
      });

      it('is registered', async () => {
        const registeredServiceWorkers = await page.evaluate(() => {
          if (navigator.serviceWorker) {
            return navigator.serviceWorker
              .getRegistrations()
              .then(registrations => {
                return registrations.length;
              });
          }
        });

        expect(registeredServiceWorkers).toBeGreaterThanOrEqual(1);
      });

      describe.skip('Caching', () => {
        it('initialises a simorgh cache', async () => {
          const keys = await window.caches.keys();
          expect(keys, 'caches.keys()').to.contain('simorghCache_v1');
        });

        it('simorgh cache is not empty', async () => {
          caches.open(SERVICE_WORKER_CACHE).then(simorghCache =>
            simorghCache.keys().then(keys => {
              expect(keys, `${SERVICE_WORKER_CACHE}.keys()`).not.to.be.empty;
            }),
          );
        });

        const cacheableItems = [
          'cwr.js',
          'woff2',
          'moment-lib',
          'frosted_promo',
        ];

        it(`simorgh cache contains cached responses for cacheable items - ${JSON.stringify(cacheableItems)}`, () => {
          caches.open(SERVICE_WORKER_CACHE).then(simorghCache =>
            simorghCache.keys().then(keys => {
              cacheableItems.forEach(cachedItem => {
                const matchingItems = keys
                  .map(({ url }) => url)
                  .flat()
                  .filter(url => url.includes(cachedItem));
                expect(matchingItems, cachedItem).not.to.be.empty;
              });
            }),
          );
        });

        it(`simorgh cache contains only known cacheable items - ${JSON.stringify(cacheableItems)}`, () => {
          caches.open(SERVICE_WORKER_CACHE).then(simorghCache =>
            simorghCache.keys().then(keys => {
              const matchingCachedItems = [];

              const urls = keys.map(({ url }) => url).flat();

              cacheableItems.forEach(cachedItem => {
                const matchingItems = urls.filter(url =>
                  url.includes(cachedItem),
                );

                matchingCachedItems.push(...matchingItems);
              });

              const difference = urls.filter(
                x => !matchingCachedItems.includes(x),
              );

              expect(
                difference,
                `unknown cacheable items - ${JSON.stringify(difference)}`,
              ).to.be.empty;
            }),
          );
        });
      });
    });
  });
});
