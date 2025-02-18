import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { SCROLLABLE_PROMO } = COMPONENTS;

export const assertScrollablePromoComponentView = () => {
  it('should send a view event for the Scrollable Promo component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="scrollable-promos"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(SCROLLABLE_PROMO);
    });
  });
};

export const assertScrollablePromoComponentClick = () => {
  it('should send a click event for the Scrollable Promo component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="scrollable-promos"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-e2e="scrollable-promos"]').find('a').click();

      awaitATIComponentClickEvent(SCROLLABLE_PROMO);

      // return to previous page
      cy.visit(url);
    });
  });
};
