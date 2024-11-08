/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import { ServiceContext } from '#contexts/ServiceContext';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import Text from '#app/components/Text';
import InlineLink from '#app/components/InlineLink';
import idSanitiser from '../../lib/utilities/idSanitiser';

export interface JumpToProps {
  jumpToHeadings?: Array<{ heading: string }>;
  eventTrackingData?: EventTrackingMetadata;
}

const JumpTo = ({ jumpToHeadings, eventTrackingData }: JumpToProps) => {
  const { translations } = useContext(ServiceContext);
  const { jumpTo = 'Jump to' } = translations?.articlePage || {};

  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler({
    ...eventTrackingData,
    componentName: 'jumpto',
  });

  const titleId = 'jump-to-heading';

  return (
    <nav
      ref={viewRef}
      role="navigation"
      aria-labelledby={titleId}
      data-testid="jump-to"
    >
      <Text as="strong" id={titleId}>
        {jumpTo}
      </Text>
      <ol role="list">
        {jumpToHeadings?.map(({ heading }) => {
          const sanitisedId = idSanitiser(heading);
          return (
            <li key={sanitisedId}>
              <InlineLink
                to={`#${sanitisedId}`}
                onClick={clickTrackerHandler}
                data-testid={`jump-to-link-${sanitisedId}`}
                text={heading}
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default JumpTo;
