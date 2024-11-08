/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import { ServiceContext } from '#contexts/ServiceContext';
import useViewTracker from '#app/hooks/useViewTracker';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import Text from '#app/components/Text';
import InlineLink from '#app/components/InlineLink';
import idSanitiser from '../../lib/utilities/idSanitiser';

export interface JumpToProps {
  jumpToHeadings?: Array<{ heading: string }>;
}

const JumpTo = ({ jumpToHeadings }: JumpToProps) => {
  const { translations } = useContext(ServiceContext);
  const { jumpTo = 'Jump to' } = translations?.articlePage || {};
  const jumpToTrackerData = {
    componentName: 'jumpto',
  };
  const viewRef = useViewTracker(jumpToTrackerData);
  const clickTrackerHandler = useClickTrackerHandler(jumpToTrackerData);

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
