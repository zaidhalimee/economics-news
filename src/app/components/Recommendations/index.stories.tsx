import React from 'react';
import { ServiceContextProvider } from '#app/contexts/ServiceContext';
import { Recommendation } from '#app/models/types/onwardJourney';
import ThemeProvider from '#app/components/ThemeProvider';
import { Services } from '#app/models/types/global';
import Recommendations from '.';
import recommendationsFixtures from './fixtures';

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
  <Component data={[recommendationsFixtures[0]]} service="pidgin" />
);
export const MultipleItems = () => (
  <Component data={recommendationsFixtures} service="pidgin" />
);
