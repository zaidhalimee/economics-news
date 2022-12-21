/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useContext } from 'react';
import { jsx } from '@emotion/react';
import Heading from '../../../../../src/app/components/Heading';
import MetadataContainer from '../../../../../src/app/legacy/containers/Metadata';
import LinkedDataContainer from '../../../../../src/app/legacy/containers/LinkedData';
import { ServiceContext } from '../../../../../src/app/contexts/ServiceContext';
import { Services, Variants } from '../../../../../src/app/models/types/global';
import Pagination from '../../../../../src/app/pages/TopicPage/Pagination';

import styles from './styles';

type ComponentProps = {
  pageData: {
    pageCount: number;
    activePage: number;
  };
  service: Services;
  showAdsBasedOnLocation: boolean;
  variant?: Variants;
};

const LivePage = ({
  pageData,
  service,
  showAdsBasedOnLocation,
  variant,
}: ComponentProps) => {
  const { lang } = useContext(ServiceContext);
  const { pageCount, activePage } = pageData;

  return (
    <>
      <MetadataContainer
        title="Test Live Page"
        lang={lang}
        description="A test Live Page using Next.JS"
        openGraphType="website"
        hasAmpPage={false}
      />
      <LinkedDataContainer type="CollectionPage" seoTitle="Test Live Page" />
      <main css={styles.wrapper}>
        <Heading level={1}>Test Next.JS Page</Heading>
        <pre css={styles.code}>
          <ul>
            <li>Service: {service}</li>
            {variant && <li>Variant: {variant}</li>}
            <li>Show Ads: {showAdsBasedOnLocation ? `✅` : `⛔️`}</li>
          </ul>
        </pre>
        <pre css={styles.code}>{JSON.stringify(pageData, null, 2)}</pre>
        <Pagination
          activePage={activePage}
          pageCount={pageCount}
          pageXOfY="Page {x} of {y}"
          previousPage="Previous Page"
          nextPage="Next Page"
          page="Page"
        />
      </main>
    </>
  );
};

export default LivePage;
