import { interceptGetRequests } from '../helpers/interceptGetRequests';

const MAX_PAGE_WEIGHT = 100;

export const assertPageWeight = ({ path }) => {
  describe('page weight', () => {
    let allRequests = [];
    const getPageSizeInBytes = request => {
      const getSize = `echo ${JSON.stringify(request)} | gzip | wc -c`;
      if (typeof request === 'string') {
        return cy.exec(getSize).then(result => {
          console.log('hello', result.stdout);
          return isNaN(result.stdout) ? 0 : parseFloat(result.stdout) / 1024;
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

    it(`Page weight for ${path} should be less than ${MAX_PAGE_WEIGHT}Kb`, () => {
      let totalSize = 0;
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
