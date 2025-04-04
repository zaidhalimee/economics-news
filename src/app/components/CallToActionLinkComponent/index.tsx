/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import Chevron from './Chevron';
import FlexWrapper from './FlexWrapper';

type CallToActionLinkProps = {
  to: string;
};

const CallToActionLink = ({
  to,
  children,
}: PropsWithChildren<CallToActionLinkProps>) => {
  return <a href={to}>{children}</a>;
};

CallToActionLink.Chevron = Chevron;
CallToActionLink.FlexWrapper = FlexWrapper;

export default CallToActionLink;
