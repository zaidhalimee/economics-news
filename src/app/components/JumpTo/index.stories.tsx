import React from 'react';
import pidginArticleFixtureWithJumpToBlock from './fixtureData';
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

  const relatedContentBlock =
    pidginArticleFixtureWithJumpToBlock.data.article.content.model.blocks.find(
      block => block.type === 'relatedContent',
    );
  // This needs to be changed if we add an option for translations in storybook
  if (
    relatedContentBlock &&
    !jumpToHeadings?.some(
      jumpToHeading => jumpToHeading.heading === 'Related content',
    )
  ) {
    jumpToHeadings?.push({
      heading: 'Related content',
    });
  }

  return <Component jumpToHeadings={jumpToHeadings} />;
};
