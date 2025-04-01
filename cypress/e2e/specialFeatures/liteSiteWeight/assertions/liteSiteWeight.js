import { interceptGetRequests } from '../helpers/interceptGetRequests';

const MAX_PAGE_WEIGHT = 100;

export const assertPageWeight = ({ path }) => {
  describe('page weight', () => {
    let allRequests = [];
    before(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      interceptGetRequests(allRequests);
      cy.visit(path);
      cy.wait(1000);
    });
    it(`Page weight for ${path} should be less than ${MAX_PAGE_WEIGHT}Kb`, () => {
      let totalSize = allRequests.reduce(
        (acc, request) => acc + request.sizeInKB,
        0,
      );

      expect(totalSize).to.be.lessThan(MAX_PAGE_WEIGHT);
    });
  });
};
