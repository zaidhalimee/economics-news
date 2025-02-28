import { interceptATIAnalyticsBeacons, COMPONENTS } from '../helpers';
import { assertATIComponentClickEvent, assertATIComponentViewEvent } from '.';

const { RADIO_SCHEDULE } = COMPONENTS;

export const assertRadioScheduleComponentView = ({
  pageIdentifier,
  contentType,
}) => {
  it('should send a view event for the Radio Schedule component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="radio-schedule"]').scrollIntoView({
        duration: 1000,
      });

      assertATIComponentViewEvent({
        component: RADIO_SCHEDULE,
        pageIdentifier,
        contentType,
      });
    });
  });
};

export const assertRadioScheduleComponentClick = ({
  pageIdentifier,
  contentType,
}) => {
  it('should send a click event for the Radio Schedule component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="radio-schedule"]').scrollIntoView({
        duration: 1000,
      });

      // Click on last item which will be an on-demand episode
      cy.get('[data-e2e="onDemand"]').find('a').first().click({ force: true });

      assertATIComponentClickEvent({
        component: RADIO_SCHEDULE,
        pageIdentifier,
        contentType,
      });

      // return to previous page
      cy.visit(url);
    });
  });
};
