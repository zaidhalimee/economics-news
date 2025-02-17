import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { RELATED_TOPICS } = COMPONENTS;

export const assertRelatedTopicsComponentView = () => {
  it('should send a view event for the Related Topics component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="related-topics"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(RELATED_TOPICS);
    });
  });
};

export const assertRelatedTopicsComponentClick = () => {
  it('should send a click event for the Related Topics component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="related-topics"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-testid="related-topics"]').find('a').first().click();

      awaitATIComponentClickEvent(RELATED_TOPICS);

      // return to previous page
      cy.visit(url);
    });
  });
};
