import React, { PropsWithChildren } from 'react';
import readme from './README.md';

import { CallToActionLinkProps } from './types';
import CallToActionLink from '.';

const Component = ({
  href,
  children,
  linkText,
  borderStyleOverride,
}: PropsWithChildren<CallToActionLinkProps>) => (
  <CallToActionLink
    linkText={linkText}
    href={href}
    borderStyleOverride={borderStyleOverride}
  >
    {children}
  </CallToActionLink>
);

export default {
  title: 'Components/Call To Action Link',
  Component,
  parameters: {
    docs: { readme },
  },
};

export const DefaultStyles = () => {
  return <Component href="www.bbc.com/afrique">Call To Action</Component>;
};

export const BottomBorderStyles = () => {
  return (
    <Component
      href="www.bbc.com/afrique"
      borderStyleOverride
      linkText="My Link Text"
    />
  );
};
