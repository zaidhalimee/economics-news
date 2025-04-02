import React from 'react';
import { render } from '#app/components/react-testing-library-with-providers';
import RecommendationsItem from '.';

const recommendationFixture = {
  title: 'शेख़ मुजीब और इंदिरा गांधी के बीच हुए समझौते पर क्यों हुआ था विवाद?',
  image: {
    width: 1824,
    height: 1026,
    altText: 'सुनीता विलियम्स',
    locator: 'a095/live/9c11d5e0-0581-11f0-88b7-5556e7b55c5e.jpg',
    originCode: 'cpsprodpb',
    copyrightHolder: 'Getty Images',
  },
  href: 'https://www.bbc.co.uk',
};

describe('RecommendationsItem', () => {
  it('should render a single recommendation with a title and link', () => {
    const { getByText, container } = render(
      <RecommendationsItem recommendation={recommendationFixture} />,
    );

    const links = container.querySelectorAll('a');

    expect(getByText(recommendationFixture.title)).toBeInTheDocument();
    expect(links).toHaveLength(1);
    expect(links[0].getAttribute('href')).toEqual(recommendationFixture.href);
  });

  it('should not render if no recommendation is provided', () => {
    const { container } = render(<RecommendationsItem recommendation={null} />);

    expect(container).toBeEmptyDOMElement();
  });
});
