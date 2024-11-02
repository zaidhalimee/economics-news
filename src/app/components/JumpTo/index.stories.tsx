import React from 'react';

import JumpTo from '.';
import { StoryArgs } from '../../models/types/storybook';
import metadata from './metadata.json';
import readme from './README.md';

interface Props {
  subheadlines?: { heading: string }[];
}

const Component = ({ subheadlines = [] }: Props) => {
  const jumpToHeadings = {
    model: {
      jumpToHeadings: subheadlines.map(subheadline => ({
        heading: subheadline.heading,
      })),
    },
  };

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
export const Example = (_: StoryArgs, globalArgs: Props) => {
  const {
    subheadlines = [
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
    ],
  } = globalArgs;

  return <Component subheadlines={subheadlines} />;
};
