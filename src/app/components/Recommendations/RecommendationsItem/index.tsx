/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useContext } from 'react';

import { RequestContext } from '#contexts/RequestContext';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { getEnvConfig } from '#app/lib/utilities/getEnvConfig';
import RecommendationsImage from '../RecommendationsPromoImage';
import styles from './index.styles';
import { Recommendation } from '../types';

const RecommendationsItem = ({
  recommendation,
  index = 0,
}: {
  recommendation: Recommendation | null;
  index?: number;
}) => {
  const { isLite } = useContext(RequestContext);

  // TODO: Check this
  const eventTrackingData = {
    campaignID: 'cps_wsoj',
    ...(recommendation && {
      componentName: encodeURIComponent(recommendation?.title),
      advertiserID: recommendation?.href?.split('/')[1],
      url: `${getEnvConfig().SIMORGH_BASE_URL}${recommendation?.href?.split('/')[1]}`,
      format: `CHD=promo::${index + 1}`,
    }),
  };

  const handleClickTracking = useClickTrackerHandler(eventTrackingData);

  if (!recommendation) return null;

  const { title, image, href } = recommendation;

  return (
    <div css={styles.promoWrapper} data-e2e="story-promo-wrapper">
      {!isLite && (
        <div css={styles.imageWrapper}>
          <RecommendationsImage image={image} lazyLoad />
        </div>
      )}
      <div css={styles.textWrapper}>
        <div css={styles.headline}>
          <a
            css={styles.link}
            href={href}
            {...(eventTrackingData && { onClick: handleClickTracking })}
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsItem;
