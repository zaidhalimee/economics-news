import interceptGetRequests from '../helpers/interceptGetRequests';
import getPageSizeInKB from '../helpers/getPageSizeInKB';

const MAX_PAGE_WEIGHT = 100;

export default ({ path, pageType }) => {
  describe('', () => {
    let allRequests = [];
    let liveRequests = [];
    before(() => {
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.setCacheDisabled',
        params: { cacheDisabled: true },
      });
      cy.clearCookies();
      cy.clearLocalStorage();
      interceptGetRequests(allRequests);
      cy.visit(`${path}`);
    });

    afterEach(() => {
      allRequests = [];
      liveRequests = [];
    });

    it(`Page weight for ${pageType} page should be less than ${MAX_PAGE_WEIGHT}Kb`, () => {
      let totalSize = 0;
      let liveSize = 0;
      let localPageWeight;

      // eslint-disable-next-line cypress/unsafe-to-chain-command
      cy.wrap(allRequests)
        .each(({ url, contentLength }) => {
          if (contentLength) {
            totalSize += contentLength;
          } else {
            getPageSizeInKB(url).then(size => {
              totalSize += size;
            });
          }
        })
        .then(() => {
          localPageWeight = parseFloat(totalSize.toFixed(2));
        })
        .then(() => {
          interceptGetRequests(liveRequests);
          cy.visit(`https://www.bbc.com${path}`);
          // eslint-disable-next-line cypress/unsafe-to-chain-command
          cy.wrap(liveRequests)
            .each(({ url, contentLength }) => {
              if (contentLength) {
                liveSize += contentLength;
              } else {
                getPageSizeInKB(url).then(size => {
                  liveSize += size;
                });
              }
            })
            .then(() => {
              const livePageWeight = parseFloat(liveSize.toFixed(2));
              const delta = parseFloat(
                (
                  (100 * (localPageWeight - livePageWeight)) /
                  ((localPageWeight + livePageWeight) / 2)
                ).toFixed(2),
              );
              expect(localPageWeight).to.be.lessThan(MAX_PAGE_WEIGHT);
              cy.task('table', [
                {
                  URL: `${Cypress.config().baseUrl}${path}`,
                  'Page Type': pageType,
                  'Local Page Weight (KB)': localPageWeight,
                  'Live Page Weight (KB)': livePageWeight,
                  'Delta (%) ': delta,
                },
              ]);
            });
        });
    });
  });
};
