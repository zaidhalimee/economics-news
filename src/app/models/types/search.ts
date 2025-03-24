export type SearchResultBlock = {
  wordMatchCount: number;
  totalMatchValue: number;
  url: string;
  thumbnail: string;
  headline: string;
};

export type YearResult = Record<string, SearchResultBlock[]>;

export type SearchResults = Record<string, YearResult>;

export type SearchPageData = {
  metadata: { type: 'searchResult' };
  results: SearchResults;
  title: string;
};
