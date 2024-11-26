import React from 'react';
import podcastProgramme from '#data/gahuza/bbc_gahuza_radio/podcast-programme-p07yh8hb.json';
import {
  render,
  waitFor,
} from '../../../components/react-testing-library-with-providers';
import RadioSchedulesWithContext from './utilities/testHelpers';

describe('RadioScheduleData', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('does not render when radio schedule toggle is disabled', async () => {
    const initialData = podcastProgramme.data.radioScheduleData;
    const { container } = render(
      <RadioSchedulesWithContext service="gahuza" initialData={initialData} />,
    );
    await waitFor(() => {
      expect(container).toBeEmptyDOMElement();
    });
  });

  it('does render when radio schedule toggle is enabled', async () => {
    const initialData = podcastProgramme.data.radioScheduleData;
    const { container } = render(
      <RadioSchedulesWithContext
        service="gahuza"
        initialData={initialData}
        radioScheduleToggle
        toggleName="onDemandRadioSchedule"
      />,
    );
    await waitFor(() => {
      expect(container.querySelectorAll('li').length).toEqual(4);
    });
  });

  it('does not render on AMP pages', async () => {
    const initialData = podcastProgramme.data.radioScheduleData;

    const { container } = render(
      <RadioSchedulesWithContext
        service="gahuza"
        initialData={initialData}
        radioScheduleToggle
        isAmp
      />,
    );
    await waitFor(() => {
      expect(container).toBeEmptyDOMElement();
    });
  });
});
