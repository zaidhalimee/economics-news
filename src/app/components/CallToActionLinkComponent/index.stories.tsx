import React from 'react';

import CallToActionLink from '.';
import Text from '../Text';

export default {
  title: 'Components/Call To Action Link Component',
  parameters: {},
};

export const Example = () => {
  return (
    <CallToActionLink>
      <CallToActionLink.Link to="https://www.bbc.com/ws/languages">
        <Text>Hello</Text>
        <CallToActionLink.Chevron />
      </CallToActionLink.Link>
    </CallToActionLink>
  );
};

export const ExampleChevronInText = () => {
  return (
    <CallToActionLink>
      <CallToActionLink.Link to="https://www.bbc.com/ws/languages">
        <Text>
          Hello
          <CallToActionLink.Chevron />
        </Text>
      </CallToActionLink.Link>
    </CallToActionLink>
  );
};

export const ExampleWithFlex = () => {
  return (
    <CallToActionLink>
      <CallToActionLink.Link to="https://www.bbc.com/ws/languages">
        <CallToActionLink.FlexWrapper>
          <Text>Hello</Text>
          <CallToActionLink.Chevron />
        </CallToActionLink.FlexWrapper>
      </CallToActionLink.Link>
    </CallToActionLink>
  );
};

export const ExampleWithFlexAndChevronInText = () => {
  return (
    <CallToActionLink>
      <CallToActionLink.Link to="https://www.bbc.com/ws/languages">
        <CallToActionLink.FlexWrapper>
          <Text>
            Hello
            <CallToActionLink.Chevron />
          </Text>
        </CallToActionLink.FlexWrapper>
      </CallToActionLink.Link>
    </CallToActionLink>
  );
};
