import { Agent } from 'undici';
import KyrgyzHomeFixture from '#data/kyrgyz/homePage/index.json';
import ukChinaSimpCpsHomepage from '#data/ukchina/homePage/simp.json';
import * as fetchPageData from '#app/routes/utils/fetchPageData';
import { CPS_ASSET, HOME_PAGE } from '#app/routes/utils/pageTypes';
import {
  VISUAL_PROMINENCE,
  VISUAL_STYLE,
} from '#app/models/types/curationData';
import getInitialData from '.';

process.env.BFF_PATH = 'https://mock-bff-path';

const agent = {
  connect: { cert: 'cert', ca: 'ca', key: 'key' },
} as unknown as Agent;

const mockGetAgent = jest.fn(() => Promise.resolve(agent));

jest.mock('../../../../server/utilities/getAgent', () => jest.fn(mockGetAgent));

const fetchDataSpy = jest.spyOn(fetchPageData, 'default');

describe('Home Page - Get Initial Data', () => {
  const originalEnvironment = process.env.SIMORGH_APP_ENV;

  beforeEach(() => {
    fetchDataSpy.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: KyrgyzHomeFixture,
      }),
    );
  });

  afterEach(() => {
    process.env.SIMORGH_APP_ENV = originalEnvironment;
    jest.clearAllMocks();
  });

  it('should request local fixture data when the app env is "local"', async () => {
    process.env.SIMORGH_APP_ENV = 'local';

    await getInitialData({
      path: '/kyrgyz',
      service: 'kyrgyz',
      pageType: 'home',
      getAgent: mockGetAgent,
    });

    expect(fetchDataSpy).toHaveBeenCalledWith({
      path: 'http://localhost/kyrgyz',
      pageType: HOME_PAGE,
      timeout: 60000,
    });
  });

  it.each`
    environment | tipoID
    ${'test'}   | ${'cm7682qz7v1t'}
    ${'live'}   | ${'crg7kj2e52nt'}
  `(
    'should request data from BFF for pageType = home when the app env is $environment',
    async ({ environment, tipoID }) => {
      process.env.SIMORGH_APP_ENV = environment;

      await getInitialData({
        path: '/kyrgyz',
        service: 'kyrgyz',
        pageType: 'home',
        getAgent: mockGetAgent,
      });

      expect(fetchDataSpy).toHaveBeenCalledWith({
        path: `https://mock-bff-path/?id=${tipoID}&service=kyrgyz&pageType=home&serviceEnv=${environment}`,
        agent,
        optHeaders: {
          'ctx-service-env': environment,
        },
        pageType: HOME_PAGE,
      });
    },
  );

  describe('ukchina', () => {
    beforeEach(() => {
      fetchDataSpy.mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: ukChinaSimpCpsHomepage,
        }),
      );
    });

    it.each(['test', 'live'])(
      'should request data from BFF for pageType = cpsAsset on %s environment',
      async environment => {
        process.env.SIMORGH_APP_ENV = environment;

        await getInitialData({
          path: '/ukchina/simp',
          service: 'ukchina',
          variant: 'simp',
          pageType: 'home',
          getAgent: mockGetAgent,
        });

        expect(fetchDataSpy).toHaveBeenCalledWith({
          path: `https://mock-bff-path/?id=ukchina%2Fsimp%2Ffront_page&service=ukchina&pageType=cpsAsset&variant=simp&serviceEnv=${environment}`,
          agent,
          optHeaders: {
            'ctx-service-env': environment,
          },
          pageType: CPS_ASSET,
        });
      },
    );

    it('should transform data for cps asset into homepage data', async () => {
      const { pageData } = await getInitialData({
        path: '/ukchina/simp',
        service: 'ukchina',
        variant: 'simp',
        pageType: 'home',
        getAgent: mockGetAgent,
      });

      ['title', 'curations', 'metadata'].forEach(property =>
        expect(pageData).toHaveProperty(property),
      );

      expect(pageData?.curations).toHaveLength(8);
      expect(pageData?.curations).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            curationId: 'av-stories-now',
            curationType: 'vivo-stream',
            position: 3,
            title: '图辑视频',
            visualStyle: VISUAL_STYLE.NONE,
            visualProminence: VISUAL_PROMINENCE.NORMAL,
            summaries: expect.arrayContaining([
              {
                description:
                  '为吸引年轻人移居，美国各地的小城市正在推出不同的刺激政策，有些地方的奖励高达一万五千美元。',
                duration: 'PT2M53S',
                id: 'urn:bbc:ares::asset:ukchina/simp/media-57554668',
                imageAlt:
                  '莱康特·李和伴侣决定从华盛顿特区搬到俄克拉荷马的塔尔萨试试运气',
                imageUrl:
                  'https://ichef.bbci.co.uk/ace/ws/{width}/cpsprodpb/CF69/production/_118979035_p09lw6n1.jpg.webp',
                isLive: false,
                lastPublished: '2021-06-21T10:31:27.000Z',
                link: 'https://www.bbc.com/ukchina/simp/media-57554668',
                title: '为什么美国千禧一代正在离开大城市',
                type: 'video',
              },
            ]),
          }),
        ]),
      );
    });
  });
});
