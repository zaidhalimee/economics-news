/* eslint-disable react/no-danger */
import React, { ReactElement, PropsWithChildren } from 'react';
import processClientAndSend from '#src/server/utilities/liteATITracking';
import clickTracking from '#src/server/utilities/liteATITracking/clickTracking/index';
import viewTracking from '#src/server/utilities/liteATITracking/viewTracking';
import { BaseRendererProps } from './types';

interface Props extends BaseRendererProps {
  bodyContent: ReactElement;
}

const trackingScripts = () => `
  window.addEventListener('load', function (){
    (${processClientAndSend.toString()})();
    (${clickTracking.toString()})();
    (${viewTracking.toString()})();
  });
`;

export default function LitePageRenderer({
  bodyContent,
  helmetMetaTags,
  helmetLinkTags,
  helmetScriptTags,
  htmlAttrs,
  title,
  styles,
}: PropsWithChildren<Props>) {
  return (
    <html lang="en-GB" {...htmlAttrs}>
      <head>
        <meta name="robots" content="none" />
        {title}
        {helmetMetaTags}
        {helmetLinkTags}
        {helmetScriptTags}
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `${trackingScripts()}`,
          }}
        />
      </head>
      <body>{bodyContent}</body>
    </html>
  );
}
