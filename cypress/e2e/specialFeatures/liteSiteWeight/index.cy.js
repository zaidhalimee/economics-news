import assertPageWeight from './assertions/liteSiteWeight';

const liteTestSuites = [
  {
    path: '/hindi.lite',
    service: 'hindi',
    runforEnv: 'local',
    pageType: 'Home',
    tests: [assertPageWeight],
  },
  {
    path: '/mundo/articles/cddylv9g8z0o.lite',
    runforEnv: 'local',
    pageType: 'Optimo Article',
    tests: [assertPageWeight],
  },
  {
    path: '/nepali/bbc_nepali_radio/liveradio.lite',
    runforEnv: 'local',
    pageType: 'Live Radio',
    tests: [assertPageWeight],
  },
  {
    path: '/arabic/media-53135426.lite',
    runforEnv: 'local',
    pageType: 'CPS Media Article with Live Stream',
    tests: [assertPageWeight],
  },
  {
    path: '/marathi/popular/read.lite',
    runforEnv: 'local',
    pageType: 'Most Read',
    tests: [assertPageWeight],
  },
  {
    path: '/gahuza/bbc_gahuza_radio/programmes/p0340x2m.lite',
    runforEnv: 'local',
    pageType: 'On Demand Audio - Brand',
    tests: [assertPageWeight],
  },
  {
    path: '/gahuza/bbc_gahuza_radio/w3ct1v5v.lite',
    runforEnv: 'local',
    pageType: 'On Demand Audio - Episode',
    tests: [assertPageWeight],
  },
  {
    path: '/gahuza/podcasts/p07yh8hb.lite',
    runforEnv: 'local',
    pageType: 'Podcast - Brand',
    tests: [assertPageWeight],
  },
  {
    path: '/gahuza/podcasts/p07yh8hb/p094vs2n.lite',
    runforEnv: 'local',
    pageType: 'Podcast - Episode',
    tests: [assertPageWeight],
  },
  {
    path: '/tigrinya/news-51249937.lite',
    runforEnv: 'local',
    pageType: 'CPS Media Article',
    tests: [assertPageWeight],
  },
  {
    path: '/hausa/articles/clm3n4pdeymo.lite',
    runforEnv: 'local',
    pageType: 'Optimo Media Article',
    tests: [assertPageWeight],
  },
  {
    path: '/nepali/news-50627370.lite',
    runforEnv: 'local',
    pageType: 'CPS Photo Gallery (PGL)',
    tests: [assertPageWeight],
  },
  {
    path: '/arabic/sports-54278377.lite',
    runforEnv: 'local',
    pageType: 'CPS Story (STY)',
    tests: [assertPageWeight],
  },
  {
    path: '/korean/topics/cnwng7v0e54t.lite',
    runforEnv: 'local',
    pageType: 'Topic',
    tests: [assertPageWeight],
  },
  {
    path: '/urdu/live/c04z6x46l0vt.lite',
    runforEnv: 'local',
    pageType: 'Live',
    tests: [assertPageWeight],
  },
];

liteTestSuites.forEach(testData => {
  const { path, tests, pageType, runforEnv, ...params } = testData;
  const cypressEnv = Cypress.env('APP_ENV');

  if (runforEnv.includes(cypressEnv)) {
    describe(`${Cypress.config().baseUrl}${path}`, () => {
      tests.forEach(test => {
        test({ path, pageType, ...params });
      });
    });
  }
});
