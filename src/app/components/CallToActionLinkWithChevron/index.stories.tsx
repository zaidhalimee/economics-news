import React, { PropsWithChildren } from 'react';

import { SerializedStyles } from '@emotion/react';
import CallToActionLink from '.';
import { CallToActionLinkProps } from '../CallToActionLink/types';

const Component = ({
  href,
  children,
}: PropsWithChildren<
  CallToActionLinkProps & { chevronStyles?: () => SerializedStyles }
>) => <CallToActionLink href={href}>{children}</CallToActionLink>;

export default {
  title: 'Components/Call To Action Link With Chevron',
  Component,
};

export const Example = () => {
  return <Component href="www.bbc.com/afrique">Call To Action</Component>;
};
