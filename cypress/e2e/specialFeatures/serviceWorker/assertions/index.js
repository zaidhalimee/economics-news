export default () => {
  describe('Service Worker', () => {
    it('is available', () => {
      cy.window(win => {
        expect(win.navigator.serviceWorker).to.be.a('function');
      });
    });

    describe('Caching', () => {
      it('initialises a simorgh cache', async () => {
        const keys = await caches.keys();
        expect(keys, 'Cache.keys').to.contain('simorghCache_v1');
      });

      it('simorgh cache is not empty', async () => {
        caches.open('simorghCache_v1').then(simorghCache =>
          simorghCache.keys().then(keys => {
            expect(keys, 'simorgh cache keys').not.to.be.empty;
          }),
        );
      });

      const cacheableItems = ['cwr.js', 'woff2', 'moment-lib', 'frosted_promo'];

      it(`simorgh cache contains cached responses for cacheable items - ${JSON.stringify(cacheableItems)}`, () => {
        caches.open('simorghCache_v1').then(simorghCache =>
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
        caches.open('simorghCache_v1').then(simorghCache =>
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
};
