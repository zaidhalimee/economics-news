import {
  awaitATIPageView,
  getATIParamsFromURL,
  interceptATIAnalyticsBeacons,
} from '../helpers';

// eslint-disable-next-line import/prefer-default-export
export const assertPageViewBeacon = ({
  pageIdentifier,
  applicationType,
  contentType,
}) => {
  it('should send a page view beacon', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      awaitATIPageView().then(({ request }) => {
        const params = getATIParamsFromURL(request.url);

        expect(params.p).to.equal(pageIdentifier);
        expect(params.x2).to.equal(`[${applicationType}]`);
        expect(params.x7).to.equal(`[${contentType}]`);
      });
    });
  });
};
