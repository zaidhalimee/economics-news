import {
  getExperimentAnalyticsConfig,
  getExperimentTopStories,
} from './helpers';
import { topStoriesList } from '../PagePromoSections/TopStoriesSection/fixture/index';

jest.mock('../../../lib/analyticsUtils', () => ({
  ...jest.requireActual('../../../lib/analyticsUtils'),
  getAtUserId: jest.fn().mockReturnValue('123-456-789'),
}));

describe('AMP top stories experiment', () => {
  const mockTextBlock = {
    type: 'text',
    model: {
      blocks: [],
    },
  };
  const expectedExperimentTopStoriesBlock = (
    variant: 'Quarter' | 'Half' | 'ThreeQuarters',
  ) => {
    return {
      type: `experimentTopStories${variant}`,
      model: topStoriesList,
      id: `experimentTopStories${variant}`,
    };
  };

  const blocksEvenLength = Array(14).fill(mockTextBlock);
  const blocksOddLength = Array(15).fill(mockTextBlock);

  describe('getExperimentTopStories()', () => {
    it('returns shouldEnableExperimentTopStories as true if props match conditions.', () => {
      const { shouldEnableExperimentTopStories } = getExperimentTopStories({
        blocks: blocksEvenLength,
        topStoriesContent: topStoriesList,
        isAmp: true,
        service: 'news',
      });
      expect(shouldEnableExperimentTopStories).toBe(true);
    });

    it.each`
      testDescription                                     | isAmp    | service      | blocksLength
      ${'all props are undefined'}                        | ${false} | ${undefined} | ${undefined}
      ${'only isAmp is true'}                             | ${true}  | ${undefined} | ${undefined}
      ${'only service is undefined'}                      | ${true}  | ${undefined} | ${14}
      ${'only service is defined and valid'}              | ${false} | ${'news'}    | ${undefined}
      ${'all props defined but service is invalid'}       | ${true}  | ${'igbo'}    | ${14}
      ${'only blocks length is defined and valid'}        | ${false} | ${undefined} | ${14}
      ${'all props defined but blocks length is invalid'} | ${true}  | ${'news'}    | ${7}
    `(
      'returns shouldEnableExperimentTopStories as false because $testDescription.',
      ({ isAmp, service, blocksLength }) => {
        const blocks = Array(blocksLength).fill(mockTextBlock, 0);
        const { shouldEnableExperimentTopStories } = getExperimentTopStories({
          blocks,
          topStoriesContent: topStoriesList,
          isAmp,
          service,
        });

        expect(shouldEnableExperimentTopStories).toBe(false);
      },
    );

    const expectedBlocksEvenLength = [
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      expectedExperimentTopStoriesBlock('Quarter'),
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      expectedExperimentTopStoriesBlock('Half'),
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      expectedExperimentTopStoriesBlock('ThreeQuarters'),
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
    ];

    const expectedBlocksOddLength = [
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      expectedExperimentTopStoriesBlock('Quarter'),
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      expectedExperimentTopStoriesBlock('Half'),
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      expectedExperimentTopStoriesBlock('ThreeQuarters'),
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
      mockTextBlock,
    ];

    it.each`
      testType  | inputBlocks         | expectedOutput
      ${'even'} | ${blocksEvenLength} | ${expectedBlocksEvenLength}
      ${'odd'}  | ${blocksOddLength}  | ${expectedBlocksOddLength}
    `(
      'should insert experimentTopStories block into blocks array in the correct position when blocks.length is $testType.',
      ({ inputBlocks, expectedOutput }) => {
        const { transformedBlocks } = getExperimentTopStories({
          blocks: inputBlocks,
          topStoriesContent: topStoriesList,
          isAmp: true,
          service: 'news',
        });
        expect(transformedBlocks).toEqual(expectedOutput);
      },
    );
  });

  describe('getExperimentAnalyticsConfig()', () => {
    process.env.SIMORGH_ATI_BASE_URL = 'http://foobar.com?';
    const NEWS_PRODUCER_ID = 64;
    const SPORT_PRODUCER_ID = 85;

    it.each`
      service    | env       | producerId
      ${'news'}  | ${'live'} | ${NEWS_PRODUCER_ID}
      ${'news'}  | ${'test'} | ${NEWS_PRODUCER_ID}
      ${'sport'} | ${'live'} | ${SPORT_PRODUCER_ID}
      ${'sport'} | ${'test'} | ${SPORT_PRODUCER_ID}
    `(
      'should create the analytics config with the correct parameters for $service on $env.',
      ({ env, service, producerId }) => {
        const analyticsConfig = getExperimentAnalyticsConfig({
          env,
          service,
          atiAnalyticsProducerId: producerId,
        });
        expect(analyticsConfig).toMatchSnapshot();
      },
    );
  });
});
