import { COMPONENTS, scrollIntoView, click } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { FEATURES } = COMPONENTS;

export const assertFeaturesAnalysisComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Features & Analysis component', async () => {
    await scrollIntoView('[data-testid="features"]');

    assertATIComponentViewEvent({
      component: FEATURES,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertFeaturesAnalysisComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Features & Analysis component', async () => {
    await scrollIntoView('[data-testid="features"]');

    await click('[data-testid="features"] a');

    assertATIComponentClickEvent({
      component: FEATURES,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
