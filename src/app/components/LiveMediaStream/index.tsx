/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import styles from './index.styles';

const LiveMediaStream = () => {
  const testText = 'button is ';

  const [showMedia, setShowMedia] = useState(false);

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
