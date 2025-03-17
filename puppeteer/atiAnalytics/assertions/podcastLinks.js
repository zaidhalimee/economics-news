import { click, COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { PODCAST_LINKS } = COMPONENTS;

export const assertPodcastLinksComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Podcast Links component', async () => {
    await scrollIntoView('[data-e2e="podcast-links"]');

    assertATIComponentViewEvent({
      component: PODCAST_LINKS,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertPodcastLinksComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Podcast Links component', async () => {
    await scrollIntoView('[data-e2e="podcast-links"]');

    // Click on the first link
    await click('[data-e2e="podcast-links"] a');

    assertATIComponentClickEvent({
      component: PODCAST_LINKS,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
