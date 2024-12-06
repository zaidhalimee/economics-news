import path from 'ramda/src/path';
import getErrorStatusCode from '../../utils/fetchPageData/utils/getErrorStatusCode';
import { LIVE_RADIO_PAGE } from '../../utils/pageTypes';
import fetchDataFromBFF from '../../utils/fetchDataFromBFF';
import { BFF_FETCH_ERROR } from '../../../lib/logger.const';
import nodeLogger from '../../../lib/logger.node';

const logger = nodeLogger(__filename);
const getScheduleToggle = path(['liveRadioSchedule', 'enabled']);

export default async ({ path: pathname, service, toggles, getAgent }) => {
  try {
    const scheduleIsEnabled = getScheduleToggle(toggles);
    const disableRadioSchedule = !scheduleIsEnabled;

    const {
      status,
      json: { data: pageData },
    } = await fetchDataFromBFF({
      pathname,
      service,
      pageType: LIVE_RADIO_PAGE,
      getAgent,
      disableRadioSchedule,
    });

    return {
      status,
      pageData,
    };
  } catch ({ message, status = getErrorStatusCode() }) {
    logger.error(BFF_FETCH_ERROR, {
      service,
      status,
      pathname,
      message,
    });

    return { error: message, status };
  }
};
