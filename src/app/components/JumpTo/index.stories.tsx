import React from 'react';

import JumpTo, { JumpToProps } from '.';
import metadata from './metadata.json';
import readme from './README.md';

const Component = ({ jumpToHeadings = [] }: JumpToProps) => {
  return <JumpTo jumpToHeadings={jumpToHeadings} />;
};

export default {
  title: 'Components/JumpTo',
  Component,
  parameters: {
    docs: { readme },
    metadata,
  },
};

// wip sample story - should use a fixture here instead probably for the titles
export const Example = () => {
  const jumpToHeadings = [
    {
      heading: 'This is a subheading - a',
    },
    {
      heading: 'This is a subheading - b',
    },
    {
      heading: 'This is a subheading - c',
    },
    {
      heading: 'This is a subheading - d',
    },
  ];

  return <Component jumpToHeadings={jumpToHeadings} />;
};
