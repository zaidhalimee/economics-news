import React from 'react';
import EasyReadCTA from '.';

export const Component = () => (
  <EasyReadCTA easyVersionLink="https://www.test.bbc.com/news/articles/c0g992jmmkko" />
);

export const EasyComponent = () => (
  <EasyReadCTA fullVersionLink="https://www.test.bbc.com/news/articles/c0g992jmmkko" />
);

export default {
  title: 'Components/EasyReadCTAVersion2',
  Component,
};
