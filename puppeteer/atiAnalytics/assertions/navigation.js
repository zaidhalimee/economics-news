import {
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  scrollIntoView,
  reloadPage,
  click,
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
    await reloadPage();
    await context.page.focus('[data-e2e="scrollable-nav"]');

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
    await reloadPage();
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
    await reloadPage();
    await context.page.setViewport({ width: 320, height: 480 });

    await click('nav button');

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
  it('should send a click event for the Dropdown Navigation component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.viewport(320, 480);
      cy.get('nav button').click();

      // Click on first item, then return to the original page
      cy.get('[data-e2e="dropdown-nav"]').find('a').first().click();

      assertATIComponentClickEvent({
        component: DROPDOWN_NAVIGATION,
        pageIdentifier,
        contentType: componentTrackingContentType || contentType,
        useReverb,
      });

      // Return to previous page
      cy.visit(url);
    });
  });
};
