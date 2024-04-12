/* eslint-disable react/no-danger */
import React from 'react';
import {
  AMP_SCRIPT,
  AMP_NO_SCRIPT,
  AMP_JS,
  AMP_CONSENT_JS,
  AMP_ANALYTICS_JS,
} from '#psammead/psammead-assets/src/amp-boilerplate';
import { AMP_GEO_SCRIPT } from '#components/AmpGeo';

type Props = {
  htmlAttrs: Record<string, string>;
  title: React.ReactElement;
  helmetMetaTags: React.ReactElement[];
  helmetLinkTags: React.ReactElement[];
  helmetScriptTags: React.ReactElement[];
  ids: string[];
  styles: string;
  html: string;
};

export default function AmpRenderer({
  htmlAttrs,
  title,
  helmetMetaTags,
  helmetLinkTags,
  helmetScriptTags,
  ids,
  styles,
  html,
}: Props) {
  return (
    <html lang="en-GB" {...htmlAttrs}>
      <head>
        {title}
        {helmetMetaTags}
        {helmetLinkTags}
        {helmetScriptTags}
        <style amp-custom="" data-emotion-css={ids.join(' ')}>
          {styles}
        </style>
        <style amp-boilerplate="">{AMP_SCRIPT}</style>
        <noscript>
          <style amp-boilerplate="">{AMP_NO_SCRIPT}</style>
        </noscript>
        {AMP_JS}
        {AMP_GEO_SCRIPT}
        {AMP_CONSENT_JS}
        {AMP_ANALYTICS_JS}
      </head>
      <body className="amp-geo-pending">
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
      </body>
    </html>
  );
}
