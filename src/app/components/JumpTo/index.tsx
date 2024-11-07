/** @jsx jsx */
import { useContext, useState, useEffect } from 'react';
import { jsx } from '@emotion/react';
import { ServiceContext } from '#contexts/ServiceContext';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import Text from '#app/components/Text';
import InlineLink from '#app/components/InlineLink';
import isLive from '#app/lib/utilities/isLive';
import idSanitiser from '../../lib/utilities/idSanitiser';
import styles from './index.styles';

export interface JumpToProps {
  jumpToHeadings?: Array<{ heading: string }>;
}

const eventTrackingData: EventTrackingMetadata = {
  componentName: 'jumpto',
};

const JumpTo = ({ jumpToHeadings }: JumpToProps) => {
  const { translations } = useContext(ServiceContext);
  const [hash, setHash] = useState('');
  const { jumpTo = 'Jump to' } = translations?.articlePage || {};

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

  // TODO: Remove for release
  if (isLive()) return null;

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
          const isActiveId = decodeURIComponent(hash) === `#${sanitisedId}`;
          return (
            <li
              key={sanitisedId}
              css={[styles.listItem, isActiveId && styles.listItemActive]}
            >
              <InlineLink
                to={`#${sanitisedId}`}
                onClick={e => linkClickHandler(e, `#${sanitisedId}`)}
                data-testid={`jump-to-link-${sanitisedId}`}
                text={heading}
                css={[styles.link, isActiveId && styles.linkActive]}
                size="pica"
                fontVariant="sansBold"
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default JumpTo;
