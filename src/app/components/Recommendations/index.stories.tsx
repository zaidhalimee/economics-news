import React from 'react';
import { ServiceContextProvider } from '#app/contexts/ServiceContext';
import { Recommendation } from '#app/models/types/onwardJourney';
import ThemeProvider from '#app/components/ThemeProvider';
import { Services } from '#app/models/types/global';
import Recommendations from '.';

const recommendationFixtures = [
  {
    id: '123',
    title: 'Recommendation One',
    image: {
      width: 1824,
      height: 1026,
      altText: 'image of something too',
      locator: 'a095/live/9c11d5e0-0581-11f0-88b7-5556e7b55c5e.jpg',
      originCode: 'cpsprodpb',
      copyrightHolder: 'Getty Images',
    },
    href: 'https://www.bbc.co.uk',
  },
  {
    id: '456',
    title: 'Recommendation Two',
    image: {
      width: 1824,
      height: 1026,
      altText: 'images of something',
      locator: 'b491/live/4ee8f370-0c4d-11f0-8c95-199dc1dd8dea.jpg',
      originCode: 'cpsprodpb',
      copyrightHolder: 'Getty Images',
    },
    href: 'https://www.bbc.co.uk',
  },
];

const Component = ({
  data,
  service,
}: {
  data: Recommendation[];
  service: Services;
}) => {
  return (
    <ThemeProvider service={service}>
      <ServiceContextProvider service={service}>
        <Recommendations data={data} />
      </ServiceContextProvider>
    </ThemeProvider>
  );
};

export default {
  Component,
  title: 'Components/Recommendations',
};

export const SingleItem = () => (
  <Component data={[recommendationFixtures[0]]} service="pidgin" />
);
export const MultipleItems = () => (
  <Component data={recommendationFixtures} service="pidgin" />
);
