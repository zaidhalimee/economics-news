import React from 'react';
import { string } from 'prop-types';
import xssJsonStringify from '#lib/utilities/xssJsonStringify';
import getAmpAnalyticsJson from './ampAnalyticsJson';

const JsonInlinedScript = data => (
  <script
    type="application/json"
    /* eslint-disable-next-line react/no-danger */
    dangerouslySetInnerHTML={{ __html: xssJsonStringify(data) }}
  />
);

const AmpATIAnalytics = ({ pageviewParams }) => {
  return (
    <amp-analytics>
      {JsonInlinedScript(
        getAmpAnalyticsJson({
          baseUrl: process.env.SIMORGH_ATI_BASE_URL,
          pageviewParams,
        }),
      )}
    </amp-analytics>
  );
};

AmpATIAnalytics.propTypes = {
  pageviewParams: string.isRequired,
};

export default AmpATIAnalytics;
