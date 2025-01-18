import { GetServerSidePropsContext } from 'next';
import extractHeaders from '#server/utilities/extractHeaders';
import {
  ARTICLE_PAGE,
  MEDIA_ARTICLE_PAGE,
  FEATURE_INDEX_PAGE,
} from '#app/routes/utils/pageTypes';
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
import { PageTypes, Toggles } from '#app/models/types/global';
import addAnalyticsCounterName from '#app/routes/article/utils/addAnalyticsCounterName';
import augmentWithDisclaimer from '#app/routes/article/utils/augmentWithDisclaimer';
import shouldRender from '#app/legacy/containers/PageHandlers/withData/shouldRender';
import { Article, ArticleMetadata } from '#app/models/types/optimo';
import getPageData from '../../../utilities/pageRequests/getPageData';

const logger = nodeLogger(__filename);

type Fn = (pageData: Article) => Article;

const pipe =
  (...fns: Fn[]) =>
  (x: Article) =>
    fns.reduce((result, nextFn) => nextFn(result), x);

const transformPageData = (toggles?: Toggles) =>
  pipe(
    addAnalyticsCounterName,
    augmentWithDisclaimer({ toggles, positionFromTimestamp: 0 }),
  );

const getDerivedPageType = (metadata: ArticleMetadata) => {
  let pageType: PageTypes = metadata?.type;

  if (metadata?.type === 'article' && metadata?.consumableAsSFV) {
    pageType = MEDIA_ARTICLE_PAGE;
  }

  if (metadata?.type === 'FIX') {
    pageType = FEATURE_INDEX_PAGE;
  }

  return pageType;
};

export default async (context: GetServerSidePropsContext) => {
  const {
    resolvedUrl,
    req: { headers: reqHeaders },
  } = context;

  const { service, renderer_env: rendererEnv } =
    context.query as PageDataParams;

  context.res.setHeader(
    'Cache-Control',
    'public, stale-if-error=90, stale-while-revalidate=30, max-age=30',
  );

  const urlWithoutQuery = resolvedUrl.split('?')?.[0];

  const isAmp = isAmpPath(urlWithoutQuery);
  const isApp = isAppPath(urlWithoutQuery);
  const isLite = isLitePath(urlWithoutQuery);
  const { variant } = parseAvRoute(resolvedUrl);

  const { data, toggles } = await getPageData({
    id: urlWithoutQuery,
    service,
    variant: variant || undefined,
    rendererEnv,
    resolvedUrl: urlWithoutQuery,
    pageType: ARTICLE_PAGE,
  });

  const { pageData, status } = data;

  context.res.statusCode = status;

  let routingInfoLogger = logger.debug;

  const { hasRequestSucceeded, status: shouldRenderStatus } = shouldRender(
    { pageData, status },
    service,
    urlWithoutQuery,
    ARTICLE_PAGE,
  );

  // If request has fails or should not be rendered, return non-200 status
  if (!hasRequestSucceeded && shouldRenderStatus !== OK) {
    routingInfoLogger = logger.error;

    return {
      props: {
        isApp,
        isAmp,
        isLite,
        isNextJs: true,
        service,
        status: shouldRenderStatus,
        timeOnServer: Date.now(),
        variant: variant || null,
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
    status,
    pageType: ARTICLE_PAGE,
  });

  const derivedPageType = getDerivedPageType(article.metadata);

  return {
    props: {
      id: urlWithoutQuery,
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
      pageType: derivedPageType,
      pathname: urlWithoutQuery,
      service,
      status,
      toggles,
      variant: variant || null,
      ...extractHeaders(reqHeaders),
    },
  };
};
