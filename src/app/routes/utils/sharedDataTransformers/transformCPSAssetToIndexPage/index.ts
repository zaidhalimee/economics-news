import { MostReadData } from '#app/components/MostRead/types';
import {
  Curation,
  Summary,
  VISUAL_PROMINENCE,
  VisualProminence,
} from '#app/models/types/curationData';

const { HIGH, NORMAL } = VISUAL_PROMINENCE;

type CpsArticle = {
  metadata: {
    analyticsLabels: {
      contentId: string;
      // eslint-disable-next-line camelcase
      cps_asset_type: string;
      counterName: string;
    };
    title: string;
    summary: string;
    type: string;
  };
  content: {
    groups: {
      type: string;
      items: {
        id: string;
        headlines?: { headline: string };
        uri?: string;
        name?: string;
        locators?: { assetUri: string };
        indexImage: { path: string; altText: string };
        media?: {
          format: string;
          versions: {
            durationISO8601: string;
          }[];
        };
        summary: string;
        timestamp: number;
      }[];
      strapline?: {
        name: string;
      };
    }[];
  };
};

type CpsPageData = {
  article: CpsArticle;
  secondaryData: { mostRead?: MostReadData };
};

export default (cpsAsset: CpsPageData) => {
  const {
    article: {
      metadata: {
        analyticsLabels: {
          contentId,
          counterName: pageIdentifier,
          cps_asset_type: contentType,
        },
        title,
        summary: description,
        type: pageType,
      },
      content: { groups },
    },
    secondaryData: { mostRead },
  } = cpsAsset;

  const curations: Curation[] = groups.map(
    ({ type, items, strapline }, curationIndex) => {
      const summaries: Summary[] = items.map(
        ({
          id,
          name,
          headlines,
          uri,
          locators,
          indexImage,
          media,
          summary: description,
          timestamp,
        }) => {
          const duration = media?.versions?.[0].durationISO8601;

          return {
            title: name || headlines?.headline || '',
            type: media?.format || 'article',
            duration,
            lastPublished: new Date(timestamp).toISOString(),
            imageUrl: `https://ichef.bbci.co.uk/ace/ws/{width}${indexImage?.path}.webp`,
            imageAlt: indexImage?.altText || '',
            id,
            link: uri || `https://www.bbc.com${locators?.assetUri}`,
            description,
            isLive: false,
          };
        },
      );

      const curationTitle = strapline?.name || '';

      // Display each curation as a hierarchical collection
      let visualProminence: VisualProminence = HIGH;

      // Allows us to display as much content as possible from FIX pages - hierarchical collections must have at least 3 items
      if (summaries.length < 3) {
        visualProminence = NORMAL;
      }

      return {
        curationType: 'vivo-stream',
        curationId: type,
        title: curationIndex > 0 ? curationTitle : '',
        position: curationIndex + 1,
        visualProminence,
        visualStyle: 'NONE',
        summaries,
      };
    },
  );

  if (mostRead) {
    curations.push({
      curationId: 'urn:bbc:onward-journeys:most:read?=site=News',
      curationType: 'most-popular',
      position: curations.length,
      title: 'Most Read',
      visualProminence: 'NORMAL',
      visualStyle: 'RANKED',
      mostRead,
    });
  }

  return {
    title,
    description,
    curations,
    metadata: {
      type: pageType,
      atiAnalytics: {
        contentId,
        contentType: contentType?.toUpperCase(),
        pageIdentifier,
        pageTitle: title,
      },
    },
  };
};
