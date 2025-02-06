import { InitialDataProps } from '#app/models/types/initialData';
import nodeLogger from '#app/lib/logger.node';
import { BFF_FETCH_ERROR } from '#app/lib/logger.const';
import { FetchError } from '#app/models/types/fetch';
import fetchDataFromBFF from '#app/routes/utils/fetchDataFromBFF';
import { CPS_ASSET, HOME_PAGE } from '#app/routes/utils/pageTypes';
import transformCPSAssetToHomepage from './transformCPSAssetToHomepage';

const logger = nodeLogger(__filename);

export default async ({
  service,
  path: pathname,
  pageType,
  variant,
  getAgent,
}: InitialDataProps) => {
  try {
    const isUKChina = service === 'ukchina';

    const derivedPageType = isUKChina ? CPS_ASSET : HOME_PAGE;

    let status;
    let json;

    // eslint-disable-next-line prefer-const
    ({ status, json } = await fetchDataFromBFF({
      pathname,
      pageType: derivedPageType,
      service,
      variant,
      getAgent,
    }));

    if (isUKChina) {
      json = transformCPSAssetToHomepage(json?.data);
    }

    const {
      data: { title, description, curations, metadata },
    } = json;

    return {
      status,
      pageData: {
        title,
        metadata: { ...metadata, type: pageType },
        curations,
        description,
      },
    };
  } catch (error: unknown) {
    const { message, status } = error as FetchError;

    logger.error(BFF_FETCH_ERROR, {
      service,
      status,
      pathname,
      message,
    });

    return { error: message, status };
  }
};
