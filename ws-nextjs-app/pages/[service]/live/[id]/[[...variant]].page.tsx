import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import omit from 'ramda/src/omit';
import getToggles from '#app/lib/utilities/getToggles/withCache';
import { LIVE_PAGE } from '#app/routes/utils/pageTypes';
import nodeLogger from '#lib/logger.node';
import logResponseTime from '#server/utilities/logResponseTime';

import {
  ROUTING_INFORMATION,
  SERVER_SIDE_RENDER_REQUEST_RECEIVED,
  BFF_FETCH_ERROR,
} from '#app/lib/logger.const';
import { Services, Variants } from '#models/types/global';
import { FetchError } from '#models/types/fetch';

import fetchDataFromBFF from '#app/routes/utils/fetchDataFromBFF';
import getAgent from '#server/utilities/getAgent';
import { OK } from '#app/lib/statusCodes.const';

import LivePageLayout from './LivePageLayout';
import extractHeaders from '../../../../../src/server/utilities/extractHeaders';
import isValidPageNumber from '../../../../utilities/pageQueryValidator';

interface PageDataParams extends ParsedUrlQuery {
  id: string;
  page?: string;
  service: Services;
  variant?: Variants;
  // eslint-disable-next-line camelcase
  renderer_env?: string;
}

const logger = nodeLogger(__filename);

const getPageData = async ({
  id,
  page,
  service,
  variant,
  rendererEnv,
}: PageDataParams) => {
  const pathname = `${id}${rendererEnv ? `?renderer_env=${rendererEnv}` : ''}`;
  let message;
  let status;
  let json;

  try {
    ({ status, json } = await fetchDataFromBFF({
      pathname,
      pageType: LIVE_PAGE,
      service,
      variant,
      page,
      getAgent,
    }));
  } catch (error: unknown) {
    ({ message, status } = error as FetchError);

    logger.error(BFF_FETCH_ERROR, {
      service,
      status,
      pathname,
      message,
    });
  }

  const data = json
    ? { pageData: json.data, status }
    : { error: message, status };

  const toggles = await getToggles(service);

  return { data, toggles };
};

export const getServerSideProps: GetServerSideProps = async context => {
  logResponseTime(
    {
      path: context.resolvedUrl,
    },
    context.res,
    () => null,
  );

  const {
    id,
    service,
    variant,
    // renderer_env: rendererEnv,
    page = '1',
  } = context.query as PageDataParams;

  const { headers: reqHeaders } = context.req;

  if (!isValidPageNumber(page)) {
    context.res.statusCode = 404;
    return {
      props: {
        bbcOrigin: reqHeaders['bbc-origin'] || null,
        isNextJs: true,
        service,
        status: 404,
        timeOnServer: Date.now(),
        variant: variant?.[0] || null,
        ...extractHeaders(reqHeaders),
      },
    };
  }

  logger.debug(SERVER_SIDE_RENDER_REQUEST_RECEIVED, {
    url: context.resolvedUrl,
    headers: omit(
      (process.env.SENSITIVE_HTTP_HEADERS || '').split(','),
      reqHeaders,
    ),
    pageType: LIVE_PAGE,
  });

  const { data, toggles } = await getPageData({
    id,
    page,
    service,
    variant,
    rendererEnv: 'test', // TODO: remove hardcoding
  });

  let routingInfoLogger = logger.debug;
  if (data.status !== OK) {
    routingInfoLogger = logger.error;
  }

  routingInfoLogger(ROUTING_INFORMATION, {
    url: context.resolvedUrl,
    status: data.status,
    pageType: LIVE_PAGE,
  });

  context.res.statusCode = data.status;
  return {
    props: {
      bbcOrigin: reqHeaders['bbc-origin'] || null,
      error: data?.error || null,
      id,
      isAmp: false,
      isNextJs: true,
      page: page || null,
      pageData: data?.pageData
        ? {
            ...data.pageData,
            metadata: {
              ...data.pageData.metadata,
              type: LIVE_PAGE,
            },
          }
        : null,
      pageType: LIVE_PAGE,
      pathname: context.resolvedUrl,
      service,
      showAdsBasedOnLocation: reqHeaders['bbc-adverts'] === 'true' || false,
      status: data.status,
      timeOnServer: Date.now(), // TODO: check if needed?
      toggles,
      variant: variant?.[0] || null,
      ...extractHeaders(reqHeaders),
    },
  };
};

export default LivePageLayout;
