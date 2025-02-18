import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { RECENT_AUDIO_EPISODES } = COMPONENTS;

export const assertRecentAudioEpisodesComponentView = () => {
  it('should send a view event for the Recent Audio Episodes component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="recent-episodes-list"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(RECENT_AUDIO_EPISODES);
    });
  });
};

export const assertRecentAudioEpisodesComponentClick = () => {
  it('should send a click event for the Recent Audio Episodes component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="recent-episodes-list"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-e2e="recent-episodes-list"]').find('a').first().click();

      awaitATIComponentClickEvent(RECENT_AUDIO_EPISODES);

      // return to previous page
      cy.visit(url);
    });
  });
};
