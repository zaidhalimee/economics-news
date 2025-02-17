import envs from '../../../../support/config/envs';

// eslint-disable-next-line import/prefer-default-export
export const getATIParamsFromURL = atiAnalyticsURL => {
  const url = new URL(atiAnalyticsURL);

  return Object.fromEntries(new URLSearchParams(url.search));
};

const ATI_PAGE_VIEW = 'ati-page-view';
const SCROLLABLE_NAVIGATION = 'scrollable-navigation';
const DROPDOWN_NAVIGATION = 'dropdown-navigation';
const TOP_STORIES = 'top-stories';
const FEATURES = 'features';
const MOST_READ = 'most-read';

export const COMPONENTS = {
  SCROLLABLE_NAVIGATION,
  DROPDOWN_NAVIGATION,
  TOP_STORIES,
  FEATURES,
  MOST_READ,
};

export const interceptATIAnalyticsBeacons = () => {
  const atiUrl = new URL(envs.atiUrl).origin;

  // Component Views
  Object.values(COMPONENTS).forEach(component => {
    cy.intercept({
      url: `${atiUrl}/*`,
      query: {
        ati: `*\\[${component}\\]*`,
        type: 'AT',
      },
    }).as(`${component}-ati-view`);
  });

  // Component Clicks
  Object.values(COMPONENTS).forEach(component => {
    cy.intercept({
      url: `${atiUrl}/*`,
      query: {
        atc: `*\\[${component}\\]*`,
        type: 'AT',
      },
    }).as(`${component}-ati-click`);
  });

  // Page View (only fires once per page visit)
  cy.intercept({
    url: `${atiUrl}/*`,
    query: {
      x8: '[simorgh]',
    },
  }).as(`${ATI_PAGE_VIEW}`);
};

export const awaitATIPageView = () => cy.wait(`@${ATI_PAGE_VIEW}`);

export const awaitATIComponentView = component =>
  cy.wait(`@${component}-ati-view`);

export const awaitATIComponentClick = component =>
  cy.wait(`@${component}-ati-click`);
