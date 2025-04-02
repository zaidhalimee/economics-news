import interceptGetRequests from '../helpers/interceptGetRequests';

const MAX_PAGE_WEIGHT = 100;

export default ({ path, pageType }) => {
  describe('Page weight', () => {
    const allRequests = [];
    const getPageSizeInBytes = request => {
      const getSize = `echo ${JSON.stringify(request)} | gzip | wc -c`;
      if (typeof request === 'string') {
        return cy.exec(getSize).then(result => {
          return Number.isNaN(result.stdout)
            ? 0
            : (parseFloat(result.stdout) / 1024).toFixed(2);
        });
      }
      return cy.wrap(0);
    };

    before(() => {
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.setCacheDisabled',
        params: { cacheDisabled: true },
      });
      cy.clearCookies();
      cy.clearLocalStorage();
      interceptGetRequests(allRequests);
      cy.visit(`${path}?renderer_env=live`);
    });

    it(`for ${pageType} page ${path} should be less than ${MAX_PAGE_WEIGHT}Kb`, () => {
      let totalSize = 0;

      // eslint-disable-next-line cypress/unsafe-to-chain-command
      cy.wrap(allRequests)
        .each(request => {
          getPageSizeInBytes(request).then(size => {
            totalSize += size;
          });
        })
        .then(() => {
          expect(totalSize).to.be.lessThan(MAX_PAGE_WEIGHT);
        });
    });
  });
};
