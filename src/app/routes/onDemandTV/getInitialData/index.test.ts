import onDemandTvJson from '#data/pashto/bbc_pashto_tv/tv_programmes/w13xttn4';
import { MEDIA_PAGE } from '#app/routes/utils/pageTypes';
import * as fetchPageData from '../../utils/fetchPageData';
import getInitialData from '.';

fetch.mockResponse(JSON.stringify(onDemandTvJson));
const { env } = process;
const spy = jest.spyOn(fetchPageData, 'default');

describe('Get initial data for on demand tv', () => {
  afterEach(() => {
    process.env = { ...env };
    jest.clearAllMocks();
  });

  it('should return essential data for a page to render', async () => {
    const { pageData } = await getInitialData({
      path: 'mock-on-demand-tv-path',
      pageType: MEDIA_PAGE,
      toggles: {
        recentVideoEpisodes: { enabled: false, value: 4 },
      },
    });

    expect(pageData.language).toEqual('ps');
    expect(pageData.releaseDateTimeStamp).toEqual(1726531200000);
    expect(pageData.brandTitle).toEqual(' د بي بي سي خبرونه ');
    expect(pageData.headline).toEqual(' د بي بي سي خبرونه ');
    expect(pageData.shortSynopsis).toEqual(
      'نړۍ دا وخت، د نړۍ او سیمې وروستۍ پرمختیاوې یادوي',
    );
    expect(pageData.promoBrandTitle).toEqual(' د بي بي سي خبرونه ');
    expect(pageData.durationISO8601).toEqual('PT28M');
    expect(pageData.thumbnailImageUrl).toEqual(
      'https://ichef.bbci.co.uk/images/ic/1024x576/p08b23c8.png',
    );
  });

  it('should return essential data for a page to render when the recent episode toggle is null', async () => {
    const { pageData } = await getInitialData({
      path: 'mock-on-demand-tv-path',
      pageType: MEDIA_PAGE,
      toggles: {
        recentVideoEpisodes: null,
      },
    });

    expect(pageData.language).toEqual('ps');
    expect(pageData.releaseDateTimeStamp).toEqual(1726531200000);
    expect(pageData.brandTitle).toEqual(' د بي بي سي خبرونه ');
    expect(pageData.headline).toEqual(' د بي بي سي خبرونه ');
    expect(pageData.shortSynopsis).toEqual(
      'نړۍ دا وخت، د نړۍ او سیمې وروستۍ پرمختیاوې یادوي',
    );
    expect(pageData.promoBrandTitle).toEqual(' د بي بي سي خبرونه ');

    expect(pageData.durationISO8601).toEqual('PT28M');
    expect(pageData.thumbnailImageUrl).toEqual(
      'https://ichef.bbci.co.uk/images/ic/1024x576/p08b23c8.png',
    );
  });

  it('should return recent episode data when recentEpisode toggle is enabled', async () => {
    const { pageData } = await getInitialData({
      path: 'mock-on-demand-tv-path',
      pageType: MEDIA_PAGE,
      toggles: {
        recentVideoEpisodes: { enabled: true, value: 3 },
      },
    });

    expect(pageData.recentEpisodes.length).toEqual(3);
    expect(pageData.recentEpisodes[0].id).toEqual('w172zmsln64wk50');
  });
});
