import interceptGetRequests from '../helpers/interceptGetRequests';
import getTotalPageSize from '../helpers/getTotalPageSize';
import roundTo2Decimals from '../helpers/roundTo2Decimals';

const MAX_PAGE_WEIGHT_KB = 100;

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
      getTotalPageSize(allRequests).then(localPageWeight => {
        interceptGetRequests(liveRequests);
        cy.visit(`https://www.bbc.com${path}`);

        getTotalPageSize(liveRequests).then(livePageWeight => {
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
