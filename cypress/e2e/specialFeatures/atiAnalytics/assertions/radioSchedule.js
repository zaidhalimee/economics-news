import {
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  visitPageInNewTab,
} from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RADIO_SCHEDULE } = COMPONENTS;

export const assertRadioScheduleComponentView = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a view event for the Radio Schedule component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      visitPageInNewTab(url);

      cy.get('[data-testid="radio-schedule"]').scrollIntoView({
        duration: 1000,
      });

      assertATIComponentViewEvent({
        component: RADIO_SCHEDULE,
        pageIdentifier,
        contentType,
        useReverb,
      });
    });
  });
};

export const assertRadioScheduleComponentClick = ({
  pageIdentifier,
  contentType,
  useReverb,
}) => {
  it('should send a click event for the Radio Schedule component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      visitPageInNewTab(url);

      cy.get('[data-testid="radio-schedule"]').scrollIntoView({
        duration: 1000,
      });

      // Click on last item which will be an on-demand episode
      cy.get('[data-e2e="onDemand"]').find('a').first().click();

      assertATIComponentClickEvent({
        component: RADIO_SCHEDULE,
        pageIdentifier,
        contentType,
        useReverb,
      });

      // return to previous page
      visitPageInNewTab(url);
    });
  });
};
