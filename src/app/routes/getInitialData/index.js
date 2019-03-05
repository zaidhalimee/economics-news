import 'isomorphic-fetch';
import Logger from '@bbc/spartacus/logger';
import getBaseUrl from './getBaseUrl';

const logger = Logger(__filename);

const upstreamStatusCodesToPropagate = [200, 404];

const getInitialData = async ({ match }) => {
  const { id, service, amp } = match.params;
  const isAmp = !!amp;

  let data;
  let status;
  let baseUrl = process.env.SPARTACUS_BASE_URL;

  if (
    typeof window !== 'undefined' &&
    window.location &&
    window.location.origin
  ) {
    baseUrl = getBaseUrl(window.location.origin);
  }

  const url = `${baseUrl}/${service}/articles/${id}.json`;

  try {
    const response = await fetch(url);

    status = response.status; // eslint-disable-line prefer-destructuring

    if (status === 200) {
      data = await response.json();
    } else if (!upstreamStatusCodesToPropagate.includes(status)) {
      logger.warn(
        `Unexpected upstream response (HTTP status code ${status}) when requesting ${url}`,
      );
      status = 502;
    }
  } catch (error) {
    logger.error(error);
    status = 502;
  }

  return {
    isAmp,
    data,
    service,
    status,
  };
};

export default getInitialData;
