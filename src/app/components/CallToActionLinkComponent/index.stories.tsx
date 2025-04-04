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

export const ExampleCallToActionLink = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <Text size="pica" fontVariant="sansBold">
          Hello
          <CallToActionLink.Chevron />
        </Text>
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};
export const ExampleCallToActionLinkWithChevron = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <Text size="brevier" fontVariant="sansBold">
          Hello
          <CallToActionLink.Chevron />
        </Text>
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};
export const ExampleCallToActionLiteSiteCTAWithChevron = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <Text size="brevier" fontVariant="sansBold">
        Hello
      </Text>
      <CallToActionLink.Chevron />
    </CallToActionLink>
  );
};
export const ExampleCallToActionLiteSiteCTAWitoutChevron = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <Text size="brevier" fontVariant="sansRegular">
        Hello
      </Text>
      <CallToActionLink.Chevron />
    </CallToActionLink>
  );
};
