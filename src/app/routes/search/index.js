import { SearchPage } from '#pages';
import { searchPagePath } from '#app/routes/utils/regex';
import { SEARCH } from '#app/routes/utils/pageTypes';

export default {
  path: [searchPagePath],
  exact: true,
  component: SearchPage,
  getInitialData: () => ({
    status: 200,
    pageData: {
      metadata: { type: 'search' },
    },
  }),
  pageType: SEARCH,
};
