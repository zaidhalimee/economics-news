import { getHeadline, getUrl } from '#lib/utilities/getStoryPromoInfo';
import { getEnvConfig } from '#app/lib/utilities/getEnvConfig';
import OPTIMIZELY_CONFIG from '#app/lib/config/optimizely';

export default ({ item, index, optimizely } = {}) => {
  const block = {
    componentName: 'wsoj',
    ...(optimizely && {
      optimizely,
      optimizelyMetricNameOverride:
        optimizely?.getVariation(OPTIMIZELY_CONFIG.ruleKey) || null,
    }),
  };
  const headline = getHeadline(item);
  const url = getUrl(item);
  const advertiserID = url && url.split('/')[1];

  if ([headline, url, advertiserID, index >= 0].every(Boolean)) {
    const link = {
      campaignID: 'cps_wsoj',
      componentName: encodeURIComponent(headline),
      advertiserID,
      url: `${getEnvConfig().SIMORGH_BASE_URL}${url}`,
      format: `CHD=promo::${index + 1}`,
      ...(optimizely && {
        optimizely,
        optimizelyMetricNameOverride:
          optimizely?.getVariation(OPTIMIZELY_CONFIG.ruleKey) || null,
      }),
    };

    return {
      block,
      link,
    };
  }

  return { block };
};
