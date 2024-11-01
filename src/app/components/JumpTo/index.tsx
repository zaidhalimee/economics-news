/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import { ServiceContext } from '#contexts/ServiceContext';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import Heading from '#app/components/Heading';

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
  const { jumpToText = 'Jump to' } = translations?.liveExperiencePage || {};

  const viewRef = useViewTracker(eventTrackingData);
  const clickTrackerHandler = useClickTrackerHandler({
    ...eventTrackingData,
    identifier: 'JumpTo',
  });

  const headings: JumpToHeading[] = jumpToData?.model?.blocks
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

  return (
    <section
      ref={viewRef}
      role="region"
      aria-labelledby={headingId}
      data-testid="jump-to"
    >
      <Heading level={2} tabIndex={-1} id={headingId}>
        {jumpToText}
      </Heading>
      <nav aria-labelledby={headingId}>
        <ul>
          {headings.map((heading, index) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={clickTrackerHandler}
                tabIndex={-1}
                data-testid={`jump-to-link-${index}`}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default JumpTo;
