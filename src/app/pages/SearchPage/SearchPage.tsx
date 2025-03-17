/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React from 'react';
import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import styles from './index.styles';

const SearchPage = () => {
  const forId = 'search_input';

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <form css={styles.container} action="/news/search/results/" method="get">
        <Text as="label" htmlFor={forId}>
          What is your query?
        </Text>
        <input type="text" id={forId} name="search_query" />
        <button type="submit">🔎</button>
      </form>
    </>
  );
};

export default SearchPage;
