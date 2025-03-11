/** @jsx jsx */
import { MouseEventHandler } from 'react';
import { jsx } from '@emotion/react';
import styles from './index.styles';

type Props = {
  setReadMore: MouseEventHandler<HTMLButtonElement>;
};

const ReadMoreButton = ({ setReadMore }: Props) => {
  return (
    <button css={styles.readMoreButton} type="button" onClick={setReadMore}>
      Show More
    </button>
  );
};

export default ReadMoreButton;
