/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useContext } from 'react';

import { RequestContext } from '#contexts/RequestContext';
// import RecommendationsImage from '../RecommendationsPromoImage';
// import useCombinedClickTrackerHandler from '../../StoryPromo/useCombinedClickTrackerHandler';
import extractPromoData from './RecommendationsPromo/utility';
import styles from './index.styles';

const RecommendationsPromo = ({ promo, eventTrackingData = null }) => {
  const { isLite } = useContext(RequestContext);
  const handleClickTracking = useCombinedClickTrackerHandler(eventTrackingData);

  const { headline, url, indexImage } = extractPromoData({ promo });

  return (
    <div css={styles.promoWrapper} data-e2e="story-promo-wrapper">
      {!isLite && (
        <div css={styles.imageWrapper}>
          <RecommendationsImage indexImage={indexImage} lazyLoad />
        </div>
      )}
      <div css={styles.textWrapper}>
        <div css={styles.headline}>
          <a
            css={styles.link}
            href={url}
            onClick={eventTrackingData ? handleClickTracking : null}
          >
            {headline}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPromo;
