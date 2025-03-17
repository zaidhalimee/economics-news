/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import context from '../../context';

export const getATIParamsFromURL = atiAnalyticsURL => {
  const url = new URL(atiAnalyticsURL);

  return Object.fromEntries(new URLSearchParams(url.search));
};

export const ATI_PAGE_VIEW = 'ati-page-view';

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
const BILLBOARD = 'billboard';

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
  BILLBOARD,
};

const logRequest = ({ requestType, params, rest }) =>
  console.log('Request handled', {
    test: expect.getState().currentTestName,
    requestType,
    params,
    ...rest,
  });

export const onPageRequest = request => {
  if (!context.page.__analyticsRequests) {
    context.page.__analyticsRequests = [];
  }

  const { hostname, href } = new URL(request.url());

  const environment = process.env.SIMORGH_APP_ENV;

  const ATI_HOSTNAMES = {
    local: 'logws1363.ati-host.net',
    test: 'logws1363.ati-host.net',
    live: 'a1.api.bbc.co.uk',
  };

  if (hostname === ATI_HOSTNAMES[environment]) {
    const params = getATIParamsFromURL(href);

    const { x8: libraryVersion, atc: clickEvent, ati: viewEvent } = params;

    if (libraryVersion?.includes('simorgh')) {
      context.page.__analyticsRequests.push({
        requestType: ATI_PAGE_VIEW,
        params,
      });

      logRequest({ requestType: ATI_PAGE_VIEW, params });
    }

    Object.values(COMPONENTS).forEach(component => {
      const viewClickEventRegex = new RegExp(
        `PUB-\\[?.*?\\]?-\\[?${component}.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?`,
        'g',
      );

      let requestType;

      // Component Views
      if (viewEvent?.match(viewClickEventRegex)) {
        requestType = `${component}-ati-view`;
        context.page.__analyticsRequests.push({
          requestType,
          params,
        });

        logRequest({ requestType, params });
      }

      // Component Clicks
      if (clickEvent?.match(viewClickEventRegex)) {
        requestType = `${component}-ati-click`;
        context.page.__analyticsRequests.push({
          requestType,
          params,
        });
        logRequest({ requestType, params });
      }
    });
  } else {
    console.log('Request ignored', {
      test: expect.getState().currentTestName,
      url: href,
    });
  }
};

export const wait = milliseconds =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise(resolve => setTimeout(resolve, milliseconds));

export const ONE_SECOND = 1000;

export const scrollIntoView = async componentId => {
  const component = await context.page.$(componentId);

  if (component) {
    await component.scrollIntoView();
    /**
     * Dwell on the component for over 1 second, to ensure that the view event is triggered
     * See https://github.com/bbc/simorgh/blob/3dfd622f7af53a23d674d2a96043065c3aac77e6/src/app/hooks/useViewTracker/index.jsx#L131
     *  */

    await wait(1.5 * ONE_SECOND);
  }
};

export const reloadPage = async () => {
  await context.page.reload({
    waitUntil: 'networkidle2',
  });
};

export const goBack = async () => {
  await context.page.goBack({
    waitUntil: 'networkidle2',
  });
};

export const click = async componentId => {
  await context.page.click(componentId);
};
