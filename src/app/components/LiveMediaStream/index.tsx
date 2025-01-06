/** @jsx jsx */
import { jsx } from '@emotion/react';
import { memo, useContext, useState } from 'react';
import Text from '#app/components/Text';
import { MediaCollection } from '#app/components/MediaLoader/types';
import MediaLoader, { BumpLoader } from '#app/components/MediaLoader';
import filterForBlockType from '#app/lib/utilities/blockHandlers';
import { ServiceContext } from '#app/contexts/ServiceContext';
import mediaIcons from '#psammead/psammead-assets/src/svgs/mediaIcons';
import styles from './index.styles';

type Props = { mediaCollection: MediaCollection[] | null };
const DEFAULT_WATCH__NOW = 'Watch Now';

const MemoizedMediaPlayer = memo(MediaLoader);

const LiveMediaStream = ({ mediaCollection }: Props) => {
  const { translations } = useContext(ServiceContext);
  const [showMedia, setShowMedia] = useState(false);

  if (mediaCollection == null || mediaCollection.length === 0) {
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
      version: { vpid },
    },
  } = mediaItem;

  const handleClick = () => {
    const mediaPlayer = window.mediaPlayers?.[vpid];
    if (mediaPlayer?.player.paused()) {
      mediaPlayer?.play();
      setShowMedia(true);
    } else {
      mediaPlayer?.pause();
      setShowMedia(false);
    }
  };

  return (
    <div css={styles.ComponentContainer}>
      <BumpLoader />
      <p css={styles.mediaDescription}>
        <Text size="pica" fontVariant="sansBold" as="span">
          {short}
        </Text>{' '}
        <Text size="pica" fontVariant="sansRegular" as="span">
          {networkName}
        </Text>
      </p>
      <button
        type="button"
        onClick={handleClick}
        data-testid="watch-now-button"
        css={[
          styles.playButton,
          showMedia ? styles.hideComponent : styles.showComponent,
        ]}
      >
        <Text
          css={styles.playButtonText}
          size="greatPrimer"
          fontVariant="sansBold"
        >
          {mediaIcons.video}
          {watchNow}
        </Text>
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
          onClick={handleClick}
          data-testid="close-button"
          css={styles.closeIconButton}
        >
          {mediaIcons.close}
        </button>
      </div>
      <div css={showMedia ? styles.showComponent : styles.hideComponent}>
        <MemoizedMediaPlayer
          blocks={mediaCollection}
          placeholderOverride={false}
          uniqueId={vpid}
        />
      </div>
    </div>
  );
};

export default LiveMediaStream;
