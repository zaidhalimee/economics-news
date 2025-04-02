import interceptGetRequests from '../helpers/interceptGetRequests';
import getPageSizeInBytes from '../helpers/getPageSizeInBytes';

const MAX_PAGE_WEIGHT = 100;

export default ({ path, pageType }) => {
  describe('Page weight', () => {
    const allRequests = [];

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

    it(`for ${pageType} page should be less than ${MAX_PAGE_WEIGHT}Kb`, () => {
      let totalSize = 0;

      // eslint-disable-next-line cypress/unsafe-to-chain-command
      cy.wrap(allRequests)
        .each(request => {
          getPageSizeInBytes(request).then(size => {
            totalSize += size;
          });
        })
        .then(() => {
          expect(parseFloat(totalSize.toFixed(2))).to.be.lessThan(
            MAX_PAGE_WEIGHT,
          );
        });
    });
  });
};
