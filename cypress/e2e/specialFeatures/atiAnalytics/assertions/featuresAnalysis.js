import {
  awaitATIComponentView,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClick,
} from '../helpers';

const { FEATURES } = COMPONENTS;

export const assertFeaturesAnalysisComponentView = () => {
  it('should send a view event for the Features & Analysis component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="features"]').scrollIntoView({ duration: 1000 });
      awaitATIComponentView(FEATURES);
    });
  });
};

export const assertFeaturesAnalysisComponentClick = () => {
  it('should send a click event for the Features & Analysis component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="features"]').scrollIntoView({ duration: 1000 });

      // Click on first item
      cy.get('[data-testid="features"]').find('a').first().click();

      awaitATIComponentClick(FEATURES);

      // return to previous page
      cy.visit(url);
    });
  });
};
