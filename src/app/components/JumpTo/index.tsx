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

  const { translations, mostRead } = useContext(ServiceContext);
  const [hash, setHash] = useState('');
  const { jumpTo = 'Jump to' } = translations?.articlePage || {};
  const relatedContent = translations?.relatedContent || 'Related content'; // in English translations this has a lower case c!
  const mostReadHeader = mostRead?.header || 'Most Read';
  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);
  useEffect(() => {
    setHash(window.location.hash);
  }, []);

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
          const sanitisedId =
            heading === relatedContent
              ? 'related-content-heading'
              : idSanitiser(heading);
          const idWithHash = `#${sanitisedId}`;
          const isActiveId = decodeURIComponent(hash) === idWithHash;
          return (
            <li key={idWithHash} css={styles.listItem}>
              <a
                href={idWithHash}
                onClick={e => linkClickHandler(e, idWithHash)}
                css={styles.link}
                data-testid={`jump-to-link-${sanitisedId}`}
              >
                <span
                  css={[styles.linkText, isActiveId && styles.linkTextActive]}
                >
                  {heading}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default JumpTo;
