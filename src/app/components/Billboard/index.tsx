/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { ForwardedRef, forwardRef } from 'react';
import { jsx } from '@emotion/react';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import Heading from '../Heading';
import MaskedImage from '../MaskedImage';
import styles from './index.styles';
import Text from '../Text';
import LivePulse from '../LivePulse';
import LiveText from '../LiveText';

interface BillboardProps {
  heading: string;
  description: string;
  link: string;
  image: string;
  altText: string;
  id?: string;
  eventTrackingData?: EventTrackingMetadata;
  showLiveLabel?: boolean;
}

const Billboard = forwardRef(
  (
    {
      heading,
      description,
      link,
      image,
      altText,
      id = 'billboard-1',
      eventTrackingData,
      showLiveLabel,
    }: BillboardProps,
    viewRef: ForwardedRef<HTMLDivElement>,
  ) => {
    const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);

    return (
      <section role="region" aria-labelledby={id} data-testid={id}>
        <div css={styles.headerContainer} ref={viewRef}>
          <div css={styles.backgroundContainer} />
          <div css={styles.contentContainer}>
            <MaskedImage
              imageUrl={image.replace('{width}', '240')}
              imageUrlTemplate={image}
              altText={altText}
              imageWidth={660}
              showPlaceholder={false}
            />
            <div css={styles.textContainer}>
              <Heading level={2} size="paragon" css={styles.heading} id={id}>
                <a href={link} css={styles.link} onClick={clickTrackerHandler}>
                  {showLiveLabel ? (
                    <div data-testid="billboard-live-label">
                      <LivePulse
                        width="24"
                        height="24"
                        css={styles.liveLabelPulse}
                      />
                      <LiveText css={styles.liveLabelText}>
                        <div>{heading}</div>
                      </LiveText>
                    </div>
                  ) : (
                    <div>{heading}</div>
                  )}
                </a>
              </Heading>
              {description && (
                <Text as="p" css={styles.description}>
                  {description}
                </Text>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

export default ({
  heading,
  description,
  link,
  image,
  altText,
  id,
  eventTrackingData,
  showLiveLabel,
}: BillboardProps) => {
  const viewRef = useViewTracker(eventTrackingData);

  return (
    <Billboard
      heading={heading}
      description={description}
      link={link}
      image={image}
      altText={altText}
      id={id}
      eventTrackingData={eventTrackingData}
      ref={viewRef}
      showLiveLabel={showLiveLabel}
    />
  );
};
