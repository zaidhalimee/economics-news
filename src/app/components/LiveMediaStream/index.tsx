/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useContext, useState } from 'react';
import Text from '#app/components/Text';
import { MediaCollection } from '#app/components/MediaLoader/types';
import MediaLoader, { BumpLoader } from '#app/components/MediaLoader';
import filterForBlockType from '#app/lib/utilities/blockHandlers';
import { ServiceContext } from '#app/contexts/ServiceContext';
import mediaIcons from '#psammead/psammead-assets/src/svgs/mediaIcons';
import styles from './index.styles';

type Props = { mediaCollection: MediaCollection[] | null };
const DEFAULT_WATCH__NOW = 'Watch Now';

const LiveMediaStream = ({ mediaCollection }: Props) => {
  const [showMedia, setShowMedia] = useState(false);
  const { translations } = useContext(ServiceContext);

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
    },
  } = mediaItem;

  const handleClick = () => {
    setShowMedia(!showMedia);
  };

  return (
    <div css={styles.liveMediaStreamContainer}>
      <BumpLoader />
      <Text css={styles.mediaDescription}>{short}</Text>
      {!showMedia && (
        <button
          type="button"
          onClick={handleClick}
          data-testid="watch-now-button"
          css={styles.playButton}
        >
          {mediaIcons.video}
          {watchNow}
        </button>
      )}
      {showMedia && (
        <div css={styles.mediaLoaderContainer}>
          <div css={styles.liveMediaSpan}>
            <Text>{`${title} - ${networkName}`}</Text>
            <button
              type="button"
              onClick={handleClick}
              data-testid="close-button"
            >
              {mediaIcons.close}
            </button>
          </div>
          <MediaLoader blocks={mediaCollection} />
        </div>
      )}
    </div>
  );
};

export default LiveMediaStream;
