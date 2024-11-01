import React from 'react';

import JumpTo from '.';
import { StoryArgs } from '../../models/types/storybook';
import metadata from './metadata.json';
import readme from './README.md';

interface Props {
  headings?: { id: string; title: string }[];
}

// can we simplify...?
const Component = ({ headings = [] }: Props) => {
  const jumpToData = {
    model: {
      blocks: headings.map(heading => ({
        id: heading.id,
        type: 'heading',
        model: {
          blocks: [
            {
              type: 'paragraph',
              model: {
                blocks: [
                  {
                    type: 'fragment',
                    model: {
                      text: heading.title,
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
    headings = [
      { id: 'heading-1', title: 'This is an article heading title - 1' },
      { id: 'heading-2', title: 'This is an article heading title - 2' },
      { id: 'heading-3', title: 'This is an article heading title - 3' },
    ],
  } = globalArgs;

  return <Component headings={headings} />;
};
