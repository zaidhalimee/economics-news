/** @jsx jsx */
import React, { use, useEffect } from 'react';
import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import useViewTracker from '#app/hooks/useViewTracker';
import { ServiceContext } from '#app/contexts/ServiceContext';
import styles from './index.styles';

type Props = {
  showAllContent: boolean;
  setShowAllContent: () => void;
  variation: 'A' | 'B' | null;
  eventTrackingData?: EventTrackingMetadata;
};

const ContinueReadingButton = ({
  showAllContent,
  setShowAllContent,
  variation,
}: Props) => {
  const eventTrackingData: EventTrackingMetadata = {
    componentName: 'read-more-button',
  };

  const {
    translations: { continueReading = 'Continue reading' },
  } = use(ServiceContext);

  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);

  const handleEvent = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    clickTrackerHandler(event as React.MouseEvent<HTMLButtonElement>);
    setShowAllContent();
  };

  useEffect(() => {
    if (showAllContent) {
      const main = document.querySelector('main');
      // Get the 7th child element of the main element
      const nthElement = main?.querySelectorAll<HTMLElement>(':scope > *')[7];

      if (nthElement) {
        nthElement.tabIndex = 0;
        nthElement.focus();
        nthElement.addEventListener('blur', () => {
          nthElement.removeAttribute('tabindex');
        });
      }
    }
  }, [showAllContent]);

  // Hide button when all content is shown
  if (showAllContent || !variation) return null;

  // Display variations of button based on variation
  const buttonStyle =
    variation === 'A'
      ? styles.continueReadingButtonA
      : styles.continueReadingButtonB;

  return (
    <button
      css={[buttonStyle, styles.hideButtonOnDesktop]}
      type="button"
      onMouseDown={handleEvent}
      onKeyDown={handleEvent}
      onTouchStart={handleEvent}
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
      <Text fontVariant="sansBold">{continueReading}</Text>
    </button>
  );
};

export default ContinueReadingButton;
