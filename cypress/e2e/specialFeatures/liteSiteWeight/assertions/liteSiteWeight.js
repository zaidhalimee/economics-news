import interceptGetRequests from '../helpers/interceptGetRequests';
import getPageSizeInKB from '../helpers/getPageSizeInKB';

const MAX_PAGE_WEIGHT = 100;

export default ({ path, pageType }) => {
  describe('Page weight', () => {
    let allRequests = [];

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
    });

    it(`for ${pageType} page should be less than ${MAX_PAGE_WEIGHT}Kb`, () => {
      let totalSize = 0;

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
          const pageWeight = parseFloat(totalSize.toFixed(2));
          cy.task('table', [
            {
              URL: `${Cypress.config().baseUrl}${path}`,
              'Page Type': pageType,
              'Page Weight (KB)': pageWeight,
            },
          ]);
          expect(pageWeight).to.be.lessThan(MAX_PAGE_WEIGHT);
        });
    });
  });
};
