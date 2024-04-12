/* eslint-disable react/no-danger */
import React, { HTMLAttributes } from 'react';
import IfAboveIE9 from '#app/legacy/components/IfAboveIE9Comment';
import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import { getProcessEnvAppVariables } from '#app/lib/utilities/getEnvConfig';
import serialiseForScript from '#app/lib/utilities/serialiseForScript';

type Props = {
  htmlAttrs: HTMLAttributes<HTMLHtmlElement>;
  title: React.ReactElement;
  helmetMetaTags: React.ReactElement[];
  helmetLinkTags: React.ReactElement[];
  helmetScriptTags: React.ReactElement[];
  isApp: boolean;
  ids: string[];
  styles: string;
  html: string;
  data: Record<string, unknown>;
  links: React.ReactElement[];
  modernScripts: React.ReactElement;
  legacyScripts: React.ReactElement;
};

export default function CanonicalRenderer({
  htmlAttrs,
  title,
  helmetMetaTags,
  helmetLinkTags,
  helmetScriptTags,
  isApp,
  ids,
  styles,
  html,
  data,
  links,
  modernScripts,
  legacyScripts,
}: Props) {
  const serialisedData = serialiseForScript(data);
  const appEnvVariables = serialiseForScript(getProcessEnvAppVariables());

  return (
    <html lang="en-GB" className={NO_JS_CLASSNAME} {...htmlAttrs}>
      <head>
        {isApp && <meta name="robots" content="noindex" />}
        {title}
        {helmetMetaTags}
        {helmetLinkTags}
        {helmetScriptTags}
        <style data-emotion-css={ids.join(' ')}>{styles}</style>
        <script
          id="simorgh-envvars"
          dangerouslySetInnerHTML={{
            // Read env variables from the server and expose them to the client
            __html: `window.SIMORGH_ENV_VARS=${appEnvVariables}`,
          }}
        />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
        <script
          // This script should be the first script tag in the body, otherwise Opera Mini has trouble parsing the `window.SIMORGH_DATA` object
          dangerouslySetInnerHTML={{
            __html: `window.SIMORGH_DATA=${serialisedData}`,
          }}
        />
        {links}
        <IfAboveIE9>
          {modernScripts}
          {legacyScripts}
        </IfAboveIE9>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove("no-js");`,
          }}
        />
      </body>
    </html>
  );
}
