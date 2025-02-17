import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { MESSAGE_BANNER } = COMPONENTS;

export const assertMessageBannerComponentView = () => {
  it('should send a view event for the Message Banner component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="message-banner-1"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(MESSAGE_BANNER);
    });
  });
};

export const assertMessageBannerComponentClick = () => {
  it('should send a click event for the Message Banner component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="message-banner-1"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-testid="message-banner-1"]').find('a').first().click();

      awaitATIComponentClickEvent(MESSAGE_BANNER);

      // return to previous page
      cy.visit(url);
    });
  });
};
