import { interceptGetRequests } from '../helpers/interceptGetRequests';

const MAX_PAGE_WEIGHT = 100;

export const assertPageWeight = ({ path }) => {
  describe('page weight', () => {
    let totalSize;
    before(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      interceptGetRequests(path);
      cy.visit(path);
      cy.wait(['@pageRequest', '@chartbeatRequest']).then(interceptions => {
        let pageSize = interceptions[0].response.body.length / 1024;
        let chartbeatSize = interceptions[1].response.body.length / 1024;
        console.log('sizes', pageSize, chartbeatSize);
        totalSize = pageSize + chartbeatSize;
      });
    });
    it(`Page weight for ${path} should be less than ${MAX_PAGE_WEIGHT}Kb `, () => {
      expect(totalSize).to.be.lessThan(MAX_PAGE_WEIGHT);
    });
  });
};
