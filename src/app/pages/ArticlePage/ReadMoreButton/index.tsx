/** @jsx jsx */
import { MouseEventHandler } from 'react';
import { jsx } from '@emotion/react';
import styles from './index.styles';

type Props = {
  showAllContent: boolean;
  setShowAllContent: MouseEventHandler<HTMLButtonElement>;
};

const ReadMoreButton = ({ showAllContent, setShowAllContent }: Props) => {
  // Hide button when all content is shown
  if (showAllContent) return null;

  // Display variations of button

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
