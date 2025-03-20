/* eslint-disable react/no-danger */
import React, { ReactElement, PropsWithChildren } from 'react';
import NO_JS_CLASSNAME from '#app/lib/noJs.const';
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
    <html lang="en-GB" className={NO_JS_CLASSNAME} {...htmlAttrs}>
      <head>
        <meta name="robots" content="none" />
        {title}
        {helmetMetaTags}
        {helmetLinkTags}
        {helmetScriptTags}
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove("no-js");`,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: `${trackingScripts()}` }} />
      </head>
      <body>{bodyContent}</body>
    </html>
  );
}
