/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React from 'react';
import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import {
  SearchPageData,
  SearchResultBlock,
  YearResult,
} from '#app/models/types/search';
import styles from './index.styles';
import Heading from '#app/components/Heading';
import InlineLink from '#app/components/InlineLink';
import Image from '#app/components/Image';

const monthMap: Record<string, string> = {
  '0': 'January',
  '1': 'February',
  '2': 'March',
  '3': 'April',
  '4': 'May',
  '5': 'June',
  '6': 'July',
  '7': 'August',
  '8': 'September',
  '9': 'October',
  '10': 'November',
  '11': 'December',
};

const Month = ({
  month,
  results,
}: {
  month: string;
  results: SearchResultBlock[];
}) => {
  const { wordMatchCount, totalMatchValue, thumbnail, url, headline } =
    results[0];

  return (
    <div>
      <Heading level={4}>{monthMap[month]}</Heading>
      <InlineLink text={headline} to={url} />
      <Text>
        Est. Rel: {wordMatchCount} - {totalMatchValue}
      </Text>
      <Image
        alt={''}
        src={`https://ichef.bbci.co.uk/ace/ws/660/cpsprodpb/${thumbnail}`}
      />
    </div>
  );
};

const Year = ({ year, results }: { year: string; results: YearResult }) => {
  const months = Object.keys(results);
  return (
    <div>
      <Heading level={3}>{year}</Heading>
      {months.map(month => (
        <Month month={month} results={results[month]} />
      ))}
    </div>
  );
};

const SearchResultsPage = ({
  pageData: { results, title },
}: {
  pageData: SearchPageData;
}) => {
  const years = Object.keys(results);

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <main css={styles.main} role="main">
        <Heading level={1}>Search 📖</Heading>
        <Heading level={2}>{title}</Heading>
        <div>
          {years.map(year => (
            <Year year={year} results={results[year]} />
          ))}
        </div>
      </main>
    </>
  );
};

export default SearchResultsPage;
