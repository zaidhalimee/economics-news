import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { LATEST_MEDIA } = COMPONENTS;

export const assertLatestMediaComponentView = () => {
  it('should send a view event for the Latest Media component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="latest-media"]').scrollIntoView({ duration: 1000 });

      awaitATIComponentViewEvent(LATEST_MEDIA);
    });
  });
};

export const assertLatestMediaComponentClick = () => {
  it('should send a click event for the Latest Media component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="latest-media"]').scrollIntoView({ duration: 1000 });

      // Click on first item
      cy.get('[data-testid="latest-media"]').find('a').first().click();

      awaitATIComponentClickEvent(LATEST_MEDIA);

      // return to previous page
      cy.visit(url);
    });
  });
};
