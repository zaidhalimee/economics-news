import React, { useContext } from 'react';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_QUAD,
} from '#psammead/gel-foundations/src/spacings';

import {
  getDoublePica,
  getBrevier,
} from '#psammead/gel-foundations/src/typography';
import { getSansRegular } from '#psammead/psammead-styles/src/font-styles';
import styled from '@emotion/styled';
import path from 'ramda/src/path';
import pathOr from 'ramda/src/pathOr';
import isEmpty from 'ramda/src/isEmpty';
import tail from 'ramda/src/tail';
import {
  GEL_GROUP_0_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '#psammead/gel-foundations/src/breakpoints';
import { GridItemMediumNoMargin } from '#components/Grid';
import useViewTracker from '#hooks/useViewTracker';
import useClickTrackerHandler from '#hooks/useClickTrackerHandler';
import idSanitiser from '#lib/utilities/idSanitiser';
import { ServiceContext } from '../../../contexts/ServiceContext';
import Promo from './Promo';
import PromoList from './PromoList';

const PromoWrapper = styled.div`
  ${({ dir }) => `margin-${dir === 'ltr' ? 'left' : 'right'}: ${GEL_SPACING};`}
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    ${({ dir }) =>
      `margin-${dir === 'ltr' ? 'left' : 'right'}: ${GEL_SPACING_DBL};`}
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    ${({ dir }) => `margin-${dir === 'ltr' ? 'left' : 'right'}: 0;`}
  }
`;

const ScrollablePromoContainer = styled.div`
  background: #f6f6f6;
  padding: ${GEL_SPACING};
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ experimentVariant }) =>
    experimentVariant !== 'none' &&
    `
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}){
      display: none;
    }
      width: 100vw;
      margin-left: calc(-50vw + 50%);
  `}
`;

const LabelComponent = styled.strong`
  ${({ script, experimentVariant }) =>
    script &&
    (experimentVariant && experimentVariant !== 'none'
      ? getBrevier(script)
      : getDoublePica(script))};
  ${({ service }) => getSansRegular(service)}

  margin-bottom: ${GEL_SPACING_DBL};
  color: ${({ theme }) =>
    theme.isDarkUi ? theme.palette.GREY_2 : theme.palette.SHADOW};

  ${({ dir }) =>
    `
    @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}){
      margin-${dir === 'ltr' ? 'left' : 'right'}: ${GEL_SPACING};
    }
    @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}){
      margin-${dir === 'ltr' ? `left` : `right`}: ${GEL_SPACING_DBL};  
    }
    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}){
        margin-${dir === 'ltr' ? `left` : `right`}: 0;
    }
`}
`;

const ScrollablePromo = ({
  blocks,
  blockGroupIndex = null,
  experimentVariant = 'none',
}) => {
  const { script, service, dir, translations, mostRead } =
    useContext(ServiceContext);
  const eventTrackingData = {
    componentName: `edoj${blockGroupIndex}`,
    format: 'CHD=edoj',
  };
  console.log('experimentVariant:', experimentVariant);
  const viewRef = useViewTracker(eventTrackingData);
  const handleClickTracking = useClickTrackerHandler(eventTrackingData);

  if (!blocks || isEmpty(blocks)) {
    return null;
  }

  let title;
  if (experimentVariant === 'A') {
    // title = `${translations.topStoriesTitle || 'Top Stories'} - `;
    title = translations.topStoriesTitle || 'Top Stories';
  } else if (experimentVariant === 'B') {
    // title = `${mostRead.header || 'Most Read'} - `;
    title = mostRead.header || 'Most Read';
  } else {
    title =
      blocks[0].type === 'title' &&
      path(
        ['0', 'model', 'blocks', '0', 'model', 'blocks', '0', 'model', 'text'],
        blocks,
      );
  }
  const blocksWithoutTitle = blocks[0].type === 'title' ? tail(blocks) : blocks;

  const isSingleItem = blocksWithoutTitle.length === 1;

  const ariaLabel =
    title &&
    idSanitiser(`${title}${experimentVariant !== 'none' ? ' scrollable' : ''}`);

  const a11yAttributes = {
    ...(experimentVariant !== 'none' && {
      as: 'section',
      role: 'region',
    }),
    ...(ariaLabel
      ? { 'aria-labelledby': ariaLabel }
      : {
          'aria-label': pathOr(
            'Related Content',
            ['relatedContent'],
            translations,
          ),
        }),
  };
  return (
    <ScrollablePromoContainer experimentVariant={experimentVariant}>
      <GridItemMediumNoMargin {...a11yAttributes}>
        {title && (
          <LabelComponent
            id={ariaLabel}
            data-testid="eoj-recommendations-heading"
            script={script}
            service={service}
            dir={dir}
            experimentVariant={experimentVariant}
          >
            {title}
          </LabelComponent>
        )}
        {experimentVariant !== 'none' && (
          <PromoList
            blocks={blocks}
            experimentVariant={experimentVariant}
            viewTracker={viewRef}
            onClick={handleClickTracking}
          />
        )}
        {experimentVariant === 'none' && isSingleItem && (
          <PromoWrapper dir={dir} ref={viewRef}>
            <Promo
              block={blocksWithoutTitle[0]}
              onClick={handleClickTracking}
            />
          </PromoWrapper>
        )}
        {experimentVariant === 'none' && !isSingleItem && (
          <PromoList
            blocks={blocksWithoutTitle}
            viewTracker={viewRef}
            onClick={handleClickTracking}
          />
        )}
      </GridItemMediumNoMargin>
    </ScrollablePromoContainer>
  );
};

export default ScrollablePromo;
