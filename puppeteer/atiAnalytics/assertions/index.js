import {
  ATI_PAGE_VIEW,
  ATI_PAGE_VIEW_REVERB,
  getATIParamsFromURL,
  interceptATIAnalyticsBeacons,
} from '../helpers';

const assertATIPageViewEventParamsExist = ({
  params,
  contentType,
  applicationType,
}) => {
  expect(params).toHaveProperty('s'); // destination
  expect(params).toHaveProperty('p'); // page identifier
  expect(params).toHaveProperty('x2'); // application type
  expect(params).toHaveProperty('x3'); // application name
  expect(params).toHaveProperty('x4'); // language
  expect(params).toHaveProperty('x7'); // content type
  expect(params).toHaveProperty('x8'); // library version
  expect(params).toHaveProperty('x9'); // page title

  if (['responsive', 'amp'].includes(applicationType)) {
    expect(params).toHaveProperty('r'); // screen resolution & colour depth
    expect(params).toHaveProperty('re'); // browser/viewport resolution
    expect(params).toHaveProperty('hl'); // timestamp
    expect(params).toHaveProperty('lng'); // device language
    expect(params).toHaveProperty('x5'); // url
  }

  if (contentType !== 'list-datadriven') {
    expect(params).toHaveProperty('x1'); // content ID
  }

  if (contentType === 'article') {
    expect(params).toHaveProperty('x11'); // first published
    expect(params).toHaveProperty('x12'); // last published
    expect(params).toHaveProperty('x13'); // ldp things
    expect(params).toHaveProperty('x17'); // category
  }
};

const assertATIComponentViewEventParamsExist = ({ params, useReverb }) => {
  expect(params).toHaveProperty('s'); // destination
  expect(params).toHaveProperty('ati'); // view event
  expect(params).toHaveProperty('type');
  expect(params.type).toBe('AT', 'params.type');

  if (!useReverb) {
    expect(params).toHaveProperty('p'); // page identifier
  }
};

const assertATIComponentClickEventParamsExist = ({ params, useReverb }) => {
  expect(params).toHaveProperty('s'); // destination
  expect(params).toHaveProperty('atc'); // click event
  expect(params).toHaveProperty('type');
  expect(params.type).toBe('AT', 'params.type');

  if (useReverb) {
    expect(params).toHaveProperty('patc'); // page identifier
  } else {
    expect(params).toHaveProperty('p'); // page identifier
  }
};

export const assertPageView = ({
  useReverb,
  pageIdentifier,
  applicationType,
  contentType,
  service,
}) => {
  it(`should send a page view event with service = ${service}, page identifier = ${pageIdentifier}, application type = ${applicationType} and content type = ${contentType}`, () => {
    const atiPageViewAlias = useReverb ? ATI_PAGE_VIEW_REVERB : ATI_PAGE_VIEW;

    const params = global.analyticsRequests[atiPageViewAlias];

    assertATIPageViewEventParamsExist({
      params,
      contentType,
      applicationType,
    });

    expect(params.p).toBe(pageIdentifier, 'params.p (page identifier)');
    expect(params.x2).toBe(
      `[${applicationType}]`,
      'params.x2 (application type)',
    );
    expect(params.x3).toBe(`[news-${service}]`, 'params.x3 (application name)');
    expect(params.x7).toBe(`[${contentType}]`, 'params.x7 (content type)');
  });
};

const getViewClickDetailsRegex = ({ contentType, component, pageIdentifier }) =>
  new RegExp(
    `PUB-\\[?${contentType}.*?\\]?-\\[?${component}.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?${pageIdentifier}\\]?-\\[?.*?\\]?-\\[?.*?\\]?-\\[?.*?\\]?`,
    'g',
  );

export const assertATIComponentViewEvent = ({
  component,
  pageIdentifier,
  contentType,
  useReverb,
}) =>
  cy
    .wait(`@${component}-ati-view`)
    .its('request.url')
    .then(url => {
      const params = getATIParamsFromURL(url);

      assertATIComponentViewEventParamsExist({ params, useReverb });

      if (!useReverb) {
        expect(params.p).toBe(pageIdentifier, 'params.p (page identifier)');
      }

      expect(params.ati).to.match(
        getViewClickDetailsRegex({
          contentType,
          component,
          pageIdentifier,
        }),
        'params.ati (publisher impression)',
      );
    });

export const assertATIComponentClickEvent = ({
  component,
  contentType,
  pageIdentifier,
  applicationType,
  useReverb,
}) =>
  cy
    .wait(`@${component}-ati-click`)
    .its('request.url')
    .then(url => {
      const params = getATIParamsFromURL(url);

      assertATIComponentClickEventParamsExist({
        params,
        useReverb,
        applicationType,
      });

      if (applicationType === 'lite') {
        expect(params.app_type).toBe(applicationType, 'params.app_type');
      }

      if (useReverb) {
        expect(params.patc).toBe(
          pageIdentifier,
          'params.patc (page identifier)',
        );
      } else {
        expect(params.p).toBe(pageIdentifier, 'params.p (page identifier)');
      }

      expect(params.atc).to.match(
        getViewClickDetailsRegex({
          contentType,
          pageIdentifier,
          component,
        }),
        'params.atc (publisher click)',
      );
    });
