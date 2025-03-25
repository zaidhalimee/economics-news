/* eslint-disable no-console */
const { exec } = require('child_process');

const MAX_PAGE_SIZE_KB = 100;

const litePageSizeValidator = async () => {
  const urlsToCheck = [
    { path: '/hindi', pageType: 'Home' },
    { path: '/mundo/articles/cddylv9g8z0o', pageType: 'Optimo Article' },
    {
      path: '/nepali/bbc_nepali_radio/liveradio',
      pageType: 'Live Radio',
    },
    {
      path: '/arabic/media-53135426',
      pageType: 'CPS Media Article with Live Stream',
    },
    { path: '/marathi/popular/read', pageType: 'Most Read' },
    {
      path: '/gahuza/bbc_gahuza_radio/programmes/p0340x2m',
      pageType: 'On Demand Audio - Brand',
    },
    {
      path: '/gahuza/bbc_gahuza_radio/w3ct1v5v',
      pageType: 'On Demand Audio - Episode',
    },
    {
      path: '/gahuza/podcasts/p07yh8hb',
      pageType: 'Podcast - Brand',
    },
    {
      path: '/gahuza/podcasts/p07yh8hb/p094vs2n',
      pageType: 'Podcast - Episode',
    },
    {
      path: '/gujarati/bbc_gujarati_tv/tv_programmes/w13xttqr',
      pageType: 'On Demand TV - Brand',
    },
    {
      path: '/hausa/bbc_hausa_tv/tv/w172yjj7rfhxp1p',
      pageType: 'On Demand TV - Episode',
    },
    {
      path: '/tigrinya/news-51249937',
      pageType: 'CPS Media Article',
    },
    {
      path: '/hausa/articles/clm3n4pdeymo',
      pageType: 'Optimo Media Article',
    },
    { path: '/nepali/news-50627370', pageType: 'CPS Photo Gallery (PGL)' },
    { path: '/arabic/sports-54278377', pageType: 'CPS Story (STY)' },
    { path: '/korean/topics/cnwng7v0e54t', pageType: 'Topic' },
    {
      path: '/urdu/live/c04z6x46l0vt',
      pageType: 'Live',
      nextjs: true,
    },

    {
      path: '/mundo/send/u50853489',
      pageType: 'Uploader',
      nextjs: true,
    },

    {
      path: '/ws/languages',
      pageType: 'Languages',
      nextjs: true,
    },
  ];

  const getPageSizeInBytes = url => {
    const command = `curl -s ${url} | gzip | wc -c`;
    return new Promise(resolve => {
      exec(command, (err, stdout) => {
        resolve(stdout);
      });
    });
  };

  const convertToKb = sizeInKb => {
    return parseFloat((sizeInKb.trim() / 1024).toFixed(2));
  };

  const testResults = await Promise.all(
    urlsToCheck.map(async ({ path, pageType, nextjs }) => {
      const localUrl = `http://localhost:${nextjs ? 7081 : 7080}${path}.lite?renderer_env=live`;
      const liveUrl = `https://www.bbc.com${path}.lite?renderer_env=live`;

      const [localPageSize, livePageSize] = await Promise.all([
        getPageSizeInBytes(localUrl),
        getPageSizeInBytes(liveUrl),
      ]);

      const localSizeKb = convertToKb(localPageSize);
      const liveSizeKb = convertToKb(livePageSize);
      const result = localSizeKb > MAX_PAGE_SIZE_KB ? '❌' : '✅';

      console.log({ localUrl, localPageSize, liveUrl, livePageSize });

      return {
        pageType,
        path,
        liveSizeKb,
        localSizeKb,
        result,
      };
    }),
  );

  console.table(testResults.sort((a, b) => a.localSizeKb - b.localSizeKb));

  const failures = testResults.filter(({ result }) => result === '❌');

  if (failures.length > 0) {
    failures.forEach(({ url }) => {
      console.error(
        `⚠️ The page size for ${url}.lite is larger than the maximum allowed ${MAX_PAGE_SIZE_KB}`,
      );
    });
    process.exitCode = 1;
  }
};

litePageSizeValidator();
