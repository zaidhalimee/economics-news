import { click, COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RADIO_SCHEDULE } = COMPONENTS;

export const assertRadioScheduleComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Radio Schedule component', async () => {
    await scrollIntoView('[data-e2e="radio-schedule"]');

    assertATIComponentViewEvent({
      component: RADIO_SCHEDULE,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertRadioScheduleComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Radio Schedule component', async () => {
    await scrollIntoView('[data-e2e="radio-schedule"]');

    // Click on an on-demand episode
    await click('[data-e2e="radio-schedule"] [data-e2e="onDemand"] a');

    assertATIComponentClickEvent({
      component: RADIO_SCHEDULE,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
