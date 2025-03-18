/* eslint-disable consistent-return */
import context from '../../context';

const SERVICE_WORKER_CACHE = 'simorghCache_v1';

export const serviceWorkerIsAvailable = () => {
  it('Service Worker is available', async () => {
    const serviceWorker = await context.page.evaluate(
      () => navigator.serviceWorker,
    );
    expect(serviceWorker).not.toBeNull();
  });
};

export const serviceWorkerIsRegistered = () => {
  it('Service Worker is registered', async () => {
    const registeredServiceWorkers = await context.page.evaluate(() => {
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
};

export const serviceWorkerCaching = () => {
  describe('Service Worker - Caching', () => {
    it('initialises a simorgh cache', async () => {
      const keys = await context.page.evaluate(() => {
        return caches.keys();
      });
      expect(keys).toContain('simorghCache_v1');
    });

    it('simorgh cache is not empty', async () => {
      caches.open(SERVICE_WORKER_CACHE).then(simorghCache =>
        simorghCache.keys().then(keys => {
          expect(keys.length).toBeGreaterThan(0);
        }),
      );
    });

    const cacheableItems = ['cwr.js', 'woff2', 'moment-lib', 'frosted_promo'];

    it(`simorgh cache contains cached responses for cacheable items - ${JSON.stringify(cacheableItems)}`, () => {
      caches.open(SERVICE_WORKER_CACHE).then(simorghCache =>
        simorghCache.keys().then(keys => {
          cacheableItems.forEach(cachedItem => {
            const matchingItems = keys
              .map(({ url }) => url)
              .flat()
              .filter(url => url.includes(cachedItem));
            expect(matchingItems.length).toBeGreaterThan(0);
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
            const matchingItems = urls.filter(url => url.includes(cachedItem));

            matchingCachedItems.push(...matchingItems);
          });

          const difference = urls.filter(x => !matchingCachedItems.includes(x));

          expect(
            difference,
            `unknown cacheable items - ${JSON.stringify(difference)}`,
          ).to.be.empty;
        }),
      );
    });
  });
};
