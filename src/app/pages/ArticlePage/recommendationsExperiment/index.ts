import { MostReadData } from '#app/components/MostRead/types';
import { singleTextBlock } from '#app/models/blocks';
import { OptimoBlock, Recommendation } from '#app/models/types/optimo';

export type Variation = 'wsoj' | 'most_read' | 'related_content';

type TransformRecsDataProps = {
  wsojRecs: Recommendation[];
  mostRead: MostReadData;
  pageBlocks: OptimoBlock[];
  variation: Variation;
};

export const transformRecsData = ({
  wsojRecs,
  mostRead,
  pageBlocks,
  variation,
}: TransformRecsDataProps) => {
  if (variation === 'wsoj') return wsojRecs;

  if (variation === 'related_content') {
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

  if (variation === 'most_read') {
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

  return null;
};
