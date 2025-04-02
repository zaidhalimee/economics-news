/** @jsx jsx */
import { useContext } from 'react';
import { jsx, useTheme } from '@emotion/react';

import SectionLabel from '#psammead/psammead-section-label/src';
import SkipLinkWrapper from '#components/SkipLinkWrapper';

import { ServiceContext } from '#contexts/ServiceContext';
import RecommendationsPromo from './RecommendationsPromo';
import styles from './index.styles';
import { Recommendation } from './types';

const Recommendations = ({ data }: { data: Recommendation[] }) => {
  const { recommendations, translations, script, service, dir } =
    useContext(ServiceContext);

  const {
    palette: { GREY_2 },
  } = useTheme();

  const labelId = 'recommendations-heading';
  const a11yAttributes = {
    role: 'region',
    'aria-labelledby': labelId,
  };

  const { hasStoryRecommendations, skipLink } = recommendations || {};

  const { text, endTextVisuallyHidden } = skipLink || {};

  if (!hasStoryRecommendations || !data.length) return null;

  const title = translations?.recommendationTitle ?? 'Recommended stories';

  const terms = { '%title%': title };

  const isSinglePromo = data?.length === 1;

  const endTextId = `end-of-recommendations`;

  const skipLinkProps = {
    endTextId,
    terms,
    text,
    endTextVisuallyHidden,
  };

  return (
    <section
      css={styles.recommendationsWrapper}
      data-e2e={labelId}
      {...a11yAttributes}
    >
      <SkipLinkWrapper service={service} {...skipLinkProps}>
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
        {isSinglePromo ? (
          <RecommendationsPromo recommendation={data?.[0]} />
        ) : (
          <ul css={styles.recommendationsList} role="list">
            {data?.map(recommendation => (
              <li key={recommendation.title} role="listitem">
                <RecommendationsPromo recommendation={recommendation} />
              </li>
            ))}
          </ul>
        )}
      </SkipLinkWrapper>
    </section>
  );
};

export default Recommendations;
