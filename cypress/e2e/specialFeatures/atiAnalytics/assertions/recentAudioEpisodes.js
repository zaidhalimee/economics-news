import { interceptATIAnalyticsBeacons, COMPONENTS } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RECENT_AUDIO_EPISODES } = COMPONENTS;

export const assertRecentAudioEpisodesComponentView = ({
  pageIdentifier,
  contentType,
}) => {
  it('should send a view event for the Recent Audio Episodes component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="recent-episodes-list"]').scrollIntoView({
        duration: 1000,
      });

      assertATIComponentViewEvent({
        component: RECENT_AUDIO_EPISODES,
        pageIdentifier,
        contentType,
      });
    });
  });
};

export const assertRecentAudioEpisodesComponentClick = ({
  pageIdentifier,
  contentType,
}) => {
  it('should send a click event for the Recent Audio Episodes component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-e2e="recent-episodes-list"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-e2e="recent-episodes-list"]')
        .find('a')
        .first()
        .click({ force: true });

      assertATIComponentClickEvent({
        component: RECENT_AUDIO_EPISODES,
        pageIdentifier,
        contentType,
      });

      // return to previous page
      cy.visit(url);
    });
  });
};
