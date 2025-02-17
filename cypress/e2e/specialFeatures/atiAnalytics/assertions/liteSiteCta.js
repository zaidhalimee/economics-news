import {
  awaitATIComponentClickEvent,
  COMPONENTS,
  interceptATIAnalyticsBeacons,
} from '../helpers';

const { LITE_SITE_CTA } = COMPONENTS;

// eslint-disable-next-line import/prefer-default-export
export const assertLiteSiteCTAComponentClick = () => {
  it('should send a click event for the Lite Site CTA component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="to-main-site"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-e2e="to-main-site"]').find('a').first().click();

      awaitATIComponentClickEvent(LITE_SITE_CTA);

      // return to previous page
      cy.visit(url);
    });
  });
};
