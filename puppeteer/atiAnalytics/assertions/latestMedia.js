import { COMPONENTS, scrollIntoView, click } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { LATEST_MEDIA } = COMPONENTS;

export const assertLatestMediaComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Latest Media component', async () => {
    await scrollIntoView('[data-testid="latest-media"]');

    assertATIComponentViewEvent({
      component: LATEST_MEDIA,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertLatestMediaComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Latest Media component', async () => {
    await scrollIntoView('[data-testid="latest-media"]');

    await click('[data-testid="latest-media"] a');

    assertATIComponentClickEvent({
      component: LATEST_MEDIA,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
