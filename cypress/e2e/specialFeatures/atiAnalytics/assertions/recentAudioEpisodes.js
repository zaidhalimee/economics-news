import { interceptATIAnalyticsBeacons, COMPONENTS } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RECENT_AUDIO_EPISODES } = COMPONENTS;

export const assertRecentAudioEpisodesComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
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
        useReverb,
      });
    });
  });
};

export const assertRecentAudioEpisodesComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Recent Audio Episodes component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);
      console.log(
        'the url in assertRecentAudioEpisodesComponentClick before the click is',
        url,
      );
      cy.log(
        'the url in assertRecentAudioEpisodesComponentClick before the click is',
        url,
      );

      cy.get('[data-e2e="recent-episodes-list"]').scrollIntoView({
        duration: 1000,
      });

      // Click on first item
      cy.get('[data-e2e="recent-episodes-list"]').find('a').first().click();

      assertATIComponentClickEvent({
        component: RECENT_AUDIO_EPISODES,
        pageIdentifier,
        contentType,
        useReverb,
      });
      cy.url().then(url2 => {
        console.log(
          'the url in assertRecentAudioEpisodesComponentClick after the click is',
          url2,
        );
        cy.log(
          'the url in assertRecentAudioEpisodesComponentClick after the click is',
          url2,
        );
      });
      // return to previous page
      cy.visit(url);

      console.log(
        'the url in assertRecentAudioEpisodesComponentClick after the revisiting of the previous page is',
        url,
      );
      cy.log(
        'the url in assertRecentAudioEpisodesComponentClick after the revisiting of the previous page is',
        url,
      );
    });
  });
};
