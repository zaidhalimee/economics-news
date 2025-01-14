import React, { useEffect, useState } from 'react';
import { getEnvConfig } from '#app/lib/utilities/getEnvConfig';
import isOperaProxy from '#app/lib/utilities/isOperaProxy';
import sendBeacon from '../../../lib/analyticsUtils/sendBeacon';
import { ATIAnalyticsProps } from '../types';

// some other metric?
const getNoJsATIPageViewUrl = (atiPageViewUrl: string) =>
  atiPageViewUrl.includes('x8=[simorgh]')
    ? atiPageViewUrl.replace('x8=[simorgh]', 'x8=[simorgh-nojs]')
    : `${atiPageViewUrl}&x8=[BLAH]`;

const renderNoScriptTrackingPixel = (atiPageViewUrl: string) => {
  return (
    <noscript>
      <img
        height="1px"
        width="1px"
        alt=""
        // This should probably have been a styled component. But the author is
        // lazy and didn't want to write a fuzzy matcher for the unit AND e2e
        // tests (you can't predict the class names chosen by emotion)
        style={{ position: 'absolute' }}
        src={getNoJsATIPageViewUrl(atiPageViewUrl)}
      />
    </noscript>
  );
};

const MyAnalytics = ({ pageviewParams }: ATIAnalyticsProps) => {
  const atiPageViewUrlString =
    getEnvConfig().SIMORGH_ATI_BASE_URL + pageviewParams;

  console.log('atiPageViewUrlString', atiPageViewUrlString);

  const [atiPageViewUrl] = useState(atiPageViewUrlString);

  console.log('atiPageViewUrl', atiPageViewUrl);

  useEffect(() => {
    if (!isOperaProxy()) sendBeacon(atiPageViewUrl);
  }, [atiPageViewUrl]);

  return <>{renderNoScriptTrackingPixel(atiPageViewUrl)}</>;
};

export default MyAnalytics;
