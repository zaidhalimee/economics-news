/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Paragraph from '../../../../src/app/components/Paragraph';
import applyBasicPageHandlers from '../../../../src/app/pages/utils/applyBasicPageHandlers';
import { Services } from '../../../../src/app/models/types/global';
import bffFetch from '../../../../src/app/routes/article/getInitialData/bffFetch';
import getAgent from '../../../../src/server/utilities/getAgent';

import styles from './styles';

const getPageData = async (service: Services, id: string) => {
  const data = await bffFetch({
    service,
    path: `live/${id}?renderer_env=live`,
    getAgent,
  });

  return data;
};

type ComponentProps = {
  pageData: {
    metadata: any;
  };
  service: Services;
  status: number;
};

const LivePage = ({ pageData, status, service }: ComponentProps) => {
  const Component = applyBasicPageHandlers({ addVariantHandling: true })(() => (
    <main css={styles.wrapper}>
      <Paragraph>{JSON.stringify(pageData.metadata, null, 4)}</Paragraph>
    </main>
  ));
  return <Component service={service} pageData={pageData} status={status} />;
};

export default LivePage;

interface PageParams extends ParsedUrlQuery {
  service: Services;
  id: string;
}

export const getStaticProps: GetStaticProps = async context => {
  const { service, id } = context.params as PageParams;
  const response = await getPageData(service, id);

  return {
    props: {
      status: response.status,
      pageData: response?.pageData || null,
      service,
    },
    revalidate: 60,
  };
};

// TODO: revisit https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
