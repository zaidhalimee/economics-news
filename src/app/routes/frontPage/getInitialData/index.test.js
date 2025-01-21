import frontPageJsonSerbian from '#data/serbian/frontpage/lat.json';
import { CPS_ASSET as pageType } from '#app/routes/utils/pageTypes';
import * as fetchPageData from '#app/routes/utils/fetchPageData';
import { BFF_FETCH_ERROR } from '#app/lib/logger.const';
import nodeLogger from '#src/testHelpers/loggerMock';
import getInitialData from '.';

jest.mock('#app/lib/utilities/onClient', () =>
  jest.fn().mockImplementation(() => false),
);

jest.mock('../../utils/getConfig', () => jest.fn());
process.env.BFF_PATH = 'https://mock-bff-path';

const agent = { cert: 'cert', ca: 'ca', key: 'key' };

const mockGetAgent = () => Promise.resolve(agent);

jest.mock('#server/utilities/getAgent', () =>
  jest.fn(() => Promise.resolve(agent)),
);

const fetchDataSpy = jest.spyOn(fetchPageData, 'default');

describe('Front Page - Get Initial Data', () => {
  beforeEach(() => {
    delete process.env.SIMORGH_APP_ENV;
    fetch.mockResponse(JSON.stringify(frontPageJsonSerbian));
  });

  afterEach(() => {
    jest.clearAllMocks();
    fetch.resetMocks();
  });

  it('should request local fixture data when the app env is local', async () => {
    process.env.SIMORGH_APP_ENV = 'local';

    await getInitialData({
      path: '/serbian/lat',
      service: 'serbian',
      variant: 'lat',
      pageType,
      getAgent: mockGetAgent,
    });

    expect(fetchDataSpy).toHaveBeenCalledWith({
      path: 'http://localhost/serbian/lat',
      pageType,
      timeout: 60000,
    });
  });

  it.each(['test', 'live'])(
    'should request BFF data when the app env is %s',
    async environment => {
      process.env.SIMORGH_APP_ENV = environment;

      await getInitialData({
        path: '/serbian/lat',
        service: 'serbian',
        variant: 'lat',
        pageType,
        getAgent: mockGetAgent,
      });

      expect(fetchDataSpy).toHaveBeenCalledWith({
        path: `https://mock-bff-path/?id=serbian%2Flat%2Ffront_page&service=serbian&pageType=cpsAsset&variant=lat&serviceEnv=${environment}`,
        agent,
        optHeaders: {
          'ctx-service-env': environment,
        },
        pageType,
      });
    },
  );

  it.each(['test', 'live'])(
    'should request BFF data if renderer_env=%s is supplied in the path, ignoring the app env',
    async environment => {
      process.env.SIMORGH_APP_ENV = 'local';

      await getInitialData({
        path: `/serbian/lat?renderer_env=${environment}`,
        service: 'serbian',
        variant: 'lat',
        pageType,
        getAgent: mockGetAgent,
      });

      expect(fetchDataSpy).toHaveBeenCalledWith({
        path: `https://mock-bff-path/?id=serbian%2Flat%2Ffront_page&service=serbian&pageType=cpsAsset&variant=lat&serviceEnv=${environment}`,
        agent,
        optHeaders: {
          'ctx-service-env': environment,
        },
        pageType,
      });
    },
  );

  it('should log a 404 to node.logger when the asset cannot be found', async () => {
    fetch.mockRejectOnce({ message: 'Not found', status: 404 });

    await getInitialData({
      path: '/serbian/lat',
      service: 'serbian',
      variant: 'lat',
      pageType,
      getAgent: mockGetAgent,
    });

    expect(nodeLogger.error).toHaveBeenCalledWith(BFF_FETCH_ERROR, {
      pathname: '/serbian/lat',
      service: 'serbian',
      message: 'Not found',
      status: 404,
    });
  });

  it('should log a 500 to node.logger when the BFF response fails', async () => {
    fetch.mockRejectOnce({
      message: 'Internal server error',
      status: 500,
    });

    await getInitialData({
      path: '/serbian/lat',
      service: 'serbian',
      variant: 'lat',
      pageType,
      getAgent: mockGetAgent,
    });

    expect(nodeLogger.error).toHaveBeenCalledWith(BFF_FETCH_ERROR, {
      pathname: '/serbian/lat',
      service: 'serbian',
      message: 'Internal server error',
      status: 500,
    });
  });

  it('should throw an error if the front page data is malformed', async () => {
    const malformedBffFrontPageJson = {
      metadata: {},
      content: {},
      promo: {},
      relatedContent: {},
    };

    fetch.mockResponseOnce(JSON.stringify(malformedBffFrontPageJson));

    await getInitialData({
      path: '/serbian/lat',
      service: 'serbian',
      variant: 'lat',
      pageType,
      getAgent: mockGetAgent,
    });

    expect(nodeLogger.error).toHaveBeenCalledWith(BFF_FETCH_ERROR, {
      pathname: '/serbian/lat',
      service: 'serbian',
      message: 'Front page data is malformed',
      status: 500,
    });
  });
});
