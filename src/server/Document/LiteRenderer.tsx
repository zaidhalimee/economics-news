/* eslint-disable react/no-danger */
import { LITE_PAGE_TRANSFORMATION_FAILED } from '#app/lib/logger.const';
import React from 'react';
import nodeLogger from '#lib/logger.node';
import litePageTransform, { LITE_STYLES } from '../utilities/litePageTransform';
import { BaseRendererProps } from './types';

const logger = nodeLogger(__filename);

interface Props extends BaseRendererProps {
  html: string;
  url: string;
}

export default function LitePageRenderer({
  htmlAttrs,
  title,
  helmetMetaTags,
  helmetLinkTags,
  helmetScriptTags,
  html,
  url,
}: Props) {
  const helmetProps = {
    helmetMetaTags,
    helmetLinkTags,
    helmetScriptTags,
  };

  let renderedHtml = html;

  try {
    const {
      liteHtml,
      liteHelmetLinkTags,
      liteHelmetMetaTags,
      liteHelmetScriptTags,
    } = litePageTransform({
      html,
      helmetLinkTags,
      helmetMetaTags,
      helmetScriptTags,
    });

    renderedHtml = liteHtml;

    helmetProps.helmetMetaTags = liteHelmetMetaTags;
    helmetProps.helmetLinkTags = liteHelmetLinkTags;
    helmetProps.helmetScriptTags = liteHelmetScriptTags;
  } catch (error: unknown) {
    const { message } = error as Error;
    logger.error(LITE_PAGE_TRANSFORMATION_FAILED, { message, url });
  }

  return (
    <html lang="en-GB" {...htmlAttrs}>
      <head>
        <meta name="robots" content="noindex" />
        {title}
        {helmetProps.helmetMetaTags}
        {helmetProps.helmetLinkTags}
        {helmetProps.helmetScriptTags}
        <style>{LITE_STYLES}</style>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: renderedHtml }} />
      </body>
    </html>
  );
}
