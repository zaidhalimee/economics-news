import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AUDIO_PAGE } from '#app/routes/utils/pageTypes';
import { StoryArgs, StoryProps } from '#app/models/types/storybook';
import { Services } from '#app/models/types/global';
import gahuza from '#data/gahuza/bbc_gahuza_radio/audio.json';
import korean from '#data/korean/bbc_korean_radio/audio.json';
import { OnDemandAudioPage } from '..';

const onDemandRadioFixtures = {
  gahuza,
  korean,
};

const matchFixtures = (service: Services) => ({
  params: {
    mediaId: 'liveradio',
    // @ts-expect-error partial data for testing
    serviceId: {
      gahuza: 'bbc_gahuza_radio',
      korea: 'bbc_korean_radio',
    }[service],
  },
});

const Component = ({ service }: StoryProps) => {
  return (
    <BrowserRouter>
      <OnDemandAudioPage
        match={matchFixtures(service)}
        // @ts-expect-error partial data for storybook
        pageData={onDemandRadioFixtures[service] || gahuza}
        status={200}
        service={service}
        loading={false}
        error=""
        pageType={AUDIO_PAGE}
      />
    </BrowserRouter>
  );
};

export default {
  Component,
  title: 'Pages/OnDemand Radio Page',
  parameters: {
    chromatic: {
      diffThreshold: 0.2,
    },
  },
};

export const Example = {
  render: (_: StoryArgs, { service, variant }: StoryProps) => (
    <Component service={service} variant={variant} />
  ),
  parameters: { chromatic: { disableSnapshot: true } },
};

// This story is for chromatic testing purposes only
export const Test = {
  render: (_: StoryArgs, { variant }: StoryProps) => (
    <Component service="gahuza" variant={variant} />
  ),
  tags: ['!dev'],
};
