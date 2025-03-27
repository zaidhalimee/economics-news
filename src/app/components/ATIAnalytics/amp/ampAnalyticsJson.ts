// The pageview request needs to have the ${base} value not interpolated.
/* eslint-disable no-template-curly-in-string */
/* eslint-disable prefer-template */

import { ATIAnalyticsProps } from '../types';
const { testReverbUrlGenerator } = require('@bbc/test_reverb_url_helper');

const ampAnalyticsJson = ({ baseUrl, pageviewParams }: ATIAnalyticsProps) => ({
  transport: {
    beacon: false,
    xhrpost: false,
    image: true,
  },
  requests: {
    base: baseUrl,
    // invoke reverb helper
    pageview:
      '${base}' + pageviewParams + testReverbUrlGenerator.getHelloWorld(),
  },
  triggers: {
    trackPageview: {
      on: 'visible',
      request: 'pageview',
    },
  },
});

export default ampAnalyticsJson;
