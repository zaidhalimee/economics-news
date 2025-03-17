/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React from 'react';
import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import styles from './index.styles';

const SearchResultsPage = () => {

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <section>
        <Text as='h1'>YOUR RESULTS</Text>
      </section>
    </>
  );
};

export default SearchResultsPage;
