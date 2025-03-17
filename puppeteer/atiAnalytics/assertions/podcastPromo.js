import { COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { PODCAST_PROMO } = COMPONENTS;

export const assertPodcastPromoComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Podcast Promo component', async () => {
    await scrollIntoView('[data-e2e="podcast-promo"]');

    assertATIComponentViewEvent({
      component: PODCAST_PROMO,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertPodcastPromoComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Podcast Promo component', async () => {
    await scrollIntoView('[data-e2e="podcast-promo"]');

    await scrollIntoView('[data-e2e="podcast-promo"] a');

    assertATIComponentClickEvent({
      component: PODCAST_PROMO,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
