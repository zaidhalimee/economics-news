import React from 'react';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import { render } from '#app/components/react-testing-library-with-providers';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import RecommendationsPromo from '.';
import { Recommendation } from '../types';

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

const Component = ({ recommendation }: { recommendation: Recommendation }) => {
  return (
    <ServiceContextProvider service="pidgin">
      <ToggleContextProvider
        toggles={{
          eventTracking: {
            enabled: true,
          },
        }}
      >
        <RecommendationsPromo recommendation={recommendation} />,
      </ToggleContextProvider>
    </ServiceContextProvider>
  );
};

describe('RecommendationsPromo', () => {
  it('it renders a Recommendations Promo', () => {
    const { container } = render(
      <RecommendationsPromo recommendation={recommendationFixture} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render the title of the article as a link', () => {
    const { getByText, container } = render(
      <Component recommendation={recommendationFixture} />,
    );

    const links = container.querySelectorAll('a');

    expect(getByText(recommendationFixture.title)).toBeInTheDocument();
    expect(links).toHaveLength(1);
    expect(links[0].getAttribute('href')).toEqual(recommendationFixture.href);
  });
});
