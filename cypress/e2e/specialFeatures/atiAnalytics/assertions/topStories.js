import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { TOP_STORIES } = COMPONENTS;

export const assertTopStoriesComponentView = () => {
  it('should send a view event for the Top Stories component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="top-stories"]').scrollIntoView({ duration: 1000 });

      awaitATIComponentViewEvent(TOP_STORIES);
    });
  });
};

export const assertTopStoriesComponentClick = () => {
  it('should send a click event for the Top Stories component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="top-stories"]').scrollIntoView({ duration: 1000 });

      // Click on first item
      cy.get('[data-testid="top-stories"]').find('a').first().click();

      awaitATIComponentClickEvent(TOP_STORIES);

      // return to previous page
      cy.visit(url);
    });
  });
};
