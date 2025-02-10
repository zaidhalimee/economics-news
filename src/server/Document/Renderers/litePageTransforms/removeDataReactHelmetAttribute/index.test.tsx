import React from 'react';
import serialiseForScript from '#app/lib/utilities/serialiseForScript';
import removeDataReactHelmetAttribute from '.';

describe('removeDataReactHelmetAttribute', () => {
  it('removes data-react-helmet from meta tags', () => {
    const metaTags = [
      <meta data-react-helmet="true" name="name1" content="content1" />,
      <meta data-react-helmet="true" name="name2" content="content2" />,
    ];

    expect(removeDataReactHelmetAttribute(metaTags)).toStrictEqual([
      <meta name="name1" content="content1" />,
      <meta name="name2" content="content2" />,
    ]);
  });

  it('removes data-react-helmet from link tags', () => {
    const linkTags = [
      <link
        data-react-helmet="true"
        rel="canonical"
        href="https://www.bbc.com/pidgin"
      />,
      <link
        data-react-helmet="true"
        rel="icon"
        href="https://www.bbc.com/pidgin"
      />,
    ];

    expect(removeDataReactHelmetAttribute(linkTags)).toStrictEqual([
      <link rel="canonical" href="https://www.bbc.com/pidgin" />,
      <link rel="icon" href="https://www.bbc.com/pidgin" />,
    ]);
  });

  it('removes data-react-helmet from script tags', () => {
    const scriptTags = [
      <script data-react-helmet="true" type="text/javascript">
        console.log(`Hello World`);
      </script>,
      <script data-react-helmet="true" type="application/ld+json">
        {serialiseForScript({ key: 'value' })}
      </script>,
    ];

    expect(removeDataReactHelmetAttribute(scriptTags)).toStrictEqual([
      <script type="text/javascript">console.log(`Hello World`);</script>,
      <script type="application/ld+json">
        {serialiseForScript({ key: 'value' })}
      </script>,
    ]);
  });

  it('removes data-react-helmet from title tag', () => {
    const title = <title data-react-helmet="true">Title</title>;

    expect(removeDataReactHelmetAttribute(title)).toStrictEqual(
      <title>Title</title>,
    );
  });
});
