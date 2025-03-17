import { click, COMPONENTS, scrollIntoView } from '../helpers';
import { assertATIComponentClickEvent } from '.';

const { LITE_SITE_CTA } = COMPONENTS;

// eslint-disable-next-line import/prefer-default-export
export const assertLiteSiteCTAComponentClick = ({
  pageIdentifier,
  contentType,
}) => {
  it('should send a click event for the Lite Site CTA component', async () => {
    await scrollIntoView('[data-e2e="to-main-site"]');

    // Click on first item
    await click('[data-e2e="to-main-site"] a');

    assertATIComponentClickEvent({
      component: LITE_SITE_CTA,
      pageIdentifier,
      contentType,
    });
  });
};
