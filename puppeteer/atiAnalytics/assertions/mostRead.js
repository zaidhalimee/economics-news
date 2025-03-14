import { click, COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { MOST_READ } = COMPONENTS;

export const assertMostReadComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Most Read component', async () => {
    await scrollIntoView('[data-e2e="most-read"]');

    assertATIComponentViewEvent({
      component: MOST_READ,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertMostReadComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Most Read component', async () => {
    await scrollIntoView('[data-e2e="most-read"]');

    await click('[data-e2e="most-read"] a');

    assertATIComponentClickEvent({
      component: MOST_READ,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
