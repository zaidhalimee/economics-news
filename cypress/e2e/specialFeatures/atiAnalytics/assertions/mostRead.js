import {
  awaitATIComponentView,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClick,
} from '../helpers';

const { MOST_READ } = COMPONENTS;

export const assertMostReadComponentView = () => {
  it('should send a view beacon for the Most Read component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="most-read"]').scrollIntoView({ duration: 1000 });
      awaitATIComponentView(MOST_READ);
    });
  });
};

export const assertMostReadComponentClick = () => {
  it('should send a click beacon for the Most Read component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="most-read"]').scrollIntoView({ duration: 1000 });

      // Click on first item
      cy.get('[data-e2e="most-read"]').find('a').first().click();

      awaitATIComponentClick(MOST_READ);

      // return to previous page
      cy.visit(url);
    });
  });
};
