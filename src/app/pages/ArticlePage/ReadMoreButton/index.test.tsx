import React from 'react';
import {
  fireEvent,
  render,
} from '../../../components/react-testing-library-with-providers';
import ReadMoreButton from './index';
import * as viewTracking from '../../../hooks/useViewTracker';
import * as clickTracking from '../../../hooks/useClickTrackerHandler';

describe('ReadMoreButton', () => {
  const mockSetShowAllContent = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button when showAllContent is false', () => {
    const { getByTestId } = render(
      <ReadMoreButton
        showAllContent={false}
        setShowAllContent={mockSetShowAllContent}
        variation="A"
      />,
    );

    expect(getByTestId('read-more-button')).toBeInTheDocument();
  });

  it('does not render the button when showAllContent is true', () => {
    const { queryByTestId } = render(
      <ReadMoreButton
        showAllContent
        setShowAllContent={mockSetShowAllContent}
        variation="A"
      />,
    );

    expect(queryByTestId('read-more-button')).not.toBeInTheDocument();
  });

  it('applies the correct styles for variation A', () => {
    const { getByTestId } = render(
      <ReadMoreButton
        showAllContent={false}
        setShowAllContent={mockSetShowAllContent}
        variation="A"
      />,
    );

    const button = getByTestId('read-more-button');
    expect(button).toHaveStyle('background-color: #141414');
  });

  it('applies the correct styles for variation B', () => {
    const { getByTestId } = render(
      <ReadMoreButton
        showAllContent={false}
        setShowAllContent={mockSetShowAllContent}
        variation="B"
      />,
    );

    const button = getByTestId('read-more-button');
    expect(button).toHaveStyle('background-color: #F6F6F6');
  });

  it('renders the SVG icon when variation is B', () => {
    const { container } = render(
      <ReadMoreButton
        showAllContent={false}
        setShowAllContent={mockSetShowAllContent}
        variation="B"
      />,
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('does not render the SVG icon when variation is A', () => {
    const { container } = render(
      <ReadMoreButton
        showAllContent={false}
        setShowAllContent={mockSetShowAllContent}
        variation="A"
      />,
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toBeInTheDocument();
  });

  it('applies border-bottom for variation B', () => {
    const { getByTestId } = render(
      <ReadMoreButton
        showAllContent={false}
        setShowAllContent={mockSetShowAllContent}
        variation="B"
      />,
    );

    const button = getByTestId('read-more-button');
    expect(button).toHaveStyle('border-bottom: 1px solid #B0B2B4');
  });

  it('does not apply border-bottom for variation A', () => {
    const { getByTestId } = render(
      <ReadMoreButton
        showAllContent={false}
        setShowAllContent={mockSetShowAllContent}
        variation="A"
      />,
    );

    const button = getByTestId('read-more-button');
    expect(button.style.borderBottom).toBe('');
  });

  describe('Event Tracking', () => {
    const eventTrackingData = { componentName: 'read-more-button' };

    describe('View tracking', () => {
      const viewTrackerSpy = jest.spyOn(viewTracking, 'default');

      it('should not be enabled if event tracking data not provided', () => {
        render(
          <ReadMoreButton
            showAllContent={false}
            setShowAllContent={mockSetShowAllContent}
            variation="A"
          />,
        );

        expect(viewTrackerSpy).toHaveBeenCalledWith(undefined);
      });

      it('should register view tracker if event tracking data provided', () => {
        render(
          <ReadMoreButton
            showAllContent={false}
            setShowAllContent={mockSetShowAllContent}
            variation="A"
            eventTrackingData={eventTrackingData}
          />,
        );

        expect(viewTrackerSpy).toHaveBeenCalledWith(eventTrackingData);
      });
    });

    describe('Click tracking', () => {
      const clickTrackerSpy = jest
        .spyOn(clickTracking, 'default')
        .mockImplementation();

      it('should not be enabled if event tracking data not provided', () => {
        const { getByTestId } = render(
          <ReadMoreButton
            showAllContent={false}
            setShowAllContent={mockSetShowAllContent}
            variation="A"
          />,
        );

        expect(clickTrackerSpy).toHaveBeenCalledWith(undefined);

        const button = getByTestId('read-more-button');
        fireEvent.click(button);
        expect(button.onclick).toBeFalsy();
      });

      it('should register click tracker if event tracking data provided', () => {
        render(
          <ReadMoreButton
            showAllContent={false}
            setShowAllContent={mockSetShowAllContent}
            variation="A"
            eventTrackingData={eventTrackingData}
          />,
        );

        expect(clickTrackerSpy).toHaveBeenCalledWith(eventTrackingData);
      });

      it('should handle a click event when button is clicked', () => {
        clickTrackerSpy.mockRestore();

        const { getByTestId } = render(
          <ReadMoreButton
            showAllContent={false}
            setShowAllContent={mockSetShowAllContent}
            variation="A"
          />,
        );

        const button = getByTestId('read-more-button');
        fireEvent.click(button);

        expect(button.onclick).toBeTruthy();
      });
    });
  });
});
