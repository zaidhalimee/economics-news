import React, { PropsWithChildren } from 'react';
import readme from './README.md';
import { CallToActionLinkProps } from './types';
import CallToActionLink from '.';
import Text from '../Text';

const Component = ({
  href,
  children,
}: PropsWithChildren<CallToActionLinkProps>) => (
  <CallToActionLink href={href}>{children}</CallToActionLink>
);

export default {
  title: 'Components/Call To Action Link',
  Component,
  parameters: {
    docs: { readme },
  },
  args: {
    fontVariant: 'sansBold',
  },
  argTypes: {
    fontVariant: {
      control: { type: 'select' },
      options: [
        'sansRegular',
        'sansRegularItalic',
        'sansBold',
        'sansBoldItalic',
        'sansLight',
        'serifRegular',
        'serifMedium',
        'serifMediumItalic',
        'serifBold',
        'serifLight',
      ],
    },
  },
};

export const Example = () => {
  return <Component href="www.bbc.com/afrique">Call To Action</Component>;
};

export const CustomCTALink = ({ fontVariant }: { fontVariant: string }) => {
  return (
    <Component href="www.bbc.com/afrique">
      <Text size="brevier" fontVariant={fontVariant}>
        Custom Font Call To Action
      </Text>
    </Component>
  );
};
