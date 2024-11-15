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
import certsRequired from '#app/routes/utils/certsRequired';
import getAgent from '#server/utilities/getAgent';
import handleError from '#app/routes/utils/handleError';
import getOnwardsPageData from '#app/routes/article/utils/getOnwardsData';
import pipe from 'ramda/src/pipe';
import { Toggles } from '#app/models/types/global';
import addAnalyticsCounterName from '#app/routes/article/utils/addAnalyticsCounterName';
import augmentWithDisclaimer from '#app/routes/article/utils/augmentWithDisclaimer';
import getPageData from '../../../utilities/pageRequests/getPageData';

const logger = nodeLogger(__filename);

const transformPageData = (toggles?: Toggles) =>
  pipe(
    addAnalyticsCounterName,
    augmentWithDisclaimer({ toggles, positionFromTimestamp: 0 }),
  );

export default async (context: GetServerSidePropsContext) => {
  const {
    resolvedUrl,
    req: { headers: reqHeaders },
  } = context;

  const urlWithoutQuery = resolvedUrl.split('?')?.[0];

  const { service, renderer_env: rendererEnv } =
    context.query as PageDataParams;

  const isAmp = isAmpPath(urlWithoutQuery);
  const isApp = isAppPath(urlWithoutQuery);
  const isLite = isLitePath(urlWithoutQuery);
  const { variant } = parseAvRoute(resolvedUrl);

  context.res.setHeader(
    'Cache-Control',
    'public, stale-if-error=90, stale-while-revalidate=30, max-age=30',
  );

  const { data, toggles } = await getPageData({
    id: urlWithoutQuery,
    service,
    variant: variant || undefined,
    rendererEnv,
    resolvedUrl: urlWithoutQuery,
    pageType: ARTICLE_PAGE,
  });

  context.res.statusCode = data.status;

  let routingInfoLogger = logger.debug;

  if (data.status !== OK) {
    routingInfoLogger = logger.error;

    return {
      props: {
        isApp,
        isAmp,
        isLite,
        isNextJs: true,
        service,
        status: data.status,
        timeOnServer: Date.now(),
        variant: variant?.[0] || null,
        ...extractHeaders(reqHeaders),
      },
    };
  }

  const agent = certsRequired(urlWithoutQuery) ? await getAgent() : null;

  if (!data?.pageData?.article) {
    throw handleError('Article data is malformed', 500);
  }

  const { article, secondaryData } = data?.pageData;

  const isAdvertising = article?.metadata?.allowAdvertising ?? false;
  const isArticleSfv = article?.metadata?.consumableAsSFV ?? false;

  let wsojData = [];
  const lastPublished = article?.metadata?.lastPublished;
  const shouldGetOnwardsPageData = lastPublished
    ? new Date(lastPublished).getFullYear() > new Date().getFullYear() - 2
    : false;
  if (shouldGetOnwardsPageData) {
    try {
      wsojData = await getOnwardsPageData({
        pathname: urlWithoutQuery,
        service,
        variant: variant || undefined,
        isAdvertising,
        isArticleSfv,
        agent,
      });
    } catch (error) {
      logger.error('Recommendations JSON malformed', error);
    }
  }
  const { topStories, features, latestMedia, mostRead } = secondaryData;

  const transformedArticleData = transformPageData(toggles)(article);

  routingInfoLogger(ROUTING_INFORMATION, {
    url: urlWithoutQuery,
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
      pageData: {
        ...transformedArticleData,
        secondaryColumn: {
          topStories: topStories || null,
          features: features || null,
          latestMedia: latestMedia || null,
        },
        mostRead,
        ...(wsojData && wsojData),
      },
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
