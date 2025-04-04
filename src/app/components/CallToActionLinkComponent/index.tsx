/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import Link from './Link';
import Chevron from './Chevron';
import FlexWrapper from './FlexWrapper';

const CallToActionLink = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

CallToActionLink.Link = Link;
CallToActionLink.Chevron = Chevron;
CallToActionLink.FlexWrapper = FlexWrapper;

export default CallToActionLink;
