import React, { useContext, forwardRef } from 'react';
import Paragraph from '#psammead/psammead-paragraph/src';
import styled from '@emotion/styled';
import { GEL_GROUP_4_SCREEN_WIDTH_MIN } from '#psammead/gel-foundations/src/breakpoints';
import { GEL_SPACING_QUIN } from '#psammead/gel-foundations/src/spacings';
import { GridItemMedium } from '#components/Grid';
import { ServiceContext } from '../../../contexts/ServiceContext';
import Blocks from '../Blocks';
import fragment from '../Fragment';
import InlineLink from '../InlineLink';
import Inline from '../InlineContainer';

const componentsToRender = { fragment, urlLink: InlineLink, inline: Inline };

const StyledParagraph = styled(Paragraph)`
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    ${({ dir }) =>
      dir === 'ltr'
        ? `padding-right: ${GEL_SPACING_QUIN};`
        : `padding-left: ${GEL_SPACING_QUIN};`}
  }
`;

const ParagraphContainer = forwardRef(
  ({ blocks, className, index, showFocus, mycounter, tabIndex }, ref) => {
    const { script, service, dir } = useContext(ServiceContext);
    return (
      <GridItemMedium>
        <StyledParagraph
          ref={ref} // Attach the ref here
          script={script}
          service={service}
          dir={dir}
          className={className}
          index={index}
        >
          <Blocks blocks={blocks} componentsToRender={componentsToRender} />
        </StyledParagraph>
      </GridItemMedium>
    );
  },
);

export default ParagraphContainer;
