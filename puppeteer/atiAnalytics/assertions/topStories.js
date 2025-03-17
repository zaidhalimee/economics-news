import { COMPONENTS, scrollIntoView, click } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { TOP_STORIES } = COMPONENTS;

export const assertTopStoriesComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Top Stories component', async () => {
    await scrollIntoView('[data-testid="top-stories"]');

    assertATIComponentViewEvent({
      component: TOP_STORIES,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertTopStoriesComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Top Stories component', async () => {
    await scrollIntoView('[data-testid="top-stories"]');

    await click('[data-testid="top-stories"] a');

    assertATIComponentClickEvent({
      component: TOP_STORIES,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
