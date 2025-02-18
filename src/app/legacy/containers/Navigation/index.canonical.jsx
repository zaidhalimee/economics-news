import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import Navigation from '#psammead/psammead-navigation/src';
import { ScrollableNavigation } from '#psammead/psammead-navigation/src/ScrollableNavigation';
import {
  CanonicalDropdown,
  CanonicalMenuButton,
} from '#psammead/psammead-navigation/src/DropdownNavigation';
import { GEL_GROUP_2_SCREEN_WIDTH_MAX } from '#psammead/gel-foundations/src/breakpoints';
import useMediaQuery from '#hooks/useMediaQuery';
import { RequestContext } from '#app/contexts/RequestContext';
import ScrollablePromo from '#components/ScrollablePromo';

const ScrollableWrapper = styled.div`
  &::after {
    position: relative;
  }
`;
const Divider = styled.div`
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  border-bottom: 0.0625rem solid ${props => props.theme.palette.GREY_3};
`;
const CanonicalNavigationContainer = ({
  script,
  service,
  dir,
  menuAnnouncedText,
  scrollableListItems,
  dropdownListItems,
  experimentVariant,
  blocks,
}) => {
  const { isLite } = useContext(RequestContext);
  const [isOpen, setIsOpen] = useState(false);

  useMediaQuery(`(max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX})`, event => {
    if (!event.matches) {
      setIsOpen(false);
    }
  });

  return (
    <Navigation script={script} service={service} dir={dir} isOpen={isOpen}>
      <ScrollableWrapper>
        {!isLite && (
          <CanonicalMenuButton
            announcedText={menuAnnouncedText}
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            dir={dir}
            script={script}
          />
        )}
        {!isOpen && (
          <ScrollableNavigation dir={dir}>
            {scrollableListItems}
          </ScrollableNavigation>
        )}
        <Divider />
      </ScrollableWrapper>
      <CanonicalDropdown isOpen={isOpen}>{dropdownListItems}</CanonicalDropdown>
      <ScrollablePromo blocks={blocks} experimentVariant={experimentVariant} />
    </Navigation>
  );
};

export default CanonicalNavigationContainer;
