/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import Text from '#app/components/Text';
import { MediaCollection } from '#app/components/MediaLoader/types';
import MediaLoader, { BumpLoader } from '#app/components/MediaLoader';
import filterForBlockType from '#app/lib/utilities/blockHandlers';
import styles from './index.styles';

type Props = { mediaCollection: MediaCollection[] | null };

const LiveMediaStream = ({ mediaCollection }: Props) => {
  const testText = 'watch now';

  const [showMedia, setShowMedia] = useState(false);

  if (mediaCollection == null || mediaCollection.length === 0) {
    return null;
  }

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
      <span css={styles.mediaDescription}>{short}</span>
      {!showMedia && (
        <button type="button" onClick={handleClick}>
          {testText}
        </button>
      )}
      {showMedia && (
        <div css={styles.mediaLoaderContainer}>
          <span>
            <Text>{`${title} - ${networkName}`}</Text>
            <button type="button" onClick={handleClick}>
              x
            </button>
          </span>
          <MediaLoader blocks={mediaCollection} />
          <Text>{`Last updated X minutes ago | Refresh for updates`}</Text>
        </div>
      )}
    </div>
  );
};

export default LiveMediaStream;
