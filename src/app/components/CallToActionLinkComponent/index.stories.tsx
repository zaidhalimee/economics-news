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
      <CallToActionLink.Text>Hello</CallToActionLink.Text>
      <CallToActionLink.Chevron />
    </CallToActionLink>
  );
};

export const ExampleChevronInText = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.Text>
        Hello
        <CallToActionLink.Chevron />
      </CallToActionLink.Text>
    </CallToActionLink>
  );
};

export const ExampleWithFlex = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <CallToActionLink.Text>Hello</CallToActionLink.Text>
        <CallToActionLink.Chevron />
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};

export const ExampleWithFlexAndChevronInText = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <CallToActionLink.Text>
          Hello
          <CallToActionLink.Chevron />
        </CallToActionLink.Text>
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};

export const MessageBannerCTA = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <CallToActionLink.Text size="pica" fontVariant="sansBold">
          Hello
          <CallToActionLink.Chevron />
        </CallToActionLink.Text>
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};
export const UploaderEmbedCTA = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.FlexWrapper>
        <CallToActionLink.Text size="pica" fontVariant="sansBold">
          Hello
          <CallToActionLink.Chevron />
        </CallToActionLink.Text>
      </CallToActionLink.FlexWrapper>
    </CallToActionLink>
  );
};
// purposefully removing flex and extra div
export const CanonicalToLiteSiteCTAWithChevron = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.Text size="brevier" fontVariant="sansBold">
        Hello
        <CallToActionLink.Chevron />
      </CallToActionLink.Text>
    </CallToActionLink>
  );
};
export const LiteSiteCTAWithChevron = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.Text size="brevier" fontVariant="sansBold">
        Hello
      </CallToActionLink.Text>
      <CallToActionLink.Chevron />
    </CallToActionLink>
  );
};
export const LiteSiteCTAWitoutChevron = () => {
  return (
    <CallToActionLink to="https://www.bbc.com/ws/languages">
      <CallToActionLink.Text size="brevier" fontVariant="sansRegular">
        Hello
      </CallToActionLink.Text>
    </CallToActionLink>
  );
};
