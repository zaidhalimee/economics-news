/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import Text from '#app/components/Text';
import styles from './index.styles';
import { MediaCollection } from '../MediaLoader/types';

type Props = { mediaCollection: MediaCollection | null };

const LiveMediaStream = ({ mediaCollection }: Props) => {
  const testText = 'button is ';

  const [showMedia, setShowMedia] = useState(false);

  if (mediaCollection == null) {
    return null;
  }

  const handleClick = () => {
    setShowMedia(!showMedia);
  };

  return (
    <div css={styles.liveMediaStreamContainer}>
      <button type="button" onClick={handleClick}>
        {testText}
        {`${showMedia}`}
      </button>
    </div>
  );
};

export default LiveMediaStream;
