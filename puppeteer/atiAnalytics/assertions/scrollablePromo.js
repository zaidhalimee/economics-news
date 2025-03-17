import { COMPONENTS, click, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { SCROLLABLE_PROMO } = COMPONENTS;

export const assertScrollablePromoComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Scrollable Promo component', () => {
    cy.get('[data-e2e="scrollable-promos"]').first().scrollIntoView({
      duration: 1000,
    });

    assertATIComponentViewEvent({
      component: SCROLLABLE_PROMO,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};

export const assertScrollablePromoComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Scrollable Promo component', async () => {
    await scrollIntoView('[data-e2e="scrollable-promos"]');

    await click('[data-e2e="scrollable-promos"] a');

    assertATIComponentClickEvent({
      component: SCROLLABLE_PROMO,
      pageIdentifier,
      contentType,
      useReverb,
    });
  });
};
