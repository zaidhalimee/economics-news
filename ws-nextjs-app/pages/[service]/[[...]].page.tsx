import React from 'react';
import { GetServerSideProps } from 'next';
import logResponseTime from '#server/utilities/logResponseTime';
import isLitePath from '#app/routes/utils/isLitePath';
import extractHeaders from '#server/utilities/extractHeaders';
// AV Embeds
import { AV_EMBEDS, ARTICLE_PAGE } from '#app/routes/utils/pageTypes';
import {
  isOptimoIdCheck,
  isCpsIdCheck,
} from '#app/routes/utils/constructPageFetchUrl';
import { PageTypes } from '#app/models/types/global';
import ArticlePage from '#app/pages/ArticlePage/ArticlePage';
import AvEmbedsPageLayout from './av-embeds/AvEmbedsPageLayout';
import handleAvRoute from './av-embeds/handleAvRoute';
import { AvEmbedsPageProps } from './av-embeds/types';
import handleArticleRoute from './article/handleArticleRoute';
import { ArticlePageProps } from './article/types';

type PageProps = {
  pageType?: PageTypes;
} & AvEmbedsPageProps &
  ArticlePageProps;

export default function Page({ pageType, ...rest }: PageProps) {
  switch (pageType) {
    case AV_EMBEDS:
      return <AvEmbedsPageLayout {...rest} />;
    case ARTICLE_PAGE:
      return <ArticlePage {...rest} />;
    default:
      // Return nothing, 404 is handled in _app.tsx
      return null;
  }
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    resolvedUrl,
    query: { service, variant },
    req: { headers: reqHeaders },
  } = context;

  // Route to AV Embeds
  if (resolvedUrl?.includes('av-embeds')) {
    return handleAvRoute(context);
  }

  // Route to Articles (Optimo + CPS)
  if (isOptimoIdCheck(resolvedUrl) || isCpsIdCheck(resolvedUrl)) {
    return handleArticleRoute(context);
  }

  const isLite = isLitePath(resolvedUrl);

  logResponseTime(
    {
      path: context.resolvedUrl,
    },
    context.res,
    () => null,
  );

  context.res.statusCode = 404;

  return {
    props: {
      isLite,
      isNextJs: true,
      service,
      status: 404,
      timeOnServer: Date.now(), // TODO: check if needed? See https://github.com/bbc/simorgh/pull/10857/files#r1200274478
      variant: variant?.[0] || null,
      ...extractHeaders(reqHeaders),
    },
  };
};
