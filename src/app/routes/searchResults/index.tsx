import { searchPageResultsPath } from '#app/routes/utils/regex';
import { SEARCH_RESULTS } from '#app/routes/utils/pageTypes';
import SearchResultsPage from '#app/pages/SearchResultsPage';
import { SearchResults } from '#app/models/types/search';

export default {
  path: [searchPageResultsPath],
  exact: true,
  component: SearchResultsPage,
  getInitialData: ({
    results,
    decodedInput,
  }: {
    results: SearchResults;
    decodedInput: string;
  }) => ({
    status: 200,
    pageData: {
      metadata: { type: 'searchResult' },
      results,
      title: decodedInput,
    },
  }),
  pageType: SEARCH_RESULTS,
};
