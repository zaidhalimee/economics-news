import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import InlineLinkContainer from '.';
import { ServiceContextProvider } from '../../contexts/ServiceContext';

// const InternalInlineLink = (locator, blocks, isExternal) => {
//   <InlineLinkContainer
//     locator={locator}
//     blocks={blocks}
//     isExternal={isExternal}
//   />;
// };

const fragmentBlock = (text, attributes = []) => ({
  type: 'fragment',
  model: {
    text,
    attributes,
  },
});

storiesOf('InlineLink', module)
  .add('internal link', () => (
    <InlineLinkContainer
      locator="https://www.bbc.com/news"
      blocks={[fragmentBlock('This is an internal link', [])]}
      isExternal={false}
    />
  ))
  .add('internal link bold', () => (
    <InlineLinkContainer
      locator="https://www.bbc.com/news"
      blocks={[
        fragmentBlock('This is an internal link which is bold', ['bold']),
      ]}
      isExternal={false}
    />
  ))
  .add('internal link italic', () => (
    <InlineLinkContainer
      locator="https://www.bbc.com/news"
      blocks={[
        fragmentBlock('This is an internal link which is italic', ['italic']),
      ]}
      isExternal={false}
    />
  ))
  .add('internal link bold & italic', () => (
    <InlineLinkContainer
      locator="https://www.bbc.com/news"
      blocks={[
        fragmentBlock('This is an internal link which is bold & italic', [
          'bold',
          'italic',
        ]),
      ]}
      isExternal={false}
    />
  ))
  .add('external link - English offscreen text', () => (
    <ServiceContextProvider service="news">
      <InlineLinkContainer
        locator="https://www.example.com/"
        blocks={[fragmentBlock('This is an external link', [])]}
        isExternal
      />
    </ServiceContextProvider>
  ))
  .add('external link - Persian offscreen text', () => (
    <ServiceContextProvider service="persian">
      <InlineLinkContainer
        locator="https://www.example.com/"
        blocks={[fragmentBlock('این لینک هست', [''])]}
        isExternal
      />
    </ServiceContextProvider>
  ));
