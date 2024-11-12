import React from 'react';
import idSanitiser from '#app/lib/utilities/idSanitiser';
import {
  render,
  screen,
  fireEvent,
} from '../react-testing-library-with-providers';
import JumpTo from './index';
import pidginArticleFixtureWithJumpToBlock from './fixtureData';
import * as viewTracking from '../../hooks/useViewTracker';
import * as clickTracking from '../../hooks/useClickTrackerHandler';

describe('JumpTo Component', () => {
  const jumpToBlock =
    pidginArticleFixtureWithJumpToBlock.data.article.content.model.blocks.find(
      block => block.type === 'jumpTo',
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const jumpToHeadings = jumpToBlock?.model.jumpToHeadings ?? [];

  jumpToHeadings.push({ heading: 'Related Content' });

  describe('Render jumpTo', () => {
    it('renders the Jump To title', () => {
      render(<JumpTo jumpToHeadings={jumpToHeadings} />);
      const title = screen.getByText('Jump to');
      expect(title).toBeInTheDocument();
    });

    it('renders the correct number of headings', () => {
      render(<JumpTo jumpToHeadings={jumpToHeadings} />);
      const headings = screen.getAllByRole('listitem');
      expect(headings.length).toBe(jumpToHeadings.length);
    });

    it('renders each item with a link to the corresponding subheading on the same page', () => {
      render(<JumpTo jumpToHeadings={jumpToHeadings} />);
      jumpToHeadings.forEach(({ heading }) => {
        const sanitisedId =
          heading === 'Related content'
            ? 'related-content-heading'
            : idSanitiser(heading);
        const link = screen.getByTestId(`jump-to-link-${sanitisedId}`);
        const expectedHref = `#${sanitisedId}`;
        expect(link).toHaveAttribute('href', expectedHref);
      });
    });

    it('does not render the Related content link when it is not included in the jumpToHeadings array', () => {
      // Remove the Related Content link from the jumpToHeadings array for the case where it isn't on a page
      const filteredJumpToHeadings = jumpToHeadings.slice(0, -1);
      render(<JumpTo jumpToHeadings={filteredJumpToHeadings} />);
      const relatedContentLink = screen.queryByTestId(
        'jump-to-link-related-content-heading',
      );
      expect(relatedContentLink).not.toBeInTheDocument();
    });
  });

  describe('Event Tracking', () => {
    const jumpToTrackerData = {
      componentName: 'jumpto',
    };
    describe('View tracking', () => {
      const viewTrackerSpy = jest.spyOn(viewTracking, 'default');
      // jumpToTrackerData is always present on render
      it('should register view tracker with componentName "jumpto"', () => {
        render(<JumpTo jumpToHeadings={jumpToHeadings} />);

        expect(viewTrackerSpy).toHaveBeenCalledWith(jumpToTrackerData);
      });
    });

    describe('Click tracking', () => {
      const clickTrackerSpy = jest
        .spyOn(clickTracking, 'default')
        .mockImplementation();

      it('should register click tracker with componentName "jumpto"', () => {
        render(<JumpTo jumpToHeadings={jumpToHeadings} />);

        expect(clickTrackerSpy).toHaveBeenCalledWith(jumpToTrackerData);
      });
      it('should handle a click event when link clicked', () => {
        clickTrackerSpy.mockRestore();

        render(<JumpTo jumpToHeadings={jumpToHeadings} />);

        jumpToHeadings.forEach(({ heading }) => {
          const sanitisedId = idSanitiser(heading);
          const link = screen.getByTestId(`jump-to-link-${sanitisedId}`);

          fireEvent.click(link);
          expect(link.onclick).toBeTruthy();
        });
      });
    });
  });
});
