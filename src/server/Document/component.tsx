/* eslint-disable react/no-danger */
import React, { ReactElement } from 'react';
import { EmotionCritical } from '@emotion/server/create-instance';

import { HelmetData } from 'react-helmet';
import LiteRenderer from './Renderers/LiteRenderer';
import CanonicalRenderer from './Renderers/CanonicalRenderer';
import AmpRenderer from './Renderers/AmpRenderer';
import litePageTransforms from './Renderers/litePageTransforms';
import removeDataReactHelmetAttribute from './Renderers/litePageTransforms/removeDataReactHelmetAttribute';

type Props = {
  app: EmotionCritical;
  data: Record<string, unknown>;
  helmet: HelmetData;
  isAmp: boolean;
  isApp: boolean;
  isLite: boolean;
  legacyScripts: React.ReactElement;
  links: React.ReactElement;
  modernScripts: React.ReactElement;
};

const Document = ({
  app,
  data,
  helmet,
  isAmp,
  isApp,
  isLite,
  legacyScripts,
  links,
  modernScripts,
}: Props) => {
  const title = helmet.title.toComponent();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const helmetMetaTags = helmet.meta.toComponent();
  const helmetLinkTags = helmet.link.toComponent();
  const helmetScriptTags = helmet.script.toComponent();

  const { html, css, ids } = app;

  switch (true) {
    case isLite:
      return (
        <LiteRenderer
          bodyContent={
            <div
              dangerouslySetInnerHTML={{ __html: litePageTransforms(html) }}
            />
          }
          helmetLinkTags={
            removeDataReactHelmetAttribute(helmetLinkTags) as ReactElement
          }
          helmetMetaTags={
            removeDataReactHelmetAttribute(helmetMetaTags) as ReactElement
          }
          helmetScriptTags={
            removeDataReactHelmetAttribute(helmetScriptTags) as ReactElement
          }
          htmlAttrs={htmlAttrs}
          styles={css}
          title={removeDataReactHelmetAttribute(title) as ReactElement}
        />
      );
    case isAmp:
      return (
        <AmpRenderer
          helmetMetaTags={helmetMetaTags}
          helmetLinkTags={helmetLinkTags}
          helmetScriptTags={helmetScriptTags}
          html={html}
          htmlAttrs={htmlAttrs}
          ids={ids}
          styles={css}
          title={title}
        />
      );
    default:
      return (
        <CanonicalRenderer
          data={data}
          helmetMetaTags={helmetMetaTags}
          helmetLinkTags={helmetLinkTags}
          helmetScriptTags={helmetScriptTags}
          html={html}
          htmlAttrs={htmlAttrs}
          ids={ids}
          isApp={isApp}
          legacyScripts={legacyScripts}
          links={links}
          modernScripts={modernScripts}
          styles={css}
          title={title}
        />
      );
  }
};

export default Document;
