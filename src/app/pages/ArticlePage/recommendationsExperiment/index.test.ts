import afriqueArticle from '#data/afrique/articles/c7yn6nznljdo.json';
import wsojRecs from '#data/mundo/recommendations/index.json';

import { transformRecsData } from '.';

describe('transformRecsData', () => {
  it('should return wsojRecs if variation is not defined', () => {
    const result = transformRecsData({
      wsojRecs,
      mostRead: afriqueArticle.data.secondaryData.mostRead,
      pageBlocks: afriqueArticle.data.article.content.model.blocks,
      variation: undefined,
    });

    expect(result).toEqual(wsojRecs);
  });

  it('should return wsojRecs if variation is wsoj', () => {
    const result = transformRecsData({
      wsojRecs,
      mostRead: afriqueArticle.data.secondaryData.mostRead,
      pageBlocks: afriqueArticle.data.article.content.model.blocks,
      variation: 'wsoj',
    });

    expect(result).toEqual(wsojRecs);
  });

  it('should return transformed MostReadData if variation is wsoj_most_read', () => {
    const result = transformRecsData({
      wsojRecs,
      mostRead: afriqueArticle.data.secondaryData.mostRead,
      pageBlocks: afriqueArticle.data.article.content.model.blocks,
      variation: 'wsoj_most_read',
    });

    expect(result).toHaveLength(4);

    result.forEach((item: typeof result) => {
      expect(item).toHaveProperty('headlines');
      expect(item.headlines).toHaveProperty('promoHeadline');

      expect(item).toHaveProperty('images');
      expect(item.images).toBeUndefined();

      expect(item).toHaveProperty('locators');
      expect(item.locators).toHaveProperty('canonicalUrl');
    });
  });

  it('should return transfored RelatedContentData if variation is wsoj_related_content', () => {
    const result = transformRecsData({
      wsojRecs,
      mostRead: afriqueArticle.data.secondaryData.mostRead,
      pageBlocks: afriqueArticle.data.article.content.model.blocks,
      variation: 'wsoj_related_content',
    });

    expect(result).toHaveLength(4);

    result.forEach((item: typeof result) => {
      expect(item).toHaveProperty('headlines');
      expect(item.headlines).toHaveProperty('promoHeadline');

      expect(item).toHaveProperty('images');
      expect(item.images).toHaveProperty('defaultPromoImage');
      expect(item.images.defaultPromoImage).toHaveProperty('blocks');

      expect(item).toHaveProperty('locators');
      expect(item.locators).toHaveProperty('canonicalUrl');
    });
  });
});
