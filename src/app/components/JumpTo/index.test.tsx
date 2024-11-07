import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '../react-testing-library-with-providers';
import JumpTo, { JumpToProps } from './index';
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

  const defaultProps: JumpToProps = {
    jumpToHeadings,
    eventTrackingData: {
      componentName: 'jumpto',
    },
  };

  describe('Render jumpTo', () => {
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

    it('renders each item with a link to the corresponding subheading on the same page', () => {
      render(<JumpTo {...defaultProps} />);
      const listItems = screen.getAllByRole('listitem');
      listItems.forEach((item, index) => {
        const link = item.querySelector('a');
        const expectedHref = `#${jumpToHeadings[index].heading
          .replace(/\s+/g, '-')
          .replace(/'/g, '')}`;
        expect(link).toHaveAttribute('href', expectedHref);
      });
    });
  });

  describe('Event Tracking', () => {
    describe('View tracking', () => {
      const viewTrackerSpy = jest.spyOn(viewTracking, 'default');

      it('should not enable view tracking if event tracking data is not provided', () => {
        render(<JumpTo jumpToHeadings={jumpToHeadings} />);

        expect(viewTrackerSpy).toHaveBeenCalledWith(undefined);
      });

      it('should register view tracker if event tracking data provided', () => {
        render(<JumpTo {...defaultProps} />);

        expect(viewTrackerSpy).toHaveBeenCalledWith(
          defaultProps.eventTrackingData,
        );
      });
    });

    describe('Click tracking', () => {
      const clickTrackerSpy = jest
        .spyOn(clickTracking, 'default')
        .mockImplementation(() => jest.fn());

      it('should not enable click tracking if event tracking data is not provided', () => {
        render(<JumpTo jumpToHeadings={jumpToHeadings} />);

        expect(clickTrackerSpy).toHaveBeenCalledWith(undefined);
        jumpToHeadings.forEach(({ heading }) => {
          const sanitisedId = heading.replace(/\s+/g, '-').toLowerCase();
          const link = screen.getByTestId(`jump-to-link-${sanitisedId}`);
          fireEvent.click(link);
          expect(link.onclick).toBeFalsy();
        });
      });

      it('should register click tracking if event tracking data is provided', () => {
        render(<JumpTo {...defaultProps} />);

        expect(clickTrackerSpy).toHaveBeenCalledWith(
          defaultProps.eventTrackingData,
        );
      });
    });
  });
});
