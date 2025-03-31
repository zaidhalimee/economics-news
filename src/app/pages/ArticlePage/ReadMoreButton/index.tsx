/** @jsx jsx */
import { MouseEventHandler } from 'react';
import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import useViewTracker from '#app/hooks/useViewTracker';
import styles from './index.styles';

type Props = {
  showAllContent: boolean;
  setShowAllContent: MouseEventHandler<HTMLButtonElement>;
  variation: 'A' | 'B';
  eventTrackingData?: EventTrackingMetadata;
};

const ReadMoreButton = ({
  showAllContent,
  setShowAllContent,
  variation,
}: Props) => {
  const eventTrackingData: EventTrackingMetadata = {
    componentName: 'ReadMoreButton',
  };

  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);

  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    clickTrackerHandler(event);
    setShowAllContent(event);
  };

  // Hide button when all content is shown
  if (showAllContent || !variation) return null;

  // Display variations of button based on variation
  const buttonStyle =
    variation === 'A' ? styles.readMoreButtonA : styles.readMoreButtonB;

  return (
    <button
      css={[buttonStyle, styles.hideButtonOnDesktop]}
      type="button"
      onClick={handleClick}
      data-testid="read-more-button"
      ref={viewRef}
    >
      {variation === 'B' && (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   viewBox="0 0 32 32"
        //   aria-hidden="true"
        //   focusable="false"
        // >
        //   <path d="M26.7 12.6 16 23.2 5.3 12.6V8.8h21.4z" />
        // </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12.6 26.7 23.2 16 12.6 5.3H8.8v21.4z" />
        </svg>
      )}
      <Text fontVariant="sansBold">Continue reading</Text>
    </button>
  );
};

export default ReadMoreButton;
