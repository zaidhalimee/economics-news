import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { PODCAST_LINKS } = COMPONENTS;

export const assertPodcastLinksComponentView = () => {
  it('should send a view event for the Podcast Links component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="podcast-links"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(PODCAST_LINKS);
    });
  });
};

export const assertPodcastLinksComponentClick = () => {
  it('should send a click event for the Podcast Links component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="podcast-links"]').scrollIntoView({
        duration: 1000,
      });

      // Click on the RSS link
      cy.get('[data-e2e="podcast-links"]')
        .contains('RSS')
        .click({ force: true });

      awaitATIComponentClickEvent(PODCAST_LINKS);

      // return to previous page
      cy.visit(url);
    });
  });
};
