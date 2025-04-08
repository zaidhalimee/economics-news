/** @jsx jsx */
import React, { use, useEffect } from 'react';
import { jsx, css, useTheme } from '@emotion/react';
import Text from '#app/components/Text';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import useViewTracker from '#app/hooks/useViewTracker';
import { ServiceContext } from '#app/contexts/ServiceContext';
import styles, { customFocusStyle } from './index.styles';

type Props = {
  showAllContent: boolean;
  setShowAllContent: () => void;
  variation: 'A' | 'B' | null;
  eventTrackingData?: EventTrackingMetadata;
  showCTA?: boolean;
};

const ContinueReadingButton = ({
  showAllContent,
  setShowAllContent,
  variation,
  showCTA,
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
    if (event.type === 'keydown') {
      const keyboardEvent = event as React.KeyboardEvent<HTMLButtonElement>;
      if (keyboardEvent.key !== 'Enter' && keyboardEvent.key !== ' ') {
        return; // Ignore keys other than Enter and Space otherwise tabbing to the next element will actually click the button
      }
    }

    event.preventDefault();
    clickTrackerHandler(event as React.MouseEvent<HTMLButtonElement>);
    setShowAllContent();
  };
  const theme = useTheme();

  useEffect(() => {
    if (showAllContent) {
      const main = document.querySelector('main');
      // Get the 7th or 8th child element of the main element depending on if the liveCTA link is present
      const nthElement =
        main?.querySelectorAll<HTMLElement>(':scope > *')[showCTA ? 8 : 7];

      if (nthElement) {
        nthElement.tabIndex = 0;

        // Generate the custom focus style using the theme
        const focusStyle = css(customFocusStyle(theme)).styles;

        // Apply the custom focus style dynamically
        nthElement.setAttribute('style', focusStyle);
        nthElement.focus();

        const handleBlur = () => {
          nthElement.removeAttribute('tabindex');
          nthElement.removeAttribute('style'); // Remove the custom focus style
        };

        nthElement.addEventListener('blur', handleBlur);

        // Return the cleanup function
        return () => {
          nthElement.removeEventListener('blur', handleBlur);
        };
      }
    }

    // Explicitly return undefined if nthElement does not exist
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Text fontVariant="sansBold">{continueReading}</Text>
      {variation === 'B' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M26.7 12.6 16 23.2 5.3 12.6V8.8h21.4z" />
        </svg>
      )}
    </button>
  );
};

export default ContinueReadingButton;
