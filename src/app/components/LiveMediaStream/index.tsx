/** @jsx jsx */
import { jsx } from '@emotion/react';
import { memo, useContext, useState } from 'react';
import Text from '#app/components/Text';
import { MediaCollection } from '#app/components/MediaLoader/types';
import MediaLoader from '#app/components/MediaLoader';
import filterForBlockType from '#app/lib/utilities/blockHandlers';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { RequestContext } from '#app/contexts/RequestContext';
import styles from './index.styles';
import WARNING_LEVELS from '../MediaLoader/configs/warningLevels';
import VisuallyHiddenText from '../VisuallyHiddenText';
import { Close, PlayIcon } from '../icons';

type WarningItem = {
  // eslint-disable-next-line camelcase
  warning_code: string;
  // eslint-disable-next-line camelcase
  short_description: string;
};

type Props = { mediaCollection: MediaCollection[] | null };

const DEFAULT_WATCH__NOW = 'Watch Live';

const MemoizedMediaPlayer = memo(MediaLoader);

const LiveMediaStream = ({ mediaCollection }: Props) => {
  const { translations } = useContext(ServiceContext);
  const { isLite } = useContext(RequestContext);
  const [showMedia, setShowMedia] = useState(false);
  let warningLevel = WARNING_LEVELS.NO_WARNING;

  if (isLite || mediaCollection == null || mediaCollection.length === 0) {
    return null;
  }

  const {
    media: { watchNow = DEFAULT_WATCH__NOW },
  } = translations;

  const mediaItem = filterForBlockType(mediaCollection, 'liveMedia');

  const {
    model: {
      title,
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

  const handleClick = () => {
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
  };

  return (
    <div css={styles.componentContainer}>
      <button
        type="button"
        onClick={() => handleClick()}
        data-testid="watch-now-button"
        css={styles.mediaButton}
      >
        <Text
          size="pica"
          fontVariant="sansBold"
          as="span"
          css={[
            styles.mediaDescription,
            warnings && styles.mediaDescriptionGuidance,
          ]}
          className="hoverStylesText"
        >
          <Text size="pica" fontVariant="sansBold" as="span">
            {short}
          </Text>{' '}
          <VisuallyHiddenText>, </VisuallyHiddenText>
          <Text size="pica" fontVariant="sansRegular" as="span">
            {networkName}
          </Text>
        </Text>
        {warnings && (
          <Text
            as="span"
            size="brevier"
            fontVariant="sansRegular"
            css={styles.guidanceMessage}
          >
            {warnings.warning_text}
          </Text>
        )}
        <div
          className="hoverStylesCTA"
          css={[showMedia ? styles.hideComponent : styles.watchLiveCTA]}
        >
          <Text
            css={styles.watchLiveCTAText}
            size="greatPrimer"
            fontVariant="sansBold"
          >
            <PlayIcon />
            {watchNow}
          </Text>
        </div>
      </button>
      <div css={[showMedia ? styles.liveMediaSpan : styles.hideComponent]}>
        <p css={styles.mediaDescription}>
          <Text size="pica" fontVariant="sansBold" as="span">
            {title}
          </Text>{' '}
          <Text size="pica" fontVariant="sansRegular" as="span">
            {networkName}
          </Text>
        </p>
        <button
          type="button"
          onClick={() => handleClick()}
          data-testid="close-button"
          css={styles.closeIconButton}
        >
          <Close />
        </button>
      </div>
      <div css={!showMedia && styles.hideComponent}>
        <MemoizedMediaPlayer blocks={mediaCollection} uniqueId={vpid} />
      </div>
    </div>
  );
};

export default LiveMediaStream;
