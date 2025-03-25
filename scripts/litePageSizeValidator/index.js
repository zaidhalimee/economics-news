/* eslint-disable no-console */
const { exec } = require('child_process');

const litePageSizeValidator = async () => {
  const urlsToCheck = [
    '/hindi',
    '/mundo/articles/cddylv9g8z0o',
    '/nepali/bbc_nepali_radio/liveradio',
    '/arabic/media-53135426',
    '/marathi/popular/read',
    '/gahuza/bbc_gahuza_radio/programmes/p0340x2m',
    '/nepali/news-50627370',
    '/arabic/sports-54278377',
    '/korean/topics/cnwng7v0e54t',
  ];

  const execPromise = command => {
    return new Promise(resolve => {
      exec(command, (err, stdout) => {
        resolve(stdout);
      });
    });
  };

  const testResults = await Promise.all(
    urlsToCheck.map(async url => {
      const command = `curl -sI --compressed http://localhost:7080${url}.lite?renderer_env=live | grep -i content-length | awk '{print $2/1024}'`;

      const pageSize = await execPromise(command);
      const result = pageSize > 100 ? '❌' : '✅';

      return {
        url,
        pageSize,
        result,
      };
    }),
  );

  console.table(testResults);

  const failures = testResults.filter(({ result }) => result === '❌');

  if (failures.length > 0) {
    failures.forEach(({ url }) => {
      console.error(
        `⚠️ The page size for ${url}.lite is larger than the maximum allowed 100kB`,
      );
    });
    process.exitCode = 1;
  }
};

litePageSizeValidator();
