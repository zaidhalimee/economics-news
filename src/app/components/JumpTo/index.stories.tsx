import React from 'react';

import JumpTo, { JumpToProps } from '.';
import { StoryArgs } from '../../models/types/storybook';
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
export const Example = (_: StoryArgs) => {
  const jumpToHeadings = [
    {
      heading: 'This is a subheading - 1',
    },
    {
      heading: 'This is a subheading - 2',
    },
    {
      heading: 'This is a subheading - 3',
    },
    {
      heading: 'This is a subheading - 4',
    },
  ];

  return <Component jumpToHeadings={jumpToHeadings} />;
};
