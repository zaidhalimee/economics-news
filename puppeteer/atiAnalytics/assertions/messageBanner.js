import { click, COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { MESSAGE_BANNER } = COMPONENTS;

export const assertMessageBannerComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Message Banner component', async () => {
    await scrollIntoView('[data-testid="message-banner-1"]');

    assertATIComponentViewEvent({
      component: MESSAGE_BANNER,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertMessageBannerComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Message Banner component', async () => {
    await scrollIntoView('[data-testid="message-banner-1"]');

    await click('[data-testid="message-banner-1"] a');

    assertATIComponentClickEvent({
      component: MESSAGE_BANNER,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
