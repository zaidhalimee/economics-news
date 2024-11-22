import React from 'react';
import pidginArticleFixtureWithJumpToBlock from './fixtureData';
import JumpTo, { JumpToProps } from '.';
import metadata from './metadata.json';
import readme from './README.md';

const Component = ({
  jumpToHeadings = [],
  showRelatedContentLink = false,
}: JumpToProps) => {
  return (
    <JumpTo
      jumpToHeadings={jumpToHeadings}
      showRelatedContentLink={showRelatedContentLink}
    />
  );
};

const jumpToBlock =
  pidginArticleFixtureWithJumpToBlock.data.article.content.model.blocks.find(
    block => block.type === 'jumpTo',
  );

const jumpToHeadings = jumpToBlock?.model.jumpToHeadings ?? [];

export default {
  title: 'Components/JumpTo',
  Component,
  parameters: {
    docs: { readme },
    metadata,
  },
};

export const ExampleWithRelatedContentLink = () => {
  return <Component jumpToHeadings={jumpToHeadings} showRelatedContentLink />;
};

export const Example = () => {
  return <Component jumpToHeadings={jumpToHeadings} />;
};
