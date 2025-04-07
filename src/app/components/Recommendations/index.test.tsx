import React from 'react';
import { render } from '#app/components/react-testing-library-with-providers';
import Recommendations from '.';

const recommendationFixtures = [
  {
    id: '123',
    title:
      'शेख़ मुजीब और इंदिरा गांधी के बीच हुए समझौते पर क्यों हुआ था विवाद?',
    image: {
      width: 1824,
      height: 1026,
      altText: 'सुनीता विलियम्स',
      locator: 'a095/live/9c11d5e0-0581-11f0-88b7-5556e7b55c5e.jpg',
      originCode: 'cpsprodpb',
      copyrightHolder: 'Getty Images',
    },
    href: 'https://www.bbc.co.uk',
  },
  {
    id: '456',
    title:
      'मोहम्मद यूनुस चीन से बांग्लादेश के लिए क्या लाए, भारत को क्या तीस्ता प्रोजेक्ट पर मिला झटका?',
    image: {
      width: 1824,
      height: 1026,
      altText: 'सुनीता विलियम्स',
      locator: 'b491/live/4ee8f370-0c4d-11f0-8c95-199dc1dd8dea.jpg',
      originCode: 'cpsprodpb',
      copyrightHolder: 'Getty Images',
    },
    href: 'https://www.bbc.co.uk',
  },
];

describe('Recommendations', () => {
  it('should render a single recommendation', () => {
    const { getByText } = render(
      <Recommendations data={recommendationFixtures} />,
      { service: 'pidgin' },
    );
    const title = getByText(recommendationFixtures[0].title);
    expect(title).toBeInTheDocument();
  });

  it('should render multiple recommendations', () => {
    const { getByText } = render(
      <Recommendations data={recommendationFixtures} />,
      { service: 'pidgin' },
    );

    const listEl = document.querySelector('ul');
    expect(listEl).toBeInTheDocument();

    recommendationFixtures.forEach(({ title }) => {
      const recommendationTitle = getByText(title);
      expect(recommendationTitle).toBeInTheDocument();
    });
  });

  it('should not render recommendations for a service that has Most Read disabled', () => {
    render(<Recommendations data={recommendationFixtures} />, {
      service: 'cymrufyw',
    });

    const listEl = document.querySelector('ul');
    expect(listEl).not.toBeInTheDocument();
  });
});
