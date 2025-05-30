import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RequestContextProvider } from '#contexts/RequestContext';
import * as analyticsUtils from '#lib/analyticsUtils';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import { LIVE_RADIO_PAGE } from '#app/routes/utils/pageTypes';
import { Services } from '#app/models/types/global';
import { LiveRadioBlock } from '#app/models/types/media';
import afriquePageData from '#data/afrique/bbc_afrique_radio/liveradio.json';
import gahuzaPageData from '#data/gahuza/bbc_gahuza_radio/liveradio.json';
import { render } from '../../components/react-testing-library-with-providers';
import { ServiceContextProvider } from '../../contexts/ServiceContext';
import LiveRadioPage from './LiveRadioPage';
import { LiveRadioPageData } from './types';

type Props = {
  pageData: LiveRadioPageData;
  service: Services;
  lang: string;
};

const Page = ({ pageData, service, lang }: Props) => (
  <BrowserRouter>
    <ToggleContextProvider toggles={{ liveRadioSchedule: { enabled: true } }}>
      <ServiceContextProvider service={service} pageLang={lang}>
        <RequestContextProvider
          bbcOrigin="https://www.test.bbc.com"
          pageType={LIVE_RADIO_PAGE}
          pathname="/pathname"
          service={service}
          statusCode={200}
        >
          <LiveRadioPage pageData={pageData} />
        </RequestContextProvider>
      </ServiceContextProvider>
    </ToggleContextProvider>
  </BrowserRouter>
);

(analyticsUtils.getAtUserId as jest.Mock) = jest.fn();

jest.mock('../../components/ChartbeatAnalytics', () => {
  const ChartbeatAnalytics = () => <div>chartbeat</div>;
  return ChartbeatAnalytics;
});

describe('Radio Page Main', () => {
  it('should match snapshot for Canonical', () => {
    const { container } = render(
      <Page
        pageData={afriquePageData.data as unknown as LiveRadioPageData}
        service="afrique"
        lang="fr"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should show the title for the Live Radio page', () => {
    const { getByText } = render(
      <Page
        pageData={afriquePageData.data as unknown as LiveRadioPageData}
        service="afrique"
        lang="fr"
      />,
    );

    expect(getByText('BBC Afrique Radio')).toBeInTheDocument();
  });

  it('should show the summary for the Live Radio page', () => {
    const { getByText } = render(
      <Page
        pageData={afriquePageData.data as unknown as LiveRadioPageData}
        service="afrique"
        lang="fr"
      />,
    );

    expect(getByText('Infos, musique et sports')).toBeInTheDocument();
  });

  it('should show the audio player on canonical', () => {
    const mockMediaBlock = [
      {
        type: 'liveRadio',
        model: [
          {
            text: 'BBC Hausa Rediyo',
            type: 'heading',
          },
          {
            text: "Labaran duniya da sharhi da kuma bayanai kan al'amuran yau da kullum daga sashin Hausa na BBC.",
            type: 'paragraph',
          },
          {
            id: 'liveradio',
            subType: 'primary',
            format: 'audio',
            externalId: 'bbc_hausa_radio',
            duration: 'PT0S',
            caption: '',
            embedding: false,
            available: true,
            live: true,
            type: 'version',
          },
        ],
      },
    ] as LiveRadioBlock[];

    render(
      <Page
        pageData={
          {
            ...afriquePageData.data,
            mediaBlock: mockMediaBlock,
          } as unknown as LiveRadioPageData
        }
        service="afrique"
        lang="fr"
      />,
    );
    const audioPlayerElement = document.querySelector(
      '[data-e2e="media-player"]',
    );

    expect(audioPlayerElement).toBeInTheDocument();
  });

  it('should show the radio schedule for the Live Radio page on canonical', () => {
    const { getByText } = render(
      <Page
        pageData={afriquePageData.data as unknown as LiveRadioPageData}
        service="afrique"
        lang="fr"
      />,
    );
    const radioScheduleTitle = getByText('Journaux et Magazines');
    const scheduleWrapper = document.querySelector(
      '[data-e2e="radio-schedule"]',
    );

    expect(scheduleWrapper).toBeInTheDocument();
    expect(radioScheduleTitle).toBeInTheDocument();
  });

  it('should not show the radio schedule for services without a schedule', async () => {
    const { container } = render(
      <Page
        pageData={gahuzaPageData.data as unknown as LiveRadioPageData}
        service="gahuza"
        lang="rw"
      />,
    );

    const scheduleWrapper = container.querySelector(
      '[data-e2e="radio-schedule"]',
    );

    expect(scheduleWrapper).not.toBeInTheDocument();
  });
});
