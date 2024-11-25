/** @jsx jsx */
import { jsx } from '@emotion/react';
import { OptimoBlock } from '#app/models/types/optimo';
import { TopStoryItem } from '#app/pages/ArticlePage/PagePromoSections/TopStoriesSection/types';
import { buildATIEventTrackUrl } from '#app/components/ATIAnalytics/atiUrl';
import { Services, Environments } from '#app/models/types/global';
import TopStoriesSection from '../PagePromoSections/TopStoriesSection';
import styles from './index.styles';

export const experimentName = 'topStoriesExperiment';
export const experimentTopStoriesConfig = {
  [experimentName]: {
    variants: {
      control: 0.25,
      show_at_quarter: 0.25,
      show_at_half: 0.25,
      show_at_three_quarters: 0.25,
    },
  },
};

type VariantNames = 'Quarter' | 'Half' | 'ThreeQuarters';
type Positions = 'articleBody' | 'secondaryColumn';
type TrackingEventType = 'view' | 'click';

const ARTICLE_LENGTH_THRESHOLD = 14;
const enableExperimentTopStories = ({
  isAmp,
  service,
  blocksLength,
}: {
  isAmp: boolean;
  service: string;
  blocksLength: number;
}) => {
  if (!isAmp || !service || blocksLength < ARTICLE_LENGTH_THRESHOLD) {
    return false;
  }
  const experimentServices = ['news', 'sport'];
  return isAmp && experimentServices.includes(service);
};

const insertBlockAtPosition = (
  blocks: OptimoBlock[],
  blockToInsert: OptimoBlock,
  variantName: VariantNames,
) => {
  const insertionPercentages = {
    Quarter: 0.25,
    Half: 0.5,
    ThreeQuarters: 0.75,
  };
  const percentage = insertionPercentages[variantName];

  const renderedBlocksLength = blocks.length - 1;
  const calculatedIndex = Math.floor(renderedBlocksLength * percentage);
  const insertIndex = Math.max(calculatedIndex, 3);

  const blocksClone = [...blocks];
  blocksClone.splice(insertIndex, 0, blockToInsert);
  return blocksClone;
};

const insertExperimentTopStories = ({
  blocks,
  topStoriesContent,
}: {
  blocks: OptimoBlock[];
  topStoriesContent: TopStoryItem[];
}) => {
  const insertionPositions = ['Quarter', 'Half', 'ThreeQuarters'] as const;
  return insertionPositions.reduce((currentBlocks, variantName) => {
    const experimentTopStoriesBlock = {
      type: `experimentTopStories${variantName}`,
      model: topStoriesContent,
      id: `experimentTopStories${variantName}`,
    };

    const transformedBlocks = insertBlockAtPosition(
      currentBlocks,
      experimentTopStoriesBlock,
      variantName,
    );

    return transformedBlocks;
  }, blocks);
};

export const getExperimentTopStories = ({
  blocks,
  topStoriesContent,
  isAmp,
  service,
}: {
  blocks: OptimoBlock[];
  topStoriesContent: TopStoryItem[] | undefined;
  isAmp: boolean;
  service: string;
}) => {
  const shouldEnableExperimentTopStories = enableExperimentTopStories({
    isAmp,
    service,
    blocksLength: blocks.length,
  });

  if (!topStoriesContent || !shouldEnableExperimentTopStories)
    return {
      transformedBlocks: blocks,
      shouldEnableExperimentTopStories: false,
    };

  const transformedBlocks = insertExperimentTopStories({
    blocks,
    topStoriesContent,
  });

  return {
    transformedBlocks,
    shouldEnableExperimentTopStories,
  };
};

export const ExperimentTopStories = ({
  topStoriesContent,
  variantName,
}: {
  topStoriesContent: TopStoryItem[];
  variantName: VariantNames;
}) => {
  const variantKeys = {
    Quarter: 'show_at_quarter',
    Half: 'show_at_half',
    ThreeQuarters: 'show_at_three_quarters',
  };

  return (
    <div
      css={styles.experimentTopStoriesSection(variantKeys[variantName])}
      data-testid={`experiment-top-stories-${variantName}`}
      data-experiment-position={`articleBody${variantName}`}
    >
      <TopStoriesSection content={topStoriesContent} />
    </div>
  );
};

const getStatsDestinationKey = ({
  env,
  service,
}: {
  service: Services;
  env: Environments;
}) => {
  if (env !== 'live') {
    return service === 'news' ? 'NEWS_PS_TEST' : 'SPORT_PS_TEST';
  }

  return service === 'news' ? 'NEWS_PS' : 'SPORT_PS';
};

