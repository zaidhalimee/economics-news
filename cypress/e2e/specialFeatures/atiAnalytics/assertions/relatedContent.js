import {
  awaitATIComponentView,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClick,
} from '../helpers';

const { RELATED_CONTENT } = COMPONENTS;

export const assertRelatedContentComponentView = () => {
  it('should send a view event for the Related Content component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="related-content-heading"]').scrollIntoView({
        duration: 1000,
      });
      awaitATIComponentView(RELATED_CONTENT);
    });
  });
};

export const assertRelatedContentComponentClick = () => {
  it('should send a click event for the Related Content component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="related-content-heading"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-e2e="related-content-heading"]').find('a').first().click();

      awaitATIComponentClick(RELATED_CONTENT);

      // return to previous page
      cy.visit(url);
    });
  });
};
