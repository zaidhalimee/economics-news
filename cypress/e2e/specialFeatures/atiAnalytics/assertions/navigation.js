import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { SCROLLABLE_NAVIGATION, DROPDOWN_NAVIGATION } = COMPONENTS;

export const assertScrollableNavigationComponentView = () => {
  it('should send a view event for the Scrollable Navigation component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="scrollable-nav"]').scrollIntoView({
        duration: 1000,
      });
      awaitATIComponentViewEvent(SCROLLABLE_NAVIGATION);
    });
  });
};

export const assertScrollableNavigationComponentClick = () => {
  it('should send a click event for the Scrollable Navigation component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="scrollable-nav"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item & return to the original url
      cy.get('[data-e2e="scrollable-nav"]').find('a').last().click();

      awaitATIComponentClickEvent(SCROLLABLE_NAVIGATION);

      // Return to previous page
      cy.visit(url);
    });
  });
};

// Assertions for nav bar at smaller breakpoints
export const assertDropdownNavigationComponentView = () => {
  it('should send a view event for the Dropdown Navigation component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.viewport(320, 480);
      cy.get('nav button').click();

      awaitATIComponentViewEvent(DROPDOWN_NAVIGATION);
    });
  });
};

export const assertDropdownNavigationComponentClick = () => {
  it('should send a click event for the Dropdown Navigation component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.viewport(320, 480);
      cy.get('nav button').click();

      // Click on first item, then return to the original page
      cy.get('[data-e2e="dropdown-nav"]').find('a').first().click();

      awaitATIComponentClickEvent(DROPDOWN_NAVIGATION);

      // Return to previous page
      cy.visit(url);
    });
  });
};
