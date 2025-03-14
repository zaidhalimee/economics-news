import context from '../../context';
import { ATI_PAGE_VIEW, getCurrentTestName } from '../helpers';

const getPageViewParams = () => {
  const params = context.analyticsRequests[ATI_PAGE_VIEW];

  if (params) {
    return params;
  }
  throw new Error(`Unable to find a request for ${eventName}

analyticsRequests: ${JSON.stringify(context.analyticsRequests, null, 2)}
`);
};

const getParams = eventName => {
  const testName = getCurrentTestName();
  const params = context.analyticsRequests[testName]?.[eventName];

  if (params) {
    return params;
  }
  throw new Error(`Unable to find a request for ${eventName}

analyticsRequests: ${JSON.stringify(context.analyticsRequests, null, 2)}
`);
};

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
  pageIdentifier,
  applicationType,
  contentType,
  service,
}) => {
  it(`should send a page view event with service = ${service}, page identifier = ${pageIdentifier}, application type = ${applicationType} and content type = ${contentType}`, () => {
    const params = getPageViewParams();

    assertATIPageViewEventParamsExist({
      params,
      contentType,
      applicationType,
    });

    expect(params.p).toBe(pageIdentifier);
    expect(params.x2).toBe(`[${applicationType}]`);
    expect(params.x3).toBe(`[news-${service}]`, 'application name');
    expect(params.x7).toBe(`[${contentType}]`);
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
}) => {
  const params = getParams(`${component}-ati-view`);

  assertATIComponentViewEventParamsExist({ params, useReverb });

  if (!useReverb) {
    expect(params.p).toBe(pageIdentifier);
  }

  expect(params.ati).toMatch(
    getViewClickDetailsRegex({
      contentType,
      component,
      pageIdentifier,
    }),
    'publisher impression (view event)',
  );
};

export const assertATIComponentClickEvent = ({
  component,
  contentType,
  pageIdentifier,
  applicationType,
  useReverb,
}) => {
  const params = getParams(`${component}-ati-click`);

  assertATIComponentClickEventParamsExist({
    params,
    useReverb,
    applicationType,
  });

  if (applicationType === 'lite') {
    expect(params.app_type).toBe(applicationType);
  }

  if (useReverb) {
    expect(params.patc).toBe(pageIdentifier, 'reverb page identifier');
  } else {
    expect(params.p).toBe(pageIdentifier);
  }

  expect(params.atc).toMatch(
    getViewClickDetailsRegex({
      contentType,
      pageIdentifier,
      component,
    }),
    'publisher click (click event)',
  );
};
