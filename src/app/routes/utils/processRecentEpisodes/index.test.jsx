import assocPath from 'ramda/src/assocPath';
import audioPageData from '#data/indonesia/bbc_indonesian_radio/w13xtt0s.json';
import processRecentEpisodes from '.';

describe('processRecentEpisodes', () => {
  it('should correctly format radio episodes', () => {
    expect(
      processRecentEpisodes(audioPageData, {
        recentEpisodesLimit: 1,
        enabled: true,
      }),
    ).toEqual([
      {
        id: 'w172ywztppckdp6',
        brandTitle: 'Dunia Pagi Ini',
        episodeTitle: 'Dunia Pagi Ini',
        timestamp: 1674345600000,
        duration: 'PT15M30S',
        image: '//ichef.bbci.co.uk/images/ic/768x432/p08b4828.png',
        altText: 'Dunia Pagi Ini',
      },
    ]);
  });

  it('should correctly output multiple episodes', () => {
    expect(
      processRecentEpisodes(audioPageData, {
        recentEpisodesLimit: 3,
        enabled: true,
      }).length,
    ).toEqual(3);
  });

  it('should correctly exclude episodes by id', () => {
    const episodeCountInPageData =
      audioPageData.relatedContent.groups[0].promos.length;
    const firstId = audioPageData.relatedContent.groups[0].promos[0].media.id;
    expect(
      processRecentEpisodes(audioPageData, {
        recentEpisodesLimit: episodeCountInPageData,
        exclude: firstId,
        enabled: true,
      }).length,
    ).toEqual(episodeCountInPageData - 1);
  });

  it('should correctly handle episodes with missing versions', () => {
    const episodeCountInPageData =
      audioPageData.relatedContent.groups[0].promos.length;
    const pageWithMissingVersions = assocPath(
      ['relatedContent', 'groups', 0, 'promos', 0, 'media', 'versions'],
      [],
      audioPageData,
    );
    expect(
      processRecentEpisodes(pageWithMissingVersions, {
        recentEpisodesLimit: episodeCountInPageData,
        enabled: true,
      }).length,
    ).toEqual(episodeCountInPageData - 1);
  });
});
