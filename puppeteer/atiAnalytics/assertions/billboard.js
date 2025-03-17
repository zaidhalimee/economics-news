import {
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  scrollIntoView,
  click,
} from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { BILLBOARD } = COMPONENTS;

export const assertBillboardComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Billboard component', async () => {
    await scrollIntoView('[data-testid="billboard-1"]');

    assertATIComponentViewEvent({
      component: BILLBOARD,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertBillboardComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Billboard component', async () => {
    await scrollIntoView('[data-testid="billboard-1"]');

    await click('[data-testid="billboard-1"] a');

    assertATIComponentClickEvent({
      component: BILLBOARD,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
