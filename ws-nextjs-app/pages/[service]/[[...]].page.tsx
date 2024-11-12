import React from 'react';
import { GetServerSideProps } from 'next';
import logResponseTime from '#server/utilities/logResponseTime';
import isLitePath from '#app/routes/utils/isLitePath';
import extractHeaders from '#server/utilities/extractHeaders';
// AV Embeds
import { AV_EMBEDS } from '#app/routes/utils/pageTypes';
import { PageTypes } from '#app/models/types/global';
import AvEmbedsPageLayout from './av-embeds/AvEmbedsPageLayout';
import handleAvRoute from './av-embeds/handleAvRoute';
import { AvEmbedsPageProps } from './av-embeds/types';

type PageProps = { pageType?: PageTypes } & AvEmbedsPageProps;

export default function Page({ pageType, ...rest }: PageProps) {
  switch (pageType) {
    case AV_EMBEDS:
      return <AvEmbedsPageLayout {...rest} />;
    default:
      // Return nothing, 404 is handled in _app.tsx
      return null;
  }
}

export const getServerSideProps: GetServerSideProps = async context => {
  const url = context.req.url || context.resolvedUrl;

  const {
    query: { service, variant },
    req: { headers: reqHeaders },
  } = context;

  // Route to AV Embeds
  if (url?.includes('av-embeds')) {
    return handleAvRoute(context);
  }

  const isLite = isLitePath(url);

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
