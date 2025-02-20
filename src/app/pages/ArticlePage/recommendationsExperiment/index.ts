import { MostReadData } from '#app/components/MostRead/types';
import { singleTextBlock } from '#app/models/blocks';
import { OptimoBlock, Recommendation } from '#app/models/types/optimo';

export type OptimizelyVariation =
  | 'wsoj'
  | 'wsoj_most_read'
  | 'wsoj_related_content'
  | 'off';

type GetWsojTitleProps = {
  mostReadTitle?: string;
  relatedContentTitle?: string;
  recommendationsTitle?: string;
  variation?: OptimizelyVariation;
};

export const getWsojTitle = ({
  mostReadTitle = 'Most read',
  relatedContentTitle = 'Related content',
  recommendationsTitle = 'Recommended stories',
  variation,
}: GetWsojTitleProps) => {
  switch (variation) {
    case 'wsoj':
      return recommendationsTitle;
    case 'wsoj_most_read':
      return mostReadTitle;
    case 'wsoj_related_content':
      return relatedContentTitle;
    default:
      return recommendationsTitle;
  }
};

type TransformRecsDataProps = {
  wsojRecs: Recommendation[];
  mostRead: MostReadData;
  pageBlocks: OptimoBlock[];
  variation?: OptimizelyVariation;
};

export const transformRecsData = ({
  wsojRecs,
  mostRead,
  pageBlocks,
  variation,
}: TransformRecsDataProps) => {
  if (!variation) return wsojRecs;

  if (variation === 'wsoj') return wsojRecs;

  if (variation === 'wsoj_related_content') {
    const relatedContentBlock = pageBlocks.find(
      block => block.type === 'relatedContent',
    );

    if (!relatedContentBlock) return null;

    // @ts-expect-error - nested block structure
    const relatedContentItems = relatedContentBlock?.model?.blocks?.slice(0, 4);

    const transformedRelatedContentItems = relatedContentItems?.map(
      (item: OptimoBlock) => {
        // @ts-expect-error - nested block structure
        const itemBlocks = item?.model?.blocks;

        const imageBlock = itemBlocks?.find(
          (block: OptimoBlock) => block.type === 'image',
        );
        const textBlock = itemBlocks?.find(
          (block: OptimoBlock) => block.type === 'text',
        );
        const canonicalUrl =
          textBlock?.model?.blocks?.[0]?.model?.blocks?.[0]?.model?.locator;

        return {
          headlines: {
            promoHeadline: {
              blocks: textBlock?.model?.blocks,
            },
          },
          images: {
            defaultPromoImage: {
              blocks: imageBlock?.model?.blocks,
            },
          },
          locators: { canonicalUrl },
        };
      },
    );

    return transformedRelatedContentItems;
  }

  if (variation === 'wsoj_most_read') {
    const mostReadItems = mostRead?.items?.slice(0, 4);

    const transformedMostReadItems = mostReadItems?.map(item => {
      return {
        headlines: {
          promoHeadline: {
            blocks: [singleTextBlock(item.title)],
          },
        },
        images: item?.images,
        locators: { canonicalUrl: item?.href },
      };
    });

    return transformedMostReadItems;
  }

  if (variation === 'off') return [];

  return [];
};
