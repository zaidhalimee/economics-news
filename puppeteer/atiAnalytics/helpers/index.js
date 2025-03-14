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

export const interceptATIAnalyticsBeacons = () => {
  const atiUrl = new URL(envs.atiUrl).origin;

  // Component Views
  Object.values(COMPONENTS).forEach(component => {
    const viewClickEventRegex = new RegExp(
      `PUB-\\[?.*?\\]?-\\[?${component}.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?`,
      'g',
    );

    cy.intercept(
      {
        url: `${atiUrl}/*`,
        query: {
          ati: viewClickEventRegex,
        },
      },
      request => {
        request.reply({ statusCode: 200 });
      },
    ).as(`${component}-ati-view`);

    // Component Clicks
    cy.intercept(
      {
        url: `${atiUrl}/*`,
        query: {
          atc: viewClickEventRegex,
        },
      },
      request => {
        request.reply({ statusCode: 200 });
      },
    ).as(`${component}-ati-click`);
  });

  // NOT REVERB - Page View (only fires once per page visit)
  cy.intercept(
    {
      url: `${atiUrl}/*`,
      query: {
        x8: '[simorgh]',
      },
    },
    request => {
      request.reply({ statusCode: 200 });
    },
  ).as(`${ATI_PAGE_VIEW}`);

  // REVERB - Page View (only fires once per page visit)
  cy.intercept(
    {
      url: `${atiUrl}/*`,
      query: {
        x8: 'simorgh',
      },
    },
    request => {
      request.reply({ statusCode: 200 });
    },
  ).as(`${ATI_PAGE_VIEW_REVERB}`);
};

export const onPageRequest = request => {
  const url = new URL(request.url());

  const { hostname, href } = url;

  const environment = process.env.SIMORGH_APP_ENV;

  const ATI_URLS = {
    local: 'logws1363.ati-host.net',
    test: 'logws1363.ati-host.net',
    live: 'a1.api.bbc.co.uk',
  };

  if (hostname === ATI_URLS[environment]) {
    if (!context.analyticsRequests) {
      context.analyticsRequests = {};
    }

    const initiator = request.initiator();

    const { url: fromUrl } = initiator;

    const params = {
      ...getATIParamsFromURL(href),
      additionalInfo: {
        fromUrl,
        resourceType: request.resourceType(),
      },
    };

    const { x8: libraryVersion, atc: clickEvent, ati: viewEvent } = params;

    if (libraryVersion?.includes('simorgh')) {
      context.analyticsRequests[ATI_PAGE_VIEW] = params;
    }

    Object.values(COMPONENTS).forEach(component => {
      const viewClickEventRegex = new RegExp(
        `PUB-\\[?.*?\\]?-\\[?${component}.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?`,
        'g',
      );

      //Component Views
      if (viewEvent?.match(viewClickEventRegex)) {
        context.analyticsRequests[`${component}-ati-view`] = params;
      }

      //Component Clicks
      if (clickEvent?.match(viewClickEventRegex)) {
        context.analyticsRequests[`${component}-ati-click`] = params;
      }
    });

    console.log(
      '\n',
      // Log the test where is has originated from
      expect.getState().currentTestName || 'Test Name Unknown',
      '\nanalyticsRequests:',
      JSON.stringify(context.analyticsRequests, null, 2),
    );
  }
};

const getComponent = async componentId => {
  return await context.page.$(componentId);
};

export const scrollIntoView = async componentId => {
  const component = await getComponent(componentId);

  if (component) {
    await component.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    await context.page.hover(componentId);
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
  return await context.page.click(componentId);
};

export const clickAndWaitForNavigation = async componentId => {
  await Promise.all([
    context.page.waitForNavigation(),
    context.page.click(componentId),
  ]);
};
