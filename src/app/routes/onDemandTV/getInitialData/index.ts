import fetchDataFromBFF from '#app/routes/utils/fetchDataFromBFF';
import { InitialDataProps } from '#app/models/types/initialData';
import handleError from '#app/routes/utils/handleError';
import { BFF_FETCH_ERROR } from '#app/lib/logger.const';
import nodeLogger from '#app/lib/logger.node';
import { FetchError } from '#app/models/types/fetch';
import { TV_PAGE } from '#app/routes/utils/pageTypes';
import isTest from '#app/lib/utilities/isTest';
import overrideRendererOnTest from '#app/routes/utils/overrideRendererOnTest';
import arabicLiveTV from '#data/arabic/bbc_arabic_tv/livetv.json';
import persianLiveTV from '#data/persian/bbc_persian_tv/livetv.json';
import { Services } from '#app/models/types/global';

const logger = nodeLogger(__filename);

const liveTVMappings: Record<
  Extract<Services, 'arabic' | 'persian'>,
  object
> = {
  arabic: arabicLiveTV,
  persian: persianLiveTV,
};

export default async ({
  service,
  variant,
  path: pathname,
  getAgent,
  toggles,
}: InitialDataProps) => {
  try {
    let status;
    let json;

    // @ts-expect-error only arabic & persian TV supported
    const liveTVData = liveTVMappings[service];
    if (pathname.includes('/livetv') && liveTVData) {
      status = 200;
      json = liveTVData;
    } else {
      ({ status, json } = await fetchDataFromBFF({
        pathname: isTest() ? overrideRendererOnTest(pathname) : pathname,
        service,
        variant,
        pageType: TV_PAGE,
        getAgent,
      }));
    }

    if (!json?.data) {
      throw handleError('On Demand TV data is malformed', 500);
    }

    const data = json?.data;

    const maxRecentEpisodes =
      // @ts-expect-error recentVideoEpisodes does exist on the toggles object
      toggles?.recentVideoEpisodes?.enabled
        ? // @ts-expect-error recentVideoEpisodes does exist on the toggles object
          toggles?.recentVideoEpisodes?.value || 4
        : 0;

    const recentEpisodes =
      maxRecentEpisodes > 0
        ? data.recentEpisodes.slice(0, maxRecentEpisodes)
        : null;

    return {
      status,
      pageData: {
        ...data,
        recentEpisodes,
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
