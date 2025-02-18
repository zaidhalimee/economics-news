import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { RECOMMENDATIONS } = COMPONENTS;

export const assertRecommendationsComponentView = () => {
  it('should send a view event for the Recommendations component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="recommendations-heading"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(RECOMMENDATIONS);
    });
  });
};

export const assertRecommendationsComponentClick = () => {
  it('should send a click event for the Recommendations component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="recommendations-heading"]').scrollIntoView({
        duration: 1000,
      });

      // Click on last item
      cy.get('[data-e2e="recommendations-heading"]')
        .find('a')
        .last()
        .click({ force: true });

      awaitATIComponentClickEvent(RECOMMENDATIONS);

      // return to previous page
      cy.visit(url);
    });
  });
};
