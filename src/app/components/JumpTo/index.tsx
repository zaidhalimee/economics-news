/* eslint-disable react-hooks/rules-of-hooks */
/** @jsx jsx */
import { useContext, useState, useEffect } from 'react';
import { jsx } from '@emotion/react';
import { ServiceContext } from '#contexts/ServiceContext';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import Text from '#app/components/Text';
import isLive from '#app/lib/utilities/isLive';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import idSanitiser from '../../lib/utilities/idSanitiser';
import styles from './index.styles';

export interface JumpToProps {
  jumpToHeadings?: Array<{ heading: string }>;
}

const eventTrackingData: EventTrackingMetadata = {
  componentName: 'jumpto',
};

const JumpTo = ({ jumpToHeadings }: JumpToProps) => {
  // TODO: Remove for release
  if (isLive()) return null;

  const { translations } = useContext(ServiceContext);
  const [hash, setHash] = useState('');
  const { jumpTo = 'Jump to' } = translations?.articlePage || {};

  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);
  // state initialisation. useState(false) initialises a state varirable
  // and isRelatedContentPresent is set to the default value of false
  // isRelatedContentPresent is the state variable that holds the current state
  // indicating whether the related content is present or not
  // setIsRelatedContentPresent is the function used to update the state variable isRelatedContentPresent
  const [isRelatedContentPresent, setIsRelatedContentPresent] = useState(false);
  // This hook runs after the component renders
  useEffect(() => {
    // this line tries to find the related content element with the id
    const relatedContentHeading = document.getElementById(
      'related-content-heading',
    );
    // this double negation turns the result into a boolean, where if it is found the boolean is true, and if it is null because it is not found, then it is false
    setIsRelatedContentPresent(!!relatedContentHeading);
  }, []); // the empty array as the second argument to useEffect means that this effect only runs once (after the initial render)
  const linkClickHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    subheadingId: string,
  ) => {
    clickTrackerHandler(e);
    setHash(subheadingId);
  };

  const titleId = 'jump-to-heading';

  return (
    <nav
      ref={viewRef}
      role="navigation"
      aria-labelledby={titleId}
      data-testid="jump-to"
      css={styles.wrapper}
    >
      <Text
        as="strong"
        id={titleId}
        size="doublePica"
        fontVariant="sansBold"
        css={styles.title}
      >
        {jumpTo}
      </Text>
      <ol role="list" css={styles.list}>
        {jumpToHeadings?.map(({ heading }) => {
          const sanitisedId = idSanitiser(heading);
          const idWithHash = `#${sanitisedId}`;

          const isActiveId = decodeURIComponent(hash) === idWithHash;
          return (
            <li key={idWithHash} css={styles.listItem}>
              <a
                href={idWithHash}
                onClick={e => linkClickHandler(e, idWithHash)}
                css={styles.link}
                aria-labelledby={`jump-to-heading-${sanitisedId}`}
                data-testid={`jump-to-link-${sanitisedId}`}
              >
                <span
                  id={`jump-to-heading-${sanitisedId}`}
                  css={[styles.linkText, isActiveId && styles.linkTextActive]}
                >
                  {heading}
                </span>
              </a>
            </li>
          );
        })}

        {isRelatedContentPresent && (
          <li key="#related-content-heading" css={styles.listItem}>
            <a
              href="#related-content-heading"
              onClick={e => linkClickHandler(e, '#related-content-heading')}
              css={styles.link}
              aria-labelledby="jump-to-related-content-heading"
            >
              <span
                id="jump-to-related-content-heading"
                css={[
                  styles.linkText,
                  decodeURIComponent(hash) === '#related-content-heading' &&
                    styles.linkTextActive,
                ]}
              >
                Related Content
              </span>
            </a>
          </li>
        )}
        <li key="#Most-Read" css={styles.listItem}>
          <a
            href="#Most-Read"
            onClick={e => linkClickHandler(e, '#Most-Read')}
            css={styles.link}
            aria-labelledby="jump-to-most-read-heading"
          >
            <span
              id="jump-to-most-read-heading"
              css={[
                styles.linkText,
                decodeURIComponent(hash) === '#Most-Read' &&
                  styles.linkTextActive,
              ]}
            >
              Most Read
            </span>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default JumpTo;
