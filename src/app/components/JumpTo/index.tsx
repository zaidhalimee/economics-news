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

  const headingId = 'jump-to-heading';

  // we use the Text component with the as prop set to strong (for now) because the screenreader UX states the heading should not be announced
  // using InlineLink instead of anchor to bring benefits to styling, but can revert to anchor if needed
  return (
    <section
      ref={viewRef}
      role="region"
      aria-labelledby={headingId}
      data-testid="jump-to"
    >
      <Text as="strong" tabIndex={-1} id={headingId}>
        {jumpTo}
      </Text>
      <nav aria-labelledby={headingId}>
        <ol>
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
    </section>
  );
};

export default JumpTo;
