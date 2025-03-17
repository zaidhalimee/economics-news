import { COMPONENTS, click, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RECENT_AUDIO_EPISODES } = COMPONENTS;

export const assertRecentAudioEpisodesComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Recent Audio Episodes component', async () => {
    await scrollIntoView('[data-e2e="recent-episodes-list"]');

    assertATIComponentViewEvent({
      component: RECENT_AUDIO_EPISODES,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertRecentAudioEpisodesComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Recent Audio Episodes component', async () => {
    await scrollIntoView('[data-e2e="recent-episodes-list"]');

    await click('[data-e2e="recent-episodes-list"] a');

    assertATIComponentClickEvent({
      component: RECENT_AUDIO_EPISODES,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
