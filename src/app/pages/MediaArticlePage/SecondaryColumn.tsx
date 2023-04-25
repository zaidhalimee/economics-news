/** @jsxRuntime classic */
/** @jsx jsx */
import path from 'ramda/src/path';
import { jsx } from '@emotion/react';
import { articleDataPropTypes } from '#app/models/propTypes/article';
import LatestMediaSection from './PagePromoSections/LatestMediaSection';
import styles from './MediaArticlePage.styles';
import { LatestMedia } from './PagePromoSections/LatestMediaSection/types';

type MediaArticlePageProps = {
  pageData: typeof articleDataPropTypes;
};

const SecondaryColumn = ({ pageData }: MediaArticlePageProps) => {
  const latestMediaContent = path<LatestMedia[]>(
    ['secondaryColumn', 'latestMedia'],
    pageData,
  );
  if (!latestMediaContent) return null;

  return (
    <div css={styles.secondaryColumn}>
      {latestMediaContent && (
        <div data-testid="latest-media" css={styles.responsiveComponentWrapper}>
          <LatestMediaSection content={latestMediaContent} />
        </div>
      )}
    </div>
  );
};

export default SecondaryColumn;
