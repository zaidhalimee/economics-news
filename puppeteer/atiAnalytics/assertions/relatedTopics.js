import { click, COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RELATED_TOPICS } = COMPONENTS;

export const assertRelatedTopicsComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Related Topics component', async () => {
    await scrollIntoView('[data-testid="related-topics"]');

    assertATIComponentViewEvent({
      component: RELATED_TOPICS,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertRelatedTopicsComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Related Topics component', async () => {
    await scrollIntoView('[data-testid="related-topics"]');

    await click('[data-testid="related-topics"] a');

    assertATIComponentClickEvent({
      component: RELATED_TOPICS,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
