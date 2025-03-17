import { searchPageResultsDataPath } from '#app/routes/utils/regex';
import { SEARCH_RESULTS } from '#app/routes/utils/pageTypes';
import SearchResultsPage from '#app/pages/SearchResultsPage';

export default {
  path: [searchPageResultsDataPath],
  exact: true,
  component: SearchResultsPage,
  getInitialData: () => ({
    status: 200,
    pageData: {
      metadata: { type: 'searchResult' },
    },
  }),
  pageType: SEARCH_RESULTS,
};
