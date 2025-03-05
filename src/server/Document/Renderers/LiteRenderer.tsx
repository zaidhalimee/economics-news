/* eslint-disable react/no-danger */
import React, { ReactElement, PropsWithChildren } from 'react';
import processClientDeviceAndSendLite from '#src/server/utilities/liteATITracking';
import clickTracking from '#src/server/utilities/liteATITracking/clickTracking';
import viewTracking from '#src/server/utilities/liteATITracking/viewTracking';
import { BaseRendererProps } from './types';

interface Props extends BaseRendererProps {
  bodyContent: ReactElement;
}

const trackingScripts = () => `
  window.addEventListener('load', function (){
    (${processClientDeviceAndSendLite.toString()})();
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
        <script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=IntersectionObserver" />
        <script
          dangerouslySetInnerHTML={{
            __html: `${trackingScripts()}`,
          }}
        />
      </head>
      <body>
        <div id="DEV_CONSOLE">HELLO WORLD CONSOLE:</div>
        {bodyContent}
      </body>
    </html>
  );
}
