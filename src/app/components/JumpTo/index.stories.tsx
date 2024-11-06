import React from 'react';
import pidginArticleFixtureWithJumpToBlock from '../../../../data/pidgin/articles/cn03je8kwpko.json';
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

export const Example = () => {
  const jumpToHeadings =
    pidginArticleFixtureWithJumpToBlock.data.article.content.model.blocks.find(
      block => block.type === 'jumpTo',
    )?.model.jumpToHeadings;

  return <Component jumpToHeadings={jumpToHeadings} />;
};
