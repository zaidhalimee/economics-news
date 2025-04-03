import interceptGetRequests from '../helpers/interceptGetRequests';
import getTotalPageSize from '../helpers/getTotalPageSize';

const MAX_PAGE_WEIGHT_KB = 100;

const roundTo2Decimals = num => {
  return parseFloat(num.toFixed(2));
};

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

    it(`Page weight for ${pageType} page should be less than ${MAX_PAGE_WEIGHT_KB}Kb`, () => {
      let localPageWeight;

      getTotalPageSize(allRequests)
        .then(localSize => {
          localPageWeight = roundTo2Decimals(localSize);
        })
        .then(() => {
          interceptGetRequests(liveRequests);
          cy.visit(`https://www.bbc.com${path}`);

          getTotalPageSize(liveRequests).then(liveSize => {
            const livePageWeight = roundTo2Decimals(liveSize);
            const percentageDifference =
              (100 * (localPageWeight - livePageWeight)) /
              ((localPageWeight + livePageWeight) / 2);

            const delta = roundTo2Decimals(percentageDifference);
            expect(localPageWeight).to.be.lessThan(MAX_PAGE_WEIGHT_KB);
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
