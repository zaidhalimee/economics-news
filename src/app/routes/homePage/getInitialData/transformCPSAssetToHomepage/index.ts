import { MostReadData } from '#app/components/MostRead/types';
import { Curation, Summary } from '#app/models/types/curationData';

type CpsArticle = {
  metadata: {
    analyticsLabels: {
      contentId: string;
      // eslint-disable-next-line camelcase
      cps_asset_type: string;
      counterName: string;
    };
    title: string;
    type: string;
  };
  content: {
    groups: {
      type: string;
      items: {
        id: string;
        headlines: { headline: string };
        locators: { assetUri: string };
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
  secondaryData: { mostRead: MostReadData };
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
          headlines,
          locators,
          indexImage,
          media,
          summary: description,
          timestamp,
        }) => {
          const duration = media?.versions?.[0].durationISO8601;

          return {
            title: headlines?.headline || '',
            type: media?.format || 'article',
            duration,
            lastPublished: new Date(timestamp).toISOString(),
            imageUrl: `https://ichef.bbci.co.uk/ace/ws/{width}${indexImage?.path}.webp`,
            imageAlt: indexImage?.altText || '',
            id,
            link: `https://www.bbc.com${locators?.assetUri}`,
            description,
            isLive: false,
          };
        },
      );

      const curationTitle = strapline?.name || '';

      return {
        curationType: 'vivo-stream',
        curationId: type,
        title: curationIndex > 0 ? curationTitle : '',
        position: curationIndex + 1,
        visualProminence: type.match('top-story|top-stories')
          ? 'HIGH'
          : 'NORMAL',
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
    data: {
      title,
      curations,
      metadata: {
        atiAnalytics: {
          contentId,
          contentType: contentType?.toUpperCase(),
          pageIdentifier,
          pageTitle: title,
        },
      },
      activePage: 1,
      pageCount: 1,
    },
  };
};
