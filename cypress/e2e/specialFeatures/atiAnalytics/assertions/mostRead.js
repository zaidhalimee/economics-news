import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { MOST_READ } = COMPONENTS;

export const assertMostReadComponentView = () => {
  it('should send a view event for the Most Read component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="most-read"]').scrollIntoView({ duration: 1000 });
      awaitATIComponentViewEvent(MOST_READ);
    });
  });
};

export const assertMostReadComponentClick = () => {
  it('should send a click event for the Most Read component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="most-read"]').scrollIntoView({ duration: 1000 });

      // Click on first item
      cy.get('[data-e2e="most-read"]').find('a').first().click();

      awaitATIComponentClickEvent(MOST_READ);

      // return to previous page
      cy.visit(url);
    });
  });
};
