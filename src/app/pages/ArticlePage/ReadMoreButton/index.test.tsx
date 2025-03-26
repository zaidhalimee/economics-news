import React from 'react';
import { render } from '../../../components/react-testing-library-with-providers';
import ReadMoreButton from './index';

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
});
