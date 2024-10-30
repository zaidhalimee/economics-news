import React from 'react';
import { render } from '#app/components/react-testing-library-with-providers';
import { Tag } from '#app/components/Metadata/types';
import BANNER_CONFIG from './config';
import ElectionBanner from '.';

const mockAboutTags = [
  { thingId: 'thing1' },
  { thingId: 'thing2' },
  ...BANNER_CONFIG.thingIds.map(thingId => ({ thingId })),
] as Tag[];

const ELEMENT_ID = 'election-banner';

describe('ElectionBanner', () => {
  beforeEach(() => {
    delete process.env.SIMORGH_APP_ENV;
    delete process.env.SIMORGH_INCLUDES_BASE_URL;
    delete process.env.SIMORGH_INCLUDES_BASE_AMP_URL;
  });

  it('should not render ElectionBanner when isLite is true', () => {
    const { queryByTestId } = render(
      <ElectionBanner aboutTags={mockAboutTags} />,
      { isLite: true },
    );

    expect(queryByTestId(ELEMENT_ID)).not.toBeInTheDocument();
  });

  describe.each(['canonical', 'amp'])('%s', platform => {
    const isAmp = platform === 'amp';

    it.each(['live', 'test'])(
      'should use the correct URL for the iframe when SIMORGH_APP_ENV is "%s"',
      appEnv => {
        if (appEnv === 'live') {
          process.env.SIMORGH_INCLUDES_BASE_URL =
            'https://www.bbc.com/ws/includes';
          process.env.SIMORGH_INCLUDES_BASE_AMP_URL =
            'https://news.files.bbci.co.uk';
        }

        if (appEnv === 'test') {
          process.env.SIMORGH_INCLUDES_BASE_URL =
            'https://www.test.bbc.com/ws/includes';
          process.env.SIMORGH_INCLUDES_BASE_AMP_URL =
            'https://news.test.files.bbci.co.uk';
        }

        process.env.SIMORGH_APP_ENV = appEnv;

        const { getByTestId } = render(
          <ElectionBanner aboutTags={mockAboutTags} />,
          {
            toggles: { electionBanner: { enabled: true } },
            isAmp,
          },
        );

        const wrappingEl = getByTestId(ELEMENT_ID);

        const iframe = wrappingEl.querySelector('iframe, amp-iframe');
        const iframeSrc = iframe?.getAttribute('src');

        const configSrc = BANNER_CONFIG[
          appEnv === 'live' ? 'iframeSrc' : 'iframeDevSrc'
        ].replace('{service}', 'news');

        const domain = isAmp
          ? process.env.SIMORGH_INCLUDES_BASE_AMP_URL
          : process.env.SIMORGH_INCLUDES_BASE_URL;

        expect(iframeSrc).toEqual(
          `${domain}/${configSrc}${isAmp ? '/amp' : ''}`,
        );
      },
    );

    it('should render ElectionBanner when aboutTags contain the correct thingLabel', () => {
      const { getByTestId } = render(
        <ElectionBanner aboutTags={mockAboutTags} />,
        {
          toggles: { electionBanner: { enabled: true } },
          isAmp,
        },
      );

      expect(getByTestId(ELEMENT_ID)).toBeInTheDocument();
    });

    it('should not render ElectionBanner when aboutTags do not contain the correct thingLabel', () => {
      const { queryByTestId } = render(
        <ElectionBanner aboutTags={[{ thingLabel: 'thing1' }] as Tag[]} />,
        { isAmp },
      );

      expect(queryByTestId(ELEMENT_ID)).not.toBeInTheDocument();
    });

    it('should not render ElectionBanner when aboutTags is empty', () => {
      const { queryByTestId } = render(<ElectionBanner aboutTags={[]} />, {
        isAmp,
      });

      expect(queryByTestId(ELEMENT_ID)).not.toBeInTheDocument();
    });

    it('should not render ElectionBanner when toggle is disabled', () => {
      const { queryByTestId } = render(
        <ElectionBanner aboutTags={mockAboutTags} />,
        {
          toggles: { electionBanner: { enabled: false } },
          isAmp,
        },
      );

      expect(queryByTestId(ELEMENT_ID)).not.toBeInTheDocument();
    });

    it('should not render ElectionBanner when toggle is null', () => {
      const { queryByTestId } = render(
        <ElectionBanner aboutTags={mockAboutTags} />,
        {
          toggles: {
            someOtherToggle: { enabled: true },
          },
          isAmp,
        },
      );

      expect(queryByTestId(ELEMENT_ID)).not.toBeInTheDocument();
    });
  });
});
