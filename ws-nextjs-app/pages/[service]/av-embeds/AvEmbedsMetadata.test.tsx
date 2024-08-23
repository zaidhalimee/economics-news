import React from 'react';
import {
  render,
  waitFor,
} from '../../../../src/app/components/react-testing-library-with-providers';
import serbianCyrCps from '../../../../data/serbian/av-embeds/cyr/srbija-68707945.json';
import AvEmbedsMetadata from './AvEmbedsMetadata';
import { AV_EMBEDS } from '../../../../src/app/routes/utils/pageTypes';

const avEmbedsMetadataProps = {
  pageData: {
    ...serbianCyrCps.data.avEmbed,
    mediaBlock: serbianCyrCps.data.avEmbed.content.model.blocks,
    metadata: {
      ...serbianCyrCps.data.avEmbed.metadata,
      assetId: 'srbija-68707945',
      mediaId: null,
      mediaDelimiter: null,
      service: serbianCyrCps.data.avEmbed.metadata.service,
      type: AV_EMBEDS,
      variant: serbianCyrCps.data.avEmbed.metadata.variant,
    },
  },
};

describe('AV Embeds Page', () => {
  it('should render the viewport meta tag', async () => {
    render(
      // @ts-expect-error object schema mismatch
      <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
    );

    await waitFor(() => {
      const actual = document
        .querySelector('head > meta[name="viewport"]')
        ?.getAttribute('content');

      expect(actual).toEqual(
        'width=device-width, initial-scale=1, user-scalable=1',
      );
    });
  });

  it('should render the charset meta tag', async () => {
    render(
      // @ts-expect-error object schema mismatch
      <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
    );

    await waitFor(() => {
      const actual = document
        .querySelector('head > meta[charset]')
        ?.getAttribute('charset');

      expect(actual).toEqual('utf-8');
    });
  });

  it('should render the http-equiv meta tag', async () => {
    render(
      // @ts-expect-error object schema mismatch
      <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
    );

    await waitFor(() => {
      const actual = document
        .querySelector('head > meta[http-equiv="X-UA-Compatible"]')
        ?.getAttribute('content');

      expect(actual).toEqual('IE=edge,chrome=1');
    });
  });

  it('should render the description meta tag', async () => {
    render(
      // @ts-expect-error object schema mismatch
      <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
    );

    await waitFor(() => {
      const actual = document
        .querySelector('head > meta[name="description"]')
        ?.getAttribute('content');

      expect(actual).toEqual(
        'Услуга личног пратиоца у Србији доступна је деци са потешкоћама у развоју током школовања од 2015. године, али према последњим доступним подацима, трећина градова и општина нема довољно новца за ову врсту социјалне подршке.',
      );
    });
  });

  it('should render the iChef preconnect link tag', async () => {
    render(
      // @ts-expect-error object schema mismatch
      <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
    );

    await waitFor(() => {
      const actual = document
        .querySelector('head > link[rel="preconnect"]')
        ?.getAttribute('href');

      expect(actual).toEqual('//ichef.bbci.co.uk');
    });
  });

  it('should render the OG metatags', async () => {
    render(
      // @ts-expect-error object schema mismatch
      <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
    );

    const expected = [
      {
        content:
          'Здравље: Лични пратиоци деце са потешкоћама у развоју, „као члан породице"',
        property: 'og:title',
      },
      { content: 'video', property: 'og:type' },
      {
        content:
          'Услуга личног пратиоца у Србији доступна је деци са потешкоћама у развоју током школовања од 2015. године, али према последњим доступним подацима, трећина градова и општина нема довољно новца за ову врсту социјалне подршке.',
        property: 'og:description',
      },
      { content: 'BBC News', property: 'og:site_name' },
      { content: 'sr-Cyrl', property: 'og:locale' },
      {
        content: 'https://www.bbc.com/serbian/cyr/av-embeds/srbija-68707945',
        property: 'og:url',
      },
      {
        content: 'ichef.bbci.co.uk/images/ic/$recipe/p0cfmfsv.jpg',
        property: 'og:image',
      },
      {
        content:
          'Србија и особе са инвалидитетом: Како је Стефан слухом заслужио дипломе и освојио медаље',
        property: 'og:image:alt',
      },
    ];

    await waitFor(() => {
      const actual = Array.from(
        document.querySelectorAll('head > meta[property^="og:"]'),
      ).map(tag => ({
        property: tag.getAttribute('property'),
        content: tag.getAttribute('content'),
      }));

      expect(actual).toEqual(expected);
    });
  });

  it('should render the twitter metatags', async () => {
    render(
      // @ts-expect-error object schema mismatch
      <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
    );

    const expected = [
      { content: 'summary_large_image', name: 'twitter:card' },
      { content: '@bbcnews', name: 'twitter:site' },
      {
        content:
          'Здравље: Лични пратиоци деце са потешкоћама у развоју, „као члан породице"',
        name: 'twitter:title',
      },
      {
        content:
          'Услуга личног пратиоца у Србији доступна је деци са потешкоћама у развоју током школовања од 2015. године, али према последњим доступним подацима, трећина градова и општина нема довољно новца за ову врсту социјалне подршке.',
        name: 'twitter:description',
      },
      { content: '@bbcnews', name: 'twitter:creator' },
      {
        content: 'ichef.bbci.co.uk/images/ic/$recipe/p0cfmfsv.jpg',
        name: 'twitter:image:src',
      },
      {
        content:
          'Србија и особе са инвалидитетом: Како је Стефан слухом заслужио дипломе и освојио медаље',
        name: 'twitter:image:alt',
      },
      { content: 'www.bbc.com', name: 'twitter:domain' },
    ];

    await waitFor(() => {
      const actual = Array.from(
        document.querySelectorAll('head > meta[name^="twitter"]'),
      ).map(tag => ({
        name: tag.getAttribute('name'),
        content: tag.getAttribute('content'),
      }));

      expect(actual).toEqual(expected);
    });
  });

  // it('should render metadata tags for the AV Embeds page', async () => {
  //   const { container } = render(
  //     // @ts-expect-error object schema mismatch
  //     <AvEmbedsMetadata {...avEmbedsMetadataProps} />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });
});
