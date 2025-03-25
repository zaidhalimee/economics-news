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
    <div css={styles.month}>
      <div css={styles.details}>
        <Text css={styles.link}>{monthMap[month]}</Text>
        <Text css={styles.link}>
          <a href={url}>{headline}</a>
        </Text>
        <Text>
          Est. Rel: {wordMatchCount} - {totalMatchValue}
        </Text>
      </div>
      <div>
        <Image
          css={styles.image}
          alt={''}
          src={`https://ichef.bbci.co.uk/ace/ws/660/cpsprodpb/${thumbnail}`}
        />
      </div>
    </div>
  );
};

const Year = ({ year, results }: { year: string; results: YearResult }) => {
  const months = Object.keys(results);
  return (
    <div css={styles.year}>
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
