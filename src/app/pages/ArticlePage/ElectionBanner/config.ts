import { getEnvConfig } from '#app/lib/utilities/getEnvConfig';

const { SIMORGH_INCLUDES_BASE_URL, SIMORGH_APP_ENV } = getEnvConfig();

const isDevelopmentPath = ['local', 'test'].includes(SIMORGH_APP_ENV);

export default {
  heights: {
    desktop: 465,
    tablet: 480,
    mobile: 540,
  },
  iframeSrc: `${SIMORGH_INCLUDES_BASE_URL}/include/vjafwest/1365-2024-us-presidential-election-banner${isDevelopmentPath ? '/develop' : ''}/{service}/app`,
  thingIds: [
    '647d5613-e0e2-4ef5-b0ce-b491de38bdbd', // https://www.bbc.co.uk/things/647d5613-e0e2-4ef5-b0ce-b491de38bdbd
  ],
};
