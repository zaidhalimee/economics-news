import React from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import logResponseTime from '#server/utilities/logResponseTime';
import isLitePath from '#app/routes/utils/isLitePath';
import extractHeaders from '#server/utilities/extractHeaders';
// AV Embeds
import {
  AV_EMBEDS,
  ARTICLE_PAGE,
  MEDIA_ARTICLE_PAGE,
  STORY_PAGE,
  CORRESPONDENT_STORY_PAGE,
  MEDIA_ASSET_PAGE,
  PHOTO_GALLERY_PAGE,
} from '#app/routes/utils/pageTypes';
import {
  isOptimoIdCheck,
  isCpsIdCheck,
} from '#app/routes/utils/constructPageFetchUrl';
import { PageTypes } from '#app/models/types/global';
import handleAvRoute from './av-embeds/handleAvRoute';
import { AvEmbedsPageProps } from './av-embeds/types';
import handleArticleRoute from './articles/handleArticleRoute';
import { ArticlePageProps } from './articles/types';

// Dynamic imports of page layouts
const AvEmbedsPageLayout = dynamic(
  () => import('./av-embeds/AvEmbedsPageLayout'),
);
const ArticlePage = dynamic(
  () => import('#app/pages/ArticlePage/ArticlePage'),
  {
    ssr: false,
  },
);
const MediaArticlePage = dynamic(
  () => import('#app/pages/MediaArticlePage/MediaArticlePage'),
  {
    ssr: false,
  },
);

type PageProps = {
  pageType?: PageTypes;
} & AvEmbedsPageProps &
  ArticlePageProps;

export default function Page({ pageType, ...rest }: PageProps) {
  switch (pageType) {
    // AV Embeds
    case AV_EMBEDS:
      return <AvEmbedsPageLayout {...rest} />;
    // Article Pages (Optimo + CPS)
    case STORY_PAGE:
    case CORRESPONDENT_STORY_PAGE:
    case PHOTO_GALLERY_PAGE:
    case ARTICLE_PAGE:
      return <ArticlePage {...rest} />;
    // Media Article Pages (Optimo + CPS)
    case MEDIA_ASSET_PAGE:
    case MEDIA_ARTICLE_PAGE:
      return <MediaArticlePage {...rest} />;
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
