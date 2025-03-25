/* eslint-disable no-console */
const { exec } = require('child_process');

const MAX_PAGE_SIZE_KB = 100;

const litePageSizeValidator = async () => {
  const urlsToCheck = [
    { path: '/hindi', pageType: 'home' },
    { path: '/mundo/articles/cddylv9g8z0o', pageType: 'article' },
    {
      path: '/nepali/bbc_nepali_radio/liveradio',
      pageType: 'live radio',
    },
    { path: '/arabic/media-53135426', pageType: 'media asset with live stream' },
    { path: '/marathi/popular/read', pageType: 'most read' },
    {
      path: '/gahuza/bbc_gahuza_radio/programmes/p0340x2m',
      pageType: 'on demand audio - Brand',
    },
    {
      path: '/gahuza/bbc_gahuza_radio/w3ct1v5v',
      pageType: 'on demand audio - Episode',
    },
    {
      path: '/gahuza/podcasts/p07yh8hb',
      pageType: 'podcast - Brand',
    },
    {
      path: '/gahuza/podcasts/p07yh8hb/p094vs2n',
      pageType: 'podcast - Episode',
    },
    {
      path: '/gujarati/bbc_gujarati_tv/tv_programmes/w13xttqr',
      pageType: 'on demand tv - Brand',
    },
    {
      path: '/hausa/bbc_hausa_tv/tv/w172yjj7rfhxp1p',
      pageType: 'on demand tv - Episode',
    },
    {
      path: '/hausa/bbc_hausa_tv/tv/w172yjj7rfhxp1p',
      pageType: 'on demand tv - Episode',
    },
    {
      path: '/tigrinya/news-51249937',
      pageType: 'media article',
    },
    { path: '/nepali/news-50627370', pageType: 'CPS Photo Gallery (PGL)' },
    { path: '/arabic/sports-54278377', pageType: 'story' },
    { path: '/korean/topics/cnwng7v0e54t', pageType: 'topic' },

    {
      path: '/urdu/live/c04z6x46l0vt',
      pageType: 'live',
      nextjs: true,
    },

    {
      path: '/mundo/send/u50853489',
      pageType: 'uploader',
      nextjs: true,
    },

    {
      path: '/ws/languages',
      pageType: 'languages',
      nextjs: true,
    },
  ];

  const execPromise = url => {
    const command = `curl -s ${url} | gzip | wc -c`;
    return new Promise(resolve => {
      exec(command, (err, stdout) => {
        resolve(stdout);
      });
    });
  };

  const testResults = await Promise.all(
    urlsToCheck.map(async ({ path, pageType, nextjs }) => {
      const localUrl = `http://localhost:${nextjs ? 7081 : 7080}${path}.lite?renderer_env=live`;
      const liveUrl = `https://www.bbc.com${path}.lite?renderer_env=live`;

      const [localPageSize, livePageSize] = await Promise.all([
        execPromise(localUrl),
        execPromise(liveUrl),
      ]);

      const localSizeKb = parseFloat(localPageSize.trim() / 1024).toFixed(2);
      const liveSizeKb = parseFloat(livePageSize.trim() / 1024).toFixed(2);
      const result = localSizeKb > MAX_PAGE_SIZE_KB ? '❌' : '✅';

      return {
        pageType,
        path,
        localSizeKb,
        liveSizeKb,
        result,
      };
    }),
  );

  console.table(testResults);

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
