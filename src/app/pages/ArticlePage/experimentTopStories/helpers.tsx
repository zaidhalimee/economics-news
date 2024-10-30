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
      control: 50,
      show_at_halfway: 50,
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
  const sportAsset = 'cpgw0xjmpd3o';
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

const insertExperimentTopStories = ({
  blocks,
  topStoriesContent,
}: {
  blocks: OptimoBlock[];
  topStoriesContent: TopStoryItem[];
}) => {
  const insertIndex = Math.floor((blocks.length - 1) * 0.5); // halfway index of blocks array, -1 accounts for 'wsoj' block which is never rendered on PS articles
  const experimentTopStoriesBlock = {
    type: 'experimentTopStories',
    model: topStoriesContent,
    id: `experimentTopStories-${insertIndex}`,
  };

  const blocksClone = [...blocks];
  blocksClone.splice(insertIndex, 0, experimentTopStoriesBlock);
  return blocksClone;
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
}: {
  topStoriesContent: TopStoryItem[];
}) => {
  return (
    <div
      css={styles.experimentTopStoriesSection}
      data-testid="experiment-top-stories"
      data-experiment-position="articleBody"
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

const eventTriggerKeysMap = {
  articleBody: {
    view: 'articleBodyView',
    click: 'articleBodyPromoClick',
  },
  secondaryColumn: {
    view: 'secondaryColumnView',
    click: 'secondaryColumnPromoClick',
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

const buildEventTriggers = ({
  position,
}: {
  position: 'articleBody' | 'secondaryColumn';
}) => {
  const eventTriggerKeys = eventTriggerKeysMap[position];
  const requestKeys = requestKeysMap[position];

  return {
    [eventTriggerKeys.view]: {
      on: 'visible',
      request: requestKeys.view,
      visibilitySpec: {
        selector: `div[data-experiment-position='${position}'] > section[aria-labelledby='top-stories-heading']`,
        visiblePercentageMin: 20,
        totalTimeMin: 500,
        continuousTimeMin: 200,
      },
    },
    [eventTriggerKeys.click]: {
      on: 'click',
      request: requestKeys.click,
      selector: `div[data-experiment-position='${position}'] a[aria-labelledby*='top-stories-promo']`,
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
      ...buildEventTriggers({ position: 'articleBody' }),
      ...buildEventTriggers({ position: 'secondaryColumn' }),
    },
  };
};
