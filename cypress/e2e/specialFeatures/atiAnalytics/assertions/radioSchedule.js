import {
  awaitATIComponentViewEvent,
  interceptATIAnalyticsBeacons,
  COMPONENTS,
  awaitATIComponentClickEvent,
} from '../helpers';

const { RADIO_SCHEDULE } = COMPONENTS;

export const assertRadioScheduleComponentView = () => {
  it('should send a view event for the Radio Schedule component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="radio-schedule"]').scrollIntoView({
        duration: 1000,
      });

      awaitATIComponentViewEvent(RADIO_SCHEDULE);
    });
  });
};

export const assertRadioScheduleComponentClick = () => {
  it('should send a click event for the Radio Schedule component', () => {
    cy.url().then(url => {
      interceptATIAnalyticsBeacons();
      cy.visit(url);

      cy.get('[data-testid="radio-schedule"]').scrollIntoView({
        duration: 1000,
      });

      // Click on last item which will be an on-demand episode
      cy.get('[data-e2e="onDemand"]').find('a').first().click({ force: true });

      awaitATIComponentClickEvent(RADIO_SCHEDULE);

      // return to previous page
      cy.visit(url);
    });
  });
};
