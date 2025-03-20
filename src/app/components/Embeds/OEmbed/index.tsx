/* eslint-disable camelcase */
/** @jsx jsx */
import { jsx, Theme } from '@emotion/react';
import { memo, useContext } from 'react';
import pathOr from 'ramda/src/pathOr';
import LiteMediaLoader from '#app/components/LiteComponents/LiteMediaLoader';
import { RequestContext } from '../../../contexts/RequestContext';
import { ServiceContext } from '../../../contexts/ServiceContext';
import EmbedHtml from '../EmbedHtml';
import EmbedError from '../EmbedError';
import FlourishEmbed from '../FlourishEmbed';
import AmpIframeEmbed from '../AmpIframeEmbed';
import { OEmbedProps } from '../types';

const OEmbedLoader = ({ oembed, embeddableContent }: OEmbedProps) => {
  const { isAmp, isLite, canonicalLink } = useContext(RequestContext);
  const { translations } = useContext(ServiceContext);

  const { html, provider_name, oEmbedType, parameters, url } = oembed || {};
  const isVDJEmbed = oEmbedType === 'vdj-embed';

  if (isAmp) {
    if (isVDJEmbed && parameters && url) {
      return <AmpIframeEmbed parameters={parameters} url={url} />;
    }
    const errorMessage = pathOr(
      'Sorry, we can’t display this part of the story on this lightweight mobile page.',
      ['include', 'errorMessage'],
      translations,
    );

    const linkText = pathOr(
      'View the full version of the page to see all the content.',
      ['include', 'linkText'],
      translations,
    );

    return (
      <EmbedError
        message={errorMessage}
        link={{
          text: linkText,
          href: canonicalLink,
        }}
      />
    );
  }

  if (html == null && embeddableContent == null) {
    return null;
  }

  if (isLite) {
    return (
      <div
        css={({ spacings }: Theme) => ({
          marginBottom: `${spacings.TRIPLE}rem`,
        })}
      >
        <LiteMediaLoader type="embed">
          {provider_name === 'Flourish' ? (
            <FlourishEmbed {...oembed} />
          ) : (
            <EmbedHtml embeddableContent={html || embeddableContent} />
          )}
        </LiteMediaLoader>
      </div>
    );
  }

  if (provider_name === 'Flourish') {
    return <FlourishEmbed {...oembed} />;
  }

  return <EmbedHtml embeddableContent={html || embeddableContent} />;
};

export default memo(OEmbedLoader);
