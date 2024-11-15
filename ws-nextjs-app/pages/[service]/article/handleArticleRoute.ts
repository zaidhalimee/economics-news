import { GetServerSidePropsContext } from 'next';
import extractHeaders from '#server/utilities/extractHeaders';
import { ARTICLE_PAGE } from '#app/routes/utils/pageTypes';
import parseAvRoute from '#app/routes/utils/parseAvRoute';
import nodeLogger from '#lib/logger.node';
import { OK } from '#app/lib/statusCodes.const';
import { ROUTING_INFORMATION } from '#app/lib/logger.const';
import isAppPath from '#app/routes/utils/isAppPath';
import isLitePath from '#app/routes/utils/isLitePath';
import isAmpPath from '#app/routes/utils/isAmpPath';
import PageDataParams from '#app/models/types/pageDataParams';
import getPageData from '../../../utilities/pageRequests/getPageData';

const logger = nodeLogger(__filename);

export default async (context: GetServerSidePropsContext) => {
  const {
    resolvedUrl,
    req: { headers: reqHeaders },
  } = context;

  const { service, renderer_env: rendererEnv } =
    context.query as PageDataParams;

  const isAmp = isAmpPath(context.resolvedUrl);
  const isApp = isAppPath(context.resolvedUrl);
  const isLite = isLitePath(context.resolvedUrl);
  const { variant } = parseAvRoute(resolvedUrl);

  context.res.setHeader(
    'Cache-Control',
    'public, stale-if-error=90, stale-while-revalidate=30, max-age=30',
  );

  const { data, toggles } = await getPageData({
    id: context.resolvedUrl.replace('renderer_env=live', ''),
    service,
    variant: variant || undefined,
    rendererEnv,
    resolvedUrl: context.resolvedUrl,
    pageType: ARTICLE_PAGE,
  });

  context.res.statusCode = data.status;

  let routingInfoLogger = logger.debug;

  if (data.status !== OK) {
    routingInfoLogger = logger.error;
  }

  routingInfoLogger(ROUTING_INFORMATION, {
    url: context.resolvedUrl,
    status: data.status,
    pageType: ARTICLE_PAGE,
  });

  return {
    props: {
      id: resolvedUrl,
      isAmp,
      isApp,
      isLite,
      isNextJs: true,
      pageData: data.pageData.article,
      pageType: ARTICLE_PAGE,
      pathname: resolvedUrl,
      service,
      status: data.status,
      toggles,
      variant: variant || null,
      ...extractHeaders(reqHeaders),
    },
  };
};
