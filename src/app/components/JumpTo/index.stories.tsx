import React from 'react';

import JumpTo from '.';
import { StoryArgs } from '../../models/types/storybook';
import metadata from './metadata.json';
import readme from './README.md';

interface Props {
  subheadlines?: { id: string; title: string }[];
}

// can we simplify...?
const Component = ({ subheadlines = [] }: Props) => {
  const jumpToData = {
    model: {
      blocks: subheadlines.map(subheadline => ({
        id: subheadline.id,
        type: 'subheadline',
        model: {
          blocks: [
            {
              type: 'paragraph',
              model: {
                blocks: [
                  {
                    type: 'fragment',
                    model: {
                      text: subheadline.title,
                    },
                  },
                ],
              },
            },
          ],
        },
      })),
    },
  };

  return <JumpTo jumpToData={jumpToData} />;
};

export default {
  title: 'Components/JumpTo',
  Component,
  parameters: {
    docs: { readme },
    metadata,
  },
};

// WIP - should pull titles from fixture
export const Example = (_: StoryArgs, globalArgs: Props) => {
  const {
    subheadlines = [
      {
        id: 'subheadline-1',
        title: 'This is an article subheadline title - 1',
      },
      {
        id: 'subheadline-2',
        title: 'This is an article subheadline title - 2',
      },
      {
        id: 'subheadline-3',
        title: 'This is an article subheadline title - 3',
      },
    ],
  } = globalArgs;

  return <Component subheadlines={subheadlines} />;
};
