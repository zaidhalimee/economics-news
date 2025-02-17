import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { FEATURES } = COMPONENTS;

export const assertFeaturesAnalysisComponentView = () => {
  it('should send a view event for the Features & Analysis component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="features"]').scrollIntoView({ duration: 1000 });
      awaitATIComponentViewEvent(FEATURES);
    });
  });
};

export const assertFeaturesAnalysisComponentClick = () => {
  it.skip('should send a click event for the Features & Analysis component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="features"]').scrollIntoView({ duration: 1000 });

      // Click on first item
      cy.get('[data-testid="features"]')
        .find('a')
        .not('[aria-hidden="true"]')
        .first()
        .click({ force: true });

      awaitATIComponentClickEvent(FEATURES);

      // return to previous page
      cy.visit(url);
    });
  });
};
