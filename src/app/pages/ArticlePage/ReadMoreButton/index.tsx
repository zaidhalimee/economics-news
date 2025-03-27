/** @jsx jsx */
import { MouseEventHandler } from 'react';
import { jsx, useTheme } from '@emotion/react';
import styles from './index.styles';

type Props = {
  showAllContent: boolean;
  setShowAllContent: MouseEventHandler<HTMLButtonElement>;
  variation: 'A' | 'B';
};

const ReadMoreButton = ({
  showAllContent,
  setShowAllContent,
  variation,
}: Props) => {
  const theme = useTheme();
  // Hide button when all content is shown
  if (showAllContent) return null;

  // Display variations of button based on variation
  const buttonStyle =
    variation === 'A' ? styles.readMoreButtonA : styles.readMoreButtonB;
  const hideButtonStyle = styles.hideButtonOnDesktop;
  console.log('buttonStyle', buttonStyle);
  return (
    <button
      css={[buttonStyle, hideButtonStyle]}
      type="button"
      onClick={setShowAllContent}
      data-testid="read-more-button"
    >
      {variation === 'B' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="16"
          height={theme.fontSizes.pica.fontSize}
          css={{
            marginRight: '10px',
            marginLeft: '0',
            verticalAlign: 'middle',
          }}
        >
          <path d="M26.7 12.6 16 23.2 5.3 12.6V8.8h21.4z" />
        </svg>
      )}
      Read More
    </button>
  );
};

export default ReadMoreButton;
