import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { OFFLINE_PAGE } from '#app/routes/utils/pageTypes';
import logResponseTime from '#server/utilities/logResponseTime';

import PageDataParams from '#app/models/types/pageDataParams';
import getToggles from '#app/lib/utilities/getToggles/withCache';
import extractHeaders from '#server/utilities/extractHeaders';
import dataFetch from './dataFetch';

const offlinePageLayout = dynamic(() => import('./offlinePageLayout'));

const pageTitle = '다운로드 - BBC News 코리아';

const atiData = {
  campaigns: null,
  categoryName: null,
  contentType: OFFLINE_PAGE,
  language: 'ko-KO',
  ldpThingIds: null,
  ldpThingLabels: null,
  pageIdentifier: 'korean.downloads.page',
  pageTitle,
  producerId: '57',
  producerName: 'KOREAN',
};

export const getServerSideProps: GetServerSideProps = async context => {
  logResponseTime(
    {
      path: context.resolvedUrl,
    },
    context.res,
    () => null,
  );
  context.res.setHeader(
    'Cache-Control',
    'public, stale-if-error=600, stale-while-revalidate=240, max-age=60',
  );

  const { service, variant } = context.query as PageDataParams;

  const toggles = await getToggles(service);

  const { headers: reqHeaders } = context.req;

  return {
    props: {
      error: null,
      isAmp: false,
      isNextJs: true,
      pageData: {
        metadata: {
          atiAnalytics: atiData,
          type: OFFLINE_PAGE,
          pageTitle,
        },
      },
      pageType: OFFLINE_PAGE,
      pathname: `${service}/offline`,
      service,
      status: 200,
      timeOnServer: Date.now(), // TODO: check if needed?
      toggles,
      variant: variant?.[0] || null,
      ...extractHeaders(reqHeaders),
    },
  };
};

export default offlinePageLayout;
