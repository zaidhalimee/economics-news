/** @jsx jsx */
import { MouseEventHandler } from 'react';
import { jsx } from '@emotion/react';
import styles from './index.styles';

type Props = {
  setShowAllContent: MouseEventHandler<HTMLButtonElement>;
};

const ReadMoreButton = ({ setShowAllContent }: Props) => {
  return (
    <button
      css={styles.readMoreButton}
      type="button"
      onClick={setShowAllContent}
    >
      Read More
    </button>
  );
};

export default ReadMoreButton;
