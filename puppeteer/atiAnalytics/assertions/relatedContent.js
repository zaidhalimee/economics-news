import { COMPONENTS, scrollIntoView, click } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RELATED_CONTENT } = COMPONENTS;

export const assertRelatedContentComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Related Content component', async () => {
    await scrollIntoView('[data-e2e="related-content-heading"]');

    assertATIComponentViewEvent({
      component: RELATED_CONTENT,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertRelatedContentComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Related Content component', async () => {
    await scrollIntoView('[data-e2e="related-content-heading"]');

    await click('[data-e2e="related-content-heading"] a');

    assertATIComponentClickEvent({
      component: RELATED_CONTENT,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
