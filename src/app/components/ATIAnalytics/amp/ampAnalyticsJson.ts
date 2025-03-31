// The pageview request needs to have the ${base} value not interpolated.
/* eslint-disable no-template-curly-in-string */
/* eslint-disable prefer-template */

import { testReverbUrlGenerator } from '@bbc/test_reverb_url_helper';
import { ATIAnalyticsProps } from '../types';

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
