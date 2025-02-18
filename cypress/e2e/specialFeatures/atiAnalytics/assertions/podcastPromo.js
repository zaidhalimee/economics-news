import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { PODCAST_PROMO } = COMPONENTS;

export const assertPodcastPromoComponentView = () => {
  it('should send a view event for the Podcast Promo component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="podcast-promo"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(PODCAST_PROMO);
    });
  });
};

export const assertPodcastPromoComponentClick = () => {
  it('should send a click event for the Podcast Promo component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="podcast-promo"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-e2e="podcast-promo"]').find('a').last().click();

      awaitATIComponentClickEvent(PODCAST_PROMO);

      // return to previous page
      cy.visit(url);
    });
  });
};
