/* eslint-disable react/no-danger */
import React from 'react';
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
          // @ts-expect-error helmetLinkTags is an array of ReactElements
          helmetLinkTags={removeDataReactHelmetAttribute(helmetLinkTags)}
          // @ts-expect-error helmetMetaTags is an array of ReactElements
          helmetMetaTags={removeDataReactHelmetAttribute(helmetMetaTags)}
          // @ts-expect-error helmetScriptTags is an array of ReactElements
          helmetScriptTags={removeDataReactHelmetAttribute(helmetScriptTags)}
          htmlAttrs={htmlAttrs}
          styles={css}
          // @ts-expect-error title is a ReactElement
          title={removeDataReactHelmetAttribute(title)}
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
