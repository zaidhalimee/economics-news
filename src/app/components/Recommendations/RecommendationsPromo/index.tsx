/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useContext } from 'react';

import { RequestContext } from '#contexts/RequestContext';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import RecommendationsImage from '../RecommendationsPromoImage';
import styles from './index.styles';
import { Recommendation } from '../types';

const eventTrackingData = {
  componentName: 'recommendations',
};

const RecommendationsPromo = ({
  recommendation,
}: {
  recommendation: Recommendation;
}) => {
  const { isLite } = useContext(RequestContext);
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

export default RecommendationsPromo;
