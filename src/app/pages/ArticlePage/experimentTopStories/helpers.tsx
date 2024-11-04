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
      control: 25,
      show_at_quarter: 25,
      show_at_half: 25,
      show_at_three_quarters: 25,
    },
  },
};

const ARTICLE_LENGTH_THRESHOLD = 10;
const enableExperimentTopStories = ({
  isAmp,
  service,
  id,
  blocksLength,
}: {
  isAmp: boolean;
  service: string;
  id: string | null;
  blocksLength: number;
}) => {
  if (!isAmp || !service || !id || blocksLength < ARTICLE_LENGTH_THRESHOLD) {
    return false;
  }

  const newsAsset = 'cz7xywn940ro';
  const newsCPSAsset = 'news/world-europe-60506682';
  const newsShortAsset = 'cd4117egk3go';
  const newsOneColumnAsset = 'c99vz4kz5vzo';
  const newsTestAsset = 'c6v11qzyv8po';
  const newsTestBreakingNewsAsset = 'cgx1znpjjx7o';
  const sportAsset = 'c2vwq901e93o';
  const sportShortAsset = 'cpgw0xjmpd3o';
  const sportOneColumnAsset = 'c4ngy9xjpzro';
  const cymrufywAsset = 'ckg080e0d1eo';

  const experimentAssets = [
    newsAsset,
    newsCPSAsset,
    newsShortAsset,
    newsOneColumnAsset,
    newsTestAsset,
    newsTestBreakingNewsAsset,
    sportAsset,
    sportShortAsset,
    sportOneColumnAsset,
    cymrufywAsset,
  ];
  const experimentServices = ['news', 'sport'];

  return (
    isAmp &&
    id &&
    experimentServices.includes(service) &&
    experimentAssets.includes(id)
  );
};

const insertionPositions = ['Quarter', 'Half', 'ThreeQuarters'] as const;

const insertBlockAtPosition = (
  blocks: OptimoBlock[],
  blockToInsert: OptimoBlock,
  position: (typeof insertionPositions)[number],
) => {
  const insertionPercentages = {
    Quarter: 0.25,
    Half: 0.5,
    ThreeQuarters: 0.75,
  };
  const percentage = insertionPercentages[position];

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
  return insertionPositions.reduce((currentBlocks, position) => {
    const experimentTopStoriesBlock = {
      type: `experimentTopStories${position}`,
      model: topStoriesContent,
      id: `experimentTopStories${position}`,
    };

    const transformedBlocks = insertBlockAtPosition(
      currentBlocks,
      experimentTopStoriesBlock,
      position,
    );

    return transformedBlocks;
  }, blocks);
};

export const getExperimentTopStories = ({
  blocks,
  topStoriesContent,
  isAmp,
  service,
  id,
}: {
  blocks: OptimoBlock[];
  topStoriesContent: TopStoryItem[] | undefined;
  isAmp: boolean;
  service: string;
  id: string | null;
}) => {
  const shouldEnableExperimentTopStories = enableExperimentTopStories({
    isAmp,
    service,
    id,
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
  variant,
}: {
  topStoriesContent: TopStoryItem[];
  variant: 'Quarter' | 'Half' | 'ThreeQuarters';
}) => {
  return (
    <div
      css={styles[`experimentTopStoriesSection${variant}`]}
      data-testid={`experiment-top-stories-${variant}`}
      data-experiment-position={`articleBody${variant}`}
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
  type: 'view' | 'click';
  env: Environments;
  service: Services;
  atiAnalyticsProducerId: string;
  position?: 'articleBody' | 'secondaryColumn';
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
  position: 'articleBody' | 'secondaryColumn';
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

const getQuerySelectors = ({
  variant,
}: {
  variant?: 'Quarter' | 'Half' | 'ThreeQuarters';
}) => {
  if (!variant) {
    return {
      view: `div[data-experiment-position='secondaryColumn'] > section[aria-labelledby='top-stories-heading']`,
      click: `div[data-experiment-position='secondaryColumn'] a[aria-labelledby*='top-stories-promo']`,
    };
  }

  return {
    view: `div[data-experiment-position='articleBody${variant}'] > section[aria-labelledby='top-stories-heading']`,
    click: `div[data-experiment-position='articleBody${variant}'] a[aria-labelledby*='top-stories-promo']`,
  };
};

const getEventTriggerKeys = ({
  variant,
}: {
  variant?: 'Quarter' | 'Half' | 'ThreeQuarters';
}) => {
  if (!variant) {
    return {
      view: `secondaryColumnView`,
      click: `secondaryColumnPromoClick`,
    };
  }

  return {
    view: `articleBody${variant}View`,
    click: `articleBody${variant}PromoClick`,
  };
};

const buildEventTriggers = ({
  position,
  variant,
}: {
  position: 'articleBody' | 'secondaryColumn';
  variant?: 'Quarter' | 'Half' | 'ThreeQuarters';
}) => {
  const requestKeys = requestKeysMap[position];
  const eventTriggerKeys = getEventTriggerKeys({ variant });
  const querySelectors = getQuerySelectors({ variant });

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
      ...buildEventTriggers({ position: 'articleBody', variant: 'Quarter' }),
      ...buildEventTriggers({ position: 'articleBody', variant: 'Half' }),
      ...buildEventTriggers({
        position: 'articleBody',
        variant: 'ThreeQuarters',
      }),
    },
  };
};
