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
const RADIO_SCHEDULE = 'radio-schedule';
const MESSAGE_BANNER = 'message-banner';
const RELATED_CONTENT = 'related-content';
const RELATED_TOPICS = 'topics';
const PODCAST_PROMO = 'promo-podcast';
const LITE_SITE_CTA = 'lite-site-cta';
const RECENT_AUDIO_EPISODES = 'episodes-audio';
const PODCAST_LINKS = 'third-party';
const LATEST_MEDIA = 'latest';
const RECOMMENDATIONS = 'wsoj';
const SCROLLABLE_PROMO = 'edoj';

export const COMPONENTS = {
  SCROLLABLE_NAVIGATION,
  DROPDOWN_NAVIGATION,
  TOP_STORIES,
  FEATURES,
  MOST_READ,
  RADIO_SCHEDULE,
  MESSAGE_BANNER,
  RELATED_CONTENT,
  RELATED_TOPICS,
  PODCAST_PROMO,
  LITE_SITE_CTA,
  RECENT_AUDIO_EPISODES,
  PODCAST_LINKS,
  LATEST_MEDIA,
  RECOMMENDATIONS,
  SCROLLABLE_PROMO,
};

export const interceptATIAnalyticsBeacons = () => {
  const atiUrl = new URL(envs.atiUrl).origin;

  // Component Views
  Object.values(COMPONENTS).forEach(component => {
    cy.intercept({
      url: `${atiUrl}/*`,
      query: {
        ati: `*${component}*`,
      },
    }).as(`${component}-ati-view`);
  });

  // Component Clicks
  Object.values(COMPONENTS).forEach(component => {
    cy.intercept({
      url: `${atiUrl}/*`,
      query: {
        atc: `*${component}*`,
      },
    }).as(`${component}-ati-click`);
  });

  // Page View (only fires once per page visit)
  cy.intercept({
    url: `${atiUrl}/*`,
    query: {
      x8: /\[(simorgh|reverb-3.9.2)\]/,
    },
  }).as(`${ATI_PAGE_VIEW}`);
};

export const awaitATIPageViewEvent = () => cy.wait(`@${ATI_PAGE_VIEW}`);

export const awaitATIComponentViewEvent = component =>
  cy.wait(`@${component}-ati-view`);

export const awaitATIComponentClickEvent = component =>
  cy.wait(`@${component}-ati-click`);
