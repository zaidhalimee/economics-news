/* eslint-disable no-console */
import { JSDOM } from 'jsdom';

const getManifestFile = async url => {
  const response = await fetch(url);

  const html = await response.text();

  const { document } = new JSDOM(html).window;

  const manifestFile = document
    .querySelector('link[rel="manifest"]')
    .getAttribute('href');

  return manifestFile;
};

export default async () => {
  const publicServiceUrls = [
    '/news/articles/c0eg99qjynvo.amp',
    '/sport/tennis/articles/cedlgl4lj23o.amp',
    '/newsround/articles/cp8v6lm0ek6o.amp',
    '/cymrufyw/erthyglau/c4ge78ry9dmo.amp',
    '/naidheachdan/sgeulachdan/c3w14wqg1x8o.amp',
  ];

  const testResults = await Promise.all(
    publicServiceUrls.map(async url => {
      const [, service] = url.split('/');
      const liveManifestFile = await getManifestFile(
        `https://www.bbc.co.uk${url}`,
      );

      const localManifestFile = await getManifestFile(
        `http://localhost:7080/${url}`,
      );

      const result = liveManifestFile === localManifestFile ? '✅' : '❌';

      return {
        service,
        url,
        liveManifestFile,
        localManifestFile,
        result,
      };
    }),
  );

  console.table(testResults);

  const failures = testResults.filter(({ result }) => result === '❌');

  if (failures.length > 0) {
    failures.forEach(({ service }) => {
      console.error(
        `⚠️ The live manifest file for ${service} AMP articles does not match the local manifest file. Please update the manifestPath in src/app/lib/config/services/${service}.ts`,
      );
    });
    process.exit(1);
  }
};
