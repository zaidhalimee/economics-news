/** @jsx jsx */
/** @jsxFrag */
import { jsx } from '@emotion/react';
import React, { memo, useContext, useState, forwardRef } from 'react';
import Text from '#app/components/Text';
import { MediaCollection } from '#app/components/MediaLoader/types';
import MediaLoader from '#app/components/MediaLoader';
import filterForBlockType from '#app/lib/utilities/blockHandlers';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { RequestContext } from '#app/contexts/RequestContext';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import styles from './index.styles';
import WARNING_LEVELS from '../MediaLoader/configs/warningLevels';
import VisuallyHiddenText from '../VisuallyHiddenText';
import { Close, Play } from '../icons';

type WarningItem = {
  // eslint-disable-next-line camelcase
  warning_code: string;
  // eslint-disable-next-line camelcase
  short_description: string;
};

type LiveHeaderMediaProps = {
  mediaCollection: MediaCollection[] | null;
  eventTrackingData?: EventTrackingMetadata;
  clickCallback?: () => void;
};

const DEFAULT_WATCH__NOW = 'Watch Live';
const DEFAULT_CLOSE_VIDEO = 'Close video';
const DEFAULT_NO_JS_MESSAGE =
  'This video cannot play in your browser. Please enable JavaScript or try a different browser.';

const MemoizedMediaPlayer = memo(MediaLoader);

const LiveHeaderMedia = forwardRef(
  (
    {
      mediaCollection,
      eventTrackingData,
      clickCallback = () => null,
    }: LiveHeaderMediaProps,
    viewRef,
  ) => {
    const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);
    const { translations } = useContext(ServiceContext);
    const { isLite } = useContext(RequestContext);
    const [showMedia, setShowMedia] = useState(false);

    let warningLevel = WARNING_LEVELS.NO_WARNING;

    if (isLite || mediaCollection == null || mediaCollection.length === 0) {
      return null;
    }

    const {
      media: {
        watch = DEFAULT_WATCH__NOW,
        closeVideo = DEFAULT_CLOSE_VIDEO,
        noJs = DEFAULT_NO_JS_MESSAGE,
      },
    } = translations;

    const mediaItem = filterForBlockType(mediaCollection, 'liveMedia');

    const {
      model: {
        masterbrand: { networkName },
        synopses: { short },
        version: { vpid, warnings },
      },
    } = mediaItem;

    if (warnings) {
      const { warning } = warnings;
      const highestWarning = warning.reduce(
        (maxWarning: WarningItem, currWarning: WarningItem) => {
          const maxWarningCode = WARNING_LEVELS[maxWarning.warning_code];
          const currWarningCode = WARNING_LEVELS[currWarning.warning_code];
          if (currWarningCode > maxWarningCode) {
            return currWarning;
          }
          return maxWarning;
        },
      );

      warningLevel = WARNING_LEVELS[highestWarning.warning_code];
    }

    const clickToggleMedia = () => {
      const mediaPlayer = window.mediaPlayers?.[vpid];
      if (showMedia) {
        mediaPlayer?.pause();
        setShowMedia(false);
      } else {
        if (warningLevel < WARNING_LEVELS.L1) {
          mediaPlayer?.play();
        }
        setShowMedia(true);
      }

      clickCallback();
    };

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      clickTrackerHandler(e);
      clickToggleMedia();
    };

    const description = (
      <>
        <Text
          size="pica"
          fontVariant="sansBold"
          as="span"
          css={[
            styles.mediaDescription,
            showMedia
              ? styles.closeMediaDescription
              : styles.openMediaDescription,
          ]}
          className="hoverStylesText"
        >
          {showMedia && <VisuallyHiddenText>{closeVideo}, </VisuallyHiddenText>}
          <Text size="pica" fontVariant="sansBold" as="span">
            {short},{' '}
          </Text>
          <Text size="pica" fontVariant="sansRegular" as="span">
            {networkName}
          </Text>
          <VisuallyHiddenText>, </VisuallyHiddenText>
        </Text>
        {warnings && (
          <Text
            as="span"
            size="brevier"
            fontVariant="sansRegular"
            css={styles.guidanceMessage}
            data-testid="warning-message"
          >
            {warnings.warning_text}
          </Text>
        )}
      </>
    );

    return (
      <>
        <noscript css={styles.nojs}>
          <p>{description}</p>
          <strong>{noJs}</strong>
        </noscript>
        <div css={styles.componentContainer} ref={viewRef}>
          <button
            type="button"
            onClick={e => handleClick(e)}
            data-testid="watch-now-close-button"
            css={[
              showMedia ? styles.closeButton : styles.openButton,
              styles.mediaButton,
            ]}
          >
            <div>{description}</div>
            {!showMedia && (
              <div className="hoverStylesCTA" css={styles.watchLiveCTA}>
                <Text
                  css={styles.watchLiveCTAText}
                  size="greatPrimer"
                  fontVariant="sansBold"
                >
                  <Play />
                  {watch}
                </Text>
              </div>
            )}
            {showMedia && (
              <div css={styles.closeContainer}>
                <Close />
              </div>
            )}
          </button>
          <div css={showMedia ? styles.mediaLoader : styles.hideComponent}>
            <MemoizedMediaPlayer blocks={mediaCollection} uniqueId={vpid} />
          </div>
        </div>
      </>
    );
  },
);

export default ({
  mediaCollection,
  eventTrackingData,
  clickCallback = () => null,
}: LiveHeaderMediaProps) => {
  const viewRef = useViewTracker(eventTrackingData);

  return (
    <LiveHeaderMedia
      mediaCollection={mediaCollection}
      eventTrackingData={eventTrackingData}
      clickCallback={clickCallback}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - TODO: come back to this
      ref={viewRef}
    />
  );
};
