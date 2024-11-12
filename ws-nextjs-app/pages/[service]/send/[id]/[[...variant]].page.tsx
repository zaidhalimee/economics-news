import { GetServerSideProps } from 'next';
import PageDataParams from '#models/types/pageDataParams';
import { UGC_PAGE } from '#app/routes/utils/pageTypes';
import isLitePath from '#app/routes/utils/isLitePath';
import isAppPath from '#app/routes/utils/isAppPath';
import getPageData from '../../../../utilities/pageRequests/getPageData';
import UGCPageLayout from './UGCPageLayout';
import extractHeaders from '../../../../../src/server/utilities/extractHeaders';

export const getServerSideProps: GetServerSideProps = async context => {
  const url = context.req.url || context.resolvedUrl;

  context.res.setHeader(
    'Cache-Control',
    'public, stale-if-error=300, stale-while-revalidate=120, max-age=30',
  );

  const { headers: reqHeaders } = context.req;
  const isLite = isLitePath(url);
  const isApp = isAppPath(url);

  const {
    id,
    service,
    variant,
    renderer_env: rendererEnv,
  } = context.query as PageDataParams;

  const { data, toggles } = await getPageData({
    id,
    service,
    variant,
    rendererEnv,
    resolvedUrl: url,
    pageType: UGC_PAGE,
  });

  const { pageData = null, status } = data;

  return {
    props: {
      error: data?.error || null,
      id,
      isApp,
      isLite,
      isAmp: false,
      isNextJs: true,
      pageData: pageData
        ? {
            ...pageData,
            metadata: {
              ...pageData.metadata,
              type: UGC_PAGE,
            },
          }
        : null,
      pageType: UGC_PAGE,
      pathname: url,
      service,
      status: status ?? 500,
      toggles,
      variant: variant?.[0] || null,
      timeOnServer: Date.now(), // TODO: check if needed?
      ...extractHeaders(reqHeaders),
    },
  };
};

export default UGCPageLayout;
