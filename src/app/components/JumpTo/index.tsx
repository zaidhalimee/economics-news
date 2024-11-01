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
      blocks: Array<{
        id: string;
        type: string;
        model: {
          blocks: Array<{
            type: string;
            model: {
              text?: string;
            };
          }>;
        };
      }>;
    };
  };
  eventTrackingData?: EventTrackingMetadata;
}

const JumpTo = ({ jumpToData, eventTrackingData }: JumpToProps) => {
  const { translations } = useContext(ServiceContext);
  // modify to suit updated config file for hindi w/ jumpto block added - fallback is english
  const { jumpToText = 'Jump to' } = translations?.articlePage || {};

  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler({
    ...eventTrackingData,
    identifier: 'JumpTo',
  });

  // can we simplify the extraction process?
  const subheadlines: JumpToHeading[] = jumpToData?.model?.blocks
    .map(block => {
      const paragraphBlock = block.model.blocks.find(
        b => b.type === 'paragraph',
      );
      const fragmentBlock = paragraphBlock?.model?.blocks?.find(
        b => b.type === 'fragment',
      );
      const title = fragmentBlock?.model?.text || '';
      return title ? { id: block.id, title } : null;
    })
    .filter(Boolean) as JumpToHeading[];

  const headingId = 'jump-to-heading';

  // We use the Text component with the as prop to set it to a strong (for now) because the screenreader UX states the heading should not be announced
  // try inline link in place of anchor tag - might be more useful for styling - could change back to anchor if needed
  // add in classNames
  return (
    <section
      ref={viewRef}
      role="region"
      aria-labelledby={headingId}
      data-testid="jump-to"
    >
      <Text as="strong" tabIndex={-1} id={headingId}>
        {jumpToText}
      </Text>
      <nav aria-labelledby={headingId}>
        <ul>
          {subheadlines.map((heading, index) => (
            <li key={heading.id}>
              <InlineLink
                to={`#${heading.id}`}
                onClick={clickTrackerHandler}
                tabIndex={-1}
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
