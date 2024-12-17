import { OnDemandTvPage } from '#pages';
import { liveTVPath, onDemandTvPath } from '#app/routes/utils/regex';
import { TV_PAGE } from '#app/routes/utils/pageTypes';
import getInitialData from './getInitialData';

export default {
  path: [onDemandTvPath, liveTVPath],
  exact: true,
  component: OnDemandTvPage,
  getInitialData,
  pageType: TV_PAGE,
};
