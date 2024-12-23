/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import Text from '#app/components/Text';
import styles from './index.styles';
import { MediaCollection } from '../MediaLoader/types';

type Props = { mediaCollection: MediaCollection[] | null };

const LiveMediaStream = ({ mediaCollection }: Props) => {
  const testText = 'button is ';

  const [showMedia, setShowMedia] = useState(false);

  if (mediaCollection == null || mediaCollection.length === 0) {
    return null;
  }

  const {
    model: {
      title,
      masterbrand: { networkName },
      synopses: { short },
    },
  } = mediaCollection[0];

  const handleClick = () => {
    setShowMedia(!showMedia);
  };

  return (
    <div css={styles.liveMediaStreamContainer}>
      <button type="button" onClick={handleClick}>
        {testText}
        {`${showMedia}`}
      </button>
      <Text>
        {title} {networkName} {short}
      </Text>
    </div>
  );
};

export default LiveMediaStream;
