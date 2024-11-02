/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import { ServiceContext } from '#contexts/ServiceContext';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import Text from '#app/components/Text';
import InlineLink from '#app/components/InlineLink';

interface JumpToHeading {
  id: string;
  title: string;
}

interface JumpToProps {
  jumpToData: {
    model: {
      jumpToHeadings: Array<{ heading: string }>;
    };
  };
  eventTrackingData?: EventTrackingMetadata;
}

const JumpTo = ({ jumpToData, eventTrackingData }: JumpToProps) => {
  const { translations } = useContext(ServiceContext);
  const { jumpTo = 'Jump to' } = translations?.articlePage || {};

  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler({
    ...eventTrackingData,
    componentName: 'jumpto',
  });

  const subheadlines: JumpToHeading[] = jumpToData?.model?.jumpToHeadings.map(
    (item, index) => ({
      id: `jump-to-${index}`,
      title: item.heading,
    }),
  );

  const headingId = 'jump-to-heading';

  // we use the Text component with the as prop set to strong (for now) because the screenreader UX states the heading should not be announced
  // using inline link instead of anchor to bring benefits to styling but can revert to anchor if needed
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
        <ul>
          {subheadlines.map((heading, index) => (
            <li key={heading.id}>
              <InlineLink
                to={`#${heading.id}`}
                onClick={clickTrackerHandler}
                data-testid={`jump-to-link-${index}`}
                text={heading.title}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default JumpTo;
