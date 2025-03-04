import React, { useContext } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '#psammead/gel-foundations/src/breakpoints';
import path from 'ramda/src/path';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '#psammead/gel-foundations/src/spacings';
import SectionLabel from '#psammead/psammead-section-label/src';
import SkipLinkWrapper from '#components/SkipLinkWrapper';
import useToggle from '#hooks/useToggle';
import { GridItemMediumNoMargin } from '#components/Grid';

import { useWsojTitle } from '#app/pages/ArticlePage/recommendationsExperiment';
import useOptimizelyVariation from '#app/hooks/useOptimizelyVariation';
import OPTIMIZELY_CONFIG from '#app/lib/config/optimizely';
import { ServiceContext } from '../../../contexts/ServiceContext';
import RecommendationsPromoList from './RecommendationsPromoList';
import RecommendationsPromo from './RecommendationsPromo';
import ErrorBoundary from './ErrorBoundary';

const RecommendationsWrapper = styled.div`
  background-color: ${props => props.theme.palette.GREY_2};
  margin: ${GEL_SPACING_TRPL} 0;
  padding: ${GEL_SPACING_DBL} ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    margin: 0 0 ${GEL_SPACING_TRPL};
    padding: 0 ${GEL_SPACING_DBL} ${GEL_SPACING_DBL};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    margin: 0 0 ${GEL_SPACING_TRPL};
    padding: ${GEL_SPACING_DBL} 0;
  }
`;

const LabelComponent = styled(SectionLabel)`
  margin: 0;
  padding: 0;
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin: 0 0 ${GEL_SPACING};
  }
`;

const CpsRecommendations = ({ items }) => {
  const { recommendations, script, service, dir } = useContext(ServiceContext);
  const { enabled } = useToggle('cpsRecommendations');

  const OPTIMIZELY_VARIATION = useOptimizelyVariation(
    OPTIMIZELY_CONFIG.flagKey,
  );

  const {
    palette: { GREY_2 },
  } = useTheme();

  const title = useWsojTitle({ variation: OPTIMIZELY_VARIATION });

  const labelId = 'recommendations-heading';
  const a11yAttributes = {
    as: 'section',
    role: 'region',
    'aria-labelledby': labelId,
  };

  const { hasStoryRecommendations } = recommendations;

  if (!hasStoryRecommendations || !enabled || !items.length) return null;

  const { text, endTextVisuallyHidden } = path(['skipLink'], recommendations);

  const terms = { '%title%': title };

  const isSinglePromo = items.length === 1;

  const endTextId = `end-of-recommendations`;

  const skipLink = {
    endTextId,
    terms,
    text,
    endTextVisuallyHidden,
  };

  return (
    <ErrorBoundary recommendations={items}>
      <GridItemMediumNoMargin>
        <RecommendationsWrapper data-e2e={labelId} {...a11yAttributes}>
          <SkipLinkWrapper service={service} {...skipLink}>
            {title ? (
              <LabelComponent
                script={script}
                service={service}
                dir={dir}
                labelId={labelId}
                columnType="main"
                mobileDivider={false}
                overrideHeadingAs="strong"
                bar={false}
                backgroundColor={GREY_2}
              >
                {title}
              </LabelComponent>
            ) : null}
            {isSinglePromo ? (
              <RecommendationsPromo promo={items[0]} />
            ) : (
              <RecommendationsPromoList promoItems={items} />
            )}
          </SkipLinkWrapper>
        </RecommendationsWrapper>
      </GridItemMediumNoMargin>
    </ErrorBoundary>
  );
};

export default CpsRecommendations;
