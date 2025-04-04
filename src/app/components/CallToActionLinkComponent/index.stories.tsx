import React from 'react';

import CallToActionLink from '.';
import Text from '../Text';

export default {
  title: 'Components/Call To Action Link Component',
  parameters: {},
};

export const Example = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <Text>Hello</Text>
      <CallToActionLink.Chevron />
    </CallToActionLink>
  );
};

export const ExampleChevronInText = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <Text>
        Hello
        <CallToActionLink.Chevron />
      </Text>
    </CallToActionLink>
  );
};

export const ExampleWithFlex = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <Text>Hello</Text>
        <CallToActionLink.Chevron />
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};

export const ExampleWithFlexAndChevronInText = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <Text>
          Hello
          <CallToActionLink.Chevron />
        </Text>
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};
