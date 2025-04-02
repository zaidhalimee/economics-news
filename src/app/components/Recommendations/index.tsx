/** @jsx jsx */
import { useContext } from 'react';
import { jsx, useTheme } from '@emotion/react';

import SectionLabel from '#psammead/psammead-section-label/src';
import SkipLinkWrapper from '#components/SkipLinkWrapper';
import useToggle from '#hooks/useToggle';

import { ServiceContext } from '#contexts/ServiceContext';
// import RecommendationsPromoList from './RecommendationsPromoList';
// import RecommendationsPromo from './RecommendationsPromo';
import styles from './index.styles';

const Recommendations = ({ data }: { data: any[] }) => {
  const { recommendations, translations, script, service, dir } =
    useContext(ServiceContext);
  const { enabled } = useToggle('cpsRecommendations');

  const {
    palette: { GREY_2 },
  } = useTheme();

  const labelId = 'recommendations-heading';
  const a11yAttributes = {
    as: 'section',
    role: 'region',
    'aria-labelledby': labelId,
  };

  const { hasStoryRecommendations } = recommendations || {};
  console.log(data);
  if (!hasStoryRecommendations || !enabled || !data.length) return null;

  const title = translations?.recommendationTitle ?? 'Recommended stories';

  const {
    skipLink: { text, endTextVisuallyHidden },
  } = recommendations || { skipLink };

  const terms = { '%title%': title };

  const isSinglePromo = data.length === 1;

  const endTextId = `end-of-recommendations`;

  const skipLink = {
    endTextId,
    terms,
    text,
    endTextVisuallyHidden,
  };

  return (
    <div
      css={styles.recommendationsWrapper}
      data-e2e={labelId}
      {...a11yAttributes}
    >
      <SkipLinkWrapper service={service} {...skipLink}>
        {title ? (
          <SectionLabel
            css={styles.labelComponent}
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
          </SectionLabel>
        ) : null}
        {/* {isSinglePromo ? (
              <RecommendationsPromo promo={data[0]} />
            ) : (
              <RecommendationsPromoList promoItems={data} />
            )} */}
      </SkipLinkWrapper>
    </div>
  );
};

export default Recommendations;
