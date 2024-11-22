/* eslint-disable react/no-danger */
import React from 'react';
import IfAboveIE9 from '#app/legacy/components/IfAboveIE9Comment';
import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import { getProcessEnvAppVariables } from '#app/lib/utilities/getEnvConfig';
import serialiseForScript from '#app/lib/utilities/serialiseForScript';
import { BaseRendererProps } from './types';

interface Props extends BaseRendererProps {
  data: Record<string, unknown>;
  isApp: boolean;
  links: React.ReactElement;
  legacyScripts: React.ReactElement;
  modernScripts: React.ReactElement;
}

export default function CanonicalRenderer({
  data,
  helmetMetaTags,
  helmetLinkTags,
  helmetScriptTags,
  htmlAttrs,
  html,
  isApp,
  ids,
  links,
  legacyScripts,
  modernScripts,
  styles,
  title,
}: Props) {
  const serialisedData = serialiseForScript(data);
  const appEnvVariables = serialiseForScript(getProcessEnvAppVariables());

  const reverbObject = {
    "pageviewParams": "s=598343&idclient=4d6e05b4-3c62-47f4-81b8-12b4a8431cf2&s2=69&p=persian.articles.c9921k54wydo.page&r=1414x1140x24x24&re=1414x1140&hl=17x38x37&lng=en-GB&x1=[urn%3Abbc%3Aoptimo%3Aasset%3Ac9921k54wydo]&x2=[responsive]&x3=[news-persian]&x4=[fa]&x5=[http%253A%252F%252Flocalhost.bbc.com%253A7080%252Fpersian%252Farticles%252Fc9921k54wydo%253Frenderer_env%253Dlive]&x7=[article]&x8=[simorgh]&x9=[%D8%B1%D8%B6%DB%8C%2520%D9%85%D9%88%D8%B3%D9%88%DB%8C%2520%DA%A9%D9%87%2520%D8%A8%D9%88%D8%AF%D8%9F]&x11=[2023-...",
    "reverbParams": {
      "params": {
        "page": {
          "contentId": "urn:bbc:optimo:asset:c9921k54wydo",
          "contentType": "article",
          "destination": "WS_NEWS_LANGUAGES_TEST",
          "name": "persian.articles.c9921k54wydo.page",
          "producer": "PERSIAN",
          "additionalProperties": {
            "app_name": "news-persian",
            "app_type": "responsive",
            "content_language": "fa",
            "product_platform": null,
            "referrer_url": null,
            "x5": "http%253A%252F%252Flocalhost.bbc.com%253A7080%252Fpersian%252Farticles%252Fc9921k54wydo%253Frenderer_env%253Dlive",
            "x8": "simorgh",
            "x9": "رضی%20موسوی%20که%20بود؟",
            "x10": null,
            "x11": "2023-12-26T17:18:13.294Z",
            "x12": "2023-12-26T17:18:13.294Z",
            "x13": "Syria~Syrian+civil+war~Iran~Bashar+al-Assad",
            "x14": "28b0a95e-89d3-4fdf-bad0-8565eb549233~45d1e6e1-6001-4449-801d-ba85eed04025~511accd7-6ee6-4dfb-8e2b-b236be8cb14c~a682c620-92ca-4aa2-88fd-97c98c42a666",
            "x16": "",
            "x17": "Syria~Syrian+civil+war~Iran~Bashar+al-Assad",
            "x18": false
          }
        },
        "user": {
          "hashedId": "83201dc0-3ddd-42d3-8b81-a85a8374c6e7",
          "isSignedIn": true
        }
      },
      "eventName": "pageView"
    }
  };

  return (
    <html lang="en-GB" className={NO_JS_CLASSNAME} {...htmlAttrs}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.bbcpage = {};
              window.bbcpage = Object.assign(window.bbcpage, {
                getName() {
                  return Promise.resolve("${reverbObject.reverbParams.params.page.name}");
                },
                getLanguage() {
                  return Promise.resolve("${reverbObject.reverbParams.params.page.additionalProperties.content_language}");
                },
                getDestination() {
                  return Promise.resolve("${reverbObject.reverbParams.params.page.destination}");
                },
                getProducer() {
                  return Promise.resolve("${reverbObject.reverbParams.params.page.producer}");
                },
                getSection() {
                  return Promise.resolve("");
                },
                getContentId() {
                  return Promise.resolve("${reverbObject.reverbParams.params.page.contentId}");
                },
                getContentType() {
                  return Promise.resolve("${reverbObject.reverbParams.params.page.contentType}");
                },
                getEdition() {
                  return Promise.resolve("");
                },
                getReferrer() {
                  return Promise.resolve("");
                },
                //this addintional property is what gives the correct domain to send the data to echochamber
                // without it the data is sent to the test url for ati which is not what we want 
                getAdditionalProperties() {
                  return Promise.resolve(${JSON.stringify(reverbObject.reverbParams.params.page.additionalProperties)});
                },
                additionalProperties: {     
                  "testDomain": "local.ati-host.net",
                  "trace": "",
                  "customVars": ""
                }
            });

            window.__reverb = {};
            window.__reverb.__reverbLoadedPromise = new Promise((resolve, reject) => {
              window.__reverb.__resolveReverbLoaded = resolve;
              window.__reverb.__rejectReverbLoaded = reject;
            });

            window.__reverb.__reverbTimeout = setTimeout(() => {
              window.__reverb.__rejectReverbLoaded();
            }, 5000);

                        
            window.__reverb.__reverbLoadedPromise.then((reverb) => {
              return reverb.initialise().then(() => {
                reverb.viewEvent();

                console.log('Reverb initialised successfully');
                console.log(reverb);
              });
            }, () => {
              console.log('Failed to load reverb. No event sent');
            });`,
          }}
        />
        <script src="https://mybbc-analytics.files.bbci.co.uk/reverb-client-js/reverb-3.9.2.js" />

        {isApp && <meta name="robots" content="noindex" />}
        {title}
        {helmetMetaTags}
        {helmetLinkTags}
        {helmetScriptTags}
        <style
          data-emotion-css={ids?.join(' ')}
          dangerouslySetInnerHTML={{ __html: styles }}
        />
        <script
          dangerouslySetInnerHTML={{
            // Read env variables from the server and expose them to the client
            __html: `window.SIMORGH_ENV_VARS=${appEnvVariables}`,
          }}
        />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: html || '' }} />
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