// SOURCE_URL and VARIANT(${experimentName}) are replaced with their actual values via AMP's variable substitution: https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-var-substitutions.md
const buildTopStoriesEventUrl = ({
  type,
  env,
  service,
  atiAnalyticsProducerId,
  position,
}: {
  type: TrackingEventType;
  env: Environments;
  service: Services;
  atiAnalyticsProducerId: string;
  position?: Positions;
}) => {
  return buildATIEventTrackUrl({
    ampExperimentName: `${experimentName}`,
    campaignID: 'article',
    componentName: `${type === 'view' ? 'top-stories-section' : 'top-stories-promo'}`,
    detailedPlacement: position,
    pageIdentifier: 'SOURCE_URL',
    platform: 'amp',
    producerId: atiAnalyticsProducerId,
    statsDestination: `${getStatsDestinationKey({ env, service })}`,
    experimentVariant: `VARIANT(${experimentName})`,
    type,
  });
};

const requestKeysMap = {
  articleBody: {
    view: 'topStoriesArticleBodyView',
    click: 'topStoriesArticleBodyClick',
  },
  secondaryColumn: {
    view: 'topStoriesSecondaryColumnView',
    click: 'topStoriesSecondaryColumnClick',
  },
};

const buildRequestUrls = ({
  position,
  env,
  service,
  atiAnalyticsProducerId,
}: {
  position: Positions;
  env: Environments;
  service: Services;
  atiAnalyticsProducerId: string;
}) => {
  const requestKeys = requestKeysMap[position];

  return {
    [requestKeys.view]: buildTopStoriesEventUrl({
      type: 'view',
      env,
      service,
      atiAnalyticsProducerId,
      position,
    }),
    [requestKeys.click]: buildTopStoriesEventUrl({
      type: 'click',
      env,
      service,
      atiAnalyticsProducerId,
      position,
    }),
  };
};

const getQuerySelectors = ({ variantName }: { variantName?: VariantNames }) => {
  const experimentPosition = variantName
    ? `articleBody${variantName}`
    : 'secondaryColumn';

  return {
    view: `div[data-experiment-position='${experimentPosition}'] > section[aria-labelledby='top-stories-heading']`,
    click: `div[data-experiment-position='${experimentPosition}'] a[aria-labelledby*='top-stories-promo']`,
  };
};

const getEventTriggerKeys = ({
  variantName,
}: {
  variantName?: VariantNames;
}) => {
  if (!variantName) {
    return {
      view: `secondaryColumnView`,
      click: `secondaryColumnPromoClick`,
    };
  }

  return {
    view: `articleBody${variantName}View`,
    click: `articleBody${variantName}PromoClick`,
  };
};

const buildEventTriggers = ({
  position,
  variantName,
}: {
  position: Positions;
  variantName?: VariantNames;
}) => {
  const requestKeys = requestKeysMap[position];
  const eventTriggerKeys = getEventTriggerKeys({ variantName });
  const querySelectors = getQuerySelectors({ variantName });

  return {
    [eventTriggerKeys.view]: {
      on: 'visible',
      request: requestKeys.view,
      visibilitySpec: {
        selector: querySelectors.view,
        visiblePercentageMin: 20,
        totalTimeMin: 500,
        continuousTimeMin: 200,
      },
    },
    [eventTriggerKeys.click]: {
      on: 'click',
      request: requestKeys.click,
      selector: querySelectors.click,
    },
  };
};

export const getExperimentAnalyticsConfig = ({
  env,
  service,
  atiAnalyticsProducerId,
}: {
  env: Environments;
  service: Services;
  atiAnalyticsProducerId: string;
}) => {
  return {
    requests: {
      ...buildRequestUrls({
        position: 'articleBody',
        env,
        service,
        atiAnalyticsProducerId,
      }),
      ...buildRequestUrls({
        position: 'secondaryColumn',
        env,
        service,
        atiAnalyticsProducerId,
      }),
    },
    triggers: {
      ...buildEventTriggers({ position: 'secondaryColumn' }),
      ...buildEventTriggers({
        position: 'articleBody',
        variantName: 'Quarter',
      }),
      ...buildEventTriggers({ position: 'articleBody', variantName: 'Half' }),
      ...buildEventTriggers({
        position: 'articleBody',
        variantName: 'ThreeQuarters',
      }),
    },
  };
};
