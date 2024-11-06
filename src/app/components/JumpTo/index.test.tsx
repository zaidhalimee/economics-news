import React from 'react';
import { render, screen } from '../react-testing-library-with-providers';
import JumpTo, { JumpToProps } from './index';
import pidginArticleFixtureWithJumpToBlock from './fixtureData';

describe('JumpTo Component', () => {
  const jumpToBlock =
    pidginArticleFixtureWithJumpToBlock.data.article.content.model.blocks.find(
      block => block.type === 'jumpTo',
    );

  const jumpToHeadings = jumpToBlock?.model.jumpToHeadings ?? [];

  const defaultProps: JumpToProps = {
    jumpToHeadings,
    eventTrackingData: {
      componentName: 'jumpto',
    },
  };

  test('renders the Jump To title', () => {
    render(<JumpTo {...defaultProps} />);
    const title = screen.getByText('Jump to');
    expect(title).toBeInTheDocument();
  });

  test('renders the correct number of headings', () => {
    render(<JumpTo {...defaultProps} />);
    const headings = screen.getAllByRole('listitem');
    expect(headings.length).toBe(jumpToHeadings.length);
  });
});
