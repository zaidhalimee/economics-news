import {
  COMPONENTS,
  scrollIntoView,
  click,
  wait,
  ONE_SECOND,
} from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';
import context from '../../context';

const { SCROLLABLE_NAVIGATION, DROPDOWN_NAVIGATION } = COMPONENTS;

export const assertScrollableNavigationComponentView = ({
  pageIdentifier,
  contentType,
  componentTrackingContentType,
  useReverb,
}) => {
  it('should send a view event for the Scrollable Navigation component', async () => {
    await scrollIntoView('[data-e2e="scrollable-nav"]');

    assertATIComponentViewEvent({
      component: SCROLLABLE_NAVIGATION,
      pageIdentifier,
      contentType: componentTrackingContentType || contentType,
      useReverb,
    });
  });
};

export const assertScrollableNavigationComponentClick = ({
  pageIdentifier,
  contentType,
  componentTrackingContentType,
  useReverb,
}) => {
  it('should send a click event for the Scrollable Navigation component', async () => {
    await scrollIntoView('[data-e2e="scrollable-nav"]');

    await click('[data-e2e="scrollable-nav"] a');

    assertATIComponentClickEvent({
      component: SCROLLABLE_NAVIGATION,
      pageIdentifier,
      contentType: componentTrackingContentType || contentType,
      useReverb,
    });
  });
};

// Assertions for nav bar at smaller breakpoints
export const assertDropdownNavigationComponentView = ({
  pageIdentifier,
  contentType,
  componentTrackingContentType,
  useReverb,
}) => {
  it('should send a view event for the Dropdown Navigation component', async () => {
    await context.page.setViewport({ width: 320, height: 480 });
    await click('nav button');

    await scrollIntoView('[data-e2e="dropdown-nav"]');

    // Dwell on the dropdown nav for longer to ensure that the view component event is fired
    await wait(ONE_SECOND);

    assertATIComponentViewEvent({
      component: DROPDOWN_NAVIGATION,
      pageIdentifier,
      contentType: componentTrackingContentType || contentType,
      useReverb,
    });
  });
};

export const assertDropdownNavigationComponentClick = ({
  pageIdentifier,
  contentType,
  componentTrackingContentType,
  useReverb,
}) => {
  it('should send a click event for the Dropdown Navigation component', async () => {
    await context.page.setViewport({ width: 320, height: 480 });

    await click('nav button');
    await scrollIntoView('[data-e2e="dropdown-nav"]');

    await click('[data-e2e="dropdown-nav"] a');

    assertATIComponentClickEvent({
      component: DROPDOWN_NAVIGATION,
      pageIdentifier,
      contentType: componentTrackingContentType || contentType,
      useReverb,
    });
  });
};
