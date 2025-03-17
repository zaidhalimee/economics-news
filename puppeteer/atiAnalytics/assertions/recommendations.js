import { COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RECOMMENDATIONS } = COMPONENTS;

export const assertRecommendationsComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Recommendations component', async () => {
    await scrollIntoView('[data-e2e="recommendations-heading"]');

    assertATIComponentViewEvent({
      component: RECOMMENDATIONS,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertRecommendationsComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Recommendations component', async () => {
    await scrollIntoView('[data-e2e="recommendations-heading"]');

    await scrollIntoView('[data-e2e="recommendations-heading"] a');

    assertATIComponentClickEvent({
      component: RECOMMENDATIONS,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
