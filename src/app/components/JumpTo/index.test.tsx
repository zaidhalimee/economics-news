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

  it('renders the Jump To title', () => {
    render(<JumpTo {...defaultProps} />);
    const title = screen.getByText('Jump to');
    expect(title).toBeInTheDocument();
  });

  it('renders the correct number of headings', () => {
    render(<JumpTo {...defaultProps} />);
    const headings = screen.getAllByRole('listitem');
    expect(headings.length).toBe(jumpToHeadings.length);
  });

  it('renders each item with a link to the subheading on the same page', () => {
    render(<JumpTo {...defaultProps} />);
    const listItems = screen.getAllByRole('listitem');
    listItems.forEach((item, index) => {
      const link = item.querySelector('a');
      const expectedHref = `#${jumpToHeadings[index].heading.replace(/\s+/g, '-').replace(/'/g, '')}`;
      expect(link).toHaveAttribute('href', expectedHref);
    });
  });
});
